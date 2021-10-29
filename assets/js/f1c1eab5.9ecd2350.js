"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1839],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),p=a,d=f["".concat(u,".").concat(p)]||f[p]||v[p]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6742:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(102),a=n(7294),i=n(3727),o=n(2263),c=n(3919),u=n(412),l=(0,a.createContext)({collectLink:function(){}}),s=n(4996),v=n(8780),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var p=function(e){var t,n,p=e.isNavLink,d=e.to,m=e.href,b=e.activeClassName,g=e.isActive,y=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,h=void 0===w||w,O=(0,r.Z)(e,f),k=(0,o.Z)().siteConfig,_=k.trailingSlash,E=k.baseUrl,Z=(0,s.C)().withBaseUrl,j=(0,a.useContext)(l),C=d||m,L=(0,c.Z)(C),P=null==C?void 0:C.replace("pathname://",""),N=void 0!==P?(n=P,h&&function(e){return e.startsWith("/")}(n)?Z(n):n):void 0;N&&L&&(N=(0,v.applyTrailingSlash)(N,{trailingSlash:_,baseUrl:E}));var S=(0,a.useRef)(!1),T=p?i.OL:i.rU,U=u.default.canUseIntersectionObserver,x=(0,a.useRef)();(0,a.useEffect)((function(){return!U&&L&&null!=N&&window.docusaurus.prefetch(N),function(){U&&x.current&&x.current.disconnect()}}),[x,N,U,L]);var D=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,A=!N||!L||D;return N&&L&&!D&&!y&&j.collectLink(N),A?a.createElement("a",Object.assign({href:N},C&&!L&&{target:"_blank",rel:"noopener noreferrer"},O)):a.createElement(T,Object.assign({},O,{onMouseEnter:function(){S.current||null==N||(window.docusaurus.preload(N),S.current=!0)},innerRef:function(e){var t,n;U&&e&&L&&(t=e,n=function(){null!=N&&window.docusaurus.prefetch(N)},x.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.current.unobserve(t),x.current.disconnect(),n())}))})),x.current.observe(t))},to:N||""},p&&{isActive:g,activeClassName:b}))}},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(2263),a=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6258:function(e,t,n){n.d(t,{L:function(){return y}});var r=n(3117),a=n(102),i=n(6742),o=n(4996),c=n(6010),u=n(7294),l={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},s=["children","colSize"],v=["src","alt"],f=["title","imageUrl","summary"],p=function(e){var t=e.children,n=e.colSize,v=void 0===n?4:n,f=(0,a.Z)(e,s),p=(0,o.Z)(f.to);return u.createElement("div",{className:(0,c.Z)("col","col--"+v,l.pageOverviewContainer)},u.createElement(i.Z,(0,r.Z)({className:(0,c.Z)("card",l.pageOverviewLinkCard)},f,{to:p}),t))},d=function(e){var t=e.title;return u.createElement("div",{className:(0,c.Z)("card__header",l.pageOverviewTitle)},u.createElement("h3",null,t))},m=function(e){var t=e.src,n=e.alt,i=(0,a.Z)(e,v),s=(0,o.Z)(t);return u.createElement("div",{className:(0,c.Z)("card__image")},u.createElement("img",(0,r.Z)({className:l.pageOverviewImage},i,{alt:n,src:s})))},b=function(e){var t=e.summary;return u.createElement("div",{className:(0,c.Z)("card__body",l.pageOverviewSummary)},u.createElement("p",null,t))},g=function(e){var t=e.title,n=e.imageUrl,r=e.summary,i=(0,a.Z)(e,f);return u.createElement(p,i,u.createElement(d,{title:t+" \xbb"}),n&&u.createElement(m,{src:n,alt:t}),r&&u.createElement(b,{summary:r}))},y=function(e){var t=e.overviews,n=e.colSize;return u.createElement("section",{className:(0,c.Z)(l.pageList)},u.createElement("div",{className:(0,c.Z)("container")},u.createElement("div",{className:(0,c.Z)("row",l.pageListRow)},t.map((function(e){return u.createElement(g,(0,r.Z)({key:e.to,colSize:n},e))})))))}},1475:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return f},default:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=n(6258),c=["components"],u={title:"Development",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},l=void 0,s={unversionedId:"react-native/santoku/development",id:"react-native/santoku/development",isDocsHomePage:!1,title:"Development",description:"const overviews = [",source:"@site/docs/react-native/santoku/development.mdx",sourceDirName:"react-native/santoku",slug:"/react-native/santoku/development",permalink:"/mobile-app-crib-notes/react-native/santoku/development",tags:[],version:"current",lastUpdatedAt:1634693385,formattedLastUpdatedAt:"2021/10/20",frontMatter:{title:"Development",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},sidebar:"santoku",previous:{title:"WebView\u3067\u30da\u30fc\u30b8\u8868\u793a\u3059\u308b\u969b\u306b\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/webview/webview-error-handling"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/development/development-environment"}},v=[{title:"\u958b\u767a\u74b0\u5883\u69cb\u7bc9",to:"/react-native/santoku/development/development-environment"},{title:"\u8a2d\u8a08",to:"/react-native/santoku/development/design"},{title:"\u5b9f\u88c5",to:"/react-native/santoku/development/implement"},{title:"\u30d3\u30eb\u30c9",to:"/react-native/santoku/development/build-configuration"},{title:"\u958b\u767a\u306b\u5229\u7528\u3059\u308b\u30c4\u30fc\u30eb",to:"/react-native/santoku/development/tools"},{title:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u7ba1\u7406",to:"/react-native/santoku/development/dependency-management"}],f=[],p={toc:f};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.L,{overviews:v,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);