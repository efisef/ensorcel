(ns example.restful.api
  #?(:cljs (:require [schema.core :as s
                      :include-macros true]
                     [ensorcel.resource :as r])
     :clj  (:require [schema.core :as s]
                     [ensorcel.resource :as r])))

; A REST-oriented API (vs. something a bit more freeform as is the default)
; Fulfills most CRUD-like operations on a service

(def ID s/Int)

(def Resource
  {:id ID
   :msg s/Str})

(def spellbook
  {:version "1"
   :services {:postbox (r/resource {:path "postbox"
                                     :resource Resource
                                     :id ID
                                     :supports [:GET :POST :PUT :DELETE]})}})

; The above will become this on expansion
;
;(def spellbook
;  {:version "1"
;   :services {:postbox {:path "postbox"
;                        :endpoints {:get {:path [:id]
;                                          :method :GET
;                                          :args {:id ID}
;                                          :returns Resource}
;                                    :get-all {:path ""
;                                              :method :GET
;                                              :returns [Resource]}
;                                    :new {:path ""
;                                          :method :POST
;                                          :args {:msg s/Str}
;                                          :response created
;                                          :returns Location}
;                                    :edit {:path [:id]
;                                           :method :PUT
;                                           :args Resource
;                                           :returns Resource}
;                                    :delete {:path [:id]
;                                             :method :DELETE
;                                             :args {:id ID}
;                                             :returns Resource}}}}})
