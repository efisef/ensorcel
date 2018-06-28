(ns ensorcel.core
  (:require [cljs.spec.alpha :as s]
            [ensorcel.conjure :as conjure :refer [call->]]))

(enable-console-print!)

(defn on-js-reload
  [])

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

(def things-client (conjure/client spec :things))

(call-> (things-client :get-things)
        println)
(call-> (things-client :get-thing {:id "miau"})
        println)
(call-> (things-client :new-thing {:name "luke" :email "luke@luke.com"})
        println)
