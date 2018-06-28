(ns ensorcel.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cljs.spec.alpha :as s]
            [spec-tools.core :as st]
            [clojure.string :as string]
            [clojure.browser.repl :as repl]))

(enable-console-print!)

(defn on-js-reload
  [])

(repl/connect "http://localhost:9000/repl")

(def email-regex #"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$")
(s/def ::email (s/and string? #(re-matches email-regex %)))
(s/def ::name string?)
(s/def ::thing (s/keys :req-un [::name ::email]))

(def spec
  {:things {:path "things"
            :endpoints {:get-things {:path "get-things"
                                     :method :GET
                                     :returns (s/* ::thing)}
                        :get-thing  {:path ["get-thing/" :id]
                                     :method :GET
                                     :returns ::thing}
                        :new-thing  {:path "new-thing"
                                     :method :POST
                                     :params ::thing}}}})

; usage (def client (ensorcel/conjure spec :things))
; (client :get-things)
; (client :new-thing my-thing)
; (>> (client :new-thing my-thing)
;     do-something
;     something-else)

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

(defn conjure
  [spellbook service-name]
  (let [{:keys [path endpoints] :as service} (spellbook service-name)
        base-url (str "http://localhost:3000/api/" path)]
    (wrap (into {} (map (fn [[k v]] [k (endpoint base-url v)]) endpoints)))))

(defn call->
  [call & thens]
  (go (let [response (:body (<! (call)))]
        (reduce (fn [acc f] (f acc)) response thens))))

(call-> ((conjure spec :things) :get-things)
        println)
(call-> ((conjure spec :things) :get-thing {:id "miau"})
        println)
(call-> ((conjure spec :things) :new-thing {:name "luke" :email "luke@luke.com"})
        println)
