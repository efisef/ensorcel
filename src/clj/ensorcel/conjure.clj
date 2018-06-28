(ns ensorcel.conjure
  (:require [clojure.spec.alpha :as s]
            [clojure.string :as string]
            [ring.util.http-response :refer [ok bad-request! internal-server-error!]]))

(defn validate-params
  [received expected]
  (when (and expected (s/invalid? (s/conform expected received)))
    (bad-request! (s/explain-str expected received)))
  received)

(defn validate-result
  [result returns]
  (when (and returns (s/invalid? (s/conform returns result)))
    (internal-server-error! (s/explain-str returns result)))
  (or result {:status :success}))

(defn wrap-endpoint
  [{:keys [params method returns response] :or {response ok}} f]
  (fn [req]
    (-> req
        :params
        (validate-params params)
        (assoc :_cookies (:cookies params))
        f
        (validate-result returns)
        response)))

(defn endpoint
  [impls [endpoint spec]]
  (when-not (impls endpoint)
    (throw (ex-info "Spec only partially defined" {:missing endpoint})))
  (let [impl (impls endpoint)]
    [(:path spec) (wrap-endpoint spec impl)]))

(defn service
  [{:keys [path endpoints]} & impls]
  (let [endpoint-impls (apply hash-map impls)
        endpoints (into {} (map (partial endpoint endpoint-impls) endpoints))]
    {(str path "/") endpoints}))
