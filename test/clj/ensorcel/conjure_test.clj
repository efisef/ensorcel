(ns ensorcel.conjure-test
  (:require [clojure.test :refer :all]
            [clojure.data.json :as json]
            [ensorcel.conjure :as c]
            [ensorcel.api.test :as api]
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
    (let [wrapped (c/wrap-endpoint {:args {:foo s/Str}}
                                 (fn [params] (throw (ex-info "I shouldn't get here" {}))))]
      (is (thrown-with-msg? RuntimeException #"HTTP 400" (wrapped {:body {:bar "hello"}})))))

  (testing "throws on bad output"
    (let [wrapped (c/wrap-endpoint {:returns s/Str}
                                 (fn [params] 42))]
      (is (thrown-with-msg? RuntimeException #"HTTP 500" (wrapped {})))))

  (testing "properly coerces params to provided schema"
    (let [wrapped (c/wrap-endpoint
                    {:args {:it s/Int}}
                    (fn [params] (assert (= 42 (:it params)))))]
      (wrapped {:params {:it "42"}}))))

; ----------------------------- ETE TEST ------------------------------------------

(def endpoint1-result "hello-world")

(defn endpoint1
  []
  endpoint1-result)

(def endpoint2-result 42)

(defn endpoint2
  [{x :operand}]
  (inc x))

(def endpoint3-result "thisthat")

(defn endpoint3
  [{this :thing that :thang}]
  (str this that))

(def endpoint4-result
  {:foo 1
   :bar 42})

(defn endpoint4
  [{:keys [amount key map]}]
  (update map key (partial + amount)))

(def endpoint5-result "hello")
(defn endpoint5
  []
  endpoint5-result)

(def endpoint6-result 42)
(defn endpoint6
  [{x :x}]
  (inc x))

(defn path
  [path]
  (str "http://localhost:8088/api/" path))

(defn extract
  [{:keys [status headers body error] :as resp}]
  (if (or error (not (success? resp)))
    (throw (ex-info "Something went wrong" resp))
    (do
      (cond-> body
        (re-find #"octet" (headers :content-type)) slurp))))

(def test-app
  (c/app api/test-spellbook
         (c/service api/test-spellbook :service1
                    :endpoint1 endpoint1
                    :endpoint2 endpoint2
                    :endpoint3 endpoint3
                    :endpoint4 endpoint4
                    :endpoint5 endpoint5
                    :endpoint6 endpoint6)))

(deftest test-ete
  (let [kill! (run-server test-app {:port 8088})]
    (Thread/sleep 1000)

    (testing "Simple get, no path"
      (is (= endpoint1-result (extract @(http/get (path "service1/"))))))

    (testing "url params"
      (is (= (str endpoint2-result) (extract @(http/post (path "service1/plus1/41"))))))

    (testing "url and body params"
      (is (= endpoint3-result (extract @(http/post (path "service1/combine/this")
                                                   {:headers {"content-type" "application/json"}
                                                    :body (json/write-str {:thang "that"})})))))

    (testing "complicated multi params"
      (is (= (json/write-str endpoint4-result) (extract @(http/post (path "service1/add/bar/41")
                                                                    {:headers {"content-type" "application/json"}
                                                                     :body (json/write-str {:map {:foo 1 :bar 1}})})))))
    (testing "correct header type"
      (is (re-find #"application/json" (-> @(http/post (path "service1/add/bar/41")
                                                       {:headers {"content-type" "application/json"}
                                                        :body (json/write-str {:map {:foo 1 :bar 1}})})
                                           :headers :content-type))))

    (testing "simple get with path"
      (is (= endpoint5-result (extract @(http/get (path "service1/path"))))))

    (testing "simple put, same path as get"
      (is (= (str endpoint6-result) (extract @(http/put (path "service1/path")
                                                        {:headers {"content-type" "application/json"}
                                                         :body (json/write-str {:x 41})})))))

    (testing "ping"
      (is (= "pong" (extract @(http/get (path "ping/"))))))

    (testing "version"
      (is (= api/test-version (extract @(http/get (path "version/"))))))

    (kill!)))
