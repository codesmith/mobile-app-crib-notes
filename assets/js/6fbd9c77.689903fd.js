"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[380],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=p(n),s=a,d=m["".concat(c,".").concat(s)]||m[s]||f[s]||o;return n?r.createElement(d,i(i({ref:e},u),{},{components:n})):r.createElement(d,i({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73575:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"\u30ed\u30b0\u30a2\u30a6\u30c8"},c=void 0,p={unversionedId:"react-native/santoku/application-architecture/auth/logout",id:"react-native/santoku/application-architecture/auth/logout",title:"\u30ed\u30b0\u30a2\u30a6\u30c8",description:"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001Cookie\u7d4c\u7531\u3067\u53d7\u3051\u6e21\u3059\u30bb\u30c3\u30b7\u30e7\u30f3ID\u306e\u7834\u68c4\u3068\u3001\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u30ed\u30b0\u30a4\u30f3\u4e2d\u306e\u30a2\u30ab\u30a6\u30f3\u30c8ID\u304a\u3088\u3073\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u7834\u68c4\u3059\u308b\u3053\u3068\u3067\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/auth/logout.mdx",sourceDirName:"react-native/santoku/application-architecture/auth",slug:"/react-native/santoku/application-architecture/auth/logout",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/logout",tags:[],version:"current",lastUpdatedAt:1641537001,formattedLastUpdatedAt:"2022/1/7",frontMatter:{title:"\u30ed\u30b0\u30a2\u30a6\u30c8"},sidebar:"santoku",previous:{title:"\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/login"},next:{title:"\u7aef\u672b\u8a8d\u8a3c",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/local-auth"}},u=[{value:"\u51e6\u7406\u30d5\u30ed\u30fc",id:"\u51e6\u7406\u30d5\u30ed\u30fc",children:[],level:2},{value:"\u5229\u7528\u65b9\u6cd5",id:"\u5229\u7528\u65b9\u6cd5",children:[],level:2}],f={toc:u};function m(t){var e=t.components,l=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001Cookie\u7d4c\u7531\u3067\u53d7\u3051\u6e21\u3059\u30bb\u30c3\u30b7\u30e7\u30f3ID\u306e\u7834\u68c4\u3068\u3001\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u30ed\u30b0\u30a4\u30f3\u4e2d\u306e\u30a2\u30ab\u30a6\u30f3\u30c8ID\u304a\u3088\u3073\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u7834\u68c4\u3059\u308b\u3053\u3068\u3067\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u306a\u304a\u3001\u533f\u540d\u30a2\u30ab\u30a6\u30f3\u30c8\u306f\u30ed\u30b0\u30a2\u30a6\u30c8\u3059\u308b\u3068\u518d\u30ed\u30b0\u30a4\u30f3\u51fa\u6765\u306a\u304f\u306a\u308b\u305f\u3081\u3001\u30ed\u30b0\u30a2\u30a6\u30c8\u64cd\u4f5c\u304c\u51fa\u6765\u307e\u305b\u3093\u3002"),(0,o.kt)("h2",{id:"\u51e6\u7406\u30d5\u30ed\u30fc"},"\u51e6\u7406\u30d5\u30ed\u30fc"),(0,o.kt)("p",null,"\u30ed\u30b0\u30a2\u30a6\u30c8\u306e\u51e6\u7406\u30d5\u30ed\u30fc\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u30ed\u30b0\u30a2\u30a6\u30c8\u306e\u51e6\u7406\u30d5\u30ed\u30fc",src:n(52563).Z})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"No"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u51e6\u7406"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u5185\u5bb9"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2460"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a2\u30a6\u30c8\u306e\u30ea\u30af\u30a8\u30b9\u30c8"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u306f\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306b\u30ed\u30b0\u30a2\u30a6\u30c8\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u308a\u307e\u3059\u3002\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3057\u3066\u3001\u7aef\u672b\u5185\u306b\u4fdd\u6301\u3055\u308c\u305fCookie\uff08\u30bb\u30c3\u30b7\u30e7\u30f3ID\uff09\u3092HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2461"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a2\u30a6\u30c8"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306f\u3001\u30ed\u30b0\u30a2\u30a6\u30c8\u51e6\u7406\uff08\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u7834\u68c4\uff09\u3092\u3057\u307e\u3059\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2462"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a2\u30a6\u30c8\u7d50\u679c\u306e\u8fd4\u5374"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306f\u30ed\u30b0\u30a2\u30a6\u30c8\u51e6\u7406\u306e\u7d50\u679c\u3092\u30a2\u30d7\u30ea\u306b\u8fd4\u5374\u3057\u307e\u3059\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2463"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7834\u68c4"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u306f\u3001\u30ed\u30b0\u30a4\u30f3\u4e2d\u306e\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u3057\u3066\u4fdd\u5b58\u3057\u3066\u3044\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u3001\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u7834\u68c4\u3057\u307e\u3059\u3002")))),(0,o.kt)("h2",{id:"\u5229\u7528\u65b9\u6cd5"},"\u5229\u7528\u65b9\u6cd5"),(0,o.kt)("p",null,"\u30ed\u30b0\u30a2\u30a6\u30c8\u306f",(0,o.kt)("inlineCode",{parentName:"p"},"AuthenticationService"),"\u306e",(0,o.kt)("inlineCode",{parentName:"p"},"logout"),"\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="\u30ed\u30b0\u30a2\u30a6\u30c8\u306e\u5229\u7528\u65b9\u6cd5"',title:'"\u30ed\u30b0\u30a2\u30a6\u30c8\u306e\u5229\u7528\u65b9\u6cd5"'},"import {AuthenticationService} from 'framework';\n\nconst logout = useCallback(async () => {\n  try {\n    await AuthenticationService.logout();\n  } catch (e) {\n    // \u30a8\u30e9\u30fc\u51e6\u7406\n  }\n}, []);\n")))}m.isMDXComponent=!0},52563:function(t,e,n){e.Z=n.p+"assets/images/auth-logout-flow.drawio-d1a9068dffdb3d9d8f73c8caf4f75fa0.png"}}]);