(ns ensorcel.conjure-test
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.test :refer-macros [deftest
                                      async
                                      is
                                      testing]]
            [cljs.spec.alpha :as s :include-macros true]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]
            [ensorcel.api.test :as api]
            [ensorcel.types :as t]
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
  (let [_ (s/def ::foo ::t/integer)
        _ (s/def ::bar ::t/integer)
        _ (s/def ::schema (s/keys :req-un [::foo ::bar]))]
    (testing "thrown on invalid body"
      (is (thrown? ExceptionInfo ((conjure/body-fn [] [] ::schema) {:not :foo}))))
    (testing "does not include url params in body"
      (is (= {:foo 1} ((conjure/body-fn ["hello" :bar] [] ::schema) {:foo 1 :bar 2}))))
    (testing "does not include query params in body"
      (is (= {:foo 1} ((conjure/body-fn [] ["hello" :bar] ::schema) {:foo 1 :bar 2}))))))

(def client (conjure/client api/spellbook :widget))
(def client-with-version (conjure/client api/spellbook :widget
                                         :include-version? true))

(def bad-spellbook
  {:service {:path "path!!!@@@@"
             :endpoints {:endpoint1 {:path "sub-path"
                                     :method :GET}}}})

(defn url-check
  [expected]
  (fn [path opts]
    (is (= (str "http://localhost:8080/api/" expected) path))
    {:success true}))

(defn body-check
  [expected]
  (fn [path opts]
    (is (= expected (:edn-params opts)))
    {:success true}))

(defn headers-check
  [expected]
  (fn [path opts]
    (is (= expected (:headers opts)))
    {:success true}))

(defn do-call
  [{call-fn :call-fn args :args spec :spec headers :headers}]
  (conjure/extract spec [] (call-fn args headers)))

(deftest test-version-client
  (testing "adds version to the ping url"
    (with-redefs [http/get (url-check (str api/test-version "/ping/"))]
      (do-call (client-with-version :ping))))
  (testing "adds version to the url"
    (with-redefs [http/get (url-check (str api/test-version "/widget/"))]
      (do-call (client-with-version :get-all)))))

(deftest test-client-urls
  (testing "embeds url params"
    (with-redefs [http/get (url-check "widget/1")]
      (do-call (client :get {:id 1}))))
  (testing "adds query arguments"
    (with-redefs [http/post (url-check "widget/?num=42.1&secret=hello")]
      (do-call (client :new {:num 42.1 :secret :hello :msg "message"})))))

(deftest test-client-body
  (testing "provides correct arguments in body"
    (with-redefs [http/post (body-check {:msg "message"})]
      (do-call (client :new {:num 42.1 :secret :hello :msg "message"})))))

(deftest test-results
  (testing "correctly coerces result types"
    (let [expected {:msg "hello"
                    :num 42.1
                    :secret :hello
                    :id 0}]
      (with-redefs [http/post (fn [path opts] {:success true :body (js->clj (clj->js expected))})]
        (is (= expected (do-call (client :new {:msg "message"}))))))))

(deftest schema-checking
  (testing "throws if provided args are incorrect"
    (is (thrown-with-msg? js/Error #"Spec check failed" (do-call (client :new {}))))))

(deftest test-inject-token
  (testing "injects token into headers"
    (with-redefs [http/get (headers-check {"Authorization" "Token abc123"})]
      (do-call ((conjure/inject-token "Token abc123" client) :get-all)))))

(deftest test-validation
  (testing "validates spec"
    (is (thrown? ExceptionInfo (conjure/client bad-spellbook :service))))
  (testing "adds version method"
    (with-redefs [http/get (url-check "version/")]
      (do-call (client :version))))
  (testing "adds ping method"
    (with-redefs [http/get (url-check "ping/")]
      (do-call (client :ping)))))

