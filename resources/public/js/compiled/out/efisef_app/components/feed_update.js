// Compiled by ClojureScript 1.10.238 {}
goog.provide('efisef_app.components.feed_update');
goog.require('cljs.core');
goog.require('efisef_app.components.book');
goog.require('efisef_app.components.timestamp');
goog.require('cljss.core');
efisef_app.components.feed_update.component_style = (function efisef_app$components$feed_update$component_style(){
return cljss.core.css.call(null,"efisef-app_components_feed-update__component-style",".efisef-app_components_feed-update__component-style{display:inline-flex;padding:10px;flex-direction:column;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.components.feed_update.type_style = (function efisef_app$components$feed_update$type_style(){
return cljss.core.css.call(null,"efisef-app_components_feed-update__type-style",".efisef-app_components_feed-update__type-style{text-align:center;border:1px solid #000000;padding:5px;margin-bottom:5px;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.components.feed_update.trade_style = (function efisef_app$components$feed_update$trade_style(){
return cljss.core.css.call(null,"efisef-app_components_feed-update__trade-style",".efisef-app_components_feed-update__trade-style{border:1px solid #000000;min-width:400px;display:flex;padding:10px;text-align:left;flex-direction:column;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.components.feed_update.text_style = (function efisef_app$components$feed_update$text_style(){
return cljss.core.css.call(null,"efisef-app_components_feed-update__text-style",".efisef-app_components_feed-update__text-style{padding:5px;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.components.feed_update.trade_component = (function efisef_app$components$feed_update$trade_component(p__31635){
var map__31636 = p__31635;
var map__31636__$1 = ((((!((map__31636 == null)))?(((((map__31636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31636):map__31636);
var timestamp = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var aggressor = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"aggressor","aggressor",-1672648781));
var quantity = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
var price = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"price","price",22129180));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.feed_update.trade_style.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.feed_update.text_style.call(null)], null),efisef_app.components.timestamp.component.call(null,timestamp)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.feed_update.text_style.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Aggressor: "], null),aggressor], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.feed_update.text_style.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Price: "], null),price], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.feed_update.text_style.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Quantity: "], null),quantity], null)], null);
});
efisef_app.components.feed_update.component = (function efisef_app$components$feed_update$component(state){
var map__31638 = state;
var map__31638__$1 = ((((!((map__31638 == null)))?(((((map__31638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31638):map__31638);
var event = cljs.core.get.call(null,map__31638__$1,new cljs.core.Keyword(null,"event","event",301435442));
var exchange = cljs.core.get.call(null,map__31638__$1,new cljs.core.Keyword(null,"exchange","exchange",843073210));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.feed_update.component_style.call(null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.feed_update.type_style.call(null)], null),event," - ",exchange], null),(cljs.core.truth_(state)?(function (){var G__31640 = event;
switch (G__31640) {
case "modify":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.components.book.component,state], null);

break;
case "match":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.components.feed_update.trade_component,state], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31640)].join('')));

}
})():null)], null);
});

//# sourceMappingURL=feed_update.js.map?rel=1529691510618
