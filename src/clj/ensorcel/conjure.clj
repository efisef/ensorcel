(ns ensorcel.conjure
  (:require [clojure.spec.alpha :as s]
            [ring.util.http-response :refer [bad-request! internal-server-error!]]
            [compojure.core :refer [GET POST DELETE context]]))

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

