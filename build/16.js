webpackJsonp([16],{1908:function(l,n,u){"use strict";function a(l){return r._42(0,[(l()(),r._16(0,0,null,null,1,"core-courses-course-list-item",[],null,null,null,K.b,K.a)),r._15(1,114688,null,0,w.a,[[2,L.a],O.a,_.a,R.a],{course:[0,"course"]},null)],function(l,n){l(n,1,0,n.context.$implicit)},null)}function e(l){return r._42(0,[(l()(),r._16(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),r._40(-1,null,["\n            "])),(l()(),r._11(16777216,null,null,1,null,a)),r._15(3,802816,null,0,U.j,[r.W,r.T,r.v],{ngForOf:[0,"ngForOf"]},null),(l()(),r._40(-1,null,["\n        "]))],function(l,n){l(n,3,0,n.component.courses)},null)}function o(l){return r._42(0,[(l()(),r._16(0,0,null,null,2,"core-empty-box",[["icon","ionic"]],null,null,null,D.b,D.a)),r._15(1,49152,null,0,j.a,[],{message:[0,"message"],icon:[1,"icon"]},null),r._32(131072,B.a,[O.a,r.i])],function(l,n){l(n,1,0,r._41(n,1,0,r._29(n,2).transform("core.courses.nocourses")),"ionic")},null)}function t(l){return r._42(0,[(l()(),r._16(0,0,null,null,12,"ion-header",[],null,null,null,null,null)),r._15(1,16384,null,0,M.a,[E.a,r.p,r.K,[2,S.a]],null,null),(l()(),r._40(-1,null,["\n    "])),(l()(),r._16(3,0,null,null,8,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,A.b,A.a)),r._15(4,49152,null,0,H.a,[J.a,[2,S.a],[2,L.a],E.a,r.p,r.K],null,null),r._15(5,212992,null,0,N.a,[H.a,V.a,O.a,q.a],null,null),(l()(),r._40(-1,3,["\n        "])),(l()(),r._16(7,0,null,3,3,"ion-title",[],null,null,null,z.b,z.a)),r._15(8,49152,null,0,G.a,[E.a,r.p,r.K,[2,Q.a],[2,H.a]],null,null),(l()(),r._40(9,0,["",""])),r._32(131072,B.a,[O.a,r.i]),(l()(),r._40(-1,3,["\n    "])),(l()(),r._40(-1,null,["\n"])),(l()(),r._40(-1,null,["\n"])),(l()(),r._16(14,0,null,null,20,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,X.b,X.a)),r._15(15,4374528,null,0,Y.a,[E.a,V.a,Z.a,r.p,r.K,J.a,ll.a,r.D,[2,S.a],[2,L.a]],null,null),(l()(),r._40(-1,1,["\n    "])),(l()(),r._16(17,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(l,n,u){var a=!0;if("ionRefresh"===n){a=!1!==l.component.refreshCourses(u)&&a}return a},null,null)),r._15(18,212992,null,0,nl.a,[V.a,Y.a,r.D,ul.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(l()(),r._40(-1,null,["\n        "])),(l()(),r._16(20,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,al.b,al.a)),r._15(21,114688,null,0,el.a,[nl.a,E.a],{pullingText:[0,"pullingText"]},null),r._32(131072,B.a,[O.a,r.i]),(l()(),r._40(-1,null,["\n    "])),(l()(),r._40(-1,1,["\n    "])),(l()(),r._16(25,0,null,1,8,"core-loading",[],null,null,null,ol.b,ol.a)),r._15(26,638976,null,0,tl.a,[O.a,r.p,q.a,rl.a],{hideUntil:[0,"hideUntil"]},null),(l()(),r._40(-1,0,["\n        "])),(l()(),r._11(16777216,null,0,1,null,e)),r._15(29,16384,null,0,U.k,[r.W,r.T],{ngIf:[0,"ngIf"]},null),(l()(),r._40(-1,0,["\n        "])),(l()(),r._11(16777216,null,0,1,null,o)),r._15(32,16384,null,0,U.k,[r.W,r.T],{ngIf:[0,"ngIf"]},null),(l()(),r._40(-1,0,["\n    "])),(l()(),r._40(-1,1,["\n"])),(l()(),r._40(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,5,0);l(n,18,0,u.coursesLoaded);l(n,21,0,r._19(1,"",r._41(n,21,0,r._29(n,22).transform("core.pulltorefresh")),""));l(n,26,0,u.coursesLoaded);l(n,29,0,u.courses.length>0);l(n,32,0,!u.courses.length)},function(l,n){l(n,3,0,r._29(n,4)._hidden,r._29(n,4)._sbPadding);l(n,9,0,r._41(n,9,0,r._29(n,10).transform("core.courses.availablecourses")));l(n,14,0,r._29(n,15).statusbarPadding,r._29(n,15)._hasRefresher);l(n,17,0,"inactive"!==r._29(n,18).state,r._29(n,18)._top);l(n,20,0,r._29(n,21).r.state)})}Object.defineProperty(n,"__esModule",{value:!0});var r=u(1),i=(u(0),u(9),u(4)),s=u(2),c=u(5),_=u(51),f=function(){function l(l,n,u){this.coursesProvider=l,this.domUtils=n,this.sitesProvider=u,this.courses=[]}return l.prototype.ionViewDidLoad=function(){var l=this;this.loadCourses().finally(function(){l.coursesLoaded=!0})},l.prototype.loadCourses=function(){var l=this,n=this.sitesProvider.getCurrentSite().getSiteHomeId();return this.coursesProvider.getCoursesByField().then(function(u){l.courses=u.filter(function(l){return l.id!=n})}).catch(function(n){l.domUtils.showErrorModalDefault(n,"core.courses.errorloadcourses",!0)})},l.prototype.refreshCourses=function(l){var n=this,u=[];u.push(this.coursesProvider.invalidateUserCourses()),u.push(this.coursesProvider.invalidateCoursesByField()),Promise.all(u).finally(function(){n.loadCourses().finally(function(){l.complete()})})},l}(),d=u(28),p=u(29),m=u(249),b=function(){return function(){}}(),h=u(1344),g=u(1345),v=u(1346),x=u(1347),y=u(1348),C=u(1349),I=u(1350),P=u(1351),k=u(1352),T=u(1355),W=u(1356),F=u(1357),$=u(1368),K=u(1958),w=u(1362),L=u(22),O=u(18),R=u(123),U=u(8),D=u(120),j=u(111),B=u(25),M=u(434),E=u(7),S=u(36),A=u(1353),H=u(200),J=u(33),N=u(662),V=u(15),q=u(13),z=u(1354),G=u(335),Q=u(247),X=u(184),Y=u(24),Z=u(31),ll=u(109),nl=u(146),ul=u(38),al=u(201),el=u(158),ol=u(49),tl=u(48),rl=u(3),il=r._14({encapsulation:2,styles:[],data:{}}),sl=r._12("page-core-courses-available-courses",f,function(l){return r._42(0,[(l()(),r._16(0,0,null,null,1,"page-core-courses-available-courses",[],null,null,null,t,il)),r._15(1,49152,null,0,f,[_.a,c.a,s.a],null,null)],null,null)},{},{},[]),cl=u(23),_l=u(331),fl=u(332),dl=u(334),pl=u(333),ml=u(433),bl=u(661),hl=u(108),gl=u(248);u.d(n,"CoreCoursesAvailableCoursesPageModuleNgFactory",function(){return vl});var vl=r._13(b,[],function(l){return r._25([r._26(512,r.n,r._6,[[8,[h.a,g.a,v.a,x.a,y.a,C.a,I.a,P.a,k.a,T.a,W.a,F.a,$.a,sl]],[3,r.n],r.B]),r._26(4608,U.m,U.l,[r.x,[2,U.v]]),r._26(4608,cl.x,cl.x,[]),r._26(4608,cl.d,cl.d,[]),r._26(4608,_l.b,_l.a,[]),r._26(4608,fl.a,fl.b,[]),r._26(4608,dl.b,dl.a,[]),r._26(4608,pl.b,pl.a,[]),r._26(4608,O.a,O.a,[ml.a,_l.b,fl.a,dl.b,pl.b,O.b,O.c]),r._26(512,U.b,U.b,[]),r._26(512,cl.v,cl.v,[]),r._26(512,cl.i,cl.i,[]),r._26(512,cl.s,cl.s,[]),r._26(512,bl.a,bl.a,[]),r._26(512,i.a,i.a,[]),r._26(512,p.a,p.a,[]),r._26(512,hl.a,hl.a,[]),r._26(512,d.a,d.a,[]),r._26(512,m.a,m.a,[]),r._26(512,bl.b,bl.b,[]),r._26(512,b,b,[]),r._26(256,O.c,void 0,[]),r._26(256,O.b,void 0,[]),r._26(256,gl.a,f,[])])})},1958:function(l,n,u){"use strict";function a(l){return i._42(0,[(l()(),i._16(0,0,null,null,1,"core-icon",[],null,null,null,s.b,s.a)),i._15(1,245760,null,0,c.a,[i.p],{name:[0,"name"]},null)],function(l,n){l(n,1,0,n.parent.context.$implicit.icon)},null)}function e(l){return i._42(0,[(l()(),i._16(0,0,null,null,0,"img",[["class","core-course-enrollment-img"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.img)})}function o(l){return i._42(0,[(l()(),i._16(0,0,null,null,9,"span",[["clear",""],["color","gray"],["icon-only",""],["ion-button",""]],[[1,"aria-label",0]],null,null,_.b,_.a)),i._15(1,1097728,[[2,4]],0,f.a,[[8,""],d.a,i.p,i.K],{color:[0,"color"],clear:[1,"clear"]},null),i._32(131072,p.a,[m.a,i.i]),(l()(),i._40(-1,0,["\n                "])),(l()(),i._11(16777216,null,0,1,null,a)),i._15(5,16384,null,0,b.k,[i.W,i.T],{ngIf:[0,"ngIf"]},null),(l()(),i._40(-1,0,["\n                "])),(l()(),i._11(16777216,null,0,1,null,e)),i._15(8,16384,null,0,b.k,[i.W,i.T],{ngIf:[0,"ngIf"]},null),(l()(),i._40(-1,0,["\n            "]))],function(l,n){l(n,1,0,"gray","");l(n,5,0,n.context.$implicit.icon);l(n,8,0,n.context.$implicit.img&&!n.context.$implicit.icon)},function(l,n){l(n,0,0,i._41(n,0,0,i._29(n,2).transform(n.context.$implicit.name)))})}function t(l){return i._42(0,[(l()(),i._16(0,0,null,null,4,"span",[],null,null,null,null,null)),(l()(),i._40(-1,null,["\n            "])),(l()(),i._11(16777216,null,null,1,null,o)),i._15(3,802816,null,0,b.j,[i.W,i.T,i.v],{ngForOf:[0,"ngForOf"]},null),(l()(),i._40(-1,null,["\n        "]))],function(l,n){l(n,3,0,n.component.course.enrollment)},null)}function r(l){return i._42(0,[(l()(),i._16(0,0,null,null,19,"a",[["class","item item-block"],["ion-item",""],["text-wrap",""]],[[2,"item-disabled",null],[8,"title",0]],[[null,"click"]],function(l,n,u){var a=!0,e=l.component;if("click"===n){a=!1!==e.openCourse(e.course)&&a}return a},h.b,h.a)),i._15(1,1097728,null,3,g.a,[v.a,d.a,i.p,i.K,[2,x.a]],null,null),i._37(335544320,1,{contentLabel:0}),i._37(603979776,2,{_buttons:1}),i._37(603979776,3,{_icons:1}),i._15(5,16384,null,0,y.a,[],null,null),(l()(),i._40(-1,2,["\n    "])),(l()(),i._16(7,0,null,0,1,"core-icon",[["fixed-width",""],["item-start",""],["name","fa-graduation-cap"]],null,null,null,s.b,s.a)),i._15(8,245760,null,0,c.a,[i.p],{name:[0,"name"],fixedWidth:[1,"fixedWidth"]},null),(l()(),i._40(-1,2,["\n    "])),(l()(),i._16(10,0,null,2,2,"h2",[],null,null,null,null,null)),(l()(),i._16(11,0,null,null,1,"core-format-text",[],null,null,null,null,null)),i._15(12,540672,null,0,C.a,[i.p,I.a,P.a,k.a,m.a,T.a,W.a,F.a,$.a,K.a,w.a,L.a,[2,O.a],[2,R.a],[2,U.a],D.a,j.a],{text:[0,"text"]},null),(l()(),i._40(-1,2,["\n    "])),(l()(),i._16(14,0,null,4,4,"div",[["item-end",""]],null,null,null,null,null)),(l()(),i._40(-1,null,["\n        "])),(l()(),i._11(16777216,null,null,1,null,t)),i._15(17,16384,null,0,b.k,[i.W,i.T],{ngIf:[0,"ngIf"]},null),(l()(),i._40(-1,null,["\n    "])),(l()(),i._40(-1,2,["\n"])),(l()(),i._40(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,8,0,"fa-graduation-cap","");l(n,12,0,u.course.displayname||u.course.fullname);l(n,17,0,!u.course.isEnrolled)},function(l,n){var u=n.component;l(n,0,0,0==u.course.visible,u.course.displayname||u.course.fullname)})}u.d(n,"a",function(){return B}),n.b=r;var i=u(1),s=u(134),c=u(121),_=u(45),f=u(42),d=u(7),p=u(25),m=u(18),b=u(8),h=u(30),g=u(21),v=u(20),x=u(27),y=u(32),C=u(40),I=u(2),P=u(5),k=u(10),T=u(15),W=u(3),F=u(26),$=u(6),K=u(17),w=u(11),L=u(19),O=u(22),R=u(24),U=u(34),D=u(37),j=u(13),B=(u(51),u(123),i._14({encapsulation:2,styles:[],data:{}}))}});