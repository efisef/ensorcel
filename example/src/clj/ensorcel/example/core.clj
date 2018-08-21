(ns ensorcel.example.core
  (:require [ensorcel.conjure :as conjure]
            [ensorcel.example.api :as api]
            [org.httpkit.server :as server])
  (:gen-class))

(defonce state (atom {:store {}
                      :next-id 0}))

(defn- get-widget
  [{id :id}]
  (get-in @state [:store id]))

(defn- new-widget
  [{:keys [msg secret-number]}]
  (let [state @state
        id (:next-id state)
        next-id (inc id)]
    (reset! state (-> state
                      (assoc :next-id next-id)
                      (assoc-in [:store id] {:msg msg
                                             :id id
                                             :secret-number (inc (or secret-number 41))})))))

(defn- delete-widget
  [{id :id}]
  (swap! state update :store dissoc id))

(def widget-service
  (conjure/service api/spellbook :widgets
                   :get    get-widget
                   :new    new-widget
                   :delete delete-widget))

(def app
  (conjure/app api/spellbook
               widget-service))

(defn -main
  [& args]
  (println "Hello, example!")
  (server/run-server app {:port 3000}))
