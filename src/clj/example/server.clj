(ns example.server
  (:require [org.httpkit.server :refer [run-server]]
            [ensorcel.conjure :as c]
            [example.api :as api]))

(defn endpoint2
  [{x :operand}]
  (inc x))

(defn endpoint3
  [{:keys [thing thang]}]
  (str thing thang))

(defn endpoint4
  [{:keys [map thing operand]} {cookies :cookies}]
  (println cookies)
  (update map thing (partial + operand)))

(def service1
  (c/service api/spellbook :example
             :example-get (fn [] "hello, world!")
             :plus1 endpoint2
             :combine endpoint3
             :add endpoint4))

(def example-app
  (c/app api/spellbook
         service1))

(defn make-rocket-go-now
  []
  (run-server example-app {:port 8080}))
