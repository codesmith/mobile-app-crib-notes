"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1151],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(r),m=a,f=g["".concat(c,".").concat(m)]||g[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9298:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return g}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],l={title:"\u30ed\u30b0\u51fa\u529b"},c=void 0,p={unversionedId:"react-native/santoku/application-architecture/logging-app/logging",id:"react-native/santoku/application-architecture/logging-app/logging",isDocsHomePage:!1,title:"\u30ed\u30b0\u51fa\u529b",description:"\u30ed\u30b0\u51fa\u529b\u306f\u3001\u4ee5\u4e0b\u306e\u30af\u30e9\u30b9\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/logging-app/logging.mdx",sourceDirName:"react-native/santoku/application-architecture/logging-app",slug:"/react-native/santoku/application-architecture/logging-app/logging",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/logging-app/logging",tags:[],version:"current",lastUpdatedAt:1635758492,formattedLastUpdatedAt:"2021/11/1",frontMatter:{title:"\u30ed\u30b0\u51fa\u529b"},sidebar:"santoku",previous:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/logging-app/overview"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/overview"}},s=[{value:"\u30ed\u30b0\u30ec\u30d9\u30eb\u306b\u3088\u308b\u30ed\u30b0\u306e\u632f\u308a\u5206\u3051",id:"\u30ed\u30b0\u30ec\u30d9\u30eb\u306b\u3088\u308b\u30ed\u30b0\u306e\u632f\u308a\u5206\u3051",children:[],level:2},{value:"\u30ed\u30b0\u51fa\u529b\u5148\u306e\u6307\u5b9a",id:"\u30ed\u30b0\u51fa\u529b\u5148\u306e\u6307\u5b9a",children:[{value:"Firebase Crashlytics\u306b\u3064\u3044\u3066",id:"firebase-crashlytics\u306b\u3064\u3044\u3066",children:[],level:3}],level:2},{value:"\u30ed\u30b0\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",id:"\u30ed\u30b0\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",children:[],level:2}],u={toc:s};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u30ed\u30b0\u51fa\u529b\u306f\u3001\u4ee5\u4e0b\u306e\u30af\u30e9\u30b9\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Logger ... \u30ed\u30b0\u3092\u51fa\u529b\u3059\u308bAPI\u3092\u63d0\u4f9b\u3059\u308b\u30af\u30e9\u30b9\u3067\u3059\u3002",(0,o.kt)("inlineCode",{parentName:"li"},"LogFormatter"),"\u3068",(0,o.kt)("inlineCode",{parentName:"li"},"Transport"),"\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u751f\u6210\u6642\u306b\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"LogFormatter ... \u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u51fa\u529b\u3059\u308b\u969b\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u8868\u3059\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3067\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"Transport ... \u30ed\u30b0\u306e\u51fa\u529b\u5148\u3092\u8868\u3059\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3067\u3059\u3002\u30b3\u30f3\u30bd\u30fc\u30eb\u3084Firebase Crashlytics\u3092\u51fa\u529b\u5148\u3068\u3057\u305f\u5b9f\u88c5\u3092\u7528\u610f\u3057\u307e\u3059\u3002")),(0,o.kt)("p",null,"\u30ed\u30b0\u51fa\u529b\u3067\u63d0\u4f9b\u3055\u308c\u308b\u6a5f\u80fd\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u30ed\u30b0\u30ec\u30d9\u30eb\u306b\u3088\u308b\u30ed\u30b0\u306e\u632f\u308a\u5206\u3051"},"\u30ed\u30b0\u30ec\u30d9\u30eb\u306b\u3088\u308b\u30ed\u30b0\u306e\u632f\u308a\u5206\u3051"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u306e\u30ed\u30b0\u306e\u30ec\u30d9\u30eb\u3092\u6307\u5b9a\u3057\u3066\u51fa\u529b\u3092\u632f\u308a\u5206\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30c8\u30ec\u30fc\u30b9"),(0,o.kt)("li",{parentName:"ul"},"\u30c7\u30d0\u30c3\u30b0"),(0,o.kt)("li",{parentName:"ul"},"\u60c5\u5831"),(0,o.kt)("li",{parentName:"ul"},"\u8b66\u544a"),(0,o.kt)("li",{parentName:"ul"},"\u30a8\u30e9\u30fc")),(0,o.kt)("p",null,"\u30ed\u30b0\u30ec\u30d9\u30eb\u306b\u306f\u4e0a\u8a18\u306e\u7b87\u6761\u66f8\u304d\u306e\u8a18\u8f09\u901a\u308a\u306b\u9806\u5e8f\u304c\u3042\u308a\u3001\u30ed\u30ac\u30fc\u306b\u8a2d\u5b9a\u3057\u305f\u30ed\u30b0\u30ec\u30d9\u30eb\u3088\u308a\u3001\u540c\u3058\u304b\u4e0b\u306e\u30ec\u30d9\u30eb\u304c\u30ed\u30b0\u3068\u3057\u3066\u51fa\u529b\u3055\u308c\u307e\u3059\u3002\n\u4f8b\u3048\u3070\u3001\u30ed\u30ac\u30fc\u306e\u30ed\u30b0\u30ec\u30d9\u30eb\u306b\u30c8\u30ec\u30fc\u30b9\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u3059\u3079\u3066\u306e\u30ed\u30b0\u30ec\u30d9\u30eb\u304c\u51fa\u529b\u3055\u308c\u307e\u3059\u3002\n\u30ed\u30b0\u30ec\u30d9\u30eb\u306b\u8b66\u544a\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u8b66\u544a\u3068\u30a8\u30e9\u30fc\u306e\u307f\u304c\u51fa\u529b\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u30a8\u30e9\u30fc\u51fa\u529b\u306b\u306f\u30a8\u30e9\u30fc\u30b3\u30fc\u30c9\u306e\u6307\u5b9a\u3092\u5fc5\u9808\u3068\u3057\u3066\u3044\u307e\u3059\u3002\u6307\u5b9a\u3057\u305f\u30a8\u30e9\u30fc\u30b3\u30fc\u30c9\u6bce\u306b\u30af\u30e9\u30c3\u30b7\u30e5\u30ec\u30dd\u30fc\u30c8\u304c\u30b0\u30eb\u30fc\u30d4\u30f3\u30b0\u3055\u308c\u3066Firebase\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u30a8\u30e9\u30fc\u306e\u554f\u984c\u7a76\u660e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u30ed\u30b0\u51fa\u529b\u5148\u306e\u6307\u5b9a"},"\u30ed\u30b0\u51fa\u529b\u5148\u306e\u6307\u5b9a"),(0,o.kt)("p",null,"\u30ed\u30b0\u306e\u51fa\u529b\u51e6\u7406\u306f\u3001\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u3067\u884c\u308f\u308c\u307e\u3059\u3002\n\u30ed\u30ac\u30fc\u306e\u521d\u671f\u5316\u3067\u8907\u6570\u306e\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u8907\u6570\u306e\u51fa\u529b\u5148\u306b\u51fa\u529b\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"  import { createLogger } from 'framework'\n  import { SimpleLogFormatter, ConsoleTransport, FirebaseCrashlyticsTransport} from 'framework/Logger'\n  // ...\n  const formatter = new SimpleLogFormatter();\n  const consoleTransport = new ConsoleTransport();\n  const firebaseCrashlyticsTransport = new FirebaseCrashlyticsTransport();\n  // \u521d\u671f\u5316\u6642\u306b\u3001\u30b3\u30f3\u30bd\u30fc\u30eb\u51fa\u529b\u3068Firebase Crashlytics\u51fa\u529b\u3059\u308b\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u3092\u6e21\u3059\u4f8b\n  const log = createLogger({level: 'trace', formatter: formatter, transports: [consoleTransport, firebaseCrashlyticsTransport]});\n")),(0,o.kt)("h3",{id:"firebase-crashlytics\u306b\u3064\u3044\u3066"},"Firebase Crashlytics\u306b\u3064\u3044\u3066"),(0,o.kt)("p",null,"\u30a2\u30d7\u30ea\u306e\u30af\u30e9\u30c3\u30b7\u30e5\u306e\u539f\u56e0\u7a76\u660e\u306f\u3001\u30ed\u30b0\u304c\u6b8b\u3063\u3066\u3044\u306a\u3044\u3068\u56f0\u96e3\u306b\u306a\u308a\u5f97\u307e\u3059\u3002\nFirebaseCrashlyticsTransport\u3067\u306f\u3001\u30af\u30e9\u30c3\u30b7\u30e5\u767a\u751f\u524d\u306e\u30a8\u30e9\u30fc\u60c5\u5831\u3092\u53ce\u96c6\u3067\u304d\u307e\u3059\u3002\n\u30af\u30e9\u30c3\u30b7\u30e5\u767a\u751f\u5f8c\u306e\u6b21\u306e\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306b\u30a8\u30e9\u30fc\u306e\u30ed\u30b0\u51fa\u529b\u60c5\u5831\u3092Firebase Crashlytics\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"Firebase Crashlytics\u306e\u8a2d\u5b9a\u306b\u3064\u3044\u3066\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"../error-handling/how-to-handle-error#firebase-crashlytics%E3%81%AE%E8%A8%AD%E5%AE%9A"},"Firebase Crashlytics\u306e\u8a2d\u5b9a"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("h2",{id:"\u30ed\u30b0\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"},"\u30ed\u30b0\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),(0,o.kt)("p",null,"\u30ed\u30ac\u30fc\u306f\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u3092\u95a2\u9023\u3065\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u3067\u306f\u3001\u51fa\u529b\u3059\u308b\u5185\u5bb9\u3092\u30e9\u30d9\u30eb\u3092\u3064\u3051\u305f\u308a\u65e5\u6642\u3092\u3064\u3051\u305f\u308a\u52a0\u5de5\u3067\u304d\u307e\u3059\u3002\nSimpleLogFormatter\u3067\u306f\u4ee5\u4e0b\u306e\u5185\u5bb9\u304c\u51fa\u529b\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u51fa\u529b\u4f8b","\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u51fa\u529b\u4f8b":!0},'  // Error\u4ee5\u5916\u306e\u5834\u5408\n  //  [\uff1c\u30ed\u30b0\u30ec\u30d9\u30eb\uff1e] \uff1c\u30ed\u30b0\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u5bb9\uff1e\n  log.info("\u30ed\u30fc\u30c9\u51e6\u7406\u5b8c\u4e86")\n  //  -> "[info] \u30ed\u30fc\u30c9\u51e6\u7406\u5b8c\u4e86"\n\n  // Error\u306e\u5834\u5408\n  //   [\uff1c\u30ed\u30b0\u30ec\u30d9\u30eb\uff1e] [\uff1c\u6307\u5b9a\u3057\u305f\u30a8\u30e9\u30fc\u30b3\u30fc\u30c9\uff1e] \uff1c\u30ed\u30b0\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u5bb9\uff1e\n  try {\n    /* \u4e2d\u7565 */\n  } catch {\n    log.error("xxx\u51e6\u7406\u4f8b\u5916", "E001XXX")\n    //  -> "[error] [E001XXX] xxx\u51e6\u7406\u4f8b\u5916"\n    /* \u4e2d\u7565 */\n  }\n')))}g.isMDXComponent=!0}}]);