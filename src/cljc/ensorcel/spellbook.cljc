(ns ensorcel.spellbook
  #?(:cljs (:require [cljs.spec.alpha :as s])
     :clj  (:require [clojure.spec.alpha :as s])))

(def path-regex #"^/?[a-zA-Z]+([-_]?[a-zA-Z0-9]+)*/?")
(s/def ::path-str (s/and string? #(re-matches path-regex %)))
(s/def ::path-list (s/+ (s/or :path ::path-str
                              :var keyword?)))
(s/def ::path (s/or :path ::path-str
                    :paths ::path-list))
(s/def ::method #{:GET :POST :DELETE :PUT})
(s/def ::endpoint (s/keys :req-un [::path ::method]
                          :opt-un [::params ::returns ::response]))
(s/def ::endpoints (s/and map? #(every? (partial s/valid? ::endpoint) (vals %))))
(s/def ::service (s/keys :req-un [::path ::endpoints]))
(s/def ::version string?)
(s/def ::spellbook (s/and (s/keys :req-un [::version])
                          map?
                          #(every? (partial s/valid? ::service) (vals (dissoc % :version)))))

(defn validate!
  [spellbook]
  (when-not (s/valid? ::spellbook spellbook)
    (throw
      (ex-info "Provided spellbook is invalid" {:provided spellbook
                                                :explain (s/explain-str ::spellbook spellbook)})))
    spellbook)
