"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7744],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(v,o(o({ref:t},s),{},{components:a})):n.createElement(v,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},988:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o={title:"\u30a8\u30e9\u30fc\u306e\u767a\u751f\u7b87\u6240\u3068\u51e6\u7406\u65b9\u6cd5"},l=void 0,c={unversionedId:"react-native/santoku/application-architecture/error-handling/how-to-handle-error",id:"react-native/santoku/application-architecture/error-handling/how-to-handle-error",isDocsHomePage:!1,title:"\u30a8\u30e9\u30fc\u306e\u767a\u751f\u7b87\u6240\u3068\u51e6\u7406\u65b9\u6cd5",description:"\u30a8\u30e9\u30fc\u306e\u767a\u751f\u7b87\u6240\u306f\u5927\u304d\u304f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u5206\u985e\u3067\u304d\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/error-handling/how-to-handle-error.mdx",sourceDirName:"react-native/santoku/application-architecture/error-handling",slug:"/react-native/santoku/application-architecture/error-handling/how-to-handle-error",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/error-handling/how-to-handle-error",version:"current",lastUpdatedAt:1628066059,formattedLastUpdatedAt:"2021/8/4",frontMatter:{title:"\u30a8\u30e9\u30fc\u306e\u767a\u751f\u7b87\u6240\u3068\u51e6\u7406\u65b9\u6cd5"},sidebar:"santoku",previous:{title:"Overview",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/error-handling/overview"},next:{title:"\ud83d\udea7 (\u5f8c\u3067HTTP API\u306e\u30da\u30fc\u30b8\u306b\u79fb\u884c) \ud83d\udea7 HTTP API\u901a\u4fe1\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/error-handling/api-error-handling"}},p=[{value:"\u672a\u51e6\u7406\u306e\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3059\u308b\u65b9\u6cd5",id:"\u672a\u51e6\u7406\u306e\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3059\u308b\u65b9\u6cd5",children:[]},{value:"\u500b\u5225\u306b\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3059\u308b\u65b9\u6cd5",id:"\u500b\u5225\u306b\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3059\u308b\u65b9\u6cd5",children:[{value:"\u30ed\u30b8\u30c3\u30af\u306e\u30a8\u30e9\u30fc\u51e6\u7406",id:"\u30ed\u30b8\u30c3\u30af\u306e\u30a8\u30e9\u30fc\u51e6\u7406",children:[]},{value:"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306e\u30a8\u30e9\u30fc\u51e6\u7406",id:"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306e\u30a8\u30e9\u30fc\u51e6\u7406",children:[]},{value:"JSX\u306e\u30a8\u30e9\u30fc\u51e6\u7406",id:"jsx\u306e\u30a8\u30e9\u30fc\u51e6\u7406",children:[]},{value:"Native Modules\u306e\u30a8\u30e9\u30fc\u51e6\u7406",id:"native-modules\u306e\u30a8\u30e9\u30fc\u51e6\u7406",children:[]}]}],s={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u30a8\u30e9\u30fc\u306e\u767a\u751f\u7b87\u6240\u306f\u5927\u304d\u304f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u5206\u985e\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30ed\u30b8\u30c3\u30af",(0,i.kt)("sup",{parentName:"li",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u975e\u540c\u671f\u51e6\u7406"),(0,i.kt)("li",{parentName:"ul"},"\u540c\u671f\u51e6\u7406"))),(0,i.kt)("li",{parentName:"ul"},"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u975e\u540c\u671f\u51e6\u7406"),(0,i.kt)("li",{parentName:"ul"},"\u540c\u671f\u51e6\u7406"))),(0,i.kt)("li",{parentName:"ul"},"JSX"),(0,i.kt)("li",{parentName:"ul"},"Native Modules")),(0,i.kt)("h2",{id:"\u672a\u51e6\u7406\u306e\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3059\u308b\u65b9\u6cd5"},"\u672a\u51e6\u7406\u306e\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3059\u308b\u65b9\u6cd5"),(0,i.kt)("p",null,"\u672a\u51e6\u7406\u306e\u30a8\u30e9\u30fc\u306f\u3001Firebase Crashlytics SDK\u304c\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u3066Firebase Crashlytics\u306b\u30af\u30e9\u30c3\u30b7\u30e5\u30ed\u30b0\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u305f\u3060\u3057\u3001\u30ed\u30b8\u30c3\u30af\u3084\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306e\u975e\u540c\u671f\u51e6\u7406\u3067\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u306b\u95a2\u3057\u3066\u306f\u3001Firebase Crashlytics SDK\u3067\u6355\u6349\u3067\u304d\u306a\u3044\u305f\u3081\u3001\u5fc5\u305a\u500b\u5225\u306b\u30a8\u30e9\u30fc\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Firebase Crashlytics\u306b\u30ed\u30b0\u3092\u9001\u4fe1\u3059\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u306f\u3001\u30a2\u30d7\u30ea\u3092\u518d\u8d77\u52d5\u3057\u305f\u6642\u306b\u306a\u308a\u307e\u3059\u3002\u5373\u5ea7\u306b\u30ed\u30b0\u304c\u9001\u4fe1\u3055\u308c\u306a\u3044\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,i.kt)("h2",{id:"\u500b\u5225\u306b\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3059\u308b\u65b9\u6cd5"},"\u500b\u5225\u306b\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3059\u308b\u65b9\u6cd5"),(0,i.kt)("h3",{id:"\u30ed\u30b8\u30c3\u30af\u306e\u30a8\u30e9\u30fc\u51e6\u7406"},"\u30ed\u30b8\u30c3\u30af\u306e\u30a8\u30e9\u30fc\u51e6\u7406"),(0,i.kt)("p",null,"\u30ed\u30b8\u30c3\u30af\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u3092\u500b\u5225\u306b\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3059\u308b\u5834\u5408\u306f\u3001\u540c\u671f\u51e6\u7406\u3068\u975e\u540c\u671f\u51e6\u7406\u3067\u5bfe\u5fdc\u304c\u5909\u308f\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u540c\u671f\u51e6\u7406\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"try...catch"),"\u6587\u3067\u56f2\u3093\u3067\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u975e\u540c\u671f\u51e6\u7406\u306f\u3001\u4ee5\u4e0b\u306e\u3044\u305a\u308c\u304b\u306e\u65b9\u6cd5\u3067\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Promise.catch()"),"\u3092\u4f7f\u7528\u3057\u3066\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"await"),"\u5f0f\u3092\u5229\u7528\u3057\u305f\u5834\u5408\u306f",(0,i.kt)("inlineCode",{parentName:"li"},"try...catch"),"\u6587\u3067\u56f2\u3093\u3067\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u307e\u3059\u3002")),(0,i.kt)("h3",{id:"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306e\u30a8\u30e9\u30fc\u51e6\u7406"},"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306e\u30a8\u30e9\u30fc\u51e6\u7406"),(0,i.kt)("p",null,"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u3092\u500b\u5225\u306b\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3059\u308b\u5834\u5408\u306f\u3001\u30ed\u30b8\u30c3\u30af\u306e\u540c\u671f\u51e6\u7406\u30fb\u975e\u540c\u671f\u51e6\u7406\u3068\u540c\u69d8\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"Promise.catch()"),"\u3001\u307e\u305f\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"try...catch"),"\u3092\u5229\u7528\u3057\u3066\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h3",{id:"jsx\u306e\u30a8\u30e9\u30fc\u51e6\u7406"},"JSX\u306e\u30a8\u30e9\u30fc\u51e6\u7406"),(0,i.kt)("p",null,"JSX\u3067\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://ja.reactjs.org/docs/error-boundaries.html"},"Error Boundary"),"\u3067\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u307e\u3059\u3002\u8a72\u5f53\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"Error Boundary"),"\u3067\u30e9\u30c3\u30d7\u3057\u3066\u30a8\u30e9\u30fc\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"JSX\u306e\u30a8\u30e9\u30fc\u306f\u57fa\u672c\u7684\u306b\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u4e0d\u5177\u5408\u306b\u3088\u308b\u3082\u306e\u3067\u3059\u3002\u307b\u3068\u3093\u3069\u306e\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u304a\u3044\u3066\u3001Error Boundary\u3092\u4f7f\u7528\u3057\u3066\u500b\u5225\u306b\u30a8\u30e9\u30fc\u51e6\u7406\u3092\u5b9f\u65bd\u3059\u308b\u3053\u3068\u306f\u306a\u3044\u3068\u601d\u308f\u308c\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Error Boundary\u306f\u3001\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u3084\u975e\u540c\u671f\u51e6\u7406\u3067\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3067\u304d\u307e\u305b\u3093\u3002"))),(0,i.kt)("h3",{id:"native-modules\u306e\u30a8\u30e9\u30fc\u51e6\u7406"},"Native Modules\u306e\u30a8\u30e9\u30fc\u51e6\u7406"),(0,i.kt)("p",null,"Native Modules\u306fJava\uff08Kotlin\uff09\u3084Objective-C\uff08Swift\uff09\u3001C++\u306a\u3069\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u8a00\u8a9e\u3092\u4f7f\u7528\u3057\u305f\u30e2\u30b8\u30e5\u30fc\u30eb\u3067\u3059\u3002OS\u304c\u63d0\u4f9b\u3057\u3066\u3044\u308bAPI\u306a\u3069\u3092\u5229\u7528\u3059\u308b\u6642\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"Native Modules\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u3092\u500b\u5225\u306b\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3059\u308b\u5834\u5408\u306f\u3001\u8a00\u8a9e\u6bce\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u65b9\u5f0f\u306b\u5f93\u3063\u3066\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"\u307e\u305f\u3001Native Modules\u3067\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u3092JavaScript\u5074\u306b\u4f1d\u3048\u305f\u3044\u5834\u9762\u3082\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u5834\u5408\u306f\u3001JavaScript\u5074\u304b\u3089\u30a8\u30e9\u30fc\u6642\u306b\u5b9f\u884c\u3057\u305f\u3044\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u3092\u53d7\u3051\u53d6\u308b\u304b\u3001Native Modules\u304b\u3089Promise\u3092\u8fd4\u5374\u3059\u308b\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002\u8a73\u7d30\u306f\u3001React Native\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/native-modules-android#callbacks"},"Android - Callbacks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/native-modules-android#promises"},"Android - Promises")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/native-modules-ios#callbacks"},"iOS - Callbacks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/native-modules-ios#promises"},"iOS - Promises"))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"useEffect\u5185\u306e\u51e6\u7406\u306a\u3069\u3092\u6307\u3057\u307e\u3059\u3002",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);