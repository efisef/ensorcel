// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e27375){if((e27375 instanceof Error)){
var e = e27375;
return "Error: Unable to stringify";
} else {
throw e27375;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__27378 = arguments.length;
switch (G__27378) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__27376_SHARP_){
if(typeof p1__27376_SHARP_ === 'string'){
return p1__27376_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__27376_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27381 = arguments.length;
var i__4500__auto___27382 = (0);
while(true){
if((i__4500__auto___27382 < len__4499__auto___27381)){
args__4502__auto__.push((arguments[i__4500__auto___27382]));

var G__27383 = (i__4500__auto___27382 + (1));
i__4500__auto___27382 = G__27383;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq27380){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27380));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27385 = arguments.length;
var i__4500__auto___27386 = (0);
while(true){
if((i__4500__auto___27386 < len__4499__auto___27385)){
args__4502__auto__.push((arguments[i__4500__auto___27386]));

var G__27387 = (i__4500__auto___27386 + (1));
i__4500__auto___27386 = G__27387;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq27384){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27384));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27388){
var map__27389 = p__27388;
var map__27389__$1 = ((((!((map__27389 == null)))?(((((map__27389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27389):map__27389);
var message = cljs.core.get.call(null,map__27389__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27389__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23371__auto___27468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23371__auto___27468,ch){
return (function (){
var f__23372__auto__ = (function (){var switch__23348__auto__ = ((function (c__23371__auto___27468,ch){
return (function (state_27440){
var state_val_27441 = (state_27440[(1)]);
if((state_val_27441 === (7))){
var inst_27436 = (state_27440[(2)]);
var state_27440__$1 = state_27440;
var statearr_27442_27469 = state_27440__$1;
(statearr_27442_27469[(2)] = inst_27436);

(statearr_27442_27469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (1))){
var state_27440__$1 = state_27440;
var statearr_27443_27470 = state_27440__$1;
(statearr_27443_27470[(2)] = null);

(statearr_27443_27470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (4))){
var inst_27393 = (state_27440[(7)]);
var inst_27393__$1 = (state_27440[(2)]);
var state_27440__$1 = (function (){var statearr_27444 = state_27440;
(statearr_27444[(7)] = inst_27393__$1);

return statearr_27444;
})();
if(cljs.core.truth_(inst_27393__$1)){
var statearr_27445_27471 = state_27440__$1;
(statearr_27445_27471[(1)] = (5));

} else {
var statearr_27446_27472 = state_27440__$1;
(statearr_27446_27472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (15))){
var inst_27400 = (state_27440[(8)]);
var inst_27415 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27400);
var inst_27416 = cljs.core.first.call(null,inst_27415);
var inst_27417 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27416);
var inst_27418 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27417)].join('');
var inst_27419 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27418);
var state_27440__$1 = state_27440;
var statearr_27447_27473 = state_27440__$1;
(statearr_27447_27473[(2)] = inst_27419);

(statearr_27447_27473[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (13))){
var inst_27424 = (state_27440[(2)]);
var state_27440__$1 = state_27440;
var statearr_27448_27474 = state_27440__$1;
(statearr_27448_27474[(2)] = inst_27424);

(statearr_27448_27474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (6))){
var state_27440__$1 = state_27440;
var statearr_27449_27475 = state_27440__$1;
(statearr_27449_27475[(2)] = null);

(statearr_27449_27475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (17))){
var inst_27422 = (state_27440[(2)]);
var state_27440__$1 = state_27440;
var statearr_27450_27476 = state_27440__$1;
(statearr_27450_27476[(2)] = inst_27422);

(statearr_27450_27476[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (3))){
var inst_27438 = (state_27440[(2)]);
var state_27440__$1 = state_27440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27440__$1,inst_27438);
} else {
if((state_val_27441 === (12))){
var inst_27399 = (state_27440[(9)]);
var inst_27413 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27399,opts);
var state_27440__$1 = state_27440;
if(cljs.core.truth_(inst_27413)){
var statearr_27451_27477 = state_27440__$1;
(statearr_27451_27477[(1)] = (15));

} else {
var statearr_27452_27478 = state_27440__$1;
(statearr_27452_27478[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (2))){
var state_27440__$1 = state_27440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27440__$1,(4),ch);
} else {
if((state_val_27441 === (11))){
var inst_27400 = (state_27440[(8)]);
var inst_27405 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27406 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27400);
var inst_27407 = cljs.core.async.timeout.call(null,(1000));
var inst_27408 = [inst_27406,inst_27407];
var inst_27409 = (new cljs.core.PersistentVector(null,2,(5),inst_27405,inst_27408,null));
var state_27440__$1 = state_27440;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27440__$1,(14),inst_27409);
} else {
if((state_val_27441 === (9))){
var inst_27400 = (state_27440[(8)]);
var inst_27426 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27427 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27400);
var inst_27428 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27427);
var inst_27429 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27428)].join('');
var inst_27430 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27429);
var state_27440__$1 = (function (){var statearr_27453 = state_27440;
(statearr_27453[(10)] = inst_27426);

return statearr_27453;
})();
var statearr_27454_27479 = state_27440__$1;
(statearr_27454_27479[(2)] = inst_27430);

(statearr_27454_27479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (5))){
var inst_27393 = (state_27440[(7)]);
var inst_27395 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27396 = (new cljs.core.PersistentArrayMap(null,2,inst_27395,null));
var inst_27397 = (new cljs.core.PersistentHashSet(null,inst_27396,null));
var inst_27398 = figwheel.client.focus_msgs.call(null,inst_27397,inst_27393);
var inst_27399 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27398);
var inst_27400 = cljs.core.first.call(null,inst_27398);
var inst_27401 = figwheel.client.autoload_QMARK_.call(null);
var state_27440__$1 = (function (){var statearr_27455 = state_27440;
(statearr_27455[(9)] = inst_27399);

(statearr_27455[(8)] = inst_27400);

return statearr_27455;
})();
if(cljs.core.truth_(inst_27401)){
var statearr_27456_27480 = state_27440__$1;
(statearr_27456_27480[(1)] = (8));

} else {
var statearr_27457_27481 = state_27440__$1;
(statearr_27457_27481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (14))){
var inst_27411 = (state_27440[(2)]);
var state_27440__$1 = state_27440;
var statearr_27458_27482 = state_27440__$1;
(statearr_27458_27482[(2)] = inst_27411);

(statearr_27458_27482[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (16))){
var state_27440__$1 = state_27440;
var statearr_27459_27483 = state_27440__$1;
(statearr_27459_27483[(2)] = null);

(statearr_27459_27483[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (10))){
var inst_27432 = (state_27440[(2)]);
var state_27440__$1 = (function (){var statearr_27460 = state_27440;
(statearr_27460[(11)] = inst_27432);

return statearr_27460;
})();
var statearr_27461_27484 = state_27440__$1;
(statearr_27461_27484[(2)] = null);

(statearr_27461_27484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (8))){
var inst_27399 = (state_27440[(9)]);
var inst_27403 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27399,opts);
var state_27440__$1 = state_27440;
if(cljs.core.truth_(inst_27403)){
var statearr_27462_27485 = state_27440__$1;
(statearr_27462_27485[(1)] = (11));

} else {
var statearr_27463_27486 = state_27440__$1;
(statearr_27463_27486[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23371__auto___27468,ch))
;
return ((function (switch__23348__auto__,c__23371__auto___27468,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23349__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23349__auto____0 = (function (){
var statearr_27464 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27464[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23349__auto__);

(statearr_27464[(1)] = (1));

return statearr_27464;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23349__auto____1 = (function (state_27440){
while(true){
var ret_value__23350__auto__ = (function (){try{while(true){
var result__23351__auto__ = switch__23348__auto__.call(null,state_27440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23351__auto__;
}
break;
}
}catch (e27465){if((e27465 instanceof Object)){
var ex__23352__auto__ = e27465;
var statearr_27466_27487 = state_27440;
(statearr_27466_27487[(5)] = ex__23352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27488 = state_27440;
state_27440 = G__27488;
continue;
} else {
return ret_value__23350__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23349__auto__ = function(state_27440){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23349__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23349__auto____1.call(this,state_27440);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23349__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23349__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23349__auto__;
})()
;})(switch__23348__auto__,c__23371__auto___27468,ch))
})();
var state__23373__auto__ = (function (){var statearr_27467 = f__23372__auto__.call(null);
(statearr_27467[(6)] = c__23371__auto___27468);

return statearr_27467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23373__auto__);
});})(c__23371__auto___27468,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27489_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27489_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27493 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27493){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_27491 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_27492 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_27491,_STAR_print_fn_STAR_27492,sb,base_path_27493){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_27491,_STAR_print_fn_STAR_27492,sb,base_path_27493))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27492;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27491;
}}catch (e27490){if((e27490 instanceof Error)){
var e = e27490;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27493], null));
} else {
var e = e27490;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27493))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27494){
var map__27495 = p__27494;
var map__27495__$1 = ((((!((map__27495 == null)))?(((((map__27495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27495):map__27495);
var opts = map__27495__$1;
var build_id = cljs.core.get.call(null,map__27495__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27495,map__27495__$1,opts,build_id){
return (function (p__27497){
var vec__27498 = p__27497;
var seq__27499 = cljs.core.seq.call(null,vec__27498);
var first__27500 = cljs.core.first.call(null,seq__27499);
var seq__27499__$1 = cljs.core.next.call(null,seq__27499);
var map__27501 = first__27500;
var map__27501__$1 = ((((!((map__27501 == null)))?(((((map__27501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27501):map__27501);
var msg = map__27501__$1;
var msg_name = cljs.core.get.call(null,map__27501__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27499__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27498,seq__27499,first__27500,seq__27499__$1,map__27501,map__27501__$1,msg,msg_name,_,map__27495,map__27495__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27498,seq__27499,first__27500,seq__27499__$1,map__27501,map__27501__$1,msg,msg_name,_,map__27495,map__27495__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27495,map__27495__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27503){
var vec__27504 = p__27503;
var seq__27505 = cljs.core.seq.call(null,vec__27504);
var first__27506 = cljs.core.first.call(null,seq__27505);
var seq__27505__$1 = cljs.core.next.call(null,seq__27505);
var map__27507 = first__27506;
var map__27507__$1 = ((((!((map__27507 == null)))?(((((map__27507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27507):map__27507);
var msg = map__27507__$1;
var msg_name = cljs.core.get.call(null,map__27507__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27505__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27509){
var map__27510 = p__27509;
var map__27510__$1 = ((((!((map__27510 == null)))?(((((map__27510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27510):map__27510);
var on_compile_warning = cljs.core.get.call(null,map__27510__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27510__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27510,map__27510__$1,on_compile_warning,on_compile_fail){
return (function (p__27512){
var vec__27513 = p__27512;
var seq__27514 = cljs.core.seq.call(null,vec__27513);
var first__27515 = cljs.core.first.call(null,seq__27514);
var seq__27514__$1 = cljs.core.next.call(null,seq__27514);
var map__27516 = first__27515;
var map__27516__$1 = ((((!((map__27516 == null)))?(((((map__27516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27516):map__27516);
var msg = map__27516__$1;
var msg_name = cljs.core.get.call(null,map__27516__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27514__$1;
var pred__27518 = cljs.core._EQ_;
var expr__27519 = msg_name;
if(cljs.core.truth_(pred__27518.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27519))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27518.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27519))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27510,map__27510__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23371__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23372__auto__ = (function (){var switch__23348__auto__ = ((function (c__23371__auto__,msg_hist,msg_names,msg){
return (function (state_27608){
var state_val_27609 = (state_27608[(1)]);
if((state_val_27609 === (7))){
var inst_27528 = (state_27608[(2)]);
var state_27608__$1 = state_27608;
if(cljs.core.truth_(inst_27528)){
var statearr_27610_27657 = state_27608__$1;
(statearr_27610_27657[(1)] = (8));

} else {
var statearr_27611_27658 = state_27608__$1;
(statearr_27611_27658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (20))){
var inst_27602 = (state_27608[(2)]);
var state_27608__$1 = state_27608;
var statearr_27612_27659 = state_27608__$1;
(statearr_27612_27659[(2)] = inst_27602);

(statearr_27612_27659[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (27))){
var inst_27598 = (state_27608[(2)]);
var state_27608__$1 = state_27608;
var statearr_27613_27660 = state_27608__$1;
(statearr_27613_27660[(2)] = inst_27598);

(statearr_27613_27660[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (1))){
var inst_27521 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27608__$1 = state_27608;
if(cljs.core.truth_(inst_27521)){
var statearr_27614_27661 = state_27608__$1;
(statearr_27614_27661[(1)] = (2));

} else {
var statearr_27615_27662 = state_27608__$1;
(statearr_27615_27662[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (24))){
var inst_27600 = (state_27608[(2)]);
var state_27608__$1 = state_27608;
var statearr_27616_27663 = state_27608__$1;
(statearr_27616_27663[(2)] = inst_27600);

(statearr_27616_27663[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (4))){
var inst_27606 = (state_27608[(2)]);
var state_27608__$1 = state_27608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27608__$1,inst_27606);
} else {
if((state_val_27609 === (15))){
var inst_27604 = (state_27608[(2)]);
var state_27608__$1 = state_27608;
var statearr_27617_27664 = state_27608__$1;
(statearr_27617_27664[(2)] = inst_27604);

(statearr_27617_27664[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (21))){
var inst_27557 = (state_27608[(2)]);
var inst_27558 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27559 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27558);
var state_27608__$1 = (function (){var statearr_27618 = state_27608;
(statearr_27618[(7)] = inst_27557);

return statearr_27618;
})();
var statearr_27619_27665 = state_27608__$1;
(statearr_27619_27665[(2)] = inst_27559);

(statearr_27619_27665[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (31))){
var inst_27587 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27608__$1 = state_27608;
if(cljs.core.truth_(inst_27587)){
var statearr_27620_27666 = state_27608__$1;
(statearr_27620_27666[(1)] = (34));

} else {
var statearr_27621_27667 = state_27608__$1;
(statearr_27621_27667[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (32))){
var inst_27596 = (state_27608[(2)]);
var state_27608__$1 = state_27608;
var statearr_27622_27668 = state_27608__$1;
(statearr_27622_27668[(2)] = inst_27596);

(statearr_27622_27668[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (33))){
var inst_27583 = (state_27608[(2)]);
var inst_27584 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27585 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27584);
var state_27608__$1 = (function (){var statearr_27623 = state_27608;
(statearr_27623[(8)] = inst_27583);

return statearr_27623;
})();
var statearr_27624_27669 = state_27608__$1;
(statearr_27624_27669[(2)] = inst_27585);

(statearr_27624_27669[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (13))){
var inst_27542 = figwheel.client.heads_up.clear.call(null);
var state_27608__$1 = state_27608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27608__$1,(16),inst_27542);
} else {
if((state_val_27609 === (22))){
var inst_27563 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27564 = figwheel.client.heads_up.append_warning_message.call(null,inst_27563);
var state_27608__$1 = state_27608;
var statearr_27625_27670 = state_27608__$1;
(statearr_27625_27670[(2)] = inst_27564);

(statearr_27625_27670[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (36))){
var inst_27594 = (state_27608[(2)]);
var state_27608__$1 = state_27608;
var statearr_27626_27671 = state_27608__$1;
(statearr_27626_27671[(2)] = inst_27594);

(statearr_27626_27671[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (29))){
var inst_27574 = (state_27608[(2)]);
var inst_27575 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27576 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27575);
var state_27608__$1 = (function (){var statearr_27627 = state_27608;
(statearr_27627[(9)] = inst_27574);

return statearr_27627;
})();
var statearr_27628_27672 = state_27608__$1;
(statearr_27628_27672[(2)] = inst_27576);

(statearr_27628_27672[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (6))){
var inst_27523 = (state_27608[(10)]);
var state_27608__$1 = state_27608;
var statearr_27629_27673 = state_27608__$1;
(statearr_27629_27673[(2)] = inst_27523);

(statearr_27629_27673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (28))){
var inst_27570 = (state_27608[(2)]);
var inst_27571 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27572 = figwheel.client.heads_up.display_warning.call(null,inst_27571);
var state_27608__$1 = (function (){var statearr_27630 = state_27608;
(statearr_27630[(11)] = inst_27570);

return statearr_27630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27608__$1,(29),inst_27572);
} else {
if((state_val_27609 === (25))){
var inst_27568 = figwheel.client.heads_up.clear.call(null);
var state_27608__$1 = state_27608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27608__$1,(28),inst_27568);
} else {
if((state_val_27609 === (34))){
var inst_27589 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27608__$1 = state_27608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27608__$1,(37),inst_27589);
} else {
if((state_val_27609 === (17))){
var inst_27548 = (state_27608[(2)]);
var inst_27549 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27550 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27549);
var state_27608__$1 = (function (){var statearr_27631 = state_27608;
(statearr_27631[(12)] = inst_27548);

return statearr_27631;
})();
var statearr_27632_27674 = state_27608__$1;
(statearr_27632_27674[(2)] = inst_27550);

(statearr_27632_27674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (3))){
var inst_27540 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27608__$1 = state_27608;
if(cljs.core.truth_(inst_27540)){
var statearr_27633_27675 = state_27608__$1;
(statearr_27633_27675[(1)] = (13));

} else {
var statearr_27634_27676 = state_27608__$1;
(statearr_27634_27676[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (12))){
var inst_27536 = (state_27608[(2)]);
var state_27608__$1 = state_27608;
var statearr_27635_27677 = state_27608__$1;
(statearr_27635_27677[(2)] = inst_27536);

(statearr_27635_27677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (2))){
var inst_27523 = (state_27608[(10)]);
var inst_27523__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27608__$1 = (function (){var statearr_27636 = state_27608;
(statearr_27636[(10)] = inst_27523__$1);

return statearr_27636;
})();
if(cljs.core.truth_(inst_27523__$1)){
var statearr_27637_27678 = state_27608__$1;
(statearr_27637_27678[(1)] = (5));

} else {
var statearr_27638_27679 = state_27608__$1;
(statearr_27638_27679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (23))){
var inst_27566 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27608__$1 = state_27608;
if(cljs.core.truth_(inst_27566)){
var statearr_27639_27680 = state_27608__$1;
(statearr_27639_27680[(1)] = (25));

} else {
var statearr_27640_27681 = state_27608__$1;
(statearr_27640_27681[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (35))){
var state_27608__$1 = state_27608;
var statearr_27641_27682 = state_27608__$1;
(statearr_27641_27682[(2)] = null);

(statearr_27641_27682[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (19))){
var inst_27561 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27608__$1 = state_27608;
if(cljs.core.truth_(inst_27561)){
var statearr_27642_27683 = state_27608__$1;
(statearr_27642_27683[(1)] = (22));

} else {
var statearr_27643_27684 = state_27608__$1;
(statearr_27643_27684[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (11))){
var inst_27532 = (state_27608[(2)]);
var state_27608__$1 = state_27608;
var statearr_27644_27685 = state_27608__$1;
(statearr_27644_27685[(2)] = inst_27532);

(statearr_27644_27685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (9))){
var inst_27534 = figwheel.client.heads_up.clear.call(null);
var state_27608__$1 = state_27608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27608__$1,(12),inst_27534);
} else {
if((state_val_27609 === (5))){
var inst_27525 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27608__$1 = state_27608;
var statearr_27645_27686 = state_27608__$1;
(statearr_27645_27686[(2)] = inst_27525);

(statearr_27645_27686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (14))){
var inst_27552 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27608__$1 = state_27608;
if(cljs.core.truth_(inst_27552)){
var statearr_27646_27687 = state_27608__$1;
(statearr_27646_27687[(1)] = (18));

} else {
var statearr_27647_27688 = state_27608__$1;
(statearr_27647_27688[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (26))){
var inst_27578 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27608__$1 = state_27608;
if(cljs.core.truth_(inst_27578)){
var statearr_27648_27689 = state_27608__$1;
(statearr_27648_27689[(1)] = (30));

} else {
var statearr_27649_27690 = state_27608__$1;
(statearr_27649_27690[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (16))){
var inst_27544 = (state_27608[(2)]);
var inst_27545 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27546 = figwheel.client.heads_up.display_exception.call(null,inst_27545);
var state_27608__$1 = (function (){var statearr_27650 = state_27608;
(statearr_27650[(13)] = inst_27544);

return statearr_27650;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27608__$1,(17),inst_27546);
} else {
if((state_val_27609 === (30))){
var inst_27580 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27581 = figwheel.client.heads_up.display_warning.call(null,inst_27580);
var state_27608__$1 = state_27608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27608__$1,(33),inst_27581);
} else {
if((state_val_27609 === (10))){
var inst_27538 = (state_27608[(2)]);
var state_27608__$1 = state_27608;
var statearr_27651_27691 = state_27608__$1;
(statearr_27651_27691[(2)] = inst_27538);

(statearr_27651_27691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (18))){
var inst_27554 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27555 = figwheel.client.heads_up.display_exception.call(null,inst_27554);
var state_27608__$1 = state_27608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27608__$1,(21),inst_27555);
} else {
if((state_val_27609 === (37))){
var inst_27591 = (state_27608[(2)]);
var state_27608__$1 = state_27608;
var statearr_27652_27692 = state_27608__$1;
(statearr_27652_27692[(2)] = inst_27591);

(statearr_27652_27692[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (8))){
var inst_27530 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27608__$1 = state_27608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27608__$1,(11),inst_27530);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23371__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23348__auto__,c__23371__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23349__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23349__auto____0 = (function (){
var statearr_27653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27653[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23349__auto__);

(statearr_27653[(1)] = (1));

return statearr_27653;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23349__auto____1 = (function (state_27608){
while(true){
var ret_value__23350__auto__ = (function (){try{while(true){
var result__23351__auto__ = switch__23348__auto__.call(null,state_27608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23351__auto__;
}
break;
}
}catch (e27654){if((e27654 instanceof Object)){
var ex__23352__auto__ = e27654;
var statearr_27655_27693 = state_27608;
(statearr_27655_27693[(5)] = ex__23352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27694 = state_27608;
state_27608 = G__27694;
continue;
} else {
return ret_value__23350__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23349__auto__ = function(state_27608){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23349__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23349__auto____1.call(this,state_27608);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23349__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23349__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23349__auto__;
})()
;})(switch__23348__auto__,c__23371__auto__,msg_hist,msg_names,msg))
})();
var state__23373__auto__ = (function (){var statearr_27656 = f__23372__auto__.call(null);
(statearr_27656[(6)] = c__23371__auto__);

return statearr_27656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23373__auto__);
});})(c__23371__auto__,msg_hist,msg_names,msg))
);

return c__23371__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23371__auto___27723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23371__auto___27723,ch){
return (function (){
var f__23372__auto__ = (function (){var switch__23348__auto__ = ((function (c__23371__auto___27723,ch){
return (function (state_27709){
var state_val_27710 = (state_27709[(1)]);
if((state_val_27710 === (1))){
var state_27709__$1 = state_27709;
var statearr_27711_27724 = state_27709__$1;
(statearr_27711_27724[(2)] = null);

(statearr_27711_27724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (2))){
var state_27709__$1 = state_27709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27709__$1,(4),ch);
} else {
if((state_val_27710 === (3))){
var inst_27707 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27709__$1,inst_27707);
} else {
if((state_val_27710 === (4))){
var inst_27697 = (state_27709[(7)]);
var inst_27697__$1 = (state_27709[(2)]);
var state_27709__$1 = (function (){var statearr_27712 = state_27709;
(statearr_27712[(7)] = inst_27697__$1);

return statearr_27712;
})();
if(cljs.core.truth_(inst_27697__$1)){
var statearr_27713_27725 = state_27709__$1;
(statearr_27713_27725[(1)] = (5));

} else {
var statearr_27714_27726 = state_27709__$1;
(statearr_27714_27726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (5))){
var inst_27697 = (state_27709[(7)]);
var inst_27699 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27697);
var state_27709__$1 = state_27709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27709__$1,(8),inst_27699);
} else {
if((state_val_27710 === (6))){
var state_27709__$1 = state_27709;
var statearr_27715_27727 = state_27709__$1;
(statearr_27715_27727[(2)] = null);

(statearr_27715_27727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (7))){
var inst_27705 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
var statearr_27716_27728 = state_27709__$1;
(statearr_27716_27728[(2)] = inst_27705);

(statearr_27716_27728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (8))){
var inst_27701 = (state_27709[(2)]);
var state_27709__$1 = (function (){var statearr_27717 = state_27709;
(statearr_27717[(8)] = inst_27701);

return statearr_27717;
})();
var statearr_27718_27729 = state_27709__$1;
(statearr_27718_27729[(2)] = null);

(statearr_27718_27729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__23371__auto___27723,ch))
;
return ((function (switch__23348__auto__,c__23371__auto___27723,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23349__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23349__auto____0 = (function (){
var statearr_27719 = [null,null,null,null,null,null,null,null,null];
(statearr_27719[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23349__auto__);

(statearr_27719[(1)] = (1));

return statearr_27719;
});
var figwheel$client$heads_up_plugin_$_state_machine__23349__auto____1 = (function (state_27709){
while(true){
var ret_value__23350__auto__ = (function (){try{while(true){
var result__23351__auto__ = switch__23348__auto__.call(null,state_27709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23351__auto__;
}
break;
}
}catch (e27720){if((e27720 instanceof Object)){
var ex__23352__auto__ = e27720;
var statearr_27721_27730 = state_27709;
(statearr_27721_27730[(5)] = ex__23352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27731 = state_27709;
state_27709 = G__27731;
continue;
} else {
return ret_value__23350__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23349__auto__ = function(state_27709){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23349__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23349__auto____1.call(this,state_27709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23349__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23349__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23349__auto__;
})()
;})(switch__23348__auto__,c__23371__auto___27723,ch))
})();
var state__23373__auto__ = (function (){var statearr_27722 = f__23372__auto__.call(null);
(statearr_27722[(6)] = c__23371__auto___27723);

return statearr_27722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23373__auto__);
});})(c__23371__auto___27723,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23371__auto__){
return (function (){
var f__23372__auto__ = (function (){var switch__23348__auto__ = ((function (c__23371__auto__){
return (function (state_27737){
var state_val_27738 = (state_27737[(1)]);
if((state_val_27738 === (1))){
var inst_27732 = cljs.core.async.timeout.call(null,(3000));
var state_27737__$1 = state_27737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27737__$1,(2),inst_27732);
} else {
if((state_val_27738 === (2))){
var inst_27734 = (state_27737[(2)]);
var inst_27735 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27737__$1 = (function (){var statearr_27739 = state_27737;
(statearr_27739[(7)] = inst_27734);

return statearr_27739;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27737__$1,inst_27735);
} else {
return null;
}
}
});})(c__23371__auto__))
;
return ((function (switch__23348__auto__,c__23371__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23349__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23349__auto____0 = (function (){
var statearr_27740 = [null,null,null,null,null,null,null,null];
(statearr_27740[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23349__auto__);

(statearr_27740[(1)] = (1));

return statearr_27740;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23349__auto____1 = (function (state_27737){
while(true){
var ret_value__23350__auto__ = (function (){try{while(true){
var result__23351__auto__ = switch__23348__auto__.call(null,state_27737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23351__auto__;
}
break;
}
}catch (e27741){if((e27741 instanceof Object)){
var ex__23352__auto__ = e27741;
var statearr_27742_27744 = state_27737;
(statearr_27742_27744[(5)] = ex__23352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27745 = state_27737;
state_27737 = G__27745;
continue;
} else {
return ret_value__23350__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23349__auto__ = function(state_27737){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23349__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23349__auto____1.call(this,state_27737);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23349__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23349__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23349__auto__;
})()
;})(switch__23348__auto__,c__23371__auto__))
})();
var state__23373__auto__ = (function (){var statearr_27743 = f__23372__auto__.call(null);
(statearr_27743[(6)] = c__23371__auto__);

return statearr_27743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23373__auto__);
});})(c__23371__auto__))
);

return c__23371__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23371__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__23372__auto__ = (function (){var switch__23348__auto__ = ((function (c__23371__auto__,figwheel_version,temp__5457__auto__){
return (function (state_27752){
var state_val_27753 = (state_27752[(1)]);
if((state_val_27753 === (1))){
var inst_27746 = cljs.core.async.timeout.call(null,(2000));
var state_27752__$1 = state_27752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27752__$1,(2),inst_27746);
} else {
if((state_val_27753 === (2))){
var inst_27748 = (state_27752[(2)]);
var inst_27749 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_27750 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_27749);
var state_27752__$1 = (function (){var statearr_27754 = state_27752;
(statearr_27754[(7)] = inst_27748);

return statearr_27754;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27752__$1,inst_27750);
} else {
return null;
}
}
});})(c__23371__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__23348__auto__,c__23371__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23349__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23349__auto____0 = (function (){
var statearr_27755 = [null,null,null,null,null,null,null,null];
(statearr_27755[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23349__auto__);

(statearr_27755[(1)] = (1));

return statearr_27755;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23349__auto____1 = (function (state_27752){
while(true){
var ret_value__23350__auto__ = (function (){try{while(true){
var result__23351__auto__ = switch__23348__auto__.call(null,state_27752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23351__auto__;
}
break;
}
}catch (e27756){if((e27756 instanceof Object)){
var ex__23352__auto__ = e27756;
var statearr_27757_27759 = state_27752;
(statearr_27757_27759[(5)] = ex__23352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27760 = state_27752;
state_27752 = G__27760;
continue;
} else {
return ret_value__23350__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23349__auto__ = function(state_27752){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23349__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23349__auto____1.call(this,state_27752);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23349__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23349__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23349__auto__;
})()
;})(switch__23348__auto__,c__23371__auto__,figwheel_version,temp__5457__auto__))
})();
var state__23373__auto__ = (function (){var statearr_27758 = f__23372__auto__.call(null);
(statearr_27758[(6)] = c__23371__auto__);

return statearr_27758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23373__auto__);
});})(c__23371__auto__,figwheel_version,temp__5457__auto__))
);

return c__23371__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__27761){
var map__27762 = p__27761;
var map__27762__$1 = ((((!((map__27762 == null)))?(((((map__27762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27762):map__27762);
var file = cljs.core.get.call(null,map__27762__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__27762__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__27762__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__27764 = "";
var G__27764__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27764),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__27764);
var G__27764__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27764__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__27764__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27764__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__27764__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27765){
var map__27766 = p__27765;
var map__27766__$1 = ((((!((map__27766 == null)))?(((((map__27766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27766):map__27766);
var ed = map__27766__$1;
var formatted_exception = cljs.core.get.call(null,map__27766__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27766__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27766__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27768_27772 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27769_27773 = null;
var count__27770_27774 = (0);
var i__27771_27775 = (0);
while(true){
if((i__27771_27775 < count__27770_27774)){
var msg_27776 = cljs.core._nth.call(null,chunk__27769_27773,i__27771_27775);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27776);


var G__27777 = seq__27768_27772;
var G__27778 = chunk__27769_27773;
var G__27779 = count__27770_27774;
var G__27780 = (i__27771_27775 + (1));
seq__27768_27772 = G__27777;
chunk__27769_27773 = G__27778;
count__27770_27774 = G__27779;
i__27771_27775 = G__27780;
continue;
} else {
var temp__5457__auto___27781 = cljs.core.seq.call(null,seq__27768_27772);
if(temp__5457__auto___27781){
var seq__27768_27782__$1 = temp__5457__auto___27781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27768_27782__$1)){
var c__4319__auto___27783 = cljs.core.chunk_first.call(null,seq__27768_27782__$1);
var G__27784 = cljs.core.chunk_rest.call(null,seq__27768_27782__$1);
var G__27785 = c__4319__auto___27783;
var G__27786 = cljs.core.count.call(null,c__4319__auto___27783);
var G__27787 = (0);
seq__27768_27772 = G__27784;
chunk__27769_27773 = G__27785;
count__27770_27774 = G__27786;
i__27771_27775 = G__27787;
continue;
} else {
var msg_27788 = cljs.core.first.call(null,seq__27768_27782__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27788);


var G__27789 = cljs.core.next.call(null,seq__27768_27782__$1);
var G__27790 = null;
var G__27791 = (0);
var G__27792 = (0);
seq__27768_27772 = G__27789;
chunk__27769_27773 = G__27790;
count__27770_27774 = G__27791;
i__27771_27775 = G__27792;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27793){
var map__27794 = p__27793;
var map__27794__$1 = ((((!((map__27794 == null)))?(((((map__27794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27794):map__27794);
var w = map__27794__$1;
var message = cljs.core.get.call(null,map__27794__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27796 = cljs.core.seq.call(null,plugins);
var chunk__27797 = null;
var count__27798 = (0);
var i__27799 = (0);
while(true){
if((i__27799 < count__27798)){
var vec__27800 = cljs.core._nth.call(null,chunk__27797,i__27799);
var k = cljs.core.nth.call(null,vec__27800,(0),null);
var plugin = cljs.core.nth.call(null,vec__27800,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27806 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27796,chunk__27797,count__27798,i__27799,pl_27806,vec__27800,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27806.call(null,msg_hist);
});})(seq__27796,chunk__27797,count__27798,i__27799,pl_27806,vec__27800,k,plugin))
);
} else {
}


var G__27807 = seq__27796;
var G__27808 = chunk__27797;
var G__27809 = count__27798;
var G__27810 = (i__27799 + (1));
seq__27796 = G__27807;
chunk__27797 = G__27808;
count__27798 = G__27809;
i__27799 = G__27810;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27796);
if(temp__5457__auto__){
var seq__27796__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27796__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__27796__$1);
var G__27811 = cljs.core.chunk_rest.call(null,seq__27796__$1);
var G__27812 = c__4319__auto__;
var G__27813 = cljs.core.count.call(null,c__4319__auto__);
var G__27814 = (0);
seq__27796 = G__27811;
chunk__27797 = G__27812;
count__27798 = G__27813;
i__27799 = G__27814;
continue;
} else {
var vec__27803 = cljs.core.first.call(null,seq__27796__$1);
var k = cljs.core.nth.call(null,vec__27803,(0),null);
var plugin = cljs.core.nth.call(null,vec__27803,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27815 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27796,chunk__27797,count__27798,i__27799,pl_27815,vec__27803,k,plugin,seq__27796__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27815.call(null,msg_hist);
});})(seq__27796,chunk__27797,count__27798,i__27799,pl_27815,vec__27803,k,plugin,seq__27796__$1,temp__5457__auto__))
);
} else {
}


var G__27816 = cljs.core.next.call(null,seq__27796__$1);
var G__27817 = null;
var G__27818 = (0);
var G__27819 = (0);
seq__27796 = G__27816;
chunk__27797 = G__27817;
count__27798 = G__27818;
i__27799 = G__27819;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__27821 = arguments.length;
switch (G__27821) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__27822_27827 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__27823_27828 = null;
var count__27824_27829 = (0);
var i__27825_27830 = (0);
while(true){
if((i__27825_27830 < count__27824_27829)){
var msg_27831 = cljs.core._nth.call(null,chunk__27823_27828,i__27825_27830);
figwheel.client.socket.handle_incoming_message.call(null,msg_27831);


var G__27832 = seq__27822_27827;
var G__27833 = chunk__27823_27828;
var G__27834 = count__27824_27829;
var G__27835 = (i__27825_27830 + (1));
seq__27822_27827 = G__27832;
chunk__27823_27828 = G__27833;
count__27824_27829 = G__27834;
i__27825_27830 = G__27835;
continue;
} else {
var temp__5457__auto___27836 = cljs.core.seq.call(null,seq__27822_27827);
if(temp__5457__auto___27836){
var seq__27822_27837__$1 = temp__5457__auto___27836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27822_27837__$1)){
var c__4319__auto___27838 = cljs.core.chunk_first.call(null,seq__27822_27837__$1);
var G__27839 = cljs.core.chunk_rest.call(null,seq__27822_27837__$1);
var G__27840 = c__4319__auto___27838;
var G__27841 = cljs.core.count.call(null,c__4319__auto___27838);
var G__27842 = (0);
seq__27822_27827 = G__27839;
chunk__27823_27828 = G__27840;
count__27824_27829 = G__27841;
i__27825_27830 = G__27842;
continue;
} else {
var msg_27843 = cljs.core.first.call(null,seq__27822_27837__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_27843);


var G__27844 = cljs.core.next.call(null,seq__27822_27837__$1);
var G__27845 = null;
var G__27846 = (0);
var G__27847 = (0);
seq__27822_27827 = G__27844;
chunk__27823_27828 = G__27845;
count__27824_27829 = G__27846;
i__27825_27830 = G__27847;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27852 = arguments.length;
var i__4500__auto___27853 = (0);
while(true){
if((i__4500__auto___27853 < len__4499__auto___27852)){
args__4502__auto__.push((arguments[i__4500__auto___27853]));

var G__27854 = (i__4500__auto___27853 + (1));
i__4500__auto___27853 = G__27854;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27849){
var map__27850 = p__27849;
var map__27850__$1 = ((((!((map__27850 == null)))?(((((map__27850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27850):map__27850);
var opts = map__27850__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27848){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27848));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e27855){if((e27855 instanceof Error)){
var e = e27855;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e27855;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__27856){
var map__27857 = p__27856;
var map__27857__$1 = ((((!((map__27857 == null)))?(((((map__27857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27857):map__27857);
var msg_name = cljs.core.get.call(null,map__27857__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1530194947199
