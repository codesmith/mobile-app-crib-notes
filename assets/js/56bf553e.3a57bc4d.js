"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[9443],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),v=s(n),m=a,d=v["".concat(l,".").concat(m)]||v[m]||u[m]||i;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=v;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},26201:function(e,t,n){n.d(t,{L:function(){return y}});var r=n(87462),a=n(63366),i=n(39960),c=n(44996),o=n(86010),l=n(67294),s={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},p=["children","colSize"],u=["src","alt"],v=["title","imageUrl","summary"],m=function(e){var t=e.children,n=e.colSize,u=void 0===n?4:n,v=(0,a.Z)(e,p),m=(0,c.Z)(v.to);return l.createElement("div",{className:(0,o.Z)("col","col--"+u,s.pageOverviewContainer)},l.createElement(i.Z,(0,r.Z)({className:(0,o.Z)("card",s.pageOverviewLinkCard)},v,{to:m}),t))},d=function(e){var t=e.title;return l.createElement("div",{className:(0,o.Z)("card__header",s.pageOverviewTitle)},l.createElement("h3",null,t))},b=function(e){var t=e.src,n=e.alt,i=(0,a.Z)(e,u),p=(0,c.Z)(t);return l.createElement("div",{className:(0,o.Z)("card__image")},l.createElement("img",(0,r.Z)({className:s.pageOverviewImage},i,{alt:n,src:p})))},f=function(e){var t=e.summary;return l.createElement("div",{className:(0,o.Z)("card__body",s.pageOverviewSummary)},l.createElement("p",null,t))},g=function(e){var t=e.title,n=e.imageUrl,r=e.summary,i=(0,a.Z)(e,v);return l.createElement(m,i,l.createElement(d,{title:t+" \xbb"}),n&&l.createElement(b,{src:n,alt:t}),r&&l.createElement(f,{summary:r}))},y=function(e){var t=e.overviews,n=e.colSize;return l.createElement("section",{className:(0,o.Z)(s.pageList)},l.createElement("div",{className:(0,o.Z)("container")},l.createElement("div",{className:(0,o.Z)("row",s.pageListRow)},t.map((function(e){return l.createElement(g,(0,r.Z)({key:e.to,colSize:n},e))})))))}},44199:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return v},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),c=n(26201),o=["components"],l={title:"Design",sidebar_label:"\u6982\u8981"},s=void 0,p={unversionedId:"react-native/learn/basic-concepts/react-native-basics/design",id:"react-native/learn/basic-concepts/react-native-basics/design",title:"Design",description:"React Native\u3067\u306f\u3001JavaScript\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/design.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics",slug:"/react-native/learn/basic-concepts/react-native-basics/design",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/design",tags:[],version:"current",lastUpdatedAt:1632798153,formattedLastUpdatedAt:"2021/9/28",frontMatter:{title:"Design",sidebar_label:"\u6982\u8981"},sidebar:"learn",previous:{title:"SectionList",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/lists/section-list"},next:{title:"Style",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/design/style"}},u=[{title:"Style",to:"react-native/learn/basic-concepts/react-native-basics/design/style"},{title:"\u9ad8\u3055\u3068\u5e45",to:"react-native/learn/basic-concepts/react-native-basics/design/height-and-width"},{title:"Flexbox",to:"react-native/learn/basic-concepts/react-native-basics/design/flexbox"}],v=[],m={toc:v};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"React Native\u3067\u306f\u3001JavaScript\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\n\u307b\u3068\u3093\u3069\u306e\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"style")," \u3068\u3044\u3046\u540d\u524d\u306eprop\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u30b9\u30bf\u30a4\u30eb\u540d\u3068\u305d\u306e\u8a2d\u5b9a\u5024\u306f\u3001\u30ad\u30e3\u30e1\u30eb\u30b1\u30fc\u30b9\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u3068\u3044\u3046\u70b9\u3092\u9664\u304d\u3001Web\u306eCSS\u306e\u305d\u308c\u3068\u901a\u5e38\u306f\u4e00\u81f4\u3057\u307e\u3059\u3002\n\u4f8b\u3048\u3070\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"background-color"),"\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"backgroundColor"),"\u3068\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)(c.L,{overviews:u,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0}}]);