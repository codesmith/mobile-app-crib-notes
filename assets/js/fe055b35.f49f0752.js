"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[423],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),v=l(n),p=i,d=v["".concat(u,".").concat(p)]||v[p]||f[p]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=v;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},36742:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(63366),i=n(67294),a=n(73727),o=n(52263),c=n(13919),u=n(10412),l=(0,i.createContext)({collectLink:function(){}}),s=n(44996),f=n(18780),v=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var p=function(e){var t,n,p=e.isNavLink,d=e.to,m=e.href,g=e.activeClassName,b=e.isActive,y=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,h=void 0===w||w,O=(0,r.Z)(e,v),k=(0,o.Z)().siteConfig,_=k.trailingSlash,E=k.baseUrl,Z=(0,s.C)().withBaseUrl,j=(0,i.useContext)(l),P=d||m,C=(0,c.Z)(P),L=null==P?void 0:P.replace("pathname://",""),N=void 0!==L?(n=L,h&&function(e){return e.startsWith("/")}(n)?Z(n):n):void 0;N&&C&&(N=(0,f.applyTrailingSlash)(N,{trailingSlash:_,baseUrl:E}));var T=(0,i.useRef)(!1),S=p?a.OL:a.rU,U=u.default.canUseIntersectionObserver,x=(0,i.useRef)();(0,i.useEffect)((function(){return!U&&C&&null!=N&&window.docusaurus.prefetch(N),function(){U&&x.current&&x.current.disconnect()}}),[x,N,U,C]);var A=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,D=!N||!C||A;return N&&C&&!A&&!y&&j.collectLink(N),D?i.createElement("a",Object.assign({href:N},P&&!C&&{target:"_blank",rel:"noopener noreferrer"},O)):i.createElement(S,Object.assign({},O,{onMouseEnter:function(){T.current||null==N||(window.docusaurus.preload(N),T.current=!0)},innerRef:function(e){var t,n;U&&e&&C&&(t=e,n=function(){null!=N&&window.docusaurus.prefetch(N)},x.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.current.unobserve(t),x.current.disconnect(),n())}))})),x.current.observe(t))},to:N||""},p&&{isActive:b,activeClassName:g}))}},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},44996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(52263),i=n(13919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,u=a.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},66258:function(e,t,n){n.d(t,{L:function(){return y}});var r=n(87462),i=n(63366),a=n(36742),o=n(44996),c=n(86010),u=n(67294),l={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},s=["children","colSize"],f=["src","alt"],v=["title","imageUrl","summary"],p=function(e){var t=e.children,n=e.colSize,f=void 0===n?4:n,v=(0,i.Z)(e,s),p=(0,o.Z)(v.to);return u.createElement("div",{className:(0,c.Z)("col","col--"+f,l.pageOverviewContainer)},u.createElement(a.Z,(0,r.Z)({className:(0,c.Z)("card",l.pageOverviewLinkCard)},v,{to:p}),t))},d=function(e){var t=e.title;return u.createElement("div",{className:(0,c.Z)("card__header",l.pageOverviewTitle)},u.createElement("h3",null,t))},m=function(e){var t=e.src,n=e.alt,a=(0,i.Z)(e,f),s=(0,o.Z)(t);return u.createElement("div",{className:(0,c.Z)("card__image")},u.createElement("img",(0,r.Z)({className:l.pageOverviewImage},a,{alt:n,src:s})))},g=function(e){var t=e.summary;return u.createElement("div",{className:(0,c.Z)("card__body",l.pageOverviewSummary)},u.createElement("p",null,t))},b=function(e){var t=e.title,n=e.imageUrl,r=e.summary,a=(0,i.Z)(e,v);return u.createElement(p,a,u.createElement(d,{title:t+" \xbb"}),n&&u.createElement(m,{src:n,alt:t}),r&&u.createElement(g,{summary:r}))},y=function(e){var t=e.overviews,n=e.colSize;return u.createElement("section",{className:(0,c.Z)(l.pageList)},u.createElement("div",{className:(0,c.Z)("container")},u.createElement("div",{className:(0,c.Z)("row",l.pageListRow)},t.map((function(e){return u.createElement(b,(0,r.Z)({key:e.to,colSize:n},e))})))))}},88816:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return v},default:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=n(66258),c=["components"],u={title:"Design",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},l=void 0,s={unversionedId:"react-native/santoku/design",id:"react-native/santoku/design",isDocsHomePage:!1,title:"Design",description:"const overviews = [",source:"@site/docs/react-native/santoku/design.mdx",sourceDirName:"react-native/santoku",slug:"/react-native/santoku/design",permalink:"/mobile-app-crib-notes/react-native/santoku/design",tags:[],version:"current",lastUpdatedAt:1637908830,formattedLastUpdatedAt:"2021/11/26",frontMatter:{title:"Design",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},sidebar:"santoku",previous:{title:"HTTP API\u901a\u4fe1\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/http-api/http-api-error-handling"},next:{title:"\u753b\u9762\u4e00\u89a7",permalink:"/mobile-app-crib-notes/react-native/santoku/design/screen-list/overview"}},f=[{title:"\u753b\u9762\u4e00\u89a7",to:"/react-native/santoku/design/screen-list/overview"},{title:"\u753b\u9762\u9077\u79fb\u56f3",to:"/react-native/santoku/design/screen-transitions/overview"},{title:"\u753b\u9762\u8a2d\u8a08",to:"/react-native/santoku/design/screen-specs/overview"},{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u4e00\u89a7",to:"/react-native/santoku/design/message-list/overview"},{title:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u8a2d\u8a08",to:"/react-native/santoku/design/context/overview"},{title:"API\u4ed5\u69d8",to:"/react-native/santoku/design/api-document"}],v=[],p={toc:v};function d(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8a2d\u8a08\u306b\u95a2\u3059\u308b\u60c5\u5831\u3067\u3059\u3002React Native\u7279\u6709\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3084\u3001\u4f5c\u6210\u6e08\u306e\u4ee5\u4e0b\u306e\u753b\u9762\uff0f\u6a5f\u80fd\u306b\u7d5e\u3063\u305f\u5f62\u3067\u516c\u958b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u30b9\u30af\u30ea\u30fc\u30f3"),(0,a.kt)("li",{parentName:"ul"},"\u5229\u7528\u898f\u7d04\u540c\u610f"),(0,a.kt)("li",{parentName:"ul"},"\u30dc\u30c8\u30e0\u30bf\u30d6\uff08\u30bf\u30d6\u5207\u308a\u66ff\u3048\uff09")),(0,a.kt)(o.L,{overviews:f,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);