(ns ensorcel.core
  (:require [clojure.spec.alpha :as s]
            [org.httpkit.server :refer [run-server]]
            [ensorcel.conjure :as conjure]
            [ensorcel.server :as server]
            [ring.util.http-response :refer [created]]))

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
                                     :response created
                                     :params ::thing}}}})

(defn get-things
  [_]
  [{:email "luke@luke.com" :name "luke"}])

(defn get-thing
  [{:keys [id]}]
  {:email "luke@luke.com" :name id})

(defn new-thing
  [{:keys [email name]}]
  (println "Trying to make a new" name "at" email)
  name)

(def service (conjure/service (:things spec)
                              :get-thing get-thing
                              :get-things get-things
                              :new-thing new-thing))

(def app (server/app service))
