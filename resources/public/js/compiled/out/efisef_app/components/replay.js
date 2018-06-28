// Compiled by ClojureScript 1.10.238 {}
goog.provide('efisef_app.components.replay');
goog.require('cljs.core');
goog.require('efisef_app.components.book');
goog.require('efisef_app.components.bot_state');
goog.require('efisef_app.components.feed_update');
goog.require('reagent.core');
goog.require('cljss.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
efisef_app.components.replay.navigation_style = (function efisef_app$components$replay$navigation_style(){
return cljss.core.css.call(null,"efisef-app_components_replay__navigation-style",".efisef-app_components_replay__navigation-style{margin-left:10px;margin-right:10px;}",cljs.core.PersistentVector.EMPTY);
});
if(typeof efisef_app.components.replay.state !== 'undefined'){
} else {
efisef_app.components.replay.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(1529325000000000),new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"binance","binance",-380023632),new cljs.core.Keyword(null,"event","event",301435442),"modify",new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"usdt","usdt",999447714),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"btc","btc",-588471546),new cljs.core.Keyword(null,"asks","asks",1149982943),new cljs.core.PersistentArrayMap(null, 1, ["0.3",0.0], null),new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentArrayMap(null, 2, ["1.44",0.123423423,"10000.44",1.123], null)], null),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(1529325000000000),new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"binance","binance",-380023632),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"usdt","usdt",999447714),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"btc","btc",-588471546),new cljs.core.Keyword(null,"asks","asks",1149982943),new cljs.core.PersistentArrayMap(null, 3, ["1.23",1.0,"1.34",2.0,"0.3",0.0], null),new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentArrayMap(null, 2, ["1.44",0.123423423,"10000.44",1.123], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"state","state",-1988618099)], null),(123123123123132)])], null));
}
if(typeof efisef_app.components.replay.step !== 'undefined'){
} else {
efisef_app.components.replay.step = reagent.core.atom.call(null,(1));
}
efisef_app.components.replay.get_app_state = (function efisef_app$components$replay$get_app_state(){
var c__25699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25699__auto__){
return (function (){
var f__25700__auto__ = (function (){var switch__25676__auto__ = ((function (c__25699__auto__){
return (function (state_31848){
var state_val_31849 = (state_31848[(1)]);
if((state_val_31849 === (1))){
var inst_31839 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_31840 = [false];
var inst_31841 = cljs.core.PersistentHashMap.fromArrays(inst_31839,inst_31840);
var inst_31842 = cljs_http.client.get.call(null,"http://localhost:8080",inst_31841);
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31848__$1,(2),inst_31842);
} else {
if((state_val_31849 === (2))){
var inst_31844 = (state_31848[(2)]);
var inst_31845 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31844);
var inst_31846 = cljs.core.reset_BANG_.call(null,efisef_app.components.replay.state,inst_31845);
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31848__$1,inst_31846);
} else {
return null;
}
}
});})(c__25699__auto__))
;
return ((function (switch__25676__auto__,c__25699__auto__){
return (function() {
var efisef_app$components$replay$get_app_state_$_state_machine__25677__auto__ = null;
var efisef_app$components$replay$get_app_state_$_state_machine__25677__auto____0 = (function (){
var statearr_31850 = [null,null,null,null,null,null,null];
(statearr_31850[(0)] = efisef_app$components$replay$get_app_state_$_state_machine__25677__auto__);

(statearr_31850[(1)] = (1));

return statearr_31850;
});
var efisef_app$components$replay$get_app_state_$_state_machine__25677__auto____1 = (function (state_31848){
while(true){
var ret_value__25678__auto__ = (function (){try{while(true){
var result__25679__auto__ = switch__25676__auto__.call(null,state_31848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25679__auto__;
}
break;
}
}catch (e31851){if((e31851 instanceof Object)){
var ex__25680__auto__ = e31851;
var statearr_31852_31854 = state_31848;
(statearr_31852_31854[(5)] = ex__25680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31855 = state_31848;
state_31848 = G__31855;
continue;
} else {
return ret_value__25678__auto__;
}
break;
}
});
efisef_app$components$replay$get_app_state_$_state_machine__25677__auto__ = function(state_31848){
switch(arguments.length){
case 0:
return efisef_app$components$replay$get_app_state_$_state_machine__25677__auto____0.call(this);
case 1:
return efisef_app$components$replay$get_app_state_$_state_machine__25677__auto____1.call(this,state_31848);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
efisef_app$components$replay$get_app_state_$_state_machine__25677__auto__.cljs$core$IFn$_invoke$arity$0 = efisef_app$components$replay$get_app_state_$_state_machine__25677__auto____0;
efisef_app$components$replay$get_app_state_$_state_machine__25677__auto__.cljs$core$IFn$_invoke$arity$1 = efisef_app$components$replay$get_app_state_$_state_machine__25677__auto____1;
return efisef_app$components$replay$get_app_state_$_state_machine__25677__auto__;
})()
;})(switch__25676__auto__,c__25699__auto__))
})();
var state__25701__auto__ = (function (){var statearr_31853 = f__25700__auto__.call(null);
(statearr_31853[(6)] = c__25699__auto__);

return statearr_31853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25701__auto__);
});})(c__25699__auto__))
);

return c__25699__auto__;
});
efisef_app.components.replay.seek_BANG_ = (function efisef_app$components$replay$seek_BANG_(step){
var c__25699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25699__auto__){
return (function (){
var f__25700__auto__ = (function (){var switch__25676__auto__ = ((function (c__25699__auto__){
return (function (state_31868){
var state_val_31869 = (state_31868[(1)]);
if((state_val_31869 === (1))){
var inst_31856 = ["http://localhost:8080/seek/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(step)].join('');
var inst_31857 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_31858 = [false];
var inst_31859 = cljs.core.PersistentHashMap.fromArrays(inst_31857,inst_31858);
var inst_31860 = cljs_http.client.post.call(null,inst_31856,inst_31859);
var state_31868__$1 = state_31868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31868__$1,(2),inst_31860);
} else {
if((state_val_31869 === (2))){
var inst_31862 = (state_31868[(2)]);
var inst_31863 = cljs.core.deref.call(null,efisef_app.components.replay.state);
var inst_31864 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31862);
var inst_31865 = cljs.core.merge.call(null,inst_31863,inst_31864);
var inst_31866 = cljs.core.reset_BANG_.call(null,efisef_app.components.replay.state,inst_31865);
var state_31868__$1 = state_31868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31868__$1,inst_31866);
} else {
return null;
}
}
});})(c__25699__auto__))
;
return ((function (switch__25676__auto__,c__25699__auto__){
return (function() {
var efisef_app$components$replay$seek_BANG__$_state_machine__25677__auto__ = null;
var efisef_app$components$replay$seek_BANG__$_state_machine__25677__auto____0 = (function (){
var statearr_31870 = [null,null,null,null,null,null,null];
(statearr_31870[(0)] = efisef_app$components$replay$seek_BANG__$_state_machine__25677__auto__);

(statearr_31870[(1)] = (1));

return statearr_31870;
});
var efisef_app$components$replay$seek_BANG__$_state_machine__25677__auto____1 = (function (state_31868){
while(true){
var ret_value__25678__auto__ = (function (){try{while(true){
var result__25679__auto__ = switch__25676__auto__.call(null,state_31868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25679__auto__;
}
break;
}
}catch (e31871){if((e31871 instanceof Object)){
var ex__25680__auto__ = e31871;
var statearr_31872_31874 = state_31868;
(statearr_31872_31874[(5)] = ex__25680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31875 = state_31868;
state_31868 = G__31875;
continue;
} else {
return ret_value__25678__auto__;
}
break;
}
});
efisef_app$components$replay$seek_BANG__$_state_machine__25677__auto__ = function(state_31868){
switch(arguments.length){
case 0:
return efisef_app$components$replay$seek_BANG__$_state_machine__25677__auto____0.call(this);
case 1:
return efisef_app$components$replay$seek_BANG__$_state_machine__25677__auto____1.call(this,state_31868);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
efisef_app$components$replay$seek_BANG__$_state_machine__25677__auto__.cljs$core$IFn$_invoke$arity$0 = efisef_app$components$replay$seek_BANG__$_state_machine__25677__auto____0;
efisef_app$components$replay$seek_BANG__$_state_machine__25677__auto__.cljs$core$IFn$_invoke$arity$1 = efisef_app$components$replay$seek_BANG__$_state_machine__25677__auto____1;
return efisef_app$components$replay$seek_BANG__$_state_machine__25677__auto__;
})()
;})(switch__25676__auto__,c__25699__auto__))
})();
var state__25701__auto__ = (function (){var statearr_31873 = f__25700__auto__.call(null);
(statearr_31873[(6)] = c__25699__auto__);

return statearr_31873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25701__auto__);
});})(c__25699__auto__))
);

return c__25699__auto__;
});
efisef_app.components.replay.navigation_component = (function efisef_app$components$replay$navigation_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),efisef_app.components.replay.navigation_style.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"< Prev",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return efisef_app.components.replay.seek_BANG_.call(null,(- cljs.core.deref.call(null,efisef_app.components.replay.step)));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,efisef_app.components.replay.step),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31876_SHARP_){
return cljs.core.reset_BANG_.call(null,efisef_app.components.replay.step,p1__31876_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Next >",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return efisef_app.components.replay.seek_BANG_.call(null,cljs.core.deref.call(null,efisef_app.components.replay.step));
})], null)], null)], null);
});
efisef_app.components.replay.component = (function efisef_app$components$replay$component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.components.replay.navigation_component], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.components.feed_update.component,new cljs.core.Keyword(null,"update","update",1045576396).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,efisef_app.components.replay.state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efisef_app.components.bot_state.component,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,efisef_app.components.replay.state))], null)], null)], null);
});

//# sourceMappingURL=replay.js.map?rel=1529692973413
