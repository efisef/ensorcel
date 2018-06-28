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

                 [org.clojure/clojurescript "1.10.238"]
                 [cljs-http "0.1.45"]]
  :jvm-opts ["--add-modules" "java.xml.bind"]
  :source-paths ["src/clj"]

  :plugins [[lein-figwheel "0.5.16"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/cljs"]

                :figwheel {:on-jsload "ensorcel.core/on-js-reload"
                           :open-urls ["http://localhost:3449/index.html"]}

                :compiler {:main ensorcel.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/ensorcel.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true
                           :preloads [devtools.preload]}}
               {:id "min"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/ensorcel.js"
                           :main ensorcel.core
                           :optimizations :advanced
                           :pretty-print false}}]}

  :figwheel {:css-dirs ["resources/public/css"]}

  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.9"]
                                  [figwheel-sidecar "0.5.16"]
                                  [cider/piggieback "0.3.1"]]
                   :source-paths ["src" "dev"]
                   :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}
                   :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                                     :target-path]}})
