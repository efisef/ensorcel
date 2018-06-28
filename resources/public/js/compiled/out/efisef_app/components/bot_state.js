// Compiled by ClojureScript 1.10.238 {}
goog.provide('efisef_app.components.bot_state');
goog.require('cljs.core');
goog.require('efisef_app.components.book');
goog.require('efisef_app.utils.divider');
goog.require('efisef_app.utils.spacer');
goog.require('reagent.core');
goog.require('cljss.core');
efisef_app.components.bot_state.selector_style = (function efisef_app$components$bot_state$selector_style(){
return cljss.core.css.call(null,"efisef-app_components_bot-state__selector-style",".efisef-app_components_bot-state__selector-style{border:1px solid #000000;padding:10px;margin-bottom:10px;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.components.bot_state.component_style = (function efisef_app$components$bot_state$component_style(){
return cljss.core.css.call(null,"efisef-app_components_bot-state__component-style",".efisef-app_components_bot-state__component-style{display:flex;padding:10px;flex-direction:column;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.components.bot_state.value_style = (function efisef_app$components$bot_state$value_style(){
return cljss.core.css.call(null,"efisef-app_components_bot-state__value-style",".efisef-app_components_bot-state__value-style{text-align:center;border:1px solid #000000;padding-bottom:10px;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.components.bot_state.no_state_style = (function efisef_app$components$bot_state$no_state_style(){
return cljss.core.css.call(null,"efisef-app_components_bot-state__no-state-style",".efisef-app_components_bot-state__no-state-style{text-align:center;font-style:italic;color:gray;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.components.bot_state.listing_title_style = (function efisef_app$components$bot_state$listing_title_style(){
return cljss.core.css.call(null,"efisef-app_components_bot-state__listing-title-style",".efisef-app_components_bot-state__listing-title-style{margin-left:5px;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.components.bot_state.value_title_style = (function efisef_app$components$bot_state$value_title_style(){
return cljss.core.css.call(null,"efisef-app_components_bot-state__value-title-style",".efisef-app_components_bot-state__value-title-style{margin-bottom:5px;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.components.bot_state.selected_listing = reagent.core.atom.call(null,null);
efisef_app.components.bot_state.value_component = (function efisef_app$components$bot_state$value_component(value){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.bot_state.value_style.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.bot_state.value_title_style.call(null)], null),"Value"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.utils.spacer.component,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)], null),value], null);
});
efisef_app.components.bot_state.listing_component = (function efisef_app$components$bot_state$listing_component(l){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"listing",new cljs.core.Keyword(null,"value","value",305978217),l,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.reset_BANG_.call(null,efisef_app.components.bot_state.selected_listing,l);
})], null)], null),l], null)], null);
});
efisef_app.components.bot_state.listing_selector_component = (function efisef_app$components$bot_state$listing_selector_component(listings){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.bot_state.selector_style.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.bot_state.listing_title_style.call(null)], null),"Keys"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.utils.spacer.component,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),(function (){var iter__4292__auto__ = (function efisef_app$components$bot_state$listing_selector_component_$_iter__31790(s__31791){
return (new cljs.core.LazySeq(null,(function (){
var s__31791__$1 = s__31791;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__31791__$1);
if(temp__5457__auto__){
var s__31791__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31791__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__31791__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__31793 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__31792 = (0);
while(true){
if((i__31792 < size__4291__auto__)){
var listing = cljs.core._nth.call(null,c__4290__auto__,i__31792);
cljs.core.chunk_append.call(null,b__31793,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.components.bot_state.listing_component,listing], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),listing], null)));

var G__31794 = (i__31792 + (1));
i__31792 = G__31794;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31793),efisef_app$components$bot_state$listing_selector_component_$_iter__31790.call(null,cljs.core.chunk_rest.call(null,s__31791__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31793),null);
}
} else {
var listing = cljs.core.first.call(null,s__31791__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.components.bot_state.listing_component,listing], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),listing], null)),efisef_app$components$bot_state$listing_selector_component_$_iter__31790.call(null,cljs.core.rest.call(null,s__31791__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,listings);
})()], null)], null);
});
efisef_app.components.bot_state.no_state_component = (function efisef_app$components$bot_state$no_state_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.bot_state.no_state_style.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.utils.divider.component,"No State Selected"], null)], null);
});
efisef_app.components.bot_state.component = (function efisef_app$components$bot_state$component(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.bot_state.component_style.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.components.bot_state.listing_selector_component,cljs.core.keys.call(null,state)], null),(function (){var selected_state = cljs.core.get.call(null,state,cljs.core.deref.call(null,efisef_app.components.bot_state.selected_listing));
if(cljs.core.truth_(efisef_app.components.book.book_QMARK_.call(null,selected_state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.components.book.component,selected_state], null);
} else {
if((cljs.core.deref.call(null,efisef_app.components.bot_state.selected_listing) == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.components.bot_state.no_state_component], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.components.bot_state.value_component,selected_state], null);

}
}
})()], null);
});

//# sourceMappingURL=bot_state.js.map?rel=1529692243007
