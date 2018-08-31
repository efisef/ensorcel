(ns ensorcel.re-frame
  (:require [re-frame.core :refer [reg-fx] :as rf]
            [ensorcel.conjure :as conjure]))

(defn- get-client
  [spellbook service options]
  (apply conjure/client spellbook service options))

(defn reg-ensorcel-fx
  [spellbook & options]
  (reg-fx
    :ensorcel
    (fn [{:keys [service endpoint args dispatch]}]
      (let [options (apply hash-map options)
            client (get-client spellbook service options)]
        (conjure/call-> (client endpoint args)
                        #(doseq [event dispatch]
                           (rf/dispatch [event %])))))))
