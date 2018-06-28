// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25837_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25837_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25838 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25839 = null;
var count__25840 = (0);
var i__25841 = (0);
while(true){
if((i__25841 < count__25840)){
var n = cljs.core._nth.call(null,chunk__25839,i__25841);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__25842 = seq__25838;
var G__25843 = chunk__25839;
var G__25844 = count__25840;
var G__25845 = (i__25841 + (1));
seq__25838 = G__25842;
chunk__25839 = G__25843;
count__25840 = G__25844;
i__25841 = G__25845;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25838);
if(temp__5457__auto__){
var seq__25838__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25838__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25838__$1);
var G__25846 = cljs.core.chunk_rest.call(null,seq__25838__$1);
var G__25847 = c__4319__auto__;
var G__25848 = cljs.core.count.call(null,c__4319__auto__);
var G__25849 = (0);
seq__25838 = G__25846;
chunk__25839 = G__25847;
count__25840 = G__25848;
i__25841 = G__25849;
continue;
} else {
var n = cljs.core.first.call(null,seq__25838__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__25850 = cljs.core.next.call(null,seq__25838__$1);
var G__25851 = null;
var G__25852 = (0);
var G__25853 = (0);
seq__25838 = G__25850;
chunk__25839 = G__25851;
count__25840 = G__25852;
i__25841 = G__25853;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__25854){
var vec__25855 = p__25854;
var _ = cljs.core.nth.call(null,vec__25855,(0),null);
var v = cljs.core.nth.call(null,vec__25855,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__25858){
var vec__25859 = p__25858;
var k = cljs.core.nth.call(null,vec__25859,(0),null);
var v = cljs.core.nth.call(null,vec__25859,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25871_25879 = cljs.core.seq.call(null,deps);
var chunk__25872_25880 = null;
var count__25873_25881 = (0);
var i__25874_25882 = (0);
while(true){
if((i__25874_25882 < count__25873_25881)){
var dep_25883 = cljs.core._nth.call(null,chunk__25872_25880,i__25874_25882);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_25883;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_25883));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_25883,(depth + (1)),state);
} else {
}


var G__25884 = seq__25871_25879;
var G__25885 = chunk__25872_25880;
var G__25886 = count__25873_25881;
var G__25887 = (i__25874_25882 + (1));
seq__25871_25879 = G__25884;
chunk__25872_25880 = G__25885;
count__25873_25881 = G__25886;
i__25874_25882 = G__25887;
continue;
} else {
var temp__5457__auto___25888 = cljs.core.seq.call(null,seq__25871_25879);
if(temp__5457__auto___25888){
var seq__25871_25889__$1 = temp__5457__auto___25888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25871_25889__$1)){
var c__4319__auto___25890 = cljs.core.chunk_first.call(null,seq__25871_25889__$1);
var G__25891 = cljs.core.chunk_rest.call(null,seq__25871_25889__$1);
var G__25892 = c__4319__auto___25890;
var G__25893 = cljs.core.count.call(null,c__4319__auto___25890);
var G__25894 = (0);
seq__25871_25879 = G__25891;
chunk__25872_25880 = G__25892;
count__25873_25881 = G__25893;
i__25874_25882 = G__25894;
continue;
} else {
var dep_25895 = cljs.core.first.call(null,seq__25871_25889__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_25895;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_25895));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_25895,(depth + (1)),state);
} else {
}


var G__25896 = cljs.core.next.call(null,seq__25871_25889__$1);
var G__25897 = null;
var G__25898 = (0);
var G__25899 = (0);
seq__25871_25879 = G__25896;
chunk__25872_25880 = G__25897;
count__25873_25881 = G__25898;
i__25874_25882 = G__25899;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25875){
var vec__25876 = p__25875;
var seq__25877 = cljs.core.seq.call(null,vec__25876);
var first__25878 = cljs.core.first.call(null,seq__25877);
var seq__25877__$1 = cljs.core.next.call(null,seq__25877);
var x = first__25878;
var xs = seq__25877__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25876,seq__25877,first__25878,seq__25877__$1,x,xs,get_deps__$1){
return (function (p1__25862_SHARP_){
return clojure.set.difference.call(null,p1__25862_SHARP_,x);
});})(vec__25876,seq__25877,first__25878,seq__25877__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25900 = cljs.core.seq.call(null,provides);
var chunk__25901 = null;
var count__25902 = (0);
var i__25903 = (0);
while(true){
if((i__25903 < count__25902)){
var prov = cljs.core._nth.call(null,chunk__25901,i__25903);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25904_25912 = cljs.core.seq.call(null,requires);
var chunk__25905_25913 = null;
var count__25906_25914 = (0);
var i__25907_25915 = (0);
while(true){
if((i__25907_25915 < count__25906_25914)){
var req_25916 = cljs.core._nth.call(null,chunk__25905_25913,i__25907_25915);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25916,prov);


var G__25917 = seq__25904_25912;
var G__25918 = chunk__25905_25913;
var G__25919 = count__25906_25914;
var G__25920 = (i__25907_25915 + (1));
seq__25904_25912 = G__25917;
chunk__25905_25913 = G__25918;
count__25906_25914 = G__25919;
i__25907_25915 = G__25920;
continue;
} else {
var temp__5457__auto___25921 = cljs.core.seq.call(null,seq__25904_25912);
if(temp__5457__auto___25921){
var seq__25904_25922__$1 = temp__5457__auto___25921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25904_25922__$1)){
var c__4319__auto___25923 = cljs.core.chunk_first.call(null,seq__25904_25922__$1);
var G__25924 = cljs.core.chunk_rest.call(null,seq__25904_25922__$1);
var G__25925 = c__4319__auto___25923;
var G__25926 = cljs.core.count.call(null,c__4319__auto___25923);
var G__25927 = (0);
seq__25904_25912 = G__25924;
chunk__25905_25913 = G__25925;
count__25906_25914 = G__25926;
i__25907_25915 = G__25927;
continue;
} else {
var req_25928 = cljs.core.first.call(null,seq__25904_25922__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25928,prov);


var G__25929 = cljs.core.next.call(null,seq__25904_25922__$1);
var G__25930 = null;
var G__25931 = (0);
var G__25932 = (0);
seq__25904_25912 = G__25929;
chunk__25905_25913 = G__25930;
count__25906_25914 = G__25931;
i__25907_25915 = G__25932;
continue;
}
} else {
}
}
break;
}


