(ns ensorcel.resource.atom
  (:require [ring.util.http-response :refer [not-found!]]))

(def defaults
  {:start-id nil
   :next-id (fn [_] (str (java.util.UUID/randomUUID)))})

(defn resource
  [spellbook service & opts]
  (let [{:keys [start-id next-id]} (merge defaults (apply hash-map opts))
        service-path (get-in spellbook [service :path])
        data (atom {:store {} :next-id start-id})]
    [spellbook
     service
     :get (fn [{id :id}] (if-let [result (get-in @data [:store id])]
                           result
                           (not-found! {:id id})))
     :get-all (fn [] (or (vals (@data :store)) []))
     :new (fn [contents]
            (let [{store :store id :next-id} @data
                  item (assoc contents :id id)]
              (swap! data assoc :next-id (next-id id))
              (swap! data assoc-in [:store id] item)
              (format "/api/%s/%s" service-path id)))
     :edit (fn [{:keys [id] :as item}]
             (when-not (get-in @data [:store id])
               (not-found! {:id id}))
             (swap! data assoc-in [:store id] item)
             item)
     :delete (fn [{:keys [id]}]
               (if-let [item (get-in @data [:store id])]
                 (do (swap! data update :store dissoc id)
                     item)
                 (not-found! {:id id})))]))
