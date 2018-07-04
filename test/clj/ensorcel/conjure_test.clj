(ns ensorcel.conjure-test
  (:require [clojure.test :refer :all]
            [clojure.spec.alpha :as s]
            [clojure.data.json :as json]
            [ensorcel.conjure :as c]
            [ring.util.http-predicates :refer [success?]]
            [org.httpkit.client :as http]
            [org.httpkit.server :refer [run-server]]))

; ----------------------------- UNIT TESTS ----------------------------------------

(deftest test-arg-count
  (is (= 2 (c/arg-count #(str %1 %2))))
  (is (= 1 (c/arg-count #(str %)))))

(deftest test-wrap-endpoint)

(deftest test-endpoint)

(deftest test-service)

; ----------------------------- ETE TEST ------------------------------------------

; TODO
; Test that arg map that comes in is correct (ie. url params are converted etc.)

(def test-version "version")

;(defn extract
;  [{:keys [status headers body error] :as resp}]
;  (if (or error (not (success? resp)))
;    (throw (ex-info "Something went wrong" resp))
;    (do
;      (slurp body))))
;
;(deftest shitty-tests
;  (let [kill! (run-server test-app {:port 8080})]
;    (Thread/sleep 1000)
;    (is (= endpoint1-result (extract @(http/get "http://localhost:8080/api/service1/endpoint1"))))
;    (is (= (json/write-str endpoint2-result)
;           (extract @(http/post "http://localhost:8080/api/service2/endpoint2"
;                                {:headers {"content-type" "application/json"}
;                                 :body (json/write-str {:val endpoint2-param})}))))
;    (is (empty? (extract @(http/delete
;                          (str "http://localhost:8080/api/service2/endpoint3/" endpoint3-param)))))
;    (is (empty? (extract @(http/post
;                            (str "http://localhost:8080/api/service2/endpoint4/" endpoint4-param)
;                            {:headers {"content-type" "application/json"}
;                             :body (json/write-str {:val endpoint4-body})}))))
;    (kill!)))
