// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljss.utils');
goog.require('cljs.core');
goog.require('clojure.string');
cljss.utils.dev_QMARK_ = goog.DEBUG;
cljss.utils.pseudo_QMARK_ = (function cljss$utils$pseudo_QMARK_(p__29729){
var vec__29730 = p__29729;
var rule = cljs.core.nth.call(null,vec__29730,(0),null);
var value = cljs.core.nth.call(null,vec__29730,(1),null);
var and__3911__auto__ = cljs.core.re_matches.call(null,/&:.*/,cljs.core.name.call(null,rule));
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.map_QMARK_.call(null,value);
} else {
return and__3911__auto__;
}
});
cljss.utils.literal_QMARK_ = (function cljss$utils$literal_QMARK_(x){
return ((typeof x === 'string') || (typeof x === 'number'));
});
cljss.utils.escape_val = (function cljss$utils$escape_val(rule,val){
if(cljs.core._EQ_.call(null,rule,new cljs.core.Keyword(null,"content","content",15833224))){
return cljs.core.pr_str.call(null,val);
} else {
return val;
}
});
cljss.utils.build_css = (function cljss$utils$build_css(cls,styles){
return (function (p1__29733_SHARP_){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29733_SHARP_),"}"].join('');
}).call(null,clojure.string.join.call(null,"",cljs.core.map.call(null,(function (p__29734){
var vec__29735 = p__29734;
var rule = cljs.core.nth.call(null,vec__29735,(0),null);
var val = cljs.core.nth.call(null,vec__29735,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,rule)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljss.utils.escape_val.call(null,rule,val)),";"].join('');
}),styles)));
});
cljss.utils.compile_css_rule = (function cljss$utils$compile_css_rule(p__29738){
var vec__29739 = p__29738;
var rule = cljs.core.nth.call(null,vec__29739,(0),null);
var val = cljs.core.nth.call(null,vec__29739,(1),null);
var r = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,rule)),":"].join('')], null);
var r__$1 = ((cljs.core.vector_QMARK_.call(null,val))?cljs.core.into.call(null,r,val):cljs.core.conj.call(null,r,val));
return cljs.core.conj.call(null,r__$1,";");
});
cljss.utils.reduce_str = (function cljss$utils$reduce_str(s){
return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (s__$1,s1){
var s0 = cljs.core.first.call(null,s__$1);
var srest = cljs.core.rest.call(null,s__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = cljss.utils.literal_QMARK_.call(null,s1);
if(cljs.core.truth_(and__3911__auto__)){
return typeof s0 === 'string';
} else {
return and__3911__auto__;
}
})())){
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s0),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1)].join(''),srest);
} else {
return cljs.core.cons.call(null,s1,s__$1);
}
}),(new cljs.core.List(null,"",null,(1),null)),s));
});

//# sourceMappingURL=utils.js.map?rel=1529331339968
