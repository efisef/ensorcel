(ns ensorcel.spellbook
  #?(:cljs (:require [schema.core :as s
                      :include-macros true])
     :clj  (:require [schema.core :as s])))

(def path-regex #"^/?([a-zA-Z]+([-_]?[a-zA-Z0-9]+)*/?)?")
(def path (s/either
            [(s/either s/Keyword s/Str)]
            (s/both (s/pred #(re-matches path-regex %)) s/Str)))

(def version-regex #"^[a-zA-Z0-9]+")
(def version (s/both (s/pred #(re-matches version-regex %)) s/Str))

(def Schema
  (s/protocol s/Schema))

(def SpellBook
  {(s/optional-key :version) version
   :services {s/Keyword {:path path
                         :endpoints {s/Keyword {:path path
                                                :method (s/enum :GET :POST :PUT :DELETE)
                                                (s/optional-key :args) Schema
                                                (s/optional-key :returns) Schema}}}}})

(def default-spellbook
  {:services {:ping {:path "ping"
                     :endpoints {:ping {:path ""
                                        :method :GET
                                        :returns s/Str}}}
              :version {:path "version"
                        :endpoints {:version {:path ""
                                              :method :GET
                                              :returns s/Str}}}}})

(defn validate!
  [spellbook]
  (s/validate SpellBook spellbook))

(defn correct-path
  [path]
  (if (vector? path)
    (vec (interpose "/" path))
    path))
