(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1839],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),v=l(n),p=i,d=v["".concat(u,".").concat(p)]||v[p]||f[p]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=v;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(9756),i=n(7294),a=n(3727),o=n(2263),c=n(3919),u=n(412),l=(0,i.createContext)({collectLink:function(){}}),s=n(4996),f=n(8780);var v=function(e){var t,n,v=e.isNavLink,p=e.to,d=e.href,m=e.activeClassName,g=e.isActive,b=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,w=void 0===y||y,O=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=(0,o.Z)().siteConfig,_=h.trailingSlash,k=h.baseUrl,E=(0,s.C)().withBaseUrl,Z=(0,i.useContext)(l),j=p||d,C=(0,c.Z)(j),L=null==j?void 0:j.replace("pathname://",""),P=void 0!==L?(n=L,w&&function(e){return e.startsWith("/")}(n)?E(n):n):void 0;P&&C&&(P=(0,f.applyTrailingSlash)(P,{trailingSlash:_,baseUrl:k}));var N,S=(0,i.useRef)(!1),T=v?a.OL:a.rU,U=u.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!U&&C&&null!=P&&window.docusaurus.prefetch(P),function(){U&&N&&N.disconnect()}}),[P,U,C]);var x=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,D=!P||!C||x;return P&&C&&!x&&!b&&Z.collectLink(P),D?i.createElement("a",Object.assign({href:P},j&&!C&&{target:"_blank",rel:"noopener noreferrer"},O)):i.createElement(T,Object.assign({},O,{onMouseEnter:function(){S.current||null==P||(window.docusaurus.preload(P),S.current=!0)},innerRef:function(e){var t,n;U&&e&&C&&(t=e,n=function(){null!=P&&window.docusaurus.prefetch(P)},(N=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t),N.disconnect(),n())}))}))).observe(t))},to:P||""},v&&{isActive:g,activeClassName:m}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(2263),i=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,u=a.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6258:function(e,t,n){"use strict";n.d(t,{L:function(){return m}});var r=n(2122),i=n(9756),a=n(6742),o=n(4996),c=n(6010),u=n(7294),l={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},s=function(e){var t=e.children,n=e.colSize,s=void 0===n?4:n,f=(0,i.Z)(e,["children","colSize"]),v=(0,o.Z)(f.to);return u.createElement("div",{className:(0,c.Z)("col","col--"+s,l.pageOverviewContainer)},u.createElement(a.Z,(0,r.Z)({className:(0,c.Z)("card",l.pageOverviewLinkCard)},f,{to:v}),t))},f=function(e){var t=e.title;return u.createElement("div",{className:(0,c.Z)("card__header",l.pageOverviewTitle)},u.createElement("h3",null,t))},v=function(e){var t=e.src,n=e.alt,a=(0,i.Z)(e,["src","alt"]),s=(0,o.Z)(t);return u.createElement("div",{className:(0,c.Z)("card__image")},u.createElement("img",(0,r.Z)({className:l.pageOverviewImage},a,{alt:n,src:s})))},p=function(e){var t=e.summary;return u.createElement("div",{className:(0,c.Z)("card__body",l.pageOverviewSummary)},u.createElement("p",null,t))},d=function(e){var t=e.title,n=e.imageUrl,r=e.summary,a=(0,i.Z)(e,["title","imageUrl","summary"]);return u.createElement(s,a,u.createElement(f,{title:t+" \xbb"}),n&&u.createElement(v,{src:n,alt:t}),r&&u.createElement(p,{summary:r}))},m=function(e){var t=e.overviews,n=e.colSize;return u.createElement("section",{className:(0,c.Z)(l.pageList)},u.createElement("div",{className:(0,c.Z)("container")},u.createElement("div",{className:(0,c.Z)("row",l.pageListRow)},t.map((function(e){return u.createElement(d,(0,r.Z)({key:e.to,colSize:n},e))})))))}},6989:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return f},default:function(){return p}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=n(6258),c={title:"Development",sidebar_label:"Overview",hide_table_of_contents:!0},u=void 0,l={unversionedId:"react-native/santoku/development",id:"react-native/santoku/development",isDocsHomePage:!1,title:"Development",description:"const overviews = [",source:"@site/docs/react-native/santoku/development.mdx",sourceDirName:"react-native/santoku",slug:"/react-native/santoku/development",permalink:"/mobile-app-crib-notes/react-native/santoku/development",version:"current",lastUpdatedAt:1622017887,formattedLastUpdatedAt:"2021/5/26",frontMatter:{title:"Development",sidebar_label:"Overview",hide_table_of_contents:!0}},s=[{title:"\u30d3\u30eb\u30c9\u8a2d\u5b9a",to:"/react-native/santoku/development/build-variants"},{title:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u7ba1\u7406",to:"/react-native/santoku/development/dependency-management"}],f=[],v={toc:f};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.L,{overviews:s,colSize:12,mdxType:"PageList"}))}p.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);