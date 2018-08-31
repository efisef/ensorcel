(ns ensorcel.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [ensorcel.conjure-test]))

(doo-tests 'ensorcel.conjure-test)
