(defproject efisef/ensorcel "0.1.5"
  :description "Easier client / server interactions for Clojure[script]"
  :url "https://github.com/efisef/ensorcel"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/data.json "0.2.6"]
                 [metosin/ring-http-response "0.9.0"]
                 [bidi "2.1.3"]
                 [http-kit "2.2.0"]
                 [ring "1.6.3"]
                 [ring/ring-defaults "0.3.2"]
                 [ring/ring-json "0.4.0"]
                 [ring-cors "0.1.12"]
                 [prismatic/schema "1.1.9"]

                 [binaryage/devtools "0.9.4"]
                 [org.clojure/test.check "0.10.0-alpha3"]
                 [org.clojure/clojurescript "1.10.238" :scope "provided"]
                 [cljs-http "0.1.45"]]

  :source-paths ["src/clj"
                 "src/cljc"
                 "src/cljs"]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-doo "0.1.8"]]

  :jvm-opts ["--add-modules" "java.xml.bind"]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/cljs"
                               "src/cljc"]
                :compiler {:main example.client
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/ensorcel.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true}}
               {:id "test"
                :source-paths ["src/cljc" "src/cljs" "test/cljs" "test/cljc"]
                :compiler {:output-to "resources/private/js/unit-test.js"
                           :main ensorcel.runner
                           :optimizations :none}}
               {:id "min"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/ensorcel.js"
                           :main example.client
                           :optimizations :advanced
                           :pretty-print false}}]}
  :profiles {:test {:source-paths ["src/clj" "test/clj" "test/cljc"]}})
