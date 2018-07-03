(ns ensorcel.spellbook
  #?(:cljs (:require [schema.core :as s
                      :include-macros true])
     :clj  (:require [schema.core :as s])))

(def path-regex #"^/?[a-zA-Z]+([-_]?[a-zA-Z0-9]+)*/?")
(def path (s/both (s/pred #(re-matches path-regex %)) s/Str))

(def version-regex #"^[a-zA-Z0-9]+")
(def version (s/both (s/pred #(re-matches version-regex %)) s/Str))

(defn schema?
  [x]
  (try (s/explain x)
       true
       (catch IllegalArgumentException e false)))

(def SpellBook
  {(s/optional-key :version) version
   s/Keyword {:path path
              :endpoints {s/Keyword {:path path
                                     :method (s/enum :GET :POST :PUT :DELETE)
                                     (s/optional-key :args) (s/pred schema?)
                                     (s/optional-key :returns) (s/pred schema?)}}}})
