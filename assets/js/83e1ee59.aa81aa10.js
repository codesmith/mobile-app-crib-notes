"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[5329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,m=s["".concat(o,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},90756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u5f37\u5236\u30a2\u30d7\u30ea\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8"},i=void 0,p={unversionedId:"react-native/santoku/decisions/adr-016-forced-app-updates",id:"react-native/santoku/decisions/adr-016-forced-app-updates",title:"\u5f37\u5236\u30a2\u30d7\u30ea\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8",description:"Status: Accepted",source:"@site/docs/react-native/santoku/decisions/adr-016-forced-app-updates.mdx",sourceDirName:"react-native/santoku/decisions",slug:"/react-native/santoku/decisions/adr-016-forced-app-updates",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-016-forced-app-updates",draft:!1,tags:[],version:"current",lastUpdatedAt:1684285361,formattedLastUpdatedAt:"2023\u5e745\u670817\u65e5",frontMatter:{title:"\u5f37\u5236\u30a2\u30d7\u30ea\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8"},sidebar:"santoku",previous:{title:"Android\u306e\u30d8\u30c3\u30c9\u30a2\u30c3\u30d7\u901a\u77e5",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-015-android-head-up-notification"}},o={},u=[{value:"\u8981\u7d04",id:"\u8981\u7d04",level:2},{value:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",level:2},{value:"\u8b70\u8ad6",id:"\u8b70\u8ad6",level:2},{value:"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u5f37\u5236\u3059\u308b\u8981\u4ef6",id:"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u5f37\u5236\u3059\u308b\u8981\u4ef6",level:3},{value:"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u306e\u78ba\u8a8d\u30bf\u30a4\u30df\u30f3\u30b0",id:"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u306e\u78ba\u8a8d\u30bf\u30a4\u30df\u30f3\u30b0",level:3},{value:"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u306e\u78ba\u8a8d\u65b9\u6cd5",id:"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u306e\u78ba\u8a8d\u65b9\u6cd5",level:3},{value:"\u6c7a\u5b9a",id:"\u6c7a\u5b9a",level:2}],c={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Status: Accepted"),(0,a.kt)("h2",{id:"\u8981\u7d04"},"\u8981\u7d04"),(0,a.kt)("p",null,"\u91cd\u5927\u306a\u30bc\u30ed\u30c7\u30a4\u8106\u5f31\u6027\u3092\u691c\u77e5\u3057\u305f\u5834\u5408\u3084\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408\u306a\u3069\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u3001\u4ee5\u4e0b\u306e\u65b9\u91dd\u3067\u30a2\u30d7\u30ea\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u5f37\u5236\u3059\u308b\u8981\u4ef6\u306f\u4ee5\u4e0b\u3068\u3059\u308b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u30bc\u30ed\u30c6\u30a3\u8106\u5f31\u6027\u306a\u3069\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u91cd\u5927\u306a\u554f\u984c\u3092\u691c\u77e5\u3057\u305f\u5834\u5408"),(0,a.kt)("li",{parentName:"ul"},"\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408"),(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u306e\u6a5f\u80fd\u3092\u8ffd\u52a0\u3001\u307e\u305f\u306f\u66f4\u65b0\u3057\u305f\u5834\u5408\uff08\u90fd\u5ea6\u3001\u5f37\u5236\u30a2\u30d7\u30ea\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u304c\u5fc5\u8981\u304b\u3092\u5224\u65ad\u3059\u308b\uff09"))),(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u306e\u78ba\u8a8d\u306f\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306b\u5b9f\u65bd\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u304b\u3089\u7aef\u672b\u306eOS\u3068\u30a2\u30d7\u30ea\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u30d0\u30c3\u30af\u30a8\u30f3\u30c9API\u306b\u9001\u4fe1\u3057\u3066\u3001\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u3092\u53d7\u3051\u53d6\u308b")),(0,a.kt)("h2",{id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"},"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"),(0,a.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30a2\u30d7\u30ea\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u30bf\u30a4\u30df\u30f3\u30b0\u306f\u30e6\u30fc\u30b6\u306b\u59d4\u306d\u3089\u308c\u3066\u304a\u308a\u3001\u57fa\u672c\u7684\u306b\u306f\u63d0\u4f9b\u5143\u304c\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3067\u304d\u307e\u305b\u3093\u3002\n\u3057\u304b\u3057\u3001\u91cd\u5927\u306a\u30bc\u30ed\u30c7\u30a4\u8106\u5f31\u6027\u3092\u691c\u77e5\u3057\u305f\u5834\u5408\u3084\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408\u306a\u3069\u3001\u30e6\u30fc\u30b6\u306e\u5229\u7528\u3057\u3066\u3044\u308b\u30a2\u30d7\u30ea\u3092\u5f37\u5236\u7684\u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3055\u305b\u305f\u3044\u3068\u3044\u3046\u8981\u6c42\u306f\u5c11\u306a\u304b\u3089\u305a\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b\u307e\u3067\u30e6\u30fc\u30b6\u304c\u30a2\u30d7\u30ea\u3092\u5229\u7528\u3067\u304d\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u4ed5\u7d44\u307f\u3092\u691c\u8a0e\u3057\u307e\u3059\u3002"),(0,a.kt)("admonition",{title:"\u524d\u63d0",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u524d\u63d0\u3068\u3057\u3066\u3001\u30a2\u30d7\u30ea\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306fApp Store\u3084Google Play\u3092\u4ecb\u3057\u3066\u884c\u3046\u3082\u306e\u3068\u3057\u307e\u3059\u3002\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/updates/"},"Expo Updates"),"\u306a\u3069\u3092\u4f7f\u7528\u3057\u305fOTA\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306f\u5bfe\u8c61\u5916\u3068\u3057\u307e\u3059\u3002")),(0,a.kt)("h2",{id:"\u8b70\u8ad6"},"\u8b70\u8ad6"),(0,a.kt)("h3",{id:"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u5f37\u5236\u3059\u308b\u8981\u4ef6"},"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u5f37\u5236\u3059\u308b\u8981\u4ef6"),(0,a.kt)("p",null,"\u30a2\u30d7\u30ea\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u5f37\u5236\u3059\u308b\u8981\u4ef6\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u5019\u88dc\u304c\u6319\u304c\u308a\u307e\u3057\u305f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30bc\u30ed\u30c6\u30a3\u8106\u5f31\u6027\u306a\u3069\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u91cd\u5927\u306a\u554f\u984c\u3092\u691c\u77e5\u3057\u305f\u5834\u5408"),(0,a.kt)("li",{parentName:"ul"},"\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408"),(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u306e\u6a5f\u80fd\u3092\u8ffd\u52a0\u3001\u307e\u305f\u306f\u66f4\u65b0\u3057\u305f\u5834\u5408")),(0,a.kt)("p",null,"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u91cd\u5927\u306a\u554f\u984c\u3092\u691c\u77e5\u3057\u305f\u5834\u5408\u306f\u3001\u65e9\u6025\u306b\u30a2\u30d7\u30ea\u3092\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408\u3082\u3001\u30a2\u30d7\u30ea\u3092\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3057\u306a\u3044\u3068\u305d\u308c\u3089\u306b\u95a2\u3059\u308b\u6a5f\u80fd\u304c\u5229\u7528\u3067\u304d\u306a\u304f\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u3053\u308c\u30892\u3064\u306e\u8981\u4ef6\u306b\u95a2\u3057\u3066\u306f\u5f37\u5236\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306e\u5bfe\u8c61\u3068\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30a2\u30d7\u30ea\u306e\u6a5f\u80fd\u8ffd\u52a0\u30fb\u66f4\u65b0\u306b\u95a2\u3057\u3066\u306f\u3001\u69d8\u3005\u306a\u8981\u4ef6\u304c\u3042\u308b\u305f\u3081\u4e00\u6982\u306b\u5f37\u5236\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306e\u5bfe\u8c61\u3068\u3059\u308b\u304b\u306f\u6c7a\u3081\u3089\u306a\u3044\u3068\u3044\u3046\u610f\u898b\u304c\u6319\u304c\u308a\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u30e6\u30fc\u30b6\u306e\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u3092\u7de8\u96c6\u3059\u308b\u753b\u9762\u3067\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u6a5f\u80fd\u3092\u8ffd\u52a0\u3057\u305f\u5834\u5408\u3001\u305d\u308c\u306f\u5f37\u5236\u7684\u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b\u5bfe\u8c61\u3068\u3059\u3079\u304d\u3067\u3057\u3087\u3046\u304b\u3002\n\u30e6\u30fc\u30b6\u64cd\u4f5c\u3092\u4e2d\u65ad\u3057\u3066\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u5f37\u5236\u3059\u308b\u3053\u3068\u306f\u3001\u30e6\u30fc\u30b6\u306b\u3068\u3063\u3066\u30b9\u30c8\u30ec\u30b9\u306b\u306a\u308b\u53ef\u80fd\u6027\u3082\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u6c7a\u6e08\u6a5f\u80fd\u3092\u6301\u3064\u30a2\u30d7\u30ea\u3067\u3001OS\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u5f8c\u304b\u3089\u6c7a\u6e08\u3092\u5b8c\u4e86\u3067\u304d\u306a\u3044\u554f\u984c\u304c\u767a\u751f\u3057\u3066\u3044\u308b\u30a2\u30d7\u30ea\u306e\u5834\u5408\u306f\u3069\u3046\u3067\u3057\u3087\u3046\u304b\u3002\n\u65e5\u3005\u306e\u751f\u6d3b\u3067\u4f7f\u7528\u3057\u3066\u3044\u308b\u30e6\u30fc\u30b6\u306b\u3068\u3063\u3066\u306f\u3001\u975e\u5e38\u306b\u5927\u304d\u306a\u554f\u984c\u306b\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u30a2\u30d7\u30ea\u306e\u63d0\u4f9b\u5143\u306b\u3068\u3063\u3066\u3082\u5927\u304d\u306a\u640d\u5bb3\u306b\u306a\u308a\u304b\u306d\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"\u3053\u3046\u3044\u3063\u305f\u5834\u5408\u306b\u306f\u3001\u5f37\u5236\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306e\u5bfe\u8c61\u306b\u3059\u308b\u3079\u304d\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u6a5f\u80fd\u306e\u8ffd\u52a0\u3001\u66f4\u65b0\u306b\u4f34\u3046\u5f37\u5236\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306e\u8981\u5426\u306f\u3001\u90fd\u5ea6\u5224\u65ad\u3059\u308b\u3053\u3068\u306b\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u306e\u78ba\u8a8d\u30bf\u30a4\u30df\u30f3\u30b0"},"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u306e\u78ba\u8a8d\u30bf\u30a4\u30df\u30f3\u30b0"),(0,a.kt)("p",null,"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u306e\u78ba\u8a8d\u30bf\u30a4\u30df\u30f3\u30b0\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u5019\u88dc\u304c\u6319\u304c\u308a\u307e\u3057\u305f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u8d77\u52d5\u6642"),(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u8d77\u52d5\u6642 + \u30a2\u30d7\u30ea\u5fa9\u5e30\u6642\uff08\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u304b\u3089\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u306b\u79fb\u884c\u6642\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u8d77\u52d5\u6642 + \u30d0\u30c3\u30af\u30a8\u30f3\u30c9API\u3068\u306e\u901a\u4fe1\u6642"),(0,a.kt)("li",{parentName:"ul"},"\uff08\u53ef\u80fd\u306a\u9650\u308a\uff09\u5373\u6642")),(0,a.kt)("p",null,"\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306e\u307f\u78ba\u8a8d\u3059\u308b\u5834\u5408\u306b\u6bd4\u3079\u308b\u3068\u3001\u4ed6\u306e\u5019\u88dc\u306f\u30e6\u30fc\u30b6\u306b\u5bfe\u3057\u3066\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u8981\u6c42\u3059\u308b\u6a5f\u4f1a\u304c\u5897\u3048\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u91cd\u5927\u306a\u30bc\u30ed\u30c7\u30a3\u8106\u5f31\u6027\u306b\u5bfe\u5fdc\u3057\u305f\u30a2\u30d7\u30ea\u3092\u30ea\u30ea\u30fc\u30b9\u3057\u305f\u5834\u5408\u3092\u8003\u3048\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306e\u307f\u78ba\u8a8d\u3059\u308b\u5834\u5408\u306f\u3001\u30e6\u30fc\u30b6\u304c\u30a2\u30d7\u30ea\u3092\u518d\u8d77\u52d5\u3059\u308b\u307e\u3067\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306f\u8981\u6c42\u3055\u308c\u307e\u305b\u3093\u3002\u30a2\u30d7\u30ea\u3092\u9577\u6642\u9593\u8d77\u52d5\u3057\u3066\u3044\u308b\u30e6\u30fc\u30b6\u306f\u3001\u8106\u5f31\u6027\u3092\u62b1\u3048\u305f\u30a2\u30d7\u30ea\u3092\u5229\u7528\u3057\u7d9a\u3051\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\n\u4e0a\u8a18\u3067\u6319\u3052\u305f\u5019\u88dc\u306f\u3001\u4e0a\u304b\u3089\u9806\u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u8981\u6c42\u3059\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u304c\u591a\u304f\u306a\u308b\u305f\u3081\u3001\u305d\u308c\u306b\u5bfe\u3059\u308b\u30ea\u30b9\u30af\u306f\u8efd\u6e1b\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u305d\u306e\u53cd\u9762\u3001\u8003\u616e\u3059\u3079\u304d\u8981\u7d20\u3082\u5897\u3048\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u30e6\u30fc\u30b6\u304c\u753b\u9762\u3067\u5165\u529b\u4e2d\u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u8981\u6c42\u3059\u308b\u3068\u3001\u5165\u529b\u4e2d\u306e\u30c7\u30fc\u30bf\u306f\u5931\u308f\u308c\u307e\u3059\u3002\u3053\u308c\u3092\u56de\u907f\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u5165\u529b\u4e2d\u306e\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3057\u3066\u304a\u304d\u3001\u6b21\u56de\u306e\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306b\u5fa9\u5143\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u30bf\u30c3\u30d7\u3057\u3066\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3057\u305f\u5834\u5408\u3082\u540c\u69d8\u3067\u3059\u3002\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u30bf\u30c3\u30d7\u5f8c\u306b\u9077\u79fb\u3059\u308b\u4e88\u5b9a\u3060\u3063\u305f\u753b\u9762\u3092\u4fdd\u5b58\u3057\u3066\u304a\u304d\u3001\u6b21\u56de\u306e\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306b\u305d\u306e\u753b\u9762\u3078\u9077\u79fb\u3057\u306a\u3044\u3068\u3001\u30e6\u30fc\u30b6\u306f\u8a72\u5f53\u306e\u753b\u9762\u306b\u5230\u9054\u3067\u304d\u306a\u3044\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u307e\u305f\u3001\u5373\u6642\u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u3092\u78ba\u8a8d\u3059\u308b\u5834\u5408\u306f\u3001\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u306e\u5c0e\u5165\u3084\u65b0\u3057\u3044\u6280\u8853\u30b9\u30bf\u30c3\u30af\u306e\u8ffd\u52a0\u3082\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u308c\u3089\u3092\u5168\u3066\u8003\u616e\u3059\u308b\u3068\u3001\u958b\u767a\u30b3\u30b9\u30c8\u306f\u5897\u5927\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306e\u307f\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u306b\u3057\u307e\u3059\u3002\u30a2\u30d7\u30ea\u3092\u9577\u6642\u9593\u8d77\u52d5\u3057\u3066\u3044\u308b\u30e6\u30fc\u30b6\u306b\u306f\u3001\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u8981\u6c42\u3059\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u304c\u9045\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u304c\u3001\u305d\u308c\u306f\u8a31\u5bb9\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u306e\u78ba\u8a8d\u65b9\u6cd5"},"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u306e\u78ba\u8a8d\u65b9\u6cd5"),(0,a.kt)("p",null,"\u3053\u306e\u30b7\u30b9\u30c6\u30e0\u306b\u306f\u30a2\u30d7\u30ea\u304b\u3089\u63a5\u7d9a\u3059\u308b\u30d0\u30c3\u30af\u30a8\u30f3\u30c9API\u304c\u3042\u308b\u305f\u3081\u3001\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u306e\u78ba\u8a8d\u306f\u30d0\u30c3\u30af\u30a8\u30f3\u30c9API\u3067\u5b9f\u65bd\u3059\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"\u30a2\u30d7\u30ea\u304b\u3089\u306f\u3001\u4ee5\u4e0b\u306e\u60c5\u5831\u3092\u30d0\u30c3\u30af\u30a8\u30f3\u30c9API\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7aef\u672b\u306eOS",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"iOS"),(0,a.kt)("li",{parentName:"ul"},"Android"))),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u3057\u3066\u3044\u308b\u30a2\u30d7\u30ea\u306e\u30d0\u30fc\u30b8\u30e7\u30f3")),(0,a.kt)("p",null,"\u3053\u308c\u3089\u306e\u60c5\u5831\u3092\u5143\u306b\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9API\u3067\u306f\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u3092\u78ba\u8a8d\u5f8c\u3001\u7d50\u679c\u3092\u30ec\u30b9\u30dd\u30f3\u30b9\u3068\u3057\u3066\u8fd4\u5374\u3057\u307e\u3059\u3002"),(0,a.kt)("admonition",{title:"\u53c2\u8003\u60c5\u5831",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u4eca\u56de\u306f\u3001\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u3092\u78ba\u8a8d\u3059\u308b\u306e\u307f\u3060\u3063\u305f\u306e\u3067\u3001\u65e2\u5b58\u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9API\u3067\u5b9f\u65bd\u3057\u307e\u3057\u305f\u3002\n\u3057\u304b\u3057\u3001\u5373\u6642\u3001\u307e\u305f\u306f\u5b9a\u671f\u7684\u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u3092\u78ba\u8a8d\u3057\u305f\u3044\u5834\u5408\u306a\u3069\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30b5\u30fc\u30d3\u30b9\u306e\u5229\u7528\u3082\u691c\u8a0e\u3059\u308b\u3068\u826f\u3044\u3067\u3057\u3087\u3046\u3002"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/remote-config?hl=ja"},"Firebase Remote Config")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/firestore?hl=ja"},"Firebase Cloud Firestore")))),(0,a.kt)("h2",{id:"\u6c7a\u5b9a"},"\u6c7a\u5b9a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u5f37\u5236\u3059\u308b\u8981\u4ef6\u306f\u4ee5\u4e0b\u3068\u3059\u308b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u30bc\u30ed\u30c6\u30a3\u8106\u5f31\u6027\u306a\u3069\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u91cd\u5927\u306a\u554f\u984c\u3092\u691c\u77e5\u3057\u305f\u5834\u5408"),(0,a.kt)("li",{parentName:"ul"},"\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408"),(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u306e\u6a5f\u80fd\u3092\u8ffd\u52a0\u3001\u307e\u305f\u306f\u66f4\u65b0\u3057\u305f\u5834\u5408\uff08\u90fd\u5ea6\u3001\u5f37\u5236\u30a2\u30d7\u30ea\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u304c\u5fc5\u8981\u304b\u3092\u5224\u65ad\u3059\u308b\uff09"))),(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u306e\u78ba\u8a8d\u306f\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306b\u5b9f\u65bd\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u304b\u3089\u7aef\u672b\u306eOS\u3068\u30a2\u30d7\u30ea\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u30d0\u30c3\u30af\u30a8\u30f3\u30c9API\u306b\u9001\u4fe1\u3057\u3066\u3001\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u8981\u5426\u3092\u53d7\u3051\u53d6\u308b")))}d.isMDXComponent=!0}}]);