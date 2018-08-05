(ns ensorcel.conjure-test
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.test :refer-macros [deftest
                                      async
                                      is
                                      testing]]
            [schema.core :as s]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]
            [ensorcel.api.test :as api]
            [ensorcel.conjure :as conjure]))

(deftest test-format-path
  (is (= ["foo" "bar" "baz"] (conjure/format-path {:1 "foo" :2 "bar" :3 "baz"} [:1 :2 :3])))
  (is (= ["foo" "bar" "baz"] (conjure/format-path {:1 "foo" :3 "baz"} [:1 "bar" :3])))
  (testing "ignores extra params"
    (is (= ["foo" "bar"] (conjure/format-path {:1 "foo" :3 "baz"} [:1 "bar"]))))
  (testing "works with duplicated params"
    (is (= ["foo" "bar" "foo"] (conjure/format-path {:1 "foo" :3 "baz"} [:1 "bar" :1]))))
  (testing "thrown if missing arg"
    (is (thrown? ExceptionInfo (conjure/format-path {} [:1 "bar"])))))

(deftest test-query-fn
  (testing "formatting"
    (is (= "foo=bar" (conjure/query-fn [:foo] {:foo "bar" :baz 1})))
    (is (= "foo=bar&baz=1" (conjure/query-fn [:foo :baz] {:foo "bar" :baz 1}))))
  (testing "does not add if not defined"
    (is (= "" (conjure/query-fn [:foo] {})))))

(deftest test-path-fn
  (testing "static path"
    (is (= "base/path" ((conjure/path-fn "base" "path" []))))
    (is (= "base/path/sub-path" ((conjure/path-fn "base" "path/sub-path" [])))))
  (testing "dynamic path"
    (is (= "base/path/foo/bar" ((conjure/path-fn "base/path" [:1 "/" "bar"] []) {:1 "foo"})))
    (is (= "base/path/foo/bar" ((conjure/path-fn "base/path" ["foo" "/" :1] []) {:1 "bar"}))))
  (testing "query args"
    (is (= "base/path?foo=bar" ((conjure/path-fn "base" "path" [:foo]) {:foo "bar"}))))
  (testing "if no params defined will not add trailing ?"
    (is (= "base/path" ((conjure/path-fn "base" "path" [:foo]) {})))))

(deftest test-body-fn
  (testing "no params provided"
    (is (nil? ((conjure/body-fn [] [] nil))))
    (is (nil? ((conjure/body-fn [] [] nil) {:some :stuff}))))
  (let [schema {:foo s/Int :bar s/Int}]
    (testing "thrown on invalid body"
      (is (thrown? ExceptionInfo ((conjure/body-fn [] [] schema) {:not :foo}))))
    (testing "throws with extra params in body"
      (is (thrown? ExceptionInfo ((conjure/body-fn [] [] schema) {:foo 1 :bar 2 :other 3}))))
    (testing "does not include url params in body"
      (is (= {:foo 1} ((conjure/body-fn ["hello" :bar] [] schema) {:foo 1 :bar 2}))))
    (testing "does not include query params in body"
      (is (= {:foo 1} ((conjure/body-fn [] ["hello" :bar] schema) {:foo 1 :bar 2}))))))

(def client (conjure/client api/test-spellbook :test))

(def bad-spellbook
  {:service {:path "path!!!@@@@"
             :endpoints {:endpoint1 {:path "sub-path"
                                     :method :GET}}}})

(defn url-check
  [expected]
  (fn [path opts]
    (is (= expected path))
    {:success true}))

