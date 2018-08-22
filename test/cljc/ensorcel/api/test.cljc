(ns ensorcel.api.test
  #?(:cljs (:require [cljs.spec.alpha :as s
                      :include-macros true]
                     [ensorcel.types :as t])
     :clj  (:require [clojure.spec.alpha :as s]
                     [ring.util.http-response :refer [created]]
                     [ensorcel.types :as t])))

(def test-version "version")

(s/def ::location ::t/string)

(s/def :widget/id     ::t/integer)
(s/def :widget/msg    ::t/string)
(s/def :widget/secret ::t/keyword)
(s/def :widget/num    ::t/double)

(s/def ::widget
  (s/keys :req-un [:widget/id
                   :widget/msg
                   :widget/secret
                   :widget/num]))

(s/def ::new-widget-request
  (t/only-keys :req-un [:widget/msg]
               :opt-un [:widget/secret
                        :widget/num]))

(s/def ::get-widget-request
  (t/only-keys :req-un [:widget/id]))

(s/def ::times-2-request
  (t/only-keys :req-un [:widget/id]))

(def spellbook
  {:version test-version
   :services {:widget {:path "widget"
                       :endpoints {:new     {:path    ""
                                             :query   [:num :secret]
                                             :args    ::new-widget-request
                                             :method  :POST
                                             :returns ::widget}
                                   :get-all {:path    ""
                                             :method  :GET
                                             :returns (s/* ::widget)}
                                   :get     {:path    [:id]
                                             :method  :GET
                                             :args    ::get-widget-request
                                             :returns ::widget}
                                   :times-2 {:path    ["times-2" :id]
                                             :method  :GET
                                             :args    ::times-2-request
                                             :returns :widget/num}}}

              :custom {:path "custom"
                       :endpoints {:custom-stuff {:path "stuff"
                                                  :method :POST
                                                  :headers {"Custom-Header" "custom"}
                                                  :response created
                                                  :returns ::location}}}}})
