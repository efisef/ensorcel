(ns ensorcel.re-frame
  (:require [re-frame.core :refer [reg-fx] :as rf]
            [ensorcel.conjure :as conjure]))

(defn- get-client
  [spellbook service options]
  (apply conjure/client spellbook service options))

(defn reg-ensorcel-fx
  [spellbook & {:as options}]
  (reg-fx
    :ensorcel
    (fn [{:keys [service endpoint token args dispatch]}]
      (let [client (cond->> (get-client spellbook service options)
                     token  (conjure/inject-token token))]
        (conjure/call-> (client endpoint args)
                        #(doseq [event dispatch]
                           (rf/dispatch [event %])))))))
