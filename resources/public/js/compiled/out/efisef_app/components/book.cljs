(ns efisef-app.components.book
  (:require [efisef-app.components.timestamp :as ts]
            [efisef-app.utils.spacer :as spacer]
            [efisef-app.utils.table :as table]
            [clojure.string :as string]
            [cljss.reagent :refer-macros [defstyled]]
            [cljss.core :as css :refer-macros [defstyles]]))

; ------------------------------------------ STYLES ---------------------------------------------------

(defstyles component-style []
  {:border "1px solid #000000"
   :padding "10px"
   :display "inline-block" })

(defstyles info-style []
  {:display "flex"
   :padding "5px"
   :flex-direction "row"})

(defstyles sides-style []
  {:display "flex"
   :flex-direction "row"
   :margin-top "10px"})

(defstyles title-style []
  {:margin-top "5px"})

(defstyles asks-style []
  {:margin-right "5px"})

(defstyles bids-style []
  {:margin-left "5px"})

; ------------------------------------------ COMPONENTS --------------------------------------------------

(defn book?
  [thing]
  (when (and thing (map? thing)) (every? thing [:bids :asks])))

(defn- info-component
  [{:keys [timestamp exchange base quote]}]
  [:div {:class (info-style)}
   [ts/component timestamp]
   [spacer/component :vertical]
   [:b exchange]
   [spacer/component :vertical]
   [:div [:b "Base: "] base]
   [spacer/component :vertical]
   [:div [:b "Quote: "] quote]])

(defonce ^:private table-headers [:price :size])

(defn- book->table
  [side book]
  (let [sort-fn #(cond-> (sort-by :price %) (= side :bids) reverse)]
    (vec (sort-fn (for [[price size] book] {:price price :size size})))))

(defn- side-component
  [side book]
  [:div
   [:h3 {:class (title-style)} (string/capitalize (name side))]
   [table/component
    table-headers
    {:data-selector (table/vec-selector (book->table side book))
     :total (count book)}
    (constantly nil)]])

(defn- sides-component
  [{:keys [asks bids]}]
  [:div {:class (sides-style)}
   [:div {:class (asks-style)} [side-component :asks asks]]
   [:div {:class (bids-style)} [side-component :bids bids]]])

(defn component
  [state]
  [:div {:class (component-style)}
   [info-component state]
   [spacer/component :horizontal]
   [sides-component state]])
