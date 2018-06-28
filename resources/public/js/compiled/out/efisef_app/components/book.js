// Compiled by ClojureScript 1.10.238 {}
goog.provide('efisef_app.components.book');
goog.require('cljs.core');
goog.require('efisef_app.components.timestamp');
goog.require('efisef_app.utils.spacer');
goog.require('efisef_app.utils.table');
goog.require('clojure.string');
goog.require('cljss.reagent');
goog.require('cljss.core');
efisef_app.components.book.component_style = (function efisef_app$components$book$component_style(){
return cljss.core.css.call(null,"efisef-app_components_book__component-style",".efisef-app_components_book__component-style{border:1px solid #000000;padding:10px;display:inline-block;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.components.book.info_style = (function efisef_app$components$book$info_style(){
return cljss.core.css.call(null,"efisef-app_components_book__info-style",".efisef-app_components_book__info-style{display:flex;padding:5px;flex-direction:row;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.components.book.sides_style = (function efisef_app$components$book$sides_style(){
return cljss.core.css.call(null,"efisef-app_components_book__sides-style",".efisef-app_components_book__sides-style{display:flex;flex-direction:row;margin-top:10px;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.components.book.title_style = (function efisef_app$components$book$title_style(){
return cljss.core.css.call(null,"efisef-app_components_book__title-style",".efisef-app_components_book__title-style{margin-top:5px;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.components.book.asks_style = (function efisef_app$components$book$asks_style(){
return cljss.core.css.call(null,"efisef-app_components_book__asks-style",".efisef-app_components_book__asks-style{margin-right:5px;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.components.book.bids_style = (function efisef_app$components$book$bids_style(){
return cljss.core.css.call(null,"efisef-app_components_book__bids-style",".efisef-app_components_book__bids-style{margin-left:5px;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.components.book.book_QMARK_ = (function efisef_app$components$book$book_QMARK_(thing){
if(cljs.core.truth_((function (){var and__3911__auto__ = thing;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.map_QMARK_.call(null,thing);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.every_QMARK_.call(null,thing,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.Keyword(null,"asks","asks",1149982943)], null));
} else {
return null;
}
});
efisef_app.components.book.info_component = (function efisef_app$components$book$info_component(p__24360){
var map__24361 = p__24360;
var map__24361__$1 = ((((!((map__24361 == null)))?(((((map__24361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24361):map__24361);
var timestamp = cljs.core.get.call(null,map__24361__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var exchange = cljs.core.get.call(null,map__24361__$1,new cljs.core.Keyword(null,"exchange","exchange",843073210));
var base = cljs.core.get.call(null,map__24361__$1,new cljs.core.Keyword(null,"base","base",185279322));
var quote = cljs.core.get.call(null,map__24361__$1,new cljs.core.Keyword(null,"quote","quote",-262615245));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.book.info_style.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.components.timestamp.component,timestamp], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.utils.spacer.component,new cljs.core.Keyword(null,"vertical","vertical",718696748)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),exchange], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.utils.spacer.component,new cljs.core.Keyword(null,"vertical","vertical",718696748)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Base: "], null),base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.utils.spacer.component,new cljs.core.Keyword(null,"vertical","vertical",718696748)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Quote: "], null),quote], null)], null);
});
if(typeof efisef_app.components.book.table_headers !== 'undefined'){
} else {
efisef_app.components.book.table_headers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"price","price",22129180),new cljs.core.Keyword(null,"size","size",1098693007)], null);
}
efisef_app.components.book.book__GT_table = (function efisef_app$components$book$book__GT_table(side,book){
var sort_fn = (function (p1__24363_SHARP_){
var G__24364 = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"price","price",22129180),p1__24363_SHARP_);
if(cljs.core._EQ_.call(null,side,new cljs.core.Keyword(null,"bids","bids",-1493194652))){
return cljs.core.reverse.call(null,G__24364);
} else {
return G__24364;
}
});
return cljs.core.vec.call(null,sort_fn.call(null,(function (){var iter__4292__auto__ = ((function (sort_fn){
return (function efisef_app$components$book$book__GT_table_$_iter__24365(s__24366){
return (new cljs.core.LazySeq(null,((function (sort_fn){
return (function (){
var s__24366__$1 = s__24366;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24366__$1);
if(temp__5457__auto__){
var s__24366__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24366__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__24366__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__24368 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__24367 = (0);
while(true){
if((i__24367 < size__4291__auto__)){
var vec__24369 = cljs.core._nth.call(null,c__4290__auto__,i__24367);
var price = cljs.core.nth.call(null,vec__24369,(0),null);
var size = cljs.core.nth.call(null,vec__24369,(1),null);
cljs.core.chunk_append.call(null,b__24368,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"price","price",22129180),price,new cljs.core.Keyword(null,"size","size",1098693007),size], null));

var G__24375 = (i__24367 + (1));
i__24367 = G__24375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24368),efisef_app$components$book$book__GT_table_$_iter__24365.call(null,cljs.core.chunk_rest.call(null,s__24366__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24368),null);
}
} else {
var vec__24372 = cljs.core.first.call(null,s__24366__$2);
var price = cljs.core.nth.call(null,vec__24372,(0),null);
var size = cljs.core.nth.call(null,vec__24372,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"price","price",22129180),price,new cljs.core.Keyword(null,"size","size",1098693007),size], null),efisef_app$components$book$book__GT_table_$_iter__24365.call(null,cljs.core.rest.call(null,s__24366__$2)));
}
} else {
return null;
}
break;
}
});})(sort_fn))
,null,null));
});})(sort_fn))
;
return iter__4292__auto__.call(null,book);
})()));
});
efisef_app.components.book.side_component = (function efisef_app$components$book$side_component(side,book){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.book.title_style.call(null)], null),clojure.string.capitalize.call(null,cljs.core.name.call(null,side))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.utils.table.component,efisef_app.components.book.table_headers,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-selector","data-selector",-1633416245),efisef_app.utils.table.vec_selector.call(null,efisef_app.components.book.book__GT_table.call(null,side,book)),new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.count.call(null,book)], null),cljs.core.constantly.call(null,null)], null)], null);
});
efisef_app.components.book.sides_component = (function efisef_app$components$book$sides_component(p__24376){
var map__24377 = p__24376;
var map__24377__$1 = ((((!((map__24377 == null)))?(((((map__24377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24377):map__24377);
var asks = cljs.core.get.call(null,map__24377__$1,new cljs.core.Keyword(null,"asks","asks",1149982943));
var bids = cljs.core.get.call(null,map__24377__$1,new cljs.core.Keyword(null,"bids","bids",-1493194652));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.book.sides_style.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.book.asks_style.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.components.book.side_component,new cljs.core.Keyword(null,"asks","asks",1149982943),asks], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.book.bids_style.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.components.book.side_component,new cljs.core.Keyword(null,"bids","bids",-1493194652),bids], null)], null)], null);
});
efisef_app.components.book.component = (function efisef_app$components$book$component(state){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.book.component_style.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.components.book.info_component,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.utils.spacer.component,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.components.book.sides_component,state], null)], null);
});

//# sourceMappingURL=book.js.map?rel=1529689751105
