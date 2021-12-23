"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[4557],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),v=a,d=m["".concat(l,".").concat(v)]||m[v]||p[v]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26201:function(e,t,r){r.d(t,{L:function(){return b}});var n=r(87462),a=r(63366),o=r(39960),i=r(44996),c=r(86010),l=r(67294),s={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},u=["children","colSize"],p=["src","alt"],m=["title","imageUrl","summary"],v=function(e){var t=e.children,r=e.colSize,p=void 0===r?4:r,m=(0,a.Z)(e,u),v=(0,i.Z)(m.to);return l.createElement("div",{className:(0,c.Z)("col","col--"+p,s.pageOverviewContainer)},l.createElement(o.Z,(0,n.Z)({className:(0,c.Z)("card",s.pageOverviewLinkCard)},m,{to:v}),t))},d=function(e){var t=e.title;return l.createElement("div",{className:(0,c.Z)("card__header",s.pageOverviewTitle)},l.createElement("h3",null,t))},f=function(e){var t=e.src,r=e.alt,o=(0,a.Z)(e,p),u=(0,i.Z)(t);return l.createElement("div",{className:(0,c.Z)("card__image")},l.createElement("img",(0,n.Z)({className:s.pageOverviewImage},o,{alt:r,src:u})))},g=function(e){var t=e.summary;return l.createElement("div",{className:(0,c.Z)("card__body",s.pageOverviewSummary)},l.createElement("p",null,t))},y=function(e){var t=e.title,r=e.imageUrl,n=e.summary,o=(0,a.Z)(e,m);return l.createElement(v,o,l.createElement(d,{title:t+" \xbb"}),r&&l.createElement(f,{src:r,alt:t}),n&&l.createElement(g,{summary:n}))},b=function(e){var t=e.overviews,r=e.colSize;return l.createElement("section",{className:(0,c.Z)(s.pageList)},l.createElement("div",{className:(0,c.Z)("container")},l.createElement("div",{className:(0,c.Z)("row",s.pageListRow)},t.map((function(e){return l.createElement(y,(0,n.Z)({key:e.to,colSize:r},e))})))))}},50620:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(26201),c=["components"],l={title:"\u958b\u767a\u306b\u5229\u7528\u3059\u308b\u30c4\u30fc\u30eb",sidebar_label:"\u6982\u8981"},s=void 0,u={unversionedId:"react-native/santoku/development/tools",id:"react-native/santoku/development/tools",title:"\u958b\u767a\u306b\u5229\u7528\u3059\u308b\u30c4\u30fc\u30eb",description:"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u306b\u5229\u7528\u3057\u3066\u3044\u308b\u30c4\u30fc\u30eb\u3068\u3001\u305d\u306e\u8a2d\u5b9a\u306a\u3069\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/development/tools.mdx",sourceDirName:"react-native/santoku/development",slug:"/react-native/santoku/development/tools",permalink:"/mobile-app-crib-notes/react-native/santoku/development/tools",tags:[],version:"current",lastUpdatedAt:1632798153,formattedLastUpdatedAt:"2021/9/28",frontMatter:{title:"\u958b\u767a\u306b\u5229\u7528\u3059\u308b\u30c4\u30fc\u30eb",sidebar_label:"\u6982\u8981"},sidebar:"santoku",previous:{title:"\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\uff0f\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u4f5c\u6210",permalink:"/mobile-app-crib-notes/react-native/santoku/development/test/create-emulator-simulator"},next:{title:"Visual Studio Code",permalink:"/mobile-app-crib-notes/react-native/santoku/development/tools/vscode"}},p=[{title:"Visual Studio Code",to:"/react-native/santoku/development/tools/vscode"},{title:"Flipper",to:"/react-native/santoku/development/tools/flipper"}],m=[],v={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u306b\u5229\u7528\u3057\u3066\u3044\u308b\u30c4\u30fc\u30eb\u3068\u3001\u305d\u306e\u8a2d\u5b9a\u306a\u3069\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,o.kt)(i.L,{overviews:p,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0}}]);