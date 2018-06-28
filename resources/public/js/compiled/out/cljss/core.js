// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljss.core');
goog.require('cljs.core');
goog.require('cljss.sheet');
goog.require('cljss.utils');
goog.require('clojure.string');
cljss.core.sheets = cljs.core.atom.call(null,(new cljs.core.List(null,cljss.sheet.create_sheet.call(null),null,(1),null)));
cljss.core.remove_styles_BANG_ = (function cljss$core$remove_styles_BANG_(){
cljs.core.run_BANG_.call(null,cljss.sheet.flush_BANG_,cljs.core.deref.call(null,cljss.core.sheets));

return cljs.core.reset_BANG_.call(null,cljss.core.sheets,(new cljs.core.List(null,cljss.sheet.create_sheet.call(null),null,(1),null)));
});
/**
 * Takes class name, static styles and dynamic styles.
 * Injects styles and returns a string of generated class names.
 */
cljss.core.css = (function cljss$core$css(cls,static$,vars){
var static$__$1 = ((typeof static$ === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [static$], null):static$);
var sheet = cljs.core.first.call(null,cljs.core.deref.call(null,cljss.core.sheets));
if(cljs.core.truth_(cljss.sheet.filled_QMARK_.call(null,sheet))){
cljs.core.swap_BANG_.call(null,cljss.core.sheets,cljs.core.conj,cljss.sheet.create_sheet.call(null));

return cljss.core.css.call(null,cls,static$__$1,vars);
} else {
var G__29808_29815 = static$__$1;
var vec__29809_29816 = G__29808_29815;
var seq__29810_29817 = cljs.core.seq.call(null,vec__29809_29816);
var first__29811_29818 = cljs.core.first.call(null,seq__29810_29817);
var seq__29810_29819__$1 = cljs.core.next.call(null,seq__29810_29817);
var s_29820 = first__29811_29818;
var static_29821__$2 = seq__29810_29819__$1;
var G__29808_29822__$1 = G__29808_29815;
while(true){
var vec__29812_29823 = G__29808_29822__$1;
var seq__29813_29824 = cljs.core.seq.call(null,vec__29812_29823);
var first__29814_29825 = cljs.core.first.call(null,seq__29813_29824);
var seq__29813_29826__$1 = cljs.core.next.call(null,seq__29813_29824);
var s_29827__$1 = first__29814_29825;
var static_29828__$3 = seq__29813_29826__$1;
if(cljs.core.seq.call(null,static_29828__$3)){
cljss.sheet.insert_BANG_.call(null,sheet,s_29827__$1,cls);

var G__29829 = static_29828__$3;
G__29808_29822__$1 = G__29829;
continue;
} else {
cljss.sheet.insert_BANG_.call(null,sheet,s_29827__$1,cls);
}
break;
}

if((cljs.core.count.call(null,vars) > (0))){
var var_cls = ["vars-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,vars))].join('');
cljss.sheet.insert_BANG_.call(null,sheet,((function (var_cls,static$__$1,sheet){
return (function (){
return cljss.utils.build_css.call(null,var_cls,vars);
});})(var_cls,static$__$1,sheet))
,var_cls);

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_cls)].join('');
} else {
return cls;
}
}
});
/**
 * Takes CSS animation name, static styles and dynamic styles.
 * Injects styles and returns generated CSS animation name.
 */
