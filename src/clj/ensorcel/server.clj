(ns ensorcel.server
  (:require [bidi.ring :refer [make-handler]]
            [ring.util.response :as response]
            [ring.middleware.cors :refer  [wrap-cors]]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.http-response :refer [wrap-http-response]]
            [ring.middleware.json :refer [wrap-json-params wrap-json-response]]))


(defn root
  [services]
  ["/" {"api/" (apply merge services)}])

(defn app
  [& services]
  (-> (make-handler (root services))
      (wrap-defaults (assoc api-defaults
                            :params {:keywordize true}
                            :cookies true))
      wrap-json-params
      wrap-json-response
      wrap-http-response
      (wrap-cors :access-control-allow-origin  [#"http://localhost:3449"]
                 :access-control-allow-credentials "true"
                 :access-control-allow-methods  [:get :post :delete])))
