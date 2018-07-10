(ns ensorcel.conjure-test
  (:require [cljs.test :refer-macros [deftest
                                      is
                                      testing]]
            [schema.core :as s]
            [ensorcel.conjure :as c]))

(deftest test-format-path
  (is (= ["foo" "bar" "baz"] (c/format-path {:1 "foo" :2 "bar" :3 "baz"} [:1 :2 :3])))
  (is (= ["foo" "bar" "baz"] (c/format-path {:1 "foo" :3 "baz"} [:1 "bar" :3])))
  (testing "ignores extra params"
    (is (= ["foo" "bar"] (c/format-path {:1 "foo" :3 "baz"} [:1 "bar"]))))
  (testing "works with duplicated params"
    (is (= ["foo" "bar" "foo"] (c/format-path {:1 "foo" :3 "baz"} [:1 "bar" :1]))))
  (testing "thrown if missing arg"
    (is (thrown? ExceptionInfo (c/format-path {} [:1 "bar"])))))

(deftest test-path-fn
  (testing "static path"
    (= "base/path" ((c/path-fn "base" "path")))
    (= "base/path/sub-path" ((c/path-fn "base" "path/sub-path"))))
  (testing "dynamic path"
    (= "base/path/foo/bar" ((c/path-fn "base/path" [:1 "bar"]) {:1 "foo"}))
    (= "base/path/foo/bar" ((c/path-fn "base/path" ["foo" :1]) {:1 "bar"}))))

(deftest test-body-fn
  (testing "no params provided"
    (is (nil? ((c/body-fn nil))))
    (is (nil? ((c/body-fn nil) {:some :stuff}))))
  (let [schema {:foo s/Int :bar s/Int}]
    (testing "thrown on invalid body"
      (is (thrown? ExceptionInfo ((c/body-fn schema) {:not :foo}))))
    (testing "throws with extra params in body"
      (is (thrown? ExceptionInfo ((c/body-fn schema) {:foo 1 :bar 2 :other 3}))))))

(def spellbook
  {:version "test"
   :services {:service {:path "path"
                        :endpoints {:endpoint {:path "sub-path"
                                               :method :GET}}}}})
(def bad-spellbook
  {:service {:path "path!!!@@@@"
             :endpoints {:endpoint1 {:path "sub-path"
                                     :method :GET}}}})

; TODO Can't really do many of these tests until I figure out how to get async tests working :(

(deftest test-client
  (testing "validates spec"
    (is (thrown? ExceptionInfo (c/client bad-spellbook :service))))
  (testing "custom address")
  (testing "validates input")
  (testing "validates output")
  (testing "adds version method")
  (testing "adds ping method"))
