"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7043],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),v=s(r),d=a,u=v["".concat(l,".").concat(d)]||v[d]||p[d]||i;return r?n.createElement(u,o(o({ref:t},m),{},{components:r})):n.createElement(u,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},26201:(e,t,r)=>{r.d(t,{L:()=>u});var n=r(87462),a=r(39960),i=r(44996),o=r(86010),c=r(67294);const l={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},s=e=>{let{children:t,colSize:r=4,...s}=e;const m=(0,i.Z)(s.to);return c.createElement("div",{className:(0,o.Z)("col","col--"+r,l.pageOverviewContainer)},c.createElement(a.Z,(0,n.Z)({className:(0,o.Z)("card",l.pageOverviewLinkCard)},s,{to:m}),t))},m=e=>{let{title:t}=e;return c.createElement("div",{className:(0,o.Z)("card__header",l.pageOverviewTitle)},c.createElement("h3",null,t))},p=e=>{let{src:t,alt:r,...a}=e;const s=(0,i.Z)(t);return c.createElement("div",{className:(0,o.Z)("card__image")},c.createElement("img",(0,n.Z)({className:l.pageOverviewImage},a,{alt:r,src:s})))},v=e=>{let{summary:t}=e;return c.createElement("div",{className:(0,o.Z)("card__body",l.pageOverviewSummary)},c.createElement("p",null,t))},d=e=>{let{title:t,imageUrl:r,summary:n,...a}=e;return c.createElement(s,a,c.createElement(m,{title:t+" \xbb"}),r&&c.createElement(p,{src:r,alt:t}),n&&c.createElement(v,{summary:n}))},u=e=>{let{overviews:t,colSize:r}=e;return c.createElement("section",{className:(0,o.Z)(l.pageList)},c.createElement("div",{className:(0,o.Z)("container")},c.createElement("div",{className:(0,o.Z)("row",l.pageListRow)},t.map((e=>c.createElement(d,(0,n.Z)({key:e.to,colSize:r},e)))))))}},94100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>v});var n=r(87462),a=r(67294),i=r(3905),o=r(26201);const c={title:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",sidebar_label:"\u306f\u3058\u3081\u306b"},l=void 0,s={unversionedId:"reference",id:"reference",title:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",description:"Android/iOS\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u306b\u5fc5\u8981\u3068\u306a\u308b\u57fa\u672c\u7684\u306a\u77e5\u8b58\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/reference.mdx",sourceDirName:".",slug:"/reference",permalink:"/mobile-app-crib-notes/reference",draft:!1,tags:[],version:"current",lastUpdatedAt:1632798153,formattedLastUpdatedAt:"2021/9/28",frontMatter:{title:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",sidebar_label:"\u306f\u3058\u3081\u306b"},sidebar:"reference",next:{title:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u95a2\u9023\u30ea\u30f3\u30af",permalink:"/mobile-app-crib-notes/reference/security/awesome-sites"}},m={},p=[{title:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",summary:(0,i.kt)(a.Fragment,null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u3092\u59cb\u3081\u308b\u4e0a\u3067\u53c2\u8003\u306b\u306a\u308b\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u95a2\u9023\u306e\u30ac\u30a4\u30c9\u3084\u8a18\u4e8b\u3092\u7d39\u4ecb\u3057\u3066\u3044\u307e\u3059\u3002"),to:"/reference/security/awesome-sites"},{title:"\u8a8d\u8a3c",summary:(0,i.kt)(a.Fragment,null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306e\u8a8d\u8a3c\u65b9\u5f0f\u306b\u3064\u3044\u3066\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002\u7279\u306b\u3001WebView\u3068API\u3067\u8a8d\u8a3c\u60c5\u5831\u3092\u5171\u6709\u3059\u308b\u65b9\u5f0f\u3084OpenID Connect\u3092\u7528\u3044\u3066\u8a8d\u8a3c\u3059\u308b\u5834\u5408\u306e\u65b9\u5f0f\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u3066\u3044\u307e\u3059\u3002"),to:"/reference/auth/overview"},{title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5",summary:(0,i.kt)(a.Fragment,null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306e\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\uff08\u30ea\u30e2\u30fc\u30c8\u30d7\u30c3\u30b7\u30e5\uff09\u306b\u3064\u3044\u3066\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002Firebase Cloud Messaging\u3092\u5229\u7528\u3057\u3066\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u9001\u53d7\u4fe1\u3059\u308b\u305f\u3081\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u4f8b\u3082\u8f09\u305b\u3066\u3044\u307e\u3059\u3002"),to:"/reference/notification/overview"}],v=[],d={toc:v};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Android/iOS\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u306b\u5fc5\u8981\u3068\u306a\u308b\u57fa\u672c\u7684\u306a\u77e5\u8b58\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"attention")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u3053\u308c\u307e\u3067Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u767a\u3057\u3066\u3044\u305f\u30a8\u30f3\u30b8\u30cb\u30a2\u304c\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u3092\u59cb\u3081\u308b\u305f\u3081\u306b\u8abf\u67fb\u3057\u305f\u5185\u5bb9\u306a\u3069\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001Web\u3068\u306f\u8003\u3048\u65b9\u3084\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u304c\u7570\u306a\u308b\u30dd\u30a4\u30f3\u30c8\u3092\u91cd\u8996\u3057\u305f\u5185\u5bb9\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"div"},"\u3053\u3053\u3067\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u306b\u304a\u3051\u308b\u3054\u304f\u4e00\u90e8\u306e\u5074\u9762\u3057\u304b\u7d39\u4ecb\u3067\u304d\u3066\u3044\u307e\u305b\u3093\u3002\u307e\u305f\u3001\u3059\u3067\u306b\u7d39\u4ecb\u3057\u3066\u3044\u308b\u5185\u5bb9\u306b\u3064\u3044\u3066\u3082\u3001\u5185\u5bb9\u3092\u8ffd\u8a18\u3059\u308b\u53ef\u80fd\u6027\u3082\u3042\u308a\u307e\u3059\u3057\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u5909\u5316\u306a\u3069\u3067\u5909\u66f4\u3055\u308c\u3066\u3044\u304f\u53ef\u80fd\u6027\u3082\u3042\u308a\u307e\u3059\u3002"))),(0,i.kt)(o.L,{overviews:p,colSize:12,mdxType:"PageList"}))}u.isMDXComponent=!0}}]);