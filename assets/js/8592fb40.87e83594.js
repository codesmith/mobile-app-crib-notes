"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7767],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),v=s(r),d=i,p=v["".concat(u,".").concat(d)]||v[d]||f[d]||a;return r?n.createElement(p,o(o({ref:t},l),{},{components:r})):n.createElement(p,o({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=v;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},6742:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(9756),i=r(7294),a=r(3727),o=r(2263),c=r(3919),u=r(412),s=(0,i.createContext)({collectLink:function(){}}),l=r(4996),f=r(8780);var v=function(e){var t,r,v=e.isNavLink,d=e.to,p=e.href,m=e.activeClassName,b=e.isActive,g=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,w=void 0===y||y,O=(0,n.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=(0,o.Z)().siteConfig,k=h.trailingSlash,_=h.baseUrl,E=(0,l.C)().withBaseUrl,Z=(0,i.useContext)(s),j=d||p,C=(0,c.Z)(j),L=null==j?void 0:j.replace("pathname://",""),P=void 0!==L?(r=L,w&&function(e){return e.startsWith("/")}(r)?E(r):r):void 0;P&&C&&(P=(0,f.applyTrailingSlash)(P,{trailingSlash:k,baseUrl:_}));var N,S=(0,i.useRef)(!1),T=v?a.OL:a.rU,U=u.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!U&&C&&null!=P&&window.docusaurus.prefetch(P),function(){U&&N&&N.disconnect()}}),[P,U,C]);var x=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,D=!P||!C||x;return P&&C&&!x&&!g&&Z.collectLink(P),D?i.createElement("a",Object.assign({href:P},j&&!C&&{target:"_blank",rel:"noopener noreferrer"},O)):i.createElement(T,Object.assign({},O,{onMouseEnter:function(){S.current||null==P||(window.docusaurus.preload(P),S.current=!0)},innerRef:function(e){var t,r;U&&e&&C&&(t=e,r=function(){null!=P&&window.docusaurus.prefetch(P)},(N=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t),N.disconnect(),r())}))}))).observe(t))},to:P||""},v&&{isActive:b,activeClassName:m}))}},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return i}})},4996:function(e,t,r){r.d(t,{C:function(){return a},Z:function(){return o}});var n=r(2263),i=r(3919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,c=void 0!==o&&o,u=a.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(c)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(a,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===n?a:(i=a,r?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},8780:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(i).default}});var a=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(a).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6258:function(e,t,r){r.d(t,{L:function(){return m}});var n=r(2122),i=r(9756),a=r(6742),o=r(4996),c=r(6010),u=r(7294),s={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},l=function(e){var t=e.children,r=e.colSize,l=void 0===r?4:r,f=(0,i.Z)(e,["children","colSize"]),v=(0,o.Z)(f.to);return u.createElement("div",{className:(0,c.Z)("col","col--"+l,s.pageOverviewContainer)},u.createElement(a.Z,(0,n.Z)({className:(0,c.Z)("card",s.pageOverviewLinkCard)},f,{to:v}),t))},f=function(e){var t=e.title;return u.createElement("div",{className:(0,c.Z)("card__header",s.pageOverviewTitle)},u.createElement("h3",null,t))},v=function(e){var t=e.src,r=e.alt,a=(0,i.Z)(e,["src","alt"]),l=(0,o.Z)(t);return u.createElement("div",{className:(0,c.Z)("card__image")},u.createElement("img",(0,n.Z)({className:s.pageOverviewImage},a,{alt:r,src:l})))},d=function(e){var t=e.summary;return u.createElement("div",{className:(0,c.Z)("card__body",s.pageOverviewSummary)},u.createElement("p",null,t))},p=function(e){var t=e.title,r=e.imageUrl,n=e.summary,a=(0,i.Z)(e,["title","imageUrl","summary"]);return u.createElement(l,a,u.createElement(f,{title:t+" \xbb"}),r&&u.createElement(v,{src:r,alt:t}),n&&u.createElement(d,{summary:n}))},m=function(e){var t=e.overviews,r=e.colSize;return u.createElement("section",{className:(0,c.Z)(s.pageList)},u.createElement("div",{className:(0,c.Z)("container")},u.createElement("div",{className:(0,c.Z)("row",s.pageListRow)},t.map((function(e){return u.createElement(p,(0,n.Z)({key:e.to,colSize:r},e))})))))}},289:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return f},default:function(){return d}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o=r(6258),c={title:"Decision Records",sidebar_label:"Overview",hide_table_of_contents:!0},u=void 0,s={unversionedId:"react-native/santoku/decisions",id:"react-native/santoku/decisions",isDocsHomePage:!1,title:"Decision Records",description:"const overviews = [",source:"@site/docs/react-native/santoku/decisions.mdx",sourceDirName:"react-native/santoku",slug:"/react-native/santoku/decisions",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions",version:"current",lastUpdatedAt:1629093300,formattedLastUpdatedAt:"2021/8/16",frontMatter:{title:"Decision Records",sidebar_label:"Overview",hide_table_of_contents:!0},sidebar:"santoku",previous:{title:"Overview",permalink:"/mobile-app-crib-notes/react-native/santoku"},next:{title:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-001-error-handling"}},l=[{title:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",to:"/react-native/santoku/decisions/adr-001-error-handling"}],f=[],v={toc:f};function d(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.L,{overviews:l,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0},6010:function(e,t,r){function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:function(){return i}})}}]);