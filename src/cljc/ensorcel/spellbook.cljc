(ns ensorcel.spellbook
  #?(:cljs (:require [cljs.spec.alpha :as s
                      :include-macros true])
     :clj  (:require [clojure.spec.alpha :as s])))

; -- PATHS --------------------------------------------------------------------

(def path-regex #"^/?([a-zA-Z]+([-_]?[a-zA-Z0-9]+)*/?)?")

(s/def :path/composite
  (s/+ #(or (keyword? %) (string? %))))

(s/def ::path
  (s/or :composite :path/composite
        :simple    (s/and string? #(re-matches path-regex %))))

(s/def ::string
  string?)

; -- VERSION ------------------------------------------------------------------

(def version-regex #"^[a-zA-Z0-9]+")
(s/def ::version
  (s/and string? #(re-matches version-regex %)))

; -- SPELLBOOK ----------------------------------------------------------------

(s/def ::spec
  some?)

(s/def ::method
  #{:GET :POST :PUT :DELETE})

(s/def ::args
  ::spec)

(s/def ::query
  (s/+ keyword?))

(s/def ::headers
  (s/map-of string? string?))

(s/def ::response
  #?(:cljs (constantly true)
     :clj  some?))

(s/def ::returns
  ::spec)

(s/def ::endpoint
  (s/keys :req-un [::path
                   ::method]
          :opt-un [::args
                   ::query
                   ::headers
                   ::response
                   ::returns]))

(s/def ::endpoints
  (s/map-of keyword? ::endpoint))

(s/def ::service
  (s/keys :req-un [::path
                   ::endpoints]))

(s/def ::services
  (s/map-of keyword? ::service))

(s/def ::spellbook
  (s/keys :req-un [::version
                   ::services]))

(def default-spellbook
  {:version "default"
   :services {:ping {:path "ping"
                     :endpoints {:ping {:path ""
                                        :method :GET
                                        :returns string?}}}
              :version {:path "version"
                        :endpoints {:version {:path ""
                                              :method :GET
                                              :returns string?}}}}})

(defn validate!
  [spellbook]
  (when (s/invalid? (s/conform ::spellbook spellbook))
    (throw (ex-info "Spellbook failed validation" (s/explain-data ::spellbook spellbook)))))

(defn correct-path
  [path]
  (if (vector? path)
    (vec (interpose "/" path))
    path))

