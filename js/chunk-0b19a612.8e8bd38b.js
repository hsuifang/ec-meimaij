(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b19a612"],{"07e5":function(e,t,c){"use strict";var r=c("1da1"),o=(c("96cf"),c("365c"));t["a"]={data:function(){return{carts:[],price:{total:0,final_total:0},loadingItem:{pos:"",id:""}}},inject:["emitter"],computed:{totalVolume:function(){var e;return null===(e=this.carts)||void 0===e?void 0:e.reduce((function(e,t){return e+t.qty}),0)}},methods:{fetchCartList:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var c,r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$vLoading(!0),t.prev=1,t.next=4,Object(o["n"])();case 4:c=t.sent,r=c.data,a=r.success,n=r.data,a?(e.carts=n.carts,e.price.total=n.total,e.price.final_total=n.final_total,e.emitter.emit("updateCart",{volume:e.totalVolume})):e.$vHttpsNotice(c,"查看購物清單"),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),e.$vErrorNotice();case 12:return t.prev=12,e.$vLoading(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})))()},addToCart:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function c(){var r,a,n;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return r=e.productId,a=e.qty,t.$vLoading(!0),t.toggleLoding({pos:"list",id:r}),c.prev=3,c.next=6,Object(o["a"])({id:r,qty:a});case 6:n=c.sent,n.data.success&&(t.fetchCartList(),t.$vHttpsNotice(n,"加入購物車")),c.next=13;break;case 10:c.prev=10,c.t0=c["catch"](3),t.$vErrorNotice();case 13:return c.prev=13,t.toggleLoding({pos:"",id:""}),t.$vLoading(!1),c.finish(13);case 17:case"end":return c.stop()}}),c,null,[[3,10,13,17]])})))()},updateCart:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function c(){var r,a,n,i,s;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return r=e.cartId,a=e.productId,n=e.qty,c.prev=1,t.$vLoading(!0),c.next=5,Object(o["u"])({cartId:r,productId:a,qty:n});case 5:i=c.sent,s=i.data.success,s?t.fetchCartList():t.$vHttpsNotice(i,"修改購物車"),c.next=14;break;case 10:c.prev=10,c.t0=c["catch"](1),t.$vErrorNotice(),t.$vLoading(!1);case 14:case"end":return c.stop()}}),c,null,[[1,10]])})))()},deleteItemFromCart:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function c(){var r,a,n;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return r=e.cartId,t.$vLoading(!0),t.toggleLoding({pos:"delItem",id:r}),c.prev=3,c.next=6,Object(o["j"])(r);case 6:a=c.sent,n=a.data.success,n?t.fetchCartList():t.$vHttpsNotice(a,"刪除購物車項目"),t.toggleLoding({pos:"",id:""}),c.next=16;break;case 12:c.prev=12,c.t0=c["catch"](3),t.$vErrorNotice(),t.$vLoading(!1);case 16:case"end":return c.stop()}}),c,null,[[3,12]])})))()},deleteAllCart:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.$vLoading(!0),t.next=4,Object(o["i"])();case 4:c=t.sent,r=c.data.success,r?(e.carts=[],e.fetchCartList()):e.$vHttpsNotice(c,"刪除所有購物車"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),e.$vErrorNotice(),e.$vLoading(!1);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()},toggleLoding:function(e){var t=e.pos,c=e.id;this.loadingItem.pos=t,this.loadingItem.id=c}}}},b6ec:function(e,t,c){"use strict";var r=c("7a23"),o={class:"bg-light mb-4 mb-lg-5"},a={class:"container text-center py-3 py-lg-5"},n={"aria-label":"breadcrumb"};function i(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])("section",o,[Object(r["createVNode"])("div",a,[Object(r["createVNode"])("nav",n,[Object(r["renderSlot"])(e.$slots,"breadcrumb")])])])}const s={};s.render=i;t["a"]=s},bad2:function(e,t,c){"use strict";c.r(t);var r=c("7a23"),o=Object(r["createVNode"])("h2",{class:"fs-6"},"鎂麥 / 購物車",-1),a={class:"container pt-0 pb-4 pt-lg-3 py-lg-6"},n={class:"row mt-4 mb-4"},i={class:"col-lg-12"},s={class:"py-3 p-md-5 bg-white rounded border"},l={key:0,class:"d-flex justify-content-end mb-2"},d={class:"table-responsive"},u={class:"table"},b=Object(r["createVNode"])("thead",null,[Object(r["createVNode"])("tr",null,[Object(r["createVNode"])("th",{scope:"col",class:"py-3 border-0 bg-light"},"名稱"),Object(r["createVNode"])("th",{scope:"col",class:"py-3 border-0 bg-light"},"金額"),Object(r["createVNode"])("th",{scope:"col",class:"py-3 border-0 bg-light"},"數量"),Object(r["createVNode"])("th",{scope:"col",class:"py-3 border-0 bg-light"},"刪除")])],-1),p={class:"p-2"},j={class:"ml-3 d-inline-block align-middle"},O={class:"fs-6 6mb-0 text-dark"},g={class:"fs-8 text-muted font-weight-normal fst-italic mb-2"},m={key:0,class:"text-muted fs-8"},v=Object(r["createTextVNode"])(" 優惠券: "),f={class:"bg-primary text-white rounded-pill py-1 px-2 fs-8"},h={class:"align-middle"},N={class:"align-middle"},y={class:"align-middle"},V=Object(r["createVNode"])("i",{class:"bi bi-trash"},null,-1),k={key:0,class:"position-absolute top-50 start-50"},x=Object(r["createVNode"])("div",{class:"spinner-border spinner-border-sm",role:"status"},[Object(r["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),C={key:1},w=Object(r["createVNode"])("td",{colspan:"4",class:"text-center py-3"},"目前無購物資料",-1),L={class:"d-flex mb-3 mb-lg-0 mt-2"},$=Object(r["createVNode"])("i",{class:"bi bi-gift text-white me-2"},null,-1),B=Object(r["createTextVNode"])("優惠碼 "),I={key:0,class:"spinner-border spinner-border-sm position-absolute top-50 start-100",role:"status"},R=Object(r["createVNode"])("span",{class:"visually-hidden"},"Loading...",-1),T={key:0,class:"text-end pt-5 pb-3 border-bottom"},_={class:"mb-4"},q={class:"mb-4"},D={class:"mb-4"},S=Object(r["createTextVNode"])(" 總計: "),E={class:"fw-bold"},H={key:1,class:"text-secondary"},A=Object(r["createTextVNode"])(" 一起加油！即日起至8/18優惠碼限時輸入："),F=Object(r["createVNode"])("strong",null,"e7e7x80",-1),U=Object(r["createTextVNode"])(" 全館8折優惠 "),M={class:"d-flex justify-content-between py-3"},J=Object(r["createTextVNode"])("繼續購物"),P=Object(r["createTextVNode"])("結帳");function z(e,t,c,z,G,K){var Q=Object(r["resolveComponent"])("PageTitle"),W=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])(Q,null,{breadcrumb:Object(r["withCtx"])((function(){return[o]})),_:1}),Object(r["createVNode"])("div",a,[Object(r["createVNode"])("div",n,[Object(r["createVNode"])("div",i,[Object(r["createVNode"])("div",s,[e.carts.length>0?(Object(r["openBlock"])(),Object(r["createBlock"])("div",l,[Object(r["createVNode"])("button",{type:"button",class:"btn btn-outline-primary py-2",disabled:"delAll"===e.loadingItem.pos,onClick:t[1]||(t[1]=Object(r["withModifiers"])((function(){return e.deleteAllCart&&e.deleteAllCart.apply(e,arguments)}),["prevent"]))}," 刪除全部 ",8,["disabled"])])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])("div",d,[Object(r["createVNode"])("table",u,[b,Object(r["createVNode"])("tbody",null,[e.carts.length>0?(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],{key:0},Object(r["renderList"])(e.carts,(function(t){return Object(r["openBlock"])(),Object(r["createBlock"])("tr",{key:t.product_id},[Object(r["createVNode"])("td",null,[Object(r["createVNode"])("div",p,[Object(r["createVNode"])("img",{src:t.product.imageUrl,alt:"商品主要圖片",width:"120",height:"120",class:"img-fluid me-5 obj-fit-contain"},null,8,["src"]),Object(r["createVNode"])("div",j,[Object(r["createVNode"])("h5",O,Object(r["toDisplayString"])(t.product.title),1),Object(r["createVNode"])("p",g," 類別: "+Object(r["toDisplayString"])(t.product.category),1),t.coupon?(Object(r["openBlock"])(),Object(r["createBlock"])("div",m,[v,Object(r["createVNode"])("span",f,Object(r["toDisplayString"])(t.coupon.code),1)])):Object(r["createCommentVNode"])("",!0)])])]),Object(r["createVNode"])("td",h,[Object(r["createVNode"])("strong",null,Object(r["toDisplayString"])(e.$filters.currency(t.product.price)),1)]),Object(r["createVNode"])("td",N,[Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"number",class:"form-control","onUpdate:modelValue":function(e){return t.qty=e},style:{width:"80px"},min:"1",onChange:function(c){return e.updateCart({cartId:t.id,productId:t.product_id,qty:t.qty})}},null,40,["onUpdate:modelValue","onChange"]),[[r["vModelText"],t.qty,void 0,{number:!0}]])]),Object(r["createVNode"])("td",y,[Object(r["createVNode"])("button",{type:"button",class:"btn btn-outline-info",onClick:function(c){return e.deleteItemFromCart({cartId:t.id})}},[V],8,["onClick"]),"delItem"===e.loadingItem.pos&&e.loadingItem.id===t.id?(Object(r["openBlock"])(),Object(r["createBlock"])("div",k,[x])):Object(r["createCommentVNode"])("",!0)])])})),128)):(Object(r["openBlock"])(),Object(r["createBlock"])("tr",C,[w]))])])]),Object(r["createVNode"])("div",L,[Object(r["withDirectives"])(Object(r["createVNode"])("input",{id:"coupon",type:"text",class:"form-control me-2",style:{width:"180px"},"onUpdate:modelValue":t[2]||(t[2]=function(e){return G.couponCode=e})},null,512),[[r["vModelText"],G.couponCode]]),Object(r["createVNode"])("div",null,[Object(r["createVNode"])("button",{type:"button",class:"btn btn-secondary text-white",onClick:t[3]||(t[3]=function(){return K.applyCoupon&&K.applyCoupon.apply(K,arguments)}),disabled:!G.couponCode},[$,B],8,["disabled"]),"applyCoupon"===e.loadingItem.pos?(Object(r["openBlock"])(),Object(r["createBlock"])("div",I,[R])):Object(r["createCommentVNode"])("",!0)])])])])]),e.carts.length>0?(Object(r["openBlock"])(),Object(r["createBlock"])("ul",T,[Object(r["createVNode"])("li",_,"小計: "+Object(r["toDisplayString"])(e.$filters.currency(e.price.total)),1),Object(r["createVNode"])("li",q,"折扣: "+Object(r["toDisplayString"])(e.$filters.currency(e.price.total-e.price.final_total)),1),Object(r["createVNode"])("li",D,[S,Object(r["createVNode"])("span",E,Object(r["toDisplayString"])(e.$filters.currency(e.price.final_total)),1)])])):(Object(r["openBlock"])(),Object(r["createBlock"])("p",H,[A,F,U])),Object(r["createVNode"])("div",M,[Object(r["createVNode"])(W,{class:"btn btn-outline-secondary",to:"products"},{default:Object(r["withCtx"])((function(){return[J]})),_:1}),0!==e.carts.length?(Object(r["openBlock"])(),Object(r["createBlock"])(W,{key:0,class:"btn btn-primary px-4 text-white",to:"checkout"},{default:Object(r["withCtx"])((function(){return[P]})),_:1})):Object(r["createCommentVNode"])("",!0)])])],64)}var G=c("1da1"),K=(c("96cf"),c("07e5")),Q=c("365c"),W=c("b6ec"),X={components:{PageTitle:W["a"]},mixins:[K["a"]],data:function(){return{couponCode:"",usedCode:"",coupons:[]}},methods:{applyCoupon:function(){var e=this;return Object(G["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.couponCode){t.next=2;break}return t.abrupt("return");case 2:return e.toggleLoding({pos:"applyCoupon"}),t.prev=3,t.next=6,Object(Q["b"])(e.couponCode);case 6:c=t.sent,c.data.success&&(e.usedCode=e.couponCode,e.fetchCartList()),e.couponCode="",e.$vHttpsNotice(c,"使用優惠券"),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](3),e.$vErrorNotice();case 15:return t.prev=15,e.toggleLoding({pos:""}),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[3,12,15,18]])})))()},toggleLoding:function(e){var t=e.pos,c=e.id;this.loadingItem.pos=t,this.loadingItem.id=c}},created:function(){this.fetchCartList()}};X.render=z;t["default"]=X}}]);
//# sourceMappingURL=chunk-0b19a612.8e8bd38b.js.map