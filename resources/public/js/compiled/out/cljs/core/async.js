// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__39034 = arguments.length;
switch (G__39034) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async39035 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39035 = (function (f,blockable,meta39036){
this.f = f;
this.blockable = blockable;
this.meta39036 = meta39036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39037,meta39036__$1){
var self__ = this;
var _39037__$1 = this;
return (new cljs.core.async.t_cljs$core$async39035(self__.f,self__.blockable,meta39036__$1));
});

cljs.core.async.t_cljs$core$async39035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39037){
var self__ = this;
var _39037__$1 = this;
return self__.meta39036;
});

cljs.core.async.t_cljs$core$async39035.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39035.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39035.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39035.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39036","meta39036",-260352552,null)], null);
});

cljs.core.async.t_cljs$core$async39035.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39035";

cljs.core.async.t_cljs$core$async39035.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39035");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39035.
 */
cljs.core.async.__GT_t_cljs$core$async39035 = (function cljs$core$async$__GT_t_cljs$core$async39035(f__$1,blockable__$1,meta39036){
return (new cljs.core.async.t_cljs$core$async39035(f__$1,blockable__$1,meta39036));
});

}

return (new cljs.core.async.t_cljs$core$async39035(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__39041 = arguments.length;
switch (G__39041) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__39044 = arguments.length;
switch (G__39044) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__39047 = arguments.length;
switch (G__39047) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_39049 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39049);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39049,ret){
return (function (){
return fn1.call(null,val_39049);
});})(val_39049,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__39051 = arguments.length;
switch (G__39051) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___39053 = n;
var x_39054 = (0);
while(true){
if((x_39054 < n__4376__auto___39053)){
(a[x_39054] = (0));

var G__39055 = (x_39054 + (1));
x_39054 = G__39055;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__39056 = (i + (1));
i = G__39056;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39057 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39057 = (function (flag,meta39058){
this.flag = flag;
this.meta39058 = meta39058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39059,meta39058__$1){
var self__ = this;
var _39059__$1 = this;
return (new cljs.core.async.t_cljs$core$async39057(self__.flag,meta39058__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39059){
var self__ = this;
var _39059__$1 = this;
return self__.meta39058;
});})(flag))
;

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39057.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39058","meta39058",-159933408,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39057";

cljs.core.async.t_cljs$core$async39057.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39057");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39057.
 */
cljs.core.async.__GT_t_cljs$core$async39057 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39057(flag__$1,meta39058){
return (new cljs.core.async.t_cljs$core$async39057(flag__$1,meta39058));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39057(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39060 = (function (flag,cb,meta39061){
this.flag = flag;
this.cb = cb;
this.meta39061 = meta39061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39062,meta39061__$1){
var self__ = this;
var _39062__$1 = this;
return (new cljs.core.async.t_cljs$core$async39060(self__.flag,self__.cb,meta39061__$1));
});

cljs.core.async.t_cljs$core$async39060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39062){
var self__ = this;
var _39062__$1 = this;
return self__.meta39061;
});

cljs.core.async.t_cljs$core$async39060.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39060.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39060.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39060.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39061","meta39061",1362181792,null)], null);
});

cljs.core.async.t_cljs$core$async39060.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39060";

cljs.core.async.t_cljs$core$async39060.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39060");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39060.
 */
cljs.core.async.__GT_t_cljs$core$async39060 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39060(flag__$1,cb__$1,meta39061){
return (new cljs.core.async.t_cljs$core$async39060(flag__$1,cb__$1,meta39061));
});

}

