// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5457__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5457__auto__)){
var req = temp__5457__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__23515){
var vec__23516 = p__23515;
var k = cljs.core.nth.call(null,vec__23516,(0),null);
var v = cljs.core.nth.call(null,vec__23516,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__23519 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__23519)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__23519)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__23519)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__23519)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__23519)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__23519)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23519)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__23520){
var map__23521 = p__23520;
var map__23521__$1 = ((((!((map__23521 == null)))?(((((map__23521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23521):map__23521);
var request = map__23521__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__23521__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__23521__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__23521__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__23523 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__23523,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__23523,response_type);

G__23523.setTimeoutInterval(timeout);

G__23523.setWithCredentials(send_credentials);

return G__23523;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__23524){
var map__23525 = p__23524;
var map__23525__$1 = ((((!((map__23525 == null)))?(((((map__23525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23525):map__23525);
var request = map__23525__$1;
var request_method = cljs.core.get.call(null,map__23525__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__23525__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__23525__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__23525__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__23525__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__23525__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__3922__auto__ = request_method;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__23525,map__23525__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr,map__23525,map__23525__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_23549 = ((function (channel,request_url,method,headers__$1,xhr,map__23525,map__23525__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr,map__23525,map__23525__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__23527_23550 = xhr;
G__23527_23550.setProgressEventsEnabled(true);

G__23527_23550.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_23549,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__23527_23550.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_23549,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__23371__auto___23551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23371__auto___23551,channel,request_url,method,headers__$1,xhr,map__23525,map__23525__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__23372__auto__ = (function (){var switch__23348__auto__ = ((function (c__23371__auto___23551,channel,request_url,method,headers__$1,xhr,map__23525,map__23525__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_23538){
var state_val_23539 = (state_23538[(1)]);
if((state_val_23539 === (1))){
var state_23538__$1 = state_23538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23538__$1,(2),cancel);
} else {
if((state_val_23539 === (2))){
var inst_23529 = (state_23538[(2)]);
var inst_23530 = xhr.isComplete();
var inst_23531 = cljs.core.not.call(null,inst_23530);
var state_23538__$1 = (function (){var statearr_23540 = state_23538;
(statearr_23540[(7)] = inst_23529);

return statearr_23540;
})();
if(inst_23531){
var statearr_23541_23552 = state_23538__$1;
(statearr_23541_23552[(1)] = (3));

} else {
var statearr_23542_23553 = state_23538__$1;
(statearr_23542_23553[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (3))){
var inst_23533 = xhr.abort();
var state_23538__$1 = state_23538;
var statearr_23543_23554 = state_23538__$1;
(statearr_23543_23554[(2)] = inst_23533);

(statearr_23543_23554[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (4))){
var state_23538__$1 = state_23538;
var statearr_23544_23555 = state_23538__$1;
(statearr_23544_23555[(2)] = null);

(statearr_23544_23555[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (5))){
var inst_23536 = (state_23538[(2)]);
var state_23538__$1 = state_23538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23538__$1,inst_23536);
} else {
return null;
}
}
}
}
}
});})(c__23371__auto___23551,channel,request_url,method,headers__$1,xhr,map__23525,map__23525__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__23348__auto__,c__23371__auto___23551,channel,request_url,method,headers__$1,xhr,map__23525,map__23525__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__23349__auto__ = null;
var cljs_http$core$xhr_$_state_machine__23349__auto____0 = (function (){
var statearr_23545 = [null,null,null,null,null,null,null,null];
(statearr_23545[(0)] = cljs_http$core$xhr_$_state_machine__23349__auto__);

(statearr_23545[(1)] = (1));

return statearr_23545;
});
var cljs_http$core$xhr_$_state_machine__23349__auto____1 = (function (state_23538){
while(true){
var ret_value__23350__auto__ = (function (){try{while(true){
var result__23351__auto__ = switch__23348__auto__.call(null,state_23538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23351__auto__;
}
break;
}
}catch (e23546){if((e23546 instanceof Object)){
var ex__23352__auto__ = e23546;
var statearr_23547_23556 = state_23538;
(statearr_23547_23556[(5)] = ex__23352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23557 = state_23538;
state_23538 = G__23557;
continue;
} else {
return ret_value__23350__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__23349__auto__ = function(state_23538){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__23349__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__23349__auto____1.call(this,state_23538);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__23349__auto____0;
cljs_http$core$xhr_$_state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__23349__auto____1;
return cljs_http$core$xhr_$_state_machine__23349__auto__;
})()
;})(switch__23348__auto__,c__23371__auto___23551,channel,request_url,method,headers__$1,xhr,map__23525,map__23525__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__23373__auto__ = (function (){var statearr_23548 = f__23372__auto__.call(null);
(statearr_23548[(6)] = c__23371__auto___23551);

return statearr_23548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23373__auto__);
});})(c__23371__auto___23551,channel,request_url,method,headers__$1,xhr,map__23525,map__23525__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__23558){
var map__23559 = p__23558;
var map__23559__$1 = ((((!((map__23559 == null)))?(((((map__23559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23559):map__23559);
var request = map__23559__$1;
var timeout = cljs.core.get.call(null,map__23559__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__23559__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__23559__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__23559__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_23572 = jsonp.send(null,((function (channel,jsonp,map__23559,map__23559__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__23559,map__23559__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__23559,map__23559__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__23559,map__23559__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_23572], null));

if(cljs.core.truth_(cancel)){
var c__23371__auto___23573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23371__auto___23573,req_23572,channel,jsonp,map__23559,map__23559__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__23372__auto__ = (function (){var switch__23348__auto__ = ((function (c__23371__auto___23573,req_23572,channel,jsonp,map__23559,map__23559__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_23565){
var state_val_23566 = (state_23565[(1)]);
if((state_val_23566 === (1))){
var state_23565__$1 = state_23565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23565__$1,(2),cancel);
} else {
if((state_val_23566 === (2))){
var inst_23562 = (state_23565[(2)]);
var inst_23563 = jsonp.cancel(req_23572);
var state_23565__$1 = (function (){var statearr_23567 = state_23565;
(statearr_23567[(7)] = inst_23562);

return statearr_23567;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23565__$1,inst_23563);
} else {
return null;
}
}
});})(c__23371__auto___23573,req_23572,channel,jsonp,map__23559,map__23559__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__23348__auto__,c__23371__auto___23573,req_23572,channel,jsonp,map__23559,map__23559__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__23349__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__23349__auto____0 = (function (){
var statearr_23568 = [null,null,null,null,null,null,null,null];
(statearr_23568[(0)] = cljs_http$core$jsonp_$_state_machine__23349__auto__);

(statearr_23568[(1)] = (1));

return statearr_23568;
});
var cljs_http$core$jsonp_$_state_machine__23349__auto____1 = (function (state_23565){
while(true){
var ret_value__23350__auto__ = (function (){try{while(true){
var result__23351__auto__ = switch__23348__auto__.call(null,state_23565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23351__auto__;
}
break;
}
}catch (e23569){if((e23569 instanceof Object)){
var ex__23352__auto__ = e23569;
var statearr_23570_23574 = state_23565;
(statearr_23570_23574[(5)] = ex__23352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23575 = state_23565;
state_23565 = G__23575;
continue;
} else {
return ret_value__23350__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__23349__auto__ = function(state_23565){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__23349__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__23349__auto____1.call(this,state_23565);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__23349__auto____0;
cljs_http$core$jsonp_$_state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__23349__auto____1;
return cljs_http$core$jsonp_$_state_machine__23349__auto__;
})()
;})(switch__23348__auto__,c__23371__auto___23573,req_23572,channel,jsonp,map__23559,map__23559__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__23373__auto__ = (function (){var statearr_23571 = f__23372__auto__.call(null);
(statearr_23571[(6)] = c__23371__auto___23573);

return statearr_23571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23373__auto__);
});})(c__23371__auto___23573,req_23572,channel,jsonp,map__23559,map__23559__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__23576){
var map__23577 = p__23576;
var map__23577__$1 = ((((!((map__23577 == null)))?(((((map__23577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23577):map__23577);
var request = map__23577__$1;
var request_method = cljs.core.get.call(null,map__23577__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map?rel=1530194940631
