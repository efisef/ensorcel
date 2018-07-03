(ns ensorcel.conjure
  (:require [schema.core :as s]
            [clojure.string :as string]
            [clojure.data.json :as json]
            [ring.util.http-response :refer [ok bad-request! internal-server-error!]]
            [ensorcel.spellbook :refer [validate!]]))

(defn validate
  [received expected raise!]
  (when (and expected (s/check expected received))
    (raise! (s/check expected received)))
  received)

(defn arg-count [f]
  {:pre [(instance? clojure.lang.AFunction f)]}
  (-> f class .getDeclaredMethods first .getParameterTypes alength))

(defn wrap-endpoint
  [{:keys [params method returns response] :or {response ok}} f]
  (fn [req]
    (let [args (arg-count f)
          input (merge (:params req) (:body req))
          params (validate input params bad-request!)
          opts (select-keys req [:cookies])]
      (-> (cond (zero? args)  (f)
                (= 1 args)    (f params)
                :else         (f params opts))
        (validate returns internal-server-error!)
        response))))

(defn endpoint
  [impls [endpoint spec]]
  (when-not (impls endpoint)
    (throw (ex-info "Spec only partially defined" {:missing endpoint})))
  (let [impl (impls endpoint)]
    [(:path spec) (wrap-endpoint spec impl)]))

(defn service
  [spellbook service-name & impls]
  (validate! spellbook)
  (let [{:keys [path endpoints]} (spellbook service-name)
        endpoint-impls (apply hash-map impls)
        endpoints (into {} (map (partial endpoint endpoint-impls) endpoints))]
    {(str path "/") endpoints}))