return (new cljs.core.async.t_cljs$core$async39060(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39063_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39063_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39064_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39064_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39065 = (i + (1));
i = G__39065;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39071 = arguments.length;
var i__4500__auto___39072 = (0);
while(true){
if((i__4500__auto___39072 < len__4499__auto___39071)){
args__4502__auto__.push((arguments[i__4500__auto___39072]));

var G__39073 = (i__4500__auto___39072 + (1));
i__4500__auto___39072 = G__39073;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39068){
var map__39069 = p__39068;
var map__39069__$1 = ((((!((map__39069 == null)))?(((((map__39069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39069):map__39069);
var opts = map__39069__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39066){
var G__39067 = cljs.core.first.call(null,seq39066);
var seq39066__$1 = cljs.core.next.call(null,seq39066);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39067,seq39066__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__39075 = arguments.length;
switch (G__39075) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23750__auto___39121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23750__auto___39121){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (c__23750__auto___39121){
return (function (state_39099){
var state_val_39100 = (state_39099[(1)]);
if((state_val_39100 === (7))){
var inst_39095 = (state_39099[(2)]);
var state_39099__$1 = state_39099;
var statearr_39101_39122 = state_39099__$1;
(statearr_39101_39122[(2)] = inst_39095);

(statearr_39101_39122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (1))){
var state_39099__$1 = state_39099;
var statearr_39102_39123 = state_39099__$1;
(statearr_39102_39123[(2)] = null);

(statearr_39102_39123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (4))){
var inst_39078 = (state_39099[(7)]);
var inst_39078__$1 = (state_39099[(2)]);
var inst_39079 = (inst_39078__$1 == null);
var state_39099__$1 = (function (){var statearr_39103 = state_39099;
(statearr_39103[(7)] = inst_39078__$1);

return statearr_39103;
})();
if(cljs.core.truth_(inst_39079)){
var statearr_39104_39124 = state_39099__$1;
(statearr_39104_39124[(1)] = (5));

} else {
var statearr_39105_39125 = state_39099__$1;
(statearr_39105_39125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (13))){
var state_39099__$1 = state_39099;
var statearr_39106_39126 = state_39099__$1;
(statearr_39106_39126[(2)] = null);

(statearr_39106_39126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (6))){
var inst_39078 = (state_39099[(7)]);
var state_39099__$1 = state_39099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39099__$1,(11),to,inst_39078);
} else {
if((state_val_39100 === (3))){
var inst_39097 = (state_39099[(2)]);
var state_39099__$1 = state_39099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39099__$1,inst_39097);
} else {
if((state_val_39100 === (12))){
var state_39099__$1 = state_39099;
var statearr_39107_39127 = state_39099__$1;
(statearr_39107_39127[(2)] = null);

(statearr_39107_39127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (2))){
var state_39099__$1 = state_39099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39099__$1,(4),from);
} else {
if((state_val_39100 === (11))){
var inst_39088 = (state_39099[(2)]);
var state_39099__$1 = state_39099;
if(cljs.core.truth_(inst_39088)){
var statearr_39108_39128 = state_39099__$1;
(statearr_39108_39128[(1)] = (12));

} else {
var statearr_39109_39129 = state_39099__$1;
(statearr_39109_39129[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (9))){
var state_39099__$1 = state_39099;
var statearr_39110_39130 = state_39099__$1;
(statearr_39110_39130[(2)] = null);

(statearr_39110_39130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (5))){
var state_39099__$1 = state_39099;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39111_39131 = state_39099__$1;
(statearr_39111_39131[(1)] = (8));

} else {
var statearr_39112_39132 = state_39099__$1;
(statearr_39112_39132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (14))){
var inst_39093 = (state_39099[(2)]);
var state_39099__$1 = state_39099;
var statearr_39113_39133 = state_39099__$1;
(statearr_39113_39133[(2)] = inst_39093);

(statearr_39113_39133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (10))){
var inst_39085 = (state_39099[(2)]);
var state_39099__$1 = state_39099;
var statearr_39114_39134 = state_39099__$1;
(statearr_39114_39134[(2)] = inst_39085);

(statearr_39114_39134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (8))){
var inst_39082 = cljs.core.async.close_BANG_.call(null,to);
var state_39099__$1 = state_39099;
var statearr_39115_39135 = state_39099__$1;
(statearr_39115_39135[(2)] = inst_39082);

(statearr_39115_39135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23750__auto___39121))
;
return ((function (switch__23660__auto__,c__23750__auto___39121){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_39116 = [null,null,null,null,null,null,null,null];
(statearr_39116[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_39116[(1)] = (1));

return statearr_39116;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_39099){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_39099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e39117){if((e39117 instanceof Object)){
var ex__23664__auto__ = e39117;
var statearr_39118_39136 = state_39099;
(statearr_39118_39136[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39137 = state_39099;
state_39099 = G__39137;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_39099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_39099);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23750__auto___39121))
})();
var state__23752__auto__ = (function (){var statearr_39119 = f__23751__auto__.call(null);
(statearr_39119[(6)] = c__23750__auto___39121);

return statearr_39119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(c__23750__auto___39121))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__39138){
var vec__39139 = p__39138;
var v = cljs.core.nth.call(null,vec__39139,(0),null);
var p = cljs.core.nth.call(null,vec__39139,(1),null);
var job = vec__39139;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23750__auto___39310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23750__auto___39310,res,vec__39139,v,p,job,jobs,results){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (c__23750__auto___39310,res,vec__39139,v,p,job,jobs,results){
return (function (state_39146){
var state_val_39147 = (state_39146[(1)]);
if((state_val_39147 === (1))){
var state_39146__$1 = state_39146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39146__$1,(2),res,v);
} else {
if((state_val_39147 === (2))){
var inst_39143 = (state_39146[(2)]);
var inst_39144 = cljs.core.async.close_BANG_.call(null,res);
var state_39146__$1 = (function (){var statearr_39148 = state_39146;
(statearr_39148[(7)] = inst_39143);

return statearr_39148;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39146__$1,inst_39144);
} else {
return null;
}
}
});})(c__23750__auto___39310,res,vec__39139,v,p,job,jobs,results))
;
return ((function (switch__23660__auto__,c__23750__auto___39310,res,vec__39139,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0 = (function (){
var statearr_39149 = [null,null,null,null,null,null,null,null];
(statearr_39149[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__);

(statearr_39149[(1)] = (1));

return statearr_39149;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1 = (function (state_39146){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_39146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e39150){if((e39150 instanceof Object)){
var ex__23664__auto__ = e39150;
var statearr_39151_39311 = state_39146;
(statearr_39151_39311[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39312 = state_39146;
state_39146 = G__39312;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = function(state_39146){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1.call(this,state_39146);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23750__auto___39310,res,vec__39139,v,p,job,jobs,results))
})();
var state__23752__auto__ = (function (){var statearr_39152 = f__23751__auto__.call(null);
(statearr_39152[(6)] = c__23750__auto___39310);

return statearr_39152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(c__23750__auto___39310,res,vec__39139,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39153){
var vec__39154 = p__39153;
var v = cljs.core.nth.call(null,vec__39154,(0),null);
var p = cljs.core.nth.call(null,vec__39154,(1),null);
var job = vec__39154;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___39313 = n;
var __39314 = (0);
while(true){
if((__39314 < n__4376__auto___39313)){
var G__39157_39315 = type;
var G__39157_39316__$1 = (((G__39157_39315 instanceof cljs.core.Keyword))?G__39157_39315.fqn:null);
switch (G__39157_39316__$1) {
case "compute":
var c__23750__auto___39318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39314,c__23750__auto___39318,G__39157_39315,G__39157_39316__$1,n__4376__auto___39313,jobs,results,process,async){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (__39314,c__23750__auto___39318,G__39157_39315,G__39157_39316__$1,n__4376__auto___39313,jobs,results,process,async){
return (function (state_39170){
var state_val_39171 = (state_39170[(1)]);
if((state_val_39171 === (1))){
var state_39170__$1 = state_39170;
var statearr_39172_39319 = state_39170__$1;
(statearr_39172_39319[(2)] = null);

(statearr_39172_39319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (2))){
var state_39170__$1 = state_39170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39170__$1,(4),jobs);
} else {
if((state_val_39171 === (3))){
var inst_39168 = (state_39170[(2)]);
var state_39170__$1 = state_39170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39170__$1,inst_39168);
} else {
if((state_val_39171 === (4))){
var inst_39160 = (state_39170[(2)]);
var inst_39161 = process.call(null,inst_39160);
var state_39170__$1 = state_39170;
if(cljs.core.truth_(inst_39161)){
var statearr_39173_39320 = state_39170__$1;
(statearr_39173_39320[(1)] = (5));

} else {
var statearr_39174_39321 = state_39170__$1;
(statearr_39174_39321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (5))){
var state_39170__$1 = state_39170;
var statearr_39175_39322 = state_39170__$1;
(statearr_39175_39322[(2)] = null);

(statearr_39175_39322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (6))){
var state_39170__$1 = state_39170;
var statearr_39176_39323 = state_39170__$1;
(statearr_39176_39323[(2)] = null);

(statearr_39176_39323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (7))){
var inst_39166 = (state_39170[(2)]);
var state_39170__$1 = state_39170;
var statearr_39177_39324 = state_39170__$1;
(statearr_39177_39324[(2)] = inst_39166);

(statearr_39177_39324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__39314,c__23750__auto___39318,G__39157_39315,G__39157_39316__$1,n__4376__auto___39313,jobs,results,process,async))
;
return ((function (__39314,switch__23660__auto__,c__23750__auto___39318,G__39157_39315,G__39157_39316__$1,n__4376__auto___39313,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0 = (function (){
var statearr_39178 = [null,null,null,null,null,null,null];
(statearr_39178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__);

(statearr_39178[(1)] = (1));

return statearr_39178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1 = (function (state_39170){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_39170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e39179){if((e39179 instanceof Object)){
var ex__23664__auto__ = e39179;
var statearr_39180_39325 = state_39170;
(statearr_39180_39325[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39326 = state_39170;
state_39170 = G__39326;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = function(state_39170){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1.call(this,state_39170);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__;
})()
;})(__39314,switch__23660__auto__,c__23750__auto___39318,G__39157_39315,G__39157_39316__$1,n__4376__auto___39313,jobs,results,process,async))
})();
var state__23752__auto__ = (function (){var statearr_39181 = f__23751__auto__.call(null);
(statearr_39181[(6)] = c__23750__auto___39318);

return statearr_39181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(__39314,c__23750__auto___39318,G__39157_39315,G__39157_39316__$1,n__4376__auto___39313,jobs,results,process,async))
);


break;
case "async":
var c__23750__auto___39327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39314,c__23750__auto___39327,G__39157_39315,G__39157_39316__$1,n__4376__auto___39313,jobs,results,process,async){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (__39314,c__23750__auto___39327,G__39157_39315,G__39157_39316__$1,n__4376__auto___39313,jobs,results,process,async){
return (function (state_39194){
var state_val_39195 = (state_39194[(1)]);
if((state_val_39195 === (1))){
var state_39194__$1 = state_39194;
var statearr_39196_39328 = state_39194__$1;
(statearr_39196_39328[(2)] = null);

(statearr_39196_39328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39195 === (2))){
var state_39194__$1 = state_39194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39194__$1,(4),jobs);
} else {
if((state_val_39195 === (3))){
var inst_39192 = (state_39194[(2)]);
var state_39194__$1 = state_39194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39194__$1,inst_39192);
} else {
if((state_val_39195 === (4))){
var inst_39184 = (state_39194[(2)]);
var inst_39185 = async.call(null,inst_39184);
var state_39194__$1 = state_39194;
if(cljs.core.truth_(inst_39185)){
var statearr_39197_39329 = state_39194__$1;
(statearr_39197_39329[(1)] = (5));

} else {
var statearr_39198_39330 = state_39194__$1;
(statearr_39198_39330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39195 === (5))){
var state_39194__$1 = state_39194;
var statearr_39199_39331 = state_39194__$1;
(statearr_39199_39331[(2)] = null);

(statearr_39199_39331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39195 === (6))){
var state_39194__$1 = state_39194;
var statearr_39200_39332 = state_39194__$1;
(statearr_39200_39332[(2)] = null);

(statearr_39200_39332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39195 === (7))){
var inst_39190 = (state_39194[(2)]);
var state_39194__$1 = state_39194;
var statearr_39201_39333 = state_39194__$1;
(statearr_39201_39333[(2)] = inst_39190);

(statearr_39201_39333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__39314,c__23750__auto___39327,G__39157_39315,G__39157_39316__$1,n__4376__auto___39313,jobs,results,process,async))
;
return ((function (__39314,switch__23660__auto__,c__23750__auto___39327,G__39157_39315,G__39157_39316__$1,n__4376__auto___39313,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0 = (function (){
var statearr_39202 = [null,null,null,null,null,null,null];
(statearr_39202[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__);

(statearr_39202[(1)] = (1));

return statearr_39202;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1 = (function (state_39194){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_39194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e39203){if((e39203 instanceof Object)){
var ex__23664__auto__ = e39203;
var statearr_39204_39334 = state_39194;
(statearr_39204_39334[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39335 = state_39194;
state_39194 = G__39335;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = function(state_39194){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1.call(this,state_39194);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__;
})()
;})(__39314,switch__23660__auto__,c__23750__auto___39327,G__39157_39315,G__39157_39316__$1,n__4376__auto___39313,jobs,results,process,async))
})();
var state__23752__auto__ = (function (){var statearr_39205 = f__23751__auto__.call(null);
(statearr_39205[(6)] = c__23750__auto___39327);

return statearr_39205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(__39314,c__23750__auto___39327,G__39157_39315,G__39157_39316__$1,n__4376__auto___39313,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39157_39316__$1)].join('')));

}

var G__39336 = (__39314 + (1));
__39314 = G__39336;
continue;
} else {
}
break;
}

var c__23750__auto___39337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23750__auto___39337,jobs,results,process,async){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (c__23750__auto___39337,jobs,results,process,async){
return (function (state_39227){
var state_val_39228 = (state_39227[(1)]);
if((state_val_39228 === (1))){
var state_39227__$1 = state_39227;
var statearr_39229_39338 = state_39227__$1;
(statearr_39229_39338[(2)] = null);

(statearr_39229_39338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39228 === (2))){
var state_39227__$1 = state_39227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39227__$1,(4),from);
} else {
if((state_val_39228 === (3))){
var inst_39225 = (state_39227[(2)]);
var state_39227__$1 = state_39227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39227__$1,inst_39225);
} else {
if((state_val_39228 === (4))){
var inst_39208 = (state_39227[(7)]);
var inst_39208__$1 = (state_39227[(2)]);
var inst_39209 = (inst_39208__$1 == null);
var state_39227__$1 = (function (){var statearr_39230 = state_39227;
(statearr_39230[(7)] = inst_39208__$1);

return statearr_39230;
})();
if(cljs.core.truth_(inst_39209)){
var statearr_39231_39339 = state_39227__$1;
(statearr_39231_39339[(1)] = (5));

} else {
var statearr_39232_39340 = state_39227__$1;
(statearr_39232_39340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39228 === (5))){
var inst_39211 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39227__$1 = state_39227;
var statearr_39233_39341 = state_39227__$1;
(statearr_39233_39341[(2)] = inst_39211);

(statearr_39233_39341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39228 === (6))){
var inst_39208 = (state_39227[(7)]);
var inst_39213 = (state_39227[(8)]);
var inst_39213__$1 = cljs.core.async.chan.call(null,(1));
var inst_39214 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39215 = [inst_39208,inst_39213__$1];
var inst_39216 = (new cljs.core.PersistentVector(null,2,(5),inst_39214,inst_39215,null));
var state_39227__$1 = (function (){var statearr_39234 = state_39227;
(statearr_39234[(8)] = inst_39213__$1);

return statearr_39234;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39227__$1,(8),jobs,inst_39216);
} else {
if((state_val_39228 === (7))){
var inst_39223 = (state_39227[(2)]);
var state_39227__$1 = state_39227;
var statearr_39235_39342 = state_39227__$1;
(statearr_39235_39342[(2)] = inst_39223);

(statearr_39235_39342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39228 === (8))){
var inst_39213 = (state_39227[(8)]);
var inst_39218 = (state_39227[(2)]);
var state_39227__$1 = (function (){var statearr_39236 = state_39227;
(statearr_39236[(9)] = inst_39218);

return statearr_39236;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39227__$1,(9),results,inst_39213);
} else {
if((state_val_39228 === (9))){
var inst_39220 = (state_39227[(2)]);
var state_39227__$1 = (function (){var statearr_39237 = state_39227;
(statearr_39237[(10)] = inst_39220);

return statearr_39237;
})();
var statearr_39238_39343 = state_39227__$1;
(statearr_39238_39343[(2)] = null);

(statearr_39238_39343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__23750__auto___39337,jobs,results,process,async))
;
return ((function (switch__23660__auto__,c__23750__auto___39337,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0 = (function (){
var statearr_39239 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39239[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__);

(statearr_39239[(1)] = (1));

return statearr_39239;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1 = (function (state_39227){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_39227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e39240){if((e39240 instanceof Object)){
var ex__23664__auto__ = e39240;
var statearr_39241_39344 = state_39227;
(statearr_39241_39344[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39345 = state_39227;
state_39227 = G__39345;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = function(state_39227){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1.call(this,state_39227);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23750__auto___39337,jobs,results,process,async))
})();
var state__23752__auto__ = (function (){var statearr_39242 = f__23751__auto__.call(null);
(statearr_39242[(6)] = c__23750__auto___39337);

return statearr_39242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(c__23750__auto___39337,jobs,results,process,async))
);


var c__23750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23750__auto__,jobs,results,process,async){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (c__23750__auto__,jobs,results,process,async){
return (function (state_39280){
var state_val_39281 = (state_39280[(1)]);
if((state_val_39281 === (7))){
var inst_39276 = (state_39280[(2)]);
var state_39280__$1 = state_39280;
var statearr_39282_39346 = state_39280__$1;
(statearr_39282_39346[(2)] = inst_39276);

(statearr_39282_39346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (20))){
var state_39280__$1 = state_39280;
var statearr_39283_39347 = state_39280__$1;
(statearr_39283_39347[(2)] = null);

(statearr_39283_39347[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (1))){
var state_39280__$1 = state_39280;
var statearr_39284_39348 = state_39280__$1;
(statearr_39284_39348[(2)] = null);

(statearr_39284_39348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (4))){
var inst_39245 = (state_39280[(7)]);
var inst_39245__$1 = (state_39280[(2)]);
var inst_39246 = (inst_39245__$1 == null);
var state_39280__$1 = (function (){var statearr_39285 = state_39280;
(statearr_39285[(7)] = inst_39245__$1);

return statearr_39285;
})();
if(cljs.core.truth_(inst_39246)){
var statearr_39286_39349 = state_39280__$1;
(statearr_39286_39349[(1)] = (5));

} else {
var statearr_39287_39350 = state_39280__$1;
(statearr_39287_39350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (15))){
var inst_39258 = (state_39280[(8)]);
var state_39280__$1 = state_39280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39280__$1,(18),to,inst_39258);
} else {
if((state_val_39281 === (21))){
var inst_39271 = (state_39280[(2)]);
var state_39280__$1 = state_39280;
var statearr_39288_39351 = state_39280__$1;
(statearr_39288_39351[(2)] = inst_39271);

(statearr_39288_39351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (13))){
var inst_39273 = (state_39280[(2)]);
var state_39280__$1 = (function (){var statearr_39289 = state_39280;
(statearr_39289[(9)] = inst_39273);

return statearr_39289;
})();
var statearr_39290_39352 = state_39280__$1;
(statearr_39290_39352[(2)] = null);

(statearr_39290_39352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (6))){
var inst_39245 = (state_39280[(7)]);
var state_39280__$1 = state_39280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39280__$1,(11),inst_39245);
} else {
if((state_val_39281 === (17))){
var inst_39266 = (state_39280[(2)]);
var state_39280__$1 = state_39280;
if(cljs.core.truth_(inst_39266)){
var statearr_39291_39353 = state_39280__$1;
(statearr_39291_39353[(1)] = (19));

} else {
var statearr_39292_39354 = state_39280__$1;
(statearr_39292_39354[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (3))){
var inst_39278 = (state_39280[(2)]);
var state_39280__$1 = state_39280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39280__$1,inst_39278);
} else {
if((state_val_39281 === (12))){
var inst_39255 = (state_39280[(10)]);
var state_39280__$1 = state_39280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39280__$1,(14),inst_39255);
} else {
if((state_val_39281 === (2))){
var state_39280__$1 = state_39280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39280__$1,(4),results);
} else {
if((state_val_39281 === (19))){
var state_39280__$1 = state_39280;
var statearr_39293_39355 = state_39280__$1;
(statearr_39293_39355[(2)] = null);

(statearr_39293_39355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (11))){
var inst_39255 = (state_39280[(2)]);
var state_39280__$1 = (function (){var statearr_39294 = state_39280;
(statearr_39294[(10)] = inst_39255);

return statearr_39294;
})();
var statearr_39295_39356 = state_39280__$1;
(statearr_39295_39356[(2)] = null);

(statearr_39295_39356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (9))){
var state_39280__$1 = state_39280;
var statearr_39296_39357 = state_39280__$1;
(statearr_39296_39357[(2)] = null);

(statearr_39296_39357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (5))){
var state_39280__$1 = state_39280;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39297_39358 = state_39280__$1;
(statearr_39297_39358[(1)] = (8));

} else {
var statearr_39298_39359 = state_39280__$1;
(statearr_39298_39359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (14))){
var inst_39260 = (state_39280[(11)]);
var inst_39258 = (state_39280[(8)]);
var inst_39258__$1 = (state_39280[(2)]);
var inst_39259 = (inst_39258__$1 == null);
var inst_39260__$1 = cljs.core.not.call(null,inst_39259);
var state_39280__$1 = (function (){var statearr_39299 = state_39280;
(statearr_39299[(11)] = inst_39260__$1);

(statearr_39299[(8)] = inst_39258__$1);

return statearr_39299;
})();
if(inst_39260__$1){
var statearr_39300_39360 = state_39280__$1;
(statearr_39300_39360[(1)] = (15));

} else {
var statearr_39301_39361 = state_39280__$1;
(statearr_39301_39361[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (16))){
var inst_39260 = (state_39280[(11)]);
var state_39280__$1 = state_39280;
var statearr_39302_39362 = state_39280__$1;
(statearr_39302_39362[(2)] = inst_39260);

(statearr_39302_39362[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (10))){
var inst_39252 = (state_39280[(2)]);
var state_39280__$1 = state_39280;
var statearr_39303_39363 = state_39280__$1;
(statearr_39303_39363[(2)] = inst_39252);

(statearr_39303_39363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (18))){
var inst_39263 = (state_39280[(2)]);
var state_39280__$1 = state_39280;
var statearr_39304_39364 = state_39280__$1;
(statearr_39304_39364[(2)] = inst_39263);

(statearr_39304_39364[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (8))){
var inst_39249 = cljs.core.async.close_BANG_.call(null,to);
var state_39280__$1 = state_39280;
var statearr_39305_39365 = state_39280__$1;
(statearr_39305_39365[(2)] = inst_39249);

(statearr_39305_39365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23750__auto__,jobs,results,process,async))
;
return ((function (switch__23660__auto__,c__23750__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0 = (function (){
var statearr_39306 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39306[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__);

(statearr_39306[(1)] = (1));

return statearr_39306;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1 = (function (state_39280){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_39280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e39307){if((e39307 instanceof Object)){
var ex__23664__auto__ = e39307;
var statearr_39308_39366 = state_39280;
(statearr_39308_39366[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39367 = state_39280;
state_39280 = G__39367;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = function(state_39280){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1.call(this,state_39280);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23750__auto__,jobs,results,process,async))
})();
var state__23752__auto__ = (function (){var statearr_39309 = f__23751__auto__.call(null);
(statearr_39309[(6)] = c__23750__auto__);

return statearr_39309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(c__23750__auto__,jobs,results,process,async))
);

return c__23750__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__39369 = arguments.length;
switch (G__39369) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__39372 = arguments.length;
switch (G__39372) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__39375 = arguments.length;
switch (G__39375) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23750__auto___39424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23750__auto___39424,tc,fc){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (c__23750__auto___39424,tc,fc){
return (function (state_39401){
var state_val_39402 = (state_39401[(1)]);
if((state_val_39402 === (7))){
var inst_39397 = (state_39401[(2)]);
var state_39401__$1 = state_39401;
var statearr_39403_39425 = state_39401__$1;
(statearr_39403_39425[(2)] = inst_39397);

(statearr_39403_39425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39402 === (1))){
var state_39401__$1 = state_39401;
var statearr_39404_39426 = state_39401__$1;
(statearr_39404_39426[(2)] = null);

(statearr_39404_39426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39402 === (4))){
var inst_39378 = (state_39401[(7)]);
var inst_39378__$1 = (state_39401[(2)]);
var inst_39379 = (inst_39378__$1 == null);
var state_39401__$1 = (function (){var statearr_39405 = state_39401;
(statearr_39405[(7)] = inst_39378__$1);

return statearr_39405;
})();
if(cljs.core.truth_(inst_39379)){
var statearr_39406_39427 = state_39401__$1;
(statearr_39406_39427[(1)] = (5));

} else {
var statearr_39407_39428 = state_39401__$1;
(statearr_39407_39428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39402 === (13))){
var state_39401__$1 = state_39401;
var statearr_39408_39429 = state_39401__$1;
(statearr_39408_39429[(2)] = null);

(statearr_39408_39429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39402 === (6))){
var inst_39378 = (state_39401[(7)]);
var inst_39384 = p.call(null,inst_39378);
var state_39401__$1 = state_39401;
if(cljs.core.truth_(inst_39384)){
var statearr_39409_39430 = state_39401__$1;
(statearr_39409_39430[(1)] = (9));

} else {
var statearr_39410_39431 = state_39401__$1;
(statearr_39410_39431[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39402 === (3))){
var inst_39399 = (state_39401[(2)]);
var state_39401__$1 = state_39401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39401__$1,inst_39399);
} else {
if((state_val_39402 === (12))){
var state_39401__$1 = state_39401;
var statearr_39411_39432 = state_39401__$1;
(statearr_39411_39432[(2)] = null);

(statearr_39411_39432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39402 === (2))){
var state_39401__$1 = state_39401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39401__$1,(4),ch);
} else {
if((state_val_39402 === (11))){
var inst_39378 = (state_39401[(7)]);
var inst_39388 = (state_39401[(2)]);
var state_39401__$1 = state_39401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39401__$1,(8),inst_39388,inst_39378);
} else {
if((state_val_39402 === (9))){
var state_39401__$1 = state_39401;
var statearr_39412_39433 = state_39401__$1;
(statearr_39412_39433[(2)] = tc);

(statearr_39412_39433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39402 === (5))){
var inst_39381 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39382 = cljs.core.async.close_BANG_.call(null,fc);
var state_39401__$1 = (function (){var statearr_39413 = state_39401;
(statearr_39413[(8)] = inst_39381);

return statearr_39413;
})();
var statearr_39414_39434 = state_39401__$1;
(statearr_39414_39434[(2)] = inst_39382);

(statearr_39414_39434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39402 === (14))){
var inst_39395 = (state_39401[(2)]);
var state_39401__$1 = state_39401;
var statearr_39415_39435 = state_39401__$1;
(statearr_39415_39435[(2)] = inst_39395);

(statearr_39415_39435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39402 === (10))){
var state_39401__$1 = state_39401;
var statearr_39416_39436 = state_39401__$1;
(statearr_39416_39436[(2)] = fc);

(statearr_39416_39436[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39402 === (8))){
var inst_39390 = (state_39401[(2)]);
var state_39401__$1 = state_39401;
if(cljs.core.truth_(inst_39390)){
var statearr_39417_39437 = state_39401__$1;
(statearr_39417_39437[(1)] = (12));

} else {
var statearr_39418_39438 = state_39401__$1;
(statearr_39418_39438[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23750__auto___39424,tc,fc))
;
return ((function (switch__23660__auto__,c__23750__auto___39424,tc,fc){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_39419 = [null,null,null,null,null,null,null,null,null];
(statearr_39419[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_39419[(1)] = (1));

return statearr_39419;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_39401){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_39401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e39420){if((e39420 instanceof Object)){
var ex__23664__auto__ = e39420;
var statearr_39421_39439 = state_39401;
(statearr_39421_39439[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39440 = state_39401;
state_39401 = G__39440;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_39401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_39401);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23750__auto___39424,tc,fc))
})();
var state__23752__auto__ = (function (){var statearr_39422 = f__23751__auto__.call(null);
(statearr_39422[(6)] = c__23750__auto___39424);

return statearr_39422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(c__23750__auto___39424,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23750__auto__){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (c__23750__auto__){
return (function (state_39461){
var state_val_39462 = (state_39461[(1)]);
if((state_val_39462 === (7))){
var inst_39457 = (state_39461[(2)]);
var state_39461__$1 = state_39461;
var statearr_39463_39481 = state_39461__$1;
(statearr_39463_39481[(2)] = inst_39457);

(statearr_39463_39481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39462 === (1))){
var inst_39441 = init;
var state_39461__$1 = (function (){var statearr_39464 = state_39461;
(statearr_39464[(7)] = inst_39441);

return statearr_39464;
})();
var statearr_39465_39482 = state_39461__$1;
(statearr_39465_39482[(2)] = null);

(statearr_39465_39482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39462 === (4))){
var inst_39444 = (state_39461[(8)]);
var inst_39444__$1 = (state_39461[(2)]);
var inst_39445 = (inst_39444__$1 == null);
var state_39461__$1 = (function (){var statearr_39466 = state_39461;
(statearr_39466[(8)] = inst_39444__$1);

return statearr_39466;
})();
if(cljs.core.truth_(inst_39445)){
var statearr_39467_39483 = state_39461__$1;
(statearr_39467_39483[(1)] = (5));

} else {
var statearr_39468_39484 = state_39461__$1;
(statearr_39468_39484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39462 === (6))){
var inst_39448 = (state_39461[(9)]);
var inst_39444 = (state_39461[(8)]);
var inst_39441 = (state_39461[(7)]);
var inst_39448__$1 = f.call(null,inst_39441,inst_39444);
var inst_39449 = cljs.core.reduced_QMARK_.call(null,inst_39448__$1);
var state_39461__$1 = (function (){var statearr_39469 = state_39461;
(statearr_39469[(9)] = inst_39448__$1);

return statearr_39469;
})();
if(inst_39449){
var statearr_39470_39485 = state_39461__$1;
(statearr_39470_39485[(1)] = (8));

} else {
var statearr_39471_39486 = state_39461__$1;
(statearr_39471_39486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39462 === (3))){
var inst_39459 = (state_39461[(2)]);
var state_39461__$1 = state_39461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39461__$1,inst_39459);
} else {
if((state_val_39462 === (2))){
var state_39461__$1 = state_39461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39461__$1,(4),ch);
} else {
if((state_val_39462 === (9))){
var inst_39448 = (state_39461[(9)]);
var inst_39441 = inst_39448;
var state_39461__$1 = (function (){var statearr_39472 = state_39461;
(statearr_39472[(7)] = inst_39441);

return statearr_39472;
})();
var statearr_39473_39487 = state_39461__$1;
(statearr_39473_39487[(2)] = null);

(statearr_39473_39487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39462 === (5))){
var inst_39441 = (state_39461[(7)]);
var state_39461__$1 = state_39461;
var statearr_39474_39488 = state_39461__$1;
(statearr_39474_39488[(2)] = inst_39441);

(statearr_39474_39488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39462 === (10))){
var inst_39455 = (state_39461[(2)]);
var state_39461__$1 = state_39461;
var statearr_39475_39489 = state_39461__$1;
(statearr_39475_39489[(2)] = inst_39455);

(statearr_39475_39489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39462 === (8))){
var inst_39448 = (state_39461[(9)]);
var inst_39451 = cljs.core.deref.call(null,inst_39448);
var state_39461__$1 = state_39461;
var statearr_39476_39490 = state_39461__$1;
(statearr_39476_39490[(2)] = inst_39451);

(statearr_39476_39490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__23750__auto__))
;
return ((function (switch__23660__auto__,c__23750__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23661__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23661__auto____0 = (function (){
var statearr_39477 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39477[(0)] = cljs$core$async$reduce_$_state_machine__23661__auto__);

(statearr_39477[(1)] = (1));

return statearr_39477;
});
var cljs$core$async$reduce_$_state_machine__23661__auto____1 = (function (state_39461){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_39461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e39478){if((e39478 instanceof Object)){
var ex__23664__auto__ = e39478;
var statearr_39479_39491 = state_39461;
(statearr_39479_39491[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39492 = state_39461;
state_39461 = G__39492;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23661__auto__ = function(state_39461){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23661__auto____1.call(this,state_39461);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23661__auto____0;
cljs$core$async$reduce_$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23661__auto____1;
return cljs$core$async$reduce_$_state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23750__auto__))
})();
var state__23752__auto__ = (function (){var statearr_39480 = f__23751__auto__.call(null);
(statearr_39480[(6)] = c__23750__auto__);

return statearr_39480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(c__23750__auto__))
);

return c__23750__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23750__auto__,f__$1){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (c__23750__auto__,f__$1){
return (function (state_39498){
var state_val_39499 = (state_39498[(1)]);
if((state_val_39499 === (1))){
var inst_39493 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_39498__$1 = state_39498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39498__$1,(2),inst_39493);
} else {
if((state_val_39499 === (2))){
var inst_39495 = (state_39498[(2)]);
var inst_39496 = f__$1.call(null,inst_39495);
var state_39498__$1 = state_39498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39498__$1,inst_39496);
} else {
return null;
}
}
});})(c__23750__auto__,f__$1))
;
return ((function (switch__23660__auto__,c__23750__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23661__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23661__auto____0 = (function (){
var statearr_39500 = [null,null,null,null,null,null,null];
(statearr_39500[(0)] = cljs$core$async$transduce_$_state_machine__23661__auto__);

(statearr_39500[(1)] = (1));

return statearr_39500;
});
var cljs$core$async$transduce_$_state_machine__23661__auto____1 = (function (state_39498){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_39498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e39501){if((e39501 instanceof Object)){
var ex__23664__auto__ = e39501;
var statearr_39502_39504 = state_39498;
(statearr_39502_39504[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39505 = state_39498;
state_39498 = G__39505;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23661__auto__ = function(state_39498){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23661__auto____1.call(this,state_39498);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23661__auto____0;
cljs$core$async$transduce_$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23661__auto____1;
return cljs$core$async$transduce_$_state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23750__auto__,f__$1))
})();
var state__23752__auto__ = (function (){var statearr_39503 = f__23751__auto__.call(null);
(statearr_39503[(6)] = c__23750__auto__);

return statearr_39503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(c__23750__auto__,f__$1))
);

return c__23750__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__39507 = arguments.length;
switch (G__39507) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23750__auto__){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (c__23750__auto__){
return (function (state_39532){
var state_val_39533 = (state_39532[(1)]);
if((state_val_39533 === (7))){
var inst_39514 = (state_39532[(2)]);
var state_39532__$1 = state_39532;
var statearr_39534_39555 = state_39532__$1;
(statearr_39534_39555[(2)] = inst_39514);

(statearr_39534_39555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39533 === (1))){
var inst_39508 = cljs.core.seq.call(null,coll);
var inst_39509 = inst_39508;
var state_39532__$1 = (function (){var statearr_39535 = state_39532;
(statearr_39535[(7)] = inst_39509);

return statearr_39535;
})();
var statearr_39536_39556 = state_39532__$1;
(statearr_39536_39556[(2)] = null);

(statearr_39536_39556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39533 === (4))){
var inst_39509 = (state_39532[(7)]);
var inst_39512 = cljs.core.first.call(null,inst_39509);
var state_39532__$1 = state_39532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39532__$1,(7),ch,inst_39512);
} else {
if((state_val_39533 === (13))){
var inst_39526 = (state_39532[(2)]);
var state_39532__$1 = state_39532;
var statearr_39537_39557 = state_39532__$1;
(statearr_39537_39557[(2)] = inst_39526);

(statearr_39537_39557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39533 === (6))){
var inst_39517 = (state_39532[(2)]);
var state_39532__$1 = state_39532;
if(cljs.core.truth_(inst_39517)){
var statearr_39538_39558 = state_39532__$1;
(statearr_39538_39558[(1)] = (8));

} else {
var statearr_39539_39559 = state_39532__$1;
(statearr_39539_39559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39533 === (3))){
var inst_39530 = (state_39532[(2)]);
var state_39532__$1 = state_39532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39532__$1,inst_39530);
} else {
if((state_val_39533 === (12))){
var state_39532__$1 = state_39532;
var statearr_39540_39560 = state_39532__$1;
(statearr_39540_39560[(2)] = null);

(statearr_39540_39560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39533 === (2))){
var inst_39509 = (state_39532[(7)]);
var state_39532__$1 = state_39532;
if(cljs.core.truth_(inst_39509)){
var statearr_39541_39561 = state_39532__$1;
(statearr_39541_39561[(1)] = (4));

} else {
var statearr_39542_39562 = state_39532__$1;
(statearr_39542_39562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39533 === (11))){
var inst_39523 = cljs.core.async.close_BANG_.call(null,ch);
var state_39532__$1 = state_39532;
var statearr_39543_39563 = state_39532__$1;
(statearr_39543_39563[(2)] = inst_39523);

(statearr_39543_39563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39533 === (9))){
var state_39532__$1 = state_39532;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39544_39564 = state_39532__$1;
(statearr_39544_39564[(1)] = (11));

} else {
var statearr_39545_39565 = state_39532__$1;
(statearr_39545_39565[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39533 === (5))){
var inst_39509 = (state_39532[(7)]);
var state_39532__$1 = state_39532;
var statearr_39546_39566 = state_39532__$1;
(statearr_39546_39566[(2)] = inst_39509);

(statearr_39546_39566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39533 === (10))){
var inst_39528 = (state_39532[(2)]);
var state_39532__$1 = state_39532;
var statearr_39547_39567 = state_39532__$1;
(statearr_39547_39567[(2)] = inst_39528);

(statearr_39547_39567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39533 === (8))){
var inst_39509 = (state_39532[(7)]);
var inst_39519 = cljs.core.next.call(null,inst_39509);
var inst_39509__$1 = inst_39519;
var state_39532__$1 = (function (){var statearr_39548 = state_39532;
(statearr_39548[(7)] = inst_39509__$1);

return statearr_39548;
})();
var statearr_39549_39568 = state_39532__$1;
(statearr_39549_39568[(2)] = null);

(statearr_39549_39568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23750__auto__))
;
return ((function (switch__23660__auto__,c__23750__auto__){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_39550 = [null,null,null,null,null,null,null,null];
(statearr_39550[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_39550[(1)] = (1));

return statearr_39550;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_39532){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_39532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e39551){if((e39551 instanceof Object)){
var ex__23664__auto__ = e39551;
var statearr_39552_39569 = state_39532;
(statearr_39552_39569[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39570 = state_39532;
state_39532 = G__39570;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_39532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_39532);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23750__auto__))
})();
var state__23752__auto__ = (function (){var statearr_39553 = f__23751__auto__.call(null);
(statearr_39553[(6)] = c__23750__auto__);

return statearr_39553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(c__23750__auto__))
);

return c__23750__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39571 = (function (ch,cs,meta39572){
this.ch = ch;
this.cs = cs;
this.meta39572 = meta39572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39573,meta39572__$1){
var self__ = this;
var _39573__$1 = this;
return (new cljs.core.async.t_cljs$core$async39571(self__.ch,self__.cs,meta39572__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39571.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39573){
var self__ = this;
var _39573__$1 = this;
return self__.meta39572;
});})(cs))
;

cljs.core.async.t_cljs$core$async39571.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39571.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39571.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39571.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39571.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39571.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39571.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39572","meta39572",-2141230150,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39571";

cljs.core.async.t_cljs$core$async39571.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39571");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39571.
 */
cljs.core.async.__GT_t_cljs$core$async39571 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39571(ch__$1,cs__$1,meta39572){
return (new cljs.core.async.t_cljs$core$async39571(ch__$1,cs__$1,meta39572));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39571(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23750__auto___39793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23750__auto___39793,cs,m,dchan,dctr,done){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (c__23750__auto___39793,cs,m,dchan,dctr,done){
return (function (state_39708){
var state_val_39709 = (state_39708[(1)]);
if((state_val_39709 === (7))){
var inst_39704 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39710_39794 = state_39708__$1;
(statearr_39710_39794[(2)] = inst_39704);

(statearr_39710_39794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (20))){
var inst_39607 = (state_39708[(7)]);
var inst_39619 = cljs.core.first.call(null,inst_39607);
var inst_39620 = cljs.core.nth.call(null,inst_39619,(0),null);
var inst_39621 = cljs.core.nth.call(null,inst_39619,(1),null);
var state_39708__$1 = (function (){var statearr_39711 = state_39708;
(statearr_39711[(8)] = inst_39620);

return statearr_39711;
})();
if(cljs.core.truth_(inst_39621)){
var statearr_39712_39795 = state_39708__$1;
(statearr_39712_39795[(1)] = (22));

} else {
var statearr_39713_39796 = state_39708__$1;
(statearr_39713_39796[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (27))){
var inst_39576 = (state_39708[(9)]);
var inst_39656 = (state_39708[(10)]);
var inst_39651 = (state_39708[(11)]);
var inst_39649 = (state_39708[(12)]);
var inst_39656__$1 = cljs.core._nth.call(null,inst_39649,inst_39651);
var inst_39657 = cljs.core.async.put_BANG_.call(null,inst_39656__$1,inst_39576,done);
var state_39708__$1 = (function (){var statearr_39714 = state_39708;
(statearr_39714[(10)] = inst_39656__$1);

return statearr_39714;
})();
if(cljs.core.truth_(inst_39657)){
var statearr_39715_39797 = state_39708__$1;
(statearr_39715_39797[(1)] = (30));

} else {
var statearr_39716_39798 = state_39708__$1;
(statearr_39716_39798[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (1))){
var state_39708__$1 = state_39708;
var statearr_39717_39799 = state_39708__$1;
(statearr_39717_39799[(2)] = null);

(statearr_39717_39799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (24))){
var inst_39607 = (state_39708[(7)]);
var inst_39626 = (state_39708[(2)]);
var inst_39627 = cljs.core.next.call(null,inst_39607);
var inst_39585 = inst_39627;
var inst_39586 = null;
var inst_39587 = (0);
var inst_39588 = (0);
var state_39708__$1 = (function (){var statearr_39718 = state_39708;
(statearr_39718[(13)] = inst_39586);

(statearr_39718[(14)] = inst_39588);

(statearr_39718[(15)] = inst_39585);

(statearr_39718[(16)] = inst_39587);

(statearr_39718[(17)] = inst_39626);

return statearr_39718;
})();
var statearr_39719_39800 = state_39708__$1;
(statearr_39719_39800[(2)] = null);

(statearr_39719_39800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (39))){
var state_39708__$1 = state_39708;
var statearr_39723_39801 = state_39708__$1;
(statearr_39723_39801[(2)] = null);

(statearr_39723_39801[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (4))){
var inst_39576 = (state_39708[(9)]);
var inst_39576__$1 = (state_39708[(2)]);
var inst_39577 = (inst_39576__$1 == null);
var state_39708__$1 = (function (){var statearr_39724 = state_39708;
(statearr_39724[(9)] = inst_39576__$1);

return statearr_39724;
})();
if(cljs.core.truth_(inst_39577)){
var statearr_39725_39802 = state_39708__$1;
(statearr_39725_39802[(1)] = (5));

} else {
var statearr_39726_39803 = state_39708__$1;
(statearr_39726_39803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (15))){
var inst_39586 = (state_39708[(13)]);
var inst_39588 = (state_39708[(14)]);
var inst_39585 = (state_39708[(15)]);
var inst_39587 = (state_39708[(16)]);
var inst_39603 = (state_39708[(2)]);
var inst_39604 = (inst_39588 + (1));
var tmp39720 = inst_39586;
var tmp39721 = inst_39585;
var tmp39722 = inst_39587;
var inst_39585__$1 = tmp39721;
var inst_39586__$1 = tmp39720;
var inst_39587__$1 = tmp39722;
var inst_39588__$1 = inst_39604;
var state_39708__$1 = (function (){var statearr_39727 = state_39708;
(statearr_39727[(13)] = inst_39586__$1);

(statearr_39727[(14)] = inst_39588__$1);

(statearr_39727[(18)] = inst_39603);

(statearr_39727[(15)] = inst_39585__$1);

(statearr_39727[(16)] = inst_39587__$1);

return statearr_39727;
})();
var statearr_39728_39804 = state_39708__$1;
(statearr_39728_39804[(2)] = null);

(statearr_39728_39804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (21))){
var inst_39630 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39732_39805 = state_39708__$1;
(statearr_39732_39805[(2)] = inst_39630);

(statearr_39732_39805[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (31))){
var inst_39656 = (state_39708[(10)]);
var inst_39660 = done.call(null,null);
var inst_39661 = cljs.core.async.untap_STAR_.call(null,m,inst_39656);
var state_39708__$1 = (function (){var statearr_39733 = state_39708;
(statearr_39733[(19)] = inst_39660);

return statearr_39733;
})();
var statearr_39734_39806 = state_39708__$1;
(statearr_39734_39806[(2)] = inst_39661);

(statearr_39734_39806[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (32))){
var inst_39650 = (state_39708[(20)]);
var inst_39651 = (state_39708[(11)]);
var inst_39648 = (state_39708[(21)]);
var inst_39649 = (state_39708[(12)]);
var inst_39663 = (state_39708[(2)]);
var inst_39664 = (inst_39651 + (1));
var tmp39729 = inst_39650;
var tmp39730 = inst_39648;
var tmp39731 = inst_39649;
var inst_39648__$1 = tmp39730;
var inst_39649__$1 = tmp39731;
var inst_39650__$1 = tmp39729;
var inst_39651__$1 = inst_39664;
var state_39708__$1 = (function (){var statearr_39735 = state_39708;
(statearr_39735[(20)] = inst_39650__$1);

(statearr_39735[(11)] = inst_39651__$1);

(statearr_39735[(21)] = inst_39648__$1);

(statearr_39735[(12)] = inst_39649__$1);

(statearr_39735[(22)] = inst_39663);

return statearr_39735;
})();
var statearr_39736_39807 = state_39708__$1;
(statearr_39736_39807[(2)] = null);

(statearr_39736_39807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (40))){
var inst_39676 = (state_39708[(23)]);
var inst_39680 = done.call(null,null);
var inst_39681 = cljs.core.async.untap_STAR_.call(null,m,inst_39676);
var state_39708__$1 = (function (){var statearr_39737 = state_39708;
(statearr_39737[(24)] = inst_39680);

return statearr_39737;
})();
var statearr_39738_39808 = state_39708__$1;
(statearr_39738_39808[(2)] = inst_39681);

(statearr_39738_39808[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (33))){
var inst_39667 = (state_39708[(25)]);
var inst_39669 = cljs.core.chunked_seq_QMARK_.call(null,inst_39667);
var state_39708__$1 = state_39708;
if(inst_39669){
var statearr_39739_39809 = state_39708__$1;
(statearr_39739_39809[(1)] = (36));

} else {
var statearr_39740_39810 = state_39708__$1;
(statearr_39740_39810[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (13))){
var inst_39597 = (state_39708[(26)]);
var inst_39600 = cljs.core.async.close_BANG_.call(null,inst_39597);
var state_39708__$1 = state_39708;
var statearr_39741_39811 = state_39708__$1;
(statearr_39741_39811[(2)] = inst_39600);

(statearr_39741_39811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (22))){
var inst_39620 = (state_39708[(8)]);
var inst_39623 = cljs.core.async.close_BANG_.call(null,inst_39620);
var state_39708__$1 = state_39708;
var statearr_39742_39812 = state_39708__$1;
(statearr_39742_39812[(2)] = inst_39623);

(statearr_39742_39812[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (36))){
var inst_39667 = (state_39708[(25)]);
var inst_39671 = cljs.core.chunk_first.call(null,inst_39667);
var inst_39672 = cljs.core.chunk_rest.call(null,inst_39667);
var inst_39673 = cljs.core.count.call(null,inst_39671);
var inst_39648 = inst_39672;
var inst_39649 = inst_39671;
var inst_39650 = inst_39673;
var inst_39651 = (0);
var state_39708__$1 = (function (){var statearr_39743 = state_39708;
(statearr_39743[(20)] = inst_39650);

(statearr_39743[(11)] = inst_39651);

(statearr_39743[(21)] = inst_39648);

(statearr_39743[(12)] = inst_39649);

return statearr_39743;
})();
var statearr_39744_39813 = state_39708__$1;
(statearr_39744_39813[(2)] = null);

(statearr_39744_39813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (41))){
var inst_39667 = (state_39708[(25)]);
var inst_39683 = (state_39708[(2)]);
var inst_39684 = cljs.core.next.call(null,inst_39667);
var inst_39648 = inst_39684;
var inst_39649 = null;
var inst_39650 = (0);
var inst_39651 = (0);
var state_39708__$1 = (function (){var statearr_39745 = state_39708;
(statearr_39745[(20)] = inst_39650);

(statearr_39745[(11)] = inst_39651);

(statearr_39745[(27)] = inst_39683);

(statearr_39745[(21)] = inst_39648);

(statearr_39745[(12)] = inst_39649);

return statearr_39745;
})();
var statearr_39746_39814 = state_39708__$1;
(statearr_39746_39814[(2)] = null);

(statearr_39746_39814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (43))){
var state_39708__$1 = state_39708;
var statearr_39747_39815 = state_39708__$1;
(statearr_39747_39815[(2)] = null);

(statearr_39747_39815[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (29))){
var inst_39692 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39748_39816 = state_39708__$1;
(statearr_39748_39816[(2)] = inst_39692);

(statearr_39748_39816[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (44))){
var inst_39701 = (state_39708[(2)]);
var state_39708__$1 = (function (){var statearr_39749 = state_39708;
(statearr_39749[(28)] = inst_39701);

return statearr_39749;
})();
var statearr_39750_39817 = state_39708__$1;
(statearr_39750_39817[(2)] = null);

(statearr_39750_39817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (6))){
var inst_39640 = (state_39708[(29)]);
var inst_39639 = cljs.core.deref.call(null,cs);
var inst_39640__$1 = cljs.core.keys.call(null,inst_39639);
var inst_39641 = cljs.core.count.call(null,inst_39640__$1);
var inst_39642 = cljs.core.reset_BANG_.call(null,dctr,inst_39641);
var inst_39647 = cljs.core.seq.call(null,inst_39640__$1);
var inst_39648 = inst_39647;
var inst_39649 = null;
var inst_39650 = (0);
var inst_39651 = (0);
var state_39708__$1 = (function (){var statearr_39751 = state_39708;
(statearr_39751[(20)] = inst_39650);

(statearr_39751[(11)] = inst_39651);

(statearr_39751[(30)] = inst_39642);

(statearr_39751[(29)] = inst_39640__$1);

(statearr_39751[(21)] = inst_39648);

(statearr_39751[(12)] = inst_39649);

return statearr_39751;
})();
var statearr_39752_39818 = state_39708__$1;
(statearr_39752_39818[(2)] = null);

(statearr_39752_39818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (28))){
var inst_39648 = (state_39708[(21)]);
var inst_39667 = (state_39708[(25)]);
var inst_39667__$1 = cljs.core.seq.call(null,inst_39648);
var state_39708__$1 = (function (){var statearr_39753 = state_39708;
(statearr_39753[(25)] = inst_39667__$1);

return statearr_39753;
})();
if(inst_39667__$1){
var statearr_39754_39819 = state_39708__$1;
(statearr_39754_39819[(1)] = (33));

} else {
var statearr_39755_39820 = state_39708__$1;
(statearr_39755_39820[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (25))){
var inst_39650 = (state_39708[(20)]);
var inst_39651 = (state_39708[(11)]);
var inst_39653 = (inst_39651 < inst_39650);
var inst_39654 = inst_39653;
var state_39708__$1 = state_39708;
if(cljs.core.truth_(inst_39654)){
var statearr_39756_39821 = state_39708__$1;
(statearr_39756_39821[(1)] = (27));

} else {
var statearr_39757_39822 = state_39708__$1;
(statearr_39757_39822[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (34))){
var state_39708__$1 = state_39708;
var statearr_39758_39823 = state_39708__$1;
(statearr_39758_39823[(2)] = null);

(statearr_39758_39823[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (17))){
var state_39708__$1 = state_39708;
var statearr_39759_39824 = state_39708__$1;
(statearr_39759_39824[(2)] = null);

(statearr_39759_39824[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (3))){
var inst_39706 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39708__$1,inst_39706);
} else {
if((state_val_39709 === (12))){
var inst_39635 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39760_39825 = state_39708__$1;
(statearr_39760_39825[(2)] = inst_39635);

(statearr_39760_39825[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (2))){
var state_39708__$1 = state_39708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39708__$1,(4),ch);
} else {
if((state_val_39709 === (23))){
var state_39708__$1 = state_39708;
var statearr_39761_39826 = state_39708__$1;
(statearr_39761_39826[(2)] = null);

(statearr_39761_39826[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (35))){
var inst_39690 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39762_39827 = state_39708__$1;
(statearr_39762_39827[(2)] = inst_39690);

(statearr_39762_39827[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (19))){
var inst_39607 = (state_39708[(7)]);
var inst_39611 = cljs.core.chunk_first.call(null,inst_39607);
var inst_39612 = cljs.core.chunk_rest.call(null,inst_39607);
var inst_39613 = cljs.core.count.call(null,inst_39611);
var inst_39585 = inst_39612;
var inst_39586 = inst_39611;
var inst_39587 = inst_39613;
var inst_39588 = (0);
var state_39708__$1 = (function (){var statearr_39763 = state_39708;
(statearr_39763[(13)] = inst_39586);

(statearr_39763[(14)] = inst_39588);

(statearr_39763[(15)] = inst_39585);

(statearr_39763[(16)] = inst_39587);

return statearr_39763;
})();
var statearr_39764_39828 = state_39708__$1;
(statearr_39764_39828[(2)] = null);

(statearr_39764_39828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (11))){
var inst_39607 = (state_39708[(7)]);
var inst_39585 = (state_39708[(15)]);
var inst_39607__$1 = cljs.core.seq.call(null,inst_39585);
var state_39708__$1 = (function (){var statearr_39765 = state_39708;
(statearr_39765[(7)] = inst_39607__$1);

return statearr_39765;
})();
if(inst_39607__$1){
var statearr_39766_39829 = state_39708__$1;
(statearr_39766_39829[(1)] = (16));

} else {
var statearr_39767_39830 = state_39708__$1;
(statearr_39767_39830[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (9))){
var inst_39637 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39768_39831 = state_39708__$1;
(statearr_39768_39831[(2)] = inst_39637);

(statearr_39768_39831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (5))){
var inst_39583 = cljs.core.deref.call(null,cs);
var inst_39584 = cljs.core.seq.call(null,inst_39583);
var inst_39585 = inst_39584;
var inst_39586 = null;
var inst_39587 = (0);
var inst_39588 = (0);
var state_39708__$1 = (function (){var statearr_39769 = state_39708;
(statearr_39769[(13)] = inst_39586);

(statearr_39769[(14)] = inst_39588);

(statearr_39769[(15)] = inst_39585);

(statearr_39769[(16)] = inst_39587);

return statearr_39769;
})();
var statearr_39770_39832 = state_39708__$1;
(statearr_39770_39832[(2)] = null);

(statearr_39770_39832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (14))){
var state_39708__$1 = state_39708;
var statearr_39771_39833 = state_39708__$1;
(statearr_39771_39833[(2)] = null);

(statearr_39771_39833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (45))){
var inst_39698 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39772_39834 = state_39708__$1;
(statearr_39772_39834[(2)] = inst_39698);

(statearr_39772_39834[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (26))){
var inst_39640 = (state_39708[(29)]);
var inst_39694 = (state_39708[(2)]);
var inst_39695 = cljs.core.seq.call(null,inst_39640);
var state_39708__$1 = (function (){var statearr_39773 = state_39708;
(statearr_39773[(31)] = inst_39694);

return statearr_39773;
})();
if(inst_39695){
var statearr_39774_39835 = state_39708__$1;
(statearr_39774_39835[(1)] = (42));

} else {
var statearr_39775_39836 = state_39708__$1;
(statearr_39775_39836[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (16))){
var inst_39607 = (state_39708[(7)]);
var inst_39609 = cljs.core.chunked_seq_QMARK_.call(null,inst_39607);
var state_39708__$1 = state_39708;
if(inst_39609){
var statearr_39776_39837 = state_39708__$1;
(statearr_39776_39837[(1)] = (19));

} else {
var statearr_39777_39838 = state_39708__$1;
(statearr_39777_39838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (38))){
var inst_39687 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39778_39839 = state_39708__$1;
(statearr_39778_39839[(2)] = inst_39687);

(statearr_39778_39839[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (30))){
var state_39708__$1 = state_39708;
var statearr_39779_39840 = state_39708__$1;
(statearr_39779_39840[(2)] = null);

(statearr_39779_39840[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (10))){
var inst_39586 = (state_39708[(13)]);
var inst_39588 = (state_39708[(14)]);
var inst_39596 = cljs.core._nth.call(null,inst_39586,inst_39588);
var inst_39597 = cljs.core.nth.call(null,inst_39596,(0),null);
var inst_39598 = cljs.core.nth.call(null,inst_39596,(1),null);
var state_39708__$1 = (function (){var statearr_39780 = state_39708;
(statearr_39780[(26)] = inst_39597);

return statearr_39780;
})();
if(cljs.core.truth_(inst_39598)){
var statearr_39781_39841 = state_39708__$1;
(statearr_39781_39841[(1)] = (13));

} else {
var statearr_39782_39842 = state_39708__$1;
(statearr_39782_39842[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (18))){
var inst_39633 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39783_39843 = state_39708__$1;
(statearr_39783_39843[(2)] = inst_39633);

(statearr_39783_39843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (42))){
var state_39708__$1 = state_39708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39708__$1,(45),dchan);
} else {
if((state_val_39709 === (37))){
var inst_39576 = (state_39708[(9)]);
var inst_39676 = (state_39708[(23)]);
var inst_39667 = (state_39708[(25)]);
var inst_39676__$1 = cljs.core.first.call(null,inst_39667);
var inst_39677 = cljs.core.async.put_BANG_.call(null,inst_39676__$1,inst_39576,done);
var state_39708__$1 = (function (){var statearr_39784 = state_39708;
(statearr_39784[(23)] = inst_39676__$1);

return statearr_39784;
})();
if(cljs.core.truth_(inst_39677)){
var statearr_39785_39844 = state_39708__$1;
(statearr_39785_39844[(1)] = (39));

} else {
var statearr_39786_39845 = state_39708__$1;
(statearr_39786_39845[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (8))){
var inst_39588 = (state_39708[(14)]);
var inst_39587 = (state_39708[(16)]);
var inst_39590 = (inst_39588 < inst_39587);
var inst_39591 = inst_39590;
var state_39708__$1 = state_39708;
if(cljs.core.truth_(inst_39591)){
var statearr_39787_39846 = state_39708__$1;
(statearr_39787_39846[(1)] = (10));

} else {
var statearr_39788_39847 = state_39708__$1;
(statearr_39788_39847[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23750__auto___39793,cs,m,dchan,dctr,done))
;
return ((function (switch__23660__auto__,c__23750__auto___39793,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23661__auto__ = null;
var cljs$core$async$mult_$_state_machine__23661__auto____0 = (function (){
var statearr_39789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39789[(0)] = cljs$core$async$mult_$_state_machine__23661__auto__);

(statearr_39789[(1)] = (1));

return statearr_39789;
});
var cljs$core$async$mult_$_state_machine__23661__auto____1 = (function (state_39708){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_39708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e39790){if((e39790 instanceof Object)){
var ex__23664__auto__ = e39790;
var statearr_39791_39848 = state_39708;
(statearr_39791_39848[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39849 = state_39708;
state_39708 = G__39849;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23661__auto__ = function(state_39708){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23661__auto____1.call(this,state_39708);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23661__auto____0;
cljs$core$async$mult_$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23661__auto____1;
return cljs$core$async$mult_$_state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23750__auto___39793,cs,m,dchan,dctr,done))
})();
var state__23752__auto__ = (function (){var statearr_39792 = f__23751__auto__.call(null);
(statearr_39792[(6)] = c__23750__auto___39793);

return statearr_39792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(c__23750__auto___39793,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__39851 = arguments.length;
switch (G__39851) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39863 = arguments.length;
var i__4500__auto___39864 = (0);
while(true){
if((i__4500__auto___39864 < len__4499__auto___39863)){
args__4502__auto__.push((arguments[i__4500__auto___39864]));

var G__39865 = (i__4500__auto___39864 + (1));
i__4500__auto___39864 = G__39865;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39857){
var map__39858 = p__39857;
var map__39858__$1 = ((((!((map__39858 == null)))?(((((map__39858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39858):map__39858);
var opts = map__39858__$1;
var statearr_39860_39866 = state;
(statearr_39860_39866[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__39858,map__39858__$1,opts){
return (function (val){
var statearr_39861_39867 = state;
(statearr_39861_39867[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39858,map__39858__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_39862_39868 = state;
(statearr_39862_39868[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39853){
var G__39854 = cljs.core.first.call(null,seq39853);
var seq39853__$1 = cljs.core.next.call(null,seq39853);
var G__39855 = cljs.core.first.call(null,seq39853__$1);
var seq39853__$2 = cljs.core.next.call(null,seq39853__$1);
var G__39856 = cljs.core.first.call(null,seq39853__$2);
var seq39853__$3 = cljs.core.next.call(null,seq39853__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39854,G__39855,G__39856,seq39853__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39869 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39869 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta39870){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta39870 = meta39870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39871,meta39870__$1){
var self__ = this;
var _39871__$1 = this;
return (new cljs.core.async.t_cljs$core$async39869(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta39870__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39871){
var self__ = this;
var _39871__$1 = this;
return self__.meta39870;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39869.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39869.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39869.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39869.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39869.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39869.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39869.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39869.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39869.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta39870","meta39870",1488457560,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39869";

cljs.core.async.t_cljs$core$async39869.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39869");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39869.
 */
cljs.core.async.__GT_t_cljs$core$async39869 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39869(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta39870){
return (new cljs.core.async.t_cljs$core$async39869(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta39870));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39869(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23750__auto___40033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23750__auto___40033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (c__23750__auto___40033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39973){
var state_val_39974 = (state_39973[(1)]);
if((state_val_39974 === (7))){
var inst_39888 = (state_39973[(2)]);
var state_39973__$1 = state_39973;
var statearr_39975_40034 = state_39973__$1;
(statearr_39975_40034[(2)] = inst_39888);

(statearr_39975_40034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (20))){
var inst_39900 = (state_39973[(7)]);
var state_39973__$1 = state_39973;
var statearr_39976_40035 = state_39973__$1;
(statearr_39976_40035[(2)] = inst_39900);

(statearr_39976_40035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (27))){
var state_39973__$1 = state_39973;
var statearr_39977_40036 = state_39973__$1;
(statearr_39977_40036[(2)] = null);

(statearr_39977_40036[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (1))){
var inst_39875 = (state_39973[(8)]);
var inst_39875__$1 = calc_state.call(null);
var inst_39877 = (inst_39875__$1 == null);
var inst_39878 = cljs.core.not.call(null,inst_39877);
var state_39973__$1 = (function (){var statearr_39978 = state_39973;
(statearr_39978[(8)] = inst_39875__$1);

return statearr_39978;
})();
if(inst_39878){
var statearr_39979_40037 = state_39973__$1;
(statearr_39979_40037[(1)] = (2));

} else {
var statearr_39980_40038 = state_39973__$1;
(statearr_39980_40038[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (24))){
var inst_39924 = (state_39973[(9)]);
var inst_39933 = (state_39973[(10)]);
var inst_39947 = (state_39973[(11)]);
var inst_39947__$1 = inst_39924.call(null,inst_39933);
var state_39973__$1 = (function (){var statearr_39981 = state_39973;
(statearr_39981[(11)] = inst_39947__$1);

return statearr_39981;
})();
if(cljs.core.truth_(inst_39947__$1)){
var statearr_39982_40039 = state_39973__$1;
(statearr_39982_40039[(1)] = (29));

} else {
var statearr_39983_40040 = state_39973__$1;
(statearr_39983_40040[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (4))){
var inst_39891 = (state_39973[(2)]);
var state_39973__$1 = state_39973;
if(cljs.core.truth_(inst_39891)){
var statearr_39984_40041 = state_39973__$1;
(statearr_39984_40041[(1)] = (8));

} else {
var statearr_39985_40042 = state_39973__$1;
(statearr_39985_40042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (15))){
var inst_39918 = (state_39973[(2)]);
var state_39973__$1 = state_39973;
if(cljs.core.truth_(inst_39918)){
var statearr_39986_40043 = state_39973__$1;
(statearr_39986_40043[(1)] = (19));

} else {
var statearr_39987_40044 = state_39973__$1;
(statearr_39987_40044[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (21))){
var inst_39923 = (state_39973[(12)]);
var inst_39923__$1 = (state_39973[(2)]);
var inst_39924 = cljs.core.get.call(null,inst_39923__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39925 = cljs.core.get.call(null,inst_39923__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39926 = cljs.core.get.call(null,inst_39923__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39973__$1 = (function (){var statearr_39988 = state_39973;
(statearr_39988[(9)] = inst_39924);

(statearr_39988[(12)] = inst_39923__$1);

(statearr_39988[(13)] = inst_39925);

return statearr_39988;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39973__$1,(22),inst_39926);
} else {
if((state_val_39974 === (31))){
var inst_39955 = (state_39973[(2)]);
var state_39973__$1 = state_39973;
if(cljs.core.truth_(inst_39955)){
var statearr_39989_40045 = state_39973__$1;
(statearr_39989_40045[(1)] = (32));

} else {
var statearr_39990_40046 = state_39973__$1;
(statearr_39990_40046[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (32))){
var inst_39932 = (state_39973[(14)]);
var state_39973__$1 = state_39973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39973__$1,(35),out,inst_39932);
} else {
if((state_val_39974 === (33))){
var inst_39923 = (state_39973[(12)]);
var inst_39900 = inst_39923;
var state_39973__$1 = (function (){var statearr_39991 = state_39973;
(statearr_39991[(7)] = inst_39900);

return statearr_39991;
})();
var statearr_39992_40047 = state_39973__$1;
(statearr_39992_40047[(2)] = null);

(statearr_39992_40047[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (13))){
var inst_39900 = (state_39973[(7)]);
var inst_39907 = inst_39900.cljs$lang$protocol_mask$partition0$;
var inst_39908 = (inst_39907 & (64));
var inst_39909 = inst_39900.cljs$core$ISeq$;
var inst_39910 = (cljs.core.PROTOCOL_SENTINEL === inst_39909);
var inst_39911 = ((inst_39908) || (inst_39910));
var state_39973__$1 = state_39973;
if(cljs.core.truth_(inst_39911)){
var statearr_39993_40048 = state_39973__$1;
(statearr_39993_40048[(1)] = (16));

} else {
var statearr_39994_40049 = state_39973__$1;
(statearr_39994_40049[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (22))){
var inst_39933 = (state_39973[(10)]);
var inst_39932 = (state_39973[(14)]);
var inst_39931 = (state_39973[(2)]);
var inst_39932__$1 = cljs.core.nth.call(null,inst_39931,(0),null);
var inst_39933__$1 = cljs.core.nth.call(null,inst_39931,(1),null);
var inst_39934 = (inst_39932__$1 == null);
var inst_39935 = cljs.core._EQ_.call(null,inst_39933__$1,change);
var inst_39936 = ((inst_39934) || (inst_39935));
var state_39973__$1 = (function (){var statearr_39995 = state_39973;
(statearr_39995[(10)] = inst_39933__$1);

(statearr_39995[(14)] = inst_39932__$1);

return statearr_39995;
})();
if(cljs.core.truth_(inst_39936)){
var statearr_39996_40050 = state_39973__$1;
(statearr_39996_40050[(1)] = (23));

} else {
var statearr_39997_40051 = state_39973__$1;
(statearr_39997_40051[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (36))){
var inst_39923 = (state_39973[(12)]);
var inst_39900 = inst_39923;
var state_39973__$1 = (function (){var statearr_39998 = state_39973;
(statearr_39998[(7)] = inst_39900);

return statearr_39998;
})();
var statearr_39999_40052 = state_39973__$1;
(statearr_39999_40052[(2)] = null);

(statearr_39999_40052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (29))){
var inst_39947 = (state_39973[(11)]);
var state_39973__$1 = state_39973;
var statearr_40000_40053 = state_39973__$1;
(statearr_40000_40053[(2)] = inst_39947);

(statearr_40000_40053[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (6))){
var state_39973__$1 = state_39973;
var statearr_40001_40054 = state_39973__$1;
(statearr_40001_40054[(2)] = false);

(statearr_40001_40054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (28))){
var inst_39943 = (state_39973[(2)]);
var inst_39944 = calc_state.call(null);
var inst_39900 = inst_39944;
var state_39973__$1 = (function (){var statearr_40002 = state_39973;
(statearr_40002[(7)] = inst_39900);

(statearr_40002[(15)] = inst_39943);

return statearr_40002;
})();
var statearr_40003_40055 = state_39973__$1;
(statearr_40003_40055[(2)] = null);

(statearr_40003_40055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (25))){
var inst_39969 = (state_39973[(2)]);
var state_39973__$1 = state_39973;
var statearr_40004_40056 = state_39973__$1;
(statearr_40004_40056[(2)] = inst_39969);

(statearr_40004_40056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (34))){
var inst_39967 = (state_39973[(2)]);
var state_39973__$1 = state_39973;
var statearr_40005_40057 = state_39973__$1;
(statearr_40005_40057[(2)] = inst_39967);

(statearr_40005_40057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (17))){
var state_39973__$1 = state_39973;
var statearr_40006_40058 = state_39973__$1;
(statearr_40006_40058[(2)] = false);

(statearr_40006_40058[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (3))){
var state_39973__$1 = state_39973;
var statearr_40007_40059 = state_39973__$1;
(statearr_40007_40059[(2)] = false);

(statearr_40007_40059[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (12))){
var inst_39971 = (state_39973[(2)]);
var state_39973__$1 = state_39973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39973__$1,inst_39971);
} else {
if((state_val_39974 === (2))){
var inst_39875 = (state_39973[(8)]);
var inst_39880 = inst_39875.cljs$lang$protocol_mask$partition0$;
var inst_39881 = (inst_39880 & (64));
var inst_39882 = inst_39875.cljs$core$ISeq$;
var inst_39883 = (cljs.core.PROTOCOL_SENTINEL === inst_39882);
var inst_39884 = ((inst_39881) || (inst_39883));
var state_39973__$1 = state_39973;
if(cljs.core.truth_(inst_39884)){
var statearr_40008_40060 = state_39973__$1;
(statearr_40008_40060[(1)] = (5));

} else {
var statearr_40009_40061 = state_39973__$1;
(statearr_40009_40061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (23))){
var inst_39932 = (state_39973[(14)]);
var inst_39938 = (inst_39932 == null);
var state_39973__$1 = state_39973;
if(cljs.core.truth_(inst_39938)){
var statearr_40010_40062 = state_39973__$1;
(statearr_40010_40062[(1)] = (26));

} else {
var statearr_40011_40063 = state_39973__$1;
(statearr_40011_40063[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (35))){
var inst_39958 = (state_39973[(2)]);
var state_39973__$1 = state_39973;
if(cljs.core.truth_(inst_39958)){
var statearr_40012_40064 = state_39973__$1;
(statearr_40012_40064[(1)] = (36));

} else {
var statearr_40013_40065 = state_39973__$1;
(statearr_40013_40065[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (19))){
var inst_39900 = (state_39973[(7)]);
var inst_39920 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39900);
var state_39973__$1 = state_39973;
var statearr_40014_40066 = state_39973__$1;
(statearr_40014_40066[(2)] = inst_39920);

(statearr_40014_40066[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (11))){
var inst_39900 = (state_39973[(7)]);
var inst_39904 = (inst_39900 == null);
var inst_39905 = cljs.core.not.call(null,inst_39904);
var state_39973__$1 = state_39973;
if(inst_39905){
var statearr_40015_40067 = state_39973__$1;
(statearr_40015_40067[(1)] = (13));

} else {
var statearr_40016_40068 = state_39973__$1;
(statearr_40016_40068[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (9))){
var inst_39875 = (state_39973[(8)]);
var state_39973__$1 = state_39973;
var statearr_40017_40069 = state_39973__$1;
(statearr_40017_40069[(2)] = inst_39875);

(statearr_40017_40069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (5))){
var state_39973__$1 = state_39973;
var statearr_40018_40070 = state_39973__$1;
(statearr_40018_40070[(2)] = true);

(statearr_40018_40070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (14))){
var state_39973__$1 = state_39973;
var statearr_40019_40071 = state_39973__$1;
(statearr_40019_40071[(2)] = false);

(statearr_40019_40071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (26))){
var inst_39933 = (state_39973[(10)]);
var inst_39940 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39933);
var state_39973__$1 = state_39973;
var statearr_40020_40072 = state_39973__$1;
(statearr_40020_40072[(2)] = inst_39940);

(statearr_40020_40072[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (16))){
var state_39973__$1 = state_39973;
var statearr_40021_40073 = state_39973__$1;
(statearr_40021_40073[(2)] = true);

(statearr_40021_40073[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (38))){
var inst_39963 = (state_39973[(2)]);
var state_39973__$1 = state_39973;
var statearr_40022_40074 = state_39973__$1;
(statearr_40022_40074[(2)] = inst_39963);

(statearr_40022_40074[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (30))){
var inst_39924 = (state_39973[(9)]);
var inst_39925 = (state_39973[(13)]);
var inst_39933 = (state_39973[(10)]);
var inst_39950 = cljs.core.empty_QMARK_.call(null,inst_39924);
var inst_39951 = inst_39925.call(null,inst_39933);
var inst_39952 = cljs.core.not.call(null,inst_39951);
var inst_39953 = ((inst_39950) && (inst_39952));
var state_39973__$1 = state_39973;
var statearr_40023_40075 = state_39973__$1;
(statearr_40023_40075[(2)] = inst_39953);

(statearr_40023_40075[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (10))){
var inst_39875 = (state_39973[(8)]);
var inst_39896 = (state_39973[(2)]);
var inst_39897 = cljs.core.get.call(null,inst_39896,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39898 = cljs.core.get.call(null,inst_39896,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39899 = cljs.core.get.call(null,inst_39896,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39900 = inst_39875;
var state_39973__$1 = (function (){var statearr_40024 = state_39973;
(statearr_40024[(16)] = inst_39897);

(statearr_40024[(7)] = inst_39900);

(statearr_40024[(17)] = inst_39898);

(statearr_40024[(18)] = inst_39899);

return statearr_40024;
})();
var statearr_40025_40076 = state_39973__$1;
(statearr_40025_40076[(2)] = null);

(statearr_40025_40076[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (18))){
var inst_39915 = (state_39973[(2)]);
var state_39973__$1 = state_39973;
var statearr_40026_40077 = state_39973__$1;
(statearr_40026_40077[(2)] = inst_39915);

(statearr_40026_40077[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (37))){
var state_39973__$1 = state_39973;
var statearr_40027_40078 = state_39973__$1;
(statearr_40027_40078[(2)] = null);

(statearr_40027_40078[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (8))){
var inst_39875 = (state_39973[(8)]);
var inst_39893 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39875);
var state_39973__$1 = state_39973;
var statearr_40028_40079 = state_39973__$1;
(statearr_40028_40079[(2)] = inst_39893);

(statearr_40028_40079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23750__auto___40033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23660__auto__,c__23750__auto___40033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23661__auto__ = null;
var cljs$core$async$mix_$_state_machine__23661__auto____0 = (function (){
var statearr_40029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40029[(0)] = cljs$core$async$mix_$_state_machine__23661__auto__);

(statearr_40029[(1)] = (1));

return statearr_40029;
});
var cljs$core$async$mix_$_state_machine__23661__auto____1 = (function (state_39973){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_39973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e40030){if((e40030 instanceof Object)){
var ex__23664__auto__ = e40030;
var statearr_40031_40080 = state_39973;
(statearr_40031_40080[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40081 = state_39973;
state_39973 = G__40081;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23661__auto__ = function(state_39973){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23661__auto____1.call(this,state_39973);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23661__auto____0;
cljs$core$async$mix_$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23661__auto____1;
return cljs$core$async$mix_$_state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23750__auto___40033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23752__auto__ = (function (){var statearr_40032 = f__23751__auto__.call(null);
(statearr_40032[(6)] = c__23750__auto___40033);

return statearr_40032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(c__23750__auto___40033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__40083 = arguments.length;
switch (G__40083) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__40087 = arguments.length;
switch (G__40087) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__40085_SHARP_){
if(cljs.core.truth_(p1__40085_SHARP_.call(null,topic))){
return p1__40085_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40085_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40088 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40088 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40089){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40089 = meta40089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40090,meta40089__$1){
var self__ = this;
var _40090__$1 = this;
return (new cljs.core.async.t_cljs$core$async40088(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40089__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40088.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40090){
var self__ = this;
var _40090__$1 = this;
return self__.meta40089;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40088.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40088.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40088.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40088.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40088.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40088.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40088.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40088.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40089","meta40089",-1840924826,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40088.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40088";

cljs.core.async.t_cljs$core$async40088.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40088");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40088.
 */
cljs.core.async.__GT_t_cljs$core$async40088 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40088(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40089){
return (new cljs.core.async.t_cljs$core$async40088(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40089));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40088(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23750__auto___40208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23750__auto___40208,mults,ensure_mult,p){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (c__23750__auto___40208,mults,ensure_mult,p){
return (function (state_40162){
var state_val_40163 = (state_40162[(1)]);
if((state_val_40163 === (7))){
var inst_40158 = (state_40162[(2)]);
var state_40162__$1 = state_40162;
var statearr_40164_40209 = state_40162__$1;
(statearr_40164_40209[(2)] = inst_40158);

(statearr_40164_40209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (20))){
var state_40162__$1 = state_40162;
var statearr_40165_40210 = state_40162__$1;
(statearr_40165_40210[(2)] = null);

(statearr_40165_40210[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (1))){
var state_40162__$1 = state_40162;
var statearr_40166_40211 = state_40162__$1;
(statearr_40166_40211[(2)] = null);

(statearr_40166_40211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (24))){
var inst_40141 = (state_40162[(7)]);
var inst_40150 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40141);
var state_40162__$1 = state_40162;
var statearr_40167_40212 = state_40162__$1;
(statearr_40167_40212[(2)] = inst_40150);

(statearr_40167_40212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (4))){
var inst_40093 = (state_40162[(8)]);
var inst_40093__$1 = (state_40162[(2)]);
var inst_40094 = (inst_40093__$1 == null);
var state_40162__$1 = (function (){var statearr_40168 = state_40162;
(statearr_40168[(8)] = inst_40093__$1);

return statearr_40168;
})();
if(cljs.core.truth_(inst_40094)){
var statearr_40169_40213 = state_40162__$1;
(statearr_40169_40213[(1)] = (5));

} else {
var statearr_40170_40214 = state_40162__$1;
(statearr_40170_40214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (15))){
var inst_40135 = (state_40162[(2)]);
var state_40162__$1 = state_40162;
var statearr_40171_40215 = state_40162__$1;
(statearr_40171_40215[(2)] = inst_40135);

(statearr_40171_40215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (21))){
var inst_40155 = (state_40162[(2)]);
var state_40162__$1 = (function (){var statearr_40172 = state_40162;
(statearr_40172[(9)] = inst_40155);

return statearr_40172;
})();
var statearr_40173_40216 = state_40162__$1;
(statearr_40173_40216[(2)] = null);

(statearr_40173_40216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (13))){
var inst_40117 = (state_40162[(10)]);
var inst_40119 = cljs.core.chunked_seq_QMARK_.call(null,inst_40117);
var state_40162__$1 = state_40162;
if(inst_40119){
var statearr_40174_40217 = state_40162__$1;
(statearr_40174_40217[(1)] = (16));

} else {
var statearr_40175_40218 = state_40162__$1;
(statearr_40175_40218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (22))){
var inst_40147 = (state_40162[(2)]);
var state_40162__$1 = state_40162;
if(cljs.core.truth_(inst_40147)){
var statearr_40176_40219 = state_40162__$1;
(statearr_40176_40219[(1)] = (23));

} else {
var statearr_40177_40220 = state_40162__$1;
(statearr_40177_40220[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (6))){
var inst_40093 = (state_40162[(8)]);
var inst_40143 = (state_40162[(11)]);
var inst_40141 = (state_40162[(7)]);
var inst_40141__$1 = topic_fn.call(null,inst_40093);
var inst_40142 = cljs.core.deref.call(null,mults);
var inst_40143__$1 = cljs.core.get.call(null,inst_40142,inst_40141__$1);
var state_40162__$1 = (function (){var statearr_40178 = state_40162;
(statearr_40178[(11)] = inst_40143__$1);

(statearr_40178[(7)] = inst_40141__$1);

return statearr_40178;
})();
if(cljs.core.truth_(inst_40143__$1)){
var statearr_40179_40221 = state_40162__$1;
(statearr_40179_40221[(1)] = (19));

} else {
var statearr_40180_40222 = state_40162__$1;
(statearr_40180_40222[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (25))){
var inst_40152 = (state_40162[(2)]);
var state_40162__$1 = state_40162;
var statearr_40181_40223 = state_40162__$1;
(statearr_40181_40223[(2)] = inst_40152);

(statearr_40181_40223[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (17))){
var inst_40117 = (state_40162[(10)]);
var inst_40126 = cljs.core.first.call(null,inst_40117);
var inst_40127 = cljs.core.async.muxch_STAR_.call(null,inst_40126);
var inst_40128 = cljs.core.async.close_BANG_.call(null,inst_40127);
var inst_40129 = cljs.core.next.call(null,inst_40117);
var inst_40103 = inst_40129;
var inst_40104 = null;
var inst_40105 = (0);
var inst_40106 = (0);
var state_40162__$1 = (function (){var statearr_40182 = state_40162;
(statearr_40182[(12)] = inst_40104);

(statearr_40182[(13)] = inst_40106);

(statearr_40182[(14)] = inst_40128);

(statearr_40182[(15)] = inst_40105);

(statearr_40182[(16)] = inst_40103);

return statearr_40182;
})();
var statearr_40183_40224 = state_40162__$1;
(statearr_40183_40224[(2)] = null);

(statearr_40183_40224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (3))){
var inst_40160 = (state_40162[(2)]);
var state_40162__$1 = state_40162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40162__$1,inst_40160);
} else {
if((state_val_40163 === (12))){
var inst_40137 = (state_40162[(2)]);
var state_40162__$1 = state_40162;
var statearr_40184_40225 = state_40162__$1;
(statearr_40184_40225[(2)] = inst_40137);

(statearr_40184_40225[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (2))){
var state_40162__$1 = state_40162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40162__$1,(4),ch);
} else {
if((state_val_40163 === (23))){
var state_40162__$1 = state_40162;
var statearr_40185_40226 = state_40162__$1;
(statearr_40185_40226[(2)] = null);

(statearr_40185_40226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (19))){
var inst_40093 = (state_40162[(8)]);
var inst_40143 = (state_40162[(11)]);
var inst_40145 = cljs.core.async.muxch_STAR_.call(null,inst_40143);
var state_40162__$1 = state_40162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40162__$1,(22),inst_40145,inst_40093);
} else {
if((state_val_40163 === (11))){
var inst_40117 = (state_40162[(10)]);
var inst_40103 = (state_40162[(16)]);
var inst_40117__$1 = cljs.core.seq.call(null,inst_40103);
var state_40162__$1 = (function (){var statearr_40186 = state_40162;
(statearr_40186[(10)] = inst_40117__$1);

return statearr_40186;
})();
if(inst_40117__$1){
var statearr_40187_40227 = state_40162__$1;
(statearr_40187_40227[(1)] = (13));

} else {
var statearr_40188_40228 = state_40162__$1;
(statearr_40188_40228[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (9))){
var inst_40139 = (state_40162[(2)]);
var state_40162__$1 = state_40162;
var statearr_40189_40229 = state_40162__$1;
(statearr_40189_40229[(2)] = inst_40139);

(statearr_40189_40229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (5))){
var inst_40100 = cljs.core.deref.call(null,mults);
var inst_40101 = cljs.core.vals.call(null,inst_40100);
var inst_40102 = cljs.core.seq.call(null,inst_40101);
var inst_40103 = inst_40102;
var inst_40104 = null;
var inst_40105 = (0);
var inst_40106 = (0);
var state_40162__$1 = (function (){var statearr_40190 = state_40162;
(statearr_40190[(12)] = inst_40104);

(statearr_40190[(13)] = inst_40106);

(statearr_40190[(15)] = inst_40105);

(statearr_40190[(16)] = inst_40103);

return statearr_40190;
})();
var statearr_40191_40230 = state_40162__$1;
(statearr_40191_40230[(2)] = null);

(statearr_40191_40230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (14))){
var state_40162__$1 = state_40162;
var statearr_40195_40231 = state_40162__$1;
(statearr_40195_40231[(2)] = null);

(statearr_40195_40231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (16))){
var inst_40117 = (state_40162[(10)]);
var inst_40121 = cljs.core.chunk_first.call(null,inst_40117);
var inst_40122 = cljs.core.chunk_rest.call(null,inst_40117);
var inst_40123 = cljs.core.count.call(null,inst_40121);
var inst_40103 = inst_40122;
var inst_40104 = inst_40121;
var inst_40105 = inst_40123;
var inst_40106 = (0);
var state_40162__$1 = (function (){var statearr_40196 = state_40162;
(statearr_40196[(12)] = inst_40104);

(statearr_40196[(13)] = inst_40106);

(statearr_40196[(15)] = inst_40105);

(statearr_40196[(16)] = inst_40103);

return statearr_40196;
})();
var statearr_40197_40232 = state_40162__$1;
(statearr_40197_40232[(2)] = null);

(statearr_40197_40232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (10))){
var inst_40104 = (state_40162[(12)]);
var inst_40106 = (state_40162[(13)]);
var inst_40105 = (state_40162[(15)]);
var inst_40103 = (state_40162[(16)]);
var inst_40111 = cljs.core._nth.call(null,inst_40104,inst_40106);
var inst_40112 = cljs.core.async.muxch_STAR_.call(null,inst_40111);
var inst_40113 = cljs.core.async.close_BANG_.call(null,inst_40112);
var inst_40114 = (inst_40106 + (1));
var tmp40192 = inst_40104;
var tmp40193 = inst_40105;
var tmp40194 = inst_40103;
var inst_40103__$1 = tmp40194;
var inst_40104__$1 = tmp40192;
var inst_40105__$1 = tmp40193;
var inst_40106__$1 = inst_40114;
var state_40162__$1 = (function (){var statearr_40198 = state_40162;
(statearr_40198[(17)] = inst_40113);

(statearr_40198[(12)] = inst_40104__$1);

(statearr_40198[(13)] = inst_40106__$1);

(statearr_40198[(15)] = inst_40105__$1);

(statearr_40198[(16)] = inst_40103__$1);

return statearr_40198;
})();
var statearr_40199_40233 = state_40162__$1;
(statearr_40199_40233[(2)] = null);

(statearr_40199_40233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (18))){
var inst_40132 = (state_40162[(2)]);
var state_40162__$1 = state_40162;
var statearr_40200_40234 = state_40162__$1;
(statearr_40200_40234[(2)] = inst_40132);

(statearr_40200_40234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (8))){
var inst_40106 = (state_40162[(13)]);
var inst_40105 = (state_40162[(15)]);
var inst_40108 = (inst_40106 < inst_40105);
var inst_40109 = inst_40108;
var state_40162__$1 = state_40162;
if(cljs.core.truth_(inst_40109)){
var statearr_40201_40235 = state_40162__$1;
(statearr_40201_40235[(1)] = (10));

} else {
var statearr_40202_40236 = state_40162__$1;
(statearr_40202_40236[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23750__auto___40208,mults,ensure_mult,p))
;
return ((function (switch__23660__auto__,c__23750__auto___40208,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_40203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40203[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_40203[(1)] = (1));

return statearr_40203;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_40162){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_40162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e40204){if((e40204 instanceof Object)){
var ex__23664__auto__ = e40204;
var statearr_40205_40237 = state_40162;
(statearr_40205_40237[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40238 = state_40162;
state_40162 = G__40238;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_40162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_40162);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23750__auto___40208,mults,ensure_mult,p))
})();
var state__23752__auto__ = (function (){var statearr_40206 = f__23751__auto__.call(null);
(statearr_40206[(6)] = c__23750__auto___40208);

return statearr_40206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(c__23750__auto___40208,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__40240 = arguments.length;
switch (G__40240) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__40243 = arguments.length;
switch (G__40243) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__40246 = arguments.length;
switch (G__40246) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23750__auto___40313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23750__auto___40313,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (c__23750__auto___40313,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40285){
var state_val_40286 = (state_40285[(1)]);
if((state_val_40286 === (7))){
var state_40285__$1 = state_40285;
var statearr_40287_40314 = state_40285__$1;
(statearr_40287_40314[(2)] = null);

(statearr_40287_40314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40286 === (1))){
var state_40285__$1 = state_40285;
var statearr_40288_40315 = state_40285__$1;
(statearr_40288_40315[(2)] = null);

(statearr_40288_40315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40286 === (4))){
var inst_40249 = (state_40285[(7)]);
var inst_40251 = (inst_40249 < cnt);
var state_40285__$1 = state_40285;
if(cljs.core.truth_(inst_40251)){
var statearr_40289_40316 = state_40285__$1;
(statearr_40289_40316[(1)] = (6));

} else {
var statearr_40290_40317 = state_40285__$1;
(statearr_40290_40317[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40286 === (15))){
var inst_40281 = (state_40285[(2)]);
var state_40285__$1 = state_40285;
var statearr_40291_40318 = state_40285__$1;
(statearr_40291_40318[(2)] = inst_40281);

(statearr_40291_40318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40286 === (13))){
var inst_40274 = cljs.core.async.close_BANG_.call(null,out);
var state_40285__$1 = state_40285;
var statearr_40292_40319 = state_40285__$1;
(statearr_40292_40319[(2)] = inst_40274);

(statearr_40292_40319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40286 === (6))){
var state_40285__$1 = state_40285;
var statearr_40293_40320 = state_40285__$1;
(statearr_40293_40320[(2)] = null);

(statearr_40293_40320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40286 === (3))){
var inst_40283 = (state_40285[(2)]);
var state_40285__$1 = state_40285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40285__$1,inst_40283);
} else {
if((state_val_40286 === (12))){
var inst_40271 = (state_40285[(8)]);
var inst_40271__$1 = (state_40285[(2)]);
var inst_40272 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40271__$1);
var state_40285__$1 = (function (){var statearr_40294 = state_40285;
(statearr_40294[(8)] = inst_40271__$1);

return statearr_40294;
})();
if(cljs.core.truth_(inst_40272)){
var statearr_40295_40321 = state_40285__$1;
(statearr_40295_40321[(1)] = (13));

} else {
var statearr_40296_40322 = state_40285__$1;
(statearr_40296_40322[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40286 === (2))){
var inst_40248 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40249 = (0);
var state_40285__$1 = (function (){var statearr_40297 = state_40285;
(statearr_40297[(9)] = inst_40248);

(statearr_40297[(7)] = inst_40249);

return statearr_40297;
})();
var statearr_40298_40323 = state_40285__$1;
(statearr_40298_40323[(2)] = null);

(statearr_40298_40323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40286 === (11))){
var inst_40249 = (state_40285[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40285,(10),Object,null,(9));
var inst_40258 = chs__$1.call(null,inst_40249);
var inst_40259 = done.call(null,inst_40249);
var inst_40260 = cljs.core.async.take_BANG_.call(null,inst_40258,inst_40259);
var state_40285__$1 = state_40285;
var statearr_40299_40324 = state_40285__$1;
(statearr_40299_40324[(2)] = inst_40260);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40285__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40286 === (9))){
var inst_40249 = (state_40285[(7)]);
var inst_40262 = (state_40285[(2)]);
var inst_40263 = (inst_40249 + (1));
var inst_40249__$1 = inst_40263;
var state_40285__$1 = (function (){var statearr_40300 = state_40285;
(statearr_40300[(7)] = inst_40249__$1);

(statearr_40300[(10)] = inst_40262);

return statearr_40300;
})();
var statearr_40301_40325 = state_40285__$1;
(statearr_40301_40325[(2)] = null);

(statearr_40301_40325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40286 === (5))){
var inst_40269 = (state_40285[(2)]);
var state_40285__$1 = (function (){var statearr_40302 = state_40285;
(statearr_40302[(11)] = inst_40269);

return statearr_40302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40285__$1,(12),dchan);
} else {
if((state_val_40286 === (14))){
var inst_40271 = (state_40285[(8)]);
var inst_40276 = cljs.core.apply.call(null,f,inst_40271);
var state_40285__$1 = state_40285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40285__$1,(16),out,inst_40276);
} else {
if((state_val_40286 === (16))){
var inst_40278 = (state_40285[(2)]);
var state_40285__$1 = (function (){var statearr_40303 = state_40285;
(statearr_40303[(12)] = inst_40278);

return statearr_40303;
})();
var statearr_40304_40326 = state_40285__$1;
(statearr_40304_40326[(2)] = null);

(statearr_40304_40326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40286 === (10))){
var inst_40253 = (state_40285[(2)]);
var inst_40254 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40285__$1 = (function (){var statearr_40305 = state_40285;
(statearr_40305[(13)] = inst_40253);

return statearr_40305;
})();
var statearr_40306_40327 = state_40285__$1;
(statearr_40306_40327[(2)] = inst_40254);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40285__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40286 === (8))){
var inst_40267 = (state_40285[(2)]);
var state_40285__$1 = state_40285;
var statearr_40307_40328 = state_40285__$1;
(statearr_40307_40328[(2)] = inst_40267);

(statearr_40307_40328[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23750__auto___40313,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23660__auto__,c__23750__auto___40313,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_40308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40308[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_40308[(1)] = (1));

return statearr_40308;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_40285){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_40285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e40309){if((e40309 instanceof Object)){
var ex__23664__auto__ = e40309;
var statearr_40310_40329 = state_40285;
(statearr_40310_40329[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40330 = state_40285;
state_40285 = G__40330;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_40285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_40285);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23750__auto___40313,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23752__auto__ = (function (){var statearr_40311 = f__23751__auto__.call(null);
(statearr_40311[(6)] = c__23750__auto___40313);

return statearr_40311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(c__23750__auto___40313,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__40333 = arguments.length;
switch (G__40333) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23750__auto___40387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23750__auto___40387,out){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (c__23750__auto___40387,out){
return (function (state_40365){
var state_val_40366 = (state_40365[(1)]);
if((state_val_40366 === (7))){
var inst_40344 = (state_40365[(7)]);
var inst_40345 = (state_40365[(8)]);
var inst_40344__$1 = (state_40365[(2)]);
var inst_40345__$1 = cljs.core.nth.call(null,inst_40344__$1,(0),null);
var inst_40346 = cljs.core.nth.call(null,inst_40344__$1,(1),null);
var inst_40347 = (inst_40345__$1 == null);
var state_40365__$1 = (function (){var statearr_40367 = state_40365;
(statearr_40367[(9)] = inst_40346);

(statearr_40367[(7)] = inst_40344__$1);

(statearr_40367[(8)] = inst_40345__$1);

return statearr_40367;
})();
if(cljs.core.truth_(inst_40347)){
var statearr_40368_40388 = state_40365__$1;
(statearr_40368_40388[(1)] = (8));

} else {
var statearr_40369_40389 = state_40365__$1;
(statearr_40369_40389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40366 === (1))){
var inst_40334 = cljs.core.vec.call(null,chs);
var inst_40335 = inst_40334;
var state_40365__$1 = (function (){var statearr_40370 = state_40365;
(statearr_40370[(10)] = inst_40335);

return statearr_40370;
})();
var statearr_40371_40390 = state_40365__$1;
(statearr_40371_40390[(2)] = null);

(statearr_40371_40390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40366 === (4))){
var inst_40335 = (state_40365[(10)]);
var state_40365__$1 = state_40365;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40365__$1,(7),inst_40335);
} else {
if((state_val_40366 === (6))){
var inst_40361 = (state_40365[(2)]);
var state_40365__$1 = state_40365;
var statearr_40372_40391 = state_40365__$1;
(statearr_40372_40391[(2)] = inst_40361);

(statearr_40372_40391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40366 === (3))){
var inst_40363 = (state_40365[(2)]);
var state_40365__$1 = state_40365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40365__$1,inst_40363);
} else {
if((state_val_40366 === (2))){
var inst_40335 = (state_40365[(10)]);
var inst_40337 = cljs.core.count.call(null,inst_40335);
var inst_40338 = (inst_40337 > (0));
var state_40365__$1 = state_40365;
if(cljs.core.truth_(inst_40338)){
var statearr_40374_40392 = state_40365__$1;
(statearr_40374_40392[(1)] = (4));

} else {
var statearr_40375_40393 = state_40365__$1;
(statearr_40375_40393[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40366 === (11))){
var inst_40335 = (state_40365[(10)]);
var inst_40354 = (state_40365[(2)]);
var tmp40373 = inst_40335;
var inst_40335__$1 = tmp40373;
var state_40365__$1 = (function (){var statearr_40376 = state_40365;
(statearr_40376[(11)] = inst_40354);

(statearr_40376[(10)] = inst_40335__$1);

return statearr_40376;
})();
var statearr_40377_40394 = state_40365__$1;
(statearr_40377_40394[(2)] = null);

(statearr_40377_40394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40366 === (9))){
var inst_40345 = (state_40365[(8)]);
var state_40365__$1 = state_40365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40365__$1,(11),out,inst_40345);
} else {
if((state_val_40366 === (5))){
var inst_40359 = cljs.core.async.close_BANG_.call(null,out);
var state_40365__$1 = state_40365;
var statearr_40378_40395 = state_40365__$1;
(statearr_40378_40395[(2)] = inst_40359);

(statearr_40378_40395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40366 === (10))){
var inst_40357 = (state_40365[(2)]);
var state_40365__$1 = state_40365;
var statearr_40379_40396 = state_40365__$1;
(statearr_40379_40396[(2)] = inst_40357);

(statearr_40379_40396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40366 === (8))){
var inst_40346 = (state_40365[(9)]);
var inst_40335 = (state_40365[(10)]);
var inst_40344 = (state_40365[(7)]);
var inst_40345 = (state_40365[(8)]);
var inst_40349 = (function (){var cs = inst_40335;
var vec__40340 = inst_40344;
var v = inst_40345;
var c = inst_40346;
return ((function (cs,vec__40340,v,c,inst_40346,inst_40335,inst_40344,inst_40345,state_val_40366,c__23750__auto___40387,out){
return (function (p1__40331_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40331_SHARP_);
});
;})(cs,vec__40340,v,c,inst_40346,inst_40335,inst_40344,inst_40345,state_val_40366,c__23750__auto___40387,out))
})();
var inst_40350 = cljs.core.filterv.call(null,inst_40349,inst_40335);
var inst_40335__$1 = inst_40350;
var state_40365__$1 = (function (){var statearr_40380 = state_40365;
(statearr_40380[(10)] = inst_40335__$1);

return statearr_40380;
})();
var statearr_40381_40397 = state_40365__$1;
(statearr_40381_40397[(2)] = null);

(statearr_40381_40397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23750__auto___40387,out))
;
return ((function (switch__23660__auto__,c__23750__auto___40387,out){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_40382 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40382[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_40382[(1)] = (1));

return statearr_40382;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_40365){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_40365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e40383){if((e40383 instanceof Object)){
var ex__23664__auto__ = e40383;
var statearr_40384_40398 = state_40365;
(statearr_40384_40398[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40399 = state_40365;
state_40365 = G__40399;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_40365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_40365);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23750__auto___40387,out))
})();
var state__23752__auto__ = (function (){var statearr_40385 = f__23751__auto__.call(null);
(statearr_40385[(6)] = c__23750__auto___40387);

return statearr_40385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(c__23750__auto___40387,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__40401 = arguments.length;
switch (G__40401) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23750__auto___40446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23750__auto___40446,out){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (c__23750__auto___40446,out){
return (function (state_40425){
var state_val_40426 = (state_40425[(1)]);
if((state_val_40426 === (7))){
var inst_40407 = (state_40425[(7)]);
var inst_40407__$1 = (state_40425[(2)]);
var inst_40408 = (inst_40407__$1 == null);
var inst_40409 = cljs.core.not.call(null,inst_40408);
var state_40425__$1 = (function (){var statearr_40427 = state_40425;
(statearr_40427[(7)] = inst_40407__$1);

return statearr_40427;
})();
if(inst_40409){
var statearr_40428_40447 = state_40425__$1;
(statearr_40428_40447[(1)] = (8));

} else {
var statearr_40429_40448 = state_40425__$1;
(statearr_40429_40448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40426 === (1))){
var inst_40402 = (0);
var state_40425__$1 = (function (){var statearr_40430 = state_40425;
(statearr_40430[(8)] = inst_40402);

return statearr_40430;
})();
var statearr_40431_40449 = state_40425__$1;
(statearr_40431_40449[(2)] = null);

(statearr_40431_40449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40426 === (4))){
var state_40425__$1 = state_40425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40425__$1,(7),ch);
} else {
if((state_val_40426 === (6))){
var inst_40420 = (state_40425[(2)]);
var state_40425__$1 = state_40425;
var statearr_40432_40450 = state_40425__$1;
(statearr_40432_40450[(2)] = inst_40420);

(statearr_40432_40450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40426 === (3))){
var inst_40422 = (state_40425[(2)]);
var inst_40423 = cljs.core.async.close_BANG_.call(null,out);
var state_40425__$1 = (function (){var statearr_40433 = state_40425;
(statearr_40433[(9)] = inst_40422);

return statearr_40433;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40425__$1,inst_40423);
} else {
if((state_val_40426 === (2))){
var inst_40402 = (state_40425[(8)]);
var inst_40404 = (inst_40402 < n);
var state_40425__$1 = state_40425;
if(cljs.core.truth_(inst_40404)){
var statearr_40434_40451 = state_40425__$1;
(statearr_40434_40451[(1)] = (4));

} else {
var statearr_40435_40452 = state_40425__$1;
(statearr_40435_40452[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40426 === (11))){
var inst_40402 = (state_40425[(8)]);
var inst_40412 = (state_40425[(2)]);
var inst_40413 = (inst_40402 + (1));
var inst_40402__$1 = inst_40413;
var state_40425__$1 = (function (){var statearr_40436 = state_40425;
(statearr_40436[(8)] = inst_40402__$1);

(statearr_40436[(10)] = inst_40412);

return statearr_40436;
})();
var statearr_40437_40453 = state_40425__$1;
(statearr_40437_40453[(2)] = null);

(statearr_40437_40453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40426 === (9))){
var state_40425__$1 = state_40425;
var statearr_40438_40454 = state_40425__$1;
(statearr_40438_40454[(2)] = null);

(statearr_40438_40454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40426 === (5))){
var state_40425__$1 = state_40425;
var statearr_40439_40455 = state_40425__$1;
(statearr_40439_40455[(2)] = null);

(statearr_40439_40455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40426 === (10))){
var inst_40417 = (state_40425[(2)]);
var state_40425__$1 = state_40425;
var statearr_40440_40456 = state_40425__$1;
(statearr_40440_40456[(2)] = inst_40417);

(statearr_40440_40456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40426 === (8))){
var inst_40407 = (state_40425[(7)]);
var state_40425__$1 = state_40425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40425__$1,(11),out,inst_40407);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23750__auto___40446,out))
;
return ((function (switch__23660__auto__,c__23750__auto___40446,out){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_40441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40441[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_40441[(1)] = (1));

return statearr_40441;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_40425){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_40425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e40442){if((e40442 instanceof Object)){
var ex__23664__auto__ = e40442;
var statearr_40443_40457 = state_40425;
(statearr_40443_40457[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40458 = state_40425;
state_40425 = G__40458;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_40425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_40425);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23750__auto___40446,out))
})();
var state__23752__auto__ = (function (){var statearr_40444 = f__23751__auto__.call(null);
(statearr_40444[(6)] = c__23750__auto___40446);

return statearr_40444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(c__23750__auto___40446,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40460 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40460 = (function (f,ch,meta40461){
this.f = f;
this.ch = ch;
this.meta40461 = meta40461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40462,meta40461__$1){
var self__ = this;
var _40462__$1 = this;
return (new cljs.core.async.t_cljs$core$async40460(self__.f,self__.ch,meta40461__$1));
});

cljs.core.async.t_cljs$core$async40460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40462){
var self__ = this;
var _40462__$1 = this;
return self__.meta40461;
});

cljs.core.async.t_cljs$core$async40460.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40460.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40460.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40460.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40460.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40463 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40463 = (function (f,ch,meta40461,_,fn1,meta40464){
this.f = f;
this.ch = ch;
this.meta40461 = meta40461;
this._ = _;
this.fn1 = fn1;
this.meta40464 = meta40464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40465,meta40464__$1){
var self__ = this;
var _40465__$1 = this;
return (new cljs.core.async.t_cljs$core$async40463(self__.f,self__.ch,self__.meta40461,self__._,self__.fn1,meta40464__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40465){
var self__ = this;
var _40465__$1 = this;
return self__.meta40464;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40463.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40463.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40459_SHARP_){
return f1.call(null,(((p1__40459_SHARP_ == null))?null:self__.f.call(null,p1__40459_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40463.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40461","meta40461",85788360,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40460","cljs.core.async/t_cljs$core$async40460",-1216683804,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40464","meta40464",-24723744,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40463";

cljs.core.async.t_cljs$core$async40463.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40463");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40463.
 */
cljs.core.async.__GT_t_cljs$core$async40463 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40463(f__$1,ch__$1,meta40461__$1,___$2,fn1__$1,meta40464){
return (new cljs.core.async.t_cljs$core$async40463(f__$1,ch__$1,meta40461__$1,___$2,fn1__$1,meta40464));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40463(self__.f,self__.ch,self__.meta40461,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async40460.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40460.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40461","meta40461",85788360,null)], null);
});

cljs.core.async.t_cljs$core$async40460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40460";

cljs.core.async.t_cljs$core$async40460.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40460");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40460.
 */
cljs.core.async.__GT_t_cljs$core$async40460 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40460(f__$1,ch__$1,meta40461){
return (new cljs.core.async.t_cljs$core$async40460(f__$1,ch__$1,meta40461));
});

}

return (new cljs.core.async.t_cljs$core$async40460(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40466 = (function (f,ch,meta40467){
this.f = f;
this.ch = ch;
this.meta40467 = meta40467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40468,meta40467__$1){
var self__ = this;
var _40468__$1 = this;
return (new cljs.core.async.t_cljs$core$async40466(self__.f,self__.ch,meta40467__$1));
});

cljs.core.async.t_cljs$core$async40466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40468){
var self__ = this;
var _40468__$1 = this;
return self__.meta40467;
});

cljs.core.async.t_cljs$core$async40466.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40466.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40466.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40466.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40466.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40466.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40467","meta40467",-1603159117,null)], null);
});

cljs.core.async.t_cljs$core$async40466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40466";

cljs.core.async.t_cljs$core$async40466.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40466");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40466.
 */
cljs.core.async.__GT_t_cljs$core$async40466 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40466(f__$1,ch__$1,meta40467){
return (new cljs.core.async.t_cljs$core$async40466(f__$1,ch__$1,meta40467));
});

}

return (new cljs.core.async.t_cljs$core$async40466(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40469 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40469 = (function (p,ch,meta40470){
this.p = p;
this.ch = ch;
this.meta40470 = meta40470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40471,meta40470__$1){
var self__ = this;
var _40471__$1 = this;
return (new cljs.core.async.t_cljs$core$async40469(self__.p,self__.ch,meta40470__$1));
});

cljs.core.async.t_cljs$core$async40469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40471){
var self__ = this;
var _40471__$1 = this;
return self__.meta40470;
});

cljs.core.async.t_cljs$core$async40469.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40469.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40469.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40469.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40469.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40469.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40469.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40470","meta40470",-1661186333,null)], null);
});

cljs.core.async.t_cljs$core$async40469.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40469";

cljs.core.async.t_cljs$core$async40469.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40469");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40469.
 */
cljs.core.async.__GT_t_cljs$core$async40469 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40469(p__$1,ch__$1,meta40470){
return (new cljs.core.async.t_cljs$core$async40469(p__$1,ch__$1,meta40470));
});

}

return (new cljs.core.async.t_cljs$core$async40469(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__40473 = arguments.length;
switch (G__40473) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23750__auto___40513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23750__auto___40513,out){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (c__23750__auto___40513,out){
return (function (state_40494){
var state_val_40495 = (state_40494[(1)]);
if((state_val_40495 === (7))){
var inst_40490 = (state_40494[(2)]);
var state_40494__$1 = state_40494;
var statearr_40496_40514 = state_40494__$1;
(statearr_40496_40514[(2)] = inst_40490);

(statearr_40496_40514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40495 === (1))){
var state_40494__$1 = state_40494;
var statearr_40497_40515 = state_40494__$1;
(statearr_40497_40515[(2)] = null);

(statearr_40497_40515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40495 === (4))){
var inst_40476 = (state_40494[(7)]);
var inst_40476__$1 = (state_40494[(2)]);
var inst_40477 = (inst_40476__$1 == null);
var state_40494__$1 = (function (){var statearr_40498 = state_40494;
(statearr_40498[(7)] = inst_40476__$1);

return statearr_40498;
})();
if(cljs.core.truth_(inst_40477)){
var statearr_40499_40516 = state_40494__$1;
(statearr_40499_40516[(1)] = (5));

} else {
var statearr_40500_40517 = state_40494__$1;
(statearr_40500_40517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40495 === (6))){
var inst_40476 = (state_40494[(7)]);
var inst_40481 = p.call(null,inst_40476);
var state_40494__$1 = state_40494;
if(cljs.core.truth_(inst_40481)){
var statearr_40501_40518 = state_40494__$1;
(statearr_40501_40518[(1)] = (8));

} else {
var statearr_40502_40519 = state_40494__$1;
(statearr_40502_40519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40495 === (3))){
var inst_40492 = (state_40494[(2)]);
var state_40494__$1 = state_40494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40494__$1,inst_40492);
} else {
if((state_val_40495 === (2))){
var state_40494__$1 = state_40494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40494__$1,(4),ch);
} else {
if((state_val_40495 === (11))){
var inst_40484 = (state_40494[(2)]);
var state_40494__$1 = state_40494;
var statearr_40503_40520 = state_40494__$1;
(statearr_40503_40520[(2)] = inst_40484);

(statearr_40503_40520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40495 === (9))){
var state_40494__$1 = state_40494;
var statearr_40504_40521 = state_40494__$1;
(statearr_40504_40521[(2)] = null);

(statearr_40504_40521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40495 === (5))){
var inst_40479 = cljs.core.async.close_BANG_.call(null,out);
var state_40494__$1 = state_40494;
var statearr_40505_40522 = state_40494__$1;
(statearr_40505_40522[(2)] = inst_40479);

(statearr_40505_40522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40495 === (10))){
var inst_40487 = (state_40494[(2)]);
var state_40494__$1 = (function (){var statearr_40506 = state_40494;
(statearr_40506[(8)] = inst_40487);

return statearr_40506;
})();
var statearr_40507_40523 = state_40494__$1;
(statearr_40507_40523[(2)] = null);

(statearr_40507_40523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40495 === (8))){
var inst_40476 = (state_40494[(7)]);
var state_40494__$1 = state_40494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40494__$1,(11),out,inst_40476);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23750__auto___40513,out))
;
return ((function (switch__23660__auto__,c__23750__auto___40513,out){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_40508 = [null,null,null,null,null,null,null,null,null];
(statearr_40508[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_40508[(1)] = (1));

return statearr_40508;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_40494){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_40494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e40509){if((e40509 instanceof Object)){
var ex__23664__auto__ = e40509;
var statearr_40510_40524 = state_40494;
(statearr_40510_40524[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40525 = state_40494;
state_40494 = G__40525;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_40494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_40494);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23750__auto___40513,out))
})();
var state__23752__auto__ = (function (){var statearr_40511 = f__23751__auto__.call(null);
(statearr_40511[(6)] = c__23750__auto___40513);

return statearr_40511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(c__23750__auto___40513,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40527 = arguments.length;
switch (G__40527) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23750__auto__){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (c__23750__auto__){
return (function (state_40590){
var state_val_40591 = (state_40590[(1)]);
if((state_val_40591 === (7))){
var inst_40586 = (state_40590[(2)]);
var state_40590__$1 = state_40590;
var statearr_40592_40630 = state_40590__$1;
(statearr_40592_40630[(2)] = inst_40586);

(statearr_40592_40630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (20))){
var inst_40556 = (state_40590[(7)]);
var inst_40567 = (state_40590[(2)]);
var inst_40568 = cljs.core.next.call(null,inst_40556);
var inst_40542 = inst_40568;
var inst_40543 = null;
var inst_40544 = (0);
var inst_40545 = (0);
var state_40590__$1 = (function (){var statearr_40593 = state_40590;
(statearr_40593[(8)] = inst_40544);

(statearr_40593[(9)] = inst_40543);

(statearr_40593[(10)] = inst_40545);

(statearr_40593[(11)] = inst_40567);

(statearr_40593[(12)] = inst_40542);

return statearr_40593;
})();
var statearr_40594_40631 = state_40590__$1;
(statearr_40594_40631[(2)] = null);

(statearr_40594_40631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (1))){
var state_40590__$1 = state_40590;
var statearr_40595_40632 = state_40590__$1;
(statearr_40595_40632[(2)] = null);

(statearr_40595_40632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (4))){
var inst_40531 = (state_40590[(13)]);
var inst_40531__$1 = (state_40590[(2)]);
var inst_40532 = (inst_40531__$1 == null);
var state_40590__$1 = (function (){var statearr_40596 = state_40590;
(statearr_40596[(13)] = inst_40531__$1);

return statearr_40596;
})();
if(cljs.core.truth_(inst_40532)){
var statearr_40597_40633 = state_40590__$1;
(statearr_40597_40633[(1)] = (5));

} else {
var statearr_40598_40634 = state_40590__$1;
(statearr_40598_40634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (15))){
var state_40590__$1 = state_40590;
var statearr_40602_40635 = state_40590__$1;
(statearr_40602_40635[(2)] = null);

(statearr_40602_40635[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (21))){
var state_40590__$1 = state_40590;
var statearr_40603_40636 = state_40590__$1;
(statearr_40603_40636[(2)] = null);

(statearr_40603_40636[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (13))){
var inst_40544 = (state_40590[(8)]);
var inst_40543 = (state_40590[(9)]);
var inst_40545 = (state_40590[(10)]);
var inst_40542 = (state_40590[(12)]);
var inst_40552 = (state_40590[(2)]);
var inst_40553 = (inst_40545 + (1));
var tmp40599 = inst_40544;
var tmp40600 = inst_40543;
var tmp40601 = inst_40542;
var inst_40542__$1 = tmp40601;
var inst_40543__$1 = tmp40600;
var inst_40544__$1 = tmp40599;
var inst_40545__$1 = inst_40553;
var state_40590__$1 = (function (){var statearr_40604 = state_40590;
(statearr_40604[(8)] = inst_40544__$1);

(statearr_40604[(9)] = inst_40543__$1);

(statearr_40604[(10)] = inst_40545__$1);

(statearr_40604[(12)] = inst_40542__$1);

(statearr_40604[(14)] = inst_40552);

return statearr_40604;
})();
var statearr_40605_40637 = state_40590__$1;
(statearr_40605_40637[(2)] = null);

(statearr_40605_40637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (22))){
var state_40590__$1 = state_40590;
var statearr_40606_40638 = state_40590__$1;
(statearr_40606_40638[(2)] = null);

(statearr_40606_40638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (6))){
var inst_40531 = (state_40590[(13)]);
var inst_40540 = f.call(null,inst_40531);
var inst_40541 = cljs.core.seq.call(null,inst_40540);
var inst_40542 = inst_40541;
var inst_40543 = null;
var inst_40544 = (0);
var inst_40545 = (0);
var state_40590__$1 = (function (){var statearr_40607 = state_40590;
(statearr_40607[(8)] = inst_40544);

(statearr_40607[(9)] = inst_40543);

(statearr_40607[(10)] = inst_40545);

(statearr_40607[(12)] = inst_40542);

return statearr_40607;
})();
var statearr_40608_40639 = state_40590__$1;
(statearr_40608_40639[(2)] = null);

(statearr_40608_40639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (17))){
var inst_40556 = (state_40590[(7)]);
var inst_40560 = cljs.core.chunk_first.call(null,inst_40556);
var inst_40561 = cljs.core.chunk_rest.call(null,inst_40556);
var inst_40562 = cljs.core.count.call(null,inst_40560);
var inst_40542 = inst_40561;
var inst_40543 = inst_40560;
var inst_40544 = inst_40562;
var inst_40545 = (0);
var state_40590__$1 = (function (){var statearr_40609 = state_40590;
(statearr_40609[(8)] = inst_40544);

(statearr_40609[(9)] = inst_40543);

(statearr_40609[(10)] = inst_40545);

(statearr_40609[(12)] = inst_40542);

return statearr_40609;
})();
var statearr_40610_40640 = state_40590__$1;
(statearr_40610_40640[(2)] = null);

(statearr_40610_40640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (3))){
var inst_40588 = (state_40590[(2)]);
var state_40590__$1 = state_40590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40590__$1,inst_40588);
} else {
if((state_val_40591 === (12))){
var inst_40576 = (state_40590[(2)]);
var state_40590__$1 = state_40590;
var statearr_40611_40641 = state_40590__$1;
(statearr_40611_40641[(2)] = inst_40576);

(statearr_40611_40641[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (2))){
var state_40590__$1 = state_40590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40590__$1,(4),in$);
} else {
if((state_val_40591 === (23))){
var inst_40584 = (state_40590[(2)]);
var state_40590__$1 = state_40590;
var statearr_40612_40642 = state_40590__$1;
(statearr_40612_40642[(2)] = inst_40584);

(statearr_40612_40642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (19))){
var inst_40571 = (state_40590[(2)]);
var state_40590__$1 = state_40590;
var statearr_40613_40643 = state_40590__$1;
(statearr_40613_40643[(2)] = inst_40571);

(statearr_40613_40643[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (11))){
var inst_40556 = (state_40590[(7)]);
var inst_40542 = (state_40590[(12)]);
var inst_40556__$1 = cljs.core.seq.call(null,inst_40542);
var state_40590__$1 = (function (){var statearr_40614 = state_40590;
(statearr_40614[(7)] = inst_40556__$1);

return statearr_40614;
})();
if(inst_40556__$1){
var statearr_40615_40644 = state_40590__$1;
(statearr_40615_40644[(1)] = (14));

} else {
var statearr_40616_40645 = state_40590__$1;
(statearr_40616_40645[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (9))){
var inst_40578 = (state_40590[(2)]);
var inst_40579 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40590__$1 = (function (){var statearr_40617 = state_40590;
(statearr_40617[(15)] = inst_40578);

return statearr_40617;
})();
if(cljs.core.truth_(inst_40579)){
var statearr_40618_40646 = state_40590__$1;
(statearr_40618_40646[(1)] = (21));

} else {
var statearr_40619_40647 = state_40590__$1;
(statearr_40619_40647[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (5))){
var inst_40534 = cljs.core.async.close_BANG_.call(null,out);
var state_40590__$1 = state_40590;
var statearr_40620_40648 = state_40590__$1;
(statearr_40620_40648[(2)] = inst_40534);

(statearr_40620_40648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (14))){
var inst_40556 = (state_40590[(7)]);
var inst_40558 = cljs.core.chunked_seq_QMARK_.call(null,inst_40556);
var state_40590__$1 = state_40590;
if(inst_40558){
var statearr_40621_40649 = state_40590__$1;
(statearr_40621_40649[(1)] = (17));

} else {
var statearr_40622_40650 = state_40590__$1;
(statearr_40622_40650[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (16))){
var inst_40574 = (state_40590[(2)]);
var state_40590__$1 = state_40590;
var statearr_40623_40651 = state_40590__$1;
(statearr_40623_40651[(2)] = inst_40574);

(statearr_40623_40651[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (10))){
var inst_40543 = (state_40590[(9)]);
var inst_40545 = (state_40590[(10)]);
var inst_40550 = cljs.core._nth.call(null,inst_40543,inst_40545);
var state_40590__$1 = state_40590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40590__$1,(13),out,inst_40550);
} else {
if((state_val_40591 === (18))){
var inst_40556 = (state_40590[(7)]);
var inst_40565 = cljs.core.first.call(null,inst_40556);
var state_40590__$1 = state_40590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40590__$1,(20),out,inst_40565);
} else {
if((state_val_40591 === (8))){
var inst_40544 = (state_40590[(8)]);
var inst_40545 = (state_40590[(10)]);
var inst_40547 = (inst_40545 < inst_40544);
var inst_40548 = inst_40547;
var state_40590__$1 = state_40590;
if(cljs.core.truth_(inst_40548)){
var statearr_40624_40652 = state_40590__$1;
(statearr_40624_40652[(1)] = (10));

} else {
var statearr_40625_40653 = state_40590__$1;
(statearr_40625_40653[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23750__auto__))
;
return ((function (switch__23660__auto__,c__23750__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23661__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23661__auto____0 = (function (){
var statearr_40626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40626[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23661__auto__);

(statearr_40626[(1)] = (1));

return statearr_40626;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23661__auto____1 = (function (state_40590){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_40590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e40627){if((e40627 instanceof Object)){
var ex__23664__auto__ = e40627;
var statearr_40628_40654 = state_40590;
(statearr_40628_40654[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40655 = state_40590;
state_40590 = G__40655;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23661__auto__ = function(state_40590){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23661__auto____1.call(this,state_40590);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23661__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23661__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23750__auto__))
})();
var state__23752__auto__ = (function (){var statearr_40629 = f__23751__auto__.call(null);
(statearr_40629[(6)] = c__23750__auto__);

return statearr_40629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(c__23750__auto__))
);

return c__23750__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40657 = arguments.length;
switch (G__40657) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__40660 = arguments.length;
switch (G__40660) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__40663 = arguments.length;
switch (G__40663) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23750__auto___40710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23750__auto___40710,out){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (c__23750__auto___40710,out){
return (function (state_40687){
var state_val_40688 = (state_40687[(1)]);
if((state_val_40688 === (7))){
var inst_40682 = (state_40687[(2)]);
var state_40687__$1 = state_40687;
var statearr_40689_40711 = state_40687__$1;
(statearr_40689_40711[(2)] = inst_40682);

(statearr_40689_40711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40688 === (1))){
var inst_40664 = null;
var state_40687__$1 = (function (){var statearr_40690 = state_40687;
(statearr_40690[(7)] = inst_40664);

return statearr_40690;
})();
var statearr_40691_40712 = state_40687__$1;
(statearr_40691_40712[(2)] = null);

(statearr_40691_40712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40688 === (4))){
var inst_40667 = (state_40687[(8)]);
var inst_40667__$1 = (state_40687[(2)]);
var inst_40668 = (inst_40667__$1 == null);
var inst_40669 = cljs.core.not.call(null,inst_40668);
var state_40687__$1 = (function (){var statearr_40692 = state_40687;
(statearr_40692[(8)] = inst_40667__$1);

return statearr_40692;
})();
if(inst_40669){
var statearr_40693_40713 = state_40687__$1;
(statearr_40693_40713[(1)] = (5));

} else {
var statearr_40694_40714 = state_40687__$1;
(statearr_40694_40714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40688 === (6))){
var state_40687__$1 = state_40687;
var statearr_40695_40715 = state_40687__$1;
(statearr_40695_40715[(2)] = null);

(statearr_40695_40715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40688 === (3))){
var inst_40684 = (state_40687[(2)]);
var inst_40685 = cljs.core.async.close_BANG_.call(null,out);
var state_40687__$1 = (function (){var statearr_40696 = state_40687;
(statearr_40696[(9)] = inst_40684);

return statearr_40696;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40687__$1,inst_40685);
} else {
if((state_val_40688 === (2))){
var state_40687__$1 = state_40687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40687__$1,(4),ch);
} else {
if((state_val_40688 === (11))){
var inst_40667 = (state_40687[(8)]);
var inst_40676 = (state_40687[(2)]);
var inst_40664 = inst_40667;
var state_40687__$1 = (function (){var statearr_40697 = state_40687;
(statearr_40697[(10)] = inst_40676);

(statearr_40697[(7)] = inst_40664);

return statearr_40697;
})();
var statearr_40698_40716 = state_40687__$1;
(statearr_40698_40716[(2)] = null);

(statearr_40698_40716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40688 === (9))){
var inst_40667 = (state_40687[(8)]);
var state_40687__$1 = state_40687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40687__$1,(11),out,inst_40667);
} else {
if((state_val_40688 === (5))){
var inst_40664 = (state_40687[(7)]);
var inst_40667 = (state_40687[(8)]);
var inst_40671 = cljs.core._EQ_.call(null,inst_40667,inst_40664);
var state_40687__$1 = state_40687;
if(inst_40671){
var statearr_40700_40717 = state_40687__$1;
(statearr_40700_40717[(1)] = (8));

} else {
var statearr_40701_40718 = state_40687__$1;
(statearr_40701_40718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40688 === (10))){
var inst_40679 = (state_40687[(2)]);
var state_40687__$1 = state_40687;
var statearr_40702_40719 = state_40687__$1;
(statearr_40702_40719[(2)] = inst_40679);

(statearr_40702_40719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40688 === (8))){
var inst_40664 = (state_40687[(7)]);
var tmp40699 = inst_40664;
var inst_40664__$1 = tmp40699;
var state_40687__$1 = (function (){var statearr_40703 = state_40687;
(statearr_40703[(7)] = inst_40664__$1);

return statearr_40703;
})();
var statearr_40704_40720 = state_40687__$1;
(statearr_40704_40720[(2)] = null);

(statearr_40704_40720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23750__auto___40710,out))
;
return ((function (switch__23660__auto__,c__23750__auto___40710,out){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_40705 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40705[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_40705[(1)] = (1));

return statearr_40705;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_40687){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_40687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e40706){if((e40706 instanceof Object)){
var ex__23664__auto__ = e40706;
var statearr_40707_40721 = state_40687;
(statearr_40707_40721[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40722 = state_40687;
state_40687 = G__40722;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_40687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_40687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23750__auto___40710,out))
})();
var state__23752__auto__ = (function (){var statearr_40708 = f__23751__auto__.call(null);
(statearr_40708[(6)] = c__23750__auto___40710);

return statearr_40708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(c__23750__auto___40710,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40724 = arguments.length;
switch (G__40724) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23750__auto___40790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23750__auto___40790,out){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (c__23750__auto___40790,out){
return (function (state_40762){
var state_val_40763 = (state_40762[(1)]);
if((state_val_40763 === (7))){
var inst_40758 = (state_40762[(2)]);
var state_40762__$1 = state_40762;
var statearr_40764_40791 = state_40762__$1;
(statearr_40764_40791[(2)] = inst_40758);

(statearr_40764_40791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40763 === (1))){
var inst_40725 = (new Array(n));
var inst_40726 = inst_40725;
var inst_40727 = (0);
var state_40762__$1 = (function (){var statearr_40765 = state_40762;
(statearr_40765[(7)] = inst_40726);

(statearr_40765[(8)] = inst_40727);

return statearr_40765;
})();
var statearr_40766_40792 = state_40762__$1;
(statearr_40766_40792[(2)] = null);

(statearr_40766_40792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40763 === (4))){
var inst_40730 = (state_40762[(9)]);
var inst_40730__$1 = (state_40762[(2)]);
var inst_40731 = (inst_40730__$1 == null);
var inst_40732 = cljs.core.not.call(null,inst_40731);
var state_40762__$1 = (function (){var statearr_40767 = state_40762;
(statearr_40767[(9)] = inst_40730__$1);

return statearr_40767;
})();
if(inst_40732){
var statearr_40768_40793 = state_40762__$1;
(statearr_40768_40793[(1)] = (5));

} else {
var statearr_40769_40794 = state_40762__$1;
(statearr_40769_40794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40763 === (15))){
var inst_40752 = (state_40762[(2)]);
var state_40762__$1 = state_40762;
var statearr_40770_40795 = state_40762__$1;
(statearr_40770_40795[(2)] = inst_40752);

(statearr_40770_40795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40763 === (13))){
var state_40762__$1 = state_40762;
var statearr_40771_40796 = state_40762__$1;
(statearr_40771_40796[(2)] = null);

(statearr_40771_40796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40763 === (6))){
var inst_40727 = (state_40762[(8)]);
var inst_40748 = (inst_40727 > (0));
var state_40762__$1 = state_40762;
if(cljs.core.truth_(inst_40748)){
var statearr_40772_40797 = state_40762__$1;
(statearr_40772_40797[(1)] = (12));

} else {
var statearr_40773_40798 = state_40762__$1;
(statearr_40773_40798[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40763 === (3))){
var inst_40760 = (state_40762[(2)]);
var state_40762__$1 = state_40762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40762__$1,inst_40760);
} else {
if((state_val_40763 === (12))){
var inst_40726 = (state_40762[(7)]);
var inst_40750 = cljs.core.vec.call(null,inst_40726);
var state_40762__$1 = state_40762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40762__$1,(15),out,inst_40750);
} else {
if((state_val_40763 === (2))){
var state_40762__$1 = state_40762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40762__$1,(4),ch);
} else {
if((state_val_40763 === (11))){
var inst_40742 = (state_40762[(2)]);
var inst_40743 = (new Array(n));
var inst_40726 = inst_40743;
var inst_40727 = (0);
var state_40762__$1 = (function (){var statearr_40774 = state_40762;
(statearr_40774[(10)] = inst_40742);

(statearr_40774[(7)] = inst_40726);

(statearr_40774[(8)] = inst_40727);

return statearr_40774;
})();
var statearr_40775_40799 = state_40762__$1;
(statearr_40775_40799[(2)] = null);

(statearr_40775_40799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40763 === (9))){
var inst_40726 = (state_40762[(7)]);
var inst_40740 = cljs.core.vec.call(null,inst_40726);
var state_40762__$1 = state_40762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40762__$1,(11),out,inst_40740);
} else {
if((state_val_40763 === (5))){
var inst_40735 = (state_40762[(11)]);
var inst_40726 = (state_40762[(7)]);
var inst_40730 = (state_40762[(9)]);
var inst_40727 = (state_40762[(8)]);
var inst_40734 = (inst_40726[inst_40727] = inst_40730);
var inst_40735__$1 = (inst_40727 + (1));
var inst_40736 = (inst_40735__$1 < n);
var state_40762__$1 = (function (){var statearr_40776 = state_40762;
(statearr_40776[(12)] = inst_40734);

(statearr_40776[(11)] = inst_40735__$1);

return statearr_40776;
})();
if(cljs.core.truth_(inst_40736)){
var statearr_40777_40800 = state_40762__$1;
(statearr_40777_40800[(1)] = (8));

} else {
var statearr_40778_40801 = state_40762__$1;
(statearr_40778_40801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40763 === (14))){
var inst_40755 = (state_40762[(2)]);
var inst_40756 = cljs.core.async.close_BANG_.call(null,out);
var state_40762__$1 = (function (){var statearr_40780 = state_40762;
(statearr_40780[(13)] = inst_40755);

return statearr_40780;
})();
var statearr_40781_40802 = state_40762__$1;
(statearr_40781_40802[(2)] = inst_40756);

(statearr_40781_40802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40763 === (10))){
var inst_40746 = (state_40762[(2)]);
var state_40762__$1 = state_40762;
var statearr_40782_40803 = state_40762__$1;
(statearr_40782_40803[(2)] = inst_40746);

(statearr_40782_40803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40763 === (8))){
var inst_40735 = (state_40762[(11)]);
var inst_40726 = (state_40762[(7)]);
var tmp40779 = inst_40726;
var inst_40726__$1 = tmp40779;
var inst_40727 = inst_40735;
var state_40762__$1 = (function (){var statearr_40783 = state_40762;
(statearr_40783[(7)] = inst_40726__$1);

(statearr_40783[(8)] = inst_40727);

return statearr_40783;
})();
var statearr_40784_40804 = state_40762__$1;
(statearr_40784_40804[(2)] = null);

(statearr_40784_40804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23750__auto___40790,out))
;
return ((function (switch__23660__auto__,c__23750__auto___40790,out){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_40785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40785[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_40785[(1)] = (1));

return statearr_40785;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_40762){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_40762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e40786){if((e40786 instanceof Object)){
var ex__23664__auto__ = e40786;
var statearr_40787_40805 = state_40762;
(statearr_40787_40805[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40806 = state_40762;
state_40762 = G__40806;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_40762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_40762);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23750__auto___40790,out))
})();
var state__23752__auto__ = (function (){var statearr_40788 = f__23751__auto__.call(null);
(statearr_40788[(6)] = c__23750__auto___40790);

return statearr_40788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(c__23750__auto___40790,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40808 = arguments.length;
switch (G__40808) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23750__auto___40878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23750__auto___40878,out){
return (function (){
var f__23751__auto__ = (function (){var switch__23660__auto__ = ((function (c__23750__auto___40878,out){
return (function (state_40850){
var state_val_40851 = (state_40850[(1)]);
if((state_val_40851 === (7))){
var inst_40846 = (state_40850[(2)]);
var state_40850__$1 = state_40850;
var statearr_40852_40879 = state_40850__$1;
(statearr_40852_40879[(2)] = inst_40846);

(statearr_40852_40879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (1))){
var inst_40809 = [];
var inst_40810 = inst_40809;
var inst_40811 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40850__$1 = (function (){var statearr_40853 = state_40850;
(statearr_40853[(7)] = inst_40811);

(statearr_40853[(8)] = inst_40810);

return statearr_40853;
})();
var statearr_40854_40880 = state_40850__$1;
(statearr_40854_40880[(2)] = null);

(statearr_40854_40880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (4))){
var inst_40814 = (state_40850[(9)]);
var inst_40814__$1 = (state_40850[(2)]);
var inst_40815 = (inst_40814__$1 == null);
var inst_40816 = cljs.core.not.call(null,inst_40815);
var state_40850__$1 = (function (){var statearr_40855 = state_40850;
(statearr_40855[(9)] = inst_40814__$1);

return statearr_40855;
})();
if(inst_40816){
var statearr_40856_40881 = state_40850__$1;
(statearr_40856_40881[(1)] = (5));

} else {
var statearr_40857_40882 = state_40850__$1;
(statearr_40857_40882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (15))){
var inst_40840 = (state_40850[(2)]);
var state_40850__$1 = state_40850;
var statearr_40858_40883 = state_40850__$1;
(statearr_40858_40883[(2)] = inst_40840);

(statearr_40858_40883[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (13))){
var state_40850__$1 = state_40850;
var statearr_40859_40884 = state_40850__$1;
(statearr_40859_40884[(2)] = null);

(statearr_40859_40884[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (6))){
var inst_40810 = (state_40850[(8)]);
var inst_40835 = inst_40810.length;
var inst_40836 = (inst_40835 > (0));
var state_40850__$1 = state_40850;
if(cljs.core.truth_(inst_40836)){
var statearr_40860_40885 = state_40850__$1;
(statearr_40860_40885[(1)] = (12));

} else {
var statearr_40861_40886 = state_40850__$1;
(statearr_40861_40886[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (3))){
var inst_40848 = (state_40850[(2)]);
var state_40850__$1 = state_40850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40850__$1,inst_40848);
} else {
if((state_val_40851 === (12))){
var inst_40810 = (state_40850[(8)]);
var inst_40838 = cljs.core.vec.call(null,inst_40810);
var state_40850__$1 = state_40850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40850__$1,(15),out,inst_40838);
} else {
if((state_val_40851 === (2))){
var state_40850__$1 = state_40850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40850__$1,(4),ch);
} else {
if((state_val_40851 === (11))){
var inst_40814 = (state_40850[(9)]);
var inst_40818 = (state_40850[(10)]);
var inst_40828 = (state_40850[(2)]);
var inst_40829 = [];
var inst_40830 = inst_40829.push(inst_40814);
var inst_40810 = inst_40829;
var inst_40811 = inst_40818;
var state_40850__$1 = (function (){var statearr_40862 = state_40850;
(statearr_40862[(7)] = inst_40811);

(statearr_40862[(8)] = inst_40810);

(statearr_40862[(11)] = inst_40830);

(statearr_40862[(12)] = inst_40828);

return statearr_40862;
})();
var statearr_40863_40887 = state_40850__$1;
(statearr_40863_40887[(2)] = null);

(statearr_40863_40887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (9))){
var inst_40810 = (state_40850[(8)]);
var inst_40826 = cljs.core.vec.call(null,inst_40810);
var state_40850__$1 = state_40850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40850__$1,(11),out,inst_40826);
} else {
if((state_val_40851 === (5))){
var inst_40811 = (state_40850[(7)]);
var inst_40814 = (state_40850[(9)]);
var inst_40818 = (state_40850[(10)]);
var inst_40818__$1 = f.call(null,inst_40814);
var inst_40819 = cljs.core._EQ_.call(null,inst_40818__$1,inst_40811);
var inst_40820 = cljs.core.keyword_identical_QMARK_.call(null,inst_40811,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40821 = ((inst_40819) || (inst_40820));
var state_40850__$1 = (function (){var statearr_40864 = state_40850;
(statearr_40864[(10)] = inst_40818__$1);

return statearr_40864;
})();
if(cljs.core.truth_(inst_40821)){
var statearr_40865_40888 = state_40850__$1;
(statearr_40865_40888[(1)] = (8));

} else {
var statearr_40866_40889 = state_40850__$1;
(statearr_40866_40889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (14))){
var inst_40843 = (state_40850[(2)]);
var inst_40844 = cljs.core.async.close_BANG_.call(null,out);
var state_40850__$1 = (function (){var statearr_40868 = state_40850;
(statearr_40868[(13)] = inst_40843);

return statearr_40868;
})();
var statearr_40869_40890 = state_40850__$1;
(statearr_40869_40890[(2)] = inst_40844);

(statearr_40869_40890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (10))){
var inst_40833 = (state_40850[(2)]);
var state_40850__$1 = state_40850;
var statearr_40870_40891 = state_40850__$1;
(statearr_40870_40891[(2)] = inst_40833);

(statearr_40870_40891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (8))){
var inst_40810 = (state_40850[(8)]);
var inst_40814 = (state_40850[(9)]);
var inst_40818 = (state_40850[(10)]);
var inst_40823 = inst_40810.push(inst_40814);
var tmp40867 = inst_40810;
var inst_40810__$1 = tmp40867;
var inst_40811 = inst_40818;
var state_40850__$1 = (function (){var statearr_40871 = state_40850;
(statearr_40871[(7)] = inst_40811);

(statearr_40871[(8)] = inst_40810__$1);

(statearr_40871[(14)] = inst_40823);

return statearr_40871;
})();
var statearr_40872_40892 = state_40850__$1;
(statearr_40872_40892[(2)] = null);

(statearr_40872_40892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23750__auto___40878,out))
;
return ((function (switch__23660__auto__,c__23750__auto___40878,out){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_40873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40873[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_40873[(1)] = (1));

return statearr_40873;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_40850){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_40850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e40874){if((e40874 instanceof Object)){
var ex__23664__auto__ = e40874;
var statearr_40875_40893 = state_40850;
(statearr_40875_40893[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40894 = state_40850;
state_40850 = G__40894;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_40850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_40850);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23750__auto___40878,out))
})();
var state__23752__auto__ = (function (){var statearr_40876 = f__23751__auto__.call(null);
(statearr_40876[(6)] = c__23750__auto___40878);

return statearr_40876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23752__auto__);
});})(c__23750__auto___40878,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1530194902285
