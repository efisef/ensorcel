# ensorcel

A simpler way to have fullstack Clojure[script] applications communicate, defining
APIs as _data_.

[![Clojars](https://img.shields.io/clojars/v/efisef/ensorcel.svg)](https://clojars.org/efisef/ensorcel)
[![CircleCI](https://circleci.com/gh/efisef/ensorcel.svg?style=svg)](https://circleci.com/gh/efisef/ensorcel)

## Importing

```clojure
(:require [ensorcel.conjure :as conjure])
```

## Getting Started

Ensorcel is easy to get starting with - there are 3 steps:

### Define Your API

Let's define a widget retrieval service that has a get and get-all method..

```clojure
; example/api.cljc

(ns example.api
  (:require [ensorcel.types :as t]
            [spec-tools.core :as st]
            #?(:clj  [clojure.spec.alpha :as s]
               :cljs [cljs.spec.alpha :as s :include-macros true])))

(s/def :widget/id  ::t/integer)
(s/def :widget/msg ::t/string)

; we wrap our key specs into spec-tools so that we can strip
; any extra keys
(s/def ::widget
  (st/spec (s/keys :req-un [:widget/id :widget/msg])))

(s/def ::get-widget-request
  (st/spec (s/keys :req-un [:widget/id])))

(def spellbook
  {:version "1"
   :services {:widgets {:path "widgets"
                        :endpoints {:get-all {:path ""
                                              :method :GET
                                              :returns (s/* ::widget)}
                                    :get     {:path [:id]
                                              :method :GET
                                              :args ::get-widget-request
                                              :returns ::widget}}}}})
```

A spellbook defines one or more services, each of which has one or more endpoints.
In the example above, we define two endpoints located under `<addr>:<port>/api/widgets/`,
one at `widgets/` and one at `widgets/<id>`.

### Define Your Server

Next up, we define our backend:

```clojure
; example/server.clj

(ns example.server
  (:require [example.api :as api]
            [ensorcel.conjure :as conjure]
            [org.httpkit.server :refer [run-server]]))

...

(defn- get-all-widgets
  []
  [{:id 0 :msg "I am a widget!"}
   {:id 1 :msg "I am another widget!"}])

(defn- get-widget
  [{id :id}]
  [{:id id :msg "I'm probably not what you wanted.."}])

; create our service
(def widget-service
  (conjure/service api/spellbook :widgets
                   :get     get-widget
                   :get-all get-all-widgets))

; tie it all together into our app
(def app
  (conjure/app api/spellbook {} ; options go here
               widget-service))

(defn start-server
  []
  (run-server app {:port 8000}))
```

### Define Your Client

Finally, in our frontend Clojurescript..

```clojure
; example/client.cljs

(ns example.client
  (:require [example.api :as api]
            [ensorcel.conjure :as conjure :refer [call->]]))

(def client (conjure/client api/spellbook :widgets))

(call-> (client :get-all)
        println)          ; the extracted, properly typed list of
                          ; widgets is passed to `println`

(call-> (client :get {:id 0})
        println)
```

## Why Use Ensorcel

- Automatic spec checks on inputs and outputs
- Minimal fussing with infrastructure details
- API definition as data, easy to see and track changes
- Dead simple to set up and get started!

## License

Copyright © 2018 efisef

Distributed under the Eclipse Public License version 1.0
