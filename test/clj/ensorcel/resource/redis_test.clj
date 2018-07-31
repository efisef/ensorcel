(ns ensorcel.resource.redis-test
  (:require [clojure.test :refer :all]
            [clojure.data.json :as json]
            [ensorcel.conjure :as c]
            [ensorcel.resource.redis :refer [resource wcar*]]
            [ensorcel.api.test :as api]
            [ring.util.http-predicates :refer [success?]]
            [taoensso.carmine :as car]
            [org.httpkit.client :as http]
            [org.httpkit.server :refer [run-server]]))

(defn clear-keys-fixture
  [f]
  (f)
  (wcar* (car/flushall)))

(use-fixtures :each clear-keys-fixture)

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

(def test-service
  (apply c/service (resource api/test-spellbook :resource
                       :start-id 0
                       :next-id-fn inc)))

(def test-app
  (c/app api/test-spellbook test-service))

(deftest test-ete
  (let [kill! (run-server test-app {:port 8088})]
    (Thread/sleep 1000)

    (try
      (testing "GET no exists"
        (is (= 404 (:status @(http/get (path "resource/0"))))))

      (testing "PUT no exists"
        (is (= 404 (:status @(http/put (path "resource/0")
                                       {:headers {"content-type" "application/json"}
                                        :body (json/write-str {:msg "hello!"})})))))

      (testing "DELETE no exists"
        (is (= 404 (:status @(http/delete (path "resource/0"))))))

      (testing "POST new item"
        (let [resp @(http/post (path "resource/")
                               {:headers {"content-type" "application/json"}
                                :body (json/write-str {:msg "hello!"})})]
          (is (= 201 (:status resp)))
          (is (= "http://localhost:8088/api/resource/0" (-> resp :headers :location)))))

      (testing "POST new item incs id"
        (let [resp @(http/post (path "resource/")
                               {:headers {"content-type" "application/json"}
                                :body (json/write-str {:msg "hello?"})})]
          (is (= 201 (:status resp)))
          (is (= "http://localhost:8088/api/resource/1" (-> resp :headers :location)))))

      (testing "GET item"
        (is (= (json/write-str {:msg "hello!" :id 0}) (:body @(http/get (path "resource/0")))))
        (is (= (json/write-str {:msg "hello?" :id 1}) (:body @(http/get (path "resource/1")))))
        (is (= 200 (:status @(http/get (path "resource/1"))))))

      (testing "GET all items"
        (is (= (set ((json/read-str (json/write-str {:values [{:msg "hello!" :id 0} {:msg "hello?" :id 1}]
                                               :next nil})) "values"))
               (set ((json/read-str (:body @(http/get (path "resource/")))) "values")))))

      (testing "GET pagination"
        (let [resp @(http/get (path "resource/?limit=1"))
              body (json/read-str (:body resp))]
          (is (= 1 (count (body "values"))))
          (is (= "1" (body "next")))
          (is (= body (json/read-str (:body @(http/get (path "resource/?limit=1&page=0")))))))
        (let [resp @(http/get (path "resource/?limit=1&page=1"))
              body (json/read-str (:body resp))]
          (is (= 1 (count (body "values"))))
          (is (= nil (body "next")))))

      (testing "PUT edit item"
        (let [resp @(http/put (path "resource/0")
                              {:headers {"content-type" "application/json"}
                               :body (json/write-str {:msg "bye!"})})]
          (is (= 200 (:status resp)))
          (is (= (json/read-str (json/write-str {:msg "bye!" :id 0}))
                 (json/read-str (:body resp))))))

      (testing "DELETE item"
        (let [resp @(http/delete (path "resource/0"))]
          (is (= 200 (:status resp)))
          (is (= (json/read-str (json/write-str {:msg "bye!" :id 0}))
                 (json/read-str (:body resp)))))
        (is (= (json/read-str (json/write-str {:next nil :values [{:msg "hello?" :id 1}]}))
               (json/read-str (:body @(http/get (path "resource/")))))))

      (testing "ping"
        (is (= "pong" (extract @(http/get (path "ping/"))))))

      (testing "version"
        (is (= api/test-version (extract @(http/get (path "version/"))))))

      (finally (kill!)))))

