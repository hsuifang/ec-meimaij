(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb0223bc"],{a9c8:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a={class:"back bg-logo min-vh-100"},r={class:"container py-5"},o={class:"nav justify-content-center align-items-center"},i={class:"nav-item"},s=Object(c["createTextVNode"])("回到前台"),u={class:"nav-item"},d=Object(c["createTextVNode"])("產品列表"),l={class:"nav-item"},b=Object(c["createTextVNode"])("訂單"),v={class:"nav-item"},h=Object(c["createTextVNode"])("優惠券"),j={class:"nav-item"};function O(e,t,n,O,f,p){var k=Object(c["resolveComponent"])("router-link"),m=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])("div",a,[Object(c["createVNode"])("div",r,[Object(c["createVNode"])("ul",o,[Object(c["createVNode"])("li",i,[Object(c["createVNode"])(k,{class:"nav-link",to:"/"},{default:Object(c["withCtx"])((function(){return[s]})),_:1})]),Object(c["createVNode"])("li",u,[Object(c["createVNode"])(k,{class:"nav-link",to:"/admin"},{default:Object(c["withCtx"])((function(){return[d]})),_:1})]),Object(c["createVNode"])("li",l,[Object(c["createVNode"])(k,{class:"nav-link",to:"/admin/orders"},{default:Object(c["withCtx"])((function(){return[b]})),_:1})]),Object(c["createVNode"])("li",v,[Object(c["createVNode"])(k,{class:"nav-link",to:"/admin/coupons"},{default:Object(c["withCtx"])((function(){return[h]})),_:1})]),Object(c["createVNode"])("li",j,[Object(c["createVNode"])("a",{href:"#",class:"nav-link",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(){return p.handleLogout&&p.handleLogout.apply(p,arguments)}),["prevent"]))},"登出")])]),f.isAuthenticated?(Object(c["openBlock"])(),Object(c["createBlock"])(m,{key:0})):Object(c["createCommentVNode"])("",!0)])])}var f=n("1da1"),p=(n("96cf"),n("365c")),k=n("3a51"),m={name:"Dashboard",data:function(){return{isAuthenticated:!1}},methods:{checkLogin:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var n,c,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$vLoading(!0),n=k["a"].getToken(),!n){t.next=19;break}return t.prev=3,t.next=6,Object(p["c"])(n);case 6:c=t.sent,a=c.data.success,a?e.isAuthenticated=!0:e.$router.push("/login"),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](3),e.$vErrorNotice();case 14:return t.prev=14,e.$vLoading(!1),t.finish(14);case 17:t.next=21;break;case 19:e.$router.push("/login"),e.$vLoading(!1);case 21:case"end":return t.stop()}}),t,null,[[3,11,14,17]])})))()},handleLogout:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$vLoading(!0),t.prev=1,t.next=4,Object(p["s"])();case 4:n=t.sent,n.data.success&&(k["a"].removeToken(),e.isAuthenticated=!1,e.$router.push("/login")),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),e.$vErrorNotice();case 11:return t.prev=11,e.$vLoading(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()}},created:function(){this.checkLogin()}};n("e6d1");m.render=O;t["default"]=m},e6d1:function(e,t,n){"use strict";n("f9b3")},f9b3:function(e,t,n){}}]);
//# sourceMappingURL=chunk-eb0223bc.11608ce1.js.map