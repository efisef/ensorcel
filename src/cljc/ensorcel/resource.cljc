(ns ensorcel.resource
  #?(:cljs (:require [schema.core :as s
                      :include-macros true])
     :clj  (:require [schema.core :as s]
                     [ring.util.http-response :refer [created]])))

(def Location s/Str)

(defmulti endpoint :method)

(defmethod endpoint :GET [{:keys [resource id]}]
  {:get {:path [:id]
         :method :GET
         :args {:id id}
         :returns resource}
   :get-all {:path ""
             :method :GET
             :returns [resource]}})

(defmethod endpoint :POST [{:keys [resource]}]
  {:new {:path ""
         :method :POST
         :args (dissoc resource :id)
         :response created
         :returns Location}})

(defmethod endpoint :PUT [{:keys [resource]}]
  {:edit {:path [:id]
          :method :PUT
          :args resource
          :returns resource}})

(defmethod endpoint :DELETE [{:keys [id resource]}]
  {:delete {:path [:id]
            :method :DELETE
            :args {:id id}
            :returns resource}})

(defn resource
  [{:keys [supports path] :as spec}]
  {:path path
   :endpoints (apply merge (map #(endpoint (assoc spec :method %)) supports))})
