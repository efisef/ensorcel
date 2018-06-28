// Compiled by ClojureScript 1.10.238 {}
goog.provide('efisef_app.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
efisef_app.utils.comp_style = (function efisef_app$utils$comp_style(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22021 = arguments.length;
var i__4500__auto___22022 = (0);
while(true){
if((i__4500__auto___22022 < len__4499__auto___22021)){
args__4502__auto__.push((arguments[i__4500__auto___22022]));

var G__22023 = (i__4500__auto___22022 + (1));
i__4500__auto___22022 = G__22023;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return efisef_app.utils.comp_style.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

efisef_app.utils.comp_style.cljs$core$IFn$_invoke$arity$variadic = (function (classes){
return clojure.string.join.call(null," ",classes);
});

efisef_app.utils.comp_style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
efisef_app.utils.comp_style.cljs$lang$applyTo = (function (seq22020){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22020));
});

efisef_app.utils.render_date = (function efisef_app$utils$render_date(millis){
return cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd HH:mm"),cljs_time.coerce.from_long.call(null,millis));
});
efisef_app.utils.round = (function efisef_app$utils$round(number){
return (Math.round(((100) * number)) / (100));
});

//# sourceMappingURL=utils.js.map?rel=1529689748274
