(function(e){function t(t){for(var c,n,i=t[0],d=t[1],u=t[2],l=0,s=[];l<i.length;l++)n=i[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&s.push(o[n][0]),o[n]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(e[c]=d[c]);p&&p(t);while(s.length)s.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],c=!0,n=1;n<r.length;n++){var i=r[n];0!==o[i]&&(c=!1)}c&&(a.splice(t--,1),e=d(d.s=r[0]))}return e}var c={},n={app:0},o={app:0},a=[];function i(e){return d.p+"js/"+({placeholder:"placeholder","product~shop~therapy":"product~shop~therapy",product:"product",shop:"shop",therapy:"therapy"}[e]||e)+"."+{placeholder:"0fca2577","product~shop~therapy":"e497f707",product:"06dc5e0c",shop:"9a006422",therapy:"1a050f0c"}[e]+".js"}function d(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,d),r.l=!0,r.exports}d.e=function(e){var t=[],r={placeholder:1,"product~shop~therapy":1,product:1,shop:1,therapy:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var c="css/"+({placeholder:"placeholder","product~shop~therapy":"product~shop~therapy",product:"product",shop:"shop",therapy:"therapy"}[e]||e)+"."+{placeholder:"03009d7c","product~shop~therapy":"c88e810f",product:"5ea946c7",shop:"89b379d1",therapy:"fe5ab1f4"}[e]+".css",o=d.p+c,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var u=a[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===c||l===o))return t()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){u=s[i],l=u.getAttribute("data-href");if(l===c||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var c=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete n[e],p.parentNode.removeChild(p),r(a)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){n[e]=0})));var c=o[e];if(0!==c)if(c)t.push(c[2]);else{var a=new Promise((function(t,r){c=o[e]=[t,r]}));t.push(c[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=i(e);var s=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var c=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+c+": "+n+")",s.name="ChunkLoadError",s.type=c,s.request=n,r[1](s)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},d.m=e,d.c=c,d.d=function(e,t,r){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(d.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)d.d(r,c,function(t){return e[t]}.bind(null,c));return r},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/ui-project-perapy/",d.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var p=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0bab":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var c=r("7a23"),n=Object(c["withScopeId"])("data-v-3cd50180");Object(c["pushScopeId"])("data-v-3cd50180");var o={id:"app",class:"app"},a={class:"content"};Object(c["popScopeId"])();var i=n((function(e,t,r,n,i,d){var u=Object(c["resolveComponent"])("Navbar"),l=Object(c["resolveComponent"])("router-view"),s=Object(c["resolveComponent"])("Footer");return Object(c["openBlock"])(),Object(c["createBlock"])("div",o,[Object(c["createVNode"])(u),Object(c["createVNode"])("main",a,[Object(c["createVNode"])(l,{key:e.$route.fullPath})]),Object(c["createVNode"])(s)])})),d=r("e0dd"),u=r.n(d),l=Object(c["withScopeId"])("data-v-2bcb3e96");Object(c["pushScopeId"])("data-v-2bcb3e96");var s={class:"navbar"},p={class:"header-container"},f=Object(c["createVNode"])("img",{class:"web-logo",src:u.a},null,-1),h={class:"topics"},b=Object(c["createTextVNode"])("Home"),m=Object(c["createTextVNode"])("Products"),v=Object(c["createTextVNode"])("Pet Therapy"),O=Object(c["createTextVNode"])("Services");Object(c["popScopeId"])();var j=l((function(e,t,r,n,o,a){var i=Object(c["resolveComponent"])("router-link"),d=Object(c["resolveComponent"])("Dropdown");return Object(c["openBlock"])(),Object(c["createBlock"])("header",null,[Object(c["createVNode"])("nav",s,[Object(c["createVNode"])("div",p,[Object(c["createVNode"])(i,{to:"/"},{default:l((function(){return[f]})),_:1}),Object(c["createVNode"])("div",h,[Object(c["createVNode"])(i,{to:"/"},{default:l((function(){return[b]})),_:1}),Object(c["createVNode"])(i,{to:"/products"},{default:l((function(){return[m]})),_:1}),Object(c["createVNode"])(i,{to:"/therapy"},{default:l((function(){return[v]})),_:1}),Object(c["createVNode"])(i,{to:"/services"},{default:l((function(){return[O]})),_:1})]),Object(c["createVNode"])(d)])])])})),y=Object(c["withScopeId"])("data-v-2903c174");Object(c["pushScopeId"])("data-v-2903c174");var g={class:"menu"},N=Object(c["createVNode"])("img",{class:"userImage",src:"https://i.pinimg.com/originals/f6/70/a8/f670a8875997412b46cea057e2ba7aae.png"},null,-1),P={class:"userPref"},V=Object(c["createVNode"])("a",{class:"dropdownPref"},[Object(c["createVNode"])("i",{class:"fas fa-angle-down"})],-1),w=Object(c["createVNode"])("li",null,[Object(c["createVNode"])("a",{href:"#"},"Profile")],-1),S=Object(c["createVNode"])("li",null,[Object(c["createVNode"])("a",{href:"#"},"Notification")],-1),C=Object(c["createVNode"])("li",null,[Object(c["createVNode"])("a",{href:"#"},"Logout")],-1);Object(c["popScopeId"])();var k=y((function(e,t,r,n,o,a){return Object(c["openBlock"])(),Object(c["createBlock"])("div",null,[Object(c["createVNode"])("ul",g,[N,Object(c["createVNode"])("div",P,[Object(c["createVNode"])("li",{onMouseover:t[2]||(t[2]=function(e){return o.listOne=!0}),onMouseleave:t[3]||(t[3]=function(e){return o.listOne=!1})},[V,Object(c["createVNode"])(c["Transition"],{name:"fade"},{default:y((function(){return[o.listOne?(Object(c["openBlock"])(),Object(c["createBlock"])("ul",{key:0,class:"dropdown-content",onClick:t[1]||(t[1]=function(e){return o.listOne=!1})},[w,S,C])):Object(c["createCommentVNode"])("",!0)]})),_:1})],32)])])])})),I={name:"userPref-dropdown",data:function(){return{listOne:!1}}};r("9727");I.render=k,I.__scopeId="data-v-2903c174";var _=I,T={name:"Navbar",components:{Dropdown:_}};r("fe1e");T.render=j,T.__scopeId="data-v-2bcb3e96";var L=T,B=Object(c["withScopeId"])("data-v-41ab62c5");Object(c["pushScopeId"])("data-v-41ab62c5");var E={class:"footer"},x=Object(c["createVNode"])("div",{class:"footer-container"},[Object(c["createVNode"])("div",{class:"dev-info"},[Object(c["createVNode"])("img",{class:"web-logo",src:u.a}),Object(c["createVNode"])("h1",{class:"web-name"},"Perapy")]),Object(c["createVNode"])("div",{class:"dev-links"},[Object(c["createVNode"])("div",{class:"subject-info"},[Object(c["createVNode"])("div",null,"VNUHCM - University of Science"),Object(c["createVNode"])("div",null,"FIT - Group 06"),Object(c["createVNode"])("div",null,"CSC13112 - User Interface Design")]),Object(c["createVNode"])("div",{class:"contact-info"},[Object(c["createVNode"])("div",{class:"contact-container"},[Object(c["createVNode"])("i",{class:"fas fa-map-marker-alt location-icon"}),Object(c["createVNode"])("div",{class:"contact-content"}," 227 Nguyen Van Cu St., Ward 4, District 5, Ho Chi Minh City, Vietnam ")]),Object(c["createVNode"])("div",{class:"contact-container"},[Object(c["createVNode"])("i",{class:"fas fa-envelope email-icon"}),Object(c["createVNode"])("div",{class:"contact-content"}," perapy@hcmus.edu.vn ")]),Object(c["createVNode"])("div",{class:"contact-container"},[Object(c["createVNode"])("i",{class:"fas fa-phone-alt tel-icon"}),Object(c["createVNode"])("div",{class:"contact-content"}," (+84) 77976534 ")])])])],-1);Object(c["popScopeId"])();var A=B((function(e,t,r,n,o,a){return Object(c["openBlock"])(),Object(c["createBlock"])("footer",E,[x])})),M={name:"Footer",data:function(){return{message:"Footer"}}};r("e527");M.render=A,M.__scopeId="data-v-41ab62c5";var Q=M,q={components:{Navbar:L,Footer:Q}};r("63fa");q.render=i,q.__scopeId="data-v-3cd50180";var D=q,F=(r("def6"),r("ecee")),H=r("ad3d"),U=r("c074"),J=r("f2d1"),G=r("b702"),K=(r("d3b7"),r("3ca3"),r("ddb0"),r("7db0"),r("fb6a"),r("d81d"),r("a630"),r("159b"),r("b64b"),r("6c02")),W=[{path:"/",name:"Home",component:function(){return r.e("placeholder").then(r.bind(null,"49c9"))},meta:{title:"Home"}},{path:"/services",name:"Services",component:function(){return r.e("placeholder").then(r.bind(null,"49c9"))},meta:{title:"Services"}},{path:"/products",name:"Products",component:function(){return Promise.all([r.e("product~shop~therapy"),r.e("product")]).then(r.bind(null,"ca11"))},meta:{title:"Products"},children:[{path:"",name:"ProductList",component:function(){return Promise.all([r.e("product~shop~therapy"),r.e("product")]).then(r.bind(null,"6f2b"))}},{path:":productId",name:"ProductDetail",component:function(){return Promise.all([r.e("product~shop~therapy"),r.e("product")]).then(r.bind(null,"0763"))}},{path:"cart",name:"Cart",component:function(){return Promise.all([r.e("product~shop~therapy"),r.e("shop")]).then(r.bind(null,"1b9d"))},meta:{title:"Cart"}},{path:"shipping",name:"Shipping",component:function(){return Promise.all([r.e("product~shop~therapy"),r.e("shop")]).then(r.bind(null,"08b7"))},meta:{title:"Shipping"}}]},{path:"/therapy",name:"PetTherapy",component:function(){return Promise.all([r.e("product~shop~therapy"),r.e("therapy")]).then(r.bind(null,"ca11"))},meta:{title:"Pet Therapy"},children:[{path:":petId",name:"PetDetail",component:function(){return Promise.all([r.e("product~shop~therapy"),r.e("therapy")]).then(r.bind(null,"975c"))}},{path:"",name:"PetList",component:function(){return Promise.all([r.e("product~shop~therapy"),r.e("therapy")]).then(r.bind(null,"59f1"))}}]}],$=Object(K["a"])({history:Object(K["b"])(),routes:W});$.beforeEach((function(e,t,r){window.scrollTo(0,0);var c=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.title})),n=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags})),o=t.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags}));if(c){var a=c.meta.title;document.title=a}else o&&(document.title=o.meta.title);if(Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(e){return e.parentNode.removeChild(e)})),!n)return r();n.meta.metaTags.map((function(e){var t=document.createElement("meta");return Object.keys(e).forEach((function(r){t.setAttribute(r,e[r])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((function(e){return document.head.appendChild(e)})),r()}));var z=$,R=(r("b0c0"),r("4de4"),r("5502")),X=Object(R["a"])({state:{cartList:[],totalQuantity:0,changed:!1},getters:{cartList:function(e){return 0===e.cartList.length&&console.log("Blank"),e.cartList},changed:function(e){return e.changed},productInfo:function(e){return function(t){var r=e.cartList.find((function(e){return e.id===t}));return[r.quantity,r.totalPrice]}}},mutations:{addProduct:function(e,t){var r=e.cartList.find((function(e){return e.id===t.id}));r?(console.log("A"),r.totalPrice=Math.round(100*(r.totalPrice+r.price))/100,r.quantity++):(e.cartList.push({id:t.id,thumbnail:t.thumbnail,name:t.name,price:t.price,quantity:1,totalPrice:t.price}),e.totalQuantity++,e.changed=!0)},removeProduct:function(e,t){e.cartList=e.cartList.filter((function(e){return e.id!==t})),e.totalQuantity--,e.changed=!0},increaseProductQuantity:function(e,t){var r=e.cartList.find((function(e){return e.id===t}));r.quantity++,r.totalPrice=Math.round(100*(r.totalPrice+r.price))/100,e.change=!0},decreaseProductQuantity:function(e,t){var r=e.cartList.find((function(e){return e.id===t}));1!==r.quantity&&(r.quantity--,r.totalPrice=Math.round(100*(r.totalPrice-r.price))/100,e.changed=!0)},clearCart:function(e){e.cartList=[],e.changed=!1,e.totalQuantity=0}},actions:{addProductToCart:function(e,t){e.commit("addProduct",t)},removeProduct:function(e,t){e.commit("removeProduct",t)},increaseProductQuantity:function(e,t){e.commit("increaseProductQuantity",t)},decreaseProductQuantity:function(e,t){e.commit("decreaseProductQuantity",t)},clearCart:function(e){e.commit("clearCart")}}}),Y=X;F["d"].add(U["a"]),F["d"].add(J["a"]),F["d"].add(G["a"]),F["b"].watch();var Z=Object(c["createApp"])(D).use(z).use(Y);Z.component("font-awesome-icon",H["a"]),Z.mount("#app")},"5a7e":function(e,t,r){},"63fa":function(e,t,r){"use strict";r("e7e5")},9727:function(e,t,r){"use strict";r("c7e1")},c7e1:function(e,t,r){},def6:function(e,t,r){},e0dd:function(e,t,r){e.exports=r.p+"img/logo.a3ea0f0e.png"},e527:function(e,t,r){"use strict";r("0bab")},e7e5:function(e,t,r){},fe1e:function(e,t,r){"use strict";r("5a7e")}});
//# sourceMappingURL=app.1cda02dc.js.map