(ns ensorcel.resource.redis
  (:require [ensorcel.resource.core :as res]
            [taoensso.carmine :as car :refer (wcar)]))

(def localhost-conn {:pool {} :spec {:uri "redis://redis:6379/"}})

(defmacro wcar* [& body] `(car/wcar localhost-conn ~@body))

(defn- scan-all
  ([search-term] (scan-all search-term 0))
  ([search-term cursor]
   (let [[cursor results] (wcar* (car/scan cursor "match" search-term))]
      (if (zero? (Integer/parseInt cursor))
        results
        (lazy-cat results (scan-all search-term cursor))))))

(defn get-all
  [partial-k]
  (let [search-term (str partial-k "*")
        matching-keys (scan-all search-term)]
    (if (seq matching-keys)
      (wcar* (apply car/mget matching-keys))
      [])))

(defn resource
  [spellbook service & opts]
  (let [{:keys [next-id-fn start-id] :as opts} (merge res/defaults (apply hash-map opts))
        prefix (str (name service) ":")
        store {:get-by-id (fn [id] (wcar* (car/get (str prefix id))))
               :get-all   (fn [] (get-all prefix))
               :put       (fn [{:keys [id] :as item}] (wcar* (car/set (str prefix id) item)))
               :delete    (fn [id] (wcar* (car/del (str prefix id))))
               :next-id   (fn [] (let [next-id (wcar* (car/get "next-id"))]
                                   (wcar* (car/set "next-id" (next-id-fn next-id)))
                                   next-id))}]
    (wcar*
      (car/set "next-id" start-id))
    (res/resource (assoc opts
                         :spellbook spellbook
                         :service service
                         :store store))))
