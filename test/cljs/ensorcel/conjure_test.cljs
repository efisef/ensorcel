(ns ensorcel.conjure-test
  (:require [cljs.test :refer-macros [deftest
                                      is
                                      testing]]
            [schema.core :as s]
            [cljs-http.client :as http]
            [ensorcel.api.test :as api]
            [ensorcel.conjure :as conjure :refer [call->]]))

(deftest test-format-path
  (is (= ["foo" "bar" "baz"] (conjure/format-path {:1 "foo" :2 "bar" :3 "baz"} [:1 :2 :3])))
  (is (= ["foo" "bar" "baz"] (conjure/format-path {:1 "foo" :3 "baz"} [:1 "bar" :3])))
  (testing "ignores extra params"
    (is (= ["foo" "bar"] (conjure/format-path {:1 "foo" :3 "baz"} [:1 "bar"]))))
  (testing "works with duplicated params"
    (is (= ["foo" "bar" "foo"] (conjure/format-path {:1 "foo" :3 "baz"} [:1 "bar" :1]))))
  (testing "thrown if missing arg"
    (is (thrown? ExceptionInfo (conjure/format-path {} [:1 "bar"])))))

(deftest test-path-fn
  (testing "static path"
    (= "base/path" ((conjure/path-fn "base" "path")))
    (= "base/path/sub-path" ((conjure/path-fn "base" "path/sub-path"))))
  (testing "dynamic path"
    (= "base/path/foo/bar" ((conjure/path-fn "base/path" [:1 "bar"]) {:1 "foo"}))
    (= "base/path/foo/bar" ((conjure/path-fn "base/path" ["foo" :1]) {:1 "bar"}))))

(deftest test-body-fn
  (testing "no params provided"
    (is (nil? ((conjure/body-fn nil))))
    (is (nil? ((conjure/body-fn nil) {:some :stuff}))))
  (let [schema {:foo s/Int :bar s/Int}]
    (testing "thrown on invalid body"
      (is (thrown? ExceptionInfo ((conjure/body-fn schema) {:not :foo}))))
    (testing "throws with extra params in body"
      (is (thrown? ExceptionInfo ((conjure/body-fn schema) {:foo 1 :bar 2 :other 3}))))))

(def client (conjure/client api/test-spellbook :service1))

(def bad-spellbook
  {:service {:path "path!!!@@@@"
             :endpoints {:endpoint1 {:path "sub-path"
                                     :method :GET}}}})

(defn url-check
  [expected]
  (fn [path opts]
    (println "this was called")
    (is (= expected path))))

(deftest test-client
  (testing "validates spec"
    (is (thrown? ExceptionInfo (conjure/client bad-spellbook :service))))
  (testing "custom address")
  (testing "validates input")
  (testing "validates output")
  (testing "adds version method"
    (with-redefs [http/get (url-check "borklocalhost:8080")]
      (call-> (client :version) #(println "hi" %))))
  (testing "adds ping method"))
