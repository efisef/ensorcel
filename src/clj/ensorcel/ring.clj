(ns ensorcel.ring
  (:require [ring.util.response :refer  [content-type]]
            [ring.util.request :refer [character-encoding]]
            [clojure.edn :as edn]))

(defn edn-response
  [response]
  (let [edn-resp (update response :body pr-str)]
    (if (contains? (:headers response) "Content-Type")
      response
      (content-type edn-resp "application/edn; charset=utf-8"))))

(defn wrap-edn-response
  [handler]
  (fn [request]
    (edn-response (handler request))))

(def malformed-response
  {:status  400
   :headers {"Content-Type" "text/plain"}
   :body    "Malformed EDN in request body"})

(defn read-edn
  [request]
  (if-let [body (:body request)]
    (let [encoding (or (character-encoding request)
                       "UTF-8")
          body-string (slurp body :encoding encoding)]
      (try
        [true (edn/read-string body-string)]
        (catch RuntimeException ex
          [false nil])))))

(defn edn-body-request
  [request]
  (if-let [[valid? edn] (read-edn request)]
    (if valid? (assoc request :body edn))
    request))

(defn wrap-edn-body
  [handler]
  (fn [request]
    (if-let [request (edn-body-request request)]
      (handler request)
      malformed-response)))
