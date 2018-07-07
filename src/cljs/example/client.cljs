(ns example.client
  (:require [example.api :as api]
            [ensorcel.conjure :refer [call->] :as c]))

(enable-console-print!)

(defn on-js-reload
  [])

(def example-client
  (c/client api/spellbook :example
            :host "localhost" :port 8000))

(println "Hello")

(call-> (example-client :example-get)
        println)

(call-> (example-client :plus1 {:operand 1})
        (partial + 1)
        println)

(call-> (example-client :combine {:thing "this" :thang "that"})
        println)

(call-> (example-client :add {:thing :foo :operand 100 :map {:foo 1 :bar 2}})
        println)