var G__25933 = seq__25900;
var G__25934 = chunk__25901;
var G__25935 = count__25902;
var G__25936 = (i__25903 + (1));
seq__25900 = G__25933;
chunk__25901 = G__25934;
count__25902 = G__25935;
i__25903 = G__25936;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25900);
if(temp__5457__auto__){
var seq__25900__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25900__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25900__$1);
var G__25937 = cljs.core.chunk_rest.call(null,seq__25900__$1);
var G__25938 = c__4319__auto__;
var G__25939 = cljs.core.count.call(null,c__4319__auto__);
var G__25940 = (0);
seq__25900 = G__25937;
chunk__25901 = G__25938;
count__25902 = G__25939;
i__25903 = G__25940;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25900__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25908_25941 = cljs.core.seq.call(null,requires);
var chunk__25909_25942 = null;
var count__25910_25943 = (0);
var i__25911_25944 = (0);
while(true){
if((i__25911_25944 < count__25910_25943)){
var req_25945 = cljs.core._nth.call(null,chunk__25909_25942,i__25911_25944);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25945,prov);


var G__25946 = seq__25908_25941;
var G__25947 = chunk__25909_25942;
var G__25948 = count__25910_25943;
var G__25949 = (i__25911_25944 + (1));
seq__25908_25941 = G__25946;
chunk__25909_25942 = G__25947;
count__25910_25943 = G__25948;
i__25911_25944 = G__25949;
continue;
} else {
var temp__5457__auto___25950__$1 = cljs.core.seq.call(null,seq__25908_25941);
if(temp__5457__auto___25950__$1){
var seq__25908_25951__$1 = temp__5457__auto___25950__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25908_25951__$1)){
var c__4319__auto___25952 = cljs.core.chunk_first.call(null,seq__25908_25951__$1);
var G__25953 = cljs.core.chunk_rest.call(null,seq__25908_25951__$1);
var G__25954 = c__4319__auto___25952;
var G__25955 = cljs.core.count.call(null,c__4319__auto___25952);
var G__25956 = (0);
seq__25908_25941 = G__25953;
chunk__25909_25942 = G__25954;
count__25910_25943 = G__25955;
i__25911_25944 = G__25956;
continue;
} else {
var req_25957 = cljs.core.first.call(null,seq__25908_25951__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25957,prov);


var G__25958 = cljs.core.next.call(null,seq__25908_25951__$1);
var G__25959 = null;
var G__25960 = (0);
var G__25961 = (0);
seq__25908_25941 = G__25958;
chunk__25909_25942 = G__25959;
count__25910_25943 = G__25960;
i__25911_25944 = G__25961;
continue;
}
} else {
}
}
break;
}


