(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bee4f4e"],{"07e5":function(e,t,n){"use strict";var r=n("1da1"),o=(n("96cf"),n("365c"));t["a"]={data:function(){return{carts:[],price:{total:0,final_total:0},loadingItem:{pos:"",id:""}}},inject:["emitter"],computed:{totalVolume:function(){var e;return null===(e=this.carts)||void 0===e?void 0:e.reduce((function(e,t){return e+t.qty}),0)}},methods:{fetchCartList:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,r,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$vLoading(!0),t.prev=1,t.next=4,Object(o["n"])();case 4:n=t.sent,r=n.data,i=r.success,a=r.data,i?(e.carts=a.carts,e.price.total=a.total,e.price.final_total=a.final_total,e.emitter.emit("updateCart",{volume:e.totalVolume})):e.$vHttpsNotice(n,"查看購物清單"),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),e.$vErrorNotice();case 12:return t.prev=12,e.$vLoading(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})))()},addToCart:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.productId,i=e.qty,t.$vLoading(!0),t.toggleLoding({pos:"list",id:r}),n.prev=3,n.next=6,Object(o["a"])({id:r,qty:i});case 6:a=n.sent,a.data.success&&(t.fetchCartList(),t.$vHttpsNotice(a,"加入購物車")),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](3),t.$vErrorNotice();case 13:return n.prev=13,t.toggleLoding({pos:"",id:""}),t.$vLoading(!1),n.finish(13);case 17:case"end":return n.stop()}}),n,null,[[3,10,13,17]])})))()},updateCart:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,i,a,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.cartId,i=e.productId,a=e.qty,n.prev=1,t.$vLoading(!0),n.next=5,Object(o["u"])({cartId:r,productId:i,qty:a});case 5:c=n.sent,s=c.data.success,s?t.fetchCartList():t.$vHttpsNotice(c,"修改購物車"),n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](1),t.$vErrorNotice(),t.$vLoading(!1);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))()},deleteItemFromCart:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.cartId,t.$vLoading(!0),t.toggleLoding({pos:"delItem",id:r}),n.prev=3,n.next=6,Object(o["j"])(r);case 6:i=n.sent,a=i.data.success,a?t.fetchCartList():t.$vHttpsNotice(i,"刪除購物車項目"),t.toggleLoding({pos:"",id:""}),n.next=16;break;case 12:n.prev=12,n.t0=n["catch"](3),t.$vErrorNotice(),t.$vLoading(!1);case 16:case"end":return n.stop()}}),n,null,[[3,12]])})))()},deleteAllCart:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.$vLoading(!0),t.next=4,Object(o["i"])();case 4:n=t.sent,r=n.data.success,r?(e.carts=[],e.fetchCartList()):e.$vHttpsNotice(n,"刪除所有購物車"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),e.$vErrorNotice(),e.$vLoading(!1);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()},toggleLoding:function(e){var t=e.pos,n=e.id;this.loadingItem.pos=t,this.loadingItem.id=n}}}},"109e":function(e,t,n){
/*!
  * Bootstrap manipulator.js v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";function e(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function t(e){return e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}const n={setDataAttribute(e,n,r){e.setAttribute("data-bs-"+t(n),r)},removeDataAttribute(e,n){e.removeAttribute("data-bs-"+t(n))},getDataAttributes(t){if(!t)return{};const n={};return Object.keys(t.dataset).filter(e=>e.startsWith("bs")).forEach(r=>{let o=r.replace(/^bs/,"");o=o.charAt(0).toLowerCase()+o.slice(1,o.length),n[o]=e(t.dataset[r])}),n},getDataAttribute(n,r){return e(n.getAttribute("data-bs-"+t(r)))},offset(e){const t=e.getBoundingClientRect();return{top:t.top+document.body.scrollTop,left:t.left+document.body.scrollLeft}},position(e){return{top:e.offsetTop,left:e.offsetLeft}}};return n}))},1517:function(e,t,n){
/*!
  * Bootstrap offcanvas.js v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,r){e.exports=r(n("848f"),n("109e"),n("6ee1"),n("6a95"),n("302d"))})(0,(function(e,t,n,r,o){"use strict";function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var a=i(e),c=i(t),s=i(n),l=i(r),d=i(o);const u=1e3,f="transitionend",b=e=>null===e||void 0===e?""+e:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),p=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),t=n&&"#"!==n?n.trim():null}return t},h=e=>{const t=p(e);return t?document.querySelector(t):null},m=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),o=Number.parseFloat(n);return r||o?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*u):0},g=e=>{e.dispatchEvent(new Event(f))},v=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),j=(e,t)=>{let n=!1;const r=5,o=t+r;function i(){n=!0,e.removeEventListener(f,i)}e.addEventListener(f,i),setTimeout(()=>{n||g(e)},o)},y=(e,t,n)=>{Object.keys(n).forEach(r=>{const o=n[r],i=t[r],a=i&&v(i)?"element":b(i);if(!new RegExp(o).test(a))throw new TypeError(`${e.toUpperCase()}: Option "${r}" provided type "${a}" but expected type "${o}".`)})},O=e=>{if(!e)return!1;if(e.style&&e.parentNode&&e.parentNode.style){const t=getComputedStyle(e),n=getComputedStyle(e.parentNode);return"none"!==t.display&&"none"!==n.display&&"hidden"!==t.visibility}return!1},w=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),N=e=>e.offsetHeight,k=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},_=e=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()},E=e=>{_(()=>{const t=k();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}})},V=e=>{"function"===typeof e&&e()},C=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",x=".sticky-top",A=()=>{const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)},L=(e=A())=>{T(),D("body","paddingRight",t=>t+e),D(C,"paddingRight",t=>t+e),D(x,"marginRight",t=>t-e)},T=()=>{const e=document.body.style.overflow;e&&c["default"].setDataAttribute(document.body,"overflow",e),document.body.style.overflow="hidden"},D=(e,t,n)=>{const r=A();a["default"].find(e).forEach(e=>{if(e!==document.body&&window.innerWidth>e.clientWidth+r)return;const o=e.style[t],i=window.getComputedStyle(e)[t];c["default"].setDataAttribute(e,t,o),e.style[t]=n(Number.parseFloat(i))+"px"})},S=()=>{$("body","overflow"),$("body","paddingRight"),$(C,"paddingRight"),$(x,"marginRight")},$=(e,t)=>{a["default"].find(e).forEach(e=>{const n=c["default"].getDataAttribute(e,t);"undefined"===typeof n?e.style.removeProperty(t):(c["default"].removeDataAttribute(e,t),e.style[t]=n)})},I={isVisible:!0,isAnimated:!1,rootElement:document.body,clickCallback:null},M={isVisible:"boolean",isAnimated:"boolean",rootElement:"element",clickCallback:"(function|null)"},B="backdrop",R="modal-backdrop",F="fade",q="show",P="mousedown.bs."+B;class H{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&N(this._getElement()),this._getElement().classList.add(q),this._emulateAnimation(()=>{V(e)})):V(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(q),this._emulateAnimation(()=>{this.dispose(),V(e)})):V(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=R,this._config.isAnimated&&e.classList.add(F),this._element=e}return this._element}_getConfig(e){return e={...I,..."object"===typeof e?e:{}},e.rootElement=e.rootElement||document.body,y(B,e,M),e}_append(){this._isAppended||(this._config.rootElement.appendChild(this._getElement()),l["default"].on(this._getElement(),P,()=>{V(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(l["default"].off(this._element,P),this._getElement().parentNode.removeChild(this._element),this._isAppended=!1)}_emulateAnimation(e){if(!this._config.isAnimated)return void V(e);const t=m(this._getElement());l["default"].one(this._getElement(),"transitionend",()=>V(e)),j(this._getElement(),t)}}const Q="offcanvas",Y="bs.offcanvas",z="."+Y,K=".data-api",W=`load${z}${K}`,X="Escape",U={backdrop:!0,keyboard:!0,scroll:!1},J={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},Z="show",G=".offcanvas.show",ee="show"+z,te="shown"+z,ne="hide"+z,re="hidden"+z,oe="focusin"+z,ie=`click${z}${K}`,ae="click.dismiss"+z,ce="keydown.dismiss"+z,se='[data-bs-dismiss="offcanvas"]',le='[data-bs-toggle="offcanvas"]';class de extends d["default"]{constructor(e,t){super(e),this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._addEventListeners()}static get NAME(){return Q}static get Default(){return U}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=l["default"].trigger(this._element,ee,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(L(),this._enforceFocusOnElement(this._element)),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Z);const n=()=>{l["default"].trigger(this._element,te,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const e=l["default"].trigger(this._element,ne);if(e.defaultPrevented)return;l["default"].off(document,oe),this._element.blur(),this._isShown=!1,this._element.classList.remove(Z),this._backdrop.hide();const t=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||S(),l["default"].trigger(this._element,re)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),super.dispose(),l["default"].off(document,oe)}_getConfig(e){return e={...U,...c["default"].getDataAttributes(this._element),..."object"===typeof e?e:{}},y(Q,e,J),e}_initializeBackDrop(){return new H({isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_enforceFocusOnElement(e){l["default"].off(document,oe),l["default"].on(document,oe,t=>{document===t.target||e===t.target||e.contains(t.target)||e.focus()}),e.focus()}_addEventListeners(){l["default"].on(this._element,ae,se,()=>this.hide()),l["default"].on(this._element,ce,e=>{this._config.keyboard&&e.key===X&&this.hide()})}static jQueryInterface(e){return this.each((function(){const t=s["default"].get(this,Y)||new de(this,"object"===typeof e?e:{});if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}return l["default"].on(document,ie,le,(function(e){const t=h(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),w(this))return;l["default"].one(t,re,()=>{O(this)&&this.focus()});const n=a["default"].findOne(G);n&&n!==t&&de.getInstance(n).hide();const r=s["default"].get(t,Y)||new de(t);r.toggle(this)})),l["default"].on(window,W,()=>{a["default"].find(G).forEach(e=>(s["default"].get(e,Y)||new de(e)).show())}),E(de),de}))},"302d":function(e,t,n){
/*!
  * Bootstrap base-component.js v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,r){e.exports=r(n("6ee1"),n("848f"),n("6a95"))})(0,(function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var o=r(e),i=r(t),a=r(n);const c=1e3,s="transitionend",l=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),o=Number.parseFloat(n);return r||o?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*c):0},d=e=>{e.dispatchEvent(new Event(s))},u=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),f=e=>u(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?i["default"].findOne(e):null,b=(e,t)=>{let n=!1;const r=5,o=t+r;function i(){n=!0,e.removeEventListener(s,i)}e.addEventListener(s,i),setTimeout(()=>{n||d(e)},o)},p=e=>{"function"===typeof e&&e()},h="5.0.1";class m{constructor(e){e=f(e),e&&(this._element=e,o["default"].set(this._element,this.constructor.DATA_KEY,this))}dispose(){o["default"].remove(this._element,this.constructor.DATA_KEY),a["default"].off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(e=>{this[e]=null})}_queueCallback(e,t,n=!0){if(!n)return void p(e);const r=l(t);a["default"].one(t,"transitionend",()=>p(e)),b(t,r)}static getInstance(e){return o["default"].get(e,this.DATA_KEY)}static get VERSION(){return h}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}}return m}))},"6a95":function(e,t,n){
/*!
  * Bootstrap event-handler.js v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";const e=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},t=/[^.]*(?=\..*)\.|.*/,n=/\..*/,r=/::\d+$/,o={};let i=1;const a={mouseenter:"mouseover",mouseleave:"mouseout"},c=/^(mouseenter|mouseleave)/i,s=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function l(e,t){return t&&`${t}::${i++}`||e.uidEvent||i++}function d(e){const t=l(e);return e.uidEvent=t,o[t]=o[t]||{},o[t]}function u(e,t){return function n(r){return r.delegateTarget=e,n.oneOff&&j.off(e,r.type,t),t.apply(e,[r])}}function f(e,t,n){return function r(o){const i=e.querySelectorAll(t);for(let{target:a}=o;a&&a!==this;a=a.parentNode)for(let c=i.length;c--;)if(i[c]===a)return o.delegateTarget=a,r.oneOff&&j.off(e,o.type,t,n),n.apply(a,[o]);return null}}function b(e,t,n=null){const r=Object.keys(e);for(let o=0,i=r.length;o<i;o++){const i=e[r[o]];if(i.originalHandler===t&&i.delegationSelector===n)return i}return null}function p(e,t,n){const r="string"===typeof t,o=r?n:t;let i=v(e);const a=s.has(i);return a||(i=e),[r,o,i]}function h(e,n,r,o,i){if("string"!==typeof n||!e)return;if(r||(r=o,o=null),c.test(n)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};o?o=e(o):r=e(r)}const[a,s,h]=p(n,r,o),m=d(e),g=m[h]||(m[h]={}),v=b(g,s,a?r:null);if(v)return void(v.oneOff=v.oneOff&&i);const j=l(s,n.replace(t,"")),y=a?f(e,r,o):u(e,r);y.delegationSelector=a?r:null,y.originalHandler=s,y.oneOff=i,y.uidEvent=j,g[j]=y,e.addEventListener(h,y,a)}function m(e,t,n,r,o){const i=b(t[n],r,o);i&&(e.removeEventListener(n,i,Boolean(o)),delete t[n][i.uidEvent])}function g(e,t,n,r){const o=t[n]||{};Object.keys(o).forEach(i=>{if(i.includes(r)){const r=o[i];m(e,t,n,r.originalHandler,r.delegationSelector)}})}function v(e){return e=e.replace(n,""),a[e]||e}const j={on(e,t,n,r){h(e,t,n,r,!1)},one(e,t,n,r){h(e,t,n,r,!0)},off(e,t,n,o){if("string"!==typeof t||!e)return;const[i,a,c]=p(t,n,o),s=c!==t,l=d(e),u=t.startsWith(".");if("undefined"!==typeof a){if(!l||!l[c])return;return void m(e,l,c,a,i?n:null)}u&&Object.keys(l).forEach(n=>{g(e,l,n,t.slice(1))});const f=l[c]||{};Object.keys(f).forEach(n=>{const o=n.replace(r,"");if(!s||t.includes(o)){const t=f[n];m(e,l,c,t.originalHandler,t.delegationSelector)}})},trigger(t,n,r){if("string"!==typeof n||!t)return null;const o=e(),i=v(n),a=n!==i,c=s.has(i);let l,d=!0,u=!0,f=!1,b=null;return a&&o&&(l=o.Event(n,r),o(t).trigger(l),d=!l.isPropagationStopped(),u=!l.isImmediatePropagationStopped(),f=l.isDefaultPrevented()),c?(b=document.createEvent("HTMLEvents"),b.initEvent(i,d,!0)):b=new CustomEvent(n,{bubbles:d,cancelable:!0}),"undefined"!==typeof r&&Object.keys(r).forEach(e=>{Object.defineProperty(b,e,{get(){return r[e]}})}),f&&b.preventDefault(),u&&t.dispatchEvent(b),b.defaultPrevented&&"undefined"!==typeof l&&l.preventDefault(),b}};return j}))},"6ee1":function(e,t,n){
/*!
  * Bootstrap data.js v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";const e=new Map;var t={set(t,n,r){e.has(t)||e.set(t,new Map);const o=e.get(t);o.has(n)||0===o.size?o.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)},get(t,n){return e.has(t)&&e.get(t).get(n)||null},remove(t,n){if(!e.has(t))return;const r=e.get(t);r.delete(n),0===r.size&&e.delete(t)}};return t}))},"848f":function(e,t,n){
/*!
  * Bootstrap selector-engine.js v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";const e=3,t={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(e=>e.matches(t))},parents(t,n){const r=[];let o=t.parentNode;while(o&&o.nodeType===Node.ELEMENT_NODE&&o.nodeType!==e)o.matches(n)&&r.push(o),o=o.parentNode;return r},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]}};return t}))},b175:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o={class:"min-vh-90"},i=Object(r["createVNode"])("div",{class:"position-fixed bottom-0 end-0 translate-middle shadow rounded-circle"},[Object(r["createVNode"])("a",{href:"https://lin.ee/Z3ZDysc",target:"_blank"},[Object(r["createVNode"])("img",{alt:"line-icon",src:"https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1626623376875.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NuP2MaN06dU7ch7RwcJiLLtZpPlZF4hhDP0sClx4s744nLXLN2tZX29nc23ye3VTPPizT7EFwFjNXSbyAMwC3IRA27gpDVOnQm%2BHNrNp3LCaV%2FQj6ucwSxJeUfWv5f4mmC78%2BkkQ%2BaBUXPSz9JFvTY41quOnMY0eot1xxFB0vDxSsPIrgnct1tfPyvPnmoglDJE19ttvpQlcjYCnF2GXibvUvPXes5sIInCZD7p0N070GUUsNTdoym7xLoMekKRcDudIK8TBSNs9MotM0cMDh8j9XXYFoCt5wlghXnMCNqIlCKLcI4EuXdfzyto%2BbLVVHIKPMfzJe9hMNtVxVilYcA%3D%3D"})])],-1);function a(e,t,n,a,c,s){var l=Object(r["resolveComponent"])("Header"),d=Object(r["resolveComponent"])("router-view"),u=Object(r["resolveComponent"])("Footer");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])("div",o,[Object(r["createVNode"])(l),Object(r["createVNode"])(d)]),Object(r["createVNode"])(u),i],64)}var c={class:"sticky-top"},s=Object(r["createVNode"])("div",{class:"bg-primary py-1"},[Object(r["createVNode"])("p",{class:"container text-dark"},[Object(r["createTextVNode"])(" 一起加油！即日起至08/31優惠碼限時輸入："),Object(r["createVNode"])("span",{class:"fw-bold text-light"},"e7e7x80"),Object(r["createTextVNode"])(" 全館8折優惠 ")])],-1),l={class:"navbar navbar-expand-lg bg-white navbar-light border-bottom border-primary shadow-sm"},d={class:"container"},u=Object(r["createVNode"])("span",{class:"navbar-toggler-icon"},null,-1),f=Object(r["createVNode"])("img",{src:"images/logo.svg",alt:"web-logo",class:"navbar-brand-item",height:"40"},null,-1),b={class:"collapse navbar-collapse"},p={class:"navbar-nav navbar-nav-scroll"},h={class:"nav-item me-3"},m=Object(r["createTextVNode"])("首頁"),g={class:"nav-item me-3 dropdown"},v=Object(r["createTextVNode"])("鎂麥產品"),j={class:"dropdown-menu"},y={class:"d-flex align-items-center"},O=Object(r["createVNode"])("i",{class:"bi bi-person fs-4 me-3"},null,-1),w=Object(r["createVNode"])("i",{class:"bi bi-bookmark-heart fs-5 me-3"},null,-1),N=Object(r["createVNode"])("i",{class:"bi-bag-fill fs-5"},null,-1),k={class:"\n                position-absolute\n                left-50\n                bg-primary\n                px-1\n                py-0\n                text-white\n                rounded-circle\n                navbar-cart\n              "},_={class:"navbar-nav navbar-nav-scroll p-4"},E={class:"nav-item me-3"},V=Object(r["createTextVNode"])("首頁"),C={class:"nav-item me-3"},x=Object(r["createTextVNode"])("鎂麥產品");function A(e,t,n,o,i,a){var A=Object(r["resolveComponent"])("router-link"),L=Object(r["resolveComponent"])("CartOffcanvas"),T=Object(r["resolveDirective"])("dropdown");return Object(r["openBlock"])(),Object(r["createBlock"])("div",c,[s,Object(r["createVNode"])("nav",l,[Object(r["createVNode"])("div",d,[Object(r["createVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","aria-controls":"navbarScroll","aria-expanded":"false","aria-label":"Toggle navigation",onClick:t[1]||(t[1]=function(e){return i.navbarToggle=!i.navbarToggle})},[u]),Object(r["createVNode"])("div",{class:"navbar-brand me-0 me-lg-5 pointer",onClick:t[2]||(t[2]=function(t){return e.$router.push("/")})},[f]),Object(r["createVNode"])("div",b,[Object(r["createVNode"])("ul",p,[Object(r["createVNode"])("li",h,[Object(r["createVNode"])(A,{to:"/",class:"nav-link","aria-current":"page"},{default:Object(r["withCtx"])((function(){return[m]})),_:1})]),Object(r["withDirectives"])(Object(r["createVNode"])("li",g,[Object(r["createVNode"])(A,{to:"/products",class:"nav-link dropdown-toggle",role:"button","aria-expanded":"false"},{default:Object(r["withCtx"])((function(){return[v]})),_:1}),Object(r["createVNode"])("ul",j,[Object(r["createVNode"])("li",null,[Object(r["createVNode"])("a",{class:"dropdown-item",href:"#",onClick:t[3]||(t[3]=Object(r["withModifiers"])((function(e){return a.productRouter("生食餐")}),["prevent"]))},"鎂麥生食餐")]),Object(r["createVNode"])("li",null,[Object(r["createVNode"])("a",{class:"dropdown-item",href:"#",onClick:t[4]||(t[4]=Object(r["withModifiers"])((function(e){return a.productRouter("鮮食")}),["prevent"]))},"鎂麥鮮食")]),Object(r["createVNode"])("li",null,[Object(r["createVNode"])("a",{class:"dropdown-item",href:"#",onClick:t[5]||(t[5]=Object(r["withModifiers"])((function(e){return a.productRouter("零食")}),["prevent"]))},"鎂麥零食")])])],512),[[T]])])]),Object(r["createVNode"])("div",y,[Object(r["createVNode"])("a",{href:"#",onClick:t[6]||(t[6]=Object(r["withModifiers"])((function(t){return e.$router.push("/member")}),["prevent"]))},[O]),Object(r["createVNode"])("a",{href:"#",onClick:t[7]||(t[7]=Object(r["withModifiers"])((function(t){return e.$router.push("/member/favorite")}),["prevent"]))},[w]),Object(r["createVNode"])("a",{href:"#",onClick:t[8]||(t[8]=Object(r["withModifiers"])((function(){return a.checkCart&&a.checkCart.apply(a,arguments)}),["prevent"]))},[N,Object(r["createVNode"])("p",k,Object(r["toDisplayString"])(i.volume),1)])])]),Object(r["createVNode"])("div",{class:["mobile-collapse d-lg-none",{show:i.navbarToggle}]},[Object(r["createVNode"])("ul",_,[Object(r["createVNode"])("li",E,[Object(r["createVNode"])(A,{to:"/",class:"nav-link","aria-current":"page"},{default:Object(r["withCtx"])((function(){return[V]})),_:1})]),Object(r["createVNode"])("li",C,[Object(r["createVNode"])(A,{to:"/products",class:"nav-link",role:"button","aria-expanded":"false"},{default:Object(r["withCtx"])((function(){return[x]})),_:1})])])],2)]),Object(r["createVNode"])(L,{ref:"canvas"},null,512)])}var L={ref:"canvas",class:"offcanvas offcanvas-end",tabindex:"-1","aria-labelledby":"createItemLabel"},T=Object(r["createVNode"])("div",{class:"offcanvas-header border-bottom"},[Object(r["createVNode"])("h5",{class:"offcanvas-title",id:"createItemLabel"},"購物車"),Object(r["createVNode"])("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),D={class:"offcanvas-body pt-0 bg-white"},S={key:0},$={class:"w-25"},I={class:"w-75 ms-3"},M={class:"h6 mb-1"},B={class:"fw-bold text-info"},R={class:"d-flex justify-content-between align-items-end"},F={class:"fw-bold"},q=Object(r["createVNode"])("i",{class:"bi bi-dash fs-6"},null,-1),P={class:"fs-6"},H=Object(r["createVNode"])("i",{class:"bi bi-plus fs-6"},null,-1),Q=Object(r["createVNode"])("i",{class:"bi bi-trash"},null,-1),Y={key:1,class:"py-5"},z={class:"offcanvas-footer border"},K={class:"p-3"},W=Object(r["createTextVNode"])(" 購買"),X={class:"text-secondary px-2"},U=Object(r["createTextVNode"])("項產品 "),J={class:"py-3"};function Z(e,t,n,o,i,a){return Object(r["openBlock"])(),Object(r["createBlock"])("div",L,[T,Object(r["createVNode"])("div",D,[e.totalVolume>0?(Object(r["openBlock"])(),Object(r["createBlock"])("ul",S,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(e.carts,(function(t){return Object(r["openBlock"])(),Object(r["createBlock"])("li",{class:["d-flex align-items-center py-4 px-3",{"border-bottom":10!==t}],key:"".concat(t,"item")},[Object(r["createVNode"])("div",$,[Object(r["createVNode"])("img",{src:t.product.imageUrl,alt:"imageUrl",width:"80",height:"80",class:"img-fluid me-3 obj-fit-contain"},null,8,["src"])]),Object(r["createVNode"])("div",I,[Object(r["createVNode"])("h3",M,Object(r["toDisplayString"])(t.product.title),1),Object(r["createVNode"])("p",B,Object(r["toDisplayString"])(e.$filters.currency(t.product.price)),1),Object(r["createVNode"])("div",R,[Object(r["createVNode"])("div",F,[Object(r["createVNode"])("a",{href:"#",class:"pe-2",onClick:Object(r["withModifiers"])((function(e){return a.minusCartQty(t)}),["prevent"])},[q],8,["onClick"]),Object(r["createVNode"])("span",P,Object(r["toDisplayString"])(t.qty),1),Object(r["createVNode"])("a",{href:"#",class:"ps-2",onClick:Object(r["withModifiers"])((function(e){return a.addCartQty(t)}),["prevent"])},[H],8,["onClick"])]),Object(r["createVNode"])("button",{type:"button",class:"btn btn-outline-info",onClick:function(n){return e.deleteItemFromCart({cartId:t.id})}},[Q],8,["onClick"])])])],2)})),128))])):(Object(r["openBlock"])(),Object(r["createBlock"])("p",Y,"目前無產品")),Object(r["createVNode"])("div",null,[Object(r["createVNode"])("div",z,[Object(r["createVNode"])("div",K,[Object(r["createVNode"])("p",null,[W,Object(r["createVNode"])("span",X,Object(r["toDisplayString"])(e.totalVolume),1),U]),Object(r["createVNode"])("h4",J,"總共："+Object(r["toDisplayString"])(e.$filters.currency(e.price.final_total)),1),0!==e.totalVolume?(Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],{key:0},[Object(r["createVNode"])("button",{onClick:t[1]||(t[1]=Object(r["withModifiers"])((function(e){return a.changeRoute("/cart")}),["prevent"])),type:"button",class:"btn btn-outline-primary btn-lg w-100 mb-3"}," 購物車 "),Object(r["createVNode"])("a",{href:"#",onClick:t[2]||(t[2]=Object(r["withModifiers"])((function(e){return a.changeRoute("/checkout")}),["prevent"])),class:"btn btn-primary btn-lg w-100 text-white"},"直接購買")],64)):Object(r["createCommentVNode"])("",!0)])])])])],512)}var G=n("07e5"),ee=n("1517"),te=n.n(ee),ne={mixins:[G["a"]],data:function(){return{bsOffcanvas:""}},methods:{open:function(){this.bsOffcanvas.show(),this.fetchCartList()},close:function(){this.bsOffcanvas.hide()},minusCartQty:function(e){1===e.qty?this.deleteItemFromCart({cartId:e.id}):this.updateCart({cartId:e.id,productId:e.product.id,qty:e.qty-1})},addCartQty:function(e){this.updateCart({cartId:e.id,productId:e.product.id,qty:e.qty+1})},changeRoute:function(e){this.close(),this.$router.push(e)}},mounted:function(){var e=this.$refs.canvas;this.bsOffcanvas=new te.a(e)}};ne.render=Z;var re=ne,oe={components:{CartOffcanvas:re},inject:["emitter"],mixins:[G["a"]],data:function(){return{navbarToggle:!1,volume:""}},methods:{checkCart:function(){this.$refs.canvas.open()},productRouter:function(e){this.$router.push({name:"userProducts",params:{typeSelected:e}})}},mounted:function(){var e=this;this.emitter.on("updateCart",(function(t){var n=t.volume,r=void 0===n?0:n;e.volume=r})),this.fetchCartList(),this.volume=this.totalVolume}};oe.render=A;var ie=oe,ae={class:"border-top"},ce=Object(r["createStaticVNode"])('<div class="py-6"><ul class="list-unstyled list-unstyled d-flex justify-content-center mb-2 mb-lg-3"><li class="me-3"><a href="https://www.linkedin.com/in/ifang-hsu-101bb6160/" target="_blank"><i class="bi bi-linkedin fs-4"></i></a></li><li class="me-3"><a href="https://github.com/hsuifang" target="_blank"><i class="bi bi-github fs-4"></i></a></li><li><a href="https://twitter.com/hsuifang" target="_blank"><i class="bi bi-twitter fs-4"></i></a></li></ul><p class="text-center text-info">© 2021 hsuifang / 非營業用途</p></div>',1);function se(e,t,n,o,i,a){return Object(r["openBlock"])(),Object(r["createBlock"])("footer",ae,[ce])}var le={name:"clientSideFooter"};le.render=se;var de=le,ue={name:"clientSideMainLayout",components:{Header:ie,Footer:de}};ue.render=a;t["default"]=ue}}]);
//# sourceMappingURL=chunk-5bee4f4e.eb94668d.js.map