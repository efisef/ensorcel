(ns ensorcel.test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]))

(deftest my-test
  (is (not= 1 1)))

(defn ^:export run
  []
  (.log js/console "Example test started.")
  (run-tests)
  0)
