(ns ensorcel.resource.atom-test
  (:require [clojure.test :refer :all]
            [clojure.data.json :as json]
            [ensorcel.conjure :as c]
            [ensorcel.resource.atom :refer [resource]]
            [ensorcel.api.test :as api]
            [org.httpkit.client :as http]
            [org.httpkit.server :refer [run-server]]
            [ring.util.http-predicates :refer [success?]]
            [schema.core :as s]))

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
                       :next-id inc)))

(def test-app
  (c/app api/test-spellbook test-service))

(deftest test-ete
  (let [kill! (run-server test-app {:port 8088})]
    (Thread/sleep 1000)

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
      (is (= (json/write-str {:msg "hello?" :id 1}) (:body @(http/get (path "resource/1"))))))
      (is (= 200 (:status @(http/get (path "resource/1")))))

    (testing "GET all items"
      (is (= (json/read-str (json/write-str [{:msg "hello!" :id 0} {:msg "hello?" :id 1}]))
             (json/read-str (:body @(http/get (path "resource/")))))))

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
      (is (= (json/read-str (json/write-str [{:msg "hello?" :id 1}]))
             (json/read-str (:body @(http/get (path "resource/")))))))

    (testing "ping"
      (is (= "pong" (extract @(http/get (path "ping/"))))))

    (testing "version"
      (is (= api/test-version (extract @(http/get (path "version/"))))))

    (kill!)))

