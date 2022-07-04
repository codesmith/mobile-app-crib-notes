"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7765],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),l=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),v=n,f=m["".concat(o,".").concat(v)]||m[v]||u[v]||p;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<p;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57693:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const p={title:"\u524d\u63d0\u77e5\u8b58"},i=void 0,c={unversionedId:"react-native/learn/basic-concepts/pre-requisites",id:"react-native/learn/basic-concepts/pre-requisites",title:"\u524d\u63d0\u77e5\u8b58",description:"React Native\u3092\u7528\u3044\u3066\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3059\u308b\u306b\u306f\u3001JavaScript\u3001TypeScript\u3001React\u306e\u77e5\u8b58\u304c\u5fc5\u8981\u3067\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/pre-requisites.md",sourceDirName:"react-native/learn/basic-concepts",slug:"/react-native/learn/basic-concepts/pre-requisites",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/pre-requisites",draft:!1,tags:[],version:"current",lastUpdatedAt:1633401581,formattedLastUpdatedAt:"2021/10/5",frontMatter:{title:"\u524d\u63d0\u77e5\u8b58"},sidebar:"learn",previous:{title:"\u76ee\u6b21",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics"}},o={},l=[{value:"\u53c2\u8003\u30b5\u30a4\u30c8",id:"\u53c2\u8003\u30b5\u30a4\u30c8",level:2},{value:"JavaScript Primer",id:"javascript-primer",level:3},{value:"\u30b5\u30d0\u30a4\u30d0\u30ebTypeScript",id:"\u30b5\u30d0\u30a4\u30d0\u30ebtypescript",level:3},{value:"React\u516c\u5f0f\u30b5\u30a4\u30c8",id:"react\u516c\u5f0f\u30b5\u30a4\u30c8",level:3}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"React Native\u3092\u7528\u3044\u3066\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3059\u308b\u306b\u306f\u3001JavaScript\u3001TypeScript\u3001React\u306e\u77e5\u8b58\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,n.kt)("p",null,"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u4f8b\u3084\u89e3\u8aac\u3092\u7406\u89e3\u3059\u308b\u305f\u3081\u306b\u53c2\u8003\u3068\u306a\u308b\u30b5\u30a4\u30c8\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002\n\u7528\u8a9e\u3084\u30b3\u30fc\u30c9\u4f8b\u3067\u308f\u304b\u3089\u306a\u3044\u3053\u3068\u304c\u3042\u308b\u3068\u304d\u306f\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,"JavaScript\u3084React\u306e\u77e5\u8b58\u304c\u306a\u3044\u65b9\u306f\u307e\u305a\u53c2\u8003\u30b5\u30a4\u30c8\u3067\u5b66\u7fd2\u3057\u3066\u304b\u3089ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u3092\u9032\u3081\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",{id:"\u53c2\u8003\u30b5\u30a4\u30c8"},"\u53c2\u8003\u30b5\u30a4\u30c8"),(0,n.kt)("h3",{id:"javascript-primer"},"JavaScript Primer"),(0,n.kt)("p",null,"React\u3092\u5b66\u3076\u306b\u306fJavaScript\u306e\u8a00\u8a9e\u77e5\u8b58\u304c\u5fc5\u9808\u3067\u3059\u3002 JavaScript\u3092\u89e6\u308c\u305f\u3053\u3068\u304c\u306a\u3044\u4eba\u306f\u3001\u307e\u305a\u306fJavaScript\u306e\u77e5\u8b58\u7fd2\u5f97\u304b\u3089\u304a\u9858\u3044\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://jsprimer.net/"},"JavaScript Primer"),"\u306f\u3001JavaScript\u306e\u6587\u6cd5\u3084\u6a5f\u80fd\u3092\u4e00\u304b\u3089\u5b66\u3079\u308b\u30b5\u30a4\u30c8\u3067\u3059\u3002\u300c\u7b2c\u4e00\u90e8\uff1a\u57fa\u672c\u6587\u6cd5\u300d\u307e\u3067\u306e\u77e5\u8b58\u304c\u3042\u308c\u3070\u3001\u3072\u3068\u307e\u305a\u5145\u5206\u3067\u3059\u3002",(0,n.kt)("a",{parentName:"p",href:"https://jsprimer.net/basic/"},"\u57fa\u672c\u6587\u6cd5\u306e\u76ee\u6b21"),"\u3092\u898b\u3066\u308f\u304b\u3089\u306a\u3044\u3053\u3068\u304c\u3042\u308c\u3070\u5b66\u7fd2\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h3",{id:"\u30b5\u30d0\u30a4\u30d0\u30ebtypescript"},"\u30b5\u30d0\u30a4\u30d0\u30ebTypeScript"),(0,n.kt)("p",null,"TypeScript\u306f\u3001JavaScript\u306b\u9759\u7684\u578b\u4ed8\u3051\u3092\u8ffd\u52a0\u3057\u305f\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u3067\u3059\u3002 JavaScript\u3068\u4e0a\u4f4d\u4e92\u63db\u6027\u304c\u3042\u308a\u3001\u9759\u7684\u578b\u4ed8\u3051\u306b\u3088\u308a\u30b3\u30fc\u30c9\u5b9f\u884c\u524d\u306b\u30a8\u30e9\u30fc\u3092\u691c\u51fa\u3067\u304d\u307e\u3059\u3002 \u305d\u306e\u6027\u8cea\u304b\u3089\u3001\u958b\u767a\u898f\u6a21\u304c\u5927\u304d\u304f\u306a\u308b\u307b\u3069\u305d\u306e\u52b9\u679c\u3092\u767a\u63ee\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://book.yyts.org/"},"\u30b5\u30d0\u30a4\u30d0\u30ebTypeScript"),"\u306f\u3001TypeScript\u3092\u6700\u77ed\u30eb\u30fc\u30c8\u3067\u5b9f\u52d9\u5229\u7528\u3067\u304d\u308b\u3053\u3068\u3092\u76ee\u6307\u3057\u305f\u30b5\u30a4\u30c8\u3067\u3059\u3002\u9759\u7684\u578b\u4ed8\u3051\u8a00\u8a9e\u3067\u306e\u5b9f\u88c5\u7d4c\u9a13\u304c\u3042\u308c\u3070\u3001",(0,n.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/todo-app"},"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5"),"\u306f\u9032\u3081\u3089\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u5b9f\u52d9\u30ec\u30d9\u30eb\u306b\u5fc5\u8981\u306a\u4e00\u901a\u308a\u306e\u77e5\u8b58\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u30b5\u30d0\u30a4\u30d0\u30ebTypeScript\u3067\u5b66\u7fd2\u3057\u307e\u3057\u3087\u3046\u3002",(0,n.kt)("a",{parentName:"p",href:"https://book.yyts.org/reference"},"\u8aad\u3093\u3067\u5b66\u3076TypeScript"),"\u306e\u898b\u51fa\u3057\u3092\u307f\u3066\u5185\u5bb9\u304c\u30a4\u30e1\u30fc\u30b8\u3067\u304d\u308c\u3070\u5927\u4e08\u592b\u3067\u3059\u3002"),(0,n.kt)("h3",{id:"react\u516c\u5f0f\u30b5\u30a4\u30c8"},"React\u516c\u5f0f\u30b5\u30a4\u30c8"),(0,n.kt)("p",null,"React\u3092\u5b66\u3076\u306b\u306f",(0,n.kt)("a",{parentName:"p",href:"https://ja.reactjs.org/"},"React\u516c\u5f0f\u30b5\u30a4\u30c8"),"\u304c\u4e00\u756a\u304a\u52e7\u3081\u3067\u3059\u3002"),(0,n.kt)("p",null,"React\u3092\u5229\u7528\u3057\u305f\u3053\u3068\u304c\u306a\u3044\u4eba\u306f\u300c\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u300d\u304b\u3089\u306f\u3058\u3081\u3066\u304f\u3060\u3055\u3044\u3002\u300cMAIN CONCEPTS\u300d\u300cADVANCED GUIDES\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u300d\u300cHOOKS\u300d\u306e\u5185\u5bb9\u304c\u7406\u89e3\u3067\u304d\u3066\u3044\u308c\u3070\u3001\u6700\u4f4e\u9650\u306eReact\u306e\u77e5\u8b58\u304c\u8eab\u306b\u4ed8\u3044\u3066\u3044\u307e\u3059\u3002\u308f\u304b\u3089\u306a\u3044\u7b87\u6240\u304c\u3042\u308c\u3070\u5b66\u7fd2\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ja.reactjs.org/tutorial/tutorial.html"},"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ja.reactjs.org/docs/hello-world.html"},"MAIN CONCEPTS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ja.reactjs.org/docs/context.html"},"ADVANCED GUIDES\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ja.reactjs.org/docs/hooks-intro.html"},"HOOKS"))))}u.isMDXComponent=!0}}]);