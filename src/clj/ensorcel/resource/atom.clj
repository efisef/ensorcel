(ns ensorcel.resource.atom
  (:require [ring.util.http-response :refer [not-found! bad-request!]]))

(def defaults
  {:start-id nil
   :next-id (fn [_] (str (java.util.UUID/randomUUID)))})

(defn next-page
  [page num-pages]
  (when-not (= (inc page) num-pages) (str (inc page))))

(defn resource
  [spellbook service & opts]
  (let [{:keys [start-id next-id]} (merge defaults (apply hash-map opts))
        service-path (get-in spellbook [:services service :path])
        data (atom {:store {} :next-id start-id})]
    [spellbook
     service
     :get (fn [{id :id}] (if-let [result (get-in @data [:store id])]
                           result
                           (not-found! {:id id})))
     :get-all (fn [{:keys [page limit] :or {limit 5}}]
                (let [values (or (vals (@data :store)) [])
                      page (when page (Integer/parseInt page))
                      pages (partition-all limit values)]
                  (cond
                    (nil? page) {:values (first pages) :next (next-page 0 (count pages))}
                    (> page (count pages)) (bad-request! (format "Page %s does not exist!" page))
                    :else {:values (nth page values) :next (next-page page (count pages))})))
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
