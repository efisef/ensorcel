(ns ensorcel.conjure-test
  (:require [cljs.test :refer-macros [deftest
                                      is
                                      testing]]
            [cljs.spec.alpha :as s]))

(deftest test-format-path
  (is (= ["foo" "bar" "baz"] (format-path {:1 "foo" :2 "bar" :3 "baz"} [:1 :2 :3])))
  (is (= ["foo" "bar" "baz"] (format-path {:1 "foo" :3 "baz"} [:1 "bar" :3])))
  (testing "ignores extra params"
    (is (= ["foo" "bar"] (format-path {:1 "foo" :3 "baz"} [:1 "bar"]))))
  (testing "works with duplicated params"
    (is (= ["foo" "bar" "foo"] (format-path {:1 "foo" :3 "baz"} [:1 "bar" :1]))))
  (testing "thrown if missing arg"
    (is (thrown? RuntimeException (format-path {} [:1 "bar"])))))

(deftest test-path-fn
  (testing "static path"
    (= "base/path" ((path-fn "base" "path")))
    (= "base/path/sub-path" ((path-fn "base" "path/sub-path"))))
  (testing "dynamic path"
    (= "base/path/foo/bar" ((path-fn "base/path" [:1 "bar"]) {:1 "foo"}))
    (= "base/path/foo/bar" ((path-fn "base/path" ["foo" :1]) {:1 "bar"}))))

(deftest test-body-fn
  (testing "no params provided"
    (is (nil? ((body-fn nil))))
    (is (nil? ((body-fn nil) {:some :stuff}))))
  (let [spec (s/keys :req-un [::foo ::bar])]
    (testing "thrown on invalid body"
      (is (thrown? RuntimeException ((body-fn spec) {:not :foo}))))
    (testing "removes extra params in body"
      (is (= {:foo 1 :bar 2} ((body-fn spec) {:foo 1 :bar 2 :other 3}))))))

(deftest test-call
  (testing "single element")
  (testing "chaining")
  (testing "error passing"))

(deftest test-client
  (testing "validates spec")
  (testing "custom address")
  (testing "validates input")
  (testing "validates output")
  (testing "adds version method")
  (testing "adds ping method"))
