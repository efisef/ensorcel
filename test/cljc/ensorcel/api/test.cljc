(ns ensorcel.api.test
  #?(:cljs (:require [schema.core :as s
                      :include-macros true])
     :clj  (:require [schema.core :as s])))

(def test-version "version")

(def test-spellbook
  {:version test-version
   :services {:service1 {:path "service1"
                         :endpoints {:endpoint1 {:path ""
                                                 :method :GET
                                                 :returns s/Str}
                                     :endpoint2 {:path ["plus1" :operand]
                                                 :method :POST
                                                 :args {:operand s/Int}
                                                 :returns s/Int}
                                     :endpoint3 {:path ["combine" :thing]
                                                 :method :POST
                                                 :args {:thing s/Str
                                                        :thang s/Str}
                                                 :returns s/Str}
                                     :endpoint4 {:path ["add" :key :amount]
                                                 :method :POST
                                                 :args {:key s/Keyword
                                                        :amount s/Int
                                                        :map {s/Keyword s/Int}}
                                                 :returns {s/Keyword s/Int}}
                                     :endpoint5 {:path "path"
                                                 :method :GET
                                                 :returns s/Str}
                                     :endpoint6 {:path "path"
                                                 :method :PUT
                                                 :args {:x s/Num}
                                                 :returns s/Num}}}}})
