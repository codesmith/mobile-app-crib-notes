"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[4138],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=i,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},16403:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={title:"Firebase Cloud Messaging\u3092\u7528\u3044\u305f\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u69cb\u6210\u4f8b"},a=void 0,c={unversionedId:"reference/notification/infrastructure",id:"reference/notification/infrastructure",title:"Firebase Cloud Messaging\u3092\u7528\u3044\u305f\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u69cb\u6210\u4f8b",description:"Firebase Cloud Messaging (FCM)\u3092\u7528\u3044\u305f\u69cb\u6210\u4f8b",source:"@site/docs/reference/notification/infrastructure.md",sourceDirName:"reference/notification",slug:"/reference/notification/infrastructure",permalink:"/mobile-app-crib-notes/reference/notification/infrastructure",draft:!1,tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"Firebase Cloud Messaging\u3092\u7528\u3044\u305f\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u69cb\u6210\u4f8b"},sidebar:"reference",previous:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/reference/notification/overview"},next:{title:"\u5404\u30b5\u30fc\u30d3\u30b9\u306e\u521d\u671f\u8a2d\u5b9a",permalink:"/mobile-app-crib-notes/reference/notification/configuration"}},s={},l=[{value:"Firebase Cloud Messaging (FCM)\u3092\u7528\u3044\u305f\u69cb\u6210\u4f8b",id:"firebase-cloud-messaging-fcm\u3092\u7528\u3044\u305f\u69cb\u6210\u4f8b",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"firebase-cloud-messaging-fcm\u3092\u7528\u3044\u305f\u69cb\u6210\u4f8b"},"Firebase Cloud Messaging (FCM)\u3092\u7528\u3044\u305f\u69cb\u6210\u4f8b"),(0,i.kt)("p",null,"\u672c\u30ac\u30a4\u30c9\u3067\u306f\u3001Firebase Cloud Messaging (FCM) \u3092\u7528\u3044\u3066Android/iOS\u7aef\u672b\u3078\u306e\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u3092\u5b9f\u73fe\u3059\u308b\u4f8b\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"FCM\u3092\u5229\u7528\u3059\u308b\u969b\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging/fcm-architecture?hl=ja"},"Firebase\u306e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u5185\u306e\u4ee5\u4e0b\u306e\u56f3\u304c\u308f\u304b\u308a\u3084\u3059\u3044\u3067\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://firebase.google.com/docs/cloud-messaging/images/diagram-FCM.png?hl=ja%5D",alt:"FCM"})),(0,i.kt)("p",null,"\u958b\u767a\u8005\u306f\u3001\u3053\u306e\u56f3\u306b\u304a\u3051\u308b1\u756a\uff08\u4e00\u822c\u7684\u306b\u306f\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d3\u30b9\uff09\u30684\u756a\uff08\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\uff09\u306e\u90e8\u5206\u3092\u5b9f\u88c5\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u672c\u30ac\u30a4\u30c9\u3067\u306f\u3053\u306e\u4e21\u8005\u306b\u3064\u3044\u3066\u3001\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u4ea4\u3048\u306a\u304c\u3089\u89e3\u8aac\u3057\u307e\u3059\u3002"))}u.isMDXComponent=!0}}]);