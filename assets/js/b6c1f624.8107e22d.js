"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,g=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26201:(e,t,n)=>{n.d(t,{L:()=>g});var r=n(87462),a=n(39960),i=n(44996),o=n(86010),l=n(67294);const p={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},u=e=>{let{children:t,colSize:n=4,...u}=e;const c=(0,i.Z)(u.to);return l.createElement("div",{className:(0,o.Z)("col",`col--${n}`,p.pageOverviewContainer)},l.createElement(a.Z,(0,r.Z)({className:(0,o.Z)("card",p.pageOverviewLinkCard)},u,{to:c}),t))},c=e=>{let{title:t}=e;return l.createElement("div",{className:(0,o.Z)("card__header",p.pageOverviewTitle)},l.createElement("h3",null,t))},s=e=>{let{src:t,alt:n,...a}=e;const u=(0,i.Z)(t);return l.createElement("div",{className:(0,o.Z)("card__image")},l.createElement("img",(0,r.Z)({className:p.pageOverviewImage},a,{alt:n,src:u})))},m=e=>{let{summary:t}=e;return l.createElement("div",{className:(0,o.Z)("card__body",p.pageOverviewSummary)},l.createElement("p",null,t))},d=e=>{let{title:t,imageUrl:n,summary:r,...a}=e;return l.createElement(u,a,l.createElement(c,{title:`${t} \xbb`}),n&&l.createElement(s,{src:n,alt:t}),r&&l.createElement(m,{summary:r}))},g=e=>{let{overviews:t,colSize:n}=e;return l.createElement("section",{className:(0,o.Z)(p.pageList)},l.createElement("div",{className:(0,o.Z)("container")},l.createElement("div",{className:(0,o.Z)("row",p.pageListRow)},t.map((e=>l.createElement(d,(0,r.Z)({key:e.to,colSize:n},e)))))))}},41460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=n(87462),a=n(67294),i=n(3905),o=n(26201);const l={title:"\u30d3\u30eb\u30c9",sidebar_label:"\u6982\u8981"},p=void 0,u={unversionedId:"react-native/santoku/development/build-configuration",id:"react-native/santoku/development/build-configuration",title:"\u30d3\u30eb\u30c9",description:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u958b\u767a\u3067\u306f\u3001\u30b9\u30c6\u30fc\u30b8\u30f3\u30b0\u74b0\u5883\u3084\u672c\u756a\u74b0\u5883\u306a\u3069\u306b\u5fdc\u3058\u3066\u3001\u63a5\u7d9a\u5148\u306e\u30b5\u30fc\u30d0\u3084\u30a2\u30d7\u30ea\u30a2\u30a4\u30b3\u30f3\u306a\u3069\u3092\u5909\u66f4\u3057\u305f\u3044\u30b1\u30fc\u30b9\u304c\u591a\u304f\u3042\u308a\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/development/build-configuration.mdx",sourceDirName:"react-native/santoku/development",slug:"/react-native/santoku/development/build-configuration",permalink:"/mobile-app-crib-notes/react-native/santoku/development/build-configuration",draft:!1,tags:[],version:"current",lastUpdatedAt:1676523990,formattedLastUpdatedAt:"2023\u5e742\u670816\u65e5",frontMatter:{title:"\u30d3\u30eb\u30c9",sidebar_label:"\u6982\u8981"},sidebar:"santoku",previous:{title:"HTTP API\u306e\u547c\u3073\u51fa\u3057",permalink:"/mobile-app-crib-notes/react-native/santoku/development/implement/http-api"},next:{title:"\u74b0\u5883\u306e\u5207\u308a\u66ff\u3048",permalink:"/mobile-app-crib-notes/react-native/santoku/development/build-configuration/environments-configuration"}},c={},s=[{title:"\u74b0\u5883\u306e\u5207\u308a\u66ff\u3048",to:"/react-native/santoku/development/build-configuration/environments-configuration",summary:(0,i.kt)(a.Fragment,null,"\u74b0\u5883\u3092\u5207\u308a\u66ff\u3048\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002")},{title:"Config Plugins\u306b\u3064\u3044\u3066",to:"/react-native/santoku/development/build-configuration/about-plugins",summary:(0,i.kt)(a.Fragment,null,"Config Plugins\u306e\u6982\u8981\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002")},{title:"Config Plugins\u306e\u9069\u7528",to:"/react-native/santoku/development/build-configuration/apply-plugins",summary:(0,i.kt)(a.Fragment,null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u9069\u7528\u3059\u308bConfig Plugins\u306e\u4e00\u89a7\u3068\u6982\u8981\u3001\u9069\u7528\u3059\u308b\u74b0\u5883\u3092\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002")},{title:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7",to:"/react-native/santoku/development/build-configuration/build-type",summary:(0,i.kt)(a.Fragment,null,"\u30c7\u30d0\u30c3\u30b0\u30d3\u30eb\u30c9\u3068\u30ea\u30ea\u30fc\u30b9\u30d3\u30eb\u30c9\u306e\u9055\u3044\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002")},{title:"\u30a2\u30d7\u30ea\u7279\u6709\u306e\u8a2d\u5b9a\u5024",to:"/react-native/santoku/development/build-configuration/app-constants",summary:(0,i.kt)(a.Fragment,null,"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306eURL\u306a\u3069\u3001\u74b0\u5883\u3054\u3068\u306b\u5909\u66f4\u3057\u305f\u3044\u30a2\u30d7\u30ea\u7279\u6709\u306e\u8a2d\u5b9a\u5024\u3068\u53d6\u5f97\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002")},{title:"\u958b\u767a\u8005\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f7f\u7528\uff08iOS\uff09",to:"/react-native/santoku/development/build-configuration/development-account-for-ios",summary:(0,i.kt)(a.Fragment,null,"local\u74b0\u5883\u3067iOS\u306e\u958b\u767a\u3092\u3059\u308b\u969b\u306b\u5fc5\u8981\u306a\u958b\u767a\u8005\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u8a2d\u5b9a\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002")},{title:"Firebase\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb",to:"/react-native/santoku/development/build-configuration/firebase-setting-file",summary:(0,i.kt)(a.Fragment,null,"Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u969b\u306b\u5fc5\u8981\u306a\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u914d\u7f6e\u5834\u6240\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002")},{title:"\u74b0\u5883\u3084\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u306b\u5fdc\u3058\u305f\u30a2\u30d7\u30ea\u8d77\u52d5",to:"/react-native/santoku/development/build-configuration/app-launch-per-build-settings",summary:(0,i.kt)(a.Fragment,null,"\u74b0\u5883\u306e\u5207\u308a\u66ff\u3048\u3084\u3001\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u306b\u5fdc\u3058\u305f\u30a2\u30d7\u30ea\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3084\u8d77\u52d5\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8a73\u7d30\u306a\u30b3\u30de\u30f3\u30c9\u3092\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002")},{title:"\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u7ba1\u7406",to:"/react-native/santoku/development/build-configuration/native-project-management",summary:(0,i.kt)(a.Fragment,null,"Prebuild\u5b9f\u884c\u5f8c\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u3069\u306e\u3088\u3046\u306b\u7ba1\u7406\u3057\u3066\u3044\u304f\u304b\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002")}],m=[{value:"Prebuild",id:"prebuild",level:2},{value:"Config Plugins",id:"config-plugins",level:2}],d={toc:m};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u958b\u767a\u3067\u306f\u3001\u30b9\u30c6\u30fc\u30b8\u30f3\u30b0\u74b0\u5883\u3084\u672c\u756a\u74b0\u5883\u306a\u3069\u306b\u5fdc\u3058\u3066\u3001\u63a5\u7d9a\u5148\u306e\u30b5\u30fc\u30d0\u3084\u30a2\u30d7\u30ea\u30a2\u30a4\u30b3\u30f3\u306a\u3069\u3092\u5909\u66f4\u3057\u305f\u3044\u30b1\u30fc\u30b9\u304c\u591a\u304f\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u305d\u308c\u3089\u306e\u30b1\u30fc\u30b9\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u3001\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306fExpo\u306e",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/workflow/prebuild/"},"Prebuild"),"\u3084\u3001",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/guides/config-plugins/"},"Config Plugins"),"\u306a\u3069\u306e\u4ed5\u7d44\u307f\u3092\u5229\u7528\u3057\u3066\u3001\u67d4\u8edf\u306b\u30d3\u30eb\u30c9\u3092\u8a2d\u5b9a\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"prebuild"},"Prebuild"),(0,i.kt)("p",null,"Expo\u306b\u306f\u3001\u30a2\u30d7\u30ea\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"ios"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"android"),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\uff09\u3092\u81ea\u52d5\u751f\u6210\u3059\u308bPrebuild\u3068\u3044\u3046\u6a5f\u80fd\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npx expo prebuild"),"\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/expo/expo/tree/main/templates/expo-template-bare-minimum"},"expo-template-bare-minimum"),"\u3092\u30d9\u30fc\u30b9\u306b\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002\n\u30a2\u30d7\u30ea\u30a2\u30a4\u30b3\u30f3\u3084\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID\u306a\u3069\u591a\u304f\u306e\u8a2d\u5b9a\u5024\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/config/app/"},"Expo config\uff08app.json, app.config.js\uff09"),"\u306b\u6307\u5b9a\u3057\u305f\u5024\u3067\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"config-plugins"},"Config Plugins"),(0,i.kt)("p",null,"\u524d\u8ff0\u3057\u305f\u3088\u3046\u306b\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Prebuild"),"\u6642\u306b\u751f\u6210\u3059\u308b\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8a2d\u5b9a\u306f\u3001Expo config\u306b\u6307\u5b9a\u3057\u305f\u5024\u3067\u5909\u66f4\u3067\u304d\u307e\u3059\u3002\nExpo config\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u5024\u306f\u3001Expo\u304c\u6a19\u6e96\u3067\u7528\u610f\u3057\u3066\u3044\u308bConfig Plugins\u306b\u3088\u3063\u3066\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Prebuild"),"\u3067\u751f\u6210\u3055\u308c\u308b\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u53cd\u6620\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3057\u304b\u3057\u30a2\u30d7\u30ea\u306b\u3088\u3063\u3066\u306fExpo config\u3067\u6307\u5b9a\u53ef\u80fd\u306a\u8a2d\u5b9a\u4ee5\u5916\u306b\u3082\u5909\u66f4\u3057\u305f\u3044\u8a2d\u5b9a\u5024\u304c\u5b58\u5728\u3059\u308b\u30b1\u30fc\u30b9\u3082\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u30b9\u30c6\u30fc\u30b8\u30f3\u30b0\u74b0\u5883\u3084\u672c\u756a\u74b0\u5883\u306a\u3069\u306b\u5fdc\u3058\u3066\u30d3\u30eb\u30c9\u6642\u306e\u7f72\u540d\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u305f\u3044\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002\n\u3057\u304b\u3057\u3001Expo config\u3067\u306f\u7f72\u540d\u8a2d\u5b9a\u3092\u5909\u66f4\u3067\u304d\u307e\u305b\u3093\u3002"),(0,i.kt)("p",null,"\u305d\u308c\u3089\u306e\u30b1\u30fc\u30b9\u306b\u5bfe\u5fdc\u3059\u308b\u306b\u306f\u3001\u30a2\u30d7\u30ea\u7279\u6709\u306eConfig Plugins\u3092\u4f5c\u6210\u3057\u3066",(0,i.kt)("inlineCode",{parentName:"p"},"Prebuild"),"\u6642\u306b\u9069\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u4ee5\u964d\u3067\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Prebuild"),"\u3068Config Plugins\u3092\u5229\u7528\u3057\u305f\u74b0\u5883\u306e\u5207\u308a\u66ff\u3048\u65b9\u6cd5\u3084\u3001\u9069\u7528\u3059\u308bConfig Plugins\u306a\u3069\u3092\u8aac\u660e\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,i.kt)(o.L,{overviews:s,colSize:12,mdxType:"PageList"}))}g.isMDXComponent=!0}}]);