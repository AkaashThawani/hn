import{a as j,b as J,h as W,i as X,j as Y,k as Z,l as ee}from"./chunk-5UWJZI5H.js";import{a as te}from"./chunk-LLKAV3SA.js";import{$ as b,Ba as S,G as g,Ia as F,Ja as H,K as v,L as C,La as V,Ta as z,U as D,Ua as w,V as O,Z as i,Za as N,a as L,b as A,bb as R,da as p,ea as h,eb as M,ec as $,fa as l,fc as q,ga as o,ha as r,ia as d,ic as ne,la as T,oa as k,ob as B,pa as c,pb as K,qb as U,rb as G,sa as P,sb as Q,ta as I,wa as m,xa as f,ya as x}from"./chunk-7GNFALUO.js";var re=[""];function se(s,n){if(s&1){let e=T();o(0,"span",14),k("click",function(){v(e);let a=c(2).index,_=c();return C(_.scrollToNext(_.data,a))}),m(1,"next"),r()}}function le(s,n){if(s&1){let e=T();o(0,"span",15),k("click",function(){v(e),c();let a=h(1);return C(a.expanded=!a.expanded)}),m(1," [ - ] "),r()}}function me(s,n){if(s&1){let e=T();o(0,"span",16),k("click",function(){v(e),c();let a=h(1);return C(a.expanded=!a.expanded)}),m(1,"[ + ]"),r()}}function pe(s,n){if(s&1&&(o(0,"div",17),d(1,"app-comments",18),r()),s&2){let e=c(2).$implicit;i(1),l("data",e.kidsData)}}function de(s,n){if(s&1&&(o(0,"mat-expansion-panel",4,5)(2,"mat-expansion-panel-header")(3,"mat-panel-title")(4,"span",6)(5,"a",7),m(6),r(),o(7,"a"),m(8),r(),p(9,se,2,0,"span",8),o(10,"span"),p(11,le,2,0,"span",9),p(12,me,2,0,"span",10),r()()()(),o(13,"div",11),d(14,"div",12),r(),p(15,pe,2,1,"div",13),r()),s&2){let e=h(1),t=c(),a=t.$implicit,_=t.last,ae=c();i(4),l("id",a.id),i(1),I("routerLink","/user/",a.by,""),i(1),f((a==null?null:a.by)+" "),i(2),x("",ae.getTime(a==null?null:a.time)," | "),i(1),l("ngIf",!_),i(2),l("ngIf",e.expanded==!0),i(1),l("ngIf",e.expanded==!1),i(2),l("innerHTML",a==null?null:a.text,D),i(1),l("ngIf",a==null?null:a.kidsData)}}function ce(s,n){if(s&1&&(o(0,"mat-accordion",2),p(1,de,16,9,"mat-expansion-panel",3),r()),s&2){let e=n.$implicit;i(1),l("ngIf",!e.deleted)}}function ue(s,n){s&1&&(o(0,"div"),d(1,"div",19)(2,"div",19),o(3,"div"),d(4,"div",19)(5,"div",19),r(),o(6,"div"),d(7,"div",19)(8,"div",19),r()())}var u=class{constructor(){this.data=[]}ngOnInit(){this.sortCommentsOnTime()}scrollToNext(n,e){if(n[e+1]){var t=document.getElementById(n[e+1].id);t?.scrollIntoView({behavior:"smooth",block:"start"})}else console.log("parent scroll trig"),this.scrollToParentNext(n[e].parent);console.log(n)}scrollToParentNext(n){console.log(n)}sortCommentsOnTime(){this.data.sort(({time:n},{time:e})=>n>e?1:n<e?-1:0)}getTime(n){var e=new Date().getTime(),t=new Date(n*1e3).getTime();return e-t<=36e5?new Date(e-t).getUTCMinutes()+" minutes":new Date(e-t).getUTCHours()+" hours"}},E=u;(()=>{u.\u0275fac=function(e){return new(e||u)}})(),(()=>{u.\u0275cmp=g({type:u,selectors:[["app-comments"]],viewQuery:function(e,t){if(e&1&&H(re,5),e&2){let a;F(a=V())&&(t.span=a.first)}},inputs:{data:"data"},standalone:!0,features:[S],decls:2,vars:2,consts:[["accordion","",4,"ngFor","ngForOf"],[4,"ngIf"],["accordion",""],["hideToggle","","expanded","true","disabled","true","class","comment",4,"ngIf"],["hideToggle","","expanded","true","disabled","true",1,"comment"],["mep","matExpansionPanel"],[1,"comment-info",3,"id"],[3,"routerLink"],["class","next","matTooltip","Go to next",3,"click",4,"ngIf"],["class","minimize","matTooltip","minimize",3,"click",4,"ngIf"],["class","minimize","matTooltip","expand",3,"click",4,"ngIf"],[1,"comment-body"],[1,"comment-text",3,"innerHTML"],["class","sub-comments",4,"ngIf"],["matTooltip","Go to next",1,"next",3,"click"],["matTooltip","minimize",1,"minimize",3,"click"],["matTooltip","expand",1,"minimize",3,"click"],[1,"sub-comments"],[3,"data"],[1,"skeleton","skeleton-text"]],template:function(e,t){e&1&&(p(0,ce,2,1,"mat-accordion",0),p(1,ue,9,0,"div",1)),e&2&&(l("ngForOf",t.data),i(1),l("ngIf",t.data.length==0))},dependencies:[u,N,z,w,ee,Z,W,X,Y,M],styles:[".comment-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:start;align-items:center;gap:4px}@media screen and (max-width: 900px){.sub-comments[_ngcontent-%COMP%]{margin-left:5px}}.sub-comments[_ngcontent-%COMP%]{margin-left:12px}"]})})();function _e(s,n){if(s&1&&d(0,"div",13),s&2){let e=c();l("innerHTML",e.storyData.text,D)}}var y=class{constructor(n,e){this.activatedRoute=n,this.apiService=e,this.storyId="",this.storyData=[],this.kidsArray=[],this.kidsArrayData=[]}ngOnInit(){this.storyId=this.activatedRoute.snapshot.params.id,this.getStoryData()}getStoryData(){this.apiService.getStoryById(this.storyId).subscribe(n=>{this.storyData=n,this.getKidsData()})}getKidsData(){this.kidsArray=this.storyData.kids,this.kidsArray.forEach(n=>{this.apiService.getCommentById(n).subscribe(e=>{var t=this.getSubKids(e);this.kidsArrayData.push(t)})}),console.log(this.kidsArrayData)}getTime(n){var e=new Date().getTime(),t=new Date(n*1e3).getTime();return e-t<=36e5?new Date(e-t).getUTCMinutes()+" minutes":new Date(e-t).getUTCHours()+" hours"}getSubKids(n){if(n.kids){let e=[];return n.kids.forEach(t=>{this.apiService.getCommentById(t).subscribe(a=>{var _=this.getSubKids(a);e.push(_)})}),A(L({},n),{kidsData:e})}else return n}},ie=y;(()=>{y.\u0275fac=function(e){return new(e||y)(b(R),b(ne))}})(),(()=>{y.\u0275cmp=g({type:y,selectors:[["app-story"]],standalone:!0,features:[S],decls:21,vars:10,consts:[[1,"sticky"],[1,"page"],[1,"story"],["fxLayout","row wrap","fxLayoutAlign","start center",1,"p-15"],["fxFlex","15",1,"m-20"],["fxFlex",""],[1,"story-title","bold"],[3,"innerHTML",4,"ngIf"],["target","_blank",1,"story-url",3,"href"],[1,"story-info"],["mat-flat-button","",1,"text-left",3,"routerLink"],["fxLayout","column nowrap","fxLayoutAlign","start stretch","fxLayoutGap","15px",2,"margin-top","10px"],[3,"data"],[3,"innerHTML"]],template:function(e,t){e&1&&(d(0,"app-heading",0),o(1,"div",1)(2,"mat-card",2)(3,"div",3)(4,"div",4),m(5),r(),o(6,"div",5)(7,"span",6),m(8),r(),p(9,_e,1,1,"div",7),o(10,"a",8),m(11),r(),o(12,"div",9)(13,"button",10),m(14),r(),o(15,"div"),m(16),r(),o(17,"div"),m(18),r()()()()(),o(19,"div",11),d(20,"app-comments",12),r()()),e&2&&(i(5),f(t.storyData.score),i(3),f(t.storyData==null?null:t.storyData.title),i(1),l("ngIf",t.storyData==null?null:t.storyData.text),i(1),P("href",t.storyData==null?null:t.storyData.url,O),i(1),f(t.storyData==null?null:t.storyData.url),i(2),I("routerLink","/user/",t.storyData==null?null:t.storyData.by,""),i(1),x("",t.storyData==null?null:t.storyData.by," "),i(2),x(" ",t.storyData==null?null:t.storyData.descendants," comments "),i(2),x(" ",t.getTime(t.storyData.time)," "),i(2),l("data",t.kidsArrayData))},dependencies:[te,M,J,j,w,E,q,$,Q,B,K,G,U],styles:[".textarea[_ngcontent-%COMP%]{resize:none}.bold[_ngcontent-%COMP%]{font-weight:700}.p-15[_ngcontent-%COMP%]{padding:15px}"]})})();export{ie as StoryComponent};
