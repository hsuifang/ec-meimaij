(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-362e0086"],{"2f8b":function(e,t,c){"use strict";c.r(t);c("b0c0");var r=c("7a23"),o={class:"container pt-4 pb-4 pt-lg-7 pb-lg-7"},n={class:"card"},a={class:"card-body"},l={class:"d-flex justify-content-md-between pr-3 mb-4"},s=Object(r["createVNode"])("h2",{class:"h6 text-info"},"訂單清單",-1),d={key:0,class:"text-end mb-2"},i={class:"table caption-top"},b=Object(r["createVNode"])("thead",null,[Object(r["createVNode"])("tr",null,[Object(r["createVNode"])("th",{scope:"col"},"購買時間"),Object(r["createVNode"])("th",{scope:"col"},"姓名"),Object(r["createVNode"])("th",{scope:"col"},"購買款項"),Object(r["createVNode"])("th",{scope:"col"},"付款金額"),Object(r["createVNode"])("th",{scope:"col"},"是否付款"),Object(r["createVNode"])("th",{scope:"col"},"功能")])],-1),u={key:0},p=Object(r["createVNode"])("td",{class:"text-center text-muted",colspan:"6"},[Object(r["createVNode"])("img",{alt:"loading",width:"100",src:"https://media.giphy.com/media/wnYB3vx9t6PXiq1ubB/giphy.gif"})],-1),O={class:"list-unstyled"},j={class:"text-secondary"},m={class:"form-check form-switch"},f={key:0,class:"text-center text-muted"},h=Object(r["createVNode"])("td",{class:"text-center text-muted",colspan:"6"},"無商品",-1),g={class:"d-flex justify-content-md-between"},N=Object(r["createTextVNode"])(" 目前有 "),V=Object(r["createTextVNode"])(" 項訂單 ");function y(e,t,c,y,k,v){var x=Object(r["resolveComponent"])("Pagination"),w=Object(r["resolveComponent"])("OrderModal"),I=Object(r["resolveComponent"])("QuestionModal");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])("div",o,[Object(r["createVNode"])("div",n,[Object(r["createVNode"])("div",a,[Object(r["createVNode"])("div",l,[s,k.orders.length>0?(Object(r["openBlock"])(),Object(r["createBlock"])("div",d,[Object(r["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary py-2 px-3",onClick:t[1]||(t[1]=function(e){return v.showCheckAgain({title:"全部"})})}," 刪除全部 ")])):Object(r["createCommentVNode"])("",!0)]),Object(r["createVNode"])("table",i,[b,Object(r["createVNode"])("tbody",null,[k.isLoading?(Object(r["openBlock"])(),Object(r["createBlock"])("tr",u,[p])):(Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],{key:1},[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(k.orders,(function(t){return Object(r["openBlock"])(),Object(r["createBlock"])("tr",{key:t.id},[Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(e.$filters.localeDateStr(t.create_at)),1),Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(t.user.name),1),Object(r["createVNode"])("td",null,[Object(r["createVNode"])("ul",O,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(t.products,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])("li",{key:t},[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.product.title)+" ",1),Object(r["createVNode"])("span",j,"數量："+Object(r["toDisplayString"])(e.qty)+" "+Object(r["toDisplayString"])(e.product.unit),1)])})),128))])]),Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(e.$filters.currency(t.total)),1),Object(r["createVNode"])("td",null,[Object(r["createVNode"])("div",m,[Object(r["withDirectives"])(Object(r["createVNode"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":function(e){return t.is_paid=e},onChange:function(e){return v.toggleOrderItemStatus(t)}},null,40,["onUpdate:modelValue","onChange"]),[[r["vModelCheckbox"],t.is_paid]])])]),Object(r["createVNode"])("td",null,[Object(r["createVNode"])("button",{type:"button",class:"btn btn-sm btn-outline-info me-1","data-action":"remove",onClick:function(e){return v.handleOrderItem(t)}}," 編輯 ",8,["onClick"]),Object(r["createVNode"])("button",{type:"button",class:"btn btn-sm btn-danger text-white","data-action":"remove",onClick:function(e){return v.showCheckAgain({id:t.id,title:t.title})}}," 刪除 ",8,["onClick"])])])})),128)),0===k.orders.length?(Object(r["openBlock"])(),Object(r["createBlock"])("tr",f,[h])):Object(r["createCommentVNode"])("",!0)],64))])]),Object(r["createVNode"])("div",g,[Object(r["createVNode"])("p",null,[N,Object(r["createVNode"])("span",null,Object(r["toDisplayString"])(k.orders.length),1),V]),Object(r["createVNode"])(x,{pageInfo:k.pageInfo,onChangePage:v.changePage},null,8,["pageInfo","onChangePage"])])])])]),Object(r["createVNode"])(w,{ref:"orderModal",orderInfo:k.currentItem,onUpdateOrder:v.submitOrderItem,onClearItem:t[2]||(t[2]=function(e){return k.currentItem={}})},null,8,["orderInfo","onUpdateOrder"]),Object(r["createVNode"])(I,{ref:"questionModal",content:k.questionModalContent,onCheckInfo:v.checkInfo},null,8,["content","onCheckInfo"])],64)}var k=c("1da1"),v=(c("c740"),c("96cf"),c("365c")),x=c("1799"),w={class:"modal fade",id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","data-bs-backdrop":"static","aria-hidden":"true",ref:"modal"},I={class:"modal-dialog modal-xl",role:"document"},B={class:"modal-content border-0"},C={class:"modal-header"},D=Object(r["createVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(r["createVNode"])("span",null,"訂單細節")],-1),S={class:"modal-body px-5 py-4"},$={class:"row"},M={class:"col-lg-5 mb-5"},L=Object(r["createVNode"])("h3",{class:"fs-6 bg-light rounded-pill px-4 py-3 fw-bold text-secondary"},"用戶資料",-1),_={key:0,class:"list-unstyled px-4"},R={class:"d-flex justify-content-between py-3 border-bottom"},q=Object(r["createVNode"])("h4",{class:"fs-6 mb-0"},"姓名",-1),P={class:"d-flex justify-content-between py-3 border-bottom"},E=Object(r["createVNode"])("h4",{class:"fs-6 mb-0"},"Email",-1),F={class:"d-flex justify-content-between py-3 border-bottom"},A=Object(r["createVNode"])("h4",{class:"fs-6 mb-0"},"電話",-1),U={class:"d-flex justify-content-between py-3 border-bottom"},T=Object(r["createVNode"])("h4",{class:"fs-6 mb-0"},"地址",-1),H={class:"col-lg-7"},J=Object(r["createVNode"])("h3",{class:"fs-6 bg-light rounded-pill px-4 py-3 fw-bold text-secondary"},"訂單細節",-1),Q={class:"list-unstyled px-4 mb-4"},X={class:"d-flex justify-content-between py-3 border-bottom"},Y=Object(r["createVNode"])("h4",{class:"fs-6 mb-0"},"訂單編號",-1),z={class:"d-flex justify-content-between align-items-center py-3 border-bottom"},G=Object(r["createVNode"])("h4",{class:"fs-6 mb-0"},"下單時間",-1),K={class:"d-flex justify-content-between py-3 border-bottom"},W=Object(r["createVNode"])("h4",{class:"fs-6 mb-0"},"付款時間",-1),Z={key:0},ee={key:1},te={class:"d-flex justify-content-between py-3 border-bottom"},ce=Object(r["createVNode"])("h4",{class:"fs-6 mb-0"},"付款狀態",-1),re={key:0,class:"text-success"},oe={key:1,class:"text-muted"},ne={class:"d-flex justify-content-between py-3 border-bottom"},ae=Object(r["createVNode"])("h4",{class:"fs-6 mb-0"},"總金額",-1),le=Object(r["createVNode"])("h3",{class:"fs-6 bg-light rounded-pill px-4 py-3 mb-3 fw-bold text-secondary"}," 選購商品 ",-1),se={class:"list-unstyled px-4 mb-3"},de={class:"fs-6"},ie={class:"d-flex justify-content-end px-4"},be={class:"form-check"},ue={class:"form-check-label",for:"flexCheckDefault"},pe={key:0},Oe={key:1},je={class:"modal-footer"};function me(e,t,c,o,n,a){return Object(r["openBlock"])(),Object(r["createBlock"])("div",w,[Object(r["createVNode"])("div",I,[Object(r["createVNode"])("div",B,[Object(r["createVNode"])("div",C,[D,Object(r["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:t[1]||(t[1]=function(t){return e.$emit("clearItem")})})]),Object(r["createVNode"])("div",S,[Object(r["createVNode"])("div",$,[Object(r["createVNode"])("div",M,[L,n.tempOrder.user?(Object(r["openBlock"])(),Object(r["createBlock"])("ul",_,[Object(r["createVNode"])("li",R,[q,Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(n.tempOrder.user.name),1)]),Object(r["createVNode"])("li",P,[E,Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(n.tempOrder.user.email),1)]),Object(r["createVNode"])("li",F,[A,Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(n.tempOrder.user.tel),1)]),Object(r["createVNode"])("li",U,[T,Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(n.tempOrder.user.address),1)])])):Object(r["createCommentVNode"])("",!0)]),Object(r["createVNode"])("div",H,[J,Object(r["createVNode"])("ul",Q,[Object(r["createVNode"])("li",X,[Y,Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(n.tempOrder.id),1)]),Object(r["createVNode"])("li",z,[G,Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(e.$filters.localeDateStr(n.tempOrder.create_at))+" "+Object(r["toDisplayString"])(e.$filters.localeTimeStr(n.tempOrder.create_at)),1)]),Object(r["createVNode"])("li",K,[W,Object(r["createVNode"])("p",null,[n.tempOrder.paid_date?(Object(r["openBlock"])(),Object(r["createBlock"])("span",Z,Object(r["toDisplayString"])(e.$filters.localeDateStrs(n.tempOrder.paid_date)),1)):(Object(r["openBlock"])(),Object(r["createBlock"])("span",ee,"-"))])]),Object(r["createVNode"])("li",te,[ce,Object(r["createVNode"])("p",null,[n.tempOrder.is_paid?(Object(r["openBlock"])(),Object(r["createBlock"])("strong",re,"已付款")):(Object(r["openBlock"])(),Object(r["createBlock"])("span",oe,"尚未付款"))])]),Object(r["createVNode"])("li",ne,[ae,Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(e.$filters.currency(n.tempOrder.total)),1)])]),le,Object(r["createVNode"])("ul",se,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(n.tempOrder.products,(function(t){return Object(r["openBlock"])(),Object(r["createBlock"])("li",{class:"d-flex justify-content-between",key:t.id},[Object(r["createVNode"])("h3",de,Object(r["toDisplayString"])(t.product.title),1),Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(t.qty)+" / "+Object(r["toDisplayString"])(t.product.unit),1),Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(e.$filters.currency(t.final_total)),1)])})),128))]),Object(r["createVNode"])("div",ie,[Object(r["createVNode"])("div",be,[Object(r["withDirectives"])(Object(r["createVNode"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":t[2]||(t[2]=function(e){return n.tempOrder.is_paid=e})},null,512),[[r["vModelCheckbox"],n.tempOrder.is_paid]]),Object(r["createVNode"])("label",ue,[n.tempOrder.is_paid?(Object(r["openBlock"])(),Object(r["createBlock"])("span",pe,"已付款")):(Object(r["openBlock"])(),Object(r["createBlock"])("span",Oe,"未付款"))])])])])])]),Object(r["createVNode"])("div",je,[Object(r["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=function(t){return e.$emit("updateOrder",n.tempOrder)})}," 修改付款狀態 ")])])])],512)}var fe=c("5530"),he=c("e0ae"),ge={props:{orderInfo:{type:Object,default:function(){return{}}}},mixins:[he["a"]],emits:["updateOrder","clearItem"],data:function(){return{tempOrder:{}}},watch:{orderInfo:function(){this.tempOrder=Object(fe["a"])({},this.orderInfo)}}};ge.render=me;var Ne=ge,Ve=c("adb9"),ye={components:{Pagination:x["a"],OrderModal:Ne,QuestionModal:Ve["a"]},data:function(){return{currentItem:{},orders:[],pageInfo:{current:1,total:1},isCreateItem:!0,isLoading:!1,questionModalContent:"",targetItemId:""}},methods:{fetchOrders:function(){var e=arguments,t=this;return Object(k["a"])(regeneratorRuntime.mark((function c(){var r,o,n,a,l,s;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:1,c.prev=1,t.isLoading=!0,c.next=5,Object(v["p"])(r);case 5:o=c.sent,n=o.data,a=n.orders,l=n.pagination,s=n.success,s?(t.orders=a,t.pageInfo={current:l.current_page,total:l.total_pages}):t.$vHttpNotice(o,"取得訂單資訊"),c.next=13;break;case 10:c.prev=10,c.t0=c["catch"](1),t.$vErrorNotice();case 13:return c.prev=13,t.isLoading=!1,c.finish(13);case 16:case"end":return c.stop()}}),c,null,[[1,10,13,16]])})))()},toggleOrderItemStatus:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.prev=0,t.isLoading=!0,t.currentItem=e,c.next=5,t.submitOrderItem(t.currentItem);case 5:c.next=10;break;case 7:c.prev=7,c.t0=c["catch"](0),t.$vErrorNotice();case 10:return c.prev=10,t.isLoading=!1,c.finish(10);case 13:case"end":return c.stop()}}),c,null,[[0,7,10,13]])})))()},deleteOrderItem:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function c(){var r;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return t.isLoading=!0,c.prev=1,c.next=4,Object(v["g"])(e);case 4:r=c.sent,r.data.success&&t.fetchOrders(t.pageInfo.current_page),c.next=11;break;case 8:c.prev=8,c.t0=c["catch"](1),t.$vErrorNotice();case 11:return c.prev=11,t.isLoading=!1,c.finish(11);case 14:case"end":return c.stop()}}),c,null,[[1,8,11,14]])})))()},deleteAllOrders:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$vLoading(!0),t.prev=1,t.next=4,Object(v["h"])();case 4:c=t.sent,r=c.data.success,r?(e.carts=[],e.fetchOrders()):e.$vHttpsNotice(c,"刪除所有訂單"),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),e.$vErrorNotice();case 12:return t.prev=12,e.$vLoading(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})))()},submitOrderItem:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function c(){var r,o,n,a;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.prev=0,t.$vLoading(!0),r=e.id,c.next=5,Object(v["w"])({id:r,data:{data:e}});case 5:o=c.sent,n=o.data.success,n&&(t.$refs.orderModal.closeModal(),r?(a=t.orders.findIndex((function(e){return e.id===r})),-1!==a&&(t.orders[a]=e)):t.fetchOrders()),t.$vHttpsNotice(o,"修改訂單資訊"),c.next=14;break;case 11:c.prev=11,c.t0=c["catch"](0),t.$vErrorNotice();case 14:return c.prev=14,t.$vLoading(!1),c.finish(14);case 17:case"end":return c.stop()}}),c,null,[[0,11,14,17]])})))()},showCheckAgain:function(e){var t=e.id,c=e.title;this.questionModalContent="你確定要刪除-".concat(c,"嗎？"),this.targetItemId=t,this.$refs.questionModal.openModal()},checkInfo:function(){this.targetItemId?this.deleteOrderItem(this.targetItemId):this.deleteAllOrders()},handleOrderItem:function(e){e&&(this.currentItem=e,this.isCreateItem=!1),this.$refs.orderModal.openModal()},updateOrderItem:function(e){this.submitOrderItem(e)},changePage:function(e){this.fetchOrders(e)},init:function(){this.fetchOrders()}},created:function(){this.init()}};ye.render=y;t["default"]=ye},b0c0:function(e,t,c){var r=c("83ab"),o=c("9bf2").f,n=Function.prototype,a=n.toString,l=/^\s*function ([^ (]*)/,s="name";r&&!(s in n)&&o(n,s,{configurable:!0,get:function(){try{return a.call(this).match(l)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-362e0086.bd5914bf.js.map