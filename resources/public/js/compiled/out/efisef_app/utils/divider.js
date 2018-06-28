// Compiled by ClojureScript 1.10.238 {}
goog.provide('efisef_app.utils.divider');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljss.core');
goog.require('cljss.reagent');
efisef_app.utils.divider.component_style = (function efisef_app$utils$divider$component_style(){
return cljss.core.css.call(null,"efisef-app_utils_divider__component-style",".efisef-app_utils_divider__component-style{display:flex;justify-content:center;align-items:center;font-size:13px;color:#6F6F6F;flex-direction:row;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.utils.divider.text_style = (function efisef_app$utils$divider$text_style(){
return cljss.core.css.call(null,"efisef-app_utils_divider__text-style",".efisef-app_utils_divider__text-style{padding-left:5px;padding-right:5px;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.utils.divider.hr = cljss.reagent.styled.call(null,"efisef-app_utils_divider__hr",".efisef-app_utils_divider__hr{display:block;height:1px;border:0px;border-top:1px solid #ccc;margin:1em 0;width:40px;padding:0;}",[],[],(function (p1__24333__24335__auto__,p2__24334__24336__auto__){
return cljs.core.apply.call(null,React.createElement,"hr",cljs.core.clj__GT_js.call(null,p1__24333__24335__auto__),cljs.core.map.call(null,reagent.core.as_element,p2__24334__24336__auto__));
}));

efisef_app.utils.divider.hr.displayName = "efisef-app.utils.divider.hr";
efisef_app.utils.divider.component = (function efisef_app$utils$divider$component(text){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.utils.divider.component_style.call(null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.utils.divider.hr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.utils.divider.text_style.call(null)], null),text], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.utils.divider.hr], null)], null);
});

//# sourceMappingURL=divider.js.map?rel=1529689751152
