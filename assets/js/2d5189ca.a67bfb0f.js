"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,k=d["".concat(o,".").concat(c)]||d[c]||s[c]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306e\u8868\u793a\u30d1\u30bf\u30fc\u30f3"},i=void 0,p={unversionedId:"reference/auth/login-screens",id:"reference/auth/login-screens",title:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306e\u8868\u793a\u30d1\u30bf\u30fc\u30f3",description:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u3069\u306e\u3088\u3046\u306b\u8868\u793a\u3059\u308b\u304b\u306b\u3064\u3044\u3066\u3044\u304f\u3064\u304b\u9078\u629e\u80a2\u304c\u3042\u308a\u3001\u305d\u308c\u305e\u308c\u3067\u53d6\u308a\u3046\u308b\u8a8d\u8a3c\u65b9\u6cd5\u304c\u5909\u308f\u3063\u3066\u304d\u307e\u3059\u3002",source:"@site/docs/reference/auth/login-screens.md",sourceDirName:"reference/auth",slug:"/reference/auth/login-screens",permalink:"/mobile-app-crib-notes/reference/auth/login-screens",draft:!1,tags:[],version:"current",lastUpdatedAt:1631152412,formattedLastUpdatedAt:"2021\u5e749\u67089\u65e5",frontMatter:{title:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306e\u8868\u793a\u30d1\u30bf\u30fc\u30f3"},sidebar:"reference",previous:{title:"\u8a8d\u8a3c\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",permalink:"/mobile-app-crib-notes/reference/auth/authn-architecture"},next:{title:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406",permalink:"/mobile-app-crib-notes/reference/auth/manage-credentials"}},o={},u=[{value:"\u30d1\u30bf\u30fc\u30f3\u3054\u3068\u306e\u30e1\u30ea\u30c3\u30c8\u30fb\u30c7\u30e1\u30ea\u30c3\u30c8",id:"\u30d1\u30bf\u30fc\u30f3\u3054\u3068\u306e\u30e1\u30ea\u30c3\u30c8\u30c7\u30e1\u30ea\u30c3\u30c8",level:2},{value:"1. \u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u30cd\u30a4\u30c6\u30a3\u30d6\u5074\u306b\u8868\u793a\u3059\u308b",id:"1-\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u30cd\u30a4\u30c6\u30a3\u30d6\u5074\u306b\u8868\u793a\u3059\u308b",level:3},{value:"\u30e1\u30ea\u30c3\u30c8",id:"\u30e1\u30ea\u30c3\u30c8",level:4},{value:"\u30c7\u30e1\u30ea\u30c3\u30c8",id:"\u30c7\u30e1\u30ea\u30c3\u30c8",level:4},{value:"2. In-App Browser\u3067\u8a8d\u8a3c\u30b5\u30fc\u30d3\u30b9\u304c\u7528\u610f\u3057\u3066\u3044\u308b\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u8868\u793a\u3059\u308b",id:"2-in-app-browser\u3067\u8a8d\u8a3c\u30b5\u30fc\u30d3\u30b9\u304c\u7528\u610f\u3057\u3066\u3044\u308b\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u8868\u793a\u3059\u308b",level:3},{value:"\u30e1\u30ea\u30c3\u30c8",id:"\u30e1\u30ea\u30c3\u30c8-1",level:4},{value:"\u30c7\u30e1\u30ea\u30c3\u30c8",id:"\u30c7\u30e1\u30ea\u30c3\u30c8-1",level:4},{value:"3. Default Browser\u3067\u8a8d\u8a3c\u30b5\u30fc\u30d3\u30b9\u304c\u7528\u610f\u3057\u3066\u3044\u308b\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u8868\u793a\u3059\u308b",id:"3-default-browser\u3067\u8a8d\u8a3c\u30b5\u30fc\u30d3\u30b9\u304c\u7528\u610f\u3057\u3066\u3044\u308b\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u8868\u793a\u3059\u308b",level:3},{value:"\u30e1\u30ea\u30c3\u30c8",id:"\u30e1\u30ea\u30c3\u30c8-2",level:4},{value:"\u30c7\u30e1\u30ea\u30c3\u30c8",id:"\u30c7\u30e1\u30ea\u30c3\u30c8-2",level:4}],m={toc:u};function s(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u3069\u306e\u3088\u3046\u306b\u8868\u793a\u3059\u308b\u304b\u306b\u3064\u3044\u3066\u3044\u304f\u3064\u304b\u9078\u629e\u80a2\u304c\u3042\u308a\u3001\u305d\u308c\u305e\u308c\u3067\u53d6\u308a\u3046\u308b\u8a8d\u8a3c\u65b9\u6cd5\u304c\u5909\u308f\u3063\u3066\u304d\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"No."),(0,a.kt)("th",{parentName:"tr",align:null},"\u8868\u793a\u65b9\u6cd5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53d6\u308a\u3046\u308b\u8a8d\u8a3c\u65b9\u6cd5\u306e\u4f8b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"\u30cd\u30a4\u30c6\u30a3\u30d6\u5074\u306b\u8868\u793a\u3059\u308b"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u30bb\u30c3\u30b7\u30e7\u30f3ID"),(0,a.kt)("li",null,"OpenID Connect\uff08",(0,a.kt)("a",{parentName:"td",href:"/mobile-app-crib-notes/reference/auth/stateless-authn#%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9%E3%82%AA%E3%83%BC%E3%83%8A%E3%83%BC%E3%83%91%E3%82%B9%E3%83%AF%E3%83%BC%E3%83%89%E3%82%AF%E3%83%AC%E3%83%87%E3%83%B3%E3%82%B7%E3%83%A3%E3%83%AB%E3%82%BA%E3%83%95%E3%83%AD%E3%83%BC"},"\u30ea\u30bd\u30fc\u30b9\u30aa\u30fc\u30ca\u30fc\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u30fb\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30ba\u30d5\u30ed\u30fc"),"\uff09")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"In-App Browser\u3067\u8a8d\u8a3c\u30b5\u30fc\u30d3\u30b9\u304c\u7528\u610f\u3057\u3066\u3044\u308b\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u8868\u793a\u3059\u308b"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,"OpenID Connect\uff08",(0,a.kt)("a",{parentName:"td",href:"/mobile-app-crib-notes/reference/auth/stateless-authn#%E8%AA%8D%E5%8F%AF%E3%82%B3%E3%83%BC%E3%83%89%E3%83%95%E3%83%AD%E3%83%BC--pkce"},"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc + PKCE"),"\uff09"),(0,a.kt)("li",null,"OpenID Connect\uff08\u30cf\u30a4\u30d6\u30ea\u30c3\u30c9\u30d5\u30ed\u30fc\uff09")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"Default Browser\u3067\u8a8d\u8a3c\u30b5\u30fc\u30d3\u30b9\u304c\u7528\u610f\u3057\u3066\u3044\u308b\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u8868\u793a\u3059\u308b"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,"OpenID Connect\uff08",(0,a.kt)("a",{parentName:"td",href:"/mobile-app-crib-notes/reference/auth/stateless-authn#%E8%AA%8D%E5%8F%AF%E3%82%B3%E3%83%BC%E3%83%89%E3%83%95%E3%83%AD%E3%83%BC--pkce"},"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc + PKCE"),"\uff09"),(0,a.kt)("li",null,"OpenID Connect\uff08\u30cf\u30a4\u30d6\u30ea\u30c3\u30c9\u30d5\u30ed\u30fc\uff09")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("del",{parentName:"td"},"4")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("del",{parentName:"td"},"WebView\u306b\u8868\u793a\u3059\u308b")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("del",{parentName:"td"},"OIDC\u8a8d\u8a3c"))))),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"OpenID Connect\u3067\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u8868\u793a\u3059\u308b\u6642\u306bWebView\u3092\u4f7f\u308f\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002\u4ee3\u308f\u308a\u306bIn-App Browser\u3092\u4f7f\u3046\u3088\u3046\u306b\u30012016/8\u306bGoogle Developers\u304b\u3089",(0,a.kt)("a",{parentName:"p",href:"https://developers.googleblog.com/2016/08/modernizing-oauth-interactions-in-native-apps.html"},"\u52e7\u544a\u304c\u51fa\u3066\u3044\u307e\u3059"),"\u3002")),(0,a.kt)("p",null,"\u306a\u304a\u30012\uff5e4\u306b\u8a18\u8f09\u3057\u3066\u3044\u308b\u30d6\u30e9\u30a6\u30b6\u306e\u7a2e\u985e\u3068\u3001\u5404OS\u3067\u306e\u30d6\u30e9\u30a6\u30b6\u3084SDK\u3068\u306e\u5bfe\u5fdc\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u30d6\u30e9\u30a6\u30b6\u306e\u7a2e\u985e"),(0,a.kt)("th",{parentName:"tr",align:null},"Android"),(0,a.kt)("th",{parentName:"tr",align:null},"iOS"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Default Browser"),(0,a.kt)("td",{parentName:"tr",align:null},"Chrome"),(0,a.kt)("td",{parentName:"tr",align:null},"Safari")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"In-App Browser"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://developer.chrome.com/multidevice/android/customtabs"},"Chrome Custom Tabs")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession"},"ASWebAuthenticationSession"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WebView"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/android/webkit/WebView"},"WebView")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://developer.apple.com/documentation/webkit/wkwebview"},"WKWebView"))))),(0,a.kt)("h2",{id:"\u30d1\u30bf\u30fc\u30f3\u3054\u3068\u306e\u30e1\u30ea\u30c3\u30c8\u30c7\u30e1\u30ea\u30c3\u30c8"},"\u30d1\u30bf\u30fc\u30f3\u3054\u3068\u306e\u30e1\u30ea\u30c3\u30c8\u30fb\u30c7\u30e1\u30ea\u30c3\u30c8"),(0,a.kt)("p",null,"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306e\u8868\u793a\u65b9\u6cd5\u3054\u3068\u306b\u30e1\u30ea\u30c3\u30c8\u30fb\u30c7\u30e1\u30ea\u30c3\u30c8\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u306b\u793a\u3059\u56f3\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3068\u8a8d\u8a3c\u30b5\u30fc\u30d3\u30b9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u9593\u306e\u753b\u9762\u9077\u79fb\u3092\u4e2d\u5fc3\u3068\u3057\u3066\u304b\u306a\u308a\u7c21\u7565\u5316\u3057\u305f\u56f3\u3067\u3059\u3002\u4ed5\u69d8\u3092\u6b63\u78ba\u306b\u8868\u73fe\u3057\u305f\u3082\u306e\u3067\u306f\u306a\u3044\u306e\u3067\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("h3",{id:"1-\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u30cd\u30a4\u30c6\u30a3\u30d6\u5074\u306b\u8868\u793a\u3059\u308b"},"1. \u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u30cd\u30a4\u30c6\u30a3\u30d6\u5074\u306b\u8868\u793a\u3059\u308b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u30cd\u30a4\u30c6\u30a3\u30d6\u5074\u306b\u8868\u793a\u3059\u308b",src:n(3554).Z,width:"1365",height:"841"})),(0,a.kt)("h4",{id:"\u30e1\u30ea\u30c3\u30c8"},"\u30e1\u30ea\u30c3\u30c8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u3067\u8a8d\u8a3c\u304c\u5b8c\u7d50\u3059\u308b\u306e\u3067UX\u304c\u826f\u3044"),(0,a.kt)("li",{parentName:"ul"},"UI\u3092\u81ea\u7531\u306b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u308b")),(0,a.kt)("h4",{id:"\u30c7\u30e1\u30ea\u30c3\u30c8"},"\u30c7\u30e1\u30ea\u30c3\u30c8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306b\u30e6\u30fc\u30b6\u306eID\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u6e21\u3063\u3066\u3057\u307e\u3046\u305f\u3081\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u8a8d\u8a3c\u30b5\u30fc\u30d3\u30b9\u306f\u4f7f\u3048\u306a\u3044",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u3048\u3070\u3001SNS\u306a\u3069\u306e\u8a8d\u8a3c\u30b5\u30fc\u30d3\u30b9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3092\u4f7f\u3063\u3066\u3044\u308b\u5834\u5408\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306f\u30e6\u30fc\u30b6\u306eSNS\u306eID\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u77e5\u308a\u3001\u60aa\u7528\u3067\u304d\u307e\u3059"))),(0,a.kt)("li",{parentName:"ul"},"Default Browser\u3068Cookie\u3092\u5171\u6709\u3067\u304d\u306a\u3044\u306e\u3067\u3001SNS\u8a8d\u8a3c\u306a\u3069\u306e\u5834\u5408\u4e00\u5ea6Default Browser\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u3066\u3082\u6539\u3081\u3066\u30ed\u30b0\u30a4\u30f3\u304c\u5fc5\u8981"),(0,a.kt)("li",{parentName:"ul"},"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u81ea\u4f5c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b")),(0,a.kt)("h3",{id:"2-in-app-browser\u3067\u8a8d\u8a3c\u30b5\u30fc\u30d3\u30b9\u304c\u7528\u610f\u3057\u3066\u3044\u308b\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u8868\u793a\u3059\u308b"},"2. In-App Browser\u3067\u8a8d\u8a3c\u30b5\u30fc\u30d3\u30b9\u304c\u7528\u610f\u3057\u3066\u3044\u308b\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u8868\u793a\u3059\u308b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"In-App Browser\u3067\u8a8d\u8a3c\u30b5\u30fc\u30d3\u30b9\u304c\u7528\u610f\u3057\u3066\u3044\u308b\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u8868\u793a\u3059\u308b",src:n(95343).Z,width:"1365",height:"841"})),(0,a.kt)("h4",{id:"\u30e1\u30ea\u30c3\u30c8-1"},"\u30e1\u30ea\u30c3\u30c8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u3067\u8a8d\u8a3c\u304c\u5b8c\u7d50\u3059\u308b\u306e\u3067UX\u304c\u826f\u3044"),(0,a.kt)("li",{parentName:"ul"},"Default Browser\u3068Cookie\u3092\u5171\u6709\u3067\u304d\u308b\u306e\u3067\u3001SNS\u30ed\u30b0\u30a4\u30f3\u306a\u3069\u306e\u5834\u5408\u3001\u4e00\u5ea6Default Browser\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u304a\u3051\u3070\u3001\u6539\u3081\u3066\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u5fc5\u8981\u304c\u306a\u3044"),(0,a.kt)("li",{parentName:"ul"},"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30dd\u30ea\u30b7\u30fc\u304c\u30d6\u30e9\u30a6\u30b6\u30d9\u30f3\u30c0\u30fc\u6e96\u62e0")),(0,a.kt)("h4",{id:"\u30c7\u30e1\u30ea\u30c3\u30c8-1"},"\u30c7\u30e1\u30ea\u30c3\u30c8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In-App Browser\u3092\u5909\u66f4\u3067\u304d\u308b\u8981\u7d20\u306f\u3001\u30c4\u30fc\u30eb\u30d0\u30fc\u306e\u8272\u3084\u9589\u3058\u308b\u30dc\u30bf\u30f3\u306e\u30a2\u30a4\u30b3\u30f3\u306a\u3069\u306b\u9650\u3089\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u5b8c\u5168\u306b\u601d\u3044\u901a\u308a\u306eUI\u306f\u5b9f\u73fe\u3067\u304d\u306a\u3044")),(0,a.kt)("h3",{id:"3-default-browser\u3067\u8a8d\u8a3c\u30b5\u30fc\u30d3\u30b9\u304c\u7528\u610f\u3057\u3066\u3044\u308b\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u8868\u793a\u3059\u308b"},"3. Default Browser\u3067\u8a8d\u8a3c\u30b5\u30fc\u30d3\u30b9\u304c\u7528\u610f\u3057\u3066\u3044\u308b\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u8868\u793a\u3059\u308b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Default Browser\u3067\u8a8d\u8a3c\u30b5\u30fc\u30d3\u30b9\u304c\u7528\u610f\u3057\u3066\u3044\u308b\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u8868\u793a\u3059\u308b",src:n(53847).Z,width:"1365",height:"841"})),(0,a.kt)("h4",{id:"\u30e1\u30ea\u30c3\u30c8-2"},"\u30e1\u30ea\u30c3\u30c8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u304c\u666e\u6bb5\u4f7f\u3044\u6163\u308c\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306a\u306e\u3067\u64cd\u4f5c\u3057\u3084\u3059\u3044"),(0,a.kt)("li",{parentName:"ul"},"SNS\u8a8d\u8a3c\u306a\u3069\u306e\u5834\u5408\u3001\u4e00\u5ea6Default Browser\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u304a\u3051\u3070\u3001\u6539\u3081\u3066\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u5fc5\u8981\u304c\u306a\u3044"),(0,a.kt)("li",{parentName:"ul"},"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30dd\u30ea\u30b7\u30fc\u304c\u30d6\u30e9\u30a6\u30b6\u30d9\u30f3\u30c0\u30fc\u6e96\u62e0")),(0,a.kt)("h4",{id:"\u30c7\u30e1\u30ea\u30c3\u30c8-2"},"\u30c7\u30e1\u30ea\u30c3\u30c8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5225\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff08Chrome\u3084Safari\uff09\u306a\u306e\u3067UI\u3092\u30ab\u30b9\u30bf\u30e0\u3067\u304d\u306a\u3044"),(0,a.kt)("li",{parentName:"ul"},"\u5225\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff08Chrome\u3084Safari\uff09\u3092\u958b\u3044\u3066\u8a8d\u8a3c\u5f8c\u306b\u623b\u3063\u3066\u304f\u308b\u5fc5\u8981\u304c\u3042\u308b\u306e\u3067\u3001UX\u304c\u591a\u5c11\u4f4e\u4e0b\u3059\u308b")))}s.isMDXComponent=!0},53847:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/authn-pattern-defaultbrowser-b08c0733685ade207d0c059f487638c8.png"},95343:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/authn-pattern-inappbrowser-4d87f879d3a6b2f49f60745bb9423808.png"},3554:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/authn-pattern-native-76f81c0eb31b506b87b7032f169902ae.png"}}]);