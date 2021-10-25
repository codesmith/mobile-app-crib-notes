"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7767],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return v}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),v=i,p=d["".concat(s,".").concat(v)]||d[v]||f[v]||a;return n?r.createElement(p,o(o({ref:t},l),{},{components:n})):r.createElement(p,o({ref:t},l))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6742:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(102),i=n(7294),a=n(3727),o=n(2263),c=n(3919),s=n(412),u=(0,i.createContext)({collectLink:function(){}}),l=n(4996),f=n(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var t,n,v=e.isNavLink,p=e.to,m=e.href,g=e.activeClassName,b=e.isActive,y=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,w=void 0===h||h,O=(0,r.Z)(e,d),k=(0,o.Z)().siteConfig,_=k.trailingSlash,E=k.baseUrl,Z=(0,l.C)().withBaseUrl,j=(0,i.useContext)(u),P=p||m,C=(0,c.Z)(P),L=null==P?void 0:P.replace("pathname://",""),T=void 0!==L?(n=L,w&&function(e){return e.startsWith("/")}(n)?Z(n):n):void 0;T&&C&&(T=(0,f.applyTrailingSlash)(T,{trailingSlash:_,baseUrl:E}));var N,S=(0,i.useRef)(!1),U=v?a.OL:a.rU,x=s.default.canUseIntersectionObserver;(0,i.useEffect)((function(){return!x&&C&&null!=T&&window.docusaurus.prefetch(T),function(){x&&N&&N.disconnect()}}),[T,x,C]);var A=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,D=!T||!C||A;return T&&C&&!A&&!y&&j.collectLink(T),D?i.createElement("a",Object.assign({href:T},P&&!C&&{target:"_blank",rel:"noopener noreferrer"},O)):i.createElement(U,Object.assign({},O,{onMouseEnter:function(){S.current||null==T||(window.docusaurus.preload(T),S.current=!0)},innerRef:function(e){var t,n;x&&e&&C&&(t=e,n=function(){null!=T&&window.docusaurus.prefetch(T)},(N=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t),N.disconnect(),n())}))}))).observe(t))},to:T||""},v&&{isActive:b,activeClassName:g}))}},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(2263),i=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6258:function(e,t,n){n.d(t,{L:function(){return y}});var r=n(3117),i=n(102),a=n(6742),o=n(4996),c=n(6010),s=n(7294),u={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},l=["children","colSize"],f=["src","alt"],d=["title","imageUrl","summary"],v=function(e){var t=e.children,n=e.colSize,f=void 0===n?4:n,d=(0,i.Z)(e,l),v=(0,o.Z)(d.to);return s.createElement("div",{className:(0,c.Z)("col","col--"+f,u.pageOverviewContainer)},s.createElement(a.Z,(0,r.Z)({className:(0,c.Z)("card",u.pageOverviewLinkCard)},d,{to:v}),t))},p=function(e){var t=e.title;return s.createElement("div",{className:(0,c.Z)("card__header",u.pageOverviewTitle)},s.createElement("h3",null,t))},m=function(e){var t=e.src,n=e.alt,a=(0,i.Z)(e,f),l=(0,o.Z)(t);return s.createElement("div",{className:(0,c.Z)("card__image")},s.createElement("img",(0,r.Z)({className:u.pageOverviewImage},a,{alt:n,src:l})))},g=function(e){var t=e.summary;return s.createElement("div",{className:(0,c.Z)("card__body",u.pageOverviewSummary)},s.createElement("p",null,t))},b=function(e){var t=e.title,n=e.imageUrl,r=e.summary,a=(0,i.Z)(e,d);return s.createElement(v,a,s.createElement(p,{title:t+" \xbb"}),n&&s.createElement(m,{src:n,alt:t}),r&&s.createElement(g,{summary:r}))},y=function(e){var t=e.overviews,n=e.colSize;return s.createElement("section",{className:(0,c.Z)(u.pageList)},s.createElement("div",{className:(0,c.Z)("container")},s.createElement("div",{className:(0,c.Z)("row",u.pageListRow)},t.map((function(e){return s.createElement(b,(0,r.Z)({key:e.to,colSize:n},e))})))))}},7286:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=n(6258),c=["components"],s={title:"Decisions Records",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},u=void 0,l={unversionedId:"react-native/santoku/decisions",id:"react-native/santoku/decisions",isDocsHomePage:!1,title:"Decisions Records",description:"const overviews = [",source:"@site/docs/react-native/santoku/decisions.mdx",sourceDirName:"react-native/santoku",slug:"/react-native/santoku/decisions",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions",tags:[],version:"current",lastUpdatedAt:1634693385,formattedLastUpdatedAt:"2021/10/20",frontMatter:{title:"Decisions Records",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},sidebar:"santoku",previous:{title:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u7ba1\u7406",permalink:"/mobile-app-crib-notes/react-native/santoku/development/dependency-management"},next:{title:"\u30b0\u30ed\u30fc\u30d0\u30eb\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-001-error-handling"}},f=[{title:"\u30b0\u30ed\u30fc\u30d0\u30eb\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",to:"/react-native/santoku/decisions/adr-001-error-handling"},{title:"HTTP\u901a\u4fe1\u3067\u4f7f\u7528\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea",to:"/react-native/santoku/decisions/adr-002-http-api-libraries"},{title:"HTTP API\u901a\u4fe1\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",to:"/react-native/santoku/decisions/adr-003-http-api-error-handling"},{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f",to:"/react-native/santoku/decisions/adr-004-deep-link"},{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406\u306e\u65b9\u91dd",to:"react-native/santoku/decisions/adr-005-message"}],d=[],v={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.L,{overviews:f,colSize:12,mdxType:"PageList"}))}p.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);