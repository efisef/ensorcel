(ns efisef-app.utils
  (:require [clojure.string :as string]
            [cljs-time.coerce :as c]
            [cljs-time.format :as f]))

(defn comp-style
  [& classes]
  (string/join " " classes))

(defn render-date
  [millis]
  (f/unparse (f/formatter "yyyy-MM-dd HH:mm") (c/from-long millis)))

(defn round
  [number]
  (/ (Math/round (* 100 number)) 100))
