(ns ensorcel.conjure-test
  (:require [clojure.test :refer :all]
            [clojure.spec.alpha :as s]
            [clojure.edn :as edn]
            [ensorcel.conjure :as c]
            [ensorcel.types :as t]
            [ensorcel.api.test :as api]
            [org.httpkit.client :as http]
            [org.httpkit.server :refer [run-server]]
            [ring.util.http-predicates :refer [success?]]))

; -- SETUP --------------------------------------------------------------------

(def stub-widget
  {:id 0
   :msg "hello"
   :secret :a-secret
   :num 42.0})

(defn- new-widget
  [{:keys [msg secret num] :as args}]
  (assert (empty? (dissoc args :id :msg :secret :num)))
  (if num
    (do
      (assert (double? num))
      (merge stub-widget (assoc args :id 0)))
    stub-widget))

(defn- get-all-widgets
  []
  [stub-widget])

(defn- get-widget
  [{id :id :as args}]
  (assert (= 1 (count args)))
  (assert (integer? id))
  stub-widget)

(defn- times-2-widget
  [{id :id :as args} req]
  (assert (every? (set (keys req)) [:headers :cookies :params :server-name])) ; etc
  (* 2 42.1))

(defn- custom-stuff
  []
  "/custom")

(def widget-service
  (c/service api/spellbook :widget
             :new     new-widget
             :get-all get-all-widgets
             :get     get-widget
             :times-2 times-2-widget
             :custom-stuff custom-stuff))

(def custom-service
  (c/service api/spellbook :custom
             :custom-stuff custom-stuff))

(def app
  (c/app api/spellbook {}
         widget-service
         custom-service))

(def app-with-version
  (c/app api/spellbook {:include-version? true} widget-service))

; -- TEST FUNCTIONS -----------------------------------------------------------

(defn read-edn
  [body]
  (edn/read-string (slurp body)))

(defn extract-body
  [{:keys [status headers body error] :as resp}]
  (if (or error (not (success? resp)))
    (throw (ex-info (str "HTTP " status ": " resp) {}))
    (do
      (cond-> body
        (re-find #"octet" (headers :content-type)) slurp
        (re-find #"edn"  (headers :content-type)) read-edn))))

(defn extract-headers
  [{:keys [status headers error] :as resp}]
  (if (or error (not (success? resp)))
    (throw (ex-info (str "HTTP " status) resp))
    headers))

(defn path
  [path]
  (str "http://localhost:8088/api/" path))

(defn body
  ([x] (body {} x))
  ([contents x]
   (-> contents
       (update :headers assoc "content-type" "application/edn")
       (assoc  :body (pr-str x)))))

(defmacro test-app
  [app & body]
  `(let [kill!# (run-server ~app {:port 8088})]
     (try
       ~@body
       (finally (kill!#)))))

; -- TESTS --------------------------------------------------------------------

(deftest test-with-version
  (test-app app-with-version
    (testing "adds version string into URL"
      (is (= "pong" (extract-body @(http/get (path (str api/test-version "/ping/")))))))))

(deftest test-validation
  (testing "validates spellbook"
    (is (thrown-with-msg? RuntimeException
                          #"Spellbook failed validation"
                          (c/app {} widget-service))))
  (testing "throws if service doesn't exist"
    (is (thrown-with-msg? RuntimeException
                          #"Service does not exist in spellbook"
                          (c/service api/spellbook :foo))))
  (testing "throws if endpoint impl. missing"
    (is (thrown-with-msg? RuntimeException
                          #"Spec only partially defined"
                          (c/service api/spellbook :widget)))))

(deftest test-default-endpoints
  (test-app app
    (testing "adds ping endpoint"
      (is (= "pong" (extract-body @(http/get (path "ping/"))))))
    (testing "adds version endpoint"
      (is (= api/test-version (extract-body @(http/get (path "version/"))))))
    (testing "adds options endpoints"
      (let [headers (extract-headers @(http/options (path "ping/")))]
        (is (= "OPTIONS,GET" (:allow headers)))))))

(deftest test-endpoints-arguments
  (test-app app
    (testing "hit no arg endpoint"
      (let [body (extract-body @(http/get (path "widget/")))]
        (is (= [stub-widget] body))))
    (testing "hit 1 arg endpoint"
      (let [body (extract-body @(http/get (path "widget/1")))]
        (is (= stub-widget body))))
    (testing "hit 2 arg endpoint"
      (let [body (extract-body @(http/get (path "widget/times-2/1")))]
        (is (= "84.2" body))))
    (testing "strips extra arguments"
      (let [body (extract-body @(http/post (path "widget/")
                                           (body {:msg "foo"
                                                  :haahaha "this is here!"})))]
        (is (= stub-widget body))))))

(deftest test-special-arguments
  (test-app app
    (testing "query params"
      (let [expected {:msg "hello,world!"
                      :num 41.0
                      :id 0
                      :secret :new-secret}
            body (extract-body @(http/post (path "widget/?num=41.0&secret=new-secret")
                                           (body expected)))]
        (is (= expected body))))))

(deftest test-custom-options
  (test-app app
    (testing "custom response wrappers"
      (let [resp @(http/post (path "custom/stuff"))
            headers (extract-headers resp)]
        (is (= "http://localhost:8088/custom" (headers :location)))))
    (testing "custom headers"
      (let [resp @(http/post (path "custom/stuff"))
            headers (extract-headers resp)]
        (is (= "custom" (headers :custom-header)))))))

(deftest test-errors
  (test-app app
    (testing "bad request - missing args"
      (let [resp @(http/post (path "widget/")
                             (body {}))]
        (is (= 400 (:status resp)))))
    (testing "bad request - arg types"
      (let [resp @(http/post (path "widget/")
                             (body {:msg 3}))]
        (is (= 400 (:status resp)))))))


