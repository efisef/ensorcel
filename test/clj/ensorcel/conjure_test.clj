(ns ensorcel.conjure-test
  (:require [clojure.test :refer :all]
            [clojure.spec.alpha :as s]
            [clojure.data.json :as json]
            [ensorcel.conjure :as c]
            [ensorcel.server :refer [app root]]
            [ring.util.http-predicates :refer [success?]]
            [org.httpkit.client :as http]
            [org.httpkit.server :refer [run-server]]))

(deftest test-arg-count
  (is (= 2 (c/arg-count #(str %1 %2))))
  (is (= 1 (c/arg-count #(str %)))))

(s/def ::val string?)
(s/def ::string string?)
(s/def ::value (s/keys :req-un [::val]))
(s/def ::thing string?)
(s/def ::value-with-thing (s/keys :req-un [::val ::thing]))

(def spellbook
  {:service1 {:path "service1"
              :endpoints {:endpoint1 {:path "endpoint1"
                                      :method :GET
                                      :returns ::string}}}
   :service2 {:path "service2"
              :endpoints {:endpoint2 {:path "endpoint2"
                                      :method :POST
                                      :params ::value
                                      :returns (s/* ::string)}
                          :endpoint3 {:path ["endpoint3/" :val]
                                      :params ::value
                                      :method :DELETE}
                          :endpoint4 {:path ["endpoint4/" :thing]
                                      :params ::value-with-thing
                                      :method :POST}}}})

(def endpoint1-result "hello, world!")
(defn endpoint1 [] endpoint1-result)
(def endpoint2-param "hello")
(def endpoint2-result ["hello" "world!"])
(defn endpoint2 [{input :val}] (assert (= input endpoint2-param)) endpoint2-result)
(def endpoint3-param "goodbye")
(defn endpoint3 [{input :val}] (assert (= input endpoint3-param)))
(def endpoint4-param "thing")
(def endpoint4-body "val")
(defn endpoint4 [{input :val thing :thing}] (assert (and (= input endpoint4-body)
                                                         (= thing endpoint4-param))))

(def test-service1 (c/service spellbook :service1
                              :endpoint1 endpoint1))
(def test-service2 (c/service spellbook :service2
                              :endpoint2 endpoint2
                              :endpoint3 endpoint3
                              :endpoint4 endpoint4))

(def test-app (app test-service1
                   test-service2))

(defn extract
  [{:keys [status headers body error] :as resp}]
  (if (or error (not (success? resp)))
    (throw (ex-info "Something went wrong" resp))
    (do
      (slurp body))))

(deftest shitty-tests
  (let [kill! (run-server test-app {:port 8080})]
    (Thread/sleep 1000)
    (is (= endpoint1-result (extract @(http/get "http://localhost:8080/api/service1/endpoint1"))))
    (is (= (json/write-str endpoint2-result)
           (extract @(http/post "http://localhost:8080/api/service2/endpoint2"
                                {:headers {"content-type" "application/json"}
                                 :body (json/write-str {:val endpoint2-param})}))))
    (is (empty? (extract @(http/delete
                          (str "http://localhost:8080/api/service2/endpoint3/" endpoint3-param)))))
    (is (empty? (extract @(http/post
                            (str "http://localhost:8080/api/service2/endpoint4/" endpoint4-param)
                            {:headers {"content-type" "application/json"}
                             :body (json/write-str {:val endpoint4-body})}))))
    (kill!)))
