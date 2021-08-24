(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61526e8a"],{"02b8":function(e,t,c){"use strict";c("cae4")},2909:function(e,t,c){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var c=0,r=new Array(t);c<t;c++)r[c]=e[c];return r}function o(e){if(Array.isArray(e))return r(e)}c.d(t,"a",(function(){return d}));c("a4d3"),c("e01a"),c("d3b7"),c("d28b"),c("3ca3"),c("ddb0"),c("a630");function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}c("fb6a"),c("b0c0");function a(e,t){if(e){if("string"===typeof e)return r(e,t);var c=Object.prototype.toString.call(e).slice(8,-1);return"Object"===c&&e.constructor&&(c=e.constructor.name),"Map"===c||"Set"===c?Array.from(e):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?r(e,t):void 0}}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e){return o(e)||n(e)||a(e)||i()}},"4df4":function(e,t,c){"use strict";var r=c("0366"),o=c("7b0b"),n=c("9bdd"),a=c("e95a"),i=c("50c4"),d=c("8418"),l=c("35a1");e.exports=function(e){var t,c,u,s,b,m,p=o(e),f="function"==typeof this?this:Array,j=arguments.length,O=j>1?arguments[1]:void 0,h=void 0!==O,v=l(p),g=0;if(h&&(O=r(O,j>2?arguments[2]:void 0,2)),void 0==v||f==Array&&a(v))for(t=i(p.length),c=new f(t);t>g;g++)m=h?O(p[g],g):p[g],d(c,g,m);else for(s=v.call(p),b=s.next,c=new f;!(u=b.call(s)).done;g++)m=h?n(s,O,[u.value,g],!0):u.value,d(c,g,m);return c.length=g,c}},"7db0":function(e,t,c){"use strict";var r=c("23e7"),o=c("b727").find,n=c("44d2"),a="find",i=!0;a in[]&&Array(1)[a]((function(){i=!1})),r({target:"Array",proto:!0,forced:i},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(a)},"9bdd":function(e,t,c){var r=c("825a"),o=c("2a62");e.exports=function(e,t,c,n){try{return n?t(r(c)[0],c[1]):t(c)}catch(a){throw o(e),a}}},a44b:function(e,t,c){"use strict";c.r(t);var r=c("7a23"),o={class:"container pt-4 pb-4 pt-lg-7 pb-lg-7"},n={class:"card"},a={class:"card-body"},i={class:"d-flex justify-content-md-between pr-3 mb-4"},d=Object(r["createVNode"])("h2",{class:"h6 text-info"},"產品清單",-1),l={class:"table caption-top"},u=Object(r["createVNode"])("thead",null,[Object(r["createVNode"])("tr",null,[Object(r["createVNode"])("th",{scope:"col"},"產品名稱"),Object(r["createVNode"])("th",{scope:"col"},"類別"),Object(r["createVNode"])("th",{scope:"col"},"評價"),Object(r["createVNode"])("th",{class:"text-end",scope:"col"},"原價"),Object(r["createVNode"])("th",{class:"text-end",scope:"col"},"售價"),Object(r["createVNode"])("th",{scope:"col"},"是否啟用"),Object(r["createVNode"])("th",{scope:"col"},"刪除")])],-1),s={class:"text-end"},b={class:"text-end"},m={class:"form-check form-switch"},p={key:0,class:"text-center text-muted"},f=Object(r["createVNode"])("td",{class:"text-center text-muted",colspan:"7"},"無商品",-1),j={class:"d-flex justify-content-md-between"},O=Object(r["createTextVNode"])(" 目前有 "),h=Object(r["createTextVNode"])(" 項產品 ");function v(e,t,c,v,g,I){var y=Object(r["resolveComponent"])("Pagination"),V=Object(r["resolveComponent"])("ProductModal"),N=Object(r["resolveComponent"])("QuestionModal");return Object(r["openBlock"])(),Object(r["createBlock"])("div",o,[Object(r["createVNode"])("div",n,[Object(r["createVNode"])("div",a,[Object(r["createVNode"])("div",i,[d,Object(r["createVNode"])("button",{class:"btn btn-outline-primary shadow-sm py-2",type:"button","aria-controls":"modifyProductItem",onClick:t[1]||(t[1]=function(e){return I.handleProductItem(null)})}," 建立新的產品 ")]),Object(r["createVNode"])("table",l,[u,Object(r["createVNode"])("tbody",null,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(g.products,(function(t){return Object(r["openBlock"])(),Object(r["createBlock"])("tr",{key:t.id},[Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(t.title),1),Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(t.category),1),Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(t.rate||"-"),1),Object(r["createVNode"])("td",s,Object(r["toDisplayString"])(e.$filters.currency(t.origin_price)),1),Object(r["createVNode"])("td",b,Object(r["toDisplayString"])(e.$filters.currency(t.price)),1),Object(r["createVNode"])("td",null,[Object(r["createVNode"])("div",m,[Object(r["createVNode"])("input",{class:"form-check-input",type:"checkbox",checked:t.is_enabled,onChange:function(e){return I.toggleProductItemStatus(t)}},null,40,["checked","onChange"])])]),Object(r["createVNode"])("td",null,[Object(r["createVNode"])("button",{type:"button",class:"btn btn-sm btn-outline-info me-1","data-action":"remove",onClick:function(e){return I.handleProductItem(t)}}," 編輯 ",8,["onClick"]),Object(r["createVNode"])("button",{type:"button",class:"btn btn-sm btn-danger text-white","data-action":"remove",onClick:function(e){return I.checkInfo({id:t.id,title:t.title})}}," 刪除 ",8,["onClick"])])])})),128)),0===g.products.length?(Object(r["openBlock"])(),Object(r["createBlock"])("tr",p,[f])):Object(r["createCommentVNode"])("",!0)])]),Object(r["createVNode"])("div",j,[Object(r["createVNode"])("p",null,[O,Object(r["createVNode"])("span",null,Object(r["toDisplayString"])(g.products.length),1),h]),Object(r["createVNode"])(y,{pageInfo:g.pageInfo,onChangePage:I.changePage},null,8,["pageInfo","onChangePage"])])])]),Object(r["createVNode"])(V,{ref:"productModal",productItem:g.currentProductItem,onSubmitProductItem:I.updateProductItem,onClearItem:I.initGenerateForm},null,8,["productItem","onSubmitProductItem","onClearItem"]),Object(r["createVNode"])(N,{ref:"questionModal",content:g.questionModalContent,onCheckInfo:t[2]||(t[2]=function(e){return I.deleteProductItem(g.targetItemId)})},null,8,["content"])])}var g=c("5530"),I=c("1da1"),y=(c("96cf"),c("d81d"),c("c740"),c("365c")),V=c("1799"),N=(c("a4d3"),c("e01a"),{ref:"modal",class:"modal",tabindex:"-1"}),k={class:"modal-dialog modal-xl"},P={class:"modal-content"},w={class:"modal-header"},x=Object(r["createVNode"])("h5",{class:"modal-title"},"產品資訊",-1),C={class:"modal-body"},M={class:"col-md-7"},T={class:"row"},D={class:"col-md-12"},S={class:"list-unstyled d-flex mb-2"},B={role:"uploadType",class:"me-3"},U=Object(r["createVNode"])("label",{for:"uploadImage"},"上傳圖片",-1),$={class:"nav-item",role:"uploadType"},A=Object(r["createVNode"])("label",{for:"inputImage"},"輸入圖片路徑",-1),_={key:0},R={class:"position-absolute bottom-0 end-0"},F={key:0,class:"spinner-border",role:"status"},E=Object(r["createVNode"])("span",{class:"visually-hidden"},"Loading...",-1),L={key:1,class:"input-group mb-3"},q={class:"shadow-sm mb-3"},G={class:"p-2"},K={class:"productImg rounded"},H={class:"position-absolute top-0 end-0"},J={class:"col-md-5"},Q={class:"row align-items-end"},z={class:"mb-3"},W=Object(r["createVNode"])("label",{for:"title",class:"form-label"},"產品名稱",-1),X={class:"mb-3"},Y=Object(r["createVNode"])("label",{class:"form-label"},"狀態",-1),Z={class:"d-flex"},ee={class:"mb-3"},te=Object(r["createVNode"])("label",{for:"description",class:"form-label"},"描述",-1),ce={class:"mb-3"},re=Object(r["createVNode"])("label",{for:"content",class:"form-label"},"內容",-1),oe={class:"mb-3"},ne=Object(r["createVNode"])("label",{for:"spec",class:"form-label"},"規格",-1),ae={class:"col-md-6 mb-3"},ie=Object(r["createVNode"])("label",{for:"originPrice",class:"form-label"},"原價",-1),de={class:"col-md-6 mb-3"},le=Object(r["createVNode"])("label",{for:"price",class:"form-label"},"售價",-1),ue={class:"col-md-4 mb-3"},se=Object(r["createVNode"])("label",{for:"category",class:"form-label"},"類別",-1),be={class:"col-md-4 mb-3"},me=Object(r["createVNode"])("label",{for:"unit",class:"form-label"},"單位",-1),pe={class:"col-md-4 mb-3"},fe={class:"form-check"},je=Object(r["createVNode"])("label",{class:"form-check-label",for:"isEnabled"}," 啟用 ",-1),Oe={class:"col-md-8 mb-3"},he={for:"rate",class:"form-label"},ve={class:"col-md-4 mb-3"},ge={class:"form-check"},Ie=Object(r["createVNode"])("label",{class:"form-check-label",for:"isRateEnabled"}," 顯示評價 ",-1),ye={class:"col-12"};function Ve(e,t,c,o,n,a){return Object(r["openBlock"])(),Object(r["createBlock"])("div",N,[Object(r["createVNode"])("div",k,[Object(r["createVNode"])("div",P,[Object(r["createVNode"])("div",w,[x,Object(r["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close","data-bs-backdrop":"static",onClick:t[1]||(t[1]=function(t){return e.$emit("clearItem")})})]),Object(r["createVNode"])("div",C,[Object(r["createVNode"])("form",{onSubmit:t[22]||(t[22]=Object(r["withModifiers"])((function(){return a.submitProductItem&&a.submitProductItem.apply(a,arguments)}),["prevent"]))},[Object(r["createVNode"])("div",{onKeydown:t[21]||(t[21]=Object(r["withKeys"])(Object(r["withModifiers"])((function(){}),["stop"]),["enter"])),class:"row g-4"},[Object(r["createVNode"])("div",M,[Object(r["createVNode"])("div",T,[Object(r["createVNode"])("div",D,[Object(r["createVNode"])("ul",S,[Object(r["createVNode"])("li",B,[Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"radio",value:1,name:"uploadType",id:"uploadImage",class:"me-1","onUpdate:modelValue":t[2]||(t[2]=function(e){return n.uploadType=e}),disabled:n.images.length>=6},null,8,["disabled"]),[[r["vModelRadio"],n.uploadType]]),U]),Object(r["createVNode"])("li",$,[Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"radio",value:2,name:"uploadType",id:"inputImage",class:"me-1","onUpdate:modelValue":t[3]||(t[3]=function(e){return n.uploadType=e})},null,512),[[r["vModelRadio"],n.uploadType]]),A])]),1===n.uploadType?(Object(r["openBlock"])(),Object(r["createBlock"])("div",_,[Object(r["createVNode"])("input",{type:"file",id:"customFile",class:"form-control mb-2",ref:"fileInput",accept:"image/*",onChange:t[4]||(t[4]=function(){return a.uploadFile&&a.uploadFile.apply(a,arguments)})},null,544),Object(r["createVNode"])("div",R,[n.fileUploading?(Object(r["openBlock"])(),Object(r["createBlock"])("div",F,[E])):Object(r["createCommentVNode"])("",!0)])])):Object(r["createCommentVNode"])("",!0),2===n.uploadType?(Object(r["openBlock"])(),Object(r["createBlock"])("div",L,[Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"text",class:"form-control",placeholder:"圖片路徑","aria-label":"圖片路徑","aria-describedby":"updateTempImage",onKeyup:t[5]||(t[5]=Object(r["withKeys"])((function(){return a.updateTempImage&&a.updateTempImage.apply(a,arguments)}),["enter"])),"onUpdate:modelValue":t[6]||(t[6]=function(e){return n.inputImage=e})},null,544),[[r["vModelText"],n.inputImage]]),Object(r["createVNode"])("button",{class:"btn btn-outline-secondary",type:"button",onClick:t[7]||(t[7]=function(){return a.updateTempImage&&a.updateTempImage.apply(a,arguments)})}," 新增圖片 ")])):Object(r["createCommentVNode"])("",!0)]),n.images.length>0?(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],{key:0},Object(r["renderList"])(n.images,(function(e,c){return Object(r["openBlock"])(),Object(r["createBlock"])("div",{class:"col-md-4",key:"img".concat(c)},[Object(r["createVNode"])("div",q,[Object(r["createVNode"])("div",G,[Object(r["createVNode"])("div",K,[Object(r["createVNode"])("img",{class:"rounded-start w-100 h-100",src:e.url,alt:"產品圖片"},null,8,["src"])]),Object(r["withDirectives"])(Object(r["createVNode"])("input",{id:"mainImages".concat(c),type:"radio",name:"images",class:"me-1",value:e.id,"onUpdate:modelValue":t[8]||(t[8]=function(e){return n.mainImgId=e})},null,8,["id","value"]),[[r["vModelRadio"],n.mainImgId]]),Object(r["createVNode"])("label",{for:"mainImages".concat(c)},"主要圖片",8,["for"]),Object(r["createVNode"])("div",H,[Object(r["createVNode"])("button",{class:"btn rounded-circle shadow-sm",type:"button",onClick:function(e){return a.deleteImg(c)}}," 🗑 ",8,["onClick"])])])])])})),128)):Object(r["createCommentVNode"])("",!0)])]),Object(r["createVNode"])("div",J,[Object(r["createVNode"])("div",Q,[Object(r["createVNode"])("div",z,[W,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[9]||(t[9]=function(e){return n.currentProductItem.title=e})},null,512),[[r["vModelText"],n.currentProductItem.title]])]),Object(r["createVNode"])("div",X,[Y,Object(r["createVNode"])("ul",Z,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(n.statuses,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("li",{class:"me-3",key:e.id},[Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"radio",name:"checkedStatus",class:"me-1 position-absolute opacity-0",value:e.id,id:"".concat(e.type,"Status"),"onUpdate:modelValue":t[10]||(t[10]=function(e){return n.statusType=e})},null,8,["value","id"]),[[r["vModelRadio"],n.statusType]]),Object(r["createVNode"])("label",{for:"".concat(e.type,"Status"),class:"checkedStatus--checked"},[Object(r["createVNode"])("span",{style:{width:"10px",height:"10px"},class:["d-inline-block rounded-circle me-1","bg-".concat(e.type)]},null,2),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(e.text),1)],8,["for"])])})),128))])]),Object(r["createVNode"])("div",ee,[te,Object(r["withDirectives"])(Object(r["createVNode"])("textarea",{class:"form-control",id:"description",placeholder:"描述",row:"5","onUpdate:modelValue":t[11]||(t[11]=function(e){return n.currentProductItem.description=e})},null,512),[[r["vModelText"],n.currentProductItem.description]])]),Object(r["createVNode"])("div",ce,[re,Object(r["withDirectives"])(Object(r["createVNode"])("textarea",{class:"form-control",id:"content",placeholder:"內容",row:"5","onUpdate:modelValue":t[12]||(t[12]=function(e){return n.currentProductItem.content=e})},null,512),[[r["vModelText"],n.currentProductItem.content]])]),Object(r["createVNode"])("div",oe,[ne,Object(r["withDirectives"])(Object(r["createVNode"])("textarea",{class:"form-control",id:"spec",placeholder:"規格",row:"10","onUpdate:modelValue":t[13]||(t[13]=function(e){return n.currentProductItem.spec=e})},null,512),[[r["vModelText"],n.currentProductItem.spec]])]),Object(r["createVNode"])("div",ae,[ie,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"number",min:"0",class:"form-control",id:"originPrice","onUpdate:modelValue":t[14]||(t[14]=function(e){return n.currentProductItem.origin_price=e})},null,512),[[r["vModelText"],n.currentProductItem.origin_price,void 0,{number:!0}]])]),Object(r["createVNode"])("div",de,[le,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"number",min:"0",class:"form-control",id:"price","onUpdate:modelValue":t[15]||(t[15]=function(e){return n.currentProductItem.price=e})},null,512),[[r["vModelText"],n.currentProductItem.price,void 0,{number:!0}]])]),Object(r["createVNode"])("div",ue,[se,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":t[16]||(t[16]=function(e){return n.currentProductItem.category=e})},null,512),[[r["vModelText"],n.currentProductItem.category]])]),Object(r["createVNode"])("div",be,[me,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":t[17]||(t[17]=function(e){return n.currentProductItem.unit=e})},null,512),[[r["vModelText"],n.currentProductItem.unit]])]),Object(r["createVNode"])("div",pe,[Object(r["createVNode"])("div",fe,[Object(r["withDirectives"])(Object(r["createVNode"])("input",{class:"form-check-input",type:"checkbox",id:"isEnabled","onUpdate:modelValue":t[18]||(t[18]=function(e){return n.currentProductItem.is_enabled=e})},null,512),[[r["vModelCheckbox"],n.currentProductItem.is_enabled]]),je])]),Object(r["createVNode"])("div",Oe,[Object(r["createVNode"])("label",he,"評價 - "+Object(r["toDisplayString"])(n.currentProductItem.rate),1),Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"range",class:"form-range w-100",min:"0",max:"5",step:"0.5",id:"rate","onUpdate:modelValue":t[19]||(t[19]=function(e){return n.currentProductItem.rate=e})},null,512),[[r["vModelText"],n.currentProductItem.rate,void 0,{number:!0}]])]),Object(r["createVNode"])("div",ve,[Object(r["createVNode"])("div",ge,[Object(r["withDirectives"])(Object(r["createVNode"])("input",{class:"form-check-input",type:"checkbox",id:"isRateEnabled","onUpdate:modelValue":t[20]||(t[20]=function(e){return n.currentProductItem.is_rateEnabled=e})},null,512),[[r["vModelCheckbox"],n.currentProductItem.is_rateEnabled]]),Ie])]),Object(r["createVNode"])("div",ye,[Object(r["createVNode"])("button",{type:"submit",class:"btn btn-primary text-white w-100 rounded-pill",disabled:!a.isButtonValid},Object(r["toDisplayString"])(n.currentProductItem.id?"編輯":"新增"),9,["disabled"])])])])],32)],32)])])])],512)}var Ne=c("2909"),ke=(c("7db0"),c("4de4"),c("a434"),c("99af"),c("e0ae")),Pe={props:{isCreate:{type:Boolean},productItem:{type:Object}},mixins:[ke["a"]],inject:["emitter"],emits:["clearItem","submitProductItem"],computed:{isButtonValid:function(){var e=this,t=["title","category","unit","origin_price","price"];return t.every((function(t){return e.currentProductItem[t]}))}},data:function(){return{statuses:[{id:1,type:"danger",text:"熱門"},{id:2,type:"warning",text:"新上市"},{id:3,type:"info",text:"不顯示"}],statusType:3,fileUploading:!1,uploadType:1,currentProductItem:null,productModal:"",images:[],inputImage:"",mainImgId:""}},methods:{submitProductItem:function(){var e=this,t=this.currentProductItem.id;try{this.currentProductItem.imageUrl=this.images.find((function(t){return t.id===e.mainImgId})).url}catch(c){this.$vErrorNotice(),this.currentProductItem.imageUrl=""}this.currentProductItem.imagesUrl=this.images.filter((function(t){return t.id!==e.mainImgId})).map((function(e){return e.url})),this.$emit("submitProductItem",{isNew:!t,content:this.currentProductItem})},deleteImg:function(e){this.images[e].id===this.mainImgId&&(this.mainImgId=""),this.images.splice(e,1)},uploadFile:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var c,r,o,n,a,i,d,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.fileUploading=!0,c=e.$refs.fileInput.files[0],r=c.size,o=c.lastModified,n=1048576,!(r>=n)){t.next=10;break}e.emitter.emit("notice-message",{style:"danger",title:"檔案大小不得超過1GB"}),e.$refs.fileInput.value="",e.fileUploading=!1,t.next=26;break;case 10:return t.prev=10,a=new FormData,a.append("file-to-upload",c),t.next=15,Object(y["y"])(a);case 15:i=t.sent,d=i.data,l=d.imageUrl,u=d.success,e.images.push({id:"new".concat(o),url:l}),e.$refs.fileInput.value="",e.fileUploading=!1,u?e.emitter.emit("notice-message",{style:"success",title:"上傳成功"}):e.emitter.emit("notice-message",{style:"danger",title:"上傳失敗"}),t.next=26;break;case 23:t.prev=23,t.t0=t["catch"](10),e.$vErrorNotice();case 26:case"end":return t.stop()}}),t,null,[[10,23]])})))()},updateTempImage:function(){if(this.inputImage){var e="new".concat((new Date).getTime());this.images.push({id:e,url:this.inputImage}),this.inputImage=""}}},watch:{productItem:function(e){this.currentProductItem=Object(g["a"])({},e);var t=this.currentProductItem,c=t.imageUrl,r=t.imagesUrl,o=c?[{id:"currentImg0",url:c}]:[];c&&(this.mainImgId="currentImg0");var n=r||[],a=n.filter((function(e){return Boolean(e)})).map((function(e,t){return{id:"currentImg".concat(t+1),url:e}}));this.images=[].concat(o,Object(Ne["a"])(a))}},created:function(){this.currentProductItem=Object(g["a"])({},this.productItem)}};c("02b8");Pe.render=Ve;var we=Pe,xe=c("adb9"),Ce={components:{Pagination:V["a"],ProductModal:we,QuestionModal:xe["a"]},data:function(){return{currentProductItem:null,products:[],productCount:0,pageInfo:{current:1,total:1},isCreateItem:!0,questionModalContent:"",targetItemId:""}},methods:{generateItemForm:function(){return{title:"",category:"",origin_price:null,price:null,unit:"",description:"",content:"",is_enabled:!0,imageUrl:"",rate:5,imagesUrl:["","","","",""]}},fetchProductData:function(){var e=arguments,t=this;return Object(I["a"])(regeneratorRuntime.mark((function c(){var r,o,n,a,i,d;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:1,c.prev=1,t.$vLoading(!0),c.next=5,Object(y["m"])(r);case 5:o=c.sent,n=o.data,a=n.products,i=n.pagination,d=n.success,d?(t.products=a.map((function(e){return Object(g["a"])(Object(g["a"])({},e),{},{is_enabled:Boolean(e.is_enabled)})})),t.pageInfo={current:i.current_page,total:i.total_pages}):t.$vHttpsNotice(o,"產品資料"),c.next=13;break;case 10:c.prev=10,c.t0=c["catch"](1),t.$vLoading(!1);case 13:return c.prev=13,t.$vLoading(!1),c.finish(13);case 16:case"end":return c.stop()}}),c,null,[[1,10,13,16]])})))()},toggleProductItemStatus:function(e){var t=this;return Object(I["a"])(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.prev=0,t.currentProductItem=e,t.currentProductItem.is_enabled=!t.currentProductItem.is_enabled,c.next=5,t.submitProductItem({isNew:!1,content:t.currentProductItem});case 5:c.next=10;break;case 7:c.prev=7,c.t0=c["catch"](0),t.$vErrorNotice();case 10:case"end":return c.stop()}}),c,null,[[0,7]])})))()},deleteProductItem:function(e){var t=this;return Object(I["a"])(regeneratorRuntime.mark((function c(){var r;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return t.$vLoading(!0),c.prev=1,c.next=4,Object(y["k"])(e);case 4:r=c.sent,r.data.success&&t.fetchProductData(),c.next=12;break;case 8:c.prev=8,c.t0=c["catch"](1),t.$vErrorNotice(),t.$vLoading(!1);case 12:case"end":return c.stop()}}),c,null,[[1,8]])})))()},submitProductItem:function(e){var t=this;return Object(I["a"])(regeneratorRuntime.mark((function c(){var r,o,n,a,i,d;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:if(r=e.isNew,o=e.content,c.prev=1,t.$vLoading(!0),n=o.id,!r){c.next=10;break}return c.next=7,Object(y["e"])({data:o});case 7:c.t0=c.sent,c.next=13;break;case 10:return c.next=12,Object(y["x"])({id:n,data:{data:o}});case 12:c.t0=c.sent;case 13:a=c.t0,i=a.data.success,i&&(t.$refs.productModal.closeModal(),n?(d=t.products.findIndex((function(e){return e.id===n})),-1!==d&&(t.products[d]=o)):t.fetchProductData()),t.$vHttpsNotice(a,"產品調整"),c.next=22;break;case 19:c.prev=19,c.t1=c["catch"](1),t.$vErrorNotice();case 22:return c.prev=22,t.$vLoading(!1),c.finish(22);case 25:case"end":return c.stop()}}),c,null,[[1,19,22,25]])})))()},checkInfo:function(e){var t=e.id,c=e.title;this.questionModalContent="你確定要刪除-".concat(c,"嗎？"),this.targetItemId=t,this.$refs.questionModal.openModal()},handleProductItem:function(e){e?(this.currentProductItem=e,this.isCreateItem=!1):(this.currentProductItem=this.generateItemForm(),this.isCreateItem=!0),this.$refs.productModal.openModal()},updateProductItem:function(e){this.submitProductItem(e)},changePage:function(e){this.fetchProductData(e)},initGenerateForm:function(){this.currentProductItem=this.generateItemForm()},init:function(){this.initGenerateForm(),this.fetchProductData()}},created:function(){this.init()}};Ce.render=v;t["default"]=Ce},a630:function(e,t,c){var r=c("23e7"),o=c("4df4"),n=c("1c7e"),a=!n((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:a},{from:o})},b0c0:function(e,t,c){var r=c("83ab"),o=c("9bf2").f,n=Function.prototype,a=n.toString,i=/^\s*function ([^ (]*)/,d="name";r&&!(d in n)&&o(n,d,{configurable:!0,get:function(){try{return a.call(this).match(i)[1]}catch(e){return""}}})},cae4:function(e,t,c){},d28b:function(e,t,c){var r=c("746f");r("iterator")},d81d:function(e,t,c){"use strict";var r=c("23e7"),o=c("b727").map,n=c("1dde"),a=n("map");r({target:"Array",proto:!0,forced:!a},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},e01a:function(e,t,c){"use strict";var r=c("23e7"),o=c("83ab"),n=c("da84"),a=c("5135"),i=c("861d"),d=c("9bf2").f,l=c("e893"),u=n.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var s={},b=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof b?new u(e):void 0===e?u():u(e);return""===e&&(s[t]=!0),t};l(b,u);var m=b.prototype=u.prototype;m.constructor=b;var p=m.toString,f="Symbol(test)"==String(u("test")),j=/^Symbol\((.*)\)[^)]+$/;d(m,"description",{configurable:!0,get:function(){var e=i(this)?this.valueOf():this,t=p.call(e);if(a(s,e))return"";var c=f?t.slice(7,-1):t.replace(j,"$1");return""===c?void 0:c}}),r({global:!0,forced:!0},{Symbol:b})}},fb6a:function(e,t,c){"use strict";var r=c("23e7"),o=c("861d"),n=c("e8b5"),a=c("23cb"),i=c("50c4"),d=c("fc6a"),l=c("8418"),u=c("b622"),s=c("1dde"),b=s("slice"),m=u("species"),p=[].slice,f=Math.max;r({target:"Array",proto:!0,forced:!b},{slice:function(e,t){var c,r,u,s=d(this),b=i(s.length),j=a(e,b),O=a(void 0===t?b:t,b);if(n(s)&&(c=s.constructor,"function"!=typeof c||c!==Array&&!n(c.prototype)?o(c)&&(c=c[m],null===c&&(c=void 0)):c=void 0,c===Array||void 0===c))return p.call(s,j,O);for(r=new(void 0===c?Array:c)(f(O-j,0)),u=0;j<O;j++,u++)j in s&&l(r,u,s[j]);return r.length=u,r}})}}]);
//# sourceMappingURL=chunk-61526e8a.60c6326f.js.map