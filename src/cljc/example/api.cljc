(ns example.api
  #?(:cljs (:require [schema.core :as s
                      :include-macros true])
     :clj  (:require [schema.core :as s])))

; This will create a single service with multiple endpoints, at:
; GET localhost:8080/api/1/service1 (returns "hello, world!")
; GET localhost:8080/api/1/service1/plus1/3 (returns 4)
; POST localhost:8080/api/1/service/combine/this + {:and "that"} (returns "thisandthat")
; POST localhost:8080/api/1/service/add/bar/3 + {:foo 1 :bar 2} (returns {:foo 1 :bar 5})

(def spellbook
  {:version "1"
   :service1 {:path "service1"
              :endpoints {:endpoint1 {:path ""
                                      :method :GET
                                      :returns s/Str}
                          :endpoint2 {:path ["plus1" :operand]
                                      :method :POST
                                      :params {:operand s/Int}
                                      :returns s/Int}
                          :endpoint3 {:path ["combine" :thing]
                                      :method :POST
                                      :params {:thing s/Str
                                               :thang s/Str}
                                      :returns s/Str}
                          :endpoint4 {:path ["add" :thing :operand]
                                      :method :POST
                                      :params {:thing s/Str
                                               :operand s/Keyword
                                               :map {s/Keyword s/Int}}
                                      :returns {s/Keyword s/Int}}}}})
