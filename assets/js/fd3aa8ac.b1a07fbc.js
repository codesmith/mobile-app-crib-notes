"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[949],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(a),d=n,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||i;return a?r.createElement(m,o(o({ref:t},s),{},{components:a})):r.createElement(m,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},29082:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],l={title:"HTTP\u901a\u4fe1\u3067\u4f7f\u7528\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea"},p=void 0,c={unversionedId:"react-native/santoku/decisions/adr-002-http-api-libraries",id:"react-native/santoku/decisions/adr-002-http-api-libraries",isDocsHomePage:!1,title:"HTTP\u901a\u4fe1\u3067\u4f7f\u7528\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea",description:"Status: Accepted",source:"@site/docs/react-native/santoku/decisions/adr-002-http-api-libraries.mdx",sourceDirName:"react-native/santoku/decisions",slug:"/react-native/santoku/decisions/adr-002-http-api-libraries",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-002-http-api-libraries",tags:[],version:"current",lastUpdatedAt:1629788302,formattedLastUpdatedAt:"2021/8/24",frontMatter:{title:"HTTP\u901a\u4fe1\u3067\u4f7f\u7528\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea"},sidebar:"santoku",previous:{title:"\u30b0\u30ed\u30fc\u30d0\u30eb\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-001-error-handling"},next:{title:"HTTP API\u901a\u4fe1\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-003-http-api-error-handling"}},s=[{value:"\u8981\u7d04",id:"\u8981\u7d04",children:[],level:2},{value:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",children:[],level:2},{value:"\u8b70\u8ad6",id:"\u8b70\u8ad6",children:[{value:"HTTP\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u9078\u5b9a",id:"http\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u9078\u5b9a",children:[],level:3},{value:"React Query\u3092\u4f7f\u7528\u3059\u308b\u304b",id:"react-query\u3092\u4f7f\u7528\u3059\u308b\u304b",children:[],level:3}],level:2},{value:"\u6c7a\u5b9a",id:"\u6c7a\u5b9a",children:[],level:2}],u={toc:s};function f(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Status: Accepted"),(0,i.kt)("h2",{id:"\u8981\u7d04"},"\u8981\u7d04"),(0,i.kt)("p",null,"SantokuApp\u3067\u306f\u3001HTTP\u901a\u4fe1\u306b\u4ee5\u4e0b\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"axios"),(0,i.kt)("li",{parentName:"ul"},"React Query")),(0,i.kt)("h2",{id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"},"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"),(0,i.kt)("p",null,"React Native\u3092\u4f7f\u7528\u3057\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u306f\u3001HTTP\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u3057\u3066",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ja/docs/Web/API/Fetch_API"},"Fetch API"),"\u304c\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/niftylettuce/frisbee"},"Frisbee"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios"),"\u306a\u3069\u306e",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest"},"XMLHttpRequest API"),"\u306b\u4f9d\u5b58\u3057\u305f\u30e9\u30a4\u30d6\u30e9\u30ea\u3082\u4f7f\u7528\u53ef\u80fd\u3067\u3059\u3002\n\u3053\u3053\u3067\u306f\u3001\u305d\u308c\u3089\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u3044\u304f\u3064\u304b\u306e\u89b3\u70b9\u3067\u6bd4\u8f03\u3057\u3066\u3001\u4f7f\u7528\u3059\u308bHTTP\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u307e\u305f\u3001HTTP API\u3068\u901a\u4fe1\u3059\u308b\u969b\u306f\u3001\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3084\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u4e2d\u306a\u3069\u306e\u72b6\u614b\u3092\u7ba1\u7406\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u3046\u3044\u3063\u305f\u8ab2\u984c\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u3001",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/overview"},"React Query"),"\u306a\u3069\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u691c\u8a0e\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u8b70\u8ad6"},"\u8b70\u8ad6"),(0,i.kt)("h3",{id:"http\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u9078\u5b9a"},"HTTP\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u9078\u5b9a"),(0,i.kt)("p",null,"React Native\u3092\u4f7f\u7528\u3057\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u4f7f\u7528\u53ef\u80fd\u306a\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u3057\u3066\u306f\u3001Fetch API\u3084Frisbee\u3001axios\u3001superagent\u306a\u3069\u591a\u304f\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u304c\u5b58\u5728\u3057\u307e\u3059\u3002\u305d\u306e\u4e2d\u3067\u3001\u30c1\u30fc\u30e0\u30e1\u30f3\u30d0\u30fc\u306e\u7d4c\u9a13\u304c\u591a\u3044\u306e\u306fFetch API\u3068axios\u3067\u3057\u305f\u3002\u305d\u306e\u305f\u3081\u3001\u307e\u305a\u306fFetch API\u3068axios\u306e2\u3064\u306b\u7d5e\u3063\u3066\u6bd4\u8f03\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,"Fetch API\u3068axios\u306f\u975e\u5e38\u306b\u6709\u540d\u3067\u3001OSS\u3001\u5546\u7528\u5229\u7528\u554f\u308f\u305a\u591a\u304f\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30c1\u30fc\u30e0\u30e1\u30f3\u30d0\u30fc\u304c\u904e\u53bb\u306b\u958b\u767a\u3057\u305f\u30a2\u30d7\u30ea\u3067\u3082\u5b89\u5b9a\u3057\u3066\u52d5\u4f5c\u3057\u3066\u304a\u308a\u3001\u5b89\u5b9a\u6027\u3084\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306a\u3069\u306e\u89b3\u70b9\u306b\u304a\u3044\u3066\u53cc\u65b9\u3068\u3082\u554f\u984c\u306a\u3055\u305d\u3046\u3067\u3059\u3002\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3082\u5145\u5b9f\u3057\u3066\u304a\u308a\u3001\u5b66\u7fd2\u30b3\u30b9\u30c8\u306f\u3055\u307b\u3069\u9ad8\u304f\u3042\u308a\u307e\u305b\u3093\u3002\u30e9\u30a4\u30bb\u30f3\u30b9\u306f\u53cc\u65b9\u3068\u3082MIT\u30e9\u30a4\u30bb\u30f3\u30b9\u306b\u306a\u308a\u307e\u3059\u3002",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u3053\u3053\u3067\u306fFetch API\u3068axios\u304c\u300cSantokuApp\u3067\u5fc5\u8981\u3068\u3057\u3066\u3044\u308b\u8981\u4ef6\u3092\u6e80\u305f\u3057\u3066\u3044\u308b\u304b\u300d\u3092\u89b3\u70b9\u3068\u3057\u3066\u6bd4\u8f03\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u73fe\u6642\u70b9\u306eSantokuApp\u3067HTTP API\u901a\u4fe1\u306b\u5fc5\u8981\u306a\u8981\u4ef6\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8981\u4ef6"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Fetch API"),(0,i.kt)("th",{parentName:"tr",align:"left"},"axios"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5404\u7a2eHTTP\u30e1\u30bd\u30c3\u30c9\u306e\u30b5\u30dd\u30fc\u30c8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u25cb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u25cb")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"HTTP\u901a\u4fe1\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u25b3",(0,i.kt)("sup",{parentName:"td",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u25b3",(0,i.kt)("sup",{parentName:"td",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),(0,i.kt)("sup",{parentName:"td",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"HTTP\u901a\u4fe1\u306e\u30ad\u30e3\u30f3\u30bb\u30eb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u25cb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u25cb")))),(0,i.kt)("p",null,"\u307b\u3068\u3093\u3069\u5dee\u306f\u306a\u304f\u3001\u63a1\u7528\u306e\u6c7a\u3081\u624b\u306b\u306a\u308b\u8981\u56e0\u306f\u3042\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002"),(0,i.kt)("p",null,"\u3057\u304b\u3057\u3001\u73fe\u6642\u70b9\u306e\u8981\u4ef6\u3068\u3057\u3066\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u4eca\u5f8c\u30d5\u30a1\u30a4\u30eb\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u6a5f\u80fd\u304c\u8ffd\u52a0\u3055\u308c\u305f\u5834\u5408\u306f\u5dee\u304c\u51fa\u3066\u304d\u307e\u3059\u3002axios\u306f\u3001\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u4e2d\u306e\u9032\u6357\u72b6\u6cc1\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u4e2d\u306e\u9032\u6357\u72b6\u6cc1\u3092\u53d6\u5f97\u3067\u304d\u308b\u3068\u3001\u30d7\u30ed\u30b0\u30ec\u30b9\u30d0\u30fc\u306a\u3069\u3067\u8996\u899a\u7684\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u72b6\u6cc1\u3092\u4f1d\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u8ffd\u52a0\u306e\u53ef\u80fd\u6027\u304c\u3042\u308b\u8981\u4ef6\u3092\u898b\u636e\u3048\u3066\u3001axios\u3092\u63a1\u7528\u3059\u308b\u3053\u3068\u306b\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"react-query\u3092\u4f7f\u7528\u3059\u308b\u304b"},"React Query\u3092\u4f7f\u7528\u3059\u308b\u304b"),(0,i.kt)("p",null,"React Native\u30a2\u30d7\u30ea\u306f\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3084\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u72b6\u614b\u306a\u3069\u306e\u7ba1\u7406\u304c\u7169\u96d1\u3067\u3001\u4e0d\u5177\u5408\u3092\u751f\u307f\u3084\u3059\u3044\u3067\u3059\u3002React Query\u3092\u4f7f\u7528\u3059\u308b\u3068\u305d\u308c\u3089\u306e\u7ba1\u7406\u304c\u975e\u5e38\u306b\u697d\u306b\u306a\u308a\u3001\u52b9\u7387\u826f\u304f\u958b\u767a\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u7ba1\u7406\u3084\u30da\u30fc\u30b8\u30cd\u30fc\u30b7\u30e7\u30f3\u3001\u7121\u9650\u30b9\u30af\u30ed\u30fc\u30eb\u306e\u5bfe\u5fdc\u306a\u3069\u591a\u304f\u306e\u4fbf\u5229\u306a\u6a5f\u80fd\u304c\u642d\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u305d\u306e\u53cd\u9762\u3001\u5b66\u7fd2\u30b3\u30b9\u30c8\u306f\u6c7a\u3057\u3066\u4f4e\u304f\u306a\u3044\u3088\u3046\u306b\u601d\u3044\u307e\u3059\u3002\u30c1\u30fc\u30e0\u5185\u306b\u306fReact Query\u306e\u7d4c\u9a13\u8005\u3082\u3044\u306a\u3044\u305f\u3081\u3001\u958b\u767a\u30b3\u30b9\u30c8\u306f\u9ad8\u304f\u306a\u308b\u53ef\u80fd\u6027\u3082\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u305d\u3046\u3044\u3063\u305f\u61f8\u5ff5\u306f\u3042\u308a\u307e\u3059\u304c\u3001React Query\u3092\u4f7f\u7528\u3057\u305f\u5834\u5408\u306e\u65b9\u5f0f\u8a2d\u8a08\u3084\u958b\u767a\u30ac\u30a4\u30c9\u3001\u5171\u901a\u90e8\u54c1\u3092\u6574\u5099\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u52b9\u7387\u7684\u306b\u958b\u767a\u3092\u9032\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002\u3088\u3063\u3066\u3001SantokuApp\u3067\u306fReact Query\u3092\u63a1\u7528\u3059\u308b\u3053\u3068\u306b\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u6c7a\u5b9a"},"\u6c7a\u5b9a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTTP\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u3001axios\u3092\u4f7f\u7528\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},"React Query\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u3066\u3001\u52b9\u7387\u7684\u306b\u958b\u767a\u3092\u9032\u3081\u308b")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Fetch API\u306f\u3001React Native\u306b\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u308b\u305f\u3081\u3001React Native\u306e\u30e9\u30a4\u30bb\u30f3\u30b9\u3092\u8868\u8a18\u3057\u3066\u3044\u307e\u3059\u3002",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"HTTP\u901a\u4fe1\u3092\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3059\u308b\u6a5f\u80fd\u306f\u306a\u3044\u3067\u3059\u304c\u3001HTTP\u901a\u4fe1\u306e\u30ad\u30e3\u30f3\u30bb\u30eb\u6a5f\u80fd\uff08",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortController"},"AbortController"),"(fetch)\u3084",(0,i.kt)("a",{parentName:"li",href:"https://axios-http.com/docs/cancellation"},"CancelToken"),"(axios)\uff09\u3092\u4f7f\u3048\u3070\u5b9f\u73fe\u53ef\u80fd\u3067\u3059\u3002",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"axios\u3067\u306f",(0,i.kt)("a",{parentName:"li",href:"https://github.com/axios/axios#request-config"},"timeout"),"\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002\u305f\u3060\u3057\u3001axios\u306e",(0,i.kt)("inlineCode",{parentName:"li"},"timeout"),"\u306fAndroid\u3067\u306f\u30b3\u30cd\u30af\u30b7\u30e7\u30f3\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u306e\u307f\u306b\u4f7f\u7528\u3055\u308c\u308b\u305f\u3081\u3001\u30b3\u30cd\u30af\u30b7\u30e7\u30f3\u63a5\u7d9a\u5f8c\u306b\u30b5\u30fc\u30d0\u306e\u5fdc\u7b54\u304c\u9045\u3044\u5834\u5408\u306a\u3069\u306f\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3057\u307e\u305b\u3093\u3002",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);