(ns example.restful.server
  (:require [org.httpkit.server :refer [run-server]]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.util.http-response :refer [not-found!]]
            [ensorcel.conjure :as c]
            [example.restful.api :as api]))

(def defaults
  {:start-id nil
   :next-id (fn [_] (str (java.util.UUID/randomUUID)))})

(defn restful-atom
  [spellbook service & opts]
  (let [{:keys [start-id next-id]} (merge defaults (apply hash-map opts))
        data (atom {:store {} :next-id start-id})]
    [spellbook
     service
     :get (fn [{id :id}] (if-let [result (get-in @data [:store id])]
                           result
                           (not-found! {:id id})))
     :get-all (fn [] (or (vals (@data :store)) []))
     :new (fn [contents]
            (let [{store :store id :next-id} @data
                  item (assoc contents :id id)] ; TODO should be id key
              (swap! data assoc :next-id (next-id id))
              (swap! data assoc-in [:store id] item)
              (str "http://localhost:8000/api/postbox/" id)))
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

(def service
  (apply c/service (restful-atom api/spellbook :postbox
                                 :start-id 0
                                 :next-id inc)))

(def example-app
  (c/app api/spellbook
         service))

(defn make-rocket-go-now
  []
  (run-server
    (wrap-cors example-app
               :access-control-allow-origin  [#".*"]
               :access-control-allow-credentials "true"
               :access-control-allow-methods  [:get :post :delete])
    {:port 8000}))

