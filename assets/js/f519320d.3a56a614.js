(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[401],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),p=a,d=f["".concat(u,".").concat(p)]||f[p]||v[p]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6742:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(9756),a=r(7294),i=r(3727),o=r(2263),c=r(3919),u=r(412),l=(0,a.createContext)({collectLink:function(){}}),s=r(4996),v=r(8780);var f=function(e){var t,r,f=e.isNavLink,p=e.to,d=e.href,m=e.activeClassName,g=e.isActive,b=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,O=void 0===y||y,w=(0,n.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=(0,o.Z)().siteConfig,_=h.trailingSlash,k=h.baseUrl,N=(0,s.C)().withBaseUrl,E=(0,a.useContext)(l),Z=p||d,j=(0,c.Z)(Z),C=null==Z?void 0:Z.replace("pathname://",""),L=void 0!==C?(r=C,O&&function(e){return e.startsWith("/")}(r)?N(r):r):void 0;L&&j&&(L=(0,v.applyTrailingSlash)(L,{trailingSlash:_,baseUrl:k}));var P,R=(0,a.useRef)(!1),S=f?i.OL:i.rU,T=u.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!T&&j&&null!=L&&window.docusaurus.prefetch(L),function(){T&&P&&P.disconnect()}}),[L,T,j]);var U=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,x=!L||!j||U;return L&&j&&!U&&!b&&E.collectLink(L),x?a.createElement("a",Object.assign({href:L},Z&&!j&&{target:"_blank",rel:"noopener noreferrer"},w)):a.createElement(S,Object.assign({},w,{onMouseEnter:function(){R.current||null==L||(window.docusaurus.preload(L),R.current=!0)},innerRef:function(e){var t,r;T&&e&&j&&(t=e,r=function(){null!=L&&window.docusaurus.prefetch(L)},(P=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.unobserve(t),P.disconnect(),r())}))}))).observe(t))},to:L||""},f&&{isActive:g,activeClassName:m}))}},3919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},4996:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return o}});var n=r(2263),a=r(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(c)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+s:s}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===n?i:(a=i,r?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},8780:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6258:function(e,t,r){"use strict";r.d(t,{L:function(){return m}});var n=r(2122),a=r(9756),i=r(6742),o=r(4996),c=r(6010),u=r(7294),l={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},s=function(e){var t=e.children,r=e.colSize,s=void 0===r?4:r,v=(0,a.Z)(e,["children","colSize"]),f=(0,o.Z)(v.to);return u.createElement("div",{className:(0,c.Z)("col","col--"+s,l.pageOverviewContainer)},u.createElement(i.Z,(0,n.Z)({className:(0,c.Z)("card",l.pageOverviewLinkCard)},v,{to:f}),t))},v=function(e){var t=e.title;return u.createElement("div",{className:(0,c.Z)("card__header",l.pageOverviewTitle)},u.createElement("h3",null,t))},f=function(e){var t=e.src,r=e.alt,i=(0,a.Z)(e,["src","alt"]),s=(0,o.Z)(t);return u.createElement("div",{className:(0,c.Z)("card__image")},u.createElement("img",(0,n.Z)({className:l.pageOverviewImage},i,{alt:r,src:s})))},p=function(e){var t=e.summary;return u.createElement("div",{className:(0,c.Z)("card__body",l.pageOverviewSummary)},u.createElement("p",null,t))},d=function(e){var t=e.title,r=e.imageUrl,n=e.summary,i=(0,a.Z)(e,["title","imageUrl","summary"]);return u.createElement(s,i,u.createElement(v,{title:t+" \xbb"}),r&&u.createElement(f,{src:r,alt:t}),n&&u.createElement(p,{summary:n}))},m=function(e){var t=e.overviews,r=e.colSize;return u.createElement("section",{className:(0,c.Z)(l.pageList)},u.createElement("div",{className:(0,c.Z)("container")},u.createElement("div",{className:(0,c.Z)("row",l.pageListRow)},t.map((function(e){return u.createElement(d,(0,n.Z)({key:e.to,colSize:r},e))})))))}},2913:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return f},default:function(){return d}});var n=r(2122),a=r(9756),i=r(7294),o=r(3905),c=r(6258),u={title:"React Native\u306e\u5b66\u7fd2",hide_table_of_contents:!0,sidebar_label:"Overview"},l=void 0,s={unversionedId:"react-native/learn",id:"react-native/learn",isDocsHomePage:!1,title:"React Native\u306e\u5b66\u7fd2",description:"\u3053\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306fReact Native\u3067\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u3092\u5b66\u7fd2\u3059\u308b\u305f\u3081\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3059\u3002",source:"@site/docs/react-native/learn.md",sourceDirName:"react-native",slug:"/react-native/learn",permalink:"/mobile-app-crib-notes/react-native/learn",version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"React Native\u306e\u5b66\u7fd2",hide_table_of_contents:!0,sidebar_label:"Overview"},sidebar:"learn",next:{title:"Overview",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started"}},v=[{title:"Getting Started",to:"/react-native/learn/getting-started",summary:(0,o.kt)(i.Fragment,null,"React Native\u3067\u306e\u30a2\u30d7\u30ea\u958b\u767a\u306b\u5fc5\u8981\u306a\u74b0\u5883\u3092\u7528\u610f\u3057\u307e\u3059\u3002")},{title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b",to:"/react-native/learn/basic-concepts",summary:(0,o.kt)(i.Fragment,null,"React Native\u3067\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3057\u59cb\u3081\u308b\u524d\u306b\u6700\u4f4e\u9650\u5fc5\u8981\u3068\u306a\u308b\u524d\u63d0\u77e5\u8b58\u3084\u3001React Native\u3068React Navigation\u306e\u57fa\u672c\u7684\u306a\u77e5\u8b58\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002")},{title:"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5",to:"/react-native/learn/todo-app",summary:(0,o.kt)(i.Fragment,null,"React Native\u3067\u7c21\u5358\u306aToDo\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002")}],f=[],p={toc:f};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u3053\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306fReact Native\u3067\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u3092\u5b66\u7fd2\u3059\u308b\u305f\u3081\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3059\u3002"),(0,o.kt)("p",null,"React\u3067Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u88c5\u3067\u304d\u308b\u304cReact Native\u3067\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u88c5\u3057\u305f\u3053\u3068\u304c\u306a\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u8005\u3092\u5bfe\u8c61\u3068\u3057\u3066\u3001\u6b21\u306e\u3053\u3068\u306b\u3064\u3044\u3066\u5b66\u3076\u3053\u3068\u3092\u76ee\u7684\u3068\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React\u3068React Native\u306e\u9055\u3044"),(0,o.kt)("li",{parentName:"ul"},"React Native\u3067\u4f5c\u6210\u3057\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u52d5\u4f5c\u78ba\u8a8d\u65b9\u6cd5")),(0,o.kt)("p",null,"\u307e\u305f\u3001\u4f5c\u6210\u3057\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u914d\u5e03\u65b9\u6cd5\u3084\u30c6\u30b9\u30c8\u624b\u6cd5\u306b\u3064\u3044\u3066\u306f\u3053\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u306f\u89e6\u308c\u307e\u305b\u3093\u3002"),(0,o.kt)(c.L,{overviews:v,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);