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
            [ring.util.http-response :refer [bad-request! internal-server-error!]]))

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
  [received expected]
  (when (and expected (s/invalid? (s/conform expected received)))
    (bad-request! (s/explain-str expected received)))
  received)

(defn validate-result
  [returns result]
  (when (and returns (s/invalid? (s/conform returns result)))
    (internal-server-error! (s/explain-str returns result)))
  (or result {:status :success}))

(defn validate-spec
  [service endpoints]
  (when-not (every? (set (map (comp keyword :endpoint-name) endpoints)) (keys service))
    (throw (ex-info "Spec only partially defined"
           {:spec service}))))

(defn assert-arglist-length
  [arglists]
  (when-not (empty? arglists)
    (apply min (map count arglists))))

(defn wrap-endpoint
  [arg-count {:keys [params cookies]} expected-params endpoint]
  (if (zero? arg-count)
    (endpoint)
    (-> params
        (validate-params expected-params)
        (assoc :_cookies cookies)
        endpoint)))

(defn create-endpoint
  [{:keys [endpoint-name method params returns endpoint]}]
  (let [arg-count (assert-arglist-length (:arglists (meta (resolve endpoint))))]
    `(~(method->fn method) ~(str "/" endpoint-name) []
                 (fn [req#]
                   (validate-result ~returns (wrap-endpoint ~arg-count req# ~params ~endpoint))))))

(defn extract-defn
  [service api-fun]
  (let [fname (eval (name api-fun))
        spec (service (keyword fname))]
    (assoc spec
           :endpoint-name fname
           :endpoint api-fun)))

(defmacro def-service [service-name spells & defns]
  (let [service ((eval spells) (keyword service-name))
        specs (map (partial extract-defn service) defns)
        endpoints (map create-endpoint specs)]
    (validate-spec service specs)
    `(def ~service-name
       (context ~(str "/" service-name) []
                ~@endpoints))))

; ------------------------------------- TESTS

(def email-regex #"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$")
(s/def ::email (s/and string? #(re-matches email-regex %)))
(s/def ::name string?)
(s/def ::thing (s/keys :req-un [::name ::email]))

(def spec
  {:things {:get-things {:method :GET
                        :returns (s/* ::thing)}
            :new-thing {:method :POST
                       :params ::thing}}})

(defn get-things
  []
  [{:email "lukeluke.com" :name "luke"}])

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


