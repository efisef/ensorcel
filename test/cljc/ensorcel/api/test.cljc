(ns ensorcel.api.test
  #?(:cljs (:require [cljs.spec.alpha :as s
                      :include-macros true]
                     [ensorcel.types :as t])
     :clj  (:require [clojure.spec.alpha :as s]
                     [ensorcel.types :as t])))

(def test-version "version")

(s/def ::operand ::t/integer)
(s/def ::thing ::t/string)
(s/def ::thang ::t/string)
(s/def ::key ::t/keyword)
(s/def ::amount ::t/integer)
(s/def ::map (s/map-of ::t/keyword ::t/integer))
(s/def ::x ::t/integer)

(def test-spellbook
  {:version test-version
   :services {:test {:path "test"
                     :endpoints {:endpoint1 {:path ""
                                                 :method :GET
                                                 :returns ::t/string}
                                 :endpoint2 {:path ["plus1" :operand]
                                             :method :POST
                                             :args (s/keys :req-un [::operand])
                                             :returns ::t/integer}
                                 :endpoint3 {:path ["combine" :thing]
                                             :method :POST
                                             :args (s/keys :req-un [::thing ::thang])
                                             :returns ::t/string}
                                 :endpoint4 {:path ["add" :key :amount]
                                             :method :POST
                                             :args (s/keys :req-un [::key ::amount ::map])
                                             :returns (s/map-of ::t/keyword ::t/integer)}
                                 :endpoint5 {:path "path"
                                             :method :GET
                                             :returns ::t/string}
                                 :endpoint6 {:path "path"
                                             :method :PUT
                                             :args (s/keys :req-un [::x])
                                             :returns ::t/integer}}}}})
