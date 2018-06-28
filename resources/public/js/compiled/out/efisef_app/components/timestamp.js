// Compiled by ClojureScript 1.10.238 {}
goog.provide('efisef_app.components.timestamp');
goog.require('cljs.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('cljss.core');
efisef_app.components.timestamp.component_style = (function efisef_app$components$timestamp$component_style(){
return cljss.core.css.call(null,"efisef-app_components_timestamp__component-style",".efisef-app_components_timestamp__component-style{display:inline-flex;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.components.timestamp.component = (function efisef_app$components$timestamp$component(micros){
var millis = cljs.core.quot.call(null,micros,(1000));
var date = cljs_time.coerce.from_long.call(null,millis);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.timestamp.component_style.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Time: "], null),cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd HH:mm:ss.SSS"),date)], null)], null);
});

//# sourceMappingURL=timestamp.js.map?rel=1529689750980
