(ns ensorcel.conjure
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cljs.spec.alpha :as s :include-macros true]
            [clojure.string :as string]
            [ensorcel.types :as types]
            [ensorcel.spellbook :refer [validate!] :as sb]))

(defn assemble-call
  [path-fn body-fn method]
  (fn [params headers]
    (let [params (or params {})
          body (body-fn params)
          opts (cond-> {}
                 (and (seq body) (map? body)) (assoc :json-params body)
                 (some? headers) (assoc :headers headers))]
      ((case method
        :GET http/get
        :PUT http/put
        :DELETE http/delete
        :POST http/post) (path-fn params) opts))))

(defn urlify
  [value]
  (cond
    (keyword? value) (name value)
    :else value))

(defn format-path
  [values [f & fragments]]
  (if (nil? f)
    []
    (cons (if (string? f)
            f
            (if-let [sub (values f)]
              (urlify sub)
              (throw (ex-info "Params do not conform to spec" {:params values :missing f}))))
          (format-path values fragments))))

(defn query-fn
  [query-args args]
  (string/join "&" (map #(str (name %) "=" (args %)) (filter args query-args))))

(defn path-fn
  [base-path path query-args]
  (let [query #(when (seq (filter % query-args)) (str "?" (query-fn query-args %)))]
    (if (vector? path)
      #(str base-path "/" (apply str (format-path % path)) (query %))
      #(str base-path "/" path (query %)))))

(defn body-fn
  [path query-args args]
  (let [path-args (filter keyword? path)]
    (if-not args
      (constantly nil)
      (fn [body]
        (if (s/invalid? (s/conform args body))
            (throw (ex-info "Spec check failed" (s/explain-data args body)))
            (apply dissoc body (concat path-args query-args)))))))

(defn endpoint
  [base-url {:keys [path method args query returns] :as spec}]
  {:spec returns
   :call (assemble-call
           (path-fn base-url (sb/correct-path path) query)
           (body-fn path query args)
           method)})

(defn version-endpoint
  [host port version-str]
  (let [path (str "http://" host ":" port "/api/" version-str "version")]
    (endpoint path (get-in sb/default-spellbook [:services :version :endpoints :version]))))

(defn ping-endpoint
  [host port version-str]
  (let [path (str "http://" host ":" port "/api/" version-str "ping")]
    (endpoint path (get-in sb/default-spellbook [:services :ping :endpoints :ping]))))

(defn wrap
  [endpoints]
  (fn [endpoint & args]
    (let [{:keys [call spec] :as e} (endpoints endpoint)
          args (when (seq args) (apply hash-map args))]
      (when-not e
        (throw (ex-info "Endpoint does not exist in service" {:endpoint endpoint})))
      {:spec spec
       :args args
       :call-fn call
       :endpoint endpoint})))

(defn client
  "Create a REST client for a particular service from a spellbook"
  [{services :services :as spellbook} service-name & opts]
  (validate! spellbook)
  (when-not (services service-name)
    (throw (ex-info "Service does not exist in spellbook" {:service service-name
                                                           :listed-services (keys services)})))
  (let [opts (apply hash-map opts)
        {:keys [host port] :or {host "localhost" port 8080}} opts
        {:keys [path endpoints] :as service} (services service-name)
        version-str (when (:include-version? opts) (str (:version spellbook) "/"))
        base-url (str "http://" host ":" port "/api/" version-str path)
        endpoints (into {} (map (fn [[k v]] [k (endpoint base-url v)]) endpoints))]
    (wrap (assoc endpoints
                 :version (version-endpoint host port version-str)
                 :ping    (ping-endpoint host port version-str)))))

(defn inject-token
  [token client]
  (fn [endpoint & args]
    (let [construct (apply client endpoint args)]
      (update construct :headers assoc "Authorization" (str "Token " token)))))

(defn extract
  [spec thens response]
  (if (:success response)
    (reduce (fn [acc f] (f acc)) (types/coerce-json spec (:body response)) thens)
    (throw (ex-info "Uncaught exception in call" response))))

(defn call->
  "Calls the endpoint, and if the response is successful, passes the parsed
  response through to the supplied functions one after the other"
  [{call-fn :call-fn args :args headers :headers spec :spec} & thens]
  (go (extract spec thens (<! (call-fn args headers)))))
