"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[6169],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),d=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=d(n),u=a,f=c["".concat(o,".").concat(u)]||c[u]||k[u]||l;return n?r.createElement(f,p(p({ref:e},m),{},{components:n})):r.createElement(f,p({ref:e},m))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,p=new Array(l);p[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:a,p[1]=i;for(var d=2;d<l;d++)p[d]=n[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3778:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return o},toc:function(){return d},default:function(){return k}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),p={title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406\u306e\u65b9\u91dd"},i=void 0,o={unversionedId:"react-native/santoku/decisions/adr-005-message",id:"react-native/santoku/decisions/adr-005-message",isDocsHomePage:!1,title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406\u306e\u65b9\u91dd",description:"Status: Accepted",source:"@site/docs/react-native/santoku/decisions/adr-005-message.mdx",sourceDirName:"react-native/santoku/decisions",slug:"/react-native/santoku/decisions/adr-005-message",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-005-message",tags:[],version:"current",lastUpdatedAt:1634693385,formattedLastUpdatedAt:"2021/10/20",frontMatter:{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406\u306e\u65b9\u91dd"},sidebar:"santoku",previous:{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-004-deep-link"}},d=[{value:"\u8981\u7d04",id:"\u8981\u7d04",children:[]},{value:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",children:[]},{value:"\u8b70\u8ad6",id:"\u8b70\u8ad6",children:[{value:"\u306a\u305c\u7ba1\u7406\u304c\u5fc5\u8981\u306b\u306a\u308b\u306e\u304b",id:"\u306a\u305c\u7ba1\u7406\u304c\u5fc5\u8981\u306b\u306a\u308b\u306e\u304b",children:[]},{value:"\u958b\u767a\u306e\u3057\u3084\u3059\u3055",id:"\u958b\u767a\u306e\u3057\u3084\u3059\u3055",children:[]},{value:"\u56fd\u969b\u5316\u5bfe\u5fdc\u3084\u591a\u8a00\u8a9e\u5bfe\u5fdc",id:"\u56fd\u969b\u5316\u5bfe\u5fdc\u3084\u591a\u8a00\u8a9e\u5bfe\u5fdc",children:[]}]},{value:"\u6c7a\u5b9a",id:"\u6c7a\u5b9a",children:[]}],m={toc:d};function k(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Status: Accepted"),(0,l.kt)("h2",{id:"\u8981\u7d04"},"\u8981\u7d04"),(0,l.kt)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406\u306b\u95a2\u3059\u308b\u65b9\u91dd\u306f\u4ee5\u4e0b\u3068\u3057\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u5229\u7528\u8005\u306e\u76ee\u306b\u89e6\u308c\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u3001\u4e00\u610f\u306a\u30ad\u30fc\u3068\u6587\u8a00\u3084\u6587\u7ae0\u3067\u7ba1\u7406\u3059\u308b"),(0,l.kt)("li",{parentName:"ul"},"\u958b\u767a\u3057\u3084\u3059\u3044\u3088\u3046IDE\u88dc\u5b8c\u304c\u50cd\u304f\u3088\u3046\u306a\u30ad\u30fc\u3092\u5b9a\u7fa9\u3059\u308b"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u8aad\u6027\u304c\u9ad8\u307e\u308b\u3088\u3046\u65e5\u672c\u8a9e\u3092\u30ad\u30fc\u3068\u3057\u3066\u826f\u3044")),(0,l.kt)("h2",{id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"},"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"),(0,l.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3068\u9055\u3044\u3001\u64cd\u4f5c\u30ac\u30a4\u30c0\u30f3\u30b9\u3084\u30a8\u30e9\u30fc\u306e\u6587\u8a00\u306a\u3069\u304c\u5229\u7528\u8005\u306b\u76f4\u63a5\u8868\u793a\u3055\u308c\u308b\u3053\u3068\u304c\u524d\u63d0\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u3053\u308c\u3089\u306f\u958b\u767a\u5074\u306e\u4e8b\u60c5\u3088\u308a\u3082\u3001\u9867\u5ba2\u3084\u5229\u7528\u8005\u306e\u610f\u56f3\u306b\u3088\u3063\u3066\u5909\u308f\u308a\u3084\u3059\u3044\u305f\u3081\u3001\u96c6\u4e2d\u7ba1\u7406\u304c\u5fc5\u8981\u3068\u306a\u308b\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002  "),(0,l.kt)("p",null,"\u96c6\u4e2d\u7ba1\u7406\u3059\u308b\u3053\u3068\u3067\u30cf\u30fc\u30c9\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u306e\u9632\u6b62\u3084\u540c\u4e00\u6587\u8a00\u306e\u96c6\u7d04\u3001\u6587\u4f53\u3084\u4f53\u88c1\u306e\u7d71\u4e00\u306a\u3069\u304c\u7c21\u5358\u306b\u306a\u308a\u3001\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6027\u304c\u9ad8\u307e\u308a\u307e\u3059\u3002  "),(0,l.kt)("p",null,"\u307e\u305f\u3001\u30b5\u30fc\u30d0\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u7ba1\u7406\u3057\u3066\u304a\u304d\u3001\u30a2\u30d7\u30ea\u3067\u30ed\u30fc\u30c9\u3057\u3066\u8868\u793a\u3059\u308b\u3088\u3046\u306a\u65b9\u5f0f\u3067\u3042\u308c\u3070\u6587\u8a00\u306e\u5909\u66f4\u306b\u3088\u308b\u30a2\u30d7\u30ea\u306e\u66f4\u65b0\u304c\u4e0d\u8981\u3068\u306a\u308a\u307e\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u7ba1\u7406\u304c\u5fc5\u8981\u3068\u306a\u308b\u4ed6\u306e\u7406\u7531\u306b\u3001\u591a\u8a00\u8a9e\u5bfe\u5fdc\u3082\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u305f\u3060\u3057\u3001\u4e0a\u3067\u3042\u3052\u305f\u7406\u7531\u3088\u308a\u3082\u3001\u7ba1\u7406\u306e\u52b9\u679c\u304c\u4f4e\u3044\u5c0f\u898f\u6a21\u958b\u767a\u306e\u5834\u5408\u3084\u77ed\u671f\u9593\u3067\u306e\u958b\u767a\u306e\u901f\u5ea6\u3092\u6c42\u3081\u3089\u308c\u308b\u5834\u5408\u306f\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406\u3092\u3057\u306a\u3044\u3068\u3044\u3046\u9078\u629e\u3082\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u8b70\u8ad6"},"\u8b70\u8ad6"),(0,l.kt)("h3",{id:"\u306a\u305c\u7ba1\u7406\u304c\u5fc5\u8981\u306b\u306a\u308b\u306e\u304b"},"\u306a\u305c\u7ba1\u7406\u304c\u5fc5\u8981\u306b\u306a\u308b\u306e\u304b"),(0,l.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u3001\u30e6\u30fc\u30b6\u306e\u76ee\u306b\u89e6\u308c\u3084\u3059\u304fUI/UX\u306e\u89b3\u70b9\u304b\u3089\u3082\u5909\u308f\u308a\u3084\u3059\u3044\u3082\u306e\u3067\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u30b3\u30fc\u30c9\u306e\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6027\u3084\u6587\u8a00\u306e\u4e00\u610f\u6027\u304b\u3089\u3001\u96c6\u4e2d\u7ba1\u7406\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u30e1\u30c3\u30bb\u30fc\u30b8\u4e00\u89a7\u306f\u3001UI/UX\u8cac\u4efb\u8005\u3068\u5408\u610f\u3057\u3084\u3059\u3044\u3088\u3046\u62bd\u51fa\u3067\u304d\u308b\u3068\u306a\u304a\u826f\u3044\u3067\u3057\u3087\u3046\u3002  "),(0,l.kt)("h4",{id:"\u7ba1\u7406\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5019\u88dc"},"\u7ba1\u7406\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5019\u88dc"),(0,l.kt)("p",null,"\u7ba1\u7406\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5019\u88dc\u306b\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u5019\u88dc"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u753b\u9762\u306e\u30e9\u30d9\u30eb"),(0,l.kt)("td",{parentName:"tr",align:"left"},"UI\u90e8\u54c1\uff08\u30ed\u30b0\u30a4\u30f3\u753b\u9762\uff09\u306e\u30e9\u30d9\u30eb\uff08\u30a2\u30ab\u30a6\u30f3\u30c8\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\uff09\u306a\u3069")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u753b\u9762\u3067\u8868\u793a\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u78ba\u8a8d\u30c0\u30a4\u30a2\u30ed\u30b0\u3001\u64cd\u4f5c\u30ac\u30a4\u30c0\u30f3\u30b9\u3001\u30c8\u30fc\u30b9\u30c8\u3067\u306e\u901a\u77e5\u306a\u3069")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"OS\u3067\u51fa\u3059\u8a31\u53ef\u30c0\u30a4\u30a2\u30ed\u30b0\u306e\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30ab\u30e1\u30e9\u3084\u30de\u30a4\u30af\u306e\u8a31\u53ef\u306a\u3069")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u767a\u751f\u6642\u306b\u8868\u793a\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u30c0\u30a4\u30a2\u30ed\u30b0\u3001\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\u306a\u3069")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\uff08\u30ea\u30e2\u30fc\u30c8\uff09"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30b5\u30fc\u30d0\u304b\u3089\u306e\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u30e1\u30c3\u30bb\u30fc\u30b8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\uff08\u30ed\u30fc\u30ab\u30eb\uff09"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u304b\u3089\u306e\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u30e1\u30c3\u30bb\u30fc\u30b8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"API\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u5185\u306e\u6587\u8a00"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u542b\u307e\u308c\u308b\u6587\u8a00\uff08\u4f8b\u3048\u3070\u3001\u30b5\u30fc\u30d0\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u4e2d\u306e\u8868\u793a\u30e1\u30c3\u30bb\u30fc\u30b8\u3001\u6b8b\u91d1\u4e0d\u8db3\u30a8\u30e9\u30fc\u306e\u91d1\u984d\u8868\u793a\u306a\u3069\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u306b\u51fa\u3059\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u5185\u306e\u30ed\u30b0\u30e1\u30c3\u30bb\u30fc\u30b8")))),(0,l.kt)("h4",{id:"\u3053\u306e\u65b9\u5f0f\u3067\u7ba1\u7406\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8"},"\u3053\u306e\u65b9\u5f0f\u3067\u7ba1\u7406\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u5019\u88dc"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7ba1\u7406\u3059\u308b\u30fb\u3057\u306a\u3044"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u753b\u9762\u306e\u30e9\u30d9\u30eb"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u3059\u308b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u753b\u9762\u3067\u8868\u793a\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u3059\u308b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"OS\u3067\u51fa\u3059\u8a31\u53ef\u30c0\u30a4\u30a2\u30ed\u30b0\u306e\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u3057\u306a\u3044\uff08\u203b1\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u3059\u308b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\uff08\u30ea\u30e2\u30fc\u30c8\uff09"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u3057\u306a\u3044\uff08\u203b1\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\uff08\u30ed\u30fc\u30ab\u30eb\uff09"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u3059\u308b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"API\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u5185\u306e\u6587\u8a00"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30b1\u30fc\u30b9\u30d0\u30a4\u30b1\u30fc\u30b9\uff08\u203b2\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u306b\u51fa\u3059\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u3057\u306a\u3044\uff08\u203b3\uff09")))),(0,l.kt)("p",null,"\uff08\u203b1\uff09\u30ab\u30e1\u30e9\u3084\u30de\u30a4\u30af\u8a31\u53ef\u306a\u3069\u306eOS\u5074\u306e\u7d44\u307f\u8fbc\u307f\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u3001\u30b5\u30fc\u30d0\u304b\u3089\u306e\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u8868\u793a\u3059\u308b\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u306fJavaScript\u5916\u3067\u8a2d\u5b9a\u3055\u308c\u308b\u305f\u3081\u542b\u3081\u306a\u3044\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\uff08\u203b2\uff09API\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u542b\u307e\u308c\u3066\u3044\u308b\u6587\u8a00\u306f\u3001\u4f8b\u3048\u3070\u3001\u30b5\u30fc\u30d0\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u306a\u3069\u306f\u305d\u306e\u307e\u307e\u8868\u793a\u3059\u308c\u3070\u826f\u3044\u3002\n\u4e00\u65b9\u3001\u6b8b\u91d1\u4e0d\u8db3\u3067\u91d1\u984d\u304c\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3057\u304b\u5206\u304b\u3089\u306a\u3044\u3088\u3046\u306a\u5024\u3092\u8868\u793a\u3059\u308b\u3068\u304d\u306f\u3001\n\u30ec\u30b9\u30dd\u30f3\u30b9\u5185\u306e\u91d1\u984d\u3092\u52a0\u5de5\u3059\u308b\u5834\u5408\u3082\u3042\u308c\u3070\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u305d\u306e\u307e\u307e\u8868\u793a\u3059\u308b\u5834\u5408\u3082\u3042\u308b\u3068\u8003\u3048\u30b1\u30fc\u30b9\u30d0\u30a4\u30b1\u30fc\u30b9\u3068\u3057\u305f\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\uff08\u203b3\uff09\u30ed\u30b0\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u901a\u5e38\u30e6\u30fc\u30b6\u306e\u76ee\u306b\u89e6\u308c\u306a\u3044\u3053\u3068\u3068\u6587\u8a00\u304c\u983b\u7e41\u306b\u5909\u308f\u308b\u3053\u3068\u304b\u3089\u3001\u958b\u767a\u52b9\u7387\u3092\u8003\u3048\u3066\u7ba1\u7406\u5bfe\u8c61\u5916\u3068\u3057\u3066\u3044\u308b\u3002  "),(0,l.kt)("h3",{id:"\u958b\u767a\u306e\u3057\u3084\u3059\u3055"},"\u958b\u767a\u306e\u3057\u3084\u3059\u3055"),(0,l.kt)("p",null,"\u30ad\u30fc\u3092\u5143\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u53d6\u5f97\u3057\u307e\u3059\u304c\u3001\u65e5\u672c\u4eba\u958b\u767a\u8005\u304c\u591a\u304f\u65e5\u672c\u8a9e\u3057\u304b\u4f7f\u308f\u306a\u3044\u5834\u5408\u306f\u3001\n\u82f1\u8a9e\u3067\u306f\u306a\u304f\u65e5\u672c\u8a9e\u3092\u30ad\u30fc\u3068\u3057\u305f\u65b9\u304c\u753b\u9762\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3084\u30a8\u30e9\u30fc\u306a\u3069\u3067\u53ef\u8aad\u6027\u304c\u9ad8\u307e\u308a\u307e\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4ed6\u306e\u8981\u7d20\u3068\u3057\u3066\u3001IDE\u3067\u30ad\u30fc\u304c\u88dc\u5b8c\u3055\u308c\u308b\u3068\u826f\u3044\u3067\u3057\u3087\u3046\u3002"),(0,l.kt)("h3",{id:"\u56fd\u969b\u5316\u5bfe\u5fdc\u3084\u591a\u8a00\u8a9e\u5bfe\u5fdc"},"\u56fd\u969b\u5316\u5bfe\u5fdc\u3084\u591a\u8a00\u8a9e\u5bfe\u5fdc"),(0,l.kt)("p",null,"OSS\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3001\u56fd\u969b\u5316\u5bfe\u5fdc\u3067\u304d\u308b ",(0,l.kt)("a",{parentName:"p",href:"https://react.i18next.com/"},"react-i18next")," \u306e\u3088\u3046\u306a\u30e9\u30a4\u30d6\u30e9\u30ea\u3082\u5b58\u5728\u3057\u307e\u3059\u304c\n\u81ea\u4f5c\u3059\u308b\u5834\u5408\u306e\u6a5f\u80fd\u306e\u5bb9\u6613\u3055\u3068\u5916\u90e8\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u7ba1\u7406\u306e\u7169\u96d1\u3055\u3092\u8003\u616e\u3057\u3066\u63a1\u7528\u306f\u3057\u3066\u3044\u307e\u305b\u3093\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u305f\u3060\u3057\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306b\u5bfe\u3059\u308b\u5b9f\u88c5\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u3067\u30a2\u30c0\u30d7\u30bf\u30fc\u7684\u306b\u5229\u7528\u3059\u308b\u3053\u3068\u306f\u53ef\u80fd\u3068\u8003\u3048\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u6c7a\u5b9a"},"\u6c7a\u5b9a"),(0,l.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u3001\u5229\u7528\u8005\u306e\u76ee\u306b\u89e6\u308c\u308b\u3082\u306e\u306f\u53ef\u80fd\u306a\u9650\u308a\u7ba1\u7406\u4e0b\u306b\u542b\u307f\u3001\u96c6\u7d04\u5316\u3092\u884c\u3044\u307e\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u5916\u90e8\u306e\u591a\u8a00\u8a9e\u5316\u306eOSS\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u4f7f\u7528\u305b\u305a\u958b\u767a\u3059\u308b\u3082\u306e\u3068\u3057\u307e\u3059\u3002\u3057\u304b\u3057\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u5207\u308a\u66ff\u3048\u3067\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u8003\u616e\u3057\u307e\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u30b5\u30fc\u30d0\u304b\u3089\u30e1\u30c3\u30bb\u30fc\u30b8\u4e00\u89a7\u3092\u53d6\u5f97\u3059\u308b\u65b9\u5f0f\u306f\u63a1\u7528\u305b\u305a\u3001\u7528\u9014\u3068\u3057\u3066\u4e00\u756a\u591a\u3044\u60f3\u5b9a\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u5185\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u4e00\u89a7\u3092\u7ba1\u7406\u3059\u308b\u65b9\u5f0f\u3067\u5b9f\u88c5\u3059\u308b\u3053\u3068\u3068\u3057\u307e\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001IDE\u306e\u88dc\u5b8c\u304c\u52b9\u304f\u3088\u3046\u306a\u30ad\u30fc\u3092\u5b9a\u7fa9\u3057\u3066\u304a\u304d\u958b\u767a\u52b9\u7387\u3092\u826f\u304f\u3057\u307e\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u65e5\u672c\u8a9e\u306e\u307f\u3067\u306e\u958b\u767a\u3067\u306f\u3001\u65e5\u672c\u8a9e\u3092\u30ad\u30fc\u306b\u3059\u308b\u3053\u3068\u3067\u53ef\u8aad\u6027\u304c\u9ad8\u307e\u308a\u307e\u3059\u3002"))}k.isMDXComponent=!0}}]);