(ns efisef-app.utils.divider
    (:require [reagent.core :as reagent]
              [cljss.core :refer [defstyles]]
              [cljss.reagent :refer-macros [defstyled]]))

; ----------------------------------------- STYLE -----------------------------------------

(defstyles component-style []
  {:display "flex"
   :justify-content "center"
   :align-items "center"
   :font-size "13px"
   :color "#6F6F6F"
   :flex-direction "row"})

(defstyles text-style []
  {:padding-left "5px"
   :padding-right "5px"})

(defstyled hr :hr
  {:display "block"
   :height "1px"
   :border "0px"
   :border-top "1px solid #ccc"
   :margin "1em 0"
   :width "40px"
   :padding 0})

; ----------------------------------------- COMPONENTS ------------------------------------

(defn component
  [text]
  [:div {:class (component-style)} [hr] [:span {:class (text-style)} text] [hr]])
