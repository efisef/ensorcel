(ns ensorcel.types
  #?(:cljs (:require [cljs.spec.alpha :as s
                      :include-macros true]
                     [spec-tools.core :as st]
                     [clojure.string :as string])
     :clj  (:require [clojure.spec.alpha :as s]
                     [spec-tools.core :as st]
                     [clojure.string :as string])))

(s/def ::any     (constantly true))
(s/def ::integer integer?)
(s/def ::long    integer?)
(s/def ::string  string?)
(s/def ::double  #?(:clj double? :cljs float?))
(s/def ::float   float?)
(s/def ::boolean boolean?)
(s/def ::keyword keyword?)

(defn- parse-integer
  [int-str]
  #?(:clj  (Integer/parseInt int-str)
     :cljs (js/parseInt int-str)))

(defn- parse-long
  [long-str]
  #?(:clj  (Long/parseLong long-str)
     :cljs (js/parseInt long-str)))

(defn- parse-double
  [double-str]
  #?(:clj  (Double/parseDouble double-str)
     :cljs (js/parseFloat double-str)))

(defn- parse-float
  [float-str]
  #?(:clj  (Float/parseFloat float-str)
     :cljs (js/parseFloat float-str)))

(defn- coerce
  [spec value]
  ((case spec
    ::keyword keyword
    ::boolean #(= "true" (string/lower-case %))
    ::integer parse-integer
    ::long    parse-long
    ::double  parse-double
    ::float   parse-float
    identity
    ) value))

(derive java.util.Map ::map)
(derive java.util.List ::list)

(defn- update-at
  [xs i f]
  (let [pre (take i xs)
        x (get xs i)
        post (drop (inc i) xs)]
    (vec (concat pre [(f x)] post))))

(defmulti update-in* (fn [x _ _] (class x)))

(defmethod update-in* ::map [m p f]
  (let [[p & ps] p]
    (if (nil? ps)
      (update m p f)
      (update m p #(update-in* % ps f)))))

(defmethod update-in* ::list [l p f]
  (let [[p & ps] p]
    (if (nil? ps)
      (update-at l p f)
      (update-at l p #(update-in* % ps f)))))

(defn- fix-problem
  [x {:keys [in via] :as problem}]
  (let [leaf (last via)]
    (update-in* x in (partial coerce leaf))))

(defn- keywordise-keys
  [m]
  (into {}
        (map (fn [[k v]] [(keyword k) (cond-> v (map? v) keywordise-keys)]) m)))

(defn coerce-json
  "Coerces JSON map types into the types specified
  by a schema using ensorcel types.
  In general from Clojure -> JSON:
    Keyword -> String
    Double -> Float"
  [spec json]
  (let [json (cond-> json (map? json) keywordise-keys)
        problems (::s/problems (s/explain-data spec json))]
    (reduce fix-problem json problems)))
