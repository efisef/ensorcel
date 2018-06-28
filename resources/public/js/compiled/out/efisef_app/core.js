// Compiled by ClojureScript 1.10.238 {}
goog.provide('efisef_app.core');
goog.require('cljs.core');
goog.require('efisef_app.components.replay');
goog.require('reagent.core');
goog.require('cljss.core');
cljs.core.enable_console_print_BANG_.call(null);
efisef_app.core.app_style = (function efisef_app$core$app_style(){
return cljss.core.css.call(null,"efisef-app_core__app-style",".efisef-app_core__app-style{font-size:11px;width:800px;right:0;display:flex;position:absolute;font-family:Arial, Helvetica, sans-serif;flex-direction:column;left:0;margin:auto;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.core.app = (function efisef_app$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.core.app_style.call(null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.components.replay.component], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.core.app], null),document.getElementById("app"));
efisef_app.core.on_js_reload = (function efisef_app$core$on_js_reload(){
cljss.core.remove_styles_BANG_.call(null);

return reagent.core.force_update_all.call(null);
});

//# sourceMappingURL=core.js.map?rel=1529693101224
