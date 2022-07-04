"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7518],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),v=a,d=m["".concat(c,".").concat(v)]||m[v]||s[v]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u6982\u8981"},i=void 0,l={unversionedId:"react-native/santoku/design/context/overview",id:"react-native/santoku/design/context/overview",title:"\u6982\u8981",description:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u5b9a\u7fa9",source:"@site/docs/react-native/santoku/design/context/overview.mdx",sourceDirName:"react-native/santoku/design/context",slug:"/react-native/santoku/design/context/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/design/context/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1636102608,formattedLastUpdatedAt:"2021/11/5",frontMatter:{title:"\u6982\u8981"},sidebar:"santoku",previous:{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u4e00\u89a7",permalink:"/mobile-app-crib-notes/react-native/santoku/design/message-list/overview"},next:{title:"\u30c6\u30fc\u30de\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",permalink:"/mobile-app-crib-notes/react-native/santoku/design/context/theme"}},c={},p=[{value:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u5b9a\u7fa9",id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u5b9a\u7fa9",level:2},{value:"\u3053\u306e\u30a2\u30d7\u30ea\u306b\u304a\u3051\u308b\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4e00\u89a7",id:"\u3053\u306e\u30a2\u30d7\u30ea\u306b\u304a\u3051\u308b\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4e00\u89a7",level:2},{value:"\u6a5f\u80fd\u5185\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",id:"\u6a5f\u80fd\u5185\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",level:3},{value:"\u30a2\u30d7\u30ea\u5185\u5171\u901a\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",id:"\u30a2\u30d7\u30ea\u5185\u5171\u901a\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",level:3}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u5b9a\u7fa9"},"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u5b9a\u7fa9"),(0,a.kt)("p",null,"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u306f\u4ee5\u4e0b\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6a5f\u80fd\u5185\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u306e\u6a5f\u80fd\u5185\u306b\u304a\u3044\u3066\u5171\u6709\u3055\u308c\u308b\u30c7\u30fc\u30bf\u3084\u72b6\u614b\u3092\u7ba1\u7406\u3059\u308b\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"),(0,a.kt)("li",{parentName:"ul"},"\u4f8b\uff1a \u8907\u6570\u306e\u753b\u9762\u306b\u307e\u305f\u304c\u3063\u3066\u9806\u6b21\u5fc5\u8981\u4e8b\u9805\u3092\u5165\u529b\u3059\u308b\u3001\u30a6\u30a3\u30b6\u30fc\u30c9\u578b\u5165\u529b\u306b\u304a\u3051\u308b\u5165\u529b\u4e2d\u306e\u4e00\u6642\u30c7\u30fc\u30bf\u7ba1\u7406"))),(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u5185\u5171\u901a\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u5168\u4f53\u304b\u3089\u53c2\u7167\u3055\u308c\u308b\u30c7\u30fc\u30bf\u3084\u72b6\u614b\u3092\u7ba1\u7406\u3059\u308b\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"),(0,a.kt)("li",{parentName:"ul"},"\u4f8b\uff1a \u73fe\u5728\u306e\u8a8d\u8a3c\u72b6\u614b\u3084\u3001\u8a8d\u8a3c\u6642\u306b\u53d6\u5f97\u3057\u305f\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3084\u30e6\u30fc\u30b6\u60c5\u5831\u306e\u7ba1\u7406"),(0,a.kt)("li",{parentName:"ul"},"\u4f8b\uff1a \u73fe\u5728\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u8868\u793a\u8a00\u8a9e\u3001\u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u3001\u30ab\u30e9\u30fc\u30c6\u30fc\u30de\u306e\u7ba1\u7406")))),(0,a.kt)("h2",{id:"\u3053\u306e\u30a2\u30d7\u30ea\u306b\u304a\u3051\u308b\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4e00\u89a7"},"\u3053\u306e\u30a2\u30d7\u30ea\u306b\u304a\u3051\u308b\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4e00\u89a7"),(0,a.kt)("h3",{id:"\u6a5f\u80fd\u5185\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"},"\u6a5f\u80fd\u5185\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"),(0,a.kt)("p",null,"\u4eca\u56de\u306e\u30a2\u30d7\u30ea\u306e\u6a5f\u80fd\u306e\u7bc4\u56f2\u3067\u306f\u8a72\u5f53\u3059\u308b\u3082\u306e\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)("h3",{id:"\u30a2\u30d7\u30ea\u5185\u5171\u901a\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"},"\u30a2\u30d7\u30ea\u5185\u5171\u901a\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/design/context/theme"},"\u30c6\u30fc\u30de\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"))))}s.isMDXComponent=!0}}]);