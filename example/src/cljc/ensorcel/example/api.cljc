(ns ensorcel.example.api
  #?(:cljs (:require [cljs.spec.alpha :as s
                      :include-macros true]
                     [ensorcel.types :as types])
     :clj  (:require [clojure.spec.alpha :as s]
                     [ensorcel.types :as types])))

(def api-version "1")

; -- COMMON -------------------------------------------------------------------

(s/def ::location string?)

; -- WIDGETS ------------------------------------------------------------------

(s/def :widget/id ::types/string)
(s/def :widget/msg ::types/string)
(s/def :widget/secret-number ::types/integer)

(s/def ::widget
  (s/keys :req-un [:widget/id
                   :widget/msg
                   :widget/secret-number]))

(s/def ::new-widget-request
  (s/keys :req-un [:widget/msg]
          :opt-un [:widget/secret-number]))

; -- SERVICES -----------------------------------------------------------------

(def spellbook
  {:version api-version
   :services {:widgets {:get    {:path [:id]
                                 :method :GET
                                 :args (s/keys :req-un [:widget/id])
                                 :returns ::widget}
                        :new    {:path ""
                                 :method :POST
                                 :args ::new-widget-request
                                 :response created
                                 :returns ::location}
                        :delete {:path [:id]
                                 :method :DELETE
                                 :args (s/keys :req-un [:widget/id])
                                 :returns ::widget}}}})
