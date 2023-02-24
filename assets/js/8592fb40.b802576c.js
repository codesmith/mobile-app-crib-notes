"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7767],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(v,o(o({ref:t},p),{},{components:a})):r.createElement(v,o({ref:t},p))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26201:(e,t,a)=>{a.d(t,{L:()=>v});var r=a(87462),n=a(39960),i=a(44996),o=a(86010),c=a(67294);const s={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},l=e=>{let{children:t,colSize:a=4,...l}=e;const p=(0,i.Z)(l.to);return c.createElement("div",{className:(0,o.Z)("col",`col--${a}`,s.pageOverviewContainer)},c.createElement(n.Z,(0,r.Z)({className:(0,o.Z)("card",s.pageOverviewLinkCard)},l,{to:p}),t))},p=e=>{let{title:t}=e;return c.createElement("div",{className:(0,o.Z)("card__header",s.pageOverviewTitle)},c.createElement("h3",null,t))},d=e=>{let{src:t,alt:a,...n}=e;const l=(0,i.Z)(t);return c.createElement("div",{className:(0,o.Z)("card__image")},c.createElement("img",(0,r.Z)({className:s.pageOverviewImage},n,{alt:a,src:l})))},u=e=>{let{summary:t}=e;return c.createElement("div",{className:(0,o.Z)("card__body",s.pageOverviewSummary)},c.createElement("p",null,t))},m=e=>{let{title:t,imageUrl:a,summary:r,...n}=e;return c.createElement(l,n,c.createElement(p,{title:`${t} \xbb`}),a&&c.createElement(d,{src:a,alt:t}),r&&c.createElement(u,{summary:r}))},v=e=>{let{overviews:t,colSize:a}=e;return c.createElement("section",{className:(0,o.Z)(s.pageList)},c.createElement("div",{className:(0,o.Z)("container")},c.createElement("div",{className:(0,o.Z)("row",s.pageListRow)},t.map((e=>c.createElement(m,(0,r.Z)({key:e.to,colSize:a},e)))))))}},27286:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),i=a(26201);const o={title:"Decisions Records",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},c=void 0,s={unversionedId:"react-native/santoku/decisions",id:"react-native/santoku/decisions",title:"Decisions Records",description:"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3084\u6a5f\u80fd\u8a2d\u8a08\u306b\u95a2\u3059\u308b\u5224\u65ad\u306e\u8a18\u9332\u3067\u3059\u3002\u5b9f\u969b\u306b\u65b9\u5f0f\u3092\u8a2d\u8a08\u3059\u308b\u969b\u306b\u3001\u3053\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3088\u308a\u6709\u52b9\u306b\u6d3b\u7528\u3067\u304d\u308b\u3088\u3046\u3001\u8a2d\u8a08\u3057\u305f\u65b9\u5f0f\u3060\u3051\u3067\u306a\u304f\u691c\u8a0e\u904e\u7a0b\u3082\u8a18\u9332\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/decisions.mdx",sourceDirName:"react-native/santoku",slug:"/react-native/santoku/decisions",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions",draft:!1,tags:[],version:"current",lastUpdatedAt:1661754257,formattedLastUpdatedAt:"2022\u5e748\u670829\u65e5",frontMatter:{title:"Decisions Records",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},sidebar:"santoku",previous:{title:"Expo SDK 46\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",permalink:"/mobile-app-crib-notes/react-native/santoku/maintenance/enhance/expo-46-upgrade"},next:{title:"\u30b0\u30ed\u30fc\u30d0\u30eb\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-001-error-handling"}},l={},p=[{title:"\u30b0\u30ed\u30fc\u30d0\u30eb\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",to:"/react-native/santoku/decisions/adr-001-error-handling"},{title:"HTTP\u901a\u4fe1\u3067\u4f7f\u7528\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea",to:"/react-native/santoku/decisions/adr-002-http-api-libraries"},{title:"HTTP API\u901a\u4fe1\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",to:"/react-native/santoku/decisions/adr-003-http-api-error-handling"},{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f",to:"/react-native/santoku/decisions/adr-004-deep-link"},{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406\u306e\u65b9\u91dd",to:"react-native/santoku/decisions/adr-005-message"},{title:"\u30ed\u30b0\u51fa\u529b\u306e\u65b9\u91dd",to:"react-native/santoku/decisions/adr-006-logging"},{title:"\u8a8d\u8a3c\u65b9\u5f0f\u306e\u65b9\u91dd",to:"react-native/santoku/decisions/adr-007-auth"},{title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u65b9\u5f0f\u306e\u65b9\u91dd",to:"react-native/santoku/decisions/adr-008-push-notification"},{title:"FCM\u3092\u7528\u3044\u305f\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u7ba1\u7406\u65b9\u91dd",to:"react-native/santoku/decisions/adr-008-push-notification"},{title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u5185\u5bb9\u306b\u95a2\u3059\u308b\u65b9\u91dd",to:"react-native/santoku/decisions/adr-008-push-notification"},{title:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u53d6\u308a\u6271\u3044\u306b\u95a2\u3059\u308b\u65b9\u91dd",to:"react-native/santoku/decisions/adr-011-cache-management"},{title:"HTTP API\u901a\u4fe1\u306b\u95a2\u3059\u308b\u65b9\u91dd",to:"react-native/santoku/decisions/adr-012-http-api"},{title:"React Query\u3092\u7528\u3044\u305f\u958b\u767a\u65b9\u91dd",to:"react-native/santoku/decisions/adr-013-react-query"},{title:"UI\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u9078\u5b9a",to:"react-native/santoku/decisions/adr-014-ui-libraries"},{title:"Android\u306e\u30d8\u30c3\u30c9\u30a2\u30c3\u30d7\u901a\u77e5",to:"react-native/santoku/decisions/adr-015-android-head-up-notification"}],d=[{value:"\u5404\u5224\u65ad\u306b\u3042\u305f\u3063\u3066\u306e\u524d\u63d0",id:"\u5404\u5224\u65ad\u306b\u3042\u305f\u3063\u3066\u306e\u524d\u63d0",level:3}],u={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3084\u6a5f\u80fd\u8a2d\u8a08\u306b\u95a2\u3059\u308b\u5224\u65ad\u306e\u8a18\u9332\u3067\u3059\u3002\u5b9f\u969b\u306b\u65b9\u5f0f\u3092\u8a2d\u8a08\u3059\u308b\u969b\u306b\u3001\u3053\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3088\u308a\u6709\u52b9\u306b\u6d3b\u7528\u3067\u304d\u308b\u3088\u3046\u3001\u8a2d\u8a08\u3057\u305f\u65b9\u5f0f\u3060\u3051\u3067\u306a\u304f\u691c\u8a0e\u904e\u7a0b\u3082\u8a18\u9332\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"\u5404\u5224\u65ad\u306b\u3042\u305f\u3063\u3066\u306e\u524d\u63d0"},"\u5404\u5224\u65ad\u306b\u3042\u305f\u3063\u3066\u306e\u524d\u63d0"),(0,n.kt)("p",null,"\u5404\u5224\u65ad\u306b\u3042\u305f\u308a\u3001\u3053\u306e\u30a2\u30d7\u30ea\u306e\u6a5f\u80fd\u8981\u4ef6\u304a\u3088\u3073\u975e\u6a5f\u80fd\u8981\u4ef6\u3092\u6e80\u305f\u3059\u3053\u3068\u3092\u524d\u63d0\u3068\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/requirements"},"Requirements"))),(0,n.kt)(i.L,{overviews:p,colSize:12,mdxType:"PageList"}))}m.isMDXComponent=!0}}]);