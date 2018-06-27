(ns ensorcel.server
  (:require [clojure.data.json :as json]
            [compojure.response :refer [Renderable]]
            [compojure.route :as route]
            [compojure.core :refer [defroutes context]]
            [org.httpkit.server :as server]
            [ring.util.response :as response]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.http-response :refer [wrap-http-response]]
            [ring.middleware.json :refer [wrap-json-params wrap-json-response]]))

(extend-protocol Renderable
  clojure.lang.APersistentMap
  (render [body _]
    (-> (response/response (json/write-str body))
        (response/content-type "application/json")))
  clojure.lang.PersistentVector
  (render [body _]
    (-> (response/response (json/write-str body))
        (response/content-type "application/json")))
  clojure.lang.PersistentList
  (render [body _]
    (-> (response/response (json/write-str body))
        (response/content-type "application/json")))
  clojure.lang.LazySeq
  (render [body _]
    (-> (response/response (json/write-str body))
        (response/content-type "application/json")))
  clojure.lang.ArraySeq
  (render [body _]
    (-> (response/response (json/write-str body))
        (response/content-type "application/json"))))

(defmacro def-app
  [app-name & services]
  `(do
     (defroutes all-routes#
       (context "/api" []
                ~@services
                (route/not-found "<p>Not Found :(</p>")))
     (def ~app-name
       (-> #'all-routes#
           (wrap-defaults (assoc api-defaults
                                 :params {:keywordize true}
                                 :cookies true))
           wrap-json-params
           wrap-json-response
           wrap-http-response))))
