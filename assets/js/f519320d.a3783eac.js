"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[401],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),v=p(a),u=n,d=v["".concat(o,".").concat(u)]||v[u]||m[u]||i;return a?r.createElement(d,l(l({ref:t},s),{},{components:a})):r.createElement(d,l({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=v;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}v.displayName="MDXCreateElement"},26201:(e,t,a)=>{a.d(t,{L:()=>d});var r=a(87462),n=a(39960),i=a(44996),l=a(86010),c=a(67294);const o={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},p=e=>{let{children:t,colSize:a=4,...p}=e;const s=(0,i.Z)(p.to);return c.createElement("div",{className:(0,l.Z)("col",`col--${a}`,o.pageOverviewContainer)},c.createElement(n.Z,(0,r.Z)({className:(0,l.Z)("card",o.pageOverviewLinkCard)},p,{to:s}),t))},s=e=>{let{title:t}=e;return c.createElement("div",{className:(0,l.Z)("card__header",o.pageOverviewTitle)},c.createElement("h3",null,t))},m=e=>{let{src:t,alt:a,...n}=e;const p=(0,i.Z)(t);return c.createElement("div",{className:(0,l.Z)("card__image")},c.createElement("img",(0,r.Z)({className:o.pageOverviewImage},n,{alt:a,src:p})))},v=e=>{let{summary:t}=e;return c.createElement("div",{className:(0,l.Z)("card__body",o.pageOverviewSummary)},c.createElement("p",null,t))},u=e=>{let{title:t,imageUrl:a,summary:r,...n}=e;return c.createElement(p,n,c.createElement(s,{title:`${t} \xbb`}),a&&c.createElement(m,{src:a,alt:t}),r&&c.createElement(v,{summary:r}))},d=e=>{let{overviews:t,colSize:a}=e;return c.createElement("section",{className:(0,l.Z)(o.pageList)},c.createElement("div",{className:(0,l.Z)("container")},c.createElement("div",{className:(0,l.Z)("row",o.pageListRow)},t.map((e=>c.createElement(u,(0,r.Z)({key:e.to,colSize:a},e)))))))}},4380:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>v});var r=a(87462),n=a(67294),i=a(3905),l=a(26201);const c={title:"React Native\u306e\u5b66\u7fd2",hide_table_of_contents:!0,sidebar_label:"\u306f\u3058\u3081\u306b"},o=void 0,p={unversionedId:"react-native/learn",id:"react-native/learn",title:"React Native\u306e\u5b66\u7fd2",description:"\u3053\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306fReact Native\u3067\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u3092\u5b66\u7fd2\u3059\u308b\u305f\u3081\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3059\u3002",source:"@site/docs/react-native/learn.md",sourceDirName:"react-native",slug:"/react-native/learn",permalink:"/mobile-app-crib-notes/react-native/learn",draft:!1,tags:[],version:"current",lastUpdatedAt:1669630603,formattedLastUpdatedAt:"2022\u5e7411\u670828\u65e5",frontMatter:{title:"React Native\u306e\u5b66\u7fd2",hide_table_of_contents:!0,sidebar_label:"\u306f\u3058\u3081\u306b"},sidebar:"learn",next:{title:"\u76ee\u6b21",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started"}},s={},m=[{title:"Getting Started",to:"/react-native/learn/getting-started",summary:(0,i.kt)(n.Fragment,null,"React Native\u3067\u306e\u30a2\u30d7\u30ea\u958b\u767a\u306b\u5fc5\u8981\u306a\u74b0\u5883\u3092\u7528\u610f\u3057\u307e\u3059\u3002")},{title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b",to:"/react-native/learn/basic-concepts",summary:(0,i.kt)(n.Fragment,null,"React Native\u3067\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3057\u59cb\u3081\u308b\u524d\u306b\u6700\u4f4e\u9650\u5fc5\u8981\u3068\u306a\u308b\u524d\u63d0\u77e5\u8b58\u3084\u3001React Native\u3068React Navigation\u306e\u57fa\u672c\u7684\u306a\u77e5\u8b58\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002")},{title:"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5",to:"/react-native/learn/todo-app",summary:(0,i.kt)(n.Fragment,null,"React Native\u3067\u7c21\u5358\u306aToDo\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002")},{title:"Q&A\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5",to:"/react-native/learn/qa-app",summary:(0,i.kt)(n.Fragment,null,"React Native\u3067\u3088\u308a\u5b9f\u8df5\u7684\u306aQ&A\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002")}],v=[],u={toc:v};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u3053\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306fReact Native\u3067\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u3092\u5b66\u7fd2\u3059\u308b\u305f\u3081\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3059\u3002"),(0,i.kt)("p",null,"React\u3067Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u88c5\u3067\u304d\u308b\u304cReact Native\u3067\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u88c5\u3057\u305f\u3053\u3068\u304c\u306a\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u8005\u3092\u5bfe\u8c61\u3068\u3057\u3066\u3001\u6b21\u306e\u3053\u3068\u306b\u3064\u3044\u3066\u5b66\u3076\u3053\u3068\u3092\u76ee\u7684\u3068\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"React\u3068React Native\u306e\u9055\u3044"),(0,i.kt)("li",{parentName:"ul"},"React Native\u3067\u4f5c\u6210\u3057\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u52d5\u4f5c\u78ba\u8a8d\u65b9\u6cd5")),(0,i.kt)("p",null,"\u307e\u305f\u3001\u4f5c\u6210\u3057\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u914d\u5e03\u65b9\u6cd5\u3084\u30c6\u30b9\u30c8\u624b\u6cd5\u306b\u3064\u3044\u3066\u306f\u3053\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u306f\u89e6\u308c\u307e\u305b\u3093\u3002"),(0,i.kt)(l.L,{overviews:m,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0}}]);