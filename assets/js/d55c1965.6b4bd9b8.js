"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[9854],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,d=s["".concat(o,".").concat(m)]||s[m]||b[m]||l;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87889:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"\u5165\u529b\u753b\u9762\u306e\u5b9f\u88c5",sidebar_label:"\u753b\u9762\u306e\u5b9f\u88c5",hide_table_of_contents:!0},i=void 0,p={unversionedId:"react-native/learn/qa-app/exercise-basic-input-screen",id:"react-native/learn/qa-app/exercise-basic-input-screen",title:"\u5165\u529b\u753b\u9762\u306e\u5b9f\u88c5",description:"\u8cea\u554f\u5165\u529b\u753b\u9762\u3001\u30a4\u30d9\u30f3\u30c8\u5165\u529b\u753b\u9762\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/qa-app/exercise-basic-input-screen.md",sourceDirName:"react-native/learn/qa-app",slug:"/react-native/learn/qa-app/exercise-basic-input-screen",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-input-screen",draft:!1,tags:[],version:"current",lastUpdatedAt:1669630603,formattedLastUpdatedAt:"2022\u5e7411\u670828\u65e5",frontMatter:{title:"\u5165\u529b\u753b\u9762\u306e\u5b9f\u88c5",sidebar_label:"\u753b\u9762\u306e\u5b9f\u88c5",hide_table_of_contents:!0},sidebar:"learn",previous:{title:"\u8868\u793a\u90e8\u54c1\u306e\u4f5c\u6210",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-input-components"},next:{title:"API\u547c\u3073\u51fa\u3057",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-input-api"}},o={},c=[{value:"\u88dc\u8db3",id:"\u88dc\u8db3",level:2}],u={toc:c},s="wrapper";function b(e){let{components:t,...l}=e;return(0,a.kt)(s,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8cea\u554f\u5165\u529b\u753b\u9762\u3001\u30a4\u30d9\u30f3\u30c8\u5165\u529b\u753b\u9762\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"API\u547c\u3073\u51fa\u3057\u306f\u5f8c\u3067\u5b9f\u88c5\u3059\u308b\u306e\u3067\u3001API\u306e\u623b\u308a\u5024\u306f\u4e00\u65e6\u3001\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u4e0a\u306b\u76f4\u63a5\u8a18\u8ff0\u3057\u3066\u9032\u3081\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5165\u529b\u753b\u9762",src:r(952).Z,width:"780",height:"800"})),(0,a.kt)("h2",{id:"\u88dc\u8db3"},"\u88dc\u8db3"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u88dc\u8db3\u7b87\u6240"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5165\u529b\u753b\u9762"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5165\u529b\u753b\u9762\u306f\u30e2\u30fc\u30c0\u30eb\u3067\u958b\u304d\u3001\u30e2\u30fc\u30c0\u30eb\u5185\u3067\u8cea\u554f\u5165\u529b\u3068\u30a4\u30d9\u30f3\u30c8\u5165\u529b\u3092\u30bf\u30d6\u3067\u5207\u308a\u66ff\u3048\u3089\u308c\u308b\u3088\u3046\u306b\u3059\u308b\u3002",(0,a.kt)("br",null),"\u4e0b\u30b9\u30ef\u30a4\u30d7\u307e\u305f\u306f\u5165\u529b\u753b\u9762\u5de6\u4e0a\u306e\u300c\xd7\u300d\u30dc\u30bf\u30f3\u62bc\u4e0b\u3067\u5165\u529b\u753b\u9762\u3092\u9589\u3058\u3001\u524d\u753b\u9762\u3092\u8868\u793a\u3059\u308b\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u30bf\u30b0\u30dc\u30bf\u30f3"),(0,a.kt)("td",{parentName:"tr",align:null},"\u62bc\u4e0b\u3067\u753b\u9762\u4e0b\u90e8\u306b\u30bf\u30b0\u306e\u4e00\u89a7\u3092\u30b9\u30e9\u30a4\u30c9\u30a2\u30c3\u30d7\u8868\u793a\u3059\u308b\u3002\u521d\u671f\u306f\u672a\u9078\u629e\u306e\u72b6\u614b\u3002",(0,a.kt)("br",null),"\u30bf\u30b0\u306f\u8907\u6570\u9078\u629e\u53ef\u3068\u3057\u3001\u9078\u629e\u3057\u3066\u3044\u308b\u30bf\u30b0\u306b\u3064\u3044\u3066\u306f\u8272\u3092\u5909\u3048\u308b\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u521d\u5fc3\u8005\u30de\u30fc\u30af\u30dc\u30bf\u30f3"),(0,a.kt)("td",{parentName:"tr",align:null},"\u62bc\u4e0b\u306e\u5ea6\u306bON\uff0fOFF\u3068\u3057\u3001\u521d\u5fc3\u8005\u30de\u30fc\u30af\u306e\u900f\u660e\u5ea6\u3092\u5909\u3048\u308b\u3002\u521d\u671f\u306fOFF\u3068\u3059\u308b\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u30ad\u30fc\u30dc\u30fc\u30c9"),(0,a.kt)("td",{parentName:"tr",align:null},"\u30de\u30fc\u30af\u30c0\u30a6\u30f3\u5165\u529b\u306f\u5fdc\u7528\u7de8\u3067\u5b9f\u88c5\u3059\u308b\u305f\u3081\u3001\u73fe\u6642\u70b9\u3067\u306f\u975e\u5bfe\u5fdc\u3067\u3088\u3044\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u5165\u529b\u30dc\u30bf\u30f3"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5404\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30dc\u30bf\u30f3\uff08\u300c\u6280\u8853\u300d\u3001\u300c\u63d0\u6848\u300d\u306a\u3069\uff09\u62bc\u4e0b\u3067\u9078\u629e\u3055\u308c\u305f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u5185\u5bb9\u3092\u5165\u529b\u6b04\u306b\u5165\u529b\u3055\u308c\u305f\u72b6\u614b\u3068\u3059\u308b\u3002",(0,a.kt)("br",null),"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u5185\u5bb9\u306f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u4e00\u89a7\u53d6\u5f97API\u3067\u53d6\u5f97\u3057\u305f\u5185\u5bb9\u3092\u8868\u793a\u3059\u308b\u3002",(0,a.kt)("br",null),"\u30af\u30ea\u30a2\u62bc\u4e0b\u3067\u5165\u529b\u6b04\u306b\u5165\u529b\u3055\u308c\u305f\u5185\u5bb9\u3092\u524a\u9664\u3059\u308b\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5165\u529b\u7cbe\u67fb"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8cea\u554f\u30bf\u30a4\u30c8\u30eb\u3001\u8cea\u554f\u5185\u5bb9\u3001\u30a4\u30d9\u30f3\u30c8\u30bf\u30a4\u30c8\u30eb\u3001\u30a4\u30d9\u30f3\u30c8\u5185\u5bb9\u306e\u5fc5\u9808\u30c1\u30a7\u30c3\u30af\u3068\u3001\u30a4\u30d9\u30f3\u30c8\u63b2\u8f09\u671f\u9593\u306e\u65e5\u4ed8\u30c1\u30a7\u30c3\u30af\uff08\u5f53\u65e5\u4ee5\u964d\uff09\u3092\u884c\u3046\u3002",(0,a.kt)("br",null),"\u30c1\u30a7\u30c3\u30af\u3067\u30a8\u30e9\u30fc\u306e\u5834\u5408\u306f\u5165\u529b\u9805\u76ee\u4e0b\u90e8\u306b\u8d64\u5b57\u3067\u662f\u6b63\u3092\u4fc3\u3059\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\u3059\u308b\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u8cea\u554f\u30fb\u30a4\u30d9\u30f3\u30c8\u306e\u30bf\u30d6\u5207\u308a\u66ff\u3048"),(0,a.kt)("td",{parentName:"tr",align:null},"\u30bf\u30d6\u5207\u308a\u66ff\u3048\u6642\u306f\u5165\u529b\u5185\u5bb9\u3092\u30af\u30ea\u30a2\u3059\u308b\u3002",(0,a.kt)("br",null),"\u5165\u529b\u30d5\u30a9\u30fc\u30e0\u306b\u6587\u5b57\u304c\u5165\u529b\u3055\u308c\u305f\u72b6\u614b\u3067\u8cea\u554f\u30fb\u30a4\u30d9\u30f3\u30c8\u30bf\u30d6\u306e\u5207\u308a\u66ff\u3048\u64cd\u4f5c\u3092\u3057\u305f\u5834\u5408\u306b\u3001\u5165\u529b\u5185\u5bb9\u304c\u30af\u30ea\u30a2\u3055\u308c\u308b\u304c\u554f\u984c\u306a\u3044\u304b\u3092\u554f\u3046\u8b66\u544a\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u8868\u793a\u3059\u308b\u3002",(0,a.kt)("br",null),"\u8b66\u544a\u30c0\u30a4\u30a2\u30ed\u30b0\u306e\u9078\u629e\u80a2\u306f\u300c\u306f\u3044\u300d\u3001\u300c\u3044\u3044\u3048\u300d\u3068\u3057\u3001\u3044\u3044\u3048\u304c\u9078\u629e\u3055\u308c\u305f\u5834\u5408\u306f\u5165\u529b\u5185\u5bb9\u306e\u30af\u30ea\u30a2\u3068\u30bf\u30d6\u306e\u5207\u308a\u66ff\u3048\u306f\u884c\u308f\u306a\u3044\u3002")))))}b.isMDXComponent=!0},952:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/screen-input-bd424ca9c2c973ba821f0171c6cd46e2.png"}}]);