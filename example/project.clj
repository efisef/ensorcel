(defproject efisef/ensorcel-example "0.0.1"
  :description "An example ensorcel application"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/data.json "0.2.6"]
                 [metosin/ring-http-response "0.9.0"]
                 [efisef/ensorcel "0.2.4-2"]

                 [binaryage/devtools "0.9.4"]
                 [org.clojure/clojurescript "1.10.238" :scope "provided"]
                 [reagent "0.7.0"]
                 [re-frame "0.10.5"]]

  :source-paths ["src/clj"
                 "src/cljc"
                 "src/cljs"]

  :main ^:skip-aot ensorcel.example.core

  :plugins [[lein-figwheel "0.5.16"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :jvm-opts ["--add-modules" "java.xml.bind"]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/cljs"
                               "src/cljc"]
                :figwheel {:on-jsload "ensorcel.example-app.core/on-js-reload"
                           :open-urls ["http://localhost:3449/index.html"]}

                :compiler {:main ensorcel.example-app.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/example_app.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true}}]}

  :figwheel {:css-dirs ["resources/public/css"]}

  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.9"]
                                  [figwheel-sidecar "0.5.16"]
                                  [cider/piggieback "0.3.1"]]
                   :source-paths ["src/clj" "src/cljc" "dev"]
                   :clean-targets ^{:protect false} ["resources/public/js/compiled"]}})
