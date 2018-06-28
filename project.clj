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
                 [ring/ring-json "0.4.0"]]
  :jvm-opts ["--add-modules" "java.xml.bind"]
  :source-paths ["src/clj"])
