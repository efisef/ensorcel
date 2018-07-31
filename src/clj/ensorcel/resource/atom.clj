(ns ensorcel.resource.atom
  (:require [ensorcel.resource.core :as res]))

(defn resource
  [spellbook service & opts]
  (let [{:keys [next-id-fn start-id] :as opts} (merge res/defaults (apply hash-map opts))
        data (atom {:store {} :next-id start-id})
        store {:get-by-id (fn [id] (get-in @data [:store id]))
               :get-all   (fn [] (vals (@data :store)))
               :put       (fn [{:keys [id] :as item}] (swap! data assoc-in [:store id] item))
               :delete    (fn [id] (swap! data update :store dissoc id))
               :next-id   (fn [] (let [next-id (:next-id @data)]
                                   (swap! data assoc :next-id (next-id-fn next-id))
                                   next-id))}]
    (res/resource (assoc opts
                         :spellbook spellbook
                         :service service
                         :store store))))
