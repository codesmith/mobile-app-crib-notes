"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[4913],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=o(a),d=r,k=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},45858:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"Q&A\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\uff08\u5fdc\u7528\u7de8\uff09",sidebar_label:"Q&A\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\uff08\u5fdc\u7528\u7de8\uff09",hide_table_of_contents:!0},i=void 0,p={unversionedId:"react-native/learn/qa-app/exercise-advanced",id:"react-native/learn/qa-app/exercise-advanced",title:"Q&A\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\uff08\u5fdc\u7528\u7de8\uff09",description:"Q&A\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\uff08\u57fa\u672c\u7de8\uff09\u3067\u4f5c\u6210\u3057\u305f\u30a2\u30d7\u30ea\u306b\u5bfe\u3057\u3066\u3001\u4ee5\u4e0b\u306e\u5909\u66f4\u3092\u52a0\u3048\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/docs/react-native/learn/qa-app/exercise-advanced.md",sourceDirName:"react-native/learn/qa-app",slug:"/react-native/learn/qa-app/exercise-advanced",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/exercise-advanced",draft:!1,tags:[],version:"current",lastUpdatedAt:1669630603,formattedLastUpdatedAt:"2022\u5e7411\u670828\u65e5",frontMatter:{title:"Q&A\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\uff08\u5fdc\u7528\u7de8\uff09",sidebar_label:"Q&A\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\uff08\u5fdc\u7528\u7de8\uff09",hide_table_of_contents:!0},sidebar:"learn",previous:{title:"API\u547c\u3073\u51fa\u3057",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-input-api"},next:{title:"\u9077\u79fb\u5148\u306e\u753b\u9762\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6e21\u3059",permalink:"/mobile-app-crib-notes/react-native/learn/advance/react-navigation-param"}},u={},o=[{value:"\u30b9\u30af\u30ed\u30fc\u30eb\u6642\u306b\u7279\u5b9a\u306e\u884c\u3092\u753b\u9762\u306e\u4e0a\u7aef\u306b\u56fa\u5b9a\u8868\u793a",id:"\u30b9\u30af\u30ed\u30fc\u30eb\u6642\u306b\u7279\u5b9a\u306e\u884c\u3092\u753b\u9762\u306e\u4e0a\u7aef\u306b\u56fa\u5b9a\u8868\u793a",level:2},{value:"\u30dc\u30bf\u30f3\u62bc\u4e0b\u6642\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u8ffd\u52a0",id:"\u30dc\u30bf\u30f3\u62bc\u4e0b\u6642\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u8ffd\u52a0",level:2},{value:"\u30b8\u30a7\u30b9\u30c1\u30e3\u30fc\u64cd\u4f5c\u8ffd\u52a0",id:"\u30b8\u30a7\u30b9\u30c1\u30e3\u30fc\u64cd\u4f5c\u8ffd\u52a0",level:2},{value:"\u7121\u9650\u30b9\u30af\u30ed\u30fc\u30eb",id:"\u7121\u9650\u30b9\u30af\u30ed\u30fc\u30eb",level:2},{value:"\u8868\u793a\u90e8\u54c1\u306e\u30c6\u30b9\u30c8\u306e\u8ffd\u52a0",id:"\u8868\u793a\u90e8\u54c1\u306e\u30c6\u30b9\u30c8\u306e\u8ffd\u52a0",level:2},{value:"\u30a2\u30d7\u30ea\u30a2\u30a4\u30b3\u30f3\u306e\u8a2d\u5b9a",id:"\u30a2\u30d7\u30ea\u30a2\u30a4\u30b3\u30f3\u306e\u8a2d\u5b9a",level:2},{value:"\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306e\u521d\u671f\u5316\u51e6\u7406\u306e\u8ffd\u52a0",id:"\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306e\u521d\u671f\u5316\u51e6\u7406\u306e\u8ffd\u52a0",level:2},{value:"WebView\u8868\u793a",id:"webview\u8868\u793a",level:2},{value:"\u30ed\u30b0\u30a4\u30f3/\u30ed\u30b0\u30a2\u30a6\u30c8\u306e\u8ffd\u52a0",id:"\u30ed\u30b0\u30a4\u30f3\u30ed\u30b0\u30a2\u30a6\u30c8\u306e\u8ffd\u52a0",level:2},{value:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306e\u8ffd\u52a0",id:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306e\u8ffd\u52a0",level:2},{value:"\u30c6\u30fc\u30de\u306e\u8ffd\u52a0",id:"\u30c6\u30fc\u30de\u306e\u8ffd\u52a0",level:2},{value:"\u30aa\u30f3\u30dc\u30fc\u30c7\u30a3\u30f3\u30b0\u753b\u9762\u306e\u8ffd\u52a0",id:"\u30aa\u30f3\u30dc\u30fc\u30c7\u30a3\u30f3\u30b0\u753b\u9762\u306e\u8ffd\u52a0",level:2},{value:"\u5165\u529b\u753b\u9762\u3067\u30de\u30fc\u30af\u30c0\u30a6\u30f3\u66f8\u5f0f\u3067\u306e\u5165\u529b\u306e\u8ffd\u52a0",id:"\u5165\u529b\u753b\u9762\u3067\u30de\u30fc\u30af\u30c0\u30a6\u30f3\u66f8\u5f0f\u3067\u306e\u5165\u529b\u306e\u8ffd\u52a0",level:2}],c={toc:o};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Q&A\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\uff08\u57fa\u672c\u7de8\uff09\u3067\u4f5c\u6210\u3057\u305f\u30a2\u30d7\u30ea\u306b\u5bfe\u3057\u3066\u3001\u4ee5\u4e0b\u306e\u5909\u66f4\u3092\u52a0\u3048\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u3067\u3042\u308c\u3070\u3001\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u9078\u5b9a\u3057\u3066\u5c0e\u5165\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"\u30b9\u30af\u30ed\u30fc\u30eb\u6642\u306b\u7279\u5b9a\u306e\u884c\u3092\u753b\u9762\u306e\u4e0a\u7aef\u306b\u56fa\u5b9a\u8868\u793a"},"\u30b9\u30af\u30ed\u30fc\u30eb\u6642\u306b\u7279\u5b9a\u306e\u884c\u3092\u753b\u9762\u306e\u4e0a\u7aef\u306b\u56fa\u5b9a\u8868\u793a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u89a7\u753b\u9762\uff08\u30db\u30fc\u30e0\u753b\u9762\uff09\u3067\u4e0a\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u305f\u3068\u304d\u306b\u3001\u8cea\u554f\u30e9\u30d9\u30eb\u884c\u304c\u753b\u9762\u4e0a\u90e8\u3067\u56fa\u5b9a\u3055\u308c\u3001\u4e0a\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u3066\u3082\u8868\u793a\u3057\u7d9a\u3051\u3089\u308c\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30db\u30fc\u30e0\u753b\u9762-\u30b9\u30af\u30ed\u30fc\u30eb\u4f8b",src:a(39822).Z,width:"432",height:"440"})),(0,r.kt)("h2",{id:"\u30dc\u30bf\u30f3\u62bc\u4e0b\u6642\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u8ffd\u52a0"},"\u30dc\u30bf\u30f3\u62bc\u4e0b\u6642\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u8ffd\u52a0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8cea\u554f\u8a73\u7d30\u753b\u9762\u306e\u3044\u3044\u306d\u30dc\u30bf\u30f3\u3092\u62bc\u4e0b\u3057\u305f\u3068\u304d\u306b\u3001\u3044\u3044\u306d\u30dc\u30bf\u30f3\u306e\u30a2\u30a4\u30b3\u30f3\u304c\u5f3e\u3080\uff08\u30a2\u30a4\u30b3\u30f3\u304c\u62e1\u5927\u3055\u308c\u305f\u5f8c\u306b\u5143\u306e\u30b5\u30a4\u30ba\u306b\u623b\u308b\uff09\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u8a18\u306e\u52d5\u304d\u610f\u5916\u306b\u3082\u3001\u56de\u8ee2\u3084\u4f38\u7e2e\u306a\u3069\u8272\u3005\u306a\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u8a66\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h2",{id:"\u30b8\u30a7\u30b9\u30c1\u30e3\u30fc\u64cd\u4f5c\u8ffd\u52a0"},"\u30b8\u30a7\u30b9\u30c1\u30e3\u30fc\u64cd\u4f5c\u8ffd\u52a0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5165\u529b\u753b\u9762\u306e\u30a4\u30d9\u30f3\u30c8\u3068\u8cea\u554f\u306e\u30bf\u30d6\u306e\u5207\u308a\u66ff\u3048\u306b\u3064\u3044\u3066\u3001\u5de6\u53f3\u306e\u30b9\u30ef\u30a4\u30d7\u3067\u5207\u308a\u66ff\u3048\u3089\u308c\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h2",{id:"\u7121\u9650\u30b9\u30af\u30ed\u30fc\u30eb"},"\u7121\u9650\u30b9\u30af\u30ed\u30fc\u30eb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u89a7\u753b\u9762\uff08\u30db\u30fc\u30e0\u753b\u9762\uff09\u307e\u305f\u306f\u30a4\u30d9\u30f3\u30c8\u4e00\u89a7\u753b\u9762\u306b\u3064\u3044\u3066\u3001\u7121\u9650\u30b9\u30af\u30ed\u30fc\u30eb\u3068\u306a\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u7121\u9650\u30b9\u30af\u30ed\u30fc\u30eb\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306b\u306f\u3001API\u306eIF\u306b\u5fc5\u8981\u306a\u9805\u76ee\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,r.kt)("a",{parentName:"li",href:"/react-native/santoku/development/implement/http-api#flatlist%E3%82%92%E7%94%A8%E3%81%84%E3%81%A6%E7%84%A1%E9%99%90%E3%82%B9%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%AB%E3%82%92%E5%AE%9F%E7%8F%BE%E3%81%99%E3%82%8B"},"FlatList\u3092\u7528\u3044\u3066\u7121\u9650\u30b9\u30af\u30ed\u30fc\u30eb\u3092\u5b9f\u73fe\u3059\u308b"),"\u3092\u53c2\u8003\u306b\u3001\u3069\u306e\u3088\u3046\u306a\u5909\u66f4\u3092\u52a0\u3048\u308c\u3070\u5b9f\u73fe\u53ef\u80fd\u304b\u8003\u3048\u3001\u5b9f\u88c5\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h2",{id:"\u8868\u793a\u90e8\u54c1\u306e\u30c6\u30b9\u30c8\u306e\u8ffd\u52a0"},"\u8868\u793a\u90e8\u54c1\u306e\u30c6\u30b9\u30c8\u306e\u8ffd\u52a0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/react-native/santoku/test-planning/ut-planning#%E8%87%AA%E5%8B%95%E3%83%86%E3%82%B9%E3%83%88"},"\u81ea\u52d5\u30c6\u30b9\u30c8"),"\u3068",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ws-4020/mobile-app-crib-notes/tree/master/example-app/SantokuApp"},"SantokuApp"),"\u306e",(0,r.kt)("inlineCode",{parentName:"li"},"src/bases/ui/button/Button.test.tsx"),"\u3092\u53c2\u8003\u306b\u3001\u4f5c\u6210\u3057\u305f\u3069\u308c\u304b1\u3064\u306e\u8868\u793a\u90e8\u54c1\u306b\u3064\u3044\u3066\u81ea\u52d5\u30c6\u30b9\u30c8\u3092\u5b9f\u88c5\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h2",{id:"\u30a2\u30d7\u30ea\u30a2\u30a4\u30b3\u30f3\u306e\u8a2d\u5b9a"},"\u30a2\u30d7\u30ea\u30a2\u30a4\u30b3\u30f3\u306e\u8a2d\u5b9a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30a2\u30a4\u30b3\u30f3\u3068\u3057\u3066\u4efb\u610f\u306e\u753b\u50cf\u3092\u7528\u610f\u3057\u3001iOS/Android\u306e\u30db\u30fc\u30e0\u753b\u9762\u3067Q&A\u30a2\u30d7\u30ea\u306e\u30a2\u30d7\u30ea\u30a2\u30a4\u30b3\u30f3\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h2",{id:"\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306e\u521d\u671f\u5316\u51e6\u7406\u306e\u8ffd\u52a0"},"\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306e\u521d\u671f\u5316\u51e6\u7406\u306e\u8ffd\u52a0"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/react-native/santoku/application-architecture/life-cycle-management/initialization"},"\u30a2\u30d7\u30ea\u8d77\u52d5\u5f8c\u306e\u521d\u671f\u5316\u51e6\u7406"),"\u3068SantokuApp\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"src/apps/app/use-cases/useAppInitialize.ts"),"\u3092\u53c2\u8003\u306b\u3001\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306e\u521d\u671f\u5316\u51e6\u7406\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306b\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u753b\u9762\u306e\u30c7\u30b6\u30a4\u30f3\u306f\u554f\u3044\u307e\u305b\u3093\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306b\u30d0\u30fc\u30b8\u30e7\u30f3\u30c1\u30a7\u30c3\u30af\u3092\u884c\u3044\u3001\u52d5\u4f5c\u4fdd\u8a3c\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u6e80\u305f\u306a\u3044\u5834\u5408\u306f\u5f37\u5236\u30d0\u30fc\u30b8\u30e7\u30f3\u30a2\u30c3\u30d7\u3092\u4fc3\u3059\u30c0\u30a4\u30a2\u30ed\u30b0\u8868\u793a\u3068\u30a2\u30d7\u30ea\u30b9\u30c8\u30a2\u3092\u958b\u304f\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u30c1\u30a7\u30c3\u30af\u306f\u30a2\u30d7\u30ea\u66f4\u65b0\u60c5\u5831\u306e\u53d6\u5f97API\uff08/system/app-updates/{type}/{version}\uff09\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002API\u306e\u4ed5\u69d8\u306f",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ws-4020/mobile-app-crib-notes/blob/master/example-app/api-document/openapi.yaml"},"openapi.yaml"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))),(0,r.kt)("h2",{id:"webview\u8868\u793a"},"WebView\u8868\u793a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5229\u7528\u898f\u7d04\u540c\u610f\u753b\u9762\u3092\u8ffd\u52a0\u3057\u3001\u5916\u90e8\u30b5\u30a4\u30c8\u306e\u5229\u7528\u898f\u7d04\u3092WebView\u3067\u958b\u304f\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h2",{id:"\u30ed\u30b0\u30a4\u30f3\u30ed\u30b0\u30a2\u30a6\u30c8\u306e\u8ffd\u52a0"},"\u30ed\u30b0\u30a4\u30f3/\u30ed\u30b0\u30a2\u30a6\u30c8\u306e\u8ffd\u52a0"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/react-native/santoku/application-architecture/auth/overview"},"\u8a8d\u8a3c\u65b9\u5f0f"),"\u3092\u53c2\u8003\u306b\u3001\u30ed\u30b0\u30a4\u30f3/\u30ed\u30b0\u30a2\u30a6\u30c8\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002SantokuApp\u304b\u3089",(0,r.kt)("inlineCode",{parentName:"p"},"src/features/account"),"\u914d\u4e0b\u3092\u30b3\u30d4\u30fc\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3001\u30ed\u30b0\u30a4\u30f3\u3001\u30ed\u30b0\u30a2\u30a6\u30c8\u306e\u51e6\u7406\u3092\u5b9f\u88c5\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h2",{id:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306e\u8ffd\u52a0"},"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306e\u8ffd\u52a0"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/react-native/santoku/application-architecture/error-handling/overview"},"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"),"\u3092\u53c2\u8003\u306b\u3001\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002SantokuApp\u304b\u3089",(0,r.kt)("inlineCode",{parentName:"p"},"src/apps/app/errors"),"\u914d\u4e0b\u3092\u30b3\u30d4\u30fc\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30a8\u30e9\u30fc\u767a\u751f\u6642\u306b\u30a8\u30e9\u30fc\u30da\u30fc\u30b8\u3092\u8868\u793a\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("li",{parentName:"ul"},"API\u30a8\u30e9\u30fc\u767a\u751f\u6642\u306b\u30a8\u30e9\u30fc\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u8868\u793a\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h2",{id:"\u30c6\u30fc\u30de\u306e\u8ffd\u52a0"},"\u30c6\u30fc\u30de\u306e\u8ffd\u52a0"),(0,r.kt)("p",null,"SantokuApp\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"src/bases/ui/theme"),"\u3092\u53c2\u8003\u306b\u3001\u30c6\u30fc\u30de\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c6\u30fc\u30de\u3092\u4f5c\u6210\u3057\u3001\u30c6\u30fc\u30de\u3092\u4f7f\u7528\u3057\u3066\u30ab\u30e9\u30fc\u306e\u8a2d\u5b9a\u3092\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("li",{parentName:"ul"},"OS\u306e\u8a2d\u5b9a\u3067\u30c0\u30fc\u30af\u30e2\u30fc\u30c9\u306b\u3057\u305f\u969b\u3001\u30a2\u30d7\u30ea\u306e\u8868\u793a\u304c\u30c0\u30fc\u30af\u30ab\u30e9\u30fc\u3067\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("li",{parentName:"ul"},"OS\u306e\u8a2d\u5b9a\u3067\u30c0\u30fc\u30af\u30e2\u30fc\u30c9\u306b\u3057\u3066\u3082\u3001\u30a2\u30d7\u30ea\u306e\u8868\u793a\u304c\u30e2\u30fc\u30c9\u5909\u66f4\u524d\u3068\u540c\u69d8\u306e\u30ab\u30e9\u30fc\u3067\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h2",{id:"\u30aa\u30f3\u30dc\u30fc\u30c7\u30a3\u30f3\u30b0\u753b\u9762\u306e\u8ffd\u52a0"},"\u30aa\u30f3\u30dc\u30fc\u30c7\u30a3\u30f3\u30b0\u753b\u9762\u306e\u8ffd\u52a0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u521d\u56de\u8d77\u52d5\u6642\u306b\u5f53\u30a2\u30d7\u30ea\u3092\u8aac\u660e\u3059\u308b\u7c21\u5358\u306a\u30aa\u30f3\u30dc\u30fc\u30c7\u30a3\u30f3\u30b0\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h2",{id:"\u5165\u529b\u753b\u9762\u3067\u30de\u30fc\u30af\u30c0\u30a6\u30f3\u66f8\u5f0f\u3067\u306e\u5165\u529b\u306e\u8ffd\u52a0"},"\u5165\u529b\u753b\u9762\u3067\u30de\u30fc\u30af\u30c0\u30a6\u30f3\u66f8\u5f0f\u3067\u306e\u5165\u529b\u306e\u8ffd\u52a0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5165\u529b\u753b\u9762\u3067\u3001\u30de\u30fc\u30af\u30c0\u30a6\u30f3\u66f8\u5f0f\u3067\u306e\u5165\u529b\u304c\u53ef\u80fd\u306a\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}s.isMDXComponent=!0},39822:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/screen-home-scroll-5f654ad40820d48ae0f716f9188303d8.png"}}]);