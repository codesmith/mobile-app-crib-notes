(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3012],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),p=a,m=f["".concat(u,".").concat(p)]||f[p]||v[p]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6742:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(9756),a=r(7294),i=r(3727),o=r(2263),c=r(3919),u=r(412),l=(0,a.createContext)({collectLink:function(){}}),s=r(4996),v=r(8780);var f=function(e){var t,r,f=e.isNavLink,p=e.to,m=e.href,d=e.activeClassName,y=e.isActive,b=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,w=void 0===g||g,O=(0,n.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=(0,o.Z)().siteConfig,k=h.trailingSlash,_=h.baseUrl,E=(0,s.C)().withBaseUrl,Z=(0,a.useContext)(l),j=p||m,C=(0,c.Z)(j),P=null==j?void 0:j.replace("pathname://",""),L=void 0!==P?(r=P,w&&function(e){return e.startsWith("/")}(r)?E(r):r):void 0;L&&C&&(L=(0,v.applyTrailingSlash)(L,{trailingSlash:k,baseUrl:_}));var N,x=(0,a.useRef)(!1),S=f?i.OL:i.rU,A=u.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!A&&C&&null!=L&&window.docusaurus.prefetch(L),function(){A&&N&&N.disconnect()}}),[L,A,C]);var T=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,U=!L||!C||T;return L&&C&&!T&&!b&&Z.collectLink(L),U?a.createElement("a",Object.assign({href:L},j&&!C&&{target:"_blank",rel:"noopener noreferrer"},O)):a.createElement(S,Object.assign({},O,{onMouseEnter:function(){x.current||null==L||(window.docusaurus.preload(L),x.current=!0)},innerRef:function(e){var t,r;A&&e&&C&&(t=e,r=function(){null!=L&&window.docusaurus.prefetch(L)},(N=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t),N.disconnect(),r())}))}))).observe(t))},to:L||""},f&&{isActive:y,activeClassName:d}))}},3919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},4996:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return o}});var n=r(2263),a=r(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(c)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+s:s}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===n?i:(a=i,r?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},8780:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6258:function(e,t,r){"use strict";r.d(t,{L:function(){return d}});var n=r(2122),a=r(9756),i=r(6742),o=r(4996),c=r(6010),u=r(7294),l={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},s=function(e){var t=e.children,r=e.colSize,s=void 0===r?4:r,v=(0,a.Z)(e,["children","colSize"]),f=(0,o.Z)(v.to);return u.createElement("div",{className:(0,c.Z)("col","col--"+s,l.pageOverviewContainer)},u.createElement(i.Z,(0,n.Z)({className:(0,c.Z)("card",l.pageOverviewLinkCard)},v,{to:f}),t))},v=function(e){var t=e.title;return u.createElement("div",{className:(0,c.Z)("card__header",l.pageOverviewTitle)},u.createElement("h3",null,t))},f=function(e){var t=e.src,r=e.alt,i=(0,a.Z)(e,["src","alt"]),s=(0,o.Z)(t);return u.createElement("div",{className:(0,c.Z)("card__image")},u.createElement("img",(0,n.Z)({className:l.pageOverviewImage},i,{alt:r,src:s})))},p=function(e){var t=e.summary;return u.createElement("div",{className:(0,c.Z)("card__body",l.pageOverviewSummary)},u.createElement("p",null,t))},m=function(e){var t=e.title,r=e.imageUrl,n=e.summary,i=(0,a.Z)(e,["title","imageUrl","summary"]);return u.createElement(s,i,u.createElement(v,{title:t+" \xbb"}),r&&u.createElement(f,{src:r,alt:t}),n&&u.createElement(p,{summary:n}))},d=function(e){var t=e.overviews,r=e.colSize;return u.createElement("section",{className:(0,c.Z)(l.pageList)},u.createElement("div",{className:(0,c.Z)("container")},u.createElement("div",{className:(0,c.Z)("row",l.pageListRow)},t.map((function(e){return u.createElement(m,(0,n.Z)({key:e.to,colSize:r},e))})))))}},9739:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return v},default:function(){return p}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=r(6258),c={title:"Example Application",sidebar_label:"Overview",hide_table_of_contents:!0},u=void 0,l={unversionedId:"react-native/santoku",id:"react-native/santoku",isDocsHomePage:!1,title:"Example Application",description:"Expo\u306eBare Workflow\u3092\u5229\u7528\u3057\u3066\u3001React Native\u3067\u958b\u767a\u3057\u3066\u3044\u308b\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u3059\u3002",source:"@site/docs/react-native/santoku.mdx",sourceDirName:"react-native",slug:"/react-native/santoku",permalink:"/mobile-app-crib-notes/react-native/santoku",version:"current",lastUpdatedAt:1627370694,formattedLastUpdatedAt:"2021/7/27",frontMatter:{title:"Example Application",sidebar_label:"Overview",hide_table_of_contents:!0},sidebar:"santoku",next:{title:"Overview",permalink:"/mobile-app-crib-notes/react-native/santoku/development"}},s=[{title:"Requirements",summary:"\u8981\u6c42\u4e8b\u9805",to:"/react-native/santoku/development"},{title:"Features",summary:"\u63d0\u4f9b\u3059\u308b\u6a5f\u80fd",to:"/react-native/santoku/development"},{title:"Data",summary:"\u6271\u3046\u30c7\u30fc\u30bf\u306e\u7a2e\u985e\u3068\u69cb\u9020\u3001\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb",to:"/react-native/santoku/development"},{title:"Concurrency",summary:"\u4e26\u884c\u51e6\u7406\u3068\u540c\u671f\u5236\u5fa1\u3001\u30b9\u30b1\u30fc\u30e9\u30d3\u30ea\u30c6\u30a3",to:"/react-native/santoku/development"},{title:"Development",summary:"\u958b\u767a\u30ac\u30a4\u30c9",to:"/react-native/santoku/development"},{title:"Deployment",summary:"\u74b0\u5883\u69cb\u6210\u3068\u30c7\u30d7\u30ed\u30a4\u3001\u914d\u5e03",to:"/react-native/santoku/development"},{title:"Operational",summary:"\u904b\u7528\u306e\u305f\u3081\u306e\u6a5f\u80fd\u3084\u8003\u616e",to:"/react-native/santoku/development"},{title:"Security",summary:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u8981\u6c42\u306b\u5bfe\u3059\u308b\u5b9f\u73fe\u65b9\u5f0f",to:"/react-native/santoku/development"},{title:"Performance",summary:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3068\u30b9\u30b1\u30fc\u30e9\u30d3\u30ea\u30c6\u30a3\u306b\u5bfe\u3059\u308b\u5b9f\u73fe\u65b9\u5f0f",to:"/react-native/santoku/development"},{title:"Availability",summary:"\u53ef\u7528\u6027\u3068\u30ec\u30b8\u30ea\u30a8\u30f3\u30b9\u306b\u5bfe\u3059\u308b\u5b9f\u73fe\u65b9\u5f0f",to:"/react-native/santoku/development"},{title:"Decision Record",summary:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3084\u6a5f\u80fd\u8a2d\u8a08\u306b\u95a2\u3059\u308b\u5224\u65ad\u306e\u8a18\u9332",to:"/react-native/santoku/development"}],v=[],f={toc:v};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Expo\u306eBare Workflow\u3092\u5229\u7528\u3057\u3066\u3001React Native\u3067\u958b\u767a\u3057\u3066\u3044\u308b\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u3059\u3002"),(0,i.kt)(o.L,{overviews:s,colSize:12,mdxType:"PageList"}))}p.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);