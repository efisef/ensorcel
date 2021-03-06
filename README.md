# ensorcel

A simpler way to have fullstack Clojure[script] applications communicate, defining
APIs as _data_.

[![Clojars](https://img.shields.io/clojars/v/efisef/ensorcel.svg)](https://clojars.org/efisef/ensorcel)
[![CircleCI](https://circleci.com/gh/efisef/ensorcel.svg?style=svg)](https://circleci.com/gh/efisef/ensorcel)

FRs, PRs and comments welcome!

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

## Other API Features

Ensorcel is also easy to customise through your API specification:

#### Query Arguments

In your API definition:

```clojure
...

(s/def ::my-query-argument ::types/string)
(s/def ::do-thing-request
  (st/spec (s/keys :opt-un [::my-query-argument])))

...
  ; in your spellbook
  :do-thing {:path   "thing"
             :method :GET
             :query  [:my-query-argument]
             :args   ::do-thing-request}
```

Now if we provide the optional `query-argument` parameter in our client call,
it will be added as a query argument to our URL. The backend is unaffected.

```clojure
(call-> (client :do-thing)) ; becomes <path>/thing
(call-> (client :do-thing {:my-query-argument "hi")) ; becomes <path>/thing?my-query-argument=hi
```

#### Custom Headers

You can attach custom headers to your responses:

```clojure
...
  ; in your spellbook
  :my-endpoint {:path "endpoint"
                :method :GET
                :headers {"Content-Type" "text/html"}
                ...
               }
```

This will replace the `Content-Type` header (which defaults to `application/json`)
with `text/html`.

#### Custom Responses

Normal successful responses will return `200 Success`. You can customise this
(for example when `POST`ing a new resource):

```clojure
...
  (:require [ring.util.http-response :refer [created]] ;using http-response for example
    ...
...
  ; in your spellbook
  :new {:path "new-thing"
        :method :POST
        :response created
        ...
        }
```

#### Accessing The Request

Backend function definitions can have zero to two arguments.

```clojure
(defn endpoint-zero
  [] ; no arguments
  ...)

(defn endpoint-one
  [args] ; argument map will be provided
  ...)

(defn endpoint-two
  [args request] ; the full ring request will also be provided
  ...)           ; containing cookies, headers etc.

```

## Why Use Ensorcel

- Automatic spec checks on inputs and outputs
- Minimal fussing with infrastructure details
- API definition as data, easy to see and track changes
- Dead simple to set up and get started!

## Limitations

Ensorcel is currently a work in progress, and as such has not yet been tested in production.
Examples of things that I haven't tried yet:

- HTTPS support
- Working with NGINX etc.
- Probably a myriad of other things

However, Ensorcel uses a _minimal amount of magic_, so it should be trivial to extend in
the standard ways.

Please feel free to submit FRs, PRs and comments!

## License

Copyright © 2018 efisef

Distributed under the Eclipse Public License version 1.0
