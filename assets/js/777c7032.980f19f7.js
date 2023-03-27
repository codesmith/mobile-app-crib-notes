"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[9492],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73876:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u6f14\u7fd2\u8ab2\u984c"},i=void 0,p={unversionedId:"react-native/learn/todo-app/screens/exercise",id:"react-native/learn/todo-app/screens/exercise",title:"\u6f14\u7fd2\u8ab2\u984c",description:"\u3053\u3053\u307e\u3067\u51fa\u6765\u305f\u3089\u3001\u6b21\u306e\u6f14\u7fd2\u8ab2\u984c\u306b\u30c1\u30e3\u30ec\u30f3\u30b8\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/docs/react-native/learn/todo-app/screens/exercise.mdx",sourceDirName:"react-native/learn/todo-app/screens",slug:"/react-native/learn/todo-app/screens/exercise",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/exercise",draft:!1,tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021\u5e747\u67089\u65e5",frontMatter:{title:"\u6f14\u7fd2\u8ab2\u984c"},sidebar:"learn",previous:{title:"ToDo\u66f4\u65b0\u4e2d\u306e\u8868\u793a",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/activity-indicator-each-todo"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/"}},c={},l=[{value:"\u30e6\u30fc\u30b6\u767b\u9332\u753b\u9762\u306e\u4f5c\u6210",id:"\u30e6\u30fc\u30b6\u767b\u9332\u753b\u9762\u306e\u4f5c\u6210",level:2},{value:"ToDo\u306e\u524a\u9664",id:"todo\u306e\u524a\u9664",level:2}],s={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u3053\u3053\u307e\u3067\u51fa\u6765\u305f\u3089\u3001\u6b21\u306e\u6f14\u7fd2\u8ab2\u984c\u306b\u30c1\u30e3\u30ec\u30f3\u30b8\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u30b5\u30f3\u30d7\u30eb\u304a\u3088\u3073\u30ac\u30a4\u30c9\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u4eca\u307e\u3067\u306e\u5b9f\u88c5\u3092\u30d2\u30f3\u30c8\u306b\u3067\u304d\u308b\u306f\u305a\u3067\u3059\u3002"),(0,a.kt)("h2",{id:"\u30e6\u30fc\u30b6\u767b\u9332\u753b\u9762\u306e\u4f5c\u6210"},"\u30e6\u30fc\u30b6\u767b\u9332\u753b\u9762\u306e\u4f5c\u6210"),(0,a.kt)("p",null,"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u53c2\u8003\u306b\u3001\u30e6\u30fc\u30b6\u767b\u9332\u753b\u9762\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u305d\u306e\u969b\u3001\u30e6\u30fc\u30b6\u767b\u9332\u753b\u9762\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u306f4\u6841\u4ee5\u4e0a\u304c\u5fc5\u8981\u3068\u3044\u3046\u30c1\u30a7\u30c3\u30af\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/learn/todo-app/app-spec#%E3%83%A6%E3%83%BC%E3%82%B6%E7%99%BB%E9%8C%B2"},"\u30e6\u30fc\u30b6\u767b\u9332\u753b\u9762"))),(0,a.kt)("h2",{id:"todo\u306e\u524a\u9664"},"ToDo\u306e\u524a\u9664"),(0,a.kt)("p",null,"ToDo\u306e\u524a\u9664\u6a5f\u80fd\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"ToDo\u4e00\u89a7\u753b\u9762\u306b\u524a\u9664\u30dc\u30bf\u30f3\u3092\u8ffd\u52a0\u3059\u308b\u65b9\u6cd5\u304c\u7c21\u5358\u3067\u3059\u3002\n\u305d\u306e\u5834\u5408\u3001",(0,a.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/alert"},"\u78ba\u8a8d\u30c0\u30a4\u30a2\u30ed\u30b0"),"\u3068\u306e\u7d44\u307f\u5408\u308f\u305b\u3067\u8003\u3048\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002\n\u3082\u3061\u308d\u3093\u3001\u9055\u3063\u305f\u5f62\u3067\u5b9f\u88c5\u3057\u3066\u3082\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"ToDo\u306e\u524a\u9664API\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"TodosApi.deleteTodo"),"\uff09\u306f",(0,a.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/generate-api-client"},"API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u4f5c\u6210"),"\u3067\u751f\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002")))}d.isMDXComponent=!0}}]);