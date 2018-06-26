(ns ensorcel.conjure
  (:require [clojure.spec.alpha :as s]
            [clojure.data.json :as json]
            [compojure.core :refer [GET POST DELETE context]]
            [compojure.core :refer [defroutes context wrap-routes]]
            [compojure.response :refer [Renderable]]
            [compojure.route :as route]
            [org.httpkit.server :as server]
            [ring.util.response :as response]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.http-response :refer [wrap-http-response]]
            [ring.middleware.json :refer [wrap-json-params wrap-json-response]]
            [ring.util.http-response :refer [bad-request!]]))

(extend-protocol Renderable
  clojure.lang.APersistentMap
  (render [body _]
    (-> (response/response (json/write-str body))
        (response/content-type "application/json")))
  clojure.lang.PersistentVector
  (render [body _]
    (-> (response/response (json/write-str body))
        (response/content-type "application/json")))
  clojure.lang.PersistentList
  (render [body _]
    (-> (response/response (json/write-str body))
        (response/content-type "application/json")))
  clojure.lang.LazySeq
  (render [body _]
    (-> (response/response (json/write-str body))
        (response/content-type "application/json")))
  clojure.lang.ArraySeq
  (render [body _]
    (-> (response/response (json/write-str body))
        (response/content-type "application/json"))))

(def method->fn
  {:GET 'GET
   :POST 'POST})

(defn validate-params
  [expected received]
  (when-let [err (and expected (s/explain-str expected received))]
    (println expected received)
    (bad-request! err)))

(defn assert-arglist-length
  [arglists]
  (when-not (empty? arglists)
    (apply min (map count arglists))))

(defn wrap-endpoint
  [arg-count {:keys [params cookies]} expected-params endpoint]
  (if (zero? arg-count)
    (endpoint)
    (do (validate-params expected-params params)
        (endpoint (assoc params :_cookies cookies)))))

(defn create-endpoint
  [{:keys [endpoint-name method params returns endpoint]}]
  (let [arg-count (assert-arglist-length (:arglists (meta (resolve endpoint))))]
    `(~(method->fn method) ~(str "/" endpoint-name) []
                 (fn [req#] (wrap-endpoint ~arg-count req# ~params ~endpoint)))))

(defmacro create-service
  [service-name endpoint-specs]
  (let [endpoints (map create-endpoint endpoint-specs)]
    `(context ~(str "/" service-name) []
              ~@endpoints)))

(defn extract-defn
  [service api-fun]
  (let [fname (eval (name api-fun))
        spec (service (keyword fname))]
    (assoc spec
           :endpoint-name fname
           :endpoint api-fun)))

(defmacro def-service [service-name spells & defns]
  (let [service ((eval spells) (keyword service-name))
        endpoints (map (comp create-endpoint (partial extract-defn service)) defns)]
    `(def ~service-name
       (context ~(str "/" service-name) []
                ~@endpoints))))

; ------------------------------------- TESTS

(def email-regex #"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$")
(s/def ::email (s/and string? #(re-matches email-regex %)))
(s/def ::name string?)
(s/def ::thing (s/keys :req [::name ::email]))

(def spec
  {:things {:get-things {:method :GET
                        :returns (s/* ::thing)}
            :new-thing {:method :POST
                       :params ::thing}}})

(defn get-things
  []
  (println "Getting things!")
  [{:email "luke@luke.com" :name "luke"}])

(defn new-thing
  [{:keys [email name]}]
  (println "Trying to make a new" name "at" email))

(def-service things spec
  get-things
  new-thing)

(defroutes all-routes
  (context "/api" []
			things
      (route/not-found "oh no")))

(def app (-> #'all-routes
             (wrap-defaults (assoc api-defaults
                                   :params {:multipart true
                                            :keywordize true}
                                   :cookies true))
             wrap-json-params
             wrap-json-response
             wrap-http-response))


