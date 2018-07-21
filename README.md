# ensorcel

A simpler way to have fullstack Clojure[script] applications communicate, defining
APIs as _data_.

[![Clojars](https://img.shields.io/clojars/v/efisef/ensorcel.svg)](https://clojars.org/efisef/ensorcel)
[![CircleCI](https://circleci.com/gh/efisef/ensorcel.svg?style=svg)](https://circleci.com/gh/efisef/ensorcel)

## Importing

```clojure
(:require [ensorcel.conjure :as conjure]) ; same for cljs and clj
```

## Usage

Easiest place to start is to look at the `example` package in `clj`, `cljs` and `cljc`. This should have more or less
everything that you need to get started.

### Some more detail

First, define your API either as an `edn` file or in a `cljc` file.

```clojure
(def spellbook
  {:version "1"
   :services {:service1 {:path "service1"
                         :endpoints {:endpoint1 {:path "endpoint1"
                                                 :method :GET
                                                 :returns s/Str}}}
              :service2 {:path "service2"
                         :endpoints {:endpoint2 {:path "endpoint2"
                                                 :method :POST
                                                 :args {:some-value s/Int}
                                                 :returns [s/Int]}
                                     :endpoint3 {:path ["endpoint3" :val]
                                                 :args {:val s/Str}
                                                 :method :DELETE}
                                     :endpoint4 {:path ["endpoint4" :thing]
                                                 :args {:thing s/Int :other-thing-in-body {s/Keyword s/Str}}
                                                 :method :POST}}}}})
```

APIs are built of `services` and `endpoints`.

Conceptually, a `service` is a logical unit of functionality, such as `users` or `expenses`.
`endpoints` are the individual functions within a `service`, such as `getUsers` or `putUser`.

A `service` consists of a `<path>` and `<endpoints>`. The `<path>` can be any valid substring
of a URL.

An `endpoint` consists of a `<path>` (as above), a `<method>` (`:GET :POST :PUT :DELETE`), and
optionally `<args>` (the input), `<returns>` (the output) and `<response>` (for the http response).

`<args>` and `<returns>` should be schemas (https://github.com/plumatic/schema), which will be run through validation. If they
are not provided, no checks will happen.

You can also specify inputs as part of the `<path>` by specifying it as a vector, eg.

```clojure
:path [:my-var "endpoint"]
```

This will resolve URLs like `thing/endpoint` (`my-var = "thing"`).

`:my-var` should be included as a key in your `<args>` and will be provided to your function.

### Server

You can instantiate your server by providing binding for each endpoint, creating a service
and then combining these into an app. For example, for the above spec we could do the following
for `service2`:

```clojure
(defn e2
  [params] ; params is a map of all keys specified in the :params key
  ["hello" "world"])

(defn e3
  [params]
  (do-nothing))

(defn e4
  [params]
  (do-nothing))

(def service2 (c/service spellbook :service2
                         :endpoint2 e2
                         :endpoint3 e3
                         :endpoint4 e4))
```

`service2` is now a `bidi` sub definition (https://github.com/juxt/bidi).

You can turn it into a full app definition by combining your services as follows:

```clojure
(def my-app (s/app spellbook service1 service2))
```

This app is a fully wrapped ring handler that you can pass to (for example) `http-kit` or some
other hosting function.

### Client

The client is fully defined within `ensorcel.conjure`. You can make a client for your service
by doing the following:

`(def service2-client (conjure/client spellbook :service2))`

This will give you a fully functioning client that will validate inputs and outputs for you. Eg.

```clojure
(call-> (service1-client :endpoint1))

(call-> (service2-client :endpoint2 {:val my-val})) ; params are provided after the endpoint name

(call-> (service2-client :endpoint3 {:val my-val}) ; there is no discrepancy between URL and
        #(println %))                              ; body params - conjure handles it for you.
```

`call->` is the async function that lets you chain function calls together.

## License

Copyright © 2018 efisef

Distributed under the Eclipse Public License version 1.0