cljss.core.css_keyframes = (function cljss$core$css_keyframes(cls,static$,vars){
var sheet = cljs.core.first.call(null,cljs.core.deref.call(null,cljss.core.sheets));
if(cljs.core.truth_(cljss.sheet.filled_QMARK_.call(null,sheet))){
cljs.core.swap_BANG_.call(null,cljss.core.sheets,cljs.core.conj,cljss.sheet.create_sheet.call(null));

return cljss.core.css_keyframes.call(null,cls,static$,vars);
} else {
var inner = cljs.core.reduce.call(null,((function (sheet){
return (function (s,p__29830){
var vec__29831 = p__29830;
var id = cljs.core.nth.call(null,vec__29831,(0),null);
var val = cljs.core.nth.call(null,vec__29831,(1),null);
return clojure.string.replace.call(null,s,id,val);
});})(sheet))
,static$,vars);
var anim_name = ["animation-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,vars))].join('');
var keyframes = ["@keyframes ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(anim_name),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inner),"}"].join('');
cljss.sheet.insert_BANG_.call(null,sheet,keyframes,anim_name);

return anim_name;
}
});
cljss.core._camel_case = (function cljss$core$_camel_case(k){
if((((k instanceof cljs.core.Keyword)) || (typeof k === 'string') || ((k instanceof cljs.core.Symbol)))){
var vec__29834 = clojure.string.split.call(null,cljs.core.name.call(null,k),/-/);
var seq__29835 = cljs.core.seq.call(null,vec__29834);
var first__29836 = cljs.core.first.call(null,seq__29835);
var seq__29835__$1 = cljs.core.next.call(null,seq__29835);
var first_word = first__29836;
var words = seq__29835__$1;
if(((cljs.core.empty_QMARK_.call(null,words)) || (cljs.core._EQ_.call(null,"aria",first_word)) || (cljs.core._EQ_.call(null,"data",first_word)))){
return k;
} else {
return cljs.core.keyword.call(null,clojure.string.join.call(null,cljs.core.conj.call(null,cljs.core.map.call(null,clojure.string.capitalize,words),first_word)));
}
} else {
return k;
}
});
cljss.core._compile_class_name = (function cljss$core$_compile_class_name(props){
var className = cljs.core.filter.call(null,cljs.core.identity,cljs.core.vals.call(null,cljs.core.select_keys.call(null,props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class-name","class-name",945142584)], null))));
if(cljs.core.empty_QMARK_.call(null,className)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",className))," "].join('');
}
});
cljss.core._mk_var_class = (function cljss$core$_mk_var_class(props,vars,cls,static$){
return cljss.core.css.call(null,cls,static$,cljs.core.map.call(null,(function (p__29838){
var vec__29839 = p__29838;
var cls__$1 = cljs.core.nth.call(null,vec__29839,(0),null);
var v = cljs.core.nth.call(null,vec__29839,(1),null);
if((function (){var and__3911__auto__ = cljs.core.ifn_QMARK_.call(null,v);
if(and__3911__auto__){
if(!((v == null))){
if((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$)))){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,v);
}
} else {
return and__3911__auto__;
}
})()){
return (new cljs.core.List(null,cls__$1,(new cljs.core.List(null,cljs.core.apply.call(null,v,cljs.core.map.call(null,((function (vec__29839,cls__$1,v){
return (function (p1__29837_SHARP_){
return cljs.core.get.call(null,props,p1__29837_SHARP_,null);
});})(vec__29839,cls__$1,v))
,cljs.core.flatten.call(null,(new cljs.core.List(null,cljs.core.meta.call(null,v),null,(1),null))))),null,(1),null)),(2),null));
} else {
if(cljs.core.ifn_QMARK_.call(null,v)){
return (new cljs.core.List(null,cls__$1,(new cljs.core.List(null,v.call(null,props),null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,cls__$1,(new cljs.core.List(null,v,null,(1),null)),(2),null));

}
}
}),vars));
});
cljss.core._meta_attrs = (function cljss$core$_meta_attrs(vars){
return cljs.core.set.call(null,cljs.core.flatten.call(null,cljs.core.map.call(null,cljs.core.meta,cljs.core.filter.call(null,(function (p1__29844_SHARP_){
if(!((p1__29844_SHARP_ == null))){
if((((p1__29844_SHARP_.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === p1__29844_SHARP_.cljs$core$IWithMeta$)))){
return true;
} else {
if((!p1__29844_SHARP_.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,p1__29844_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,p1__29844_SHARP_);
}
}),cljs.core.map.call(null,cljs.core.second,vars)))));
});
cljss.core._camel_case_attrs = (function cljss$core$_camel_case_attrs(props){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var k__$1 = (function (){var G__29846 = k;
var G__29846__$1 = (((G__29846 instanceof cljs.core.Keyword))?G__29846.fqn:null);
switch (G__29846__$1) {
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
default:
return cljss.core._camel_case.call(null,k);

}
})();
return cljs.core.assoc.call(null,m,k__$1,v);
}),cljs.core.PersistentArrayMap.EMPTY,props);
});
cljss.core._styled = (function cljss$core$_styled(cls,static$,vars,attrs,create_element){
var clsn = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null))].join('');
var static$__$1 = ((goog.DEBUG)?clojure.string.replace.call(null,static$,cls,clsn):static$);
var vars__$1 = ((goog.DEBUG)?cljs.core.map.call(null,((function (clsn,static$__$1){
return (function (p__29848){
var vec__29849 = p__29848;
var k = cljs.core.nth.call(null,vec__29849,(0),null);
var v = cljs.core.nth.call(null,vec__29849,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace.call(null,k,cls,clsn),v], null);
});})(clsn,static$__$1))
,vars):vars);
var cls__$1 = ((goog.DEBUG)?clsn:cls);
return ((function (clsn,static$__$1,vars__$1,cls__$1){
return (function() { 
var G__29855__delegate = function (props,children){
var vec__29852 = ((cljs.core.map_QMARK_.call(null,props))?[props,children]:[cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.array,props,children)]);
var props__$1 = cljs.core.nth.call(null,vec__29852,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__29852,(1),null);
var var_class = cljss.core._mk_var_class.call(null,props__$1,vars__$1,cls__$1,static$__$1);
var meta_attrs = cljss.core._meta_attrs.call(null,vars__$1);
var className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljss.core._compile_class_name.call(null,props__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_class)].join('');
var props__$2 = cljss.core._camel_case_attrs.call(null,cljs.core.assoc.call(null,cljs.core.apply.call(null,cljs.core.dissoc,props__$1,cljs.core.concat.call(null,attrs,meta_attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"className","className",-1983287057)], null))),new cljs.core.Keyword(null,"className","className",-1983287057),className));
return create_element.call(null,props__$2,children__$1);
};
var G__29855 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__29856__i = 0, G__29856__a = new Array(arguments.length -  1);
while (G__29856__i < G__29856__a.length) {G__29856__a[G__29856__i] = arguments[G__29856__i + 1]; ++G__29856__i;}
  children = new cljs.core.IndexedSeq(G__29856__a,0,null);
} 
return G__29855__delegate.call(this,props,children);};
G__29855.cljs$lang$maxFixedArity = 1;
G__29855.cljs$lang$applyTo = (function (arglist__29857){
var props = cljs.core.first(arglist__29857);
var children = cljs.core.rest(arglist__29857);
return G__29855__delegate(props,children);
});
G__29855.cljs$core$IFn$_invoke$arity$variadic = G__29855__delegate;
return G__29855;
})()
;
;})(clsn,static$__$1,vars__$1,cls__$1))
});

//# sourceMappingURL=core.js.map?rel=1529331340230
