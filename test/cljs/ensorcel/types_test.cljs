(ns ensorcel.types-test
  (:require [cljs.test :refer-macros [deftest
                                      is
                                      testing]]
            [cljs.spec.alpha :as s :include-macros true]
            [ensorcel.types :as t]))

(s/def ::foo ::t/keyword)
(s/def ::bar (s/keys :req-un [::foo]))
(s/def ::baz (s/* ::bar))
(s/def ::quup (s/keys :req-un [::baz]))

(deftest test-coerce
  ;(testing "maps"
  ;  (let [expected {:foo :bar}]
  ;    (is (= expected (t/coerce-json ::bar (js->clj (clj->js expected)))))))

  ;(testing "vector of maps"
  ;  (let [expected [{:foo :bar}]]
  ;    (is (= expected (t/coerce-json ::baz (js->clj (clj->js expected)))))))

  (testing "map of vector of maps"
    (let [expected {:baz [{:foo :bar} {:foo :bar?}]}]
      (is (= expected (t/coerce-json ::quup (js->clj (clj->js expected))))))))
