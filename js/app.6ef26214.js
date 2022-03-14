(()=>{"use strict";var e={2812:(e,t,n)=>{n(5363),n(71);var o=n(8880),r=n(8834),s=n(3673);function a(e,t,n,o,r,a){const i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(i)}const i=(0,s.aZ)({name:"App"});var c=n(4260);const u=(0,c.Z)(i,[["render",a]]),l=u;var E=n(3863),S=n(7083),d=n(9582),f=n(9253);const h=[{path:"/",component:()=>Promise.all([n.e(736),n.e(320)]).then(n.bind(n,9320)),children:[{path:"",name:f.n.INDEX,component:()=>Promise.all([n.e(736),n.e(584)]).then(n.bind(n,9584))}]},{path:"/",component:()=>Promise.all([n.e(736),n.e(320)]).then(n.bind(n,9320)),children:[{path:"/login",name:f.n.LOGIN,component:()=>Promise.all([n.e(736),n.e(121)]).then(n.bind(n,7121))}]},{path:"/",component:()=>Promise.all([n.e(736),n.e(320)]).then(n.bind(n,9320)),children:[{path:"/login/social",name:f.n.LOGIN_SOCIAL,component:()=>n.e(962).then(n.bind(n,2962))}]},{path:"/",component:()=>Promise.all([n.e(736),n.e(320)]).then(n.bind(n,9320)),children:[{path:"/lessons",name:f.n.LESSONS,component:()=>Promise.all([n.e(736),n.e(218)]).then(n.bind(n,5218))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([n.e(736),n.e(480)]).then(n.bind(n,7480))}],p=h,m=(0,S.BC)((()=>{const e=d.r5,t=(0,d.p7)({scrollBehavior:()=>({left:0,top:0}),routes:p,history:e("")});return t}));async function v(e,t){const o="function"===typeof E["default"]?await(0,E["default"])({}):E["default"],{storeKey:s}=await Promise.resolve().then(n.bind(n,3863)),a="function"===typeof m?await m({store:o}):m;o.$router=a;const i=e(l);return i.use(r.Z,t),{app:i,store:o,storeKey:s,router:a}}var T=n(6395),g=n(6249);const _={config:{},plugins:{LocalStorage:T.Z,Loading:g.Z}},O="";async function y({app:e,router:t,store:n,storeKey:o},r){let s=!1;const a=e=>{try{return t.resolve(e).href}catch(n){}return Object(e)===e?null:e},i=e=>{if(s=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t,window.location.reload())},c=window.location.href.replace(window.location.origin,"");for(let l=0;!1===s&&l<r.length;l++)try{await r[l]({app:e,router:t,store:n,ssrContext:null,redirect:i,urlPath:c,publicPath:O})}catch(u){return u&&u.url?void i(u.url):void console.error("[Quasar] boot error:",u)}!0!==s&&(e.use(t),e.use(n,o),e.mount("#q-app"))}v(o.ri,_).then((e=>Promise.all([Promise.resolve().then(n.bind(n,1768))]).then((t=>{const n=t.map((e=>e.default)).filter((e=>"function"===typeof e));y(e,n)}))))},1768:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d,api:()=>E,baseURL:()=>l});var o=n(7083),r=n(52),s=n.n(r),a=n(3863),i=n(238),c=n(6395),u=function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function a(e){try{c(o.next(e))}catch(t){s(t)}}function i(e){try{c(o["throw"](e))}catch(t){s(t)}}function c(e){e.done?n(e.value):r(e.value).then(a,i)}c((o=o.apply(e,t||[])).next())}))};const l="https://happylearny.herokuapp.com/api",E=s().create({baseURL:l,timeout:1e4,withCredentials:!0,credentials:"include"});function S(e){const t=(0,a.useStore)(),{accessToken:n}=t.state.token,o=e;return n&&(o.headers.Authorization=`Bearer ${n}`),o}E.interceptors.request.use(S),E.interceptors.response.use((e=>e),(e=>u(void 0,void 0,void 0,(function*(){const t=(0,a.useStore)(),n=e;if(!e.response||e.response&&401!==e.response.status)throw new Error(e.message);e.response.data&&n.response.data.redirectTo&&window.location.replace(n.response.data.redirectTo);const o=yield E.get("/auth/refresh");if(!o.data.accessToken)throw window.location.replace("/#/login"),t.commit(i.F.SET_ACCESS_TOKEN,""),new Error(o.data.message);return t.commit(i.F.SET_ACCESS_TOKEN,o.data.accessToken),c.Z.set("accessToken",o.data.accessToken),s()(S(e.config))}))));const d=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=s(),e.config.globalProperties.$api=E}))},2801:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(1768),r=n(3863),s=n(5810),a=n(7990),i=function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function a(e){try{c(o.next(e))}catch(t){s(t)}}function i(e){try{c(o["throw"](e))}catch(t){s(t)}}function c(e){e.done?n(e.value):r(e.value).then(a,i)}c((o=o.apply(e,t||[])).next())}))};const c=e=>i(void 0,void 0,void 0,(function*(){return new Promise(((t,n)=>{(0,o.api)(e).then((e=>{t(e.data)})).catch((e=>{const t=(0,r.useStore)();t.commit(a.z.RESET_MESSAGES),t.dispatch(s.b.SET_MESSAGE,e.stack),n(e)}))}))})),u=c,l={user:{get(){return u({url:"/user"})},changeAction(e){return u({url:"/user/change_action",method:"POST",data:{action:e}})}},auth:{loginGuest(){return u({url:"/auth/login/guest"})},loginSocial(){return u({url:"/auth/login/social"})},logout(){return u({url:"/auth/logout"})}},lesson:{fetch(){return u({url:"/lesson"})},create(e){return u({url:"/lesson",method:"POST",data:e})}}}},9253:(e,t,n)=>{var o,r;n.d(t,{n:()=>o,I:()=>r}),function(e){e["INDEX"]="index",e["LOGIN"]="login",e["LOGIN_SOCIAL"]="login.social",e["LESSONS"]="lessons"}(o||(o={})),function(e){e["FETCH_DATA"]="Загрузка данных"}(r||(r={}))},3863:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U,storeKey:()=>P,useStore:()=>F});var o=n(7083),r=n(3617),s=n(6395);const a={accessToken:s.Z.getItem("accessToken")||""};var i=n(238);const c={[i.F.SET_ACCESS_TOKEN](e,t){e.accessToken=t,t?s.Z.set("accessToken",t):s.Z.remove("accessToken")}},u={state:a,mutations:c},l={infoMessage:"",timer:void 0};var E,S=n(5810);(function(e){e["SET_MESSAGE"]="infoMessage/SET_MESSAGE",e["SET_TIMER"]="infoMessage/SET_TIMER",e["CLEAR_TIMER"]="infoMessage/CLEAR_TIMER"})(E||(E={}));const d={[S.b.SET_MESSAGE]({commit:e},t){e(E.CLEAR_TIMER),e(E.SET_MESSAGE,t);const n=window.setTimeout((()=>{e(E.SET_MESSAGE,"")}),6e4);e(E.SET_TIMER,n)}},f={[E.SET_MESSAGE](e,t){e.infoMessage=t},[E.SET_TIMER](e,t){e.timer=t},[E.CLEAR_TIMER](e){window.clearTimeout(e.timer)}},h={actions:d,mutations:f,state:l},p={name:"",socialId:""};var m;(function(e){e["SET_USER"]="user/SET_USER",e["REMOVE_USER"]="user/REMOVE_USER"})(m||(m={}));const v={[m.SET_USER](e,t){e.socialId=t.socialId||"",e.name=t.name},[m.REMOVE_USER](e){e.socialId="",e.name=""}};var T=n(2801),g=n(9253),_=n(7990),O=n(829),y=function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function a(e){try{c(o.next(e))}catch(t){s(t)}}function i(e){try{c(o["throw"](e))}catch(t){s(t)}}function c(e){e.done?n(e.value):r(e.value).then(a,i)}c((o=o.apply(e,t||[])).next())}))};const A={[O.D.FETCH_USER]({state:e,commit:t}){return y(this,void 0,void 0,(function*(){if(e.name)return;t(_.z.SET_MESSAGE,g.I.FETCH_DATA);const n=yield T.Z.user.get();t(_.z.REMOVE_MESSAGE,g.I.FETCH_DATA),t(m.SET_USER,n)}))},[O.D.LOGOUT_USER]({commit:e}){return y(this,void 0,void 0,(function*(){yield T.Z.auth.logout(),e(m.REMOVE_USER)}))}},M={state:p,actions:A,mutations:v},b={lessons:[]};var w=n(9232);const N={[w.N.SET_LESSONS](e,t){e.lessons=t},[w.N.REMOVE_LESSON](e,t){const n=e.lessons.findIndex((e=>e.id===t));e.lessons.splice(n,1)},[w.N.ADD_LESSON](e,t){e.lessons.push(t)},[w.N.EDIT_LESSON](e,t){const n=e.lessons.findIndex((e=>e.id===t.id));e.lessons.splice(n,1,t)}};var L=n(6912),R=function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function a(e){try{c(o.next(e))}catch(t){s(t)}}function i(e){try{c(o["throw"](e))}catch(t){s(t)}}function c(e){e.done?n(e.value):r(e.value).then(a,i)}c((o=o.apply(e,t||[])).next())}))};const C={[L.e.FETCH_LESSONS]({state:e,commit:t}){return R(this,void 0,void 0,(function*(){if(e.lessons.length)return;t(_.z.SET_MESSAGE,g.I.FETCH_DATA);const n=yield T.Z.lesson.fetch();t(_.z.REMOVE_MESSAGE,g.I.FETCH_DATA),t(w.N.SET_LESSONS,n)}))},[L.e.ADD_LESSON]({commit:e},t){return R(this,void 0,void 0,(function*(){const n=yield T.Z.lesson.create(t);e(w.N.ADD_LESSON,n)}))}},I={state:b,actions:C,mutations:N},k={loadingMessages:[]},D={[_.z.SET_MESSAGE](e,t){e.loadingMessages.push(t)},[_.z.REMOVE_MESSAGE](e,t){const n=e.loadingMessages.findIndex((e=>e===t));e.loadingMessages.splice(n,1)},[_.z.RESET_MESSAGES](e){e.loadingMessages.splice(0,e.loadingMessages.length)}},G={mutations:D,state:k},P=Symbol("vuex-key"),x=(0,r.MT)({modules:{token:u,infoMessage:h,user:M,lesson:I,loading:G},strict:!1}),U=(0,o.h)((()=>x));function F(){return x}},5810:(e,t,n)=>{var o;n.d(t,{b:()=>o}),function(e){e["SET_MESSAGE"]="infoMessage/SET_MESSAGE"}(o||(o={}))},6912:(e,t,n)=>{var o;n.d(t,{e:()=>o}),function(e){e["FETCH_LESSONS"]="user/FETCH_LESSONS",e["ADD_LESSON"]="user/ADD_LESSON",e["REMOVE_LESSON"]="user/REMOVE_LESSON",e["EDIT_LESSON"]="user/EDIT_LESSON"}(o||(o={}))},9232:(e,t,n)=>{var o;n.d(t,{N:()=>o}),function(e){e["ADD_LESSON"]="lesson/ADD_LESSON",e["EDIT_LESSON"]="lesson/EDIT_LESSON",e["SET_LESSONS"]="lesson/SET_LESSONS",e["REMOVE_LESSON"]="lesson/REMOVE_LESSON"}(o||(o={}))},7990:(e,t,n)=>{var o;n.d(t,{z:()=>o}),function(e){e["SET_MESSAGE"]="loading/SET_MESSAGE",e["REMOVE_MESSAGE"]="loading/REMOVE_MESSAGE",e["RESET_MESSAGES"]="loading/RESET_MESSAGES"}(o||(o={}))},238:(e,t,n)=>{var o;n.d(t,{F:()=>o}),function(e){e["SET_ACCESS_TOKEN"]="token/SET_ACCESS_TOKEN"}(o||(o={}))},829:(e,t,n)=>{var o;n.d(t,{D:()=>o}),function(e){e["FETCH_USER"]="user/FETCH_USER",e["LOGOUT_USER"]="user/LOGOUT_USER"}(o||(o={}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.m=e,(()=>{var e=[];n.O=(t,o,r,s)=>{if(!o){var a=1/0;for(l=0;l<e.length;l++){for(var[o,r,s]=e[l],i=!0,c=0;c<o.length;c++)(!1&s||a>=s)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(i=!1,s<a&&(a=s));if(i){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[o,r,s]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,o)=>(n.f[o](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{121:"0be56e98",218:"a8118d99",320:"ac019333",480:"5fd9b0ee",584:"7c1c4566",962:"665499be"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"31d6cfe0",218:"814c2e50",736:"cfc15eea"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="client:";n.l=(o,r,s,a)=>{if(e[o])e[o].push(r);else{var i,c;if(void 0!==s)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var E=u[l];if(E.getAttribute("src")==o||E.getAttribute("data-webpack")==t+s){i=E;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+s),i.src=o),e[o]=[r];var S=(t,n)=>{i.onerror=i.onload=null,clearTimeout(d);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((e=>e(n))),t)return t(n)},d=setTimeout(S.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=S.bind(null,i.onerror),i.onload=S.bind(null,i.onload),c&&document.head.appendChild(i)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p=""})(),(()=>{var e=(e,t,n,o)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=s=>{if(r.onerror=r.onload=null,"load"===s.type)n();else{var a=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=i,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=s,r.href=t,document.head.appendChild(r),r},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],s=r.getAttribute("data-href");if(s===e||s===t)return r}},o=o=>new Promise(((r,s)=>{var a=n.miniCssF(o),i=n.p+a;if(t(a,i))return r();e(o,i,r,s)})),r={143:0};n.f.miniCss=(e,t)=>{var n={218:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}})(),(()=>{var e={143:0};n.f.j=(t,o)=>{var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var s=new Promise(((n,o)=>r=e[t]=[n,o]));o.push(r[2]=s);var a=n.p+n.u(t),i=new Error,c=o=>{if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,r[1](i)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,o)=>{var r,s,[a,i,c]=o,u=0;if(a.some((t=>0!==e[t]))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var l=c(n)}for(t&&t(o);u<a.length;u++)s=a[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(l)},o=self["webpackChunkclient"]=self["webpackChunkclient"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[736],(()=>n(2812)));o=n.O(o)})();