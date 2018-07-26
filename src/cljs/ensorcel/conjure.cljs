(ns ensorcel.conjure
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [clojure.string :as string]
            [schema.core :as s]
            [schema.coerce :as c]
            [ensorcel.spellbook :refer [validate!] :as sb]))

(defn assemble-call
  [path-fn body-fn method]
  (fn [& params]
    (let [params (if (seq params) (first params) {})
          body (body-fn params)
          opts (cond-> {} (and (seq body) (map? body)) (assoc :json-params body))]
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

(defn path-fn
  [base-path path]
  (if (vector? path)
    #(str base-path "/" (apply str (format-path % path)))
    (constantly (str base-path "/" path))))

(defn body-fn
  [path args]
  (let [path-args (filter keyword? path)]
    (if-not args
      (constantly nil)
      (fn [body]
        (if-let [err (s/check args body)]
            (throw (ex-info "Params do not conform to schema" {:schema args :params body :err err}))
            (apply dissoc body path-args))))))

(defn endpoint
  [base-url {:keys [path method args returns] :as spec}]
  {:schema returns
   :call (assemble-call
           (path-fn base-url (sb/correct-path path))
           (body-fn path args)
           method)})

(defn version-endpoint
  [host port]
  (let [path (str "http://" host ":" port "/api/version")]
    (endpoint path (get-in sb/default-spellbook [:services :version :endpoints :version]))))

(defn ping-endpoint
  [host port]
  (let [path (str "http://" host ":" port "/api/ping")]
    (endpoint path (get-in sb/default-spellbook [:services :ping :endpoints :ping]))))

(defn wrap
  [endpoints]
  (fn [endpoint & args]
    (let [{:keys [call schema] :as e} (endpoints endpoint)]
      (when-not e
        (throw (ex-info "Endpoint does not exist in service" {:endpoint endpoint})))
      {:schema schema
       :call (if (seq args)
               #(call (apply hash-map args))
               call)})))

(defn client
  "Create a REST client for a particular service from a spellbook"
  [{services :services :as spellbook} service-name & opts]
  (validate! spellbook)
  (when-not (services service-name)
    (throw (ex-info "Service does not exist in spellbook" {:service service-name
                                                           :listed-services (keys services)})))
  (let [{:keys [host port] :or {host "localhost" port 8080}} (apply hash-map opts)
        {:keys [path endpoints] :as service} (services service-name)
        base-url (str "http://" host ":" port "/api/" path)
        endpoints (into {} (map (fn [[k v]] [k (endpoint base-url v)]) endpoints))]
    (wrap (assoc endpoints
                 :version (version-endpoint host port)
                 :ping    (ping-endpoint host port)))))

(def coercions
 {s/Keyword keyword
  s/Bool #(= "true" (string/lower-case %))
  s/Int #(js/parseInt %)})

(defn parse
  [schema result]
  ((or (coercions schema) identity) result))

(defn coerce
  [schema result]
  (if (coll? result)
    (let [coercer (c/coercer schema c/json-coercion-matcher)]
      (cond-> result
        (some? schema) coercer))
    (parse schema result)))

(defn extract
  [schema response]
  (if (:success response)
    (reduce (fn [acc f] (f acc)) (coerce schema (:body response)) thens)
    (throw (ex-info "Uncaught exception in call" response))))

(defn call->
  "Calls the endpoint, and if the response is successful, passes the parsed
  response through to the supplied functions one after the other"
  [{call :call schema :schema} & thens]
  (go (extract schema (<! (call)))))
