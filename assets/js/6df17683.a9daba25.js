"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2193],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),v=l(r),p=a,d=v["".concat(u,".").concat(p)]||v[p]||f[p]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=v;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},36742:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(63366),a=r(67294),i=r(73727),o=r(52263),c=r(13919),u=r(10412),l=(0,a.createContext)({collectLink:function(){}}),s=r(44996),f=r(18780),v=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var p=function(e){var t,r,p=e.isNavLink,d=e.to,m=e.href,g=e.activeClassName,b=e.isActive,y=e["data-noBrokenLinkCheck"],O=e.autoAddBaseUrl,h=void 0===O||O,w=(0,n.Z)(e,v),_=(0,o.Z)().siteConfig,k=_.trailingSlash,E=_.baseUrl,Z=(0,s.C)().withBaseUrl,j=(0,a.useContext)(l),C=d||m,N=(0,c.Z)(C),L=null==C?void 0:C.replace("pathname://",""),P=void 0!==L?(r=L,h&&function(e){return e.startsWith("/")}(r)?Z(r):r):void 0;P&&N&&(P=(0,f.applyTrailingSlash)(P,{trailingSlash:k,baseUrl:E}));var S=(0,a.useRef)(!1),T=p?i.OL:i.rU,U=u.default.canUseIntersectionObserver,x=(0,a.useRef)();(0,a.useEffect)((function(){return!U&&N&&null!=P&&window.docusaurus.prefetch(P),function(){U&&x.current&&x.current.disconnect()}}),[x,P,U,N]);var R=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,A=!P||!N||R;return P&&N&&!R&&!y&&j.collectLink(P),A?a.createElement("a",Object.assign({href:P},C&&!N&&{target:"_blank",rel:"noopener noreferrer"},w)):a.createElement(T,Object.assign({},w,{onMouseEnter:function(){S.current||null==P||(window.docusaurus.preload(P),S.current=!0)},innerRef:function(e){var t,r;U&&e&&N&&(t=e,r=function(){null!=P&&window.docusaurus.prefetch(P)},x.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.current.unobserve(t),x.current.disconnect(),r())}))})),x.current.observe(t))},to:P||""},p&&{isActive:b,activeClassName:g}))}},13919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},44996:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return o}});var n=r(52263),a=r(13919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(c)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+s:s}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===n?i:(a=i,r?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},18780:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},66258:function(e,t,r){r.d(t,{L:function(){return y}});var n=r(87462),a=r(63366),i=r(36742),o=r(44996),c=r(86010),u=r(67294),l={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},s=["children","colSize"],f=["src","alt"],v=["title","imageUrl","summary"],p=function(e){var t=e.children,r=e.colSize,f=void 0===r?4:r,v=(0,a.Z)(e,s),p=(0,o.Z)(v.to);return u.createElement("div",{className:(0,c.Z)("col","col--"+f,l.pageOverviewContainer)},u.createElement(i.Z,(0,n.Z)({className:(0,c.Z)("card",l.pageOverviewLinkCard)},v,{to:p}),t))},d=function(e){var t=e.title;return u.createElement("div",{className:(0,c.Z)("card__header",l.pageOverviewTitle)},u.createElement("h3",null,t))},m=function(e){var t=e.src,r=e.alt,i=(0,a.Z)(e,f),s=(0,o.Z)(t);return u.createElement("div",{className:(0,c.Z)("card__image")},u.createElement("img",(0,n.Z)({className:l.pageOverviewImage},i,{alt:r,src:s})))},g=function(e){var t=e.summary;return u.createElement("div",{className:(0,c.Z)("card__body",l.pageOverviewSummary)},u.createElement("p",null,t))},b=function(e){var t=e.title,r=e.imageUrl,n=e.summary,i=(0,a.Z)(e,v);return u.createElement(p,i,u.createElement(d,{title:t+" \xbb"}),r&&u.createElement(m,{src:r,alt:t}),n&&u.createElement(g,{summary:n}))},y=function(e){var t=e.overviews,r=e.colSize;return u.createElement("section",{className:(0,c.Z)(l.pageList)},u.createElement("div",{className:(0,c.Z)("container")},u.createElement("div",{className:(0,c.Z)("row",l.pageListRow)},t.map((function(e){return u.createElement(b,(0,n.Z)({key:e.to,colSize:r},e))})))))}},53894:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return f},toc:function(){return p},default:function(){return m}});var n=r(87462),a=r(63366),i=r(67294),o=r(3905),c=r(66258),u=["components"],l={title:"Getting Started",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},s=void 0,f={unversionedId:"react-native/learn/getting-started",id:"react-native/learn/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"React Native\u3067\u306e\u30a2\u30d7\u30ea\u958b\u767a\u306b\u5fc5\u8981\u306a\u74b0\u5883\u3092\u7528\u610f\u3057\u3001\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3067\u304d\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/getting-started.mdx",sourceDirName:"react-native/learn",slug:"/react-native/learn/getting-started",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started",tags:[],version:"current",lastUpdatedAt:1632798153,formattedLastUpdatedAt:"2021/9/28",frontMatter:{title:"Getting Started",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},sidebar:"learn",previous:{title:"\u306f\u3058\u3081\u306b",permalink:"/mobile-app-crib-notes/react-native/learn"},next:{title:"\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/setting-up-development-environment"}},v=[{title:"\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9",summary:(0,o.kt)(i.Fragment,null,"React Native\u3067\u306e\u30a2\u30d7\u30ea\u958b\u767a\u306b\u5fc5\u8981\u306a\u30c4\u30fc\u30eb\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),to:"/react-native/learn/getting-started/setting-up-development-environment"},{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",summary:(0,o.kt)(i.Fragment,null,"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304b\u3089React Native\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),to:"/react-native/learn/getting-started/create-project"},{title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c",summary:(0,o.kt)(i.Fragment,null,"React Native\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304b\u3089\u3001\u3044\u304f\u3064\u304b\u306e\u65b9\u6cd5\u3067\u30a2\u30d7\u30ea\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),to:"/react-native/learn/getting-started/launch-created-app"}],p=[],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"React Native\u3067\u306e\u30a2\u30d7\u30ea\u958b\u767a\u306b\u5fc5\u8981\u306a\u74b0\u5883\u3092\u7528\u610f\u3057\u3001\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3067\u304d\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,o.kt)(c.L,{overviews:v,colSize:12,mdxType:"PageList"}))}m.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);