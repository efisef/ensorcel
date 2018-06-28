// Compiled by ClojureScript 1.10.238 {}
goog.provide('efisef_app.utils.table');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('cljss.reagent');
goog.require('cljss.core');
goog.require('efisef_app.utils');
if(typeof efisef_app.utils.table.max_cells !== 'undefined'){
} else {
efisef_app.utils.table.max_cells = (25);
}
efisef_app.utils.table.component_style = (function efisef_app$utils$table$component_style(){
return cljss.core.css.call(null,"efisef-app_utils_table__component-style",".efisef-app_utils_table__component-style{font-size:12px;width:100%;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.utils.table.header_style = (function efisef_app$utils$table$header_style(){
return cljss.core.css.call(null,"efisef-app_utils_table__header-style",".efisef-app_utils_table__header-style{border-bottom:2px solid #C1C1C1;height:30px;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.utils.table.head_style = (function efisef_app$utils$table$head_style(){
return cljss.core.css.call(null,"efisef-app_utils_table__head-style",".efisef-app_utils_table__head-style{text-align:center;justify-content:center;border:none;padding-top:5px;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.utils.table.navigation_style = (function efisef_app$utils$table$navigation_style(){
return cljss.core.css.call(null,"efisef-app_utils_table__navigation-style",".efisef-app_utils_table__navigation-style{display:flex;justify-content:space-evenly;}",cljs.core.PersistentVector.EMPTY);
});
efisef_app.utils.table.td = cljss.reagent.styled.call(null,"efisef-app_utils_table__td",".efisef-app_utils_table__td{min-width:200px;text-overflow:ellipsis;text-align:center;overflow:hidden;white-space:nowrap;padding:5px;border:1px solid #D3D3D3;}.efisef-app_utils_table__td:hover{overflow:visible;white-space:normal;height:auto;}",[],[],(function (p1__24333__24335__auto__,p2__24334__24336__auto__){
return cljs.core.apply.call(null,React.createElement,"td",cljs.core.clj__GT_js.call(null,p1__24333__24335__auto__),cljs.core.map.call(null,reagent.core.as_element,p2__24334__24336__auto__));
}));

efisef_app.utils.table.td.displayName = "efisef-app.utils.table.td";
efisef_app.utils.table.table = cljss.reagent.styled.call(null,"efisef-app_utils_table__table",".efisef-app_utils_table__table{table-layout:fixed;border-collapse:collapse;width:100%;border:1px solid #D3D3D3;}",[],[],(function (p1__24333__24335__auto__,p2__24334__24336__auto__){
return cljs.core.apply.call(null,React.createElement,"table",cljs.core.clj__GT_js.call(null,p1__24333__24335__auto__),cljs.core.map.call(null,reagent.core.as_element,p2__24334__24336__auto__));
}));

efisef_app.utils.table.table.displayName = "efisef-app.utils.table.table";
efisef_app.utils.table.tr = cljss.reagent.styled.call(null,"efisef-app_utils_table__tr",".efisef-app_utils_table__tr{background:var(--var-efisef-app_utils_table__tr-0);}.efisef-app_utils_table__tr:hover{cursor:pointer;background:#d5e9f7;}",[["--var-efisef-app_utils_table__tr-0",cljs.core.with_meta.call(null,(function (p1__24347_SHARP_){
if(cljs.core.odd_QMARK_.call(null,p1__24347_SHARP_)){
return "#EFEFEF";
} else {
return "#FFFFFF";
}
}),new cljs.core.Keyword(null,"row-num","row-num",-569895011))]],[],(function (p1__24333__24335__auto__,p2__24334__24336__auto__){
return cljs.core.apply.call(null,React.createElement,"tr",cljs.core.clj__GT_js.call(null,p1__24333__24335__auto__),cljs.core.map.call(null,reagent.core.as_element,p2__24334__24336__auto__));
}));

efisef_app.utils.table.tr.displayName = "efisef-app.utils.table.tr";
if(typeof efisef_app.utils.table.page !== 'undefined'){
} else {
efisef_app.utils.table.page = reagent.core.atom.call(null,(0));
}
efisef_app.utils.table.format_headers = (function efisef_app$utils$table$format_headers(headers){
return cljs.core.map.call(null,(function (title){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clojure.string.capitalize.call(null,cljs.core.name.call(null,title))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null));
}),headers);
});
efisef_app.utils.table.format_value = (function efisef_app$utils$table$format_value(value){
var G__24348 = value;
if(typeof value === 'number'){
return efisef_app.utils.round.call(null,G__24348);
} else {
return G__24348;
}
});
efisef_app.utils.table.format_row = (function efisef_app$utils$table$format_row(headers,click_fn,i,data){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.utils.table.tr,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-num","row-num",-569895011),i,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return click_fn.call(null,data);
})], null),cljs.core.map.call(null,(function (k){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.utils.table.td,efisef_app.utils.table.format_value.call(null,data.call(null,k))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null));
}),headers)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,data)], null));
});
efisef_app.utils.table.format_rows = (function efisef_app$utils$table$format_rows(headers,on_row_click,data){
return cljs.core.map.call(null,cljs.core.partial.call(null,efisef_app.utils.table.format_row,headers,on_row_click),cljs.core.range.call(null),data);
});
efisef_app.utils.table.header = (function efisef_app$utils$table$header(headers,child){
var cells = cljs.core.conj.call(null,cljs.core.mapv.call(null,(function (k){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.utils.table.head_style.call(null)], null),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null));
}),cljs.core.drop.call(null,(1),headers)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.utils.table.head_style.call(null)], null),child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"text"], null)));
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.vector,new cljs.core.Keyword(null,"tr","tr",-1424774646)),cells);
});
efisef_app.utils.table.navigation = (function efisef_app$utils$table$navigation(total){
var pages = Math.ceil((total / efisef_app.utils.table.max_cells));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.utils.table.navigation_style.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"<<",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (pages){
return (function (){
return cljs.core.reset_BANG_.call(null,efisef_app.utils.table.page,(function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (cljs.core.deref.call(null,efisef_app.utils.table.page) - (1));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})());
});})(pages))
], null)], null),["Page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.call(null,efisef_app.utils.table.page) + (1)))," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pages)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),">>",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (pages){
return (function (){
return cljs.core.reset_BANG_.call(null,efisef_app.utils.table.page,(function (){var x__4009__auto__ = (pages - (1));
var y__4010__auto__ = (cljs.core.deref.call(null,efisef_app.utils.table.page) + (1));
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})());
});})(pages))
], null)], null)], null);
});
efisef_app.utils.table.vec_selector = (function efisef_app$utils$table$vec_selector(items){
return (function (page){
return cljs.core.subvec.call(null,items,(page * efisef_app.utils.table.max_cells),(function (){var x__4009__auto__ = cljs.core.count.call(null,items);
var y__4010__auto__ = ((page + (1)) * efisef_app.utils.table.max_cells);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})());
});
});
efisef_app.utils.table.component = (function efisef_app$utils$table$component(headers,p__24349,on_row_click){
var map__24350 = p__24349;
var map__24350__$1 = ((((!((map__24350 == null)))?(((((map__24350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24350):map__24350);
var data_selector = cljs.core.get.call(null,map__24350__$1,new cljs.core.Keyword(null,"data-selector","data-selector",-1633416245));
var total = cljs.core.get.call(null,map__24350__$1,new cljs.core.Keyword(null,"total","total",1916810418));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.utils.table.component_style.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.utils.table.table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.utils.table.header,headers,efisef_app.utils.table.navigation.call(null,total)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.utils.table.header_style.call(null)], null),efisef_app.utils.table.format_headers.call(null,headers)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"headers"], null)),efisef_app.utils.table.format_rows.call(null,headers,on_row_click,cljs.core.take.call(null,efisef_app.utils.table.max_cells,data_selector.call(null,cljs.core.deref.call(null,efisef_app.utils.table.page)))))], null)], null)], null);
});

//# sourceMappingURL=table.js.map?rel=1529689750723
