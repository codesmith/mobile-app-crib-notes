(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1839],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),p=a,m=f["".concat(u,".").concat(p)]||f[p]||v[p]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(9756),a=n(7294),i=n(3727),o=n(3919),c=n(412),u=(0,a.createContext)({collectLink:function(){}}),l=n(4996);var s=function(e){var t,n,s,v=e.isNavLink,f=e.to,p=e.href,m=e.activeClassName,d=e.isActive,g=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,y=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),O=(0,l.C)().withBaseUrl,h=(0,a.useContext)(u),k=f||p,E=(0,o.Z)(k),_=null==k?void 0:k.replace("pathname://",""),Z=void 0!==_?(n=_,w&&function(e){return e.startsWith("/")}(n)?O(n):n):void 0,C=(0,a.useRef)(!1),L=v?i.OL:i.rU,j=c.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!j&&E&&null!=Z&&window.docusaurus.prefetch(Z),function(){j&&s&&s.disconnect()}}),[Z,j,E]);var N=null!==(t=null==Z?void 0:Z.startsWith("#"))&&void 0!==t&&t,P=!Z||!E||N;return Z&&E&&!N&&!g&&h.collectLink(Z),P?a.createElement("a",Object.assign({href:Z},k&&!E&&{target:"_blank",rel:"noopener noreferrer"},y)):a.createElement(L,Object.assign({},y,{onMouseEnter:function(){C.current||null==Z||(window.docusaurus.preload(Z),C.current=!0)},innerRef:function(e){var t,n;j&&e&&E&&(t=e,n=function(){null!=Z&&window.docusaurus.prefetch(Z)},(s=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t),s.disconnect(),n())}))}))).observe(t))},to:Z||""},v&&{isActive:d,activeClassName:m}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(2263),a=n(3919);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},6258:function(e,t,n){"use strict";n.d(t,{L:function(){return d}});var r=n(2122),a=n(9756),i=n(6742),o=n(4996),c=n(6010),u=n(7294),l={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},s=function(e){var t=e.children,n=e.colSize,s=void 0===n?4:n,v=(0,a.Z)(e,["children","colSize"]),f=(0,o.Z)(v.to);return u.createElement("div",{className:(0,c.Z)("col","col--"+s,l.pageOverviewContainer)},u.createElement(i.Z,(0,r.Z)({className:(0,c.Z)("card",l.pageOverviewLinkCard)},v,{to:f}),t))},v=function(e){var t=e.title;return u.createElement("div",{className:(0,c.Z)("card__header",l.pageOverviewTitle)},u.createElement("h3",null,t))},f=function(e){var t=e.src,n=e.alt,i=(0,a.Z)(e,["src","alt"]),s=(0,o.Z)(t);return u.createElement("div",{className:(0,c.Z)("card__image")},u.createElement("img",(0,r.Z)({className:l.pageOverviewImage},i,{alt:n,src:s})))},p=function(e){var t=e.summary;return u.createElement("div",{className:(0,c.Z)("card__body",l.pageOverviewSummary)},u.createElement("p",null,t))},m=function(e){var t=e.title,n=e.imageUrl,r=e.summary,i=(0,a.Z)(e,["title","imageUrl","summary"]);return u.createElement(s,i,u.createElement(v,{title:t+" \xbb"}),n&&u.createElement(f,{src:n,alt:t}),r&&u.createElement(p,{summary:r}))},d=function(e){var t=e.overviews,n=e.colSize;return u.createElement("section",{className:(0,c.Z)(l.pageList)},u.createElement("div",{className:(0,c.Z)("container")},u.createElement("div",{className:(0,c.Z)("row",l.pageListRow)},t.map((function(e){return u.createElement(m,(0,r.Z)({key:e.to,colSize:n},e))})))))}},6989:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=n(6258),c={title:"Development",sidebar_label:"Overview",hide_table_of_contents:!0},u={unversionedId:"react-native/santoku/development",id:"react-native/santoku/development",isDocsHomePage:!1,title:"Development",description:"const overviews = [",source:"@site/docs/react-native/santoku/development.mdx",sourceDirName:"react-native/santoku",slug:"/react-native/santoku/development",permalink:"/mobile-app-crib-notes/react-native/santoku/development",version:"current",lastUpdatedAt:1622017887,formattedLastUpdatedAt:"2021/5/26",sidebar_label:"Overview",frontMatter:{title:"Development",sidebar_label:"Overview",hide_table_of_contents:!0}},l=[{title:"\u30d3\u30eb\u30c9\u8a2d\u5b9a",to:"/react-native/santoku/development/build-variants"},{title:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u7ba1\u7406",to:"/react-native/santoku/development/dependency-management"}],s=[],v={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.L,{overviews:l,colSize:12,mdxType:"PageList"}))}f.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);