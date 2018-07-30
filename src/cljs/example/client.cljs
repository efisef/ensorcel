(ns example.client
  (:require [example.restful.api :as api]
            [ensorcel.conjure :refer [call-paginated-> call->] :as c]
            [devtools.core :as devtools]))

(devtools/install!)
(enable-console-print!)

(defn on-js-reload
  [])

(def example-client
  (c/client api/spellbook :postbox
            :host "localhost" :port 8000))

(println "Hello")

(call-> (example-client :new :msg "hello!"))
(call-> (example-client :get :id 0)
        println)
(call-paginated-> (example-client :get-all)
                  println)
