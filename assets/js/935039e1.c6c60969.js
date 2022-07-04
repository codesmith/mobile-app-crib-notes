"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8453],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),s=d(t),c=i,u=s["".concat(o,".").concat(c)]||s[c]||k[c]||p;return t?a.createElement(u,l(l({ref:n},m),{},{components:t})):a.createElement(u,l({ref:n},m))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,l=new Array(p);l[0]=s;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var d=2;d<p;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7542:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const p={title:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u7ba1\u7406"},l=void 0,r={unversionedId:"react-native/santoku/development/dependency-management",id:"react-native/santoku/development/dependency-management",title:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u7ba1\u7406",description:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u8ffd\u52a0",source:"@site/docs/react-native/santoku/development/dependency-management.md",sourceDirName:"react-native/santoku/development",slug:"/react-native/santoku/development/dependency-management",permalink:"/mobile-app-crib-notes/react-native/santoku/development/dependency-management",draft:!1,tags:[],version:"current",lastUpdatedAt:1631179014,formattedLastUpdatedAt:"2021/9/9",frontMatter:{title:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u7ba1\u7406"},sidebar:"santoku",previous:{title:"Flipper",permalink:"/mobile-app-crib-notes/react-native/santoku/development/tools/flipper"},next:{title:"Glossary",permalink:"/mobile-app-crib-notes/react-native/santoku/glossary"}},o={},d=[{value:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u8ffd\u52a0",id:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u8ffd\u52a0",level:2},{value:"<code>package.json</code>\u3068<code>Podfile.lock</code>\u3078\u306e\u8ffd\u52a0",id:"packagejson\u3068podfilelock\u3078\u306e\u8ffd\u52a0",level:3},{value:"Renovate\u306e\u8a2d\u5b9a\u3092\u8ffd\u52a0",id:"renovate\u306e\u8a2d\u5b9a\u3092\u8ffd\u52a0",level:3},{value:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u5206\u985e\u3068\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2",id:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u5206\u985e\u3068\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2",level:2},{value:"expo upgrade\u306b\u542b\u307e\u308c\u308b\u30d1\u30c3\u30b1\u30fc\u30b8",id:"expo-upgrade\u306b\u542b\u307e\u308c\u308b\u30d1\u30c3\u30b1\u30fc\u30b8",level:3},{value:"expo upgrade\u306b\u542b\u307e\u308c\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3078\u306e\u4f9d\u5b58\u304c\u3042\u308b\u30d1\u30c3\u30b1\u30fc\u30b8",id:"expo-upgrade\u306b\u542b\u307e\u308c\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3078\u306e\u4f9d\u5b58\u304c\u3042\u308b\u30d1\u30c3\u30b1\u30fc\u30b8",level:3},{value:"Expo\u3068\u95a2\u9023\u304c\u306a\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\uff08\u4e0a\u8a18\u306b\u8a72\u5f53\u3057\u306a\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\uff09",id:"expo\u3068\u95a2\u9023\u304c\u306a\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u4e0a\u8a18\u306b\u8a72\u5f53\u3057\u306a\u3044\u30d1\u30c3\u30b1\u30fc\u30b8",level:3},{value:"<code>@types</code>\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u3064\u3044\u3066",id:"types\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u3064\u3044\u3066",level:3},{value:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8",id:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8",level:2},{value:"\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u5185\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8",id:"\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u5185\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8",level:3},{value:"\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u5916\u3078\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8",id:"\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u5916\u3078\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8",level:3},{value:"Expo\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8",id:"expo\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8",level:3}],m={toc:d};function k(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u8ffd\u52a0"},"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u8ffd\u52a0"),(0,i.kt)("h3",{id:"packagejson\u3068podfilelock\u3078\u306e\u8ffd\u52a0"},(0,i.kt)("inlineCode",{parentName:"h3"},"package.json"),"\u3068",(0,i.kt)("inlineCode",{parentName:"h3"},"Podfile.lock"),"\u3078\u306e\u8ffd\u52a0"),(0,i.kt)("p",null,"\u6b21\u306e2\u3064\u306e\u30b3\u30de\u30f3\u30c9\u3092\u30bb\u30c3\u30c8\u3067\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expo install <package-name>"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"devDependencies"),"\u306b\u8ffd\u52a0\u3059\u308b\u5834\u5408\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"npm install -D <package-name>")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run pod-install"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"macOS\u3067\u306a\u3044\u3068",(0,i.kt)("inlineCode",{parentName:"p"},"pod-install"),"\u306f\u5b9f\u884c\u3067\u304d\u306a\u3044\u306e\u3067\u3001\u4f9d\u5b58\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u3067\u304d\u308b\u3060\u3051macOS\u3067\u8ffd\u52a0\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",{parentName:"div"},"\u305f\u3060\u3057\u3001Pod\u3092\u5229\u7528\u3057\u3066\u3044\u306a\u3044\u3068\u308f\u304b\u3063\u3066\u3044\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u8ffd\u52a0\u3059\u308b\u306e\u3067\u3042\u308c\u3070\u3001macOS\u3067\u306a\u304f\u3066\u3082\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002"))),(0,i.kt)("p",null,"Expo\u306fReact\u306a\u3069\u4e00\u90e8\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u3064\u3044\u3066\u3001\u5229\u7528\u3067\u304d\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u7ba1\u7406\u3057\u3066\u3044\u307e\u3059\u3002\u305d\u3046\u3044\u3063\u305f\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u3064\u3044\u3066\u306f\u3001\u500b\u5225\u306b\u81ea\u5206\u305f\u3061\u3067\u4f9d\u5b58\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u7ba1\u7406\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"expo install"),"\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308c\u3070\u3001\u9069\u5207\u306a\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u4e00\u65b9\u3067\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"npm install <package-name>"),"\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3060\u3051\u3067\u306f\u6b63\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u306a\u3044\u53ef\u80fd\u6027\u304c\u3042\u308b\u3068\u3044\u3046\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u306b\u8ffd\u52a0\u3059\u308b\u5834\u5408\u306f\u3001",(0,i.kt)("strong",{parentName:"p"},"\u5fc5\u305a",(0,i.kt)("inlineCode",{parentName:"strong"},"expo install"),"\u3067"),"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\u306b\u8ffd\u52a0\u3059\u308b\u5834\u5408\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"npm install -D"),"\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"renovate\u306e\u8a2d\u5b9a\u3092\u8ffd\u52a0"},"Renovate\u306e\u8a2d\u5b9a\u3092\u8ffd\u52a0"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#%E4%BE%9D%E5%AD%98%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%E3%81%AE%E5%88%86%E9%A1%9E%E3%81%A8%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E7%AF%84%E5%9B%B2"},"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u5206\u985e\u3068\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2"),"\u3092\u78ba\u8a8d\u3057\u3066\u3001\u8ffd\u52a0\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u9069\u5207\u306a\u5206\u985e\u306b\u3042\u3066\u306f\u3081\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"\u4ed6\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u307e\u3068\u3081\u3066\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b\u5fc5\u8981\u304c\u306a\u3051\u308c\u3070\u3001\u8a2d\u5b9a\u306e\u8ffd\u52a0\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"\u3067\u6307\u5b9a\u3059\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"~"),"\u3084",(0,i.kt)("inlineCode",{parentName:"p"},"^"),"\u306a\u3069\uff09\u306f\u3001\u8ffd\u52a0\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u7a2e\u985e\u306b\u5fdc\u3058\u3066\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h2",{id:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u5206\u985e\u3068\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2"},"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u5206\u985e\u3068\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2"),(0,i.kt)("p",null,"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u306b\u3042\u305f\u3063\u3066\u3001\u307e\u305a\u300c",(0,i.kt)("inlineCode",{parentName:"p"},"expo upgrade"),"\u306e\u5bfe\u8c61\u306b\u306a\u308b\u304b\u300d\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u305d\u306e\u3046\u3048\u3067\u3001\u6307\u5b9a\u3059\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u3092\u3069\u3046\u6307\u5b9a\u3059\u308b\u304b\u3092\u6c7a\u3081\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u6b21\u306e\u3088\u3046\u306b\u8a2d\u8a08\u3057\u3066\u3044\u307e\u3059\u3002\u5177\u4f53\u7684\u306a\u5206\u985e\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ws-4020/mobile-app-crib-notes/blob/master/.github/renovate.json5"},"renovate.json5"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h3",{id:"expo-upgrade\u306b\u542b\u307e\u308c\u308b\u30d1\u30c3\u30b1\u30fc\u30b8"},"expo upgrade\u306b\u542b\u307e\u308c\u308b\u30d1\u30c3\u30b1\u30fc\u30b8"),(0,i.kt)("p",null,"\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u306f ",(0,i.kt)("inlineCode",{parentName:"p"},"expo upgrade")," \u3067\u81ea\u52d5\u7684\u306b\u8a2d\u5b9a\u3055\u308c\u308b\u3082\u306e\u3092\u63a1\u7528\u3057\u307e\u3059\u3002\u3053\u3053\u306b\u8a72\u5f53\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"expo install"),"\u3068",(0,i.kt)("inlineCode",{parentName:"p"},"expo upgrade"),"\u3067\u8a2d\u5b9a\u3055\u308c\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u304b\u3089\u5909\u66f4\u3057\u307e\u305b\u3093\u3002"),(0,i.kt)("h3",{id:"expo-upgrade\u306b\u542b\u307e\u308c\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3078\u306e\u4f9d\u5b58\u304c\u3042\u308b\u30d1\u30c3\u30b1\u30fc\u30b8"},"expo upgrade\u306b\u542b\u307e\u308c\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3078\u306e\u4f9d\u5b58\u304c\u3042\u308b\u30d1\u30c3\u30b1\u30fc\u30b8"),(0,i.kt)("p",null,"\u4f9d\u5b58\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u3068\u6574\u5408\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u8a73\u7d30\u306f\u30d1\u30c3\u30b1\u30fc\u30b8\u3054\u3068\u306b\u691c\u8a0e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"expo\u3068\u95a2\u9023\u304c\u306a\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u4e0a\u8a18\u306b\u8a72\u5f53\u3057\u306a\u3044\u30d1\u30c3\u30b1\u30fc\u30b8"},"Expo\u3068\u95a2\u9023\u304c\u306a\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\uff08\u4e0a\u8a18\u306b\u8a72\u5f53\u3057\u306a\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\uff09"),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u5927\u304d\u304f3\u3064\u306b\u5206\u985e\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"React Navigation\u3001Docusaurus\u306a\u3069\u306e\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u307e\u3068\u3081\u3066\u7ba1\u7406\u3057\u305f\u3044\u30d1\u30c3\u30b1\u30fc\u30b8",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u307e\u3068\u3081\u3066\u7ba1\u7406\u3057\u305f\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u3054\u3068\u306b",(0,i.kt)("inlineCode",{parentName:"li"},"renovate.json5"),"\u3067\u30b0\u30eb\u30fc\u30d7\u3092\u5b9a\u7fa9"))),(0,i.kt)("li",{parentName:"ul"},"ESLint\u3084Prettier\u306a\u3069\u306e\u3001\u30c4\u30fc\u30eb\u7cfb\u30d1\u30c3\u30b1\u30fc\u30b8",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"renovate.json5"),"\u306e\u30c4\u30fc\u30eb\u7cfb\u30d1\u30c3\u30b1\u30fc\u30b8\u7528\u30b0\u30eb\u30fc\u30d7\u306b\u8ffd\u52a0"))),(0,i.kt)("li",{parentName:"ul"},"\u500b\u5225\u306b\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u7ba1\u7406\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u500b\u5225\u306b\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u7ba1\u7406\u3059\u308b\u5834\u5408\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"renovate.json5"),"\u3067\u306e\u8a2d\u5b9a\u306f\u4e0d\u8981")))),(0,i.kt)("p",null,"\u3053\u308c\u3089\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u3092\u6b21\u306e\u30eb\u30fc\u30eb\u3067\u8a2d\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dependencies"),": \u30d1\u30c3\u30c1\u30d0\u30fc\u30b8\u30e7\u30f3 (",(0,i.kt)("inlineCode",{parentName:"li"},"~1.1.0"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"devDependencies"),": \u30de\u30a4\u30ca\u30fc\u30d0\u30fc\u30b8\u30e7\u30f3 (",(0,i.kt)("inlineCode",{parentName:"li"},"^1.1.0"),")")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u306f\u3001\u30d1\u30c3\u30c1\u30d0\u30fc\u30b8\u30e7\u30f3\u307e\u3067\u306f",(0,i.kt)("a",{parentName:"p",href:"#%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E7%AF%84%E5%9B%B2%E5%86%85%E3%81%AE%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u5185\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8"),"\u3067\u307e\u3068\u3081\u3066\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3055\u308c\u307e\u3059\u3002\u30de\u30a4\u30ca\u30fc\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306b\u306f\u30d1\u30c3\u30b1\u30fc\u30b8\u3054\u3068\u306b",(0,i.kt)("a",{parentName:"p",href:"#%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E7%AF%84%E5%9B%B2%E5%A4%96%E3%81%B8%E3%81%AE%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u5916\u3078\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8"),"\u304c\u5fc5\u8981\u3067\u3059\u3002\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u3092\u5bb9\u6613\u306b\u3059\u308b\u305f\u3081\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\u306f\u30de\u30a4\u30ca\u30fc\u30d0\u30fc\u30b8\u30e7\u30f3\u307e\u3067\u306f",(0,i.kt)("a",{parentName:"p",href:"#%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E7%AF%84%E5%9B%B2%E5%86%85%E3%81%AE%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u5185\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8"),"\u3067\u307e\u3068\u3081\u3066\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"types\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u3064\u3044\u3066"},(0,i.kt)("inlineCode",{parentName:"h3"},"@types"),"\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u3064\u3044\u3066"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@types"),"\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u3092\u6307\u5b9a\u3059\u308b\u306e\u306f\u3068\u3066\u3082\u96e3\u3057\u3044\u3067\u3059\u3002\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u3067\u304d\u308b\u304b\u304e\u308a\u5143\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u7bc4\u56f2\u6307\u5b9a\u306b\u5408\u3046\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u5143\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u540c\u3058\u30d0\u30fc\u30b8\u30e7\u30f3\u3082\u3057\u304f\u306f\u3001\u3088\u308a\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"@types"),"\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u3042\u308b\u3068\u306f\u9650\u3089\u306a\u3044\u306e\u3067\u3001\u5143\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u540c\u3058\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u306f\u6307\u5b9a\u3067\u304d\u307e\u305b\u3093\u3002\u305f\u3068\u3048\u3070\u3001React\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"16.13.1"),"\u3060\u3068\u3057\u3066\u3082",(0,i.kt)("inlineCode",{parentName:"p"},"@types/react"),"\u306b\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"16.9.x"),"\u3057\u304b\u5b58\u5728\u3057\u306a\u3044\u305f\u3081\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"@types/react"),"\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u3057\u3066",(0,i.kt)("inlineCode",{parentName:"p"},"~16.13.1"),"\u306f\u6307\u5b9a\u3067\u304d\u307e\u305b\u3093\u3002"),(0,i.kt)("p",null,"\u3053\u306e\u3088\u3046\u306a\u3068\u304d\u306b\u3082\u3067\u304d\u308b\u3060\u3051\u9069\u5207\u306a\u30d0\u30fc\u30b8\u30e7\u30f3\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"@types"),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u305f\u3081\u306b\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"@types"),"\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u6307\u5b9a\u306b\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"^"),"\u3084",(0,i.kt)("inlineCode",{parentName:"p"},"~"),"\u3067\u306f\u306a\u304f\u3001\u4e0d\u7b49\u53f7\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"<"),"\uff09\u3092\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u3002\u306a\u304a\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"expo upgrade"),"\u306b\u542b\u307e\u308c\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u3053\u306e\u30eb\u30fc\u30eb\u306b\u306f\u542b\u3081\u307e\u305b\u3093\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f8b\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"jest"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u25b6 ",(0,i.kt)("inlineCode",{parentName:"li"},"jest-expo"),"\u3067\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"jest"),"\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092",(0,i.kt)("inlineCode",{parentName:"li"},"^25.2.0"),"\u3068\u6307\u5b9a\u3057\u3066\u3044\u308b\uff08",(0,i.kt)("inlineCode",{parentName:"li"},"expo 41.0.0"),"\u6642\u70b9\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u25b6 ",(0,i.kt)("inlineCode",{parentName:"li"},"@types/jest"),"\u306f\u30e1\u30b8\u30e3\u30fc\u30d0\u30fc\u30b8\u30e7\u30f3\u304c25\u306a\u3089\u554f\u984c\u306a\u3044\u3068\u3057\u3066\u3001",(0,i.kt)("inlineCode",{parentName:"li"},'"@types/jest": "<26.0.0"'),"\u3068\u6307\u5b9a\u3059\u308b"))),(0,i.kt)("li",{parentName:"ul"},"\u4f8b\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"react-test-renderer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u25b6 ",(0,i.kt)("inlineCode",{parentName:"li"},"jest-expo"),"\u3067\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"react-test-renderer"),"\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092",(0,i.kt)("inlineCode",{parentName:"li"},"~16.11.0"),"\u3068\u6307\u5b9a\u3057\u3066\u3044\u308b\uff08",(0,i.kt)("inlineCode",{parentName:"li"},"expo 41.0.0"),"\u6642\u70b9\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u25b6 ",(0,i.kt)("inlineCode",{parentName:"li"},"@types/react-test-renderer")," \u306f\u30d1\u30c3\u30c1\u30d0\u30fc\u30b8\u30e7\u30f3\u304c25\u306a\u3089\u554f\u984c\u306a\u3044\u3068\u3057\u3066\u3001 ",(0,i.kt)("inlineCode",{parentName:"li"},'"@types/react-test-renderer": "<16.12.0"')," \u3068\u6307\u5b9a\u3059\u308b")))),(0,i.kt)("h2",{id:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8"},"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"\u3067\u6307\u5b9a\u3057\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u5185\u3067\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u304b\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u5916\u3078\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u304b\u306b\u3088\u3063\u3066\u3001\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b\u624b\u9806\u304c\u7570\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u5185\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u5185\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8"),(0,i.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u500b\u5225\u306b\u306f\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u305b\u305a\u3001\u5168\u4f53\u3092\u307e\u3068\u3081\u3066\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3057\u307e\u3059\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"package-lock.json"),"\u3092\u524a\u9664\u3057\u3066",(0,i.kt)("inlineCode",{parentName:"p"},"npm install"),"\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://docs.renovatebot.com/configuration-options/#lockfilemaintenance"},"Renovate\u306elockFileMaintenance"),"\u3067\u81ea\u52d5\u7684\u306b\u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("p",null,"Pod\u3092\u542b\u3080\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3055\u308c\u305f\u5834\u5408\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"npm run pod-install"),"\u3092\u5b9f\u884c\u3057\u3066",(0,i.kt)("inlineCode",{parentName:"p"},"Podfile.lock"),"\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Windows\u3067\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u3068\u304d\u306b\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"fsevents"),"\u306a\u3069macOS\u306e\u307f\u3067\u5229\u7528\u3055\u308c\u308b\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u4f9d\u5b58\u95a2\u4fc2\u304c\u7834\u640d\u3057\u3066\u3057\u307e\u3046\u3053\u3068\u304c\u3042\u308b\u3088\u3046\u3067\u3059\u3002\u7834\u640d\u3057\u3066\u3057\u307e\u3063\u305f\u5834\u5408\u3001macOS\u3067",(0,i.kt)("inlineCode",{parentName:"p"},"npm ci"),"\u3092\u5b9f\u884c\u3059\u308b\u3068\u30a8\u30e9\u30fc\u306b\u306a\u3063\u3066\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u306a\u304f\u306a\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"div"},"\u3053\u306e\u3088\u3046\u306a\u554f\u984c\u304c\u3042\u3063\u305f\u305f\u3081\u3001\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306fmacOS\u3067\u5b9f\u65bd\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002"))),(0,i.kt)("h3",{id:"\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u5916\u3078\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u5916\u3078\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8"),(0,i.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u500b\u5225\u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3057\u307e\u3059\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"\u306b\u66f8\u304b\u308c\u3066\u3044\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u66f4\u65b0\u3057\u3066\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"npm install"),"\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"\u57fa\u672c\u7684\u306b\u306fRenovate\u3067\u81ea\u52d5\u7684\u306b\u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002\u305f\u3060\u3057\u3001Expo SDK\u306a\u3069Renovate\u5bfe\u8c61\u5916\u3068\u3057\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u3064\u3044\u3066\u306f\u3001\u624b\u52d5\u3067\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u4f5c\u696d\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,i.kt)("p",null,"Pod\u3092\u542b\u3080\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3055\u308c\u305f\u5834\u5408\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"npm run pod-install"),"\u3092\u5b9f\u884c\u3057\u3066",(0,i.kt)("inlineCode",{parentName:"p"},"Podfile.lock"),"\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"expo\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8"},"Expo\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8"),(0,i.kt)("p",null,"Expo\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306b\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"expo upgrade"),"\u30b3\u30de\u30f3\u30c9\u3092\u5229\u7528\u3057\u307e\u3059\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"expo upgrade"),"\u3067\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b\u3068",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"\u3068",(0,i.kt)("inlineCode",{parentName:"p"},"package-lock.json"),"\u304c\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u57fa\u672c\u7684\u306b\u306fPod\u3082\u66f4\u65b0\u3055\u308c\u308b\u306e\u3067\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"expo upgrade"),"\u3092\u5b9f\u884c\u3057\u305f\u5f8c\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"npm run pod-install"),"\u3092\u5b9f\u884c\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308bExpo\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u3088\u3063\u3066\u3001\u624b\u9806\u304c\u5909\u308f\u3063\u3066\u304f\u308b\u306e\u3067\u3001\u8a73\u7d30\u306f",(0,i.kt)("a",{parentName:"p",href:"https://blog.expo.dev/"},"\u516c\u5f0f"),"\u306b\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u5185\u5bb9\u3092\u53c2\u7167\u3057\u3066\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u5b9f\u884c\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}k.isMDXComponent=!0}}]);