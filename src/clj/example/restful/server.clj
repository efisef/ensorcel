(ns example.restful.server
  (:require [org.httpkit.server :refer [run-server]]
            [ring.middleware.cors :refer [wrap-cors]]
            [ensorcel.conjure :as c]
            [ensorcel.resource.atom :as atomr]
            [ensorcel.resource.redis :as redisr]
            [example.restful.api :as api]))

(def service
  (apply c/service (redisr/resource api/spellbook :postbox)))

(def example-app
  (c/app api/spellbook
         service))

(defn make-rocket-go-now
  []
  (run-server
    (wrap-cors example-app
               :access-control-allow-origin  [#".*"]
               :access-control-allow-credentials "true"
               :access-control-allow-methods  [:get :post :delete])
    {:port 8000}))

