(ns example.api
  #?(:cljs (:require [cljs.spec.alpha :as s])
     :clj  (:require [clojure.spec.alpha :as s])))

; This will create a single service with multiple endpoints, at:
; GET localhost:8080/api/1/service1 (returns "hello, world!")
; GET localhost:8080/api/1/service1/plus1/3 (returns 4)
; POST localhost:8080/api/1/service/combine/this + {:and "that"} (returns "thisandthat")
; POST localhost:8080/api/1/service/add/bar/3 + {:foo 1 :bar 2} (returns {:foo 1 :bar 5})

(s/def ::string string?)
(s/def ::thing ::string)
(s/def ::thang ::string)
(s/def ::number number?)
(s/def ::operand ::number)
(s/def ::foo ::operand)
(s/def ::bar ::operand)

(def spellbook
  {:version "1"
   :service1 {:path "service1"
              :endpoints {:endpoint1 {:path ""
                                      :method :GET
                                      :returns ::string}
                          :endpoint2 {:path ["plus1/" :operand]
                                      :method :POST
                                      :params (s/keys :req-un [::operand])
                                      :returns ::number}
                          :endpoint3 {:path ["combine/" :thing]
                                      :method :POST
                                      :params (s/keys :req-un [::thing ::thang])
                                      :returns ::string}
                          :endpoint4 {:path ["add/" :thing "/" ::operand]
                                      :method :POST
                                      :params (s/keys :req-un [::thing ::operand ::foo ::bar])
                                      :returns (s/keys :req-un [::foo ::bar])}}}})
