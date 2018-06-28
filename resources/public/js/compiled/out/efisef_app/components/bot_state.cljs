(ns efisef-app.components.bot-state
  (:require [efisef-app.components.book :as book]
            [efisef-app.utils.divider :as divider]
            [efisef-app.utils.spacer :as spacer]
            [reagent.core :as reagent :refer [atom]]
            [cljss.core :as css :refer-macros [defstyles]]))

; ------------------------------------------ STYLES ---------------------------------------------------

(defstyles selector-style []
  {:border "1px solid #000000"
   :padding "10px"
   :margin-bottom "10px"})

(defstyles component-style []
  {:display "flex"
   :padding "10px"
   :flex-direction "column"})

(defstyles value-style []
  {:text-align "center"
   :border "1px solid #000000"
   :padding-bottom "10px"})

(defstyles no-state-style []
  {:text-align "center"
   :font-style "italic"
   :color "gray" })

(defstyles listing-title-style []
  {:margin-left "5px"})

(defstyles value-title-style []
  {:margin-bottom "5px"})

; ------------------------------------------ STATE ----------------------------------------------------

(def selected-listing (atom nil))

; ------------------------------------------ COMPONENTS -----------------------------------------------

(defn value-component
  [value]
  [:div {:class (value-style)}
   [:h4 {:class (value-title-style)} "Value"]
   [spacer/component :horizontal]
   value])

(defn listing-component
  [l]
  [:div
   [:span
     [:input {:type "radio"
              :name "listing"
              :value l
              :on-change #(reset! selected-listing l)}]
     l]])

(defn listing-selector-component
  [listings]
  [:div {:class (selector-style)}
   [:b {:class (listing-title-style)} "Keys"]
   [spacer/component :horizontal]
   [:form
    (for [listing listings]
      ^{:key listing} [listing-component listing])]])

(defn- no-state-component
  []
  [:div {:class (no-state-style)}
   [divider/component "No State Selected"]])

(defn component
  [state]
  [:div {:class (component-style)}
   [listing-selector-component (keys state)]
   (let [selected-state (get state @selected-listing)]
     (cond
       (book/book? selected-state) [book/component selected-state]
       (nil? @selected-listing) [no-state-component]
       :else [value-component selected-state]))])
