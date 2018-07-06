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
          opts (cond-> {} (map? body) (assoc :json-params body))]
      ((case method
        :GET http/get
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
  [args]
  (if-not args
    (constantly nil)
    (fn [body]
      (if-let [err (s/check args body)]
          (throw (ex-info "Params do not conform to schema" {:schema args :params body :err err}))
          body))))

(defn endpoint
  [base-url {:keys [path method args returns] :as spec}]
  {:schema returns
   :call (assemble-call
           (path-fn base-url (sb/correct-path path))
           (body-fn args)
           method)})

(defn wrap
  [endpoints]
  (fn [endpoint & args]
    (let [{:keys [call schema]} (endpoints endpoint)]
      {:schema schema
       :call (if (seq args)
               #(call (first args))
               call)})))

(defn client
  "Create a REST client for a particular service from a spellbook"
  [{services :services :as spellbook} service-name]
  (validate! spellbook)
  (when-not (services service-name)
    (throw (ex-info "Service does not exist in spellbook" {:service service-name
                                                           :listed-services (keys services)})))
  (let [{:keys [path endpoints] :as service} (services service-name)
        base-url (str "http://localhost:8080/api/" path)]
    (wrap (into {} (map (fn [[k v]] [k (endpoint base-url v)]) endpoints)))))

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

(defn call->
  "Calls the endpoint, and if the response is successful, passes the parsed
  response through to the supplied functions one after the other"
  [{call :call schema :schema} & thens]
  (go (let [response (<! (call))]
        (if (:success response)
          (reduce (fn [acc f] (f acc)) (coerce schema (:body response)) thens)
          (throw (ex-info "Uncaught exception in call" response))))))
