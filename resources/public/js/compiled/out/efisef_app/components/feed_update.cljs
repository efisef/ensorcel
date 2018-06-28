(ns efisef-app.components.feed-update
  (:require [efisef-app.components.book :as book]
            [efisef-app.components.timestamp :as ts]
            [cljss.core :as css :refer-macros [defstyles]]))

; ------------------------------------------ STYLES ---------------------------------------------------

(defstyles component-style []
  {:display "inline-flex"
   :padding "10px"
   :flex-direction "column"})

(defstyles type-style []
  {:text-align "center"
   :border "1px solid #000000"
   :padding "5px"
   :margin-bottom "5px"})

(defstyles trade-style []
  {:border "1px solid #000000"
   :min-width "400px"
   :display "flex"
   :padding "10px"
   :text-align "left"
   :flex-direction "column"})

(defstyles text-style []
  {:padding "5px"})

; ------------------------------------------ COMPONENTS -----------------------------------------------

(defn trade-component [{:keys [timestamp aggressor quantity price]}]
  [:div {:class (trade-style)}
   [:div {:class (text-style)} (ts/component timestamp)]
   [:span {:class (text-style)} [:b "Aggressor: "] aggressor]
   [:span {:class (text-style)} [:b "Price: "] price]
   [:span {:class (text-style)} [:b "Quantity: "] quantity]])

(defn component
  [state]
  (let [{:keys [event exchange]} state]
    [:div {:class (component-style)}
      [:span {:class (type-style)} event " - " exchange]
      (when state
        (case event
          "modify" [book/component state]
          "match" [trade-component state]))]))
