(ns efisef-app.components.timestamp
  (:require [cljs-time.coerce :as c]
            [cljs-time.format :as f]
            [cljss.core :refer-macros [defstyles]]))

; ----------------------------------------- STYLE -----------------------------------------

(defstyles component-style []
  {:display "inline-flex"})

; ----------------------------------------- COMPONENT -------------------------------------

(defn component
  [micros]
  (let [millis (quot micros 1000)
        date (c/from-long millis)]
    [:div {:class (component-style)}
     [:span [:b "Time: "] (f/unparse (f/formatter "yyyy-MM-dd HH:mm:ss.SSS") date)]]))
