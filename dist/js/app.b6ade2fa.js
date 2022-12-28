(function(){"use strict";var e={840:function(e,n,t){var r=t(9242),o=t(3396);const a={id:"app"},i={class:"navbar navbar-expand-lg navbar-dark bg-dark"},u={class:"container-fluid mx-2"},l={class:"navbar-brand"},s=(0,o._)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),c={class:"collapse navbar-collapse",id:"navbarsExampleDefault"},d=(0,o._)("ul",{class:"navbar-nav me-auto"},null,-1),f={class:"d-flex"};function g(e,n,t,g,p,v){const h=(0,o.up)("router-link"),m=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("header",null,[(0,o._)("nav",i,[(0,o._)("div",u,[(0,o._)("a",l,[(0,o.Wm)(h,{to:{name:"siswa.index"},class:"navbar-brand"},{default:(0,o.w5)((()=>[(0,o.Uk)("V3421024")])),_:1},8,["to"])]),s,(0,o._)("div",c,[d,(0,o._)("div",f,[p.loggedIn?((0,o.wg)(),(0,o.iD)("a",{key:0,onClick:n[0]||(n[0]=(0,r.iM)(((...e)=>v.logout&&v.logout(...e)),["prevent"])),class:"btn btn-light text-black"},"Logout")):(0,o.kq)("",!0)])])])])]),(0,o._)("main",null,[(0,o.Wm)(m)])])}t(7658);var p=t(4311),v={name:"App",data(){return{loggedIn:null,role:null}},methods:{getLoggedIn(){this.loggedIn=localStorage.getItem("loggedIn"),this.role=localStorage.getItem("role")},logout(){p.Z.get("http://localhost:8000/api/logout").then((()=>(localStorage.removeItem("loggedIn"),this.$router.push({name:"login"}))))}},watch:{$route:{immediate:!0,handler(){this.getLoggedIn()}}}},h=t(89);const m=(0,h.Z)(v,[["render",g]]);var b=m,y=t(678);const w=[{path:"/register",name:"register",component:()=>t.e(541).then(t.bind(t,4034))},{path:"/login",name:"login",component:()=>t.e(541).then(t.bind(t,3691))},{path:"/",name:"siswa.index",component:()=>t.e(541).then(t.bind(t,6011))},{path:"/create",name:"siswa.create",component:()=>t.e(318).then(t.bind(t,5316))},{path:"/edit/:id",name:"siswa.edit",component:()=>t.e(451).then(t.bind(t,1657))}],k=(0,y.p7)({history:(0,y.PO)(),routes:w});var x=k;t(4012),t(7154);p.Z.defaults.withCredentials=!0;const _=(0,r.ri)(b);_.use(x),_.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var u=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(u=!1,a<i&&(i=a));if(u){e.splice(c--,1);var s=o();void 0!==s&&(n=s)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+{318:"siswa.create",451:"siswa.edit",541:"siswa.index"}[e]+"."+{318:"290dcd68",451:"2555a1fd",541:"667e9b87"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+{318:"siswa.create",451:"siswa.edit"}[e]+"."+{318:"7024e5ac",451:"7024e5ac"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="frontend:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+a){u=d;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=r),e[r]=[o];var f=function(n,t){u.onerror=u.onload=null,clearTimeout(g);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},g=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)r();else{var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=u,a.parentNode.removeChild(a),o(l)}};return a.onerror=a.onload=i,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),u=t.p+i;if(n(i,u))return o();e(r,u,null,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={318:1,451:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),u=new Error,l=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};t.l(i,l,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],u=r[1],l=r[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(l)var c=l(t)}for(n&&n(r);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(840)}));r=t.O(r)})();
//# sourceMappingURL=app.b6ade2fa.js.map