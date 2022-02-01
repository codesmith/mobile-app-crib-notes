"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[4395],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81686:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],c={title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u53d7\u4fe1"},p=void 0,l={unversionedId:"react-native/santoku/application-architecture/push-notification/receive-push-notification",id:"react-native/santoku/application-architecture/push-notification/receive-push-notification",title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u53d7\u4fe1",description:"iOS\u3084iPadOS\u30a2\u30d7\u30ea\u306e\u5834\u5408\u306fAPNs\u304b\u3089\u3001Android\u30a2\u30d7\u30ea\u306e\u5834\u5408\u306fATL\u304b\u3089\u305d\u308c\u305e\u308c\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u53d7\u4fe1\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/push-notification/receive-push-notification.mdx",sourceDirName:"react-native/santoku/application-architecture/push-notification",slug:"/react-native/santoku/application-architecture/push-notification/receive-push-notification",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/push-notification/receive-push-notification",tags:[],version:"current",lastUpdatedAt:1643675450,formattedLastUpdatedAt:"2022/2/1",frontMatter:{title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u53d7\u4fe1"},sidebar:"santoku",previous:{title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u9001\u4fe1",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/push-notification/send-push-notification"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/error-handling/overview"}},u=[{value:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u53d7\u4fe1\u6642\u306e\u51e6\u7406\u30d5\u30ed\u30fc",id:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u53d7\u4fe1\u6642\u306e\u51e6\u7406\u30d5\u30ed\u30fc",children:[{value:"\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u5834\u5408",id:"\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u5834\u5408",children:[],level:3},{value:"\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u4ee5\u5916\u306e\u5834\u5408",id:"\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u4ee5\u5916\u306e\u5834\u5408",children:[],level:3}],level:2},{value:"\u901a\u77e5\u30bb\u30f3\u30bf\u30fc\u306e\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u30bf\u30c3\u30d7\u6642\u306e\u51e6\u7406\u30d5\u30ed\u30fc",id:"\u901a\u77e5\u30bb\u30f3\u30bf\u30fc\u306e\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u30bf\u30c3\u30d7\u6642\u306e\u51e6\u7406\u30d5\u30ed\u30fc",children:[{value:"\u30db\u30c3\u30c8\u30b9\u30bf\u30fc\u30c8\u306e\u5834\u5408",id:"\u30db\u30c3\u30c8\u30b9\u30bf\u30fc\u30c8\u306e\u5834\u5408",children:[],level:3},{value:"\u30b3\u30fc\u30eb\u30c9\u30b9\u30bf\u30fc\u30c8\u307e\u305f\u306f\u30a6\u30a9\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8\u306e\u5834\u5408",id:"\u30b3\u30fc\u30eb\u30c9\u30b9\u30bf\u30fc\u30c8\u307e\u305f\u306f\u30a6\u30a9\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8\u306e\u5834\u5408",children:[],level:3}],level:2}],s={toc:u};function d(e){var t=e.components,c=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"iOS\u3084iPadOS\u30a2\u30d7\u30ea\u306e\u5834\u5408\u306fAPNs\u304b\u3089\u3001Android\u30a2\u30d7\u30ea\u306e\u5834\u5408\u306fATL\u304b\u3089\u305d\u308c\u305e\u308c\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u53d7\u4fe1\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u53d7\u4fe1\u6642\u306e\u51e6\u7406\u30d5\u30ed\u30fc"},"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u53d7\u4fe1\u6642\u306e\u51e6\u7406\u30d5\u30ed\u30fc"),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u306e\u72b6\u614b\u304c\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u5834\u5408\u3068\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u3067\u51e6\u7406\u30d5\u30ed\u30fc\u304c\u7570\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u53d7\u4fe1\u3057\u305f\u969b\u3001\u30a2\u30d7\u30ea\u306e\u72b6\u614b\u306b\u3088\u308a\u901a\u77e5\u306e\u53d6\u308a\u6271\u3044\u304c\u5909\u308f\u308a\u307e\u3059\u3002\n\u30a2\u30d7\u30ea\u306e\u72b6\u614b\u306b\u306f\u6b21\u306e\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\uff08\u30a2\u30af\u30c6\u30a3\u30d6\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\uff08\u975e\u30a2\u30af\u30c6\u30a3\u30d6\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\uff08\u4e00\u6642\u505c\u6b62\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\uff08\u505c\u6b62\uff09")),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u306e\u72b6\u614b\u306e\u8a73\u7d30\u306f",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/overview#%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE%E7%8A%B6%E6%85%8B"},"\u30a2\u30d7\u30ea\u306e\u72b6\u614b"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u51e6\u7406\u30d5\u30ed\u30fc\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u5834\u5408"},"\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u5834\u5408"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u53d7\u4fe1\u6642\u306e\u51e6\u7406\u30d5\u30ed\u30fc",src:n(22275).Z})),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u306e\u72b6\u614b\u304c\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u969b\u306b\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u53d7\u4fe1\u3059\u308b\u3068\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"onMessage"),"\u306b\u8a2d\u5b9a\u3057\u305f\u51e6\u7406\u304c\u547c\u3070\u308c\u307e\u3059\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"onMessage"),"\u3067\u53d7\u3051\u53d6\u3063\u305f\u901a\u77e5\u5185\u5bb9\u3092\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\u3067\u30a2\u30d7\u30ea\u4e0a\u306b\u8868\u793a\u3057\u307e\u3059\u3002\u305d\u306e\u4ed6\u3001\u901a\u77e5\u5185\u5bb9\u306b\u5fdc\u3058\u305f\u51e6\u7406\u304c\u3042\u308c\u3070\u884c\u3044\u307e\u3059\u304c\u3001\u753b\u9762\u9077\u79fb\u306a\u3069\u30e6\u30fc\u30b6\u306e\u64cd\u4f5c\u3092\u59a8\u3052\u308b\u51e6\u7406\u306f\u884c\u308f\u306a\u3044\u3053\u3068\u3068\u3057\u307e\u3059\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"iOS\u3084iPadOS\u306e\u5834\u5408\u3001\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\uff08\u975e\u30a2\u30af\u30c6\u30a3\u30d6\uff09\u306e\u5834\u5408\u3067\u3082",(0,r.kt)("inlineCode",{parentName:"p"},"onMessage"),"\u306b\u8a2d\u5b9a\u3057\u305f\u51e6\u7406\u304c\u547c\u3070\u308c\u307e\u3059\u3002\n\u3064\u307e\u308a\u3001",(0,r.kt)("a",{parentName:"p",href:"https://support.apple.com/ja-jp/HT201925#control-center"},"\u901a\u77e5\u30bb\u30f3\u30bf\u30fc"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://support.apple.com/ja-jp/HT202769"},"\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30bb\u30f3\u30bf\u30fc"),"\u3092\u958b\u3044\u3066\u3044\u308b\u3068\u304d\u3084\u3001",(0,r.kt)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT202070"},"App\u30b9\u30a4\u30c3\u30c1\u30e3\u30fc"),"\u3092\u8868\u793a\u3057\u3066\u3044\u308b\u6642\u306b\u3082\u901a\u77e5\u5185\u5bb9\u306f\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\u3067\u30a2\u30d7\u30ea\u4e0a\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002\n\u753b\u9762\u304c\u96a0\u308c\u3066\u3044\u308b\u72b6\u614b\u3067\u901a\u77e5\u5185\u5bb9\u304c\u8868\u793a\u3055\u308c\u308b\u305f\u3081\u3001\u30e6\u30fc\u30b6\u304c\u901a\u77e5\u306b\u6c17\u3065\u304b\u306a\u3044\u6050\u308c\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u30e6\u30fc\u30b6\u306e\u78ba\u8a8d\u304c\u5fc5\u8981\u306a\u5185\u5bb9\u306f\u901a\u77e5\u4ee5\u5916\u3067\u304a\u77e5\u3089\u305b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",{parentName:"div"},"Android\u306e\u5834\u5408\u3001",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/notifiers/notifications?hl=ja#bar-and-drawer"},"\u901a\u77e5\u30c9\u30ed\u30ef\u30fc"),"\u3092\u958b\u3044\u305f\u3068\u304d\u3067\u3082\uff08\u30a2\u30d7\u30ea\u306e\u72b6\u614b\u306b\u53cd\u3057\u3066\uff09",(0,r.kt)("inlineCode",{parentName:"p"},"onMessage"),"\u306b\u8a2d\u5b9a\u3057\u305f\u51e6\u7406\u304c\u547c\u3070\u308c\u307e\u3059\u3002\u4e00\u65b9\u3067\u3001\u30a2\u30d7\u30ea\u5207\u308a\u66ff\u3048\u4e2d\u306f\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u72b6\u614b\u3068\u306a\u308a\u307e\u3059\u3002iOS\u3084iPadOS\u3068\u52d5\u304d\u304c\u7570\u306a\u308b\u305f\u3081\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,r.kt)("h3",{id:"\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u4ee5\u5916\u306e\u5834\u5408"},"\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u4ee5\u5916\u306e\u5834\u5408"),(0,r.kt)("p",null,"\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u4ee5\u5916\u306e\u72b6\u614b\u3067\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u53d7\u4fe1\u3059\u308b\u3068\u3001\u901a\u77e5\u306f\u901a\u77e5\u30bb\u30f3\u30bf\u30fc\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002\n\u30a2\u30d7\u30ea\u306f\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u53d7\u4fe1\u3057\u305f\u6642\u70b9\u3067\u306f\u4f55\u3082\u884c\u3044\u307e\u305b\u3093\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u4ee5\u5916\u306e\u72b6\u614b\u3067\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u53d7\u4fe1\u3059\u308b\u3068\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"BackgroundMessageHandler"),"\u306b\u8a2d\u5b9a\u3057\u305f\u51e6\u7406\u304c\u52d5\u4f5c\u3057\u307e\u3059\u3002\niOS\u3084iPadOS\u306e\u5834\u5408\u3001APNs\u30da\u30a4\u30ed\u30fc\u30c9\u5185\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"content-available"),"\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306e\u307f\u3001\u3053\u306e\u51e6\u7406\u304c\u547c\u3070\u308c\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u8a73\u7d30\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/reference/notification/client#%E3%82%A2%E3%83%97%E3%83%AA%E3%81%8C%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96%E3%81%A7%E3%81%AA%E3%81%84%E6%99%82%E3%81%AB%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8%E3%82%92%E5%8F%97%E4%BF%A1%E3%81%97%E3%81%9F%E5%A0%B4%E5%90%88%E3%81%AE%E5%87%A6%E7%90%86"},"\u30a2\u30d7\u30ea\u304c\u30a2\u30af\u30c6\u30a3\u30d6\u3067\u306a\u3044\u6642\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u53d7\u4fe1\u3057\u305f\u5834\u5408\u306e\u51e6\u7406"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,r.kt)("h2",{id:"\u901a\u77e5\u30bb\u30f3\u30bf\u30fc\u306e\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u30bf\u30c3\u30d7\u6642\u306e\u51e6\u7406\u30d5\u30ed\u30fc"},"\u901a\u77e5\u30bb\u30f3\u30bf\u30fc\u306e\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u30bf\u30c3\u30d7\u6642\u306e\u51e6\u7406\u30d5\u30ed\u30fc"),(0,r.kt)("p",null,"\u901a\u77e5\u30bb\u30f3\u30bf\u30fc\u306e\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u30bf\u30c3\u30d7\u6642\u3059\u308b\u3068\u30a2\u30d7\u30ea\u304c\u30d5\u30a9\u30a2\u30b0\u30e9\u30f3\u30c9\u3067\u8868\u793a\u3057\u307e\u3059\u3002\n\u305d\u306e\u969b\u306e\u30a2\u30d7\u30ea\u30b9\u30bf\u30fc\u30c8\u306e\u7a2e\u985e\u306b\u3088\u308a\u901a\u77e5\u306e\u53d6\u308a\u6271\u3044\u304c\u5909\u308f\u308a\u307e\u3059\u3002\n\u30a2\u30d7\u30ea\u30b9\u30bf\u30fc\u30c8\u306e\u7a2e\u985e\u306b\u306f\u6b21\u306e\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30b3\u30fc\u30eb\u30c9\u30b9\u30bf\u30fc\u30c8"),(0,r.kt)("li",{parentName:"ul"},"\u30a6\u30a9\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8"),(0,r.kt)("li",{parentName:"ul"},"\u30db\u30c3\u30c8\u30b9\u30bf\u30fc\u30c8")),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u30b9\u30bf\u30fc\u30c8\u306e\u7a2e\u985e\u306e\u8a73\u7d30\u306f",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/overview#%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88%E3%81%AE%E7%A8%AE%E9%A1%9E%E3%81%AB%E5%BF%9C%E3%81%98%E3%81%9F%E5%88%9D%E6%9C%9F%E5%8C%96%E5%87%A6%E7%90%86"},"\u30a2\u30d7\u30ea\u30b9\u30bf\u30fc\u30c8\u306e\u7a2e\u985e\u306b\u5fdc\u3058\u305f\u521d\u671f\u5316\u51e6\u7406"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u51e6\u7406\u30d5\u30ed\u30fc\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u30db\u30c3\u30c8\u30b9\u30bf\u30fc\u30c8\u306e\u5834\u5408"},"\u30db\u30c3\u30c8\u30b9\u30bf\u30fc\u30c8\u306e\u5834\u5408"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u30bf\u30c3\u30d7\u6642(Background)\u306e\u51e6\u7406\u30d5\u30ed\u30fc",src:n(28415).Z})),(0,r.kt)("p",null,"\u30db\u30c3\u30c8\u30b9\u30bf\u30fc\u30c8\u306e\u5834\u5408\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"onNotificationOpenedApp"),"\u306b\u8a2d\u5b9a\u3057\u305f\u51e6\u7406\u304c\u547c\u3070\u308c\u307e\u3059\u3002\n\u3053\u306e\u4e2d\u3067\u901a\u77e5\u5185\u5bb9\u306b\u5fdc\u3058\u305f\u51e6\u7406\uff08\u753b\u9762\u9077\u79fb\u306a\u3069\uff09\u3092\u884c\u3044\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u30b3\u30fc\u30eb\u30c9\u30b9\u30bf\u30fc\u30c8\u307e\u305f\u306f\u30a6\u30a9\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8\u306e\u5834\u5408"},"\u30b3\u30fc\u30eb\u30c9\u30b9\u30bf\u30fc\u30c8\u307e\u305f\u306f\u30a6\u30a9\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8\u306e\u5834\u5408"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u30bf\u30c3\u30d7\u6642(Quit)\u306e\u51e6\u7406\u30d5\u30ed\u30fc",src:n(56455).Z})),(0,r.kt)("p",null,"React Native\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30b3\u30fc\u30eb\u30c9\u30b9\u30bf\u30fc\u30c8\u3068\u30a6\u30a9\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8\u306f\u307b\u307c\u540c\u7b49\u3067\u3059\u3002\n\u30b3\u30fc\u30eb\u30c9\u30b9\u30bf\u30fc\u30c8\u307e\u305f\u306f\u30a6\u30a9\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8\u306e\u5834\u5408\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"getInitialNotification"),"\u3067\u53d6\u5f97\u3057\u305f\u901a\u77e5\u5185\u5bb9\u306b\u5fdc\u3058\u305f\u51e6\u7406\uff08\u753b\u9762\u9077\u79fb\u306a\u3069\uff09\u3092\u884c\u3044\u307e\u3059\u3002"))}d.isMDXComponent=!0},22275:function(e,t,n){t.Z=n.p+"assets/images/receive-push-notification.drawio-259c4d2145f12c9c89ac9165b6ca3af9.png"},28415:function(e,t,n){t.Z=n.p+"assets/images/tap-push-notification-when-background.drawio-011cd3c7cc04d9d9be62bde167a7fc89.png"},56455:function(e,t,n){t.Z=n.p+"assets/images/tap-push-notification-when-quit.drawio-098f760a90af8af04df167ad2ea923dc.png"}}]);