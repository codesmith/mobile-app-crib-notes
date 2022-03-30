"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3811],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return v}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=m(n),v=r,u=d["".concat(c,".").concat(v)]||d[v]||s[v]||i;return n?a.createElement(u,o(o({ref:t},l),{},{components:n})):a.createElement(u,o({ref:t},l))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32667:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return s}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],p={title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"},c=void 0,m={unversionedId:"react-native/learn/getting-started/create-project",id:"react-native/learn/getting-started/create-project",title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",description:"React Native\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",source:"@site/docs/react-native/learn/getting-started/create-project.md",sourceDirName:"react-native/learn/getting-started",slug:"/react-native/learn/getting-started/create-project",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/create-project",tags:[],version:"current",lastUpdatedAt:1638840443,formattedLastUpdatedAt:"2021/12/7",frontMatter:{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"},sidebar:"learn",previous:{title:"\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/setting-up-development-environment"},next:{title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/launch-created-app"}},l={},s=[{value:"React Native\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",id:"react-native\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",level:2}],d={toc:s};function v(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"react-native\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"},"React Native\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/basic-concepts"},"\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3059\u308b\u524d\u306b"),"\u3067\u7d39\u4ecb\u3057\u3066\u3044\u308b\u30b3\u30fc\u30c9\u3092\u7c21\u5358\u306b\u52d5\u304b\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3053\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u306f",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/"},"React Navigation"),"\u3084",(0,i.kt)("a",{parentName:"p",href:"https://reactnativeelements.com/"},"React Native Elements"),"\u306a\u3069\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7c21\u5358\u306b\u7528\u610f\u3067\u304d\u308b\u3088\u3046\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ws-4020/rn-spoiler"},"RN Spoiler"),"\u3068\u3044\u3046\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3001\u65b0\u898f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"<YourAppName>"),"\u306e\u90e8\u5206\u306f\u3001\u597d\u307f\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d\u306b\u5909\u66f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u5f8c\u307b\u3069",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/todo-app"},"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5"),"\u3067\u4f7f\u7528\u3057\u307e\u3059\uff09"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d\u306b\u306f\u3001\u3054\u304f\u4e00\u90e8\u3092\u9664\u3044\u3066\u8a18\u53f7\u306f\u5229\u7528\u3067\u304d\u307e\u305b\u3093\u3002\u30a2\u30eb\u30d5\u30a1\u30d9\u30c3\u30c8\u304b\u3089\u59cb\u307e\u308a\u3001\u82f1\u6570\u5b57\u306e\u307f\u3067\u69cb\u6210\u3055\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d\u3068\u3059\u308b\u3053\u3068\u3092\u304a\u3059\u3059\u3081\u3057\u307e\u3059\u3002"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u304c\u7d42\u308f\u3063\u305f\u3089",(0,i.kt)("inlineCode",{parentName:"p"},"git"),"\u3067\u5909\u66f4\u5c65\u6b74\u3092\u7ba1\u7406\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u3066\u304a\u304f\u3068\u4fbf\u5229\u3067\u3059\u3002\uff08\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u305f\u6642\u70b9\u3067",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore"),"\u3082\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u4e0d\u8981\u306a\u30d5\u30a1\u30a4\u30eb\u306f\u7ba1\u7406\u5bfe\u8c61\u5916\u306b\u306a\u3063\u3066\u3044\u307e\u3059\uff09"),(0,i.kt)("p",{parentName:"div"},"\u52d5\u4f5c\u78ba\u8a8d\u3057\u305f\u5f8c\u306a\u3069\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"git commit"),"\u3067\u5185\u5bb9\u3092\u4fdd\u5b58\u3057\u306a\u304c\u3089\u5b66\u7fd2\u3092\u9032\u3081\u3066\u3044\u304f\u3068\u3001\u4fee\u6b63\u5185\u5bb9\u3084\u300c\u52d5\u304b\u306a\u304f\u306a\u3063\u3066\u3057\u307e\u3063\u305f\u300d\u3068\u304d\u306e\u5dee\u5206\u78ba\u8a8d\u306b\u4fbf\u5229\u3067\u3059\u3002"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx react-native init --npm --template https://github.com/ws-4020/rn-spoiler#v2021.12.0 <YourAppName>\n")),(0,i.kt)("p",null,"RN Spoiler\u306f\u3001Expo\u306e",(0,i.kt)("a",{parentName:"p",href:"https://github.com/expo/expo/tree/master/templates"},"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"),"\u3092\u30d9\u30fc\u30b9\u306b\u3057\u3066\u3044\u308b\u306e\u3067\u3001\u3053\u306e\u3042\u3068\u306e",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/getting-started/launch-created-app"},"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c"),"\u3067\u7d39\u4ecb\u3057\u3066\u3044\u308bExpo Go\u3067\u52d5\u4f5c\u3057\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),"\u3067\u306f\u306a\u304f",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn"),"\u3092\u5229\u7528\u3057\u305f\u3044\u5834\u5408\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"--npm"),"\u3068\u3044\u3046\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u524a\u9664\u3057\u3066\u304f\u3060\u3055\u3044\u3002Yarn\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001Yarn\u3092\u5229\u7528\u3057\u3066\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx react-native init --template https://github.com/ws-4020/rn-spoiler#v2021.12.0 <YourAppName>\n")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u521d\u3081\u3066",(0,i.kt)("inlineCode",{parentName:"p"},"npx react-native init ..."),"\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306b\u4e0d\u8db3\u3057\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u304b\u3068\u805e\u304b\u308c\u307e\u3059\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"react-native"),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308c\u3070\u554f\u984c\u306a\u3044\u306e\u3067\u3001\u30a8\u30f3\u30bf\u30fc\u30ad\u30fc\u3092\u62bc\u3057\u3066\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"Need to install the following packages:\n  react-native\nOk to proceed? (y)\n")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"RN Spoiler\u3092\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3068\u3057\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u305f\u3068\u304d\u306b\u3001\u6b21\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u3067\u7570\u5e38\u7d42\u4e86\u3057\u3066\u3057\u307e\u3046\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},'npm ERR! code ERESOLVE\nnpm ERR! ERESOLVE unable to resolve dependency tree\nnpm ERR!\nnpm ERR! While resolving: undefined@undefined\nnpm ERR! Found: @babel/core@7.9.6\nnpm ERR! node_modules/@babel/core\nnpm ERR!   dev @babel/core@"~7.9.0" from the root project\nnpm ERR!\nnpm ERR! Could not resolve dependency:\nnpm ERR! peerOptional @babel/core@">=7.11.0" from eslint-config-universe@7.0.1\nnpm ERR! node_modules/eslint-config-universe\nnpm ERR!   dev eslint-config-universe@"^7.0.0" from the root project\nnpm ERR!\nnpm ERR! Fix the upstream dependency conflict, or retry\nnpm ERR! this command with --force, or --legacy-peer-deps\nnpm ERR! to accept an incorrect (and potentially broken) dependency resolution.\n')),(0,i.kt)("p",{parentName:"div"},"\u65b0\u898f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u4e2d\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306f\u6b21\u306e\u624b\u9806\u3067\u30ea\u30ab\u30d0\u30ea\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"cd <YourAppName>"),"\uff08",(0,i.kt)("inlineCode",{parentName:"li"},"<YourAppName>"),"\u306f\u5b9f\u969b\u306b\u4f5c\u6210\u3057\u305f\u3068\u304d\u306e\u5024\u306b\u5909\u66f4\u3057\u3066\u304f\u3060\u3055\u3044\uff09"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"npm install --legacy-peer-deps")),(0,i.kt)("li",{parentName:"ol"},"\uff08macOS\u306e\u5834\u5408\u306e\u307f\uff09",(0,i.kt)("inlineCode",{parentName:"li"},"npx pod-install"))))))}v.isMDXComponent=!0}}]);