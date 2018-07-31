(ns ensorcel.resource.core
  (:require [ring.util.http-response :refer [not-found! bad-request!]]))

(def defaults
  {:start-id (str (java.util.UUID/randomUUID))
   :next-id-fn (fn [_] (str (java.util.UUID/randomUUID)))})

(defn next-page
  [page num-pages]
  (when-not (= (inc page) num-pages) (str (inc page))))

(defn resource
  [{:keys [spellbook service start-id next-id-fn store] :as opts}]
  (let [opts (merge defaults opts)
        {:keys [get-by-id get-all put delete next-id]} store
        service-path (get-in spellbook [:services service :path])]
    [spellbook
     service
     :get (fn [{id :id}] (if-let [result (get-by-id id)]
                           result
                           (not-found! {:id id})))
     :get-all (fn [{:keys [page limit] :or {limit 100}}]
                (let [values (or (get-all) [])
                      page (when page (Integer/parseInt page))
                      pages (partition-all limit values)]
                  (cond
                    (empty? pages) {:values [] :next nil}
                    (nil? page) {:values (first pages) :next (next-page 0 (count pages))}
                    (>= page (count pages)) (bad-request! (format "Page %s does not exist!" page))
                    :else {:values (nth pages page) :next (next-page page (count pages))})))
     :new (fn [contents]
            (let [id (next-id)
                  item (assoc contents :id id)]
              (put item)
              (format "/api/%s/%s" service-path id)))
     :edit (fn [{:keys [id] :as item}]
             (when-not (get-by-id id)
               (not-found! {:id id}))
             (put item)
             item)
     :delete (fn [{:keys [id]}]
               (if-let [item (get-by-id id)]
                 (do (delete id)
                     item)
                 (not-found! {:id id})))]))
