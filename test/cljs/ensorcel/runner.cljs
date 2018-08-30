(ns ensorcel.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [ensorcel.conjure-test]
            [ensorcel.types-test]))

(doo-tests 'ensorcel.conjure-test)
(doo-tests 'ensorcel.types-test)
