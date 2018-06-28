(ns efisef-app.components.replay
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [efisef-app.components.book :as book]
            [efisef-app.components.bot-state :as bot-state]
            [efisef-app.components.feed-update :as feed-update]
            [reagent.core :as reagent :refer [atom]]
            [cljss.core :as css :refer-macros [defstyles]]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

; ----------------------------------------- STYLE -----------------------------------------

(defstyles navigation-style []
  {:margin-left "10px"
   :margin-right "10px"})

; ----------------------------------------- STATE -----------------------------------------

(defonce state
  (atom {:update {:timestamp 1529325000000000
            :exchange :binance
            :event "modify"
            :quote :usdt
            :base :btc
            :asks {"0.3" 0.00}
            :bids {"1.44" 0.123423423
                   "10000.44" 1.123}}
   :state {{:some :state} {:timestamp 1529325000000000
                :exchange :binance
                :quote :usdt
                :base :btc
                :asks {"1.23" 1.0
                       "1.34" 2.0
                       "0.3" 0.00}
                :bids {"1.44" 0.123423423
                       "10000.44" 1.123}}
            {:other :state} 123123123123132}}))

(defonce step (atom 1))

; ----------------------------------------- COMPONENTS ------------------------------------

(defn- get-app-state
  []
  (go (let [response (<! (http/get "http://localhost:8080" {:with-credentials? false}))]
        (reset! state (:body response)))))

(defn- seek!
  [step]
  (go (let [response (<! (http/post (str "http://localhost:8080/seek/" step)
                                    {:with-credentials? false}))]
        (reset! state (merge @state (:body response))))))

(defn- navigation-component
  []
  [:div {:class (navigation-style)}
   [:input {:type "button" :value "< Prev" :on-click #(seek! (- @step))}]
   [:input {:type "number" :value @step :on-change #(reset! step (-> % .-target .-value))}]
   [:input {:type "button" :value "Next >" :on-click #(seek! @step)}]])

(defn component
  []
  [:div
   [navigation-component]
   [:div
     [feed-update/component (:update @state)]
     [bot-state/component (:state @state)]]])
