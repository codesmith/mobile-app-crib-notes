"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8716],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),v=s(r),u=n,d=v["".concat(o,".").concat(u)]||v[u]||m[u]||i;return r?a.createElement(d,c(c({ref:t},p),{},{components:r})):a.createElement(d,c({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=v;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<i;s++)c[s]=r[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},26201:(e,t,r)=>{r.d(t,{L:()=>d});var a=r(87462),n=r(39960),i=r(44996),c=r(86010),l=r(67294);const o={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},s=e=>{let{children:t,colSize:r=4,...s}=e;const p=(0,i.Z)(s.to);return l.createElement("div",{className:(0,c.Z)("col","col--"+r,o.pageOverviewContainer)},l.createElement(n.Z,(0,a.Z)({className:(0,c.Z)("card",o.pageOverviewLinkCard)},s,{to:p}),t))},p=e=>{let{title:t}=e;return l.createElement("div",{className:(0,c.Z)("card__header",o.pageOverviewTitle)},l.createElement("h3",null,t))},m=e=>{let{src:t,alt:r,...n}=e;const s=(0,i.Z)(t);return l.createElement("div",{className:(0,c.Z)("card__image")},l.createElement("img",(0,a.Z)({className:o.pageOverviewImage},n,{alt:r,src:s})))},v=e=>{let{summary:t}=e;return l.createElement("div",{className:(0,c.Z)("card__body",o.pageOverviewSummary)},l.createElement("p",null,t))},u=e=>{let{title:t,imageUrl:r,summary:a,...n}=e;return l.createElement(s,n,l.createElement(p,{title:t+" \xbb"}),r&&l.createElement(m,{src:r,alt:t}),a&&l.createElement(v,{summary:a}))},d=e=>{let{overviews:t,colSize:r}=e;return l.createElement("section",{className:(0,c.Z)(o.pageList)},l.createElement("div",{className:(0,c.Z)("container")},l.createElement("div",{className:(0,c.Z)("row",o.pageListRow)},t.map((e=>l.createElement(u,(0,a.Z)({key:e.to,colSize:r},e)))))))}},48646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>v});var a=r(87462),n=r(67294),i=r(3905),c=r(26201);const l={title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},o=void 0,s={unversionedId:"react-native/learn/basic-concepts",id:"react-native/learn/basic-concepts",title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b",description:"\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3059\u308b\u524d\u306b\u5fc5\u8981\u3068\u306a\u308b\u524d\u63d0\u77e5\u8b58\u3092\u78ba\u8a8d\u3057\u305f\u5f8c\u3001React Native\u306e\u57fa\u672c\u3001React Navigation\u306e\u57fa\u672c\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts.mdx",sourceDirName:"react-native/learn",slug:"/react-native/learn/basic-concepts",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts",draft:!1,tags:[],version:"current",lastUpdatedAt:1632798153,formattedLastUpdatedAt:"2021/9/28",frontMatter:{title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},sidebar:"learn",previous:{title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/launch-created-app"},next:{title:"\u524d\u63d0\u77e5\u8b58",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/pre-requisites"}},p={},m=[{title:"\u524d\u63d0\u77e5\u8b58",summary:(0,i.kt)(n.Fragment,null,"\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3059\u308b\u524d\u306b\u5fc5\u8981\u3068\u306a\u308b\u524d\u63d0\u77e5\u8b58\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),to:"/react-native/learn/basic-concepts/pre-requisites"},{title:"React Native\u306e\u57fa\u672c",summary:(0,i.kt)(n.Fragment,null,"React Native\u306e\u57fa\u672c\u77e5\u8b58\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002"),to:"/react-native/learn/basic-concepts/react-native-basics"},{title:"React Navigation\u306e\u57fa\u672c",summary:(0,i.kt)(n.Fragment,null,"React Navigation\u306e\u57fa\u672c\u77e5\u8b58\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002"),to:"/react-native/learn/basic-concepts/react-navigation-basics"}],v=[],u={toc:v};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3059\u308b\u524d\u306b\u5fc5\u8981\u3068\u306a\u308b\u524d\u63d0\u77e5\u8b58\u3092\u78ba\u8a8d\u3057\u305f\u5f8c\u3001React Native\u306e\u57fa\u672c\u3001React Navigation\u306e\u57fa\u672c\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002"),(0,i.kt)(c.L,{overviews:m,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0}}]);