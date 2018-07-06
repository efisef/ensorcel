(ns ensorcel.conjure
  (:require [bidi.ring :refer [make-handler]]
            [clojure.data.json :as json]
            [clojure.string :as string]
            [org.httpkit.server :as server]
            [ring.middleware.cors :refer  [wrap-cors]]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.http-response :refer [wrap-http-response]]
            [ring.middleware.json :refer [wrap-json-params wrap-json-body wrap-json-response]]
            [ring.util.http-response :refer [ok bad-request! internal-server-error!]]
            [ring.util.response :as response]
            [schema.core :as s]
            [ensorcel.spellbook :refer [validate!] :as sb]))

; ------------------------------ BIDI ROUTE CONSTRUCTION ----------------------

(defn validate
  "Validates that a received payload matches the expected schema.
  Raises <raise!> if not."
  [received expected raise!]
  (when (and expected (s/check expected received))
    (raise! (s/check expected received)))
  received)

(defn arg-count [f]
  "Calculates the argument count to <f> by using reflection."
  {:pre [(instance? clojure.lang.AFunction f)]}
  (-> f class .getDeclaredMethods first .getParameterTypes alength))

(defn wrap-endpoint
  "Wraps a given endpoint implementation in the gubbins for a ring request
  Different outcomes for different arity implementions:
    0 arity -> just calls the function
    1 arity -> provides a parameter map from the request body and url
    2 arity -> provides a parameter map and an options map containing things like cookies etc.
  Also validates that the inputs and outputs match the specification in the spellbook"
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
  "Creates a bidi endpoint from the given impls and an endpoint specification"
  [impls [endpoint spec]]
  (when-not (impls endpoint)
    (throw (ex-info "Spec only partially defined" {:missing endpoint})))
  (let [impl (impls endpoint)]
    [(sb/correct-path (:path spec)) (wrap-endpoint spec impl)]))

(defn service
  "Creates a bidi service from the given impls and spellbook"
  [spellbook service-name & impls]
  (validate! spellbook)
  (let [{:keys [path endpoints]} (spellbook service-name)
        endpoint-impls (apply hash-map impls)
        endpoints (into {} (map (partial endpoint endpoint-impls) endpoints))]
    {(str path "/") endpoints}))

; ------------------------------- DEFAULT ENDPOINTS -------------------------

(def default-spellbook
  {:services {:ping {:path "ping"
                     :endpoints {:ping {:path ""
                                        :method :GET
                                        :returns s/Str}}}
              :version {:path "version"
                        :endpoints {:ping {:path ""
                                           :method :GET
                                           :returns s/Str}}}}})

(defn ping-service
  "ping ping ping ping"
  []
  (service default-spellbook :ping
           :ping (fn [] "pong")))

(defn version-service
  "version version version version"
  [{version :version}]
  (service default-spellbook :version
           :version (fn [] version)))

; ------------------------------ APP ----------------------------------------

(defn root
  [services]
  ["/" {"api/" (apply merge services)}])

(defn app
  "Creates a full ring application with default wrappers given a spellbook and conjured services"
  [spellbook & services]
  (sb/validate! spellbook)
  (let [full-services (conj services (ping-service) (version-service spellbook))]
    (-> (make-handler (root full-services))
        (wrap-defaults (assoc api-defaults
                              :params {:keywordize true}
                              :cookies true))
        (wrap-json-body {:keywords? true :bigdecimals? true})
        wrap-json-response
        wrap-http-response)))
