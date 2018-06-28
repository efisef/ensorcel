// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__22136__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22137__i = 0, G__22137__a = new Array(arguments.length -  0);
while (G__22137__i < G__22137__a.length) {G__22137__a[G__22137__i] = arguments[G__22137__i + 0]; ++G__22137__i;}
  args = new cljs.core.IndexedSeq(G__22137__a,0,null);
} 
return G__22136__delegate.call(this,args);};
G__22136.cljs$lang$maxFixedArity = 0;
G__22136.cljs$lang$applyTo = (function (arglist__22138){
var args = cljs.core.seq(arglist__22138);
return G__22136__delegate(args);
});
G__22136.cljs$core$IFn$_invoke$arity$variadic = G__22136__delegate;
return G__22136;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__22139__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22140__i = 0, G__22140__a = new Array(arguments.length -  0);
while (G__22140__i < G__22140__a.length) {G__22140__a[G__22140__i] = arguments[G__22140__i + 0]; ++G__22140__i;}
  args = new cljs.core.IndexedSeq(G__22140__a,0,null);
} 
return G__22139__delegate.call(this,args);};
G__22139.cljs$lang$maxFixedArity = 0;
G__22139.cljs$lang$applyTo = (function (arglist__22141){
var args = cljs.core.seq(arglist__22141);
return G__22139__delegate(args);
});
G__22139.cljs$core$IFn$_invoke$arity$variadic = G__22139__delegate;
return G__22139;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1529331324856