var G__25962 = cljs.core.next.call(null,seq__25900__$1);
var G__25963 = null;
var G__25964 = (0);
var G__25965 = (0);
seq__25900 = G__25962;
chunk__25901 = G__25963;
count__25902 = G__25964;
i__25903 = G__25965;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25966_25970 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25967_25971 = null;
var count__25968_25972 = (0);
var i__25969_25973 = (0);
while(true){
if((i__25969_25973 < count__25968_25972)){
var ns_25974 = cljs.core._nth.call(null,chunk__25967_25971,i__25969_25973);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25974);


var G__25975 = seq__25966_25970;
var G__25976 = chunk__25967_25971;
var G__25977 = count__25968_25972;
var G__25978 = (i__25969_25973 + (1));
seq__25966_25970 = G__25975;
chunk__25967_25971 = G__25976;
count__25968_25972 = G__25977;
i__25969_25973 = G__25978;
continue;
} else {
var temp__5457__auto___25979 = cljs.core.seq.call(null,seq__25966_25970);
if(temp__5457__auto___25979){
var seq__25966_25980__$1 = temp__5457__auto___25979;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25966_25980__$1)){
var c__4319__auto___25981 = cljs.core.chunk_first.call(null,seq__25966_25980__$1);
var G__25982 = cljs.core.chunk_rest.call(null,seq__25966_25980__$1);
var G__25983 = c__4319__auto___25981;
var G__25984 = cljs.core.count.call(null,c__4319__auto___25981);
var G__25985 = (0);
seq__25966_25970 = G__25982;
chunk__25967_25971 = G__25983;
count__25968_25972 = G__25984;
i__25969_25973 = G__25985;
continue;
} else {
var ns_25986 = cljs.core.first.call(null,seq__25966_25980__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25986);


var G__25987 = cljs.core.next.call(null,seq__25966_25980__$1);
var G__25988 = null;
var G__25989 = (0);
var G__25990 = (0);
seq__25966_25970 = G__25987;
chunk__25967_25971 = G__25988;
count__25968_25972 = G__25989;
i__25969_25973 = G__25990;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25991__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25992__i = 0, G__25992__a = new Array(arguments.length -  0);
while (G__25992__i < G__25992__a.length) {G__25992__a[G__25992__i] = arguments[G__25992__i + 0]; ++G__25992__i;}
  args = new cljs.core.IndexedSeq(G__25992__a,0,null);
} 
return G__25991__delegate.call(this,args);};
G__25991.cljs$lang$maxFixedArity = 0;
G__25991.cljs$lang$applyTo = (function (arglist__25993){
var args = cljs.core.seq(arglist__25993);
return G__25991__delegate(args);
});
G__25991.cljs$core$IFn$_invoke$arity$variadic = G__25991__delegate;
return G__25991;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__25994_SHARP_,p2__25995_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25994_SHARP_)].join('')),p2__25995_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__25996_SHARP_,p2__25997_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25996_SHARP_)].join(''),p2__25997_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__25998 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__25998.addCallback(((function (G__25998){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__25998))
);

G__25998.addErrback(((function (G__25998){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__25998))
);

return G__25998;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e25999){if((e25999 instanceof Error)){
var e = e25999;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25999;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26000){if((e26000 instanceof Error)){
var e = e26000;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26000;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26001 = cljs.core._EQ_;
var expr__26002 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26001.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26002))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__26001.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26002))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__26001.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__26002))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__26001,expr__26002){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26001,expr__26002))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26004,callback){
var map__26005 = p__26004;
var map__26005__$1 = ((((!((map__26005 == null)))?(((((map__26005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26005):map__26005);
var file_msg = map__26005__$1;
var request_url = cljs.core.get.call(null,map__26005__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__26005,map__26005__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26005,map__26005__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23371__auto__){
return (function (){
var f__23372__auto__ = (function (){var switch__23348__auto__ = ((function (c__23371__auto__){
return (function (state_26043){
var state_val_26044 = (state_26043[(1)]);
if((state_val_26044 === (7))){
var inst_26039 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26045_26071 = state_26043__$1;
(statearr_26045_26071[(2)] = inst_26039);

(statearr_26045_26071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (1))){
var state_26043__$1 = state_26043;
var statearr_26046_26072 = state_26043__$1;
(statearr_26046_26072[(2)] = null);

(statearr_26046_26072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (4))){
var inst_26009 = (state_26043[(7)]);
var inst_26009__$1 = (state_26043[(2)]);
var state_26043__$1 = (function (){var statearr_26047 = state_26043;
(statearr_26047[(7)] = inst_26009__$1);

return statearr_26047;
})();
if(cljs.core.truth_(inst_26009__$1)){
var statearr_26048_26073 = state_26043__$1;
(statearr_26048_26073[(1)] = (5));

} else {
var statearr_26049_26074 = state_26043__$1;
(statearr_26049_26074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (15))){
var inst_26022 = (state_26043[(8)]);
var inst_26024 = (state_26043[(9)]);
var inst_26026 = inst_26024.call(null,inst_26022);
var state_26043__$1 = state_26043;
var statearr_26050_26075 = state_26043__$1;
(statearr_26050_26075[(2)] = inst_26026);

(statearr_26050_26075[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (13))){
var inst_26033 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26051_26076 = state_26043__$1;
(statearr_26051_26076[(2)] = inst_26033);

(statearr_26051_26076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (6))){
var state_26043__$1 = state_26043;
var statearr_26052_26077 = state_26043__$1;
(statearr_26052_26077[(2)] = null);

(statearr_26052_26077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (17))){
var inst_26030 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26053_26078 = state_26043__$1;
(statearr_26053_26078[(2)] = inst_26030);

(statearr_26053_26078[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (3))){
var inst_26041 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26043__$1,inst_26041);
} else {
if((state_val_26044 === (12))){
var state_26043__$1 = state_26043;
var statearr_26054_26079 = state_26043__$1;
(statearr_26054_26079[(2)] = null);

(statearr_26054_26079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (2))){
var state_26043__$1 = state_26043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26043__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26044 === (11))){
var inst_26014 = (state_26043[(10)]);
var inst_26020 = figwheel.client.file_reloading.blocking_load.call(null,inst_26014);
var state_26043__$1 = state_26043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26043__$1,(14),inst_26020);
} else {
if((state_val_26044 === (9))){
var inst_26014 = (state_26043[(10)]);
var state_26043__$1 = state_26043;
if(cljs.core.truth_(inst_26014)){
var statearr_26055_26080 = state_26043__$1;
(statearr_26055_26080[(1)] = (11));

} else {
var statearr_26056_26081 = state_26043__$1;
(statearr_26056_26081[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (5))){
var inst_26015 = (state_26043[(11)]);
var inst_26009 = (state_26043[(7)]);
var inst_26014 = cljs.core.nth.call(null,inst_26009,(0),null);
var inst_26015__$1 = cljs.core.nth.call(null,inst_26009,(1),null);
var state_26043__$1 = (function (){var statearr_26057 = state_26043;
(statearr_26057[(11)] = inst_26015__$1);

(statearr_26057[(10)] = inst_26014);

return statearr_26057;
})();
if(cljs.core.truth_(inst_26015__$1)){
var statearr_26058_26082 = state_26043__$1;
(statearr_26058_26082[(1)] = (8));

} else {
var statearr_26059_26083 = state_26043__$1;
(statearr_26059_26083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (14))){
var inst_26024 = (state_26043[(9)]);
var inst_26014 = (state_26043[(10)]);
var inst_26022 = (state_26043[(2)]);
var inst_26023 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26024__$1 = cljs.core.get.call(null,inst_26023,inst_26014);
var state_26043__$1 = (function (){var statearr_26060 = state_26043;
(statearr_26060[(8)] = inst_26022);

(statearr_26060[(9)] = inst_26024__$1);

return statearr_26060;
})();
if(cljs.core.truth_(inst_26024__$1)){
var statearr_26061_26084 = state_26043__$1;
(statearr_26061_26084[(1)] = (15));

} else {
var statearr_26062_26085 = state_26043__$1;
(statearr_26062_26085[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (16))){
var inst_26022 = (state_26043[(8)]);
var inst_26028 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26022);
var state_26043__$1 = state_26043;
var statearr_26063_26086 = state_26043__$1;
(statearr_26063_26086[(2)] = inst_26028);

(statearr_26063_26086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (10))){
var inst_26035 = (state_26043[(2)]);
var state_26043__$1 = (function (){var statearr_26064 = state_26043;
(statearr_26064[(12)] = inst_26035);

return statearr_26064;
})();
var statearr_26065_26087 = state_26043__$1;
(statearr_26065_26087[(2)] = null);

(statearr_26065_26087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (8))){
var inst_26015 = (state_26043[(11)]);
var inst_26017 = eval(inst_26015);
var state_26043__$1 = state_26043;
var statearr_26066_26088 = state_26043__$1;
(statearr_26066_26088[(2)] = inst_26017);

(statearr_26066_26088[(1)] = (10));


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
});})(c__23371__auto__))
;
return ((function (switch__23348__auto__,c__23371__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23349__auto__ = null;
var figwheel$client$file_reloading$state_machine__23349__auto____0 = (function (){
var statearr_26067 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26067[(0)] = figwheel$client$file_reloading$state_machine__23349__auto__);

(statearr_26067[(1)] = (1));

return statearr_26067;
});
var figwheel$client$file_reloading$state_machine__23349__auto____1 = (function (state_26043){
while(true){
var ret_value__23350__auto__ = (function (){try{while(true){
var result__23351__auto__ = switch__23348__auto__.call(null,state_26043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23351__auto__;
}
break;
}
}catch (e26068){if((e26068 instanceof Object)){
var ex__23352__auto__ = e26068;
var statearr_26069_26089 = state_26043;
(statearr_26069_26089[(5)] = ex__23352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26090 = state_26043;
state_26043 = G__26090;
continue;
} else {
return ret_value__23350__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23349__auto__ = function(state_26043){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23349__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23349__auto____1.call(this,state_26043);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23349__auto____0;
figwheel$client$file_reloading$state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23349__auto____1;
return figwheel$client$file_reloading$state_machine__23349__auto__;
})()
;})(switch__23348__auto__,c__23371__auto__))
})();
var state__23373__auto__ = (function (){var statearr_26070 = f__23372__auto__.call(null);
(statearr_26070[(6)] = c__23371__auto__);

return statearr_26070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23373__auto__);
});})(c__23371__auto__))
);

return c__23371__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__26092 = arguments.length;
switch (G__26092) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26094,callback){
var map__26095 = p__26094;
var map__26095__$1 = ((((!((map__26095 == null)))?(((((map__26095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26095):map__26095);
var file_msg = map__26095__$1;
var namespace = cljs.core.get.call(null,map__26095__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26095,map__26095__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26095,map__26095__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__26097){
var map__26098 = p__26097;
var map__26098__$1 = ((((!((map__26098 == null)))?(((((map__26098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26098):map__26098);
var file_msg = map__26098__$1;
var namespace = cljs.core.get.call(null,map__26098__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26100){
var map__26101 = p__26100;
var map__26101__$1 = ((((!((map__26101 == null)))?(((((map__26101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26101):map__26101);
var file_msg = map__26101__$1;
var namespace = cljs.core.get.call(null,map__26101__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26103,callback){
var map__26104 = p__26103;
var map__26104__$1 = ((((!((map__26104 == null)))?(((((map__26104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26104):map__26104);
var file_msg = map__26104__$1;
var request_url = cljs.core.get.call(null,map__26104__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26104__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23371__auto___26154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23371__auto___26154,out){
return (function (){
var f__23372__auto__ = (function (){var switch__23348__auto__ = ((function (c__23371__auto___26154,out){
return (function (state_26139){
var state_val_26140 = (state_26139[(1)]);
if((state_val_26140 === (1))){
var inst_26113 = cljs.core.seq.call(null,files);
var inst_26114 = cljs.core.first.call(null,inst_26113);
var inst_26115 = cljs.core.next.call(null,inst_26113);
var inst_26116 = files;
var state_26139__$1 = (function (){var statearr_26141 = state_26139;
(statearr_26141[(7)] = inst_26115);

(statearr_26141[(8)] = inst_26116);

(statearr_26141[(9)] = inst_26114);

return statearr_26141;
})();
var statearr_26142_26155 = state_26139__$1;
(statearr_26142_26155[(2)] = null);

(statearr_26142_26155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (2))){
var inst_26122 = (state_26139[(10)]);
var inst_26116 = (state_26139[(8)]);
var inst_26121 = cljs.core.seq.call(null,inst_26116);
var inst_26122__$1 = cljs.core.first.call(null,inst_26121);
var inst_26123 = cljs.core.next.call(null,inst_26121);
var inst_26124 = (inst_26122__$1 == null);
var inst_26125 = cljs.core.not.call(null,inst_26124);
var state_26139__$1 = (function (){var statearr_26143 = state_26139;
(statearr_26143[(10)] = inst_26122__$1);

(statearr_26143[(11)] = inst_26123);

return statearr_26143;
})();
if(inst_26125){
var statearr_26144_26156 = state_26139__$1;
(statearr_26144_26156[(1)] = (4));

} else {
var statearr_26145_26157 = state_26139__$1;
(statearr_26145_26157[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (3))){
var inst_26137 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26139__$1,inst_26137);
} else {
if((state_val_26140 === (4))){
var inst_26122 = (state_26139[(10)]);
var inst_26127 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26122);
var state_26139__$1 = state_26139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26139__$1,(7),inst_26127);
} else {
if((state_val_26140 === (5))){
var inst_26133 = cljs.core.async.close_BANG_.call(null,out);
var state_26139__$1 = state_26139;
var statearr_26146_26158 = state_26139__$1;
(statearr_26146_26158[(2)] = inst_26133);

(statearr_26146_26158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (6))){
var inst_26135 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
var statearr_26147_26159 = state_26139__$1;
(statearr_26147_26159[(2)] = inst_26135);

(statearr_26147_26159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (7))){
var inst_26123 = (state_26139[(11)]);
var inst_26129 = (state_26139[(2)]);
var inst_26130 = cljs.core.async.put_BANG_.call(null,out,inst_26129);
var inst_26116 = inst_26123;
var state_26139__$1 = (function (){var statearr_26148 = state_26139;
(statearr_26148[(8)] = inst_26116);

(statearr_26148[(12)] = inst_26130);

return statearr_26148;
})();
var statearr_26149_26160 = state_26139__$1;
(statearr_26149_26160[(2)] = null);

(statearr_26149_26160[(1)] = (2));


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
});})(c__23371__auto___26154,out))
;
return ((function (switch__23348__auto__,c__23371__auto___26154,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23349__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23349__auto____0 = (function (){
var statearr_26150 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26150[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23349__auto__);

(statearr_26150[(1)] = (1));

return statearr_26150;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23349__auto____1 = (function (state_26139){
while(true){
var ret_value__23350__auto__ = (function (){try{while(true){
var result__23351__auto__ = switch__23348__auto__.call(null,state_26139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23351__auto__;
}
break;
}
}catch (e26151){if((e26151 instanceof Object)){
var ex__23352__auto__ = e26151;
var statearr_26152_26161 = state_26139;
(statearr_26152_26161[(5)] = ex__23352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26162 = state_26139;
state_26139 = G__26162;
continue;
} else {
return ret_value__23350__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23349__auto__ = function(state_26139){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23349__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23349__auto____1.call(this,state_26139);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23349__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23349__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23349__auto__;
})()
;})(switch__23348__auto__,c__23371__auto___26154,out))
})();
var state__23373__auto__ = (function (){var statearr_26153 = f__23372__auto__.call(null);
(statearr_26153[(6)] = c__23371__auto___26154);

return statearr_26153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23373__auto__);
});})(c__23371__auto___26154,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26163,opts){
var map__26164 = p__26163;
var map__26164__$1 = ((((!((map__26164 == null)))?(((((map__26164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26164):map__26164);
var eval_body = cljs.core.get.call(null,map__26164__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26164__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26166){var e = e26166;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26167_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26167_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26168){
var vec__26169 = p__26168;
var k = cljs.core.nth.call(null,vec__26169,(0),null);
var v = cljs.core.nth.call(null,vec__26169,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26172){
var vec__26173 = p__26172;
var k = cljs.core.nth.call(null,vec__26173,(0),null);
var v = cljs.core.nth.call(null,vec__26173,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26179,p__26180){
var map__26181 = p__26179;
var map__26181__$1 = ((((!((map__26181 == null)))?(((((map__26181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26181):map__26181);
var opts = map__26181__$1;
var before_jsload = cljs.core.get.call(null,map__26181__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26181__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26181__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26182 = p__26180;
var map__26182__$1 = ((((!((map__26182 == null)))?(((((map__26182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26182):map__26182);
var msg = map__26182__$1;
var files = cljs.core.get.call(null,map__26182__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26182__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26182__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23372__auto__ = (function (){var switch__23348__auto__ = ((function (c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26336){
var state_val_26337 = (state_26336[(1)]);
if((state_val_26337 === (7))){
var inst_26198 = (state_26336[(7)]);
var inst_26199 = (state_26336[(8)]);
var inst_26197 = (state_26336[(9)]);
var inst_26196 = (state_26336[(10)]);
var inst_26204 = cljs.core._nth.call(null,inst_26197,inst_26199);
var inst_26205 = figwheel.client.file_reloading.eval_body.call(null,inst_26204,opts);
var inst_26206 = (inst_26199 + (1));
var tmp26338 = inst_26198;
var tmp26339 = inst_26197;
var tmp26340 = inst_26196;
var inst_26196__$1 = tmp26340;
var inst_26197__$1 = tmp26339;
var inst_26198__$1 = tmp26338;
var inst_26199__$1 = inst_26206;
var state_26336__$1 = (function (){var statearr_26341 = state_26336;
(statearr_26341[(7)] = inst_26198__$1);

(statearr_26341[(11)] = inst_26205);

(statearr_26341[(8)] = inst_26199__$1);

(statearr_26341[(9)] = inst_26197__$1);

(statearr_26341[(10)] = inst_26196__$1);

return statearr_26341;
})();
var statearr_26342_26425 = state_26336__$1;
(statearr_26342_26425[(2)] = null);

(statearr_26342_26425[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (20))){
var inst_26239 = (state_26336[(12)]);
var inst_26247 = figwheel.client.file_reloading.sort_files.call(null,inst_26239);
var state_26336__$1 = state_26336;
var statearr_26343_26426 = state_26336__$1;
(statearr_26343_26426[(2)] = inst_26247);

(statearr_26343_26426[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (27))){
var state_26336__$1 = state_26336;
var statearr_26344_26427 = state_26336__$1;
(statearr_26344_26427[(2)] = null);

(statearr_26344_26427[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (1))){
var inst_26188 = (state_26336[(13)]);
var inst_26185 = before_jsload.call(null,files);
var inst_26186 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26187 = (function (){return ((function (inst_26188,inst_26185,inst_26186,state_val_26337,c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26176_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26176_SHARP_);
});
;})(inst_26188,inst_26185,inst_26186,state_val_26337,c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26188__$1 = cljs.core.filter.call(null,inst_26187,files);
var inst_26189 = cljs.core.not_empty.call(null,inst_26188__$1);
var state_26336__$1 = (function (){var statearr_26345 = state_26336;
(statearr_26345[(14)] = inst_26185);

(statearr_26345[(15)] = inst_26186);

(statearr_26345[(13)] = inst_26188__$1);

return statearr_26345;
})();
if(cljs.core.truth_(inst_26189)){
var statearr_26346_26428 = state_26336__$1;
(statearr_26346_26428[(1)] = (2));

} else {
var statearr_26347_26429 = state_26336__$1;
(statearr_26347_26429[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (24))){
var state_26336__$1 = state_26336;
var statearr_26348_26430 = state_26336__$1;
(statearr_26348_26430[(2)] = null);

(statearr_26348_26430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (39))){
var inst_26289 = (state_26336[(16)]);
var state_26336__$1 = state_26336;
var statearr_26349_26431 = state_26336__$1;
(statearr_26349_26431[(2)] = inst_26289);

(statearr_26349_26431[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (46))){
var inst_26331 = (state_26336[(2)]);
var state_26336__$1 = state_26336;
var statearr_26350_26432 = state_26336__$1;
(statearr_26350_26432[(2)] = inst_26331);

(statearr_26350_26432[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (4))){
var inst_26233 = (state_26336[(2)]);
var inst_26234 = cljs.core.List.EMPTY;
var inst_26235 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26234);
var inst_26236 = (function (){return ((function (inst_26233,inst_26234,inst_26235,state_val_26337,c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26177_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26177_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26177_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__26177_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_26233,inst_26234,inst_26235,state_val_26337,c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26237 = cljs.core.filter.call(null,inst_26236,files);
var inst_26238 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26239 = cljs.core.concat.call(null,inst_26237,inst_26238);
var state_26336__$1 = (function (){var statearr_26351 = state_26336;
(statearr_26351[(12)] = inst_26239);

(statearr_26351[(17)] = inst_26235);

(statearr_26351[(18)] = inst_26233);

return statearr_26351;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26352_26433 = state_26336__$1;
(statearr_26352_26433[(1)] = (16));

} else {
var statearr_26353_26434 = state_26336__$1;
(statearr_26353_26434[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (15))){
var inst_26223 = (state_26336[(2)]);
var state_26336__$1 = state_26336;
var statearr_26354_26435 = state_26336__$1;
(statearr_26354_26435[(2)] = inst_26223);

(statearr_26354_26435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (21))){
var inst_26249 = (state_26336[(19)]);
var inst_26249__$1 = (state_26336[(2)]);
var inst_26250 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26249__$1);
var state_26336__$1 = (function (){var statearr_26355 = state_26336;
(statearr_26355[(19)] = inst_26249__$1);

return statearr_26355;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26336__$1,(22),inst_26250);
} else {
if((state_val_26337 === (31))){
var inst_26334 = (state_26336[(2)]);
var state_26336__$1 = state_26336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26336__$1,inst_26334);
} else {
if((state_val_26337 === (32))){
var inst_26289 = (state_26336[(16)]);
var inst_26294 = inst_26289.cljs$lang$protocol_mask$partition0$;
var inst_26295 = (inst_26294 & (64));
var inst_26296 = inst_26289.cljs$core$ISeq$;
var inst_26297 = (cljs.core.PROTOCOL_SENTINEL === inst_26296);
var inst_26298 = ((inst_26295) || (inst_26297));
var state_26336__$1 = state_26336;
if(cljs.core.truth_(inst_26298)){
var statearr_26356_26436 = state_26336__$1;
(statearr_26356_26436[(1)] = (35));

} else {
var statearr_26357_26437 = state_26336__$1;
(statearr_26357_26437[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (40))){
var inst_26311 = (state_26336[(20)]);
var inst_26310 = (state_26336[(2)]);
var inst_26311__$1 = cljs.core.get.call(null,inst_26310,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26312 = cljs.core.get.call(null,inst_26310,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26313 = cljs.core.not_empty.call(null,inst_26311__$1);
var state_26336__$1 = (function (){var statearr_26358 = state_26336;
(statearr_26358[(20)] = inst_26311__$1);

(statearr_26358[(21)] = inst_26312);

return statearr_26358;
})();
if(cljs.core.truth_(inst_26313)){
var statearr_26359_26438 = state_26336__$1;
(statearr_26359_26438[(1)] = (41));

} else {
var statearr_26360_26439 = state_26336__$1;
(statearr_26360_26439[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (33))){
var state_26336__$1 = state_26336;
var statearr_26361_26440 = state_26336__$1;
(statearr_26361_26440[(2)] = false);

(statearr_26361_26440[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (13))){
var inst_26209 = (state_26336[(22)]);
var inst_26213 = cljs.core.chunk_first.call(null,inst_26209);
var inst_26214 = cljs.core.chunk_rest.call(null,inst_26209);
var inst_26215 = cljs.core.count.call(null,inst_26213);
var inst_26196 = inst_26214;
var inst_26197 = inst_26213;
var inst_26198 = inst_26215;
var inst_26199 = (0);
var state_26336__$1 = (function (){var statearr_26362 = state_26336;
(statearr_26362[(7)] = inst_26198);

(statearr_26362[(8)] = inst_26199);

(statearr_26362[(9)] = inst_26197);

(statearr_26362[(10)] = inst_26196);

return statearr_26362;
})();
var statearr_26363_26441 = state_26336__$1;
(statearr_26363_26441[(2)] = null);

(statearr_26363_26441[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (22))){
var inst_26249 = (state_26336[(19)]);
var inst_26252 = (state_26336[(23)]);
var inst_26257 = (state_26336[(24)]);
var inst_26253 = (state_26336[(25)]);
var inst_26252__$1 = (state_26336[(2)]);
var inst_26253__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26252__$1);
var inst_26254 = (function (){var all_files = inst_26249;
var res_SINGLEQUOTE_ = inst_26252__$1;
var res = inst_26253__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26249,inst_26252,inst_26257,inst_26253,inst_26252__$1,inst_26253__$1,state_val_26337,c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26178_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26178_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26249,inst_26252,inst_26257,inst_26253,inst_26252__$1,inst_26253__$1,state_val_26337,c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26255 = cljs.core.filter.call(null,inst_26254,inst_26252__$1);
var inst_26256 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26257__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26256);
var inst_26258 = cljs.core.not_empty.call(null,inst_26257__$1);
var state_26336__$1 = (function (){var statearr_26364 = state_26336;
(statearr_26364[(23)] = inst_26252__$1);

(statearr_26364[(26)] = inst_26255);

(statearr_26364[(24)] = inst_26257__$1);

(statearr_26364[(25)] = inst_26253__$1);

return statearr_26364;
})();
if(cljs.core.truth_(inst_26258)){
var statearr_26365_26442 = state_26336__$1;
(statearr_26365_26442[(1)] = (23));

} else {
var statearr_26366_26443 = state_26336__$1;
(statearr_26366_26443[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (36))){
var state_26336__$1 = state_26336;
var statearr_26367_26444 = state_26336__$1;
(statearr_26367_26444[(2)] = false);

(statearr_26367_26444[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (41))){
var inst_26311 = (state_26336[(20)]);
var inst_26315 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26316 = cljs.core.map.call(null,inst_26315,inst_26311);
var inst_26317 = cljs.core.pr_str.call(null,inst_26316);
var inst_26318 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26317)].join('');
var inst_26319 = figwheel.client.utils.log.call(null,inst_26318);
var state_26336__$1 = state_26336;
var statearr_26368_26445 = state_26336__$1;
(statearr_26368_26445[(2)] = inst_26319);

(statearr_26368_26445[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (43))){
var inst_26312 = (state_26336[(21)]);
var inst_26322 = (state_26336[(2)]);
var inst_26323 = cljs.core.not_empty.call(null,inst_26312);
var state_26336__$1 = (function (){var statearr_26369 = state_26336;
(statearr_26369[(27)] = inst_26322);

return statearr_26369;
})();
if(cljs.core.truth_(inst_26323)){
var statearr_26370_26446 = state_26336__$1;
(statearr_26370_26446[(1)] = (44));

} else {
var statearr_26371_26447 = state_26336__$1;
(statearr_26371_26447[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (29))){
var inst_26249 = (state_26336[(19)]);
var inst_26252 = (state_26336[(23)]);
var inst_26255 = (state_26336[(26)]);
var inst_26257 = (state_26336[(24)]);
var inst_26289 = (state_26336[(16)]);
var inst_26253 = (state_26336[(25)]);
var inst_26285 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26288 = (function (){var all_files = inst_26249;
var res_SINGLEQUOTE_ = inst_26252;
var res = inst_26253;
var files_not_loaded = inst_26255;
var dependencies_that_loaded = inst_26257;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26249,inst_26252,inst_26255,inst_26257,inst_26289,inst_26253,inst_26285,state_val_26337,c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26287){
var map__26372 = p__26287;
var map__26372__$1 = ((((!((map__26372 == null)))?(((((map__26372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26372):map__26372);
var namespace = cljs.core.get.call(null,map__26372__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26249,inst_26252,inst_26255,inst_26257,inst_26289,inst_26253,inst_26285,state_val_26337,c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26289__$1 = cljs.core.group_by.call(null,inst_26288,inst_26255);
var inst_26291 = (inst_26289__$1 == null);
var inst_26292 = cljs.core.not.call(null,inst_26291);
var state_26336__$1 = (function (){var statearr_26374 = state_26336;
(statearr_26374[(28)] = inst_26285);

(statearr_26374[(16)] = inst_26289__$1);

return statearr_26374;
})();
if(inst_26292){
var statearr_26375_26448 = state_26336__$1;
(statearr_26375_26448[(1)] = (32));

} else {
var statearr_26376_26449 = state_26336__$1;
(statearr_26376_26449[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (44))){
var inst_26312 = (state_26336[(21)]);
var inst_26325 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26312);
var inst_26326 = cljs.core.pr_str.call(null,inst_26325);
var inst_26327 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26326)].join('');
var inst_26328 = figwheel.client.utils.log.call(null,inst_26327);
var state_26336__$1 = state_26336;
var statearr_26377_26450 = state_26336__$1;
(statearr_26377_26450[(2)] = inst_26328);

(statearr_26377_26450[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (6))){
var inst_26230 = (state_26336[(2)]);
var state_26336__$1 = state_26336;
var statearr_26378_26451 = state_26336__$1;
(statearr_26378_26451[(2)] = inst_26230);

(statearr_26378_26451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (28))){
var inst_26255 = (state_26336[(26)]);
var inst_26282 = (state_26336[(2)]);
var inst_26283 = cljs.core.not_empty.call(null,inst_26255);
var state_26336__$1 = (function (){var statearr_26379 = state_26336;
(statearr_26379[(29)] = inst_26282);

return statearr_26379;
})();
if(cljs.core.truth_(inst_26283)){
var statearr_26380_26452 = state_26336__$1;
(statearr_26380_26452[(1)] = (29));

} else {
var statearr_26381_26453 = state_26336__$1;
(statearr_26381_26453[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (25))){
var inst_26253 = (state_26336[(25)]);
var inst_26269 = (state_26336[(2)]);
var inst_26270 = cljs.core.not_empty.call(null,inst_26253);
var state_26336__$1 = (function (){var statearr_26382 = state_26336;
(statearr_26382[(30)] = inst_26269);

return statearr_26382;
})();
if(cljs.core.truth_(inst_26270)){
var statearr_26383_26454 = state_26336__$1;
(statearr_26383_26454[(1)] = (26));

} else {
var statearr_26384_26455 = state_26336__$1;
(statearr_26384_26455[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (34))){
var inst_26305 = (state_26336[(2)]);
var state_26336__$1 = state_26336;
if(cljs.core.truth_(inst_26305)){
var statearr_26385_26456 = state_26336__$1;
(statearr_26385_26456[(1)] = (38));

} else {
var statearr_26386_26457 = state_26336__$1;
(statearr_26386_26457[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (17))){
var state_26336__$1 = state_26336;
var statearr_26387_26458 = state_26336__$1;
(statearr_26387_26458[(2)] = recompile_dependents);

(statearr_26387_26458[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (3))){
var state_26336__$1 = state_26336;
var statearr_26388_26459 = state_26336__$1;
(statearr_26388_26459[(2)] = null);

(statearr_26388_26459[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (12))){
var inst_26226 = (state_26336[(2)]);
var state_26336__$1 = state_26336;
var statearr_26389_26460 = state_26336__$1;
(statearr_26389_26460[(2)] = inst_26226);

(statearr_26389_26460[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (2))){
var inst_26188 = (state_26336[(13)]);
var inst_26195 = cljs.core.seq.call(null,inst_26188);
var inst_26196 = inst_26195;
var inst_26197 = null;
var inst_26198 = (0);
var inst_26199 = (0);
var state_26336__$1 = (function (){var statearr_26390 = state_26336;
(statearr_26390[(7)] = inst_26198);

(statearr_26390[(8)] = inst_26199);

(statearr_26390[(9)] = inst_26197);

(statearr_26390[(10)] = inst_26196);

return statearr_26390;
})();
var statearr_26391_26461 = state_26336__$1;
(statearr_26391_26461[(2)] = null);

(statearr_26391_26461[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (23))){
var inst_26249 = (state_26336[(19)]);
var inst_26252 = (state_26336[(23)]);
var inst_26255 = (state_26336[(26)]);
var inst_26257 = (state_26336[(24)]);
var inst_26253 = (state_26336[(25)]);
var inst_26260 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26262 = (function (){var all_files = inst_26249;
var res_SINGLEQUOTE_ = inst_26252;
var res = inst_26253;
var files_not_loaded = inst_26255;
var dependencies_that_loaded = inst_26257;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26249,inst_26252,inst_26255,inst_26257,inst_26253,inst_26260,state_val_26337,c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26261){
var map__26392 = p__26261;
var map__26392__$1 = ((((!((map__26392 == null)))?(((((map__26392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26392):map__26392);
var request_url = cljs.core.get.call(null,map__26392__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26249,inst_26252,inst_26255,inst_26257,inst_26253,inst_26260,state_val_26337,c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26263 = cljs.core.reverse.call(null,inst_26257);
var inst_26264 = cljs.core.map.call(null,inst_26262,inst_26263);
var inst_26265 = cljs.core.pr_str.call(null,inst_26264);
var inst_26266 = figwheel.client.utils.log.call(null,inst_26265);
var state_26336__$1 = (function (){var statearr_26394 = state_26336;
(statearr_26394[(31)] = inst_26260);

return statearr_26394;
})();
var statearr_26395_26462 = state_26336__$1;
(statearr_26395_26462[(2)] = inst_26266);

(statearr_26395_26462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (35))){
var state_26336__$1 = state_26336;
var statearr_26396_26463 = state_26336__$1;
(statearr_26396_26463[(2)] = true);

(statearr_26396_26463[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (19))){
var inst_26239 = (state_26336[(12)]);
var inst_26245 = figwheel.client.file_reloading.expand_files.call(null,inst_26239);
var state_26336__$1 = state_26336;
var statearr_26397_26464 = state_26336__$1;
(statearr_26397_26464[(2)] = inst_26245);

(statearr_26397_26464[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (11))){
var state_26336__$1 = state_26336;
var statearr_26398_26465 = state_26336__$1;
(statearr_26398_26465[(2)] = null);

(statearr_26398_26465[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (9))){
var inst_26228 = (state_26336[(2)]);
var state_26336__$1 = state_26336;
var statearr_26399_26466 = state_26336__$1;
(statearr_26399_26466[(2)] = inst_26228);

(statearr_26399_26466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (5))){
var inst_26198 = (state_26336[(7)]);
var inst_26199 = (state_26336[(8)]);
var inst_26201 = (inst_26199 < inst_26198);
var inst_26202 = inst_26201;
var state_26336__$1 = state_26336;
if(cljs.core.truth_(inst_26202)){
var statearr_26400_26467 = state_26336__$1;
(statearr_26400_26467[(1)] = (7));

} else {
var statearr_26401_26468 = state_26336__$1;
(statearr_26401_26468[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (14))){
var inst_26209 = (state_26336[(22)]);
var inst_26218 = cljs.core.first.call(null,inst_26209);
var inst_26219 = figwheel.client.file_reloading.eval_body.call(null,inst_26218,opts);
var inst_26220 = cljs.core.next.call(null,inst_26209);
var inst_26196 = inst_26220;
var inst_26197 = null;
var inst_26198 = (0);
var inst_26199 = (0);
var state_26336__$1 = (function (){var statearr_26402 = state_26336;
(statearr_26402[(32)] = inst_26219);

(statearr_26402[(7)] = inst_26198);

(statearr_26402[(8)] = inst_26199);

(statearr_26402[(9)] = inst_26197);

(statearr_26402[(10)] = inst_26196);

return statearr_26402;
})();
var statearr_26403_26469 = state_26336__$1;
(statearr_26403_26469[(2)] = null);

(statearr_26403_26469[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (45))){
var state_26336__$1 = state_26336;
var statearr_26404_26470 = state_26336__$1;
(statearr_26404_26470[(2)] = null);

(statearr_26404_26470[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (26))){
var inst_26249 = (state_26336[(19)]);
var inst_26252 = (state_26336[(23)]);
var inst_26255 = (state_26336[(26)]);
var inst_26257 = (state_26336[(24)]);
var inst_26253 = (state_26336[(25)]);
var inst_26272 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26274 = (function (){var all_files = inst_26249;
var res_SINGLEQUOTE_ = inst_26252;
var res = inst_26253;
var files_not_loaded = inst_26255;
var dependencies_that_loaded = inst_26257;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26249,inst_26252,inst_26255,inst_26257,inst_26253,inst_26272,state_val_26337,c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26273){
var map__26405 = p__26273;
var map__26405__$1 = ((((!((map__26405 == null)))?(((((map__26405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26405):map__26405);
var namespace = cljs.core.get.call(null,map__26405__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26405__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26249,inst_26252,inst_26255,inst_26257,inst_26253,inst_26272,state_val_26337,c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26275 = cljs.core.map.call(null,inst_26274,inst_26253);
var inst_26276 = cljs.core.pr_str.call(null,inst_26275);
var inst_26277 = figwheel.client.utils.log.call(null,inst_26276);
var inst_26278 = (function (){var all_files = inst_26249;
var res_SINGLEQUOTE_ = inst_26252;
var res = inst_26253;
var files_not_loaded = inst_26255;
var dependencies_that_loaded = inst_26257;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26249,inst_26252,inst_26255,inst_26257,inst_26253,inst_26272,inst_26274,inst_26275,inst_26276,inst_26277,state_val_26337,c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26249,inst_26252,inst_26255,inst_26257,inst_26253,inst_26272,inst_26274,inst_26275,inst_26276,inst_26277,state_val_26337,c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26279 = setTimeout(inst_26278,(10));
var state_26336__$1 = (function (){var statearr_26407 = state_26336;
(statearr_26407[(33)] = inst_26272);

(statearr_26407[(34)] = inst_26277);

return statearr_26407;
})();
var statearr_26408_26471 = state_26336__$1;
(statearr_26408_26471[(2)] = inst_26279);

(statearr_26408_26471[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (16))){
var state_26336__$1 = state_26336;
var statearr_26409_26472 = state_26336__$1;
(statearr_26409_26472[(2)] = reload_dependents);

(statearr_26409_26472[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (38))){
var inst_26289 = (state_26336[(16)]);
var inst_26307 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26289);
var state_26336__$1 = state_26336;
var statearr_26410_26473 = state_26336__$1;
(statearr_26410_26473[(2)] = inst_26307);

(statearr_26410_26473[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (30))){
var state_26336__$1 = state_26336;
var statearr_26411_26474 = state_26336__$1;
(statearr_26411_26474[(2)] = null);

(statearr_26411_26474[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (10))){
var inst_26209 = (state_26336[(22)]);
var inst_26211 = cljs.core.chunked_seq_QMARK_.call(null,inst_26209);
var state_26336__$1 = state_26336;
if(inst_26211){
var statearr_26412_26475 = state_26336__$1;
(statearr_26412_26475[(1)] = (13));

} else {
var statearr_26413_26476 = state_26336__$1;
(statearr_26413_26476[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (18))){
var inst_26243 = (state_26336[(2)]);
var state_26336__$1 = state_26336;
if(cljs.core.truth_(inst_26243)){
var statearr_26414_26477 = state_26336__$1;
(statearr_26414_26477[(1)] = (19));

} else {
var statearr_26415_26478 = state_26336__$1;
(statearr_26415_26478[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (42))){
var state_26336__$1 = state_26336;
var statearr_26416_26479 = state_26336__$1;
(statearr_26416_26479[(2)] = null);

(statearr_26416_26479[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (37))){
var inst_26302 = (state_26336[(2)]);
var state_26336__$1 = state_26336;
var statearr_26417_26480 = state_26336__$1;
(statearr_26417_26480[(2)] = inst_26302);

(statearr_26417_26480[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (8))){
var inst_26209 = (state_26336[(22)]);
var inst_26196 = (state_26336[(10)]);
var inst_26209__$1 = cljs.core.seq.call(null,inst_26196);
var state_26336__$1 = (function (){var statearr_26418 = state_26336;
(statearr_26418[(22)] = inst_26209__$1);

return statearr_26418;
})();
if(inst_26209__$1){
var statearr_26419_26481 = state_26336__$1;
(statearr_26419_26481[(1)] = (10));

} else {
var statearr_26420_26482 = state_26336__$1;
(statearr_26420_26482[(1)] = (11));

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
});})(c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23348__auto__,c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23349__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23349__auto____0 = (function (){
var statearr_26421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26421[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23349__auto__);

(statearr_26421[(1)] = (1));

return statearr_26421;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23349__auto____1 = (function (state_26336){
while(true){
var ret_value__23350__auto__ = (function (){try{while(true){
var result__23351__auto__ = switch__23348__auto__.call(null,state_26336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23351__auto__;
}
break;
}
}catch (e26422){if((e26422 instanceof Object)){
var ex__23352__auto__ = e26422;
var statearr_26423_26483 = state_26336;
(statearr_26423_26483[(5)] = ex__23352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26484 = state_26336;
state_26336 = G__26484;
continue;
} else {
return ret_value__23350__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23349__auto__ = function(state_26336){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23349__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23349__auto____1.call(this,state_26336);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23349__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23349__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23349__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23349__auto__;
})()
;})(switch__23348__auto__,c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23373__auto__ = (function (){var statearr_26424 = f__23372__auto__.call(null);
(statearr_26424[(6)] = c__23371__auto__);

return statearr_26424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23373__auto__);
});})(c__23371__auto__,map__26181,map__26181__$1,opts,before_jsload,on_jsload,reload_dependents,map__26182,map__26182__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23371__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26487,link){
var map__26488 = p__26487;
var map__26488__$1 = ((((!((map__26488 == null)))?(((((map__26488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26488):map__26488);
var file = cljs.core.get.call(null,map__26488__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__26488,map__26488__$1,file){
return (function (p1__26485_SHARP_,p2__26486_SHARP_){
if(cljs.core._EQ_.call(null,p1__26485_SHARP_,p2__26486_SHARP_)){
return p1__26485_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__26488,map__26488__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26491){
var map__26492 = p__26491;
var map__26492__$1 = ((((!((map__26492 == null)))?(((((map__26492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26492):map__26492);
var match_length = cljs.core.get.call(null,map__26492__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26492__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26490_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26490_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26494_SHARP_,p2__26495_SHARP_){
return cljs.core.assoc.call(null,p1__26494_SHARP_,cljs.core.get.call(null,p2__26495_SHARP_,key),p2__26495_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_26496 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_26496);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_26496);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26497,p__26498){
var map__26499 = p__26497;
var map__26499__$1 = ((((!((map__26499 == null)))?(((((map__26499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26499):map__26499);
var on_cssload = cljs.core.get.call(null,map__26499__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__26500 = p__26498;
var map__26500__$1 = ((((!((map__26500 == null)))?(((((map__26500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26500):map__26500);
var files_msg = map__26500__$1;
var files = cljs.core.get.call(null,map__26500__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1530194945335
