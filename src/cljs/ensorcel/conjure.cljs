(ns ensorcel.conjure
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cljs.spec.alpha :as s]
            [spec-tools.core :as st]
            [clojure.string :as string]
            [ensorcel.spellbook :refer [validate]]))

(defn assemble-call
  [path-fn body-fn method]
  (fn [& params]
    (let [params (if (seq params) (first params) {})
          body (body-fn params)
          opts (cond-> {} (map? body) (assoc :json-params body))]
      ((case method
        :GET http/get
        :POST http/post) (path-fn params) opts))))

(defn format-path
  [values [f & fragments]]
  (if (nil? f)
    []
    (cons (if (string? f)
            f
            (if-let [sub (values f)]
              sub
              (throw (ex-info "Params do not conform to spec" {:params values :missing f}))))
          (format-path values fragments))))

(defn path-fn
  [base-path path]
  (if (vector? path)
    #(str base-path "/" (apply str (format-path % path)))
    (constantly (str base-path "/" path))))

(defn body-fn
  [params]
  (if-not params
    (constantly nil)
    (fn [body]
      (let [conform (st/conform params body st/strip-extra-keys-transformer)]
        (if (s/invalid? conform)
          (throw (ex-info "Params do not conform to spec" {:spec params :params body}))
          conform)))))

(defn endpoint
  [base-url {:keys [path method params] :as spec}]
  (assemble-call
    (path-fn base-url path)
    (body-fn params)
    method))

(defn wrap
  [endpoints]
  (fn [endpoint & args]
    (if (seq args)
      #((endpoints endpoint) (first args))
      (endpoints endpoint))))

(defn client
  [spellbook service-name]
  (when-not (validate spellbook)
    (throw (ex-info "Provided spellbook is invalid" {:provided spellbook})))
  (let [{:keys [path endpoints] :as service} (spellbook service-name)
        base-url (str "http://localhost:3000/api/" path)]
    (wrap (into {} (map (fn [[k v]] [k (endpoint base-url v)]) endpoints)))))

(defn call->
  [call & thens]
  (go (let [response (:body (<! (call)))]
        (reduce (fn [acc f] (f acc)) response thens))))