(defn expects-then-returns
  [expects value]
  (fn [path opts]
    (when-let [path' (:path expects)]
      (is (= path' path)))
    (if-let [body (:body expects)]
      (is (= body (:json-params opts)))
      (is (nil? (:json-params opts))))
    (if-let [headers (:headers expects)]
      (is (= headers (:headers opts)))
      (is (nil? (:headers opts))))
    {:success true :body value}))

(defn do-call
  [{call-fn :call-fn args :args schema :schema headers :headers}]
  (conjure/extract schema [] (call-fn args headers)))

(deftest test-client
  (testing "validates spec"
    (is (thrown? ExceptionInfo (conjure/client bad-spellbook :service))))
  (testing "adds version method"
    (with-redefs [http/get (url-check "http://localhost:8080/api/version/")]
      (do-call (client :version))))
  (testing "adds ping method"
    (with-redefs [http/get (url-check "http://localhost:8080/api/ping/")]
      (do-call (client :ping))))
  (testing "endpoint1"
    (with-redefs [http/get (expects-then-returns nil "hello world!")]
      (is (= "hello world!" (do-call (client :endpoint1))))))
  (testing "endpoint2"
    (with-redefs [http/post (expects-then-returns {:path "http://localhost:8080/api/test/plus1/1"} 2)]
      (is (= 2 (do-call (client :endpoint2 :operand 1))))))
  (testing "endpoint3"
    (with-redefs [http/post (expects-then-returns {:path "http://localhost:8080/api/test/combine/thing"
                                                   :body {:thang "thang"}} "thingthang")]
      (is (= "thingthang" (do-call (client :endpoint3 :thing "thing" :thang "thang"))))))
  (testing "endpoint4"
    (with-redefs [http/post (expects-then-returns {:path "http://localhost:8080/api/test/add/foo/1"
                                                   :body {:map {:foo 1 :bar 2}}} {:foo 2 :bar 2})]
      (is (= {:foo 2 :bar 2} (do-call (client :endpoint4 :key :foo :amount 1 :map {:foo 1 :bar 2}))))))
  (testing "endpoint5"
    (with-redefs [http/get (expects-then-returns {:path "http://localhost:8080/api/test/path"}
                                                 "path")]
      (is (= "path" (do-call (client :endpoint5))))))
  (testing "endpoint6"
    (with-redefs [http/put (expects-then-returns {:path "http://localhost:8080/api/test/path"
                                                  :body {:x 1}}
                                                 "path")]
      (is (= "path" (do-call (client :endpoint6 :x 1))))))
  (testing "adding token"
    (let [token "abc123"]
     (with-redefs [http/put (expects-then-returns {:path "http://localhost:8080/api/test/path"
                                                   :body {:x 1}
                                                   :headers {"Authorization" (str "Token " token)}}
                                                   "path")]
      (is (= "path" (do-call ((conjure/inject-token token client) :endpoint6 :x 1))))))))

(deftest test-pagination-single
  (let [client (conjure/client api/test-spellbook :resource)
        values [{:id 1 :msg "hi"} {:id 2 :msg "there"}]]
    (testing "single page"
      (async done
             (go
               (is (= values
                      (with-redefs [http/get (fn [_ _] (go {:success true :body {:values values :next nil}}))]
                        (<! (conjure/extract-pages (client :get-all))))))
               (is (= values
                      (with-redefs [http/get (fn [path opts] (let [page (js/parseInt (last (re-find #"page=(.+)" path)))]
                                                               (go {:success (zero? page) :body {:values values
                                                                                                 :next nil}})))]
                        (<! (conjure/extract-pages (client :get-all :page "0"))))))
                 (done))))))

(deftest test-pagination-multiple
  (let [client (conjure/client api/test-spellbook :resource)
        values [{:id 1 :msg "hi"} {:id 2 :msg "there"}]]
    (testing "multiple pages"
      (async done
             (go
               (is (= (concat values values)
                      (with-redefs [http/get (fn [path opts]
                                               (let [page (js/parseInt (last (re-find #"page=(.+)" path)))]
                                                 (go {:success true :body {:values values :next (if (zero? page) "1" nil)}})))]
                        (<! (conjure/extract-pages (client :get-all :page "0"))))))
                 (done))))))
