(ns ensorcel.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cljs.spec.alpha :as s]))

(enable-console-print!)

(defn on-js-reload
  [])
