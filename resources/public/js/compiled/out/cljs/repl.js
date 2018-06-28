// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35735){
var map__35736 = p__35735;
var map__35736__$1 = ((((!((map__35736 == null)))?(((((map__35736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35736):map__35736);
var m = map__35736__$1;
var n = cljs.core.get.call(null,map__35736__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35736__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35738_35760 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35739_35761 = null;
var count__35740_35762 = (0);
var i__35741_35763 = (0);
while(true){
if((i__35741_35763 < count__35740_35762)){
var f_35764 = cljs.core._nth.call(null,chunk__35739_35761,i__35741_35763);
cljs.core.println.call(null,"  ",f_35764);


var G__35765 = seq__35738_35760;
var G__35766 = chunk__35739_35761;
var G__35767 = count__35740_35762;
var G__35768 = (i__35741_35763 + (1));
seq__35738_35760 = G__35765;
chunk__35739_35761 = G__35766;
count__35740_35762 = G__35767;
i__35741_35763 = G__35768;
continue;
} else {
var temp__5457__auto___35769 = cljs.core.seq.call(null,seq__35738_35760);
if(temp__5457__auto___35769){
var seq__35738_35770__$1 = temp__5457__auto___35769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35738_35770__$1)){
var c__4319__auto___35771 = cljs.core.chunk_first.call(null,seq__35738_35770__$1);
var G__35772 = cljs.core.chunk_rest.call(null,seq__35738_35770__$1);
var G__35773 = c__4319__auto___35771;
var G__35774 = cljs.core.count.call(null,c__4319__auto___35771);
var G__35775 = (0);
seq__35738_35760 = G__35772;
chunk__35739_35761 = G__35773;
count__35740_35762 = G__35774;
i__35741_35763 = G__35775;
continue;
} else {
var f_35776 = cljs.core.first.call(null,seq__35738_35770__$1);
cljs.core.println.call(null,"  ",f_35776);


var G__35777 = cljs.core.next.call(null,seq__35738_35770__$1);
var G__35778 = null;
var G__35779 = (0);
var G__35780 = (0);
seq__35738_35760 = G__35777;
chunk__35739_35761 = G__35778;
count__35740_35762 = G__35779;
i__35741_35763 = G__35780;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35781 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35781);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35781)))?cljs.core.second.call(null,arglists_35781):arglists_35781));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35742_35782 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35743_35783 = null;
var count__35744_35784 = (0);
var i__35745_35785 = (0);
while(true){
if((i__35745_35785 < count__35744_35784)){
var vec__35746_35786 = cljs.core._nth.call(null,chunk__35743_35783,i__35745_35785);
var name_35787 = cljs.core.nth.call(null,vec__35746_35786,(0),null);
var map__35749_35788 = cljs.core.nth.call(null,vec__35746_35786,(1),null);
var map__35749_35789__$1 = ((((!((map__35749_35788 == null)))?(((((map__35749_35788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35749_35788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35749_35788):map__35749_35788);
var doc_35790 = cljs.core.get.call(null,map__35749_35789__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35791 = cljs.core.get.call(null,map__35749_35789__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35787);

cljs.core.println.call(null," ",arglists_35791);

if(cljs.core.truth_(doc_35790)){
cljs.core.println.call(null," ",doc_35790);
} else {
}


var G__35792 = seq__35742_35782;
var G__35793 = chunk__35743_35783;
var G__35794 = count__35744_35784;
var G__35795 = (i__35745_35785 + (1));
seq__35742_35782 = G__35792;
chunk__35743_35783 = G__35793;
count__35744_35784 = G__35794;
i__35745_35785 = G__35795;
continue;
} else {
var temp__5457__auto___35796 = cljs.core.seq.call(null,seq__35742_35782);
if(temp__5457__auto___35796){
var seq__35742_35797__$1 = temp__5457__auto___35796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35742_35797__$1)){
var c__4319__auto___35798 = cljs.core.chunk_first.call(null,seq__35742_35797__$1);
var G__35799 = cljs.core.chunk_rest.call(null,seq__35742_35797__$1);
var G__35800 = c__4319__auto___35798;
var G__35801 = cljs.core.count.call(null,c__4319__auto___35798);
var G__35802 = (0);
seq__35742_35782 = G__35799;
chunk__35743_35783 = G__35800;
count__35744_35784 = G__35801;
i__35745_35785 = G__35802;
continue;
} else {
var vec__35751_35803 = cljs.core.first.call(null,seq__35742_35797__$1);
var name_35804 = cljs.core.nth.call(null,vec__35751_35803,(0),null);
var map__35754_35805 = cljs.core.nth.call(null,vec__35751_35803,(1),null);
var map__35754_35806__$1 = ((((!((map__35754_35805 == null)))?(((((map__35754_35805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35754_35805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35754_35805):map__35754_35805);
var doc_35807 = cljs.core.get.call(null,map__35754_35806__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35808 = cljs.core.get.call(null,map__35754_35806__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35804);

cljs.core.println.call(null," ",arglists_35808);

if(cljs.core.truth_(doc_35807)){
cljs.core.println.call(null," ",doc_35807);
} else {
}


var G__35809 = cljs.core.next.call(null,seq__35742_35797__$1);
var G__35810 = null;
var G__35811 = (0);
var G__35812 = (0);
seq__35742_35782 = G__35809;
chunk__35743_35783 = G__35810;
count__35744_35784 = G__35811;
i__35745_35785 = G__35812;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__35756 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35757 = null;
var count__35758 = (0);
var i__35759 = (0);
while(true){
if((i__35759 < count__35758)){
var role = cljs.core._nth.call(null,chunk__35757,i__35759);
var temp__5457__auto___35813__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___35813__$1)){
var spec_35814 = temp__5457__auto___35813__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35814));
} else {
}


var G__35815 = seq__35756;
var G__35816 = chunk__35757;
var G__35817 = count__35758;
var G__35818 = (i__35759 + (1));
seq__35756 = G__35815;
chunk__35757 = G__35816;
count__35758 = G__35817;
i__35759 = G__35818;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__35756);
if(temp__5457__auto____$1){
var seq__35756__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35756__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__35756__$1);
var G__35819 = cljs.core.chunk_rest.call(null,seq__35756__$1);
var G__35820 = c__4319__auto__;
var G__35821 = cljs.core.count.call(null,c__4319__auto__);
var G__35822 = (0);
seq__35756 = G__35819;
chunk__35757 = G__35820;
count__35758 = G__35821;
i__35759 = G__35822;
continue;
} else {
var role = cljs.core.first.call(null,seq__35756__$1);
var temp__5457__auto___35823__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___35823__$2)){
var spec_35824 = temp__5457__auto___35823__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35824));
} else {
}


var G__35825 = cljs.core.next.call(null,seq__35756__$1);
var G__35826 = null;
var G__35827 = (0);
var G__35828 = (0);
seq__35756 = G__35825;
chunk__35757 = G__35826;
count__35758 = G__35827;
i__35759 = G__35828;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1530194853347
