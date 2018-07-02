(defproject ensorcel "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/data.json "0.2.6"]
                 [metosin/ring-http-response "0.9.0"]
                 [bidi "2.1.3"]
                 [http-kit "2.2.0"]
                 [ring "1.6.3"]
                 [ring/ring-defaults "0.3.2"]
                 [ring-cors "0.1.12"]
                 [ring/ring-json "0.4.0"]

                 [org.clojure/test.check "0.10.0-alpha3"]
                 [metosin/spec-tools "0.7.1"]
                 [org.clojure/clojurescript "1.10.238"]
                 [cljs-http "0.1.45"]
                 [quantum/org.clojure.core.rrb-vector "0.0.12"]]
  :source-paths ["src/clj"
                 "src/cljc"]

  :plugins [[lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]
                                                 [org.clojure/core.rrb-vector]]]
            [lein-doo "0.1.10" :exclusions [[org.clojure/core.rrb-vector]]]]

  :cljsbuild {:test-commands {"my-test" ["phantomjs"
                                         "phantom/unit-test.js"
                                         "resources/private/html/unit-test.html"]}
              :builds
              [{:id "dev"
                :source-paths ["src/cljs"
                               "src/cljc"]
                :compiler {:main ensorcel.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/ensorcel.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true
                           :preloads [devtools.preload]}}
               {:id "test"
                :source-paths ["src/cljs" "test/cljs"]
                :compiler {:output-to "resources/private/js/unit-test.js"
                           :main ensorcel.test
                           :optimizations :whitespace
                           :pretty-print true}}
               {:id "min"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/ensorcel.js"
                           :main ensorcel.core
                           :optimizations :advanced
                           :pretty-print false}}]}
  :profiles {:test {:source-paths ["src/clj" "test/clj"]}})
