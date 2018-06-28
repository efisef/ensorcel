(ns efisef-app.utils.table
    (:require [reagent.core :refer [atom]]
              [clojure.string :as string]
              [cljss.reagent :refer-macros [defstyled]]
              [cljss.core :refer-macros [defstyles]]
              [efisef-app.utils :as utils]))

(defonce max-cells 25)

; ----------------------------------------- STYLE -----------------------------------------

(defstyles component-style []
  {:font-size "12px"
   :width "100%"})

(defstyles header-style []
  {:border-bottom "2px solid #C1C1C1"
   :height "30px"})

(defstyles head-style []
  {:text-align "center"
   :justify-content "center"
   :border "none"
   :padding-top "5px"})

(defstyles navigation-style []
  {:display "flex"
   :justify-content "space-evenly"})

(defstyled td :td
  {:min-width "200px"
   :text-overflow "ellipsis"
   :text-align "center"
   :overflow "hidden"
   :white-space "nowrap"
   :padding "5px"
   :border "1px solid #D3D3D3"
   :&:hover {:overflow "visible"
             :white-space "normal"
             :height "auto"}})

(defstyled table :table
  {:table-layout "fixed"
   :border-collapse "collapse"
   :width "100%"
   :border "1px solid #D3D3D3"})

(defstyled tr :tr
  {:background (with-meta #(if (odd? %) "#EFEFEF" "#FFFFFF") :row-num)
   :&:hover {:cursor "pointer"
             :background "#d5e9f7"}})

; ----------------------------------------- STATE -----------------------------------------

(defonce page (atom 0))

; ----------------------------------------- COMPONENTS ------------------------------------

(defn- format-headers
  [headers]
  (map (fn [title] ^{:key title} [:th (string/capitalize (name title))]) headers))

(defn- format-value
  [value]
  (cond-> value
    (number? value) utils/round))

(defn- format-row
  [headers click-fn i data]
  ^{:key (hash data)} [tr {:row-num i :on-click #(click-fn data)}
                       (map (fn [k] ^{:key k}
                              [td (format-value (data k))]) headers)])

(defn- format-rows
  [headers on-row-click data]
  (map (partial format-row headers on-row-click) (range) data))

(defn- header
  [headers child]
  (let [cells (conj
                (mapv (fn [k] ^{:key k} [:td {:class (head-style)} ""])
                      (drop 1 headers))
                ^{:key "text"} [:td {:class (head-style)} child])]
    (apply (partial vector :tr) cells)))

(defn- navigation
  [total]
  (let [pages (Math/ceil (/ total max-cells))]
    [:div {:class (navigation-style)}
     [:input {:type "button" :value "<<" :on-click #(reset! page (max 0 (dec @page)))}]
     (str "Page " (inc @page) " of " pages)
     [:input {:type "button" :value ">>" :on-click #(reset! page (min (dec pages) (inc @page)))}]]))

(defn vec-selector
  [items]
  (fn [page] (subvec items (* page max-cells) (min (count items) (* (inc page) max-cells)))))

(defn component
  [headers {:keys [data-selector total]} on-row-click]
  [:div {:class (component-style)}
   [table
    [:thead [header headers (navigation total)]]
    [:tbody
      (cons
        ^{:key "headers"} [:tr {:class (header-style)} (format-headers headers)]
        (format-rows headers on-row-click (take max-cells (data-selector @page))))]]])
