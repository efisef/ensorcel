(ns efisef-app.core
  (:require [efisef-app.components.replay :as replay]
            [reagent.core :as reagent]
            [cljss.core :as css :refer-macros [defstyles]]))

(enable-console-print!)

(defstyles app-style []
  {:font-family  "Arial, Helvetica, sans-serif"
   :font-size "11px"
   :display "flex"
   :flex-direction "column"
   :position "absolute"
   :margin "auto"
   :left "0"
   :right "0"
   :width "800px"})

(defn app
  []
  [:div {:class (app-style)}
   [replay/component]])

(reagent/render-component [app] (. js/document (getElementById "app")))

(defn on-js-reload []
  (css/remove-styles!)
  (reagent/force-update-all))

