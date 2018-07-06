(ns ensorcel.conjure-test
  (:require [clojure.test :refer :all]
            [clojure.data.json :as json]
            [ensorcel.conjure :as c]
            [org.httpkit.client :as http]
            [org.httpkit.server :refer [run-server]]
            [ring.util.http-predicates :refer [success?]]
            [schema.core :as s]))

; ----------------------------- UNIT TESTS ----------------------------------------

(deftest test-arg-count
  (is (= 2 (c/arg-count #(str %1 %2))))
  (is (= 1 (c/arg-count #(str %)))))

(deftest test-wrap-endpoint
  (testing "zero arg endpoint"
    (let [called? (atom :unchanged)
          wrapped (c/wrap-endpoint {} (fn [] (reset! called? :changed)))]
      (wrapped {})
      (is (= :changed @called?))))

  (testing "one arg endpoint"
    (let [called? (atom :unchanged)
          url-params {:one :two}
          body-params {:three :four}
          wrapped (c/wrap-endpoint {} (fn [params]
                                        (assert (= (merge url-params body-params) params))
                                        (reset! called? :changed)))]
      (wrapped {:params url-params :body body-params})
      (is (= :changed @called?))))

  (testing "two arg endpoint"
    (let [called? (atom :unchanged)
          url-params {:one :two}
          body-params {:three :four}
          provided-opts {:cookies :mm-cookies}
          wrapped (c/wrap-endpoint {} (fn [params opts]
                                      (assert (= (merge url-params body-params) params))
                                      (assert (= opts provided-opts))
                                      (reset! called? :changed)))]
      (wrapped (merge provided-opts {:params url-params :body body-params}))
      (is (= :changed @called?))))

  (testing "throws on bad input"
    (let [wrapped (c/wrap-endpoint {:params {:foo s/Str}}
                                 (fn [params] (throw (ex-info "I shouldn't get here" {}))))]
      (is (thrown-with-msg? RuntimeException #"HTTP 400" (wrapped {:body {:bar "hello"}})))))

  (testing "throws on bad output"
    (let [wrapped (c/wrap-endpoint {:returns s/Str}
                                 (fn [params] 42))]
      (is (thrown-with-msg? RuntimeException #"HTTP 500" (wrapped {})))))

  (testing "properly coerces params to provided schema"
    (let [wrapped (c/wrap-endpoint
                    {:params {:it s/Int}}
                    (fn [params] (assert (= 42 (:it params)))))]
      (wrapped {:params {:it "42"}}))))

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
