(ns efisef-app.utils.spacer
    (:require [cljss.core :refer [defstyles]]
              [cljss.reagent :refer-macros [defstyled]]))

; ----------------------------------------- STYLE -----------------------------------------

(defstyles component-style []
  {:display "flex"
   :justify-content "center"
   :align-items "center"
   :font-size "13px"
   :color "#6F6F6F"
   :margin-left "5px"
   :margin-right "5px"
   :flex-direction "row"})

(defstyled vr :div
  {:display "block"
   :width "1px"
   :border "0px"
   :border-left "1px solid #ccc"
   :min-height "10px"
   :padding 0})

(defstyled hr :hr
  {:display "block"
   :height "1px"
   :border "0px"
   :border-top "1px solid #ccc"
   :width "100%"
   :padding 0})

; ----------------------------------------- COMPONENTS ------------------------------------

(defn component
  [style]
  (case style
    :horizontal [:div {:class (component-style)} [hr]]
    :vertical   [:div {:class (component-style)} [vr]]))
