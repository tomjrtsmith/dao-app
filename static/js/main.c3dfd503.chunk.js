(this["webpackJsonpdao-app"]=this["webpackJsonpdao-app"]||[]).push([[0],{128:function(e,t,n){e.exports={paper:"Dialog_paper__XrzDE",cancelButton:"Dialog_cancelButton__3SRaV",confirmButton:"Dialog_confirmButton__OGdmB"}},202:function(e,t,n){e.exports={button:"Button_button__2Lf63"}},203:function(e){e.exports=JSON.parse('{"global.appName":"Flux DAO","global.action.cancel":"Cancel","global.action.submit":"Submit","home.title":"Proposals","menu.loggedInAs":"Hello :accountId","menu.login":"Login","menu.logout":"Logout","menu.item.home":"Home","menu.item.council":"Council","menu.item.auth":"Authenticate user","council.title":"Council","resoluteMarketForm.input.validMarket":"Valid","resoluteMarketForm.input.invalidMarket":"Invalid","resoluteMarketForm.input.marketId":"Market id","resoluteMarketForm.input.payoutNumerator":"Payout numerator","resoluteMarketForm.input.payoutNumeratorHelper":"Seperate percentages with a space example: 50 0 50","resoluteMarketForm.error.not100":"Outcome values should be a cumulative sum of 100%","resoluteMarketForm.input.scalarValue":"End result value:","newCouncilForm.input.accountId":"Account id","newCouncilForm.input.description":"Description of proposal","addTokenWhitelist.input.accountId":"Token address id","addTokenWhitelist.input.description":"Description of proposal","addTokenWhitelist.input.decimals":"Token decimals","proposalInfo.label.status":"Status: :status","proposalInfo.label.creator":"Creator: :creator","proposalInfo.label.votePeriodEnd":"Vote period end: :date","proposalInfo.action.voteYes":"Approve (:amount)","proposalInfo.action.voteNo":"Reject (:amount)","proposalInfo.action.finalize":"Finalize","proposalsOverview.create":"Create proposal","proposal.resoluteMarket.description":"Resolute market: :description","proposalDialog.title":"Create a proposal","proposalDialog.types.newCouncil":"New council","proposalDialog.types.removeCouncil":"Remove council","proposalDialog.types.addTokenWhitelist":"Add token to the whitelist","proposalDialog.types.resoluteMarket":"Resolute market","auth.dialog.title":"Authenticate user","auth.form.input.accountId":"test1.near, test2.near","auth.dialog.cannotAuthenticate":"No authentication rights"}')},206:function(e,t,n){e.exports={root:"OptionSwitch_root__URwjr"}},207:function(e,t,n){e.exports={infiniteScroll:"ProposalsOverview_infiniteScroll__yBduR"}},233:function(e,t){},238:function(e,t){},262:function(e,t){},264:function(e,t){},283:function(e,t){},313:function(e,t,n){},314:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(19),o=n.n(a),c=n(83),i=n(27),u=n(369),s=n(8),l=n(21),p=n(5),d=n.n(p),b=n(12),j=n(77),f=n(373),h=n(359),v=n(360),O=n(361),m=n(212),x=n(355),k=n(202),g=n.n(k),y=n(3);function w(e){var t=e.className,n=void 0===t?"":t,r=e.children,a=Object(m.a)(e,["className","children"]);return Object(y.jsx)(x.a,Object(s.a)(Object(s.a)({},a),{},{className:"".concat(g.a.button," ").concat(n),children:r}))}var C=n(128),_=n.n(C),I=n(203);function A(e,t,n){var r=I[e];if(!r)return console.info("Transaltion not found for",e),e;var a,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.replace(/:(\w+)/gi,(function(e){var n=e.replace(/^:/,"");return void 0===t[n]||null===t[n]?"":t[n]}))}(r,t);return n?(a=o).charAt(0).toUpperCase()+a.substring(1):o}function M(e){var t=e.title,n=e.children,r=e.open,a=e.onRequestClose,o=e.onSubmitClick;return Object(y.jsxs)(f.a,{open:r,classes:{paper:_.a.paper},children:[Object(y.jsx)(h.a,{children:t}),Object(y.jsx)(v.a,{children:n}),Object(y.jsxs)(O.a,{children:[Object(y.jsx)(w,{className:_.a.cancelButton,onClick:a,children:A("global.action.cancel")}),Object(y.jsx)(w,{className:_.a.confirmButton,onClick:o,children:A("global.action.submit")})]})]})}var T=n(372);function P(e){var t=e.onChange,n=e.values;return Object(y.jsx)("div",{children:Object(y.jsx)("div",{children:Object(y.jsx)(T.a,{label:A("auth.form.input.accountId"),onChange:function(e){t({accountId:e.currentTarget.value})},value:n.accountId})})})}function N(){return{accountId:""}}function S(e){var t=e.canAuthenticate,n=e.onSubmit,a=Object(l.f)(),o=Object(r.useState)(N),c=Object(j.a)(o,2),i=c[0],u=c[1];if(!t)return Object(y.jsx)("div",{children:A("auth.dialog.cannotAuthenticate")});return Object(y.jsx)(M,{title:A("auth.dialog.title"),open:!0,onRequestClose:function(){return a.push("/")},onSubmitClick:function(){return n(i.accountId)},children:Object(y.jsx)(P,{onChange:function(e){u({accountId:e.accountId})},values:i})})}var R=n(120),E=n(121),D=n(51),F=n.n(D),W=n(122),L="https://mainnet-api.flux.xyz/graphql",B="null_address.near",z=new F.a("250000000000000"),V=new F.a("30000000000000000000000"),q=n(123),H=n.n(q),U=new H.a({network:"mainnet",nullContractId:B,graphApiUrl:L});function Y(){return K.apply(this,arguments)}function K(){return(K=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.connect();case 2:return e.abrupt("return",U);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return X.apply(this,arguments)}function X(){return(X=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:return t=e.sent,e.abrupt("return",t.walletConnection);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G,Q=function(){function e(t){Object(R.a)(this,e),this.contract=void 0,this.contract=new W.Contract(t,"auth.counselor.near",{viewMethods:["is_authenticated","can_authenticate"],changeMethods:["add_authenticatees"]})}return Object(E.a)(e,[{key:"isAuthenticated",value:function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.contract.is_authenticated({account_id:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"canAuthenticate",value:function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.contract.can_authenticate({account_id:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addAuthenticatees",value:function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.contract.add_authenticatees({account_ids:t},z,new F.a(0));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function Z(){return $.apply(this,arguments)}function $(){return($=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!G){e.next=2;break}return e.abrupt("return",G);case 2:return e.next=4,J();case 4:return t=e.sent,G=new Q(t.account()),e.abrupt("return",G);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ee=n(49),te=Object(ee.a)({initialState:{canAuthenticate:!1,loading:!0,errors:[]},name:"auth",reducers:{setAuth:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{canAuthenticate:t.payload})},setAuthLoading:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{loading:t.payload})},setAuthErrors:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{errors:t.payload})}}}),ne=te.actions,re=ne.setAuth,ae=ne.setAuthErrors,oe=ne.setAuthLoading,ce=te.reducer;function ie(e){return function(){var t=Object(b.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z();case 2:return r=t.sent,n(oe(!0)),t.next=6,r.addAuthenticatees(e);case 6:n(oe(!1));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function ue(e){return function(){var t=Object(b.a)(d.a.mark((function t(n){var r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z();case 2:return r=t.sent,n(oe(!0)),t.next=6,r.isAuthenticated(e);case 6:return a=t.sent,n(oe(!1)),t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function se(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth.canAuthenticate})),n=Object(i.c)((function(e){return e.account.account}));function a(){return(a=Object(b.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue(n)(e);case 2:if(!t.sent){t.next=5;break}return t.abrupt("return",console.error("user is already authenticated"));case 5:e(ie(n.split(/(?:,| )+/)));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){var t;n&&e((t=n.accountId,function(){var e=Object(b.a)(d.a.mark((function e(n){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(oe(!0)),e.next=4,Z();case 4:return r=e.sent,e.next=7,r.canAuthenticate(t);case 7:a=e.sent,n(re(a)),n(oe(!1)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),n(ae(e.t0)),n(oe(!1));case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()))}),[n]),Object(y.jsx)(S,{canAuthenticate:t,onSubmit:function(e){return a.apply(this,arguments)}})}var le=n(93),pe=n(204),de=n.n(pe);function be(){return Object(y.jsx)("footer",{})}function je(e){var t=e.onLoginClick,n=e.onLogoutClick,r=e.account;return Object(y.jsxs)("section",{children:[!r&&Object(y.jsx)("button",{onClick:t,children:A("menu.login")}),r&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("span",{children:A("menu.loggedInAs",{accountId:r.accountId})}),Object(y.jsx)("button",{onClick:n,children:A("menu.logout")})]}),Object(y.jsx)(c.b,{to:Kt.root(),children:A("menu.item.home")}),Object(y.jsx)(c.b,{to:Kt.council(),children:A("menu.item.council")}),r&&Object(y.jsx)(c.b,{to:Kt.auth(),children:A("menu.item.auth")})]})}var fe=Object(ee.a)({initialState:{account:null,loading:!1,errors:[]},name:"account",reducers:{setAccount:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{account:t.payload})},setAccountLoading:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{loading:t.payload})},setAccountErrors:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{errors:t.payload})}}}),he=fe.actions,ve=he.setAccount,Oe=(he.setAccountErrors,he.setAccountLoading),me=fe.reducer;function xe(){return ke.apply(this,arguments)}function ke(){return(ke=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:e.sent.requestSignIn(B,A("global.appName"));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(){return ye.apply(this,arguments)}function ye(){return(ye=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:if((t=e.sent).isSignedIn()){e.next=5;break}return e.abrupt("return",null);case 5:return n=t.account(),e.t0=n.accountId,e.next=9,n.getAccountBalance();case 9:return e.t1=e.sent.available,e.abrupt("return",{accountId:e.t0,balance:e.t1});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function we(){return Ce.apply(this,arguments)}function Ce(){return(Ce=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:e.sent.signOut();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _e,Ie=function(){function e(t){Object(R.a)(this,e),this.contract=void 0,this.contract=new W.Contract(t,"dao.counselor.near",{viewMethods:["get_council","get_bond","get_proposals","get_proposal"],changeMethods:["add_proposal","vote","finalize","finalize_external"]})}return Object(E.a)(e,[{key:"getCouncil",value:function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.contract.get_council({a:1});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBond",value:function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.contract.get_bond({a:1});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getProposals",value:function(){var e=Object(b.a)(d.a.mark((function e(){var t,n,r,a=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"0",n=a.length>1&&void 0!==a[1]?a[1]:"1000",e.next=4,this.contract.get_proposals({from_index:t,limit:n});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getProposal",value:function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.contract.get_proposal({id:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createResoluteMarketProposal",value:function(){var e=Object(b.a)(d.a.mark((function e(t,n,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.contract.add_proposal({proposal:{description:t,kind:{market_id:n,payout_numerator:r,type:"ResoluteMarket"}}},z,V);case 1:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"createNewCouncilProposal",value:function(){var e=Object(b.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.contract.add_proposal({proposal:{description:t,kind:{target:n,type:"NewCouncil"}}},z,V);case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"createRemoveCouncilProposal",value:function(){var e=Object(b.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.contract.add_proposal({proposal:{description:t,kind:{target:n,type:"RemoveCouncil"}}},z,V);case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"createAddTokenToWhitelistProposal",value:function(){var e=Object(b.a)(d.a.mark((function e(t,n,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.contract.add_proposal({proposal:{description:t,kind:{to_add:n,decimals:r,type:"AddTokenWhitelist"}}},z,V);case 1:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"vote",value:function(e,t){this.contract.vote({id:e,vote:t},z,new F.a(0))}},{key:"finalize",value:function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getProposal(t);case 2:"ResoluteMarket"===(n=e.sent).kind.type||"AddTokenWhitelist"===n.kind.type?this.contract.finalize_external({id:t},z,new F.a(0)):this.contract.finalize({id:t},z,new F.a(0));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function Ae(){return Me.apply(this,arguments)}function Me(){return(Me=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_e){e.next=2;break}return e.abrupt("return",_e);case 2:return e.next=4,J();case 4:return t=e.sent,_e=new Ie(t.account()),e.abrupt("return",_e);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Te=Object(ee.a)({initialState:{loading:!1,errors:[]},name:"daoInfo",reducers:{setDaoInfo:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{daoInfo:t.payload})},setDaoLoading:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{loading:t.payload})},setDaoErrors:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{errors:t.payload})}}}),Pe=Te.actions,Ne=Pe.setDaoErrors,Se=Pe.setDaoInfo,Re=Pe.setDaoLoading,Ee=Te.reducer;function De(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.account.account}));Object(r.useEffect)((function(){t||e(function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(Oe(!0)),e.next=4,ge();case 4:n=e.sent,t(ve(n)),t(Oe(!1)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t(Oe(!1)),console.error("[getAccount]",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(b.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(Re(!0)),e.next=4,Ae();case 4:return n=e.sent,e.next=7,n.getBond();case 7:r=e.sent,t(Se({bond:r})),t(Re(!1)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),t(Ne(e.t0)),t(Re(!1));case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}())}),[e,t]);var n=Object(r.useCallback)((function(){e(function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(Oe(!0)),e.next=4,xe();case 4:t(Oe(!1)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t(Oe(!1)),console.error("[signIn]",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]),a=Object(r.useCallback)((function(){e(function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we();case 2:t(ve(null));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);return Object(y.jsx)(je,{onLoginClick:n,onLogoutClick:a,account:t})}var Fe=n(99),We=n.n(Fe);function Le(e){var t,n=e.children,r=e.hasNavigation,a=void 0===r||r,o=e.hasFooter,c=void 0===o||o,i=e.size,u=void 0===i?"medium":i,s=e.className,l=void 0===s?"":s,p=e.bodyClassName,d=void 0===p?"":p,b=de()(We.a.page__body,d,(t={},Object(le.a)(t,We.a["page__body--large"],"large"===u),Object(le.a)(t,We.a["page__body--unrestricted"],"unrestricted"===u),t));return Object(y.jsxs)("div",{className:"".concat(We.a.page," ").concat(l),children:[a&&Object(y.jsx)(De,{}),Object(y.jsx)("main",{className:b,children:n}),c&&Object(y.jsx)(be,{})]})}function Be(e){var t=e.council;return Object(y.jsx)("section",{children:t.map((function(e){return Object(y.jsx)("div",{children:e},e)}))})}var ze=Object(ee.a)({initialState:{council:[],loading:!1,errors:[]},name:"council",reducers:{setCouncil:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{council:t.payload})},setCouncilLoading:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{loading:t.payload})},setCouncilErrors:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{errors:t.payload})}}}),Ve=ze.actions,qe=Ve.setCouncil,He=Ve.setCouncilErrors,Ue=Ve.setCouncilLoading,Ye=ze.reducer;function Ke(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.council.council}));return Object(r.useEffect)((function(){e(function(){var e=Object(b.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(Ue(!0)),e.next=4,Ae();case 4:return n=e.sent,e.next=7,n.getCouncil();case 7:r=e.sent,t(qe(r)),t(Ue(!1)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),t(He(e.t0)),t(Ue(!1));case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(y.jsx)(Be,{council:t})}var Je,Xe,Ge=n(205),Qe=n(370),Ze=n(375),$e=n(364),et=n(84),tt=n.n(et),nt=n(374),rt=n(206),at=n.n(rt);function ot(e){var t=e.labelA,n=e.labelB,r=e.onChange,a=e.value;return Object(y.jsxs)("span",{className:at.a.root,children:[Object(y.jsx)("span",{children:t}),Object(y.jsx)(nt.a,{value:a,onChange:function(e,t){return r(t)}}),Object(y.jsx)("span",{children:n})]})}function ct(e,t){var n=new tt.a(10).pow(t);return e.map((function(e){return n.mul(e/100).toFixed(0)}))}function it(e){var t,n=e.onChange,r=e.values,a=e.markets;function o(e,t){var a=r.payoutNumerators;a[t]=Number(e),n(Object(s.a)(Object(s.a)({},r),{},{payoutNumerators:a}))}function c(e){try{var t,a;n(Object(s.a)(Object(s.a)({},r),{},{scalarValue:e}));var o=H.a.utils.calcScalarDistributionPercentages(new tt.a(e),new tt.a(null!==(t=null===i||void 0===i?void 0:i.outcomeTags[0])&&void 0!==t?t:"0"),new tt.a(null!==(a=null===i||void 0===i?void 0:i.outcomeTags[1])&&void 0!==a?a:"0"));n(Object(s.a)(Object(s.a)({},r),{},{scalarValue:e,payoutNumerators:o}))}catch(c){console.error(c)}}var i=a.find((function(e){return e.id===r.marketId})),u=r.payoutNumerators.reduce((function(e,t){return e+t}),0),l=ct(r.payoutNumerators,null!==(t=null===i||void 0===i?void 0:i.decimals)&&void 0!==t?t:0);return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:Object(y.jsx)(Qe.a,{label:A("resoluteMarketForm.input.marketId"),value:r.marketId,onChange:function(e){var t,o,c,i,u=a.find((function(t){return t.id===e.target.value}));n(Object(s.a)(Object(s.a)({},r),{},{marketId:null!==(t=null===u||void 0===u?void 0:u.id)&&void 0!==t?t:"",marketDescription:null!==(o=null===u||void 0===u?void 0:u.description)&&void 0!==o?o:"",collateralTokenId:null!==(c=null===u||void 0===u?void 0:u.collateralTokenId)&&void 0!==c?c:"",payoutNumerators:null!==(i=null===u||void 0===u?void 0:u.outcomeTags.map((function(e){return 0})))&&void 0!==i?i:[]}))},children:a.map((function(e){return Object(y.jsxs)(Ze.a,{value:e.id,children:[e.id," - ",e.description]},e.id)}))})}),Object(y.jsxs)("div",{children:[Object(y.jsx)("br",{}),null===i||void 0===i?void 0:i.extraInfo]}),Object(y.jsx)(ot,{labelA:A("resoluteMarketForm.input.validMarket"),labelB:A("resoluteMarketForm.input.invalidMarket"),value:r.isInvalidMarket,onChange:function(e){n(Object(s.a)(Object(s.a)({},r),{},{isInvalidMarket:e}))}}),Object(y.jsxs)("div",{children:[!r.isInvalidMarket&&(null===i||void 0===i?void 0:i.isScalar)&&Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{children:["Short bound: ",i.outcomeTags[0]]}),Object(y.jsxs)("div",{children:["Long bound: ",i.outcomeTags[1]]}),Object(y.jsx)("br",{}),Object(y.jsx)(T.a,{label:A("resoluteMarketForm.input.scalarValue"),onChange:function(e){return c(e.target.value)},value:r.scalarValue,type:"number"})]}),!r.isInvalidMarket&&Object(y.jsxs)("div",{children:[null===i||void 0===i?void 0:i.outcomeTags.map((function(e,t){return Object(y.jsx)("div",{children:Object(y.jsx)(T.a,{label:e,onChange:function(e){return o(e.target.value,t)},value:r.payoutNumerators[t]||"0",type:"number",InputProps:{endAdornment:Object(y.jsx)($e.a,{position:"end",children:Object(y.jsx)("span",{children:"%"})})}})},t)})),100!==u&&Object(y.jsx)("p",{children:A("resoluteMarketForm.error.not100")})]}),!r.isInvalidMarket&&Object(y.jsxs)("div",{children:[Object(y.jsx)("br",{}),Object(y.jsx)("div",{children:"Distribution will be:"}),l.map((function(e,t){return Object(y.jsxs)("div",{children:['"',null===i||void 0===i?void 0:i.outcomeTags[t],'" : ',e]})}))]})]})]})}function ut(e){var t=e.onChange,n=e.values;return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:Object(y.jsx)(T.a,{label:A("newCouncilForm.input.accountId"),onChange:function(e){t(Object(s.a)(Object(s.a)({},n),{},{accountId:e.currentTarget.value}))},value:n.accountId})}),Object(y.jsx)("div",{children:Object(y.jsx)(T.a,{label:A("newCouncilForm.input.description"),onChange:function(e){t(Object(s.a)(Object(s.a)({},n),{},{description:e.currentTarget.value}))},value:n.description})})]})}function st(e){var t=e.onChange,n=e.values;return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:Object(y.jsx)(T.a,{label:A("addTokenWhitelist.input.accountId"),onChange:function(e){t(Object(s.a)(Object(s.a)({},n),{},{accountId:e.currentTarget.value}))},value:n.accountId})}),Object(y.jsx)("div",{children:Object(y.jsx)(T.a,{label:A("addTokenWhitelist.input.decimals"),type:"number",onChange:function(e){t(Object(s.a)(Object(s.a)({},n),{},{decimals:Number(e.currentTarget.value)}))},value:n.decimals})}),Object(y.jsx)("div",{children:Object(y.jsx)(T.a,{label:A("addTokenWhitelist.input.description"),onChange:function(e){t(Object(s.a)(Object(s.a)({},n),{},{description:e.currentTarget.value}))},value:n.description})})]})}function lt(e){var t=e.onChange,n=e.values;return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:Object(y.jsx)(T.a,{label:A("newCouncilForm.input.accountId"),onChange:function(e){t(Object(s.a)(Object(s.a)({},n),{},{accountId:e.currentTarget.value}))},value:n.accountId})}),Object(y.jsx)("div",{children:Object(y.jsx)(T.a,{label:A("newCouncilForm.input.description"),onChange:function(e){t(Object(s.a)(Object(s.a)({},n),{},{description:e.currentTarget.value}))},value:n.description})})]})}function pt(e){var t=e.open,n=e.markets,a=e.onRequestClose,o=e.onSubmit,c=Object(r.useState)({removeCouncil:{accountId:"",description:""},newCouncil:{accountId:"",description:""},addTokenWhitelist:{accountId:"",description:"",decimals:18},resoluteMarket:{isInvalidMarket:!1,marketId:"",marketDescription:"",collateralTokenId:"",payoutNumerators:[],scalarValue:"0"},type:Je.ResoluteMarket}),i=Object(j.a)(c,2),u=i[0],l=i[1];return Object(y.jsxs)(M,{open:t,title:A("proposalDialog.title"),onSubmitClick:function(){return o(u)},onRequestClose:a,children:[Object(y.jsxs)(Qe.a,{value:u.type,onChange:function(e){l(Object(s.a)(Object(s.a)({},u),{},{type:e.target.value}))},children:[Object(y.jsx)(Ze.a,{value:Je.ResoluteMarket,children:A("proposalDialog.types.resoluteMarket")}),Object(y.jsx)(Ze.a,{value:Je.NewCouncil,children:A("proposalDialog.types.newCouncil")}),Object(y.jsx)(Ze.a,{value:Je.RemoveCouncil,children:A("proposalDialog.types.removeCouncil")}),Object(y.jsx)(Ze.a,{value:Je.AddTokenWhitelist,children:A("proposalDialog.types.addTokenWhitelist")})]}),u.type===Je.ResoluteMarket&&Object(y.jsx)(it,{markets:n,values:u.resoluteMarket,onChange:function(e){l(Object(s.a)(Object(s.a)({},u),{},{resoluteMarket:e}))}}),u.type===Je.NewCouncil&&Object(y.jsx)(ut,{values:u.newCouncil,onChange:function(e){l(Object(s.a)(Object(s.a)({},u),{},{newCouncil:e}))}}),u.type===Je.AddTokenWhitelist&&Object(y.jsx)(st,{values:u.addTokenWhitelist,onChange:function(e){l(Object(s.a)(Object(s.a)({},u),{},{addTokenWhitelist:e}))}}),u.type===Je.RemoveCouncil&&Object(y.jsx)(lt,{values:u.removeCouncil,onChange:function(e){l(Object(s.a)(Object(s.a)({},u),{},{removeCouncil:e}))}})]})}!function(e){e.ResoluteMarket="ResoluteMarket",e.NewCouncil="NewCouncil",e.AddTokenWhitelist="AddTokenWhitelist",e.RemoveCouncil="RemoveCouncil"}(Je||(Je={})),function(e){e.Vote="Vote",e.Success="Success",e.Reject="Reject",e.Finalized="Finalized",e.Rejected="Rejected"}(Xe||(Xe={}));var dt=n(365),bt=n(366),jt=n(368),ft=n(367),ht=n(214);function vt(e){var t=e.proposal,n=e.loggedInAccount,r=e.onNoClick,a=e.onYesClick,o=e.onFinalizeClick,c=new Date(t.vote_period_end/1e6),i=(null===n||void 0===n?void 0:n.accountId)||"";console.log("[] proposal -> ",t);var u=Boolean(t.votes[i]);return Object(y.jsxs)(dt.a,{children:[Object(y.jsx)(bt.a,{onClick:function(){t.kind.type===Je.ResoluteMarket&&window.open("".concat("https://fluxprotocol.github.io/beta/#/beta/markets/").concat(t.kind.market_id),"_blank")},children:Object(y.jsxs)(ft.a,{children:[Object(y.jsx)(ht.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.description}),Object(y.jsx)("pre",{children:JSON.stringify(t.kind,null,4)}),Object(y.jsx)(ht.a,{gutterBottom:!0,variant:"body1",component:"p",children:A("proposalInfo.label.status",{status:t.status})}),Object(y.jsx)(ht.a,{gutterBottom:!0,variant:"body1",component:"p",children:A("proposalInfo.label.creator",{creator:t.proposer})}),Object(y.jsx)(ht.a,{gutterBottom:!0,variant:"body1",component:"p",children:A("proposalInfo.label.votePeriodEnd",{date:c.toString()})}),Object(y.jsx)("hr",{}),Object(y.jsx)(ht.a,{gutterBottom:!0,variant:"body1",component:"p",children:Object.keys(t.votes).map((function(e){return Object(y.jsx)("div",{children:Object(y.jsxs)("span",{children:[e," - ",t.votes[e]]})})}))})]})}),Object(y.jsxs)(jt.a,{children:[t.status===Xe.Vote&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(w,{disabled:u,onClick:a,children:A("proposalInfo.action.voteYes",{amount:t.vote_yes.toString()})}),Object(y.jsx)(w,{disabled:u,onClick:r,children:A("proposalInfo.action.voteNo",{amount:t.vote_no.toString()})})]}),t.status===Xe.Success&&Object(y.jsx)(w,{onClick:o,children:A("proposalInfo.action.finalize")})]})]})}var Ot=n(207),mt=n.n(Ot);function xt(e){var t=e.onProposalSubmit,n=e.onNoClick,a=e.onYesClick,o=e.onFinalizeClick,c=e.onRequestMoreProposals,i=e.hasMoreProposals,u=e.proposals,s=e.markets,l=e.loggedInAccount,p=Object(r.useState)(!1),d=Object(j.a)(p,2),b=d[0],f=d[1];return Object(y.jsxs)("section",{children:[Object(y.jsx)("button",{onClick:function(){f(!0)},children:A("proposalsOverview.create")}),Object(y.jsx)(Ge.a,{dataLength:u.length,next:c,hasMore:i,loader:Object(y.jsx)("div",{}),className:mt.a.infiniteScroll,children:u.map((function(e,t){return Object(y.jsx)(vt,{proposal:e,onNoClick:function(){return n(e,t)},onYesClick:function(){return a(e,t)},onFinalizeClick:function(){return o(e,t)},loggedInAccount:l},t)}))}),Object(y.jsx)(pt,{markets:s,open:b,onRequestClose:function(){return f(!1)},onSubmit:t})]})}var kt=n(154),gt=n(208),yt=n(85),wt=new Map,Ct=new Map;function _t(e,t){return It.apply(this,arguments)}function It(){return(It=Object(b.a)(d.a.mark((function e(t,n){var r,a,o,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=wt.get(t))){e.next=3;break}return e.abrupt("return",r);case 3:if(!(a=Ct.get(t))){e.next=6;break}return e.abrupt("return",a);case 6:return o=n(),Ct.set(t,o),e.prev=8,e.next=11,o;case 11:return c=e.sent,wt.set(t,c),e.abrupt("return",c);case 16:throw e.prev=16,e.t0=e.catch(8),e.t0;case 19:return e.prev=19,Ct.delete(t),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[8,16,19,22]])})))).apply(this,arguments)}function At(e){return Mt.apply(this,arguments)}function Mt(){return(Mt=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:return n=e.sent,e.abrupt("return",_t(t,Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.getTokenMetadata(t));case 1:case"end":return e.stop()}}),e)})))));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Tt(e){return Pt.apply(this,arguments)}function Pt(){return(Pt=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,At(t.pool.collateral_token_id);case 2:return n=e.sent,e.abrupt("return",{id:t.id,isScalar:t.is_scalar,description:t.description,outcomeTags:t.outcome_tags,extraInfo:t.extra_info,collateralTokenId:t.pool.collateral_token_id,decimals:n.decimals});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Nt,St=new yt.InMemoryCache,Rt=Object(yt.createHttpLink)({uri:L}),Et=new yt.ApolloClient({cache:St,link:Rt,defaultOptions:{watchQuery:{fetchPolicy:"cache-and-network"}}});function Dt(){return Ft.apply(this,arguments)}function Ft(){return(Ft=Object(b.a)(d.a.mark((function e(){var t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Et.query({query:Object(yt.gql)(Nt||(Nt=Object(gt.a)(["\n                query ExiredMarkets {\n                    markets: getMarkets(filters: { expired: true, finalized: false }) {\n                        items {\n                            id\n                            description\n                            outcome_tags\n                            is_scalar\n                            extra_info\n                            pool {\n                                collateral_token_id\n                            }\n                        }\n                    }\n                }\n            "])))});case 3:return t=e.sent,n=t.data.markets.items,r=n.map((function(e){return Tt(e)})),e.abrupt("return",Promise.all(r));case 9:return e.prev=9,e.t0=e.catch(0),console.error("[getExpiredMarkets]",e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var Wt=Object(ee.a)({initialState:{hasMoreProposals:!0,proposals:[],expiredMarkets:[],loading:!1,errors:[]},name:"proposals",reducers:{setProposals:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{proposals:t.payload})},setProposalsLoading:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{loading:t.payload})},setProposalsErrors:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{errors:t.payload})},setProposalsHasMore:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{hasMoreProposals:t.payload})},setProposalsExpiredMarkets:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{expiredMarkets:t.payload})}}}),Lt=Wt.actions,Bt=Lt.setProposals,zt=Lt.setProposalsLoading,Vt=(Lt.setProposalsErrors,Lt.setProposalsExpiredMarkets),qt=Lt.setProposalsHasMore,Ht=Wt.reducer;function Ut(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){var t=Object(b.a)(d.a.mark((function t(n,r){var a,o,c,i,u,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ae();case 2:return a=t.sent,o=1e3,e&&n(Bt([])),n(zt(!0)),c=r(),i=c.proposals.proposals,u=i.length.toString(),t.next=11,a.getProposals(u,o.toString());case 11:(s=t.sent).length===o?n(qt(!0)):n(qt(!1)),n(Bt([].concat(Object(kt.a)(c.proposals.proposals),Object(kt.a)(s)))),n(zt(!1));case 15:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}function Yt(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.proposals.proposals})),n=Object(i.c)((function(e){return e.proposals.hasMoreProposals})),a=Object(i.c)((function(e){return e.proposals.expiredMarkets})),o=Object(i.c)((function(e){return e.account.account}));return Object(r.useEffect)((function(){e(Ut(!0)),e(function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Dt();case 2:n=e.sent,t(Vt(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(y.jsx)(xt,{onProposalSubmit:function(t){e(function(e){return function(){var t=Object(b.a)(d.a.mark((function t(n){var r,a,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ae();case 2:if(r=t.sent,e.type!==Je.ResoluteMarket){t.next=11;break}return t.next=6,At(e.resoluteMarket.collateralTokenId);case 6:a=t.sent,o=ct(e.resoluteMarket.payoutNumerators,a.decimals),r.createResoluteMarketProposal(A("proposal.resoluteMarket.description",{description:e.resoluteMarket.marketDescription}),e.resoluteMarket.marketId,e.resoluteMarket.isInvalidMarket?void 0:o),t.next=12;break;case 11:e.type===Je.NewCouncil?r.createNewCouncilProposal(e.newCouncil.description,e.newCouncil.accountId):e.type===Je.AddTokenWhitelist?r.createAddTokenToWhitelistProposal(e.addTokenWhitelist.description,e.addTokenWhitelist.accountId,e.addTokenWhitelist.decimals):e.type===Je.RemoveCouncil&&r.createRemoveCouncilProposal(e.removeCouncil.description,e.removeCouncil.accountId);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},proposals:t,markets:a,onYesClick:function(t,n){var r;e((r=n.toString(),function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ae();case 2:e.sent.vote(r,"Yes");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},onNoClick:function(t,n){var r;e((r=n.toString(),function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ae();case 2:e.sent.vote(r,"No");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},onFinalizeClick:function(t,n){var r;e((r=n.toString(),function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ae();case 2:e.sent.finalize(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},hasMoreProposals:n,onRequestMoreProposals:function(){console.log("More!"),e(Ut())},loggedInAccount:o})}var Kt={root:function(){return"/"},council:function(){return"/council"},auth:function(){return"/auth"}},Jt=[{component:function(){return Object(y.jsxs)(Le,{children:[Object(y.jsx)("h1",{children:A("home.title")}),Object(y.jsx)(Yt,{})]})},exact:!0,inNavigation:!1,key:"home",label:"Home",path:Kt.root()},{component:function(){return Object(y.jsxs)(Le,{children:[Object(y.jsx)("h1",{children:A("council.title")}),Object(y.jsx)(Ke,{})]})},exact:!0,inNavigation:!1,key:"council",label:"Council",path:Kt.council()},{component:function(){return Object(y.jsx)(Le,{children:Object(y.jsx)(se,{})})},exact:!0,inNavigation:!1,key:"auth",label:"Auth",path:Kt.auth()}];function Xt(){return Object(y.jsx)(l.c,{children:Jt.map((function(e){return Object(r.createElement)(l.a,Object(s.a)(Object(s.a)({},e),{},{key:e.key}))}))})}n(313);var Gt=n(26),Qt=n(211),Zt=n(82),$t=Object(Gt.combineReducers)({account:me,council:Ye,proposals:Ht,dao:Ee,auth:ce}),en=function(){return"production"!==Object({NODE_ENV:"production",PUBLIC_URL:"https://fluxprotocol.github.io/dao-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://mainnet-api.flux.xyz/graphql",REACT_APP_DAO_ACCOUNT_ID:"dao.counselor.near",REACT_APP_AUTH_ACCOUNT_ID:"auth.counselor.near",REACT_APP_FLUX_MARKET_DETAIL_URL:"https://fluxprotocol.github.io/beta/#/beta/markets/",REACT_APP_NETWORK:"mainnet"}).REACT_APP_APP_ENV?Object(Qt.composeWithDevTools)(Object(Gt.applyMiddleware)(Zt.a)):Object(Gt.applyMiddleware)(Zt.a)};var tn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=en();return Object(Gt.createStore)($t,e,t)}({});o.a.render(Object(y.jsx)(i.a,{store:tn,children:Object(y.jsx)(c.a,{children:Object(y.jsx)(u.b,{injectFirst:!0,children:Object(y.jsx)(Xt,{})})})}),document.getElementById("root"))},99:function(e,t,n){e.exports={page:"Page_page__1vav1",page__body:"Page_page__body__3V8v2","page__body--large":"Page_page__body--large__27pTP","page__body--unrestricted":"Page_page__body--unrestricted__3wRih"}}},[[314,1,2]]]);
//# sourceMappingURL=main.c3dfd503.chunk.js.map