"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1730],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,f=d["".concat(c,".").concat(b)]||d[b]||u[b]||i;return r?a.createElement(f,l(l({ref:t},s),{},{components:r})):a.createElement(f,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1554:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l=["components"],o={title:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",sidebar_label:"\u6982\u8981"},c=void 0,p={unversionedId:"react-native/santoku/application-architecture/error-handling/overview",id:"react-native/santoku/application-architecture/error-handling/overview",title:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",description:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u3001\u30a8\u30e9\u30fc\u306e\u5185\u5bb9\u3068\u56de\u5fa9\u624b\u9806\u3092\u30e6\u30fc\u30b6\u306b\u4f1d\u3048\u308b\u4e8b\u304c\u5927\u5207\u3067\u3059\u3002\u4f55\u3082\u4f1d\u3048\u305a\u306b\u30a2\u30d7\u30ea\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u3059\u308b\u3068\u3001\u30e6\u30fc\u30b6\u306e\u30a2\u30d7\u30ea\u96e2\u8131\u306b\u7e4b\u304c\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u30a8\u30e9\u30fc\u3092\u89e3\u6790\u3059\u308b\u305f\u3081\u306b\u3001\u3069\u306e\u3088\u3046\u306a\u64cd\u4f5c\u3067\u30a2\u30d7\u30ea\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u3057\u305f\u304b\u306a\u3069\u306e\u64cd\u4f5c\u30ed\u30b0\u3084\u3001\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u60c5\u5831\u3092\u53ce\u96c6\u3059\u308b\u3053\u3068\u3082\u91cd\u8981\u3067\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/error-handling/overview.mdx",sourceDirName:"react-native/santoku/application-architecture/error-handling",slug:"/react-native/santoku/application-architecture/error-handling/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/error-handling/overview",tags:[],version:"current",lastUpdatedAt:1632798153,formattedLastUpdatedAt:"2021/9/28",frontMatter:{title:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",sidebar_label:"\u6982\u8981"},sidebar:"santoku",previous:{title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u53d7\u4fe1",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/push-notification/receive-push-notification"},next:{title:"\u30a8\u30e9\u30fc\u306e\u767a\u751f\u7b87\u6240\u3068\u51e6\u7406\u65b9\u6cd5",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/error-handling/how-to-handle-error"}},s={},u=[{value:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306e\u5168\u4f53\u50cf",id:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306e\u5168\u4f53\u50cf",level:2},{value:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805",id:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805",level:2}],d={toc:u};function b(e){var t=e.components,o=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u3001\u30a8\u30e9\u30fc\u306e\u5185\u5bb9\u3068\u56de\u5fa9\u624b\u9806\u3092\u30e6\u30fc\u30b6\u306b\u4f1d\u3048\u308b\u4e8b\u304c\u5927\u5207\u3067\u3059\u3002\u4f55\u3082\u4f1d\u3048\u305a\u306b\u30a2\u30d7\u30ea\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u3059\u308b\u3068\u3001\u30e6\u30fc\u30b6\u306e\u30a2\u30d7\u30ea\u96e2\u8131\u306b\u7e4b\u304c\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u30a8\u30e9\u30fc\u3092\u89e3\u6790\u3059\u308b\u305f\u3081\u306b\u3001\u3069\u306e\u3088\u3046\u306a\u64cd\u4f5c\u3067\u30a2\u30d7\u30ea\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u3057\u305f\u304b\u306a\u3069\u306e\u64cd\u4f5c\u30ed\u30b0\u3084\u3001\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u60c5\u5831\u3092\u53ce\u96c6\u3059\u308b\u3053\u3068\u3082\u91cd\u8981\u3067\u3059\u3002"),(0,i.kt)("p",null,"React Native\u3092\u4f7f\u7528\u3057\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u306f\u3001\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u3092\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3057\u306a\u3044\u3068\u30a2\u30d7\u30ea\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081SantokuApp\u3067\u306f\u4ee5\u4e0b\u3092\u57fa\u672c\u65b9\u91dd\u3068\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u64cd\u4f5c\u3084\u5916\u90e8\u901a\u4fe1\u6642\u306a\u3069\u306e\u30a4\u30d9\u30f3\u30c8\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306b\u304a\u3044\u3066\u3001\u30a2\u30d7\u30ea\u3092\u904b\u7528\u3059\u308b\u4e0a\u3067\u60f3\u5b9a\u53ef\u80fd\u306a\u30a8\u30e9\u30fc\u306b\u3064\u3044\u3066\u306f\u500b\u5225\u306b\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},"\u500b\u5225\u306b\u6355\u6349\u3057\u305f\u30a8\u30e9\u30fc\u306e\u5185\u5bb9\u3068\u5fa9\u65e7\u624b\u9806\u3092\u9069\u5207\u306b\u30e6\u30fc\u30b6\u306b\u4f1d\u3048\u308b")),(0,i.kt)("p",null,"\u4e0a\u8a18\u306e\u5bfe\u5fdc\u306b\u52a0\u3048\u3001\u500b\u5225\u306b\u30a8\u30e9\u30fc\u304c\u6355\u6349\u3055\u308c\u306a\u304b\u3063\u305f\u5834\u5408\u306e\u30bb\u30fc\u30d5\u30c6\u30a3\u30cd\u30c3\u30c8\u3068\u3057\u3066\u3001\u672a\u51e6\u7406\u306e\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u3066Firebase Crashlytics\u306b\u30af\u30e9\u30c3\u30b7\u30e5\u30ed\u30b0\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306e\u5168\u4f53\u50cf"},"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306e\u5168\u4f53\u50cf"),(0,i.kt)("p",null,"SantokuApp\u3067\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u3066Firebase Crashlytics\u306b\u30ed\u30b0\u3092\u9001\u4fe1\u3059\u308b\u5168\u4f53\u50cf\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",src:r(77205).Z,width:"1080",height:"872"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u51e6\u7406\u30d1\u30bf\u30fc\u30f3"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u51e6\u7406\u6982\u8981"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u51e6\u7406\u30d1\u30bf\u30fc\u30f3\u2460"),(0,i.kt)("td",{parentName:"tr",align:"left"},"JavaScript Module\u3067\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u305f\u5834\u5408\u306f\u3001\u30a8\u30e9\u30fc\u5185\u5bb9\u3092UI\u8868\u793a\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066React Native Firebase Crashlytics\u3092\u7d4c\u7531\u3057\u3066Firebase Crashlytics\u306b\u30a8\u30e9\u30fc\u30ed\u30b0\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u51e6\u7406\u30d1\u30bf\u30fc\u30f3\u2461"),(0,i.kt)("td",{parentName:"tr",align:"left"},"JavaScript Module\u3067\u672a\u51e6\u7406\u306e\u30a8\u30e9\u30fc\u306f\u3001React Native\u306eBridge\u3092\u7d4c\u7531\u3057\u3066\u6700\u7d42\u7684\u306b\u306fFirebase Crashlytics SDK\u306b\u3088\u3063\u3066\u6355\u6349\u3055\u308c\u307e\u3059\u3002Firebase Crashlytics SDK\u306f\u30af\u30e9\u30c3\u30b7\u30e5\u30ed\u30b0\u3092Firebase Crashlytics\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u51e6\u7406\u30d1\u30bf\u30fc\u30f3\u2462"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Native Module\u3067\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u30a8\u30e9\u30fc\u5185\u5bb9\u3092UI\u8868\u793a\u3059\u308b\u306b\u306f\u3001React Native\u306eBridge\u3092\u7d4c\u7531\u3057\u3066\u30a8\u30e9\u30fc\u3092JavaScript Module\u306b\u9023\u643a\u3057\u307e\u3059\u3002\u30a8\u30e9\u30fc\u3092\u53d7\u3051\u53d6\u3063\u305fJavaScript Module\u306f\u30a8\u30e9\u30fc\u5185\u5bb9\u3092UI\u8868\u793a\u3057\u307e\u3059\u3002\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u3001\u76f4\u63a5Firebase Crashlytics SDK\u3092\u4f7f\u7528\u3057\u3066Firebase Crashlytics\u306b\u30a8\u30e9\u30fc\u30ed\u30b0\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u51e6\u7406\u30d1\u30bf\u30fc\u30f3\u2463"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Native Module\u3067\u30a8\u30e9\u30fc\u3092\u6355\u6349\u5f8c\u3001Firebase Crashlytics SDK\u3092\u4f7f\u7528\u3057\u3066Firebase Crashlytics\u306b\u30a8\u30e9\u30fc\u30ed\u30b0\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002\u30a8\u30e9\u30fc\u5185\u5bb9\u3092UI\u8868\u793a\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u76f4\u63a5Firebase Crashlytics SDK\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u51e6\u7406\u30d1\u30bf\u30fc\u30f3\u2464"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Native Module\u3067\u672a\u51e6\u7406\u306e\u30a8\u30e9\u30fc\u306f\u3001Firebase Crashlytics SDK\u306b\u6355\u6349\u3055\u308c\u307e\u3059\u3002Firebase Crashlytics SDK\u306f\u30af\u30e9\u30c3\u30b7\u30e5\u30ed\u30b0\u3092Firebase Crashlytics\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002")))),(0,i.kt)("h2",{id:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805"},"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-001-error-handling"},"\u30b0\u30ed\u30fc\u30d0\u30eb\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-002-http-api-libraries"},"HTTP\u901a\u4fe1\u3067\u4f7f\u7528\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-003-http-api-error-handling"},"HTTP API\u901a\u4fe1\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"))))}b.isMDXComponent=!0},77205:function(e,t,r){t.Z=r.p+"assets/images/error-handling-architecture.drawio-cd80b0213a4bd16bc76478ca58f88c3c.png"}}]);