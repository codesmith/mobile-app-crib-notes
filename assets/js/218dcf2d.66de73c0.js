"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7604],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(a),f=r,k=u["".concat(p,".").concat(f)]||u[f]||m[f]||i;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},52524:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={title:"React Native Firebase\u306e\u8ab2\u984c\u5bfe\u5fdc"},o=void 0,c={unversionedId:"react-native/santoku/application-architecture/deep-link/react-native-firebase",id:"react-native/santoku/application-architecture/deep-link/react-native-firebase",title:"React Native Firebase\u306e\u8ab2\u984c\u5bfe\u5fdc",description:"React Native Fireabase\u3067\u767a\u751f\u3059\u308b2\u3064\u306e\u8ab2\u984c\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/deep-link/react-native-firebase.mdx",sourceDirName:"react-native/santoku/application-architecture/deep-link",slug:"/react-native/santoku/application-architecture/deep-link/react-native-firebase",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/react-native-firebase",draft:!1,tags:[],version:"current",lastUpdatedAt:1648600430,formattedLastUpdatedAt:"2022\u5e743\u670830\u65e5",frontMatter:{title:"React Native Firebase\u306e\u8ab2\u984c\u5bfe\u5fdc"},sidebar:"santoku",previous:{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u4f5c\u6210",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/create-deep-link"},next:{title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/push-notification/overview"}},p={},l=[{value:"\u4ed6\u306e\u30e6\u30fc\u30b6\u304c\u958b\u3044\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u8aad\u307f\u53d6\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b",id:"\u4ed6\u306e\u30e6\u30fc\u30b6\u304c\u958b\u3044\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afurl\u3092\u8aad\u307f\u53d6\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b",level:2},{value:"\u30a2\u30d7\u30ea\u8d77\u52d5\u306e\u6642\u9593\u304c\u77ed\u3044\u5834\u5408\u306b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3067\u304d\u306a\u3044",id:"\u30a2\u30d7\u30ea\u8d77\u52d5\u306e\u6642\u9593\u304c\u77ed\u3044\u5834\u5408\u306b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afurl\u3092\u53d6\u5f97\u3067\u304d\u306a\u3044",level:2}],s={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"React Native Fireabase\u3067\u767a\u751f\u3059\u308b2\u3064\u306e\u8ab2\u984c\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"iOS\u3067\u3001",(0,r.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/reference/swift/firebasedynamiclinks/api/reference/Enums/DLMatchType.html"},"Firebase Dynamic Links\u306ematchType"),"\u3092\u691c\u8a3c\u3067\u304d\u306a\u3044"),(0,r.kt)("li",{parentName:"ul"},"iOS\u3067\u3001\u30a2\u30d7\u30ea\u8d77\u52d5\u306e\u6642\u9593\u304c\u77ed\u3044\u3068\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3067\u304d\u306a\u3044")),(0,r.kt)("h2",{id:"\u4ed6\u306e\u30e6\u30fc\u30b6\u304c\u958b\u3044\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afurl\u3092\u8aad\u307f\u53d6\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b"},"\u4ed6\u306e\u30e6\u30fc\u30b6\u304c\u958b\u3044\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u8aad\u307f\u53d6\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b"),(0,r.kt)("p",null,"Firebase Dynamic Links\u306f\u3001iOS\u3067\u521d\u56de\u8d77\u52d5\u6642\u306b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/dynamic-links/operating-system-integrations#ios_integration_flowchart"},"\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u3092\u5229\u7528\u3059\u308b\u3068\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059"),"\u3002\u305f\u3060\u3057\u3001\u5b9f\u969b\u306f\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306e\u5024\u3060\u3051\u3067\u306a\u304f\u3001",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-004-deep-link#ios%E3%81%A7%E3%81%AE%E6%84%8F%E5%9B%B3%E3%81%97%E3%81%AA%E3%81%84%E5%85%B1%E6%9C%89"},"\u30c7\u30d0\u30a4\u30b9\u60c5\u5831\u306a\u3069\u3082\u5229\u7528"),"\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u305f\u3081\u3001\u4f8b\u3048\u3070\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u304c\u7a7a\u3060\u3063\u305f\u3068\u3057\u3066\u3082\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3067\u304d\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u3046\u3044\u3063\u305f\u5834\u5408\u306f\u3001\u30e6\u30fc\u30b6\u81ea\u8eab\u304c\u5b9f\u969b\u306b\u958b\u3053\u3046\u3068\u3057\u305f\u308f\u3051\u3067\u306f\u306a\u3044\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u304c\u53d6\u5f97\u3055\u308c\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u30e6\u30fc\u30b6\u304c\u958b\u3044\u305f\u3082\u306e\u304b\u3069\u3046\u304b\u3092\u5224\u5b9a\u3059\u308b\u305f\u3081\u306b",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/swift/firebasedynamiclinks/api/reference/Enums/DLMatchType.html"},"matchType"),"\u3068\u3044\u3046\u9805\u76ee\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306ematchType\u306e\u5024\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"unique"),"\u3067\u306a\u3044\u5834\u5408\u306f\u8aa4\u3063\u3066\u53d7\u3051\u53d6\u3063\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3067\u3042\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u305f\u3081\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3053\u306eURL\u306f\u5229\u7528\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u305f\u3060\u3057\u3001React Native Firebase Dynamic Links\u3067\u306f\u3001matchType\u3092JavaScript Module\u306b\u6e21\u3057\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u53c2\u7167\u3067\u304d\u307e\u305b\u3093\u3002\n\u305d\u306e\u305f\u3081React Native Firebase Dynamic Links\u306b",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/patch-package"},"patch-package"),"\u3067\u30d1\u30c3\u30c1\u3092\u9069\u7528\u3057\u3001\u5224\u5b9a\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Android\u306e\u5834\u5408\u306f",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/dynamic-links/operating-system-integrations#android_integration_flowchart"},"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u306e\u30d5\u30ed\u30fc\u306b\u3082\u3042\u308b\u3088\u3046\u306b\u3001Google Play Services\u3092\u7d4c\u7531\u3057\u3066Intent\u3067URL\u3092\u6e21\u3059\u305f\u3081\u3001\u30c7\u30d0\u30a4\u30b9\u5916\u306b\u60c5\u5831\u3092\u6301\u3064\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002")),(0,r.kt)("h2",{id:"\u30a2\u30d7\u30ea\u8d77\u52d5\u306e\u6642\u9593\u304c\u77ed\u3044\u5834\u5408\u306b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afurl\u3092\u53d6\u5f97\u3067\u304d\u306a\u3044"},"\u30a2\u30d7\u30ea\u8d77\u52d5\u306e\u6642\u9593\u304c\u77ed\u3044\u5834\u5408\u306b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3067\u304d\u306a\u3044"),(0,r.kt)("p",null,"iOS\u30a2\u30d7\u30ea\u3067\u306f\u30a2\u30d7\u30ea\u8d77\u52d5\u306e\u6642\u9593\u304c\u77ed\u3044\u3068\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3067\u304d\u306a\u3044",(0,r.kt)("a",{parentName:"p",href:"https://github.com/invertase/react-native-firebase/issues/2660"},"issue"),"\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306eissue\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"getInitialLink"),"\u3067\u306f\u306a\u304f\u3001React Native Linking\u306e",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/linking#getinitialurl"},(0,r.kt)("inlineCode",{parentName:"a"},"getInitialURL")),"\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"React Native Linking\u3067\u306f\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL\u3067\u306f\u306a\u304f\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u304c\u53d6\u5f97\u3055\u308c\u308b\u305f\u3081",(0,r.kt)("a",{parentName:"p",href:"https://rnfirebase.io/reference/dynamic-links#resolveLink"},"resolveLink"),"\u3092\u5229\u7528\u3057\u3066\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Android\u30a2\u30d7\u30ea\u3067\u306f",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/25675"},"React Native Linking\u306bissue"),"\u304c\u3042\u308b\u305f\u3081\u3001iOS\u306e\u307fReact Native Linking\u3092\u5229\u7528\u3057\u307e\u3059\u3002")))}m.isMDXComponent=!0}}]);