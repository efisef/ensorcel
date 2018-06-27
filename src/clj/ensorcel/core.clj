(ns ensorcel.core
  (:require [clojure.spec.alpha :as s]
            [ensorcel.conjure :as conjure]
            [ensorcel.server :as server]))

(def email-regex #"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$")
(s/def ::email (s/and string? #(re-matches email-regex %)))
(s/def ::name string?)
(s/def ::thing (s/keys :req-un [::name ::email]))

(def spec
  {:things {:get-things {:method :GET
                        :returns (s/* ::thing)}
            :new-thing {:method :POST
                       :params ::thing}}})

(defn get-things
  []
  [{:email "lukeluke.com" :name "luke"}])

(defn new-thing
  [{:keys [email name]}]
  (println "Trying to make a new" name "at" email))

(conjure/def-service things spec
  get-things
  new-thing)

(server/def-app my-app
  things)
