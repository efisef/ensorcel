(ns ensorcel.conjure
  (:require [bidi.ring :refer [make-handler]]
            [clojure.edn :as edn]
            [clojure.data.json :as json]
            [clojure.string :as string]
            [clojure.spec.alpha :as s]
            [spec-tools.core :as st]
            [org.httpkit.server :as server]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.http-response :refer [wrap-http-response]]
            [ring.util.http-response :refer [ok bad-request! internal-server-error! method-not-allowed!]]
            [ring.util.response :as response]
            [ensorcel.ring :as ring]
            [ensorcel.types :as types]
            [ensorcel.spellbook :refer [validate!] :as sb]))

;; -- BIDI ROUTE CONSTRUCTION -------------------------------------------------

(defn validate
  "Validates that a received payload matches the expected schema.
  Raises <raise!> if not."
  [received expected raise!]
  (when (and expected (s/invalid? (s/conform expected received)))
    (raise! {:received (pr-str received)
             :check (s/explain-str expected received)}))
  (if expected
    (st/decode expected received st/strip-extra-keys-transformer)
    received))

(defn arg-count [f]
  "Calculates the argument count to <f> by using reflection."
  {:pre [(instance? clojure.lang.AFunction f)]}
  (-> f class .getDeclaredMethods first .getParameterTypes alength))

(defn construct-input
  "Given a request and an input spec, coerces the components to the correct types
  and then validates that everything looks as expected."
  [{:keys [params body]} input-spec]
  (let [coerced-input (cond->> (merge params body)
                        input-spec (types/coerce input-spec))]
    (validate coerced-input input-spec bad-request!)))

(defn stringify
  [response x]
  (cond-> x (and (not (coll? x)) (not (= ::types/bytes response))) str))

(defn wrap-endpoint
  "Wraps a given endpoint implementation in the gubbins for a ring request
  Different outcomes for different arity implementions:
    0 arity -> just calls the function
    1 arity -> provides a parameter map from the request body and url
    2 arity -> provides a parameter map and an options map containing things like cookies etc.
  Also validates that the inputs and outputs match the specification in the spellbook"
  [{:keys [args returns response headers] :or {response ok}} f]
  (fn [req]
    (let [num-args (arg-count f)
          input (construct-input req args)]
      (-> (cond (zero? num-args)  (f)
                (= 1 num-args)    (f input)
                :else             (f input req))
          (validate returns internal-server-error!)
          (stringify response)
          response
          (update :headers merge headers)))))

(defn correct-method
  "Makes a method keyword bidi-compliant"
  [method]
  (keyword (string/lower-case (name method))))

(defn construct-options
  "Creates all required options for given paths and methods"
  [endpoints]
  (let [paths (group-by :path (map (fn [[k v]] (select-keys v [:path :method])) endpoints))]
    (map (fn [[path endpoints]]
           {:path (sb/correct-path path)
            :endpoint (constantly {:status 200
                                   :body {}
                                   :headers {"Allow" (conj (map (comp name :method) endpoints) "OPTIONS")}})
            :method :OPTIONS})
         paths)))

(defn endpoint
  "Creates a bidi endpoint from the given impls and an endpoint specification"
  [impls [endpoint {:keys [path method] :as spec}]]
  (when-not (impls endpoint)
    (throw (ex-info "Spec only partially defined" {:missing endpoint})))
  (let [impl (impls endpoint)]
    {:method method
     :path (sb/correct-path path)
     :endpoint (wrap-endpoint spec impl)}))

(defn correct-method
  [method]
  (keyword (string/upper-case (name method))))

(defn method-dispatch
  [[path endpoints]]
  (let [method->endpoint (into {} (map #(vector (:method %) (:endpoint %)) endpoints))]
    [path (fn [{:keys [request-method] :as req}]
            (let [endpoint (method->endpoint (correct-method request-method))]
              (when-not endpoint
                (method-not-allowed!))
              (endpoint req)))]))

(defn service
  "Creates a bidi service from the given impls and spellbook"
  [{services :services :as spellbook} service-name & impls]
  (validate! spellbook)
  (when-not (services service-name)
    (throw (ex-info "Service does not exist in spellbook" {:service service-name
                                                           :listed-services (keys services)})))
  (let [{:keys [path endpoints]} (services service-name)
        endpoint-impls (apply hash-map impls)
        options (construct-options endpoints)
        endpoints (map (partial endpoint endpoint-impls) endpoints)
        endpoints (map method-dispatch (group-by :path (concat options endpoints)))]
    {(str path "/") endpoints}))

;; -- DEFAULT ENDPOINTS -------------------------------------------------------

(defn ping-service
  "ping ping ping ping"
  []
  (service sb/default-spellbook :ping
           :ping (fn [] "pong")))

(defn version-service
  "version version version version"
  [{version :version}]
  (service sb/default-spellbook :version
           :version (fn [] version)))

;; -- APP ---------------------------------------------------------------------

(defn root
  [{version :version} {:keys [include-version?]} services]
  (let [api (cond-> "api/" include-version? (str version "/"))]
    ["/" {api (apply merge services)}]))

(def default-opts
  {:include-version? false})

(defn app
  "Creates a full ring application with default wrappers given a spellbook and conjured services"
  [spellbook opts & services]
  (sb/validate! spellbook)
  (let [opts (merge default-opts opts)
        full-services (conj services (ping-service) (version-service spellbook))
        routes (root spellbook opts full-services)]
    (-> (make-handler routes)
        wrap-http-response
        ring/wrap-edn-body
        ring/wrap-edn-response
        (wrap-defaults (assoc api-defaults
                              :params {:keywordize true
                                       :urlencoded true}
                              :cookies true)))))
