"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[9221],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7567:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u53d6\u308a\u6271\u3044\u306b\u95a2\u3059\u308b\u65b9\u91dd"},c=void 0,p={unversionedId:"react-native/santoku/decisions/adr-011-cache-management",id:"react-native/santoku/decisions/adr-011-cache-management",title:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u53d6\u308a\u6271\u3044\u306b\u95a2\u3059\u308b\u65b9\u91dd",description:"Status: Proposed",source:"@site/docs/react-native/santoku/decisions/adr-011-cache-management.mdx",sourceDirName:"react-native/santoku/decisions",slug:"/react-native/santoku/decisions/adr-011-cache-management",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-011-cache-management",tags:[],version:"current",lastUpdatedAt:1642653777,formattedLastUpdatedAt:"2022/1/20",frontMatter:{title:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u53d6\u308a\u6271\u3044\u306b\u95a2\u3059\u308b\u65b9\u91dd"},sidebar:"santoku",previous:{title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u5185\u5bb9\u306b\u95a2\u3059\u308b\u65b9\u91dd",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-010-push-notification-contents"}},u=[{value:"\u8981\u7d04",id:"\u8981\u7d04",children:[],level:2},{value:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",children:[],level:2},{value:"\u8b70\u8ad6",id:"\u8b70\u8ad6",children:[{value:"\u5404OS\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea",id:"\u5404os\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea",children:[],level:3},{value:"\u6ce8\u610f\u3059\u3079\u304d\u30ad\u30e3\u30c3\u30b7\u30e5",id:"\u6ce8\u610f\u3059\u3079\u304d\u30ad\u30e3\u30c3\u30b7\u30e5",children:[{value:"HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u30fb\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u30ad\u30e3\u30c3\u30b7\u30e5",id:"http\u30ea\u30af\u30a8\u30b9\u30c8\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u30ad\u30e3\u30c3\u30b7\u30e5",children:[],level:4},{value:"\u7aef\u672b\u5185\u304b\u3089\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3059\u308b\u969b\u306e\u30ad\u30e3\u30c3\u30b7\u30e5",id:"\u7aef\u672b\u5185\u304b\u3089\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3059\u308b\u969b\u306e\u30ad\u30e3\u30c3\u30b7\u30e5",children:[],level:4},{value:"\u5916\u90e8URL\u304b\u3089\u53d6\u5f97\u3057\u305f\u8868\u793a\u7528\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u306e\u30ad\u30e3\u30c3\u30b7\u30e5",id:"\u5916\u90e8url\u304b\u3089\u53d6\u5f97\u3057\u305f\u8868\u793a\u7528\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u306e\u30ad\u30e3\u30c3\u30b7\u30e5",children:[],level:4}],level:3},{value:"\u30c6\u30b9\u30c8\u6642\u306b\u304a\u3051\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306e\u78ba\u8a8d",id:"\u30c6\u30b9\u30c8\u6642\u306b\u304a\u3051\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306e\u78ba\u8a8d",children:[],level:3}],level:2},{value:"\u6c7a\u5b9a",id:"\u6c7a\u5b9a",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Status: Proposed"),(0,l.kt)("h2",{id:"\u8981\u7d04"},"\u8981\u7d04"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5229\u7528\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u3088\u3063\u3066\u306f\u3001\u53d6\u308a\u6271\u3046\u30c7\u30fc\u30bf\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u3068\u3057\u3066\u4fdd\u5b58\u3055\u308c\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059"),(0,l.kt)("li",{parentName:"ul"},"\u6a5f\u5bc6\u60c5\u5831\u3092\u5916\u90e8\u30e9\u30a4\u30d6\u30e9\u30ea\u5185\u3067\u53d6\u308a\u6271\u3046\u5834\u5408\u306b\u306f\u3001\u305d\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3069\u306e\u3088\u3046\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u304c\u4fdd\u5b58\u3055\u308c\u308b\u304b\u3092\u78ba\u8a8d\u3057\u307e\u3059"),(0,l.kt)("li",{parentName:"ul"},"\u30c6\u30b9\u30c8\u6642\u306b\u306f\u5185\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b\u751f\u6210\u3055\u308c\u3066\u3044\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u3092\u78ba\u8a8d\u3057\u3001\u4e07\u304c\u4e00\u306e\u6d41\u51fa\u3092\u8a31\u5bb9\u3067\u304d\u306a\u3044\u6a5f\u5bc6\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u306a\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059"),(0,l.kt)("li",{parentName:"ul"},"\u30c6\u30b9\u30c8\u6642\u306b\u306f\u5916\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u304c\u4fdd\u5b58\u3055\u308c\u3066\u3044\u306a\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059")),(0,l.kt)("h2",{id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"},"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"),(0,l.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u306f\u3001\u4ee5\u4e0b\u306b\u793a\u3059\u3088\u3046\u306a\u30c7\u30fc\u30bf\u304c\u5185\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30a2\u30d7\u30ea\u5c02\u7528\u9818\u57df\u3078\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u3057\u3066\u4fdd\u5b58\u3055\u308c\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5916\u90e8\u3078\u306eHTTP\u30ea\u30af\u30a8\u30b9\u30c8\u3084\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u753b\u50cf\u9078\u629e\u306e\u969b\u306e\u4e00\u6642\u7684\u306a\u753b\u50cf\u30c7\u30fc\u30bf")),(0,l.kt)("p",null,"\u5185\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30a2\u30d7\u30ea\u5c02\u7528\u306e\u9818\u57df\u306b\u7f6e\u304b\u308c\u305f\u30c7\u30fc\u30bf\u306f\u3001\u57fa\u672c\u7684\u306b\u306f\u4ed6\u306e\u30a2\u30d7\u30ea\u304b\u3089\u8aad\u307f\u53d6\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\n\u3057\u304b\u3057\u7aef\u672b\u306eroot\u6a29\u9650\u3092\u596a\u53d6\u3055\u308c\u3066\u3044\u308b\u3088\u3046\u306a\u30b1\u30fc\u30b9\u3067\u306f\u3001\u60aa\u610f\u306e\u3042\u308b\u653b\u6483\u8005\u306b\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u53d6\u3089\u308c\u308b\u53ef\u80fd\u6027\u304c\u6b8b\u308a\u307e\u3059\u3002\n\u6a5f\u5bc6\u6027\u306e\u9ad8\u3044\u60c5\u5831\u3092\u6271\u3046\u30a2\u30d7\u30ea\u3067\u306f\u3001\u610f\u56f3\u305b\u305a\u6a5f\u5bc6\u60c5\u5831\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u3057\u3066\u4fdd\u5b58\u3055\u308c\u3066\u3057\u307e\u308f\u306a\u3044\u3088\u3046\u306b\u6ce8\u610f\u3059\u308b\u3053\u3068\u304c\u671b\u307e\u3057\u3044\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u307e\u305f\u3001\u4e00\u90e8\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u306f\u5916\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4fdd\u5b58\u3059\u308b\u3082\u306e\u3082\u3042\u308a\u307e\u3059\u3002\n\u5916\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306f\u4ed6\u306e\u30a2\u30d7\u30ea\u304b\u3089\u3082\u53c2\u7167\u30fb\u66f4\u65b0\u304c\u53ef\u80fd\u306a\u9818\u57df\u3067\u3042\u308a\u3001\u79d8\u533f\u3059\u3079\u304d\u60c5\u5831\u3092\u4fdd\u5b58\u3057\u3066\u306f\u3044\u3051\u307e\u305b\u3093\u3002\n\u5916\u90e8\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u63a1\u7528\u3059\u308b\u969b\u306b\u306f\u3001\u5916\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u884c\u3063\u3066\u3044\u306a\u3044\u304b\u6ce8\u610f\u6df1\u304f\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001React Native\u3092\u7528\u3044\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u958b\u767a\u6642\u306b\u6c17\u3092\u4ed8\u3051\u3066\u304a\u304f\u3079\u304d\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u3064\u3044\u3066\u6574\u7406\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u8b70\u8ad6"},"\u8b70\u8ad6"),(0,l.kt)("h3",{id:"\u5404os\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea"},"\u5404OS\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea"),(0,l.kt)("p",null,"Android\u306e\u5834\u5408\u3001\u5185\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u3068\u5916\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u53cc\u65b9\u306b\u3001\u30a2\u30d7\u30ea\u6bce\u306b\u6c38\u7d9a\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3059\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u5177\u4f53\u7684\u306b\u306f\u3001\u5185\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u5834\u5408\u306f",(0,l.kt)("inlineCode",{parentName:"p"},"/data/data/<\u30a2\u30d7\u30ea\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u540d>/cache/"),"\u306e\u3088\u3046\u306aPath\u3068\u306a\u308a\u307e\u3059\u3002\n\u307e\u305f\u5916\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u5834\u5408\u306f",(0,l.kt)("inlineCode",{parentName:"p"},"<\u5916\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306ePath>/Android/data/<\u30a2\u30d7\u30ea\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u540d>/cache/"),"\u306e\u3088\u3046\u306aPath\u3068\u306a\u308a\u307e\u3059\u3002\n\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"https://developer.android.com/training/data-storage"},"\u30c7\u30fc\u30bf\u30b9\u30c8\u30ec\u30fc\u30b8\u3068\u30d5\u30a1\u30a4\u30eb\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u6982\u8981"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,"iOS\u306e\u5834\u5408\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u306e\u4fdd\u5b58\u5834\u6240\u306f\u5185\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u5185\u306b\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u5177\u4f53\u7684\u306b\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"<Application_Home>/Library/Caches/[Bundle Identifier]/"),"\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3068\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u307e\u305fiOS\u306e\u5834\u5408\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3068\u306f\u5225\u306btmp\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3082\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306f\u30a2\u30d7\u30ea\u306e\u8d77\u52d5\u4e2d\u306b\u6d88\u3048\u3066\u3082\u518d\u751f\u6210\u304c\u53ef\u80fd\u306a\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3059\u308b\u5834\u6240\u3067\u3001\u30a2\u30d7\u30ea\u306e\u8d77\u52d5\u4e2d\u3067\u3082OS\u304c\u30d5\u30a1\u30a4\u30eb\u3092\u524a\u9664\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\ntmp\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306f\u30a2\u30d7\u30ea\u306e\u8d77\u52d5\u4e2d\u306b\u5229\u7528\u3059\u308b\u4e00\u6642\u7684\u306a\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3059\u308b\u5834\u6240\u3067\u3001\u30a2\u30d7\u30ea\u306e\u8d77\u52d5\u4e2d\u306fOS\u306b\u3088\u3063\u3066\u30d5\u30a1\u30a4\u30eb\u304c\u524a\u9664\u3055\u308c\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002\n\u3044\u305a\u308c\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u7f6e\u304b\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u3082\u3001iCloud\u3078\u306e\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u5bfe\u8c61\u306b\u306f\u306a\u308a\u307e\u305b\u3093\u3002\n\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"https://developer.apple.com/icloud/documentation/data-storage/"},"iOS\u30c7\u30fc\u30bf\u30b9\u30c8\u30ec\u30fc\u30b8\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,"\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30c7\u30fc\u30bf\u306f\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u968f\u6642OS\u306b\u3088\u3063\u3066\u81ea\u52d5\u7684\u306b\u524a\u9664\u3055\u308c\u307e\u3059\u3002\n\u305f\u3060\u3057\u3001\u4e0d\u8981\u306b\u306a\u3063\u305f\u3053\u3068\u304c\u660e\u78ba\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u30a2\u30d7\u30ea\u5074\u3067\u968f\u6642\u524a\u9664\u3059\u308b\u3053\u3068\u304c\u671b\u307e\u3057\u3044\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u5404OS\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306f\u3001React Native\u3092\u7528\u3044\u305f\u30a2\u30d7\u30ea\u306e\u5834\u5408\u3001\n\u4f8b\u3048\u3070",(0,l.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/filesystem/"},"expo-file-system"),"\u306a\u3069\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u901a\u3058\u3066\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210\u30fb\u66f4\u65b0\u30fb\u524a\u9664\u306a\u3069\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u6ce8\u610f\u3059\u3079\u304d\u30ad\u30e3\u30c3\u30b7\u30e5"},"\u6ce8\u610f\u3059\u3079\u304d\u30ad\u30e3\u30c3\u30b7\u30e5"),(0,l.kt)("h4",{id:"http\u30ea\u30af\u30a8\u30b9\u30c8\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u30ad\u30e3\u30c3\u30b7\u30e5"},"HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u30fb\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u30ad\u30e3\u30c3\u30b7\u30e5"),(0,l.kt)("p",null,"\u4e00\u822c\u7684\u306a\u30a2\u30d7\u30ea\u3067\u306f\u3001\u5916\u90e8\u306e\u30b5\u30fc\u30d0\u306b\u5bfe\u3057\u3066\u69d8\u3005\u306aHTTP\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3057\u3001\u69d8\u3005\u306a\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u53d7\u3051\u53d6\u3063\u3066\u3044\u307e\u3059\u3002\n\u3053\u308c\u3089\u306eHTTP\u30ea\u30af\u30a8\u30b9\u30c8\u30fb\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u5185\u5bb9\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b\u4fdd\u5b58\u3055\u308c\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"Android\u306e\u5834\u5408\u3001React Native\u30a2\u30d7\u30ea\u3067fetch\u3084axios\u306a\u3069\u3092\u7528\u3044\u3066HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b\u3068\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u901a\u4fe1\u5185\u5bb9\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306ehttp-cache\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b\u3001\u672b\u5c3e\u306b'.0'\u3084'.1'\u304c\u3064\u3044\u305f\u30e9\u30f3\u30c0\u30e0\u306aID\u306e\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u4fdd\u5b58\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u30d5\u30a1\u30a4\u30eb\u5185\u306b\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u5f62\u5f0f\u3067\u30ea\u30af\u30a8\u30b9\u30c8URL\u3084\u30ec\u30b9\u30dd\u30f3\u30b9\u30d8\u30c3\u30c0\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u30dc\u30c7\u30a3\u306a\u3069\u304c\u8a18\u9332\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"https://httpbin.org/get\nGET\n0\nHTTP/1.1 200\n8\ndate: Fri, 14 Jan 2022 08:57:31 GMT\ncontent-type: application/json\ncontent-length: 266\nserver: (\u5b9b\u5148\u30b5\u30fc\u30d0\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2)\naccess-control-allow-origin: *\naccess-control-allow-credentials: true\nOkHttp-Sent-Millis: 1642150651488\nOkHttp-Received-Millis: 1642150651667\n\n(\u4e2d\u7565\uff1aTLS\u901a\u4fe1\u306b\u95a2\u3059\u308b\u30ed\u30b0)\nTLSv1.2\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "args": {},\n  "headers": {\n    "Accept-Encoding": "gzip",\n    "Host": "httpbin.org",\n    "User-Agent": "okhttp/3.12.12",\n    "X-Amzn-Trace-Id": "(TraceId)"\n  },\n  "origin": "(IP Address)",\n  "url": "https://httpbin.org/get"\n}\n')),(0,l.kt)("p",null,"iOS\u306e\u5834\u5408\u3082\u540c\u69d8\u306b\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u901a\u4fe1\u5185\u5bb9\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306bCache.db, Cache.db-shm, Cache.db-wal\u306e\u3088\u3046\u306aSQLite3 Database\u7528\u306e\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\n\u3053\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u5185\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u5f62\u5f0f\u3067\u30ea\u30af\u30a8\u30b9\u30c8URL\u3084\u30ec\u30b9\u30dd\u30f3\u30b9\u30d8\u30c3\u30c0\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u30dc\u30c7\u30a3\u306a\u3069\u304c\u8a18\u9332\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'sqlite> select * from cfurl_cache_response;\n1|0|-2528053911948506688|0|https://httpbin.org/get|2022-01-14 08:05:34|\nsqlite> select * from cfurl_cache_receiver_data;\n1|0|{\n  "args": {},\n  "headers": {\n    "Accept": "*/*"\n    "Accept-Encoding": "gzip, deflate, br",\n    "Accept-Language": "en-US,en;q=0.9",\n    "Host": "httpbin.org",\n    "User-Agent": "(\u30a2\u30d7\u30ea\u306eUserAgent)",\n    "X-Amzn-Trace-Id": "(TraceId)",\n  },\n  "origin": "(IP Address)",\n  "url": "https://httpbin.org/get"\n}\n')),(0,l.kt)("p",null,"Android\u3001iOS\u306e\u3044\u305a\u308c\u306e\u5834\u5408\u3082\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u30ea\u30af\u30a8\u30b9\u30c8URL\u306e\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u3084\u30ec\u30b9\u30dd\u30f3\u30b9\u30d8\u30c3\u30c0\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u30dc\u30c7\u30a3\u306a\u3069\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u3057\u3066\u8a18\u9332\u3055\u308c\u307e\u3059\u3002\n\u30ea\u30af\u30a8\u30b9\u30c8URL\u306e\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u3084\u30ec\u30b9\u30dd\u30f3\u30b9\u30d8\u30c3\u30c0\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u30dc\u30c7\u30a3\u306a\u3069\u306b\u79d8\u533f\u3059\u3079\u304d\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u8a18\u9332\u3055\u308c\u3066\u3057\u307e\u3046\u306e\u306f\u3042\u307e\u308a\u671b\u307e\u3057\u3044\u72b6\u614b\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,"Android\u3068iOS\u3069\u3061\u3089\u306e\u5834\u5408\u3082\u3001React Native\u306efetch\u3084axios\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u8a2d\u5b9a\u306e\u7bc4\u56f2\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210\u306f\u7121\u52b9\u5316\u3067\u304d\u306a\u3055\u305d\u3046\u3067\u3059\u3002\n\u4eca\u56de\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u3084\u30ec\u30b9\u30dd\u30f3\u30b9\u30d8\u30c3\u30c0\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u30dc\u30c7\u30a3\u306b\u79d8\u533f\u6027\u306e\u9ad8\u3044\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u306a\u3044\u3053\u3068\u304b\u3089\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u306e\u307e\u307e\u3068\u3057\u307e\u3059\u3002"),(0,l.kt)("h4",{id:"\u7aef\u672b\u5185\u304b\u3089\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3059\u308b\u969b\u306e\u30ad\u30e3\u30c3\u30b7\u30e5"},"\u7aef\u672b\u5185\u304b\u3089\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3059\u308b\u969b\u306e\u30ad\u30e3\u30c3\u30b7\u30e5"),(0,l.kt)("p",null,"\u7aef\u672b\u5185\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u3066\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3088\u3046\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u304a\u3044\u3066\u3001\u7aef\u672b\u5185\u304b\u3089\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3059\u308bUI\u3092\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u7528\u3044\u3066\u5b9f\u73fe\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\n\u3053\u3046\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u9078\u629e\u7cfb\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u306f\u3001\u9078\u629e\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u304c\u4e00\u6642\u7684\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u9818\u57df\u306b\u4fdd\u5b58\u3055\u308c\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4f8b\u3048\u3070",(0,l.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/v44.0.0/sdk/document-picker/"},"expo-document-picker"),"\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u5834\u5408\u3001\ncopyToCacheDirectory\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067true\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u9078\u629e\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u30b3\u30d4\u30fc\u3055\u308c\u307e\u3059\u3002\n\u6a5f\u5bc6\u60c5\u5831\u3092\u542b\u3080\u30d5\u30a1\u30a4\u30eb\u3092\u6271\u3046\u5834\u5408\u306f\u3001\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306a\u3069\u306e\u51e6\u7406\u304c\u5b8c\u4e86\u6b21\u7b2c\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30d5\u30a1\u30a4\u30eb\u3092\u660e\u793a\u7684\u306b\u524a\u9664\u3057\u3066\u304a\u304f\u3053\u3068\u304c\u671b\u307e\u3057\u3044\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u307e\u305f\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u3066\u30ea\u30b5\u30a4\u30ba\u3092\u884c\u3046\u3088\u3046\u306a\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3082\u3001\u9078\u629e\u3057\u305f\u753b\u50cf\u3084\u305d\u308c\u3092\u52a0\u5de5\u3057\u305f\u753b\u50cf\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u4fdd\u5b58\u3055\u308c\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\n\u3053\u3061\u3089\u3082\u540c\u69d8\u306b\u3001\u51e6\u7406\u304c\u5b8c\u4e86\u6b21\u7b2c\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30d5\u30a1\u30a4\u30eb\u3092\u660e\u793a\u7684\u306b\u524a\u9664\u3057\u3066\u304a\u304f\u3053\u3068\u304c\u671b\u307e\u3057\u3044\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u4eca\u56de\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u79d8\u533f\u6027\u306e\u9ad8\u3044\u30d5\u30a1\u30a4\u30eb\u3092\u7aef\u672b\u5185\u304b\u3089\u9078\u629e\u3059\u308b\u3053\u3068\u306f\u306a\u3044\u305f\u3081\u3001\u7279\u306b\u5bfe\u5fdc\u306f\u5b9f\u65bd\u3057\u307e\u305b\u3093\u3002\n\u305f\u3060\u3057\u3001\u5229\u7528\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u3088\u3063\u3066\u5916\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u5185\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u4fdd\u5b58\u3055\u308c\u3066\u3044\u306a\u3044\u3053\u3068\u3092\u30c6\u30b9\u30c8\u6642\u306b\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,l.kt)("h4",{id:"\u5916\u90e8url\u304b\u3089\u53d6\u5f97\u3057\u305f\u8868\u793a\u7528\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u306e\u30ad\u30e3\u30c3\u30b7\u30e5"},"\u5916\u90e8URL\u304b\u3089\u53d6\u5f97\u3057\u305f\u8868\u793a\u7528\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u306e\u30ad\u30e3\u30c3\u30b7\u30e5"),(0,l.kt)("p",null,"React Native\u306eImage\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306a\u3069\u3001\u753b\u50cf\u8868\u793a\u7528\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u591a\u304f\u3067\u306f\u3001\u5916\u90e8URL\u3092\u6307\u5b9a\u3057\u3066\u753b\u50cf\u3092\u8868\u793a\u3067\u304d\u307e\u3059\u3002\n\u8868\u793a\u6642\u306b\u5916\u90e8URL\u304b\u3089\u53d6\u5f97\u3055\u308c\u305f\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u306f\u7aef\u672b\u5185\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u9818\u57df\u306b\u4fdd\u5b58\u3055\u308c\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"React Native\u306eImage\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u7528\u3044\u3066\u5916\u90e8URL\u304b\u3089\u53d6\u5f97\u3057\u305f\u753b\u50cf\u3092\u8868\u793a\u3057\u305f\u5834\u5408\u3001Android\u3068iOS\u306e\u3044\u305a\u308c\u3082\u753b\u50cf\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u4fdd\u5b58\u3055\u308c\u3066\u3044\u307e\u3057\u305f\u3002\nAndroid\u306e\u5834\u5408\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306eimage_cache\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b\u8907\u6570\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u5206\u304b\u308c\u3066\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\n\u307e\u305fiOS\u306e\u5834\u5408\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306efsCachedData\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u4e0a\u306b\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u3067\u3042\u308c\u3070\u7279\u306b\u554f\u984c\u306f\u306a\u3044\u3067\u3059\u304c\u3001\n\u6a5f\u5bc6\u60c5\u5831\u3092\u542b\u3080\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u3092\u5916\u90e8\u304b\u3089\u53d6\u5f97\u3057\u3066\u8868\u793a\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u53d6\u308a\u6271\u3044\u306b\u3082\u6ce8\u610f\u3092\u6255\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4eca\u56de\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u79d8\u533f\u6027\u306e\u9ad8\u3044\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u306f\u306a\u3044\u305f\u3081\u3001\u7279\u306b\u5bfe\u5fdc\u306f\u5b9f\u65bd\u3057\u307e\u305b\u3093\u3002\n\u305f\u3060\u3057\u3001\u5229\u7528\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u3088\u3063\u3066\u5916\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u5185\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u4fdd\u5b58\u3055\u308c\u3066\u3044\u306a\u3044\u3053\u3068\u3092\u30c6\u30b9\u30c8\u6642\u306b\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u30c6\u30b9\u30c8\u6642\u306b\u304a\u3051\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306e\u78ba\u8a8d"},"\u30c6\u30b9\u30c8\u6642\u306b\u304a\u3051\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306e\u78ba\u8a8d"),(0,l.kt)("p",null,"\u5229\u7528\u3057\u3066\u3044\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u304c\u610f\u56f3\u305b\u305a\u5916\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u66f8\u304d\u8fbc\u307f\u3092\u3057\u3066\u3044\u306a\u3044\u304b\u3001\u5168\u3066\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u4ed5\u69d8\u3092\u4e8b\u524d\u306b\u628a\u63e1\u3059\u308b\u306e\u306f\u73fe\u5b9f\u7684\u306b\u306f\u96e3\u3057\u3044\u3067\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u305d\u306e\u4ee3\u308f\u308a\u306b\u30c6\u30b9\u30c8\u6642\u306b\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u3069\u306e\u3088\u3046\u306a\u30c7\u30fc\u30bf\u304c\u751f\u6210\u3055\u308c\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u7279\u306b\u5916\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306f\u539f\u5247\u5229\u7528\u3059\u3079\u304d\u3067\u306a\u3044\u305f\u3081\u3001\u4f55\u304b\u30d5\u30a1\u30a4\u30eb\u304c\u4f5c\u6210\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u6ce8\u610f\u304c\u5fc5\u8981\u3067\u3059\u3002\n\u30d5\u30a1\u30a4\u30eb\u304c\u5b58\u5728\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u4f55\u304c\u8a18\u9332\u3055\u308c\u3066\u3044\u308b\u306e\u304b\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u6c7a\u5b9a"},"\u6c7a\u5b9a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6a5f\u5bc6\u60c5\u5831\u3092\u5916\u90e8\u30e9\u30a4\u30d6\u30e9\u30ea\u5185\u3067\u53d6\u308a\u6271\u3046\u5834\u5408\u306b\u306f\u3001\u305d\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3069\u306e\u3088\u3046\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u304c\u4fdd\u5b58\u3055\u308c\u308b\u304b\u3092\u78ba\u8a8d\u3057\u307e\u3059"),(0,l.kt)("li",{parentName:"ul"},"\u30c6\u30b9\u30c8\u6642\u306b\u306f\u5185\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b\u751f\u6210\u3055\u308c\u3066\u3044\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u3092\u78ba\u8a8d\u3057\u3001\u4e07\u304c\u4e00\u306e\u6d41\u51fa\u3092\u8a31\u5bb9\u3067\u304d\u306a\u3044\u6a5f\u5bc6\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u306a\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059"),(0,l.kt)("li",{parentName:"ul"},"\u30c6\u30b9\u30c8\u6642\u306b\u306f\u5916\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u304c\u4fdd\u5b58\u3055\u308c\u3066\u3044\u306a\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059")))}d.isMDXComponent=!0}}]);