(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20fb04"],{b561:function(e,t,c){"use strict";c.r(t);var r=c("7a23"),o={key:0},i={class:"d-flex px-3 py-2 mb-4 bg-light","data-discript":"filterViewType"},a={class:"me-3"},n={class:"row mb-6"},d={class:"col-6 col-md-4 mb-3"},l={class:"col-12 mb-3"},s={key:1,class:"text-center"},b=Object(r["createVNode"])("h4",{class:"text-info mb-4"},"目前沒有收藏產品",-1),u=Object(r["createTextVNode"])(" 逛逛鎂麥產品 ");function p(e,t,c,p,j,O){var w=Object(r["resolveComponent"])("ProductsViewCard"),f=Object(r["resolveComponent"])("router-link");return j.favoriteProducts.length>0?(Object(r["openBlock"])(),Object(r["createBlock"])("div",o,[Object(r["createVNode"])("ul",i,[Object(r["createVNode"])("li",a,[Object(r["createVNode"])("a",{href:"#","data-view":"product-grid",onClick:t[1]||(t[1]=Object(r["withModifiers"])((function(e){return j.productView="grid"}),["prevent"]))},[Object(r["createVNode"])("i",{class:["bi bi-grid fs-4 fw-bold",{"text-primary":"grid"===j.productView}]},null,2)])]),Object(r["createVNode"])("li",null,[Object(r["createVNode"])("a",{href:"#","data-view":"product-list",onClick:t[2]||(t[2]=Object(r["withModifiers"])((function(e){return j.productView="list"}),["prevent"]))},[Object(r["createVNode"])("i",{class:["bi bi-list fs-4 fw-bold",{"text-primary":"list"===j.productView}]},null,2)])])]),Object(r["createVNode"])("ul",n,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(j.favoriteProducts,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],{key:null===e||void 0===e?void 0:e.id},[Object(r["withDirectives"])(Object(r["createVNode"])("li",d,[Object(r["createVNode"])(w,{type:j.productView,content:e},null,8,["type","content"])],512),[[r["vShow"],"grid"===j.productView]]),Object(r["withDirectives"])(Object(r["createVNode"])("li",l,[Object(r["createVNode"])(w,{type:j.productView,content:e},null,8,["type","content"])],512),[[r["vShow"],"list"===j.productView]])],64)})),128))])])):(Object(r["openBlock"])(),Object(r["createBlock"])("div",s,[b,Object(r["createVNode"])(f,{to:"/products",type:"button",class:"btn btn-outline-primary px-5"},{default:Object(r["withCtx"])((function(){return[u]})),_:1})]))}var j=c("4773"),O={name:"UserFavorite",components:{ProductsViewCard:j["a"]},data:function(){return{productView:"grid",favoriteProducts:[]}},methods:{getFavaorite:function(){var e=JSON.parse(localStorage.getItem("meimaijlove"));e&&(this.favoriteProducts=e)}},created:function(){this.getFavaorite()}};O.render=p;t["default"]=O}}]);
//# sourceMappingURL=chunk-2d20fb04.9368c9f9.js.map