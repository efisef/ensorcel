// Compiled by ClojureScript 1.10.238 {}
goog.provide('efisef_app.utils.spacer');
goog.require('cljs.core');
goog.require('cljss.core');
goog.require('cljss.reagent');
efisef_app.utils.spacer.component_style = (function efisef_app$utils$spacer$component_style(){
return cljss.core.css.call(null,"efisef-app_utils_spacer__component-style",".efisef-app_utils_spacer__component-style{display:flex;justify-content:center;align-items:center;font-size:13px;color:#6F6F6F;margin-left:5px;margin-right:5px;flex-direction:row;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.utils.spacer.vr = cljss.reagent.styled.call(null,"efisef-app_utils_spacer__vr",".efisef-app_utils_spacer__vr{display:block;width:1px;border:0px;border-left:1px solid #ccc;min-height:10px;padding:0;}",[],[],(function (p1__24333__24335__auto__,p2__24334__24336__auto__){
return cljs.core.apply.call(null,React.createElement,"div",cljs.core.clj__GT_js.call(null,p1__24333__24335__auto__),cljs.core.map.call(null,reagent.core.as_element,p2__24334__24336__auto__));
}));

efisef_app.utils.spacer.vr.displayName = "efisef-app.utils.spacer.vr";
efisef_app.utils.spacer.hr = cljss.reagent.styled.call(null,"efisef-app_utils_spacer__hr",".efisef-app_utils_spacer__hr{display:block;height:1px;border:0px;border-top:1px solid #ccc;width:100%;padding:0;}",[],[],(function (p1__24333__24335__auto__,p2__24334__24336__auto__){
return cljs.core.apply.call(null,React.createElement,"hr",cljs.core.clj__GT_js.call(null,p1__24333__24335__auto__),cljs.core.map.call(null,reagent.core.as_element,p2__24334__24336__auto__));
}));

efisef_app.utils.spacer.hr.displayName = "efisef-app.utils.spacer.hr";
efisef_app.utils.spacer.component = (function efisef_app$utils$spacer$component(style){
var G__24354 = style;
var G__24354__$1 = (((G__24354 instanceof cljs.core.Keyword))?G__24354.fqn:null);
switch (G__24354__$1) {
case "horizontal":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.utils.spacer.component_style.call(null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.utils.spacer.hr], null)], null);

break;
case "vertical":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.utils.spacer.component_style.call(null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.utils.spacer.vr], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24354__$1)].join('')));

}
});

//# sourceMappingURL=spacer.js.map?rel=1529689750860
