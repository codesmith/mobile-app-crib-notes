"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3012],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,d=m["".concat(u,".").concat(p)]||m[p]||v[p]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36742:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(63366),a=n(67294),i=n(73727),o=n(52263),c=n(13919),u=n(10412),l=(0,a.createContext)({collectLink:function(){}}),s=n(44996),v=n(18780),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var p=function(e){var t,n,p=e.isNavLink,d=e.to,f=e.href,g=e.activeClassName,h=e.isActive,y=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,k=(0,r.Z)(e,m),N=(0,o.Z)().siteConfig,O=N.trailingSlash,_=N.baseUrl,E=(0,s.C)().withBaseUrl,Z=(0,a.useContext)(l),L=d||f,j=(0,c.Z)(L),C=null==L?void 0:L.replace("pathname://",""),P=void 0!==C?(n=C,w&&function(e){return e.startsWith("/")}(n)?E(n):n):void 0;P&&j&&(P=(0,v.applyTrailingSlash)(P,{trailingSlash:O,baseUrl:_}));var x=(0,a.useRef)(!1),R=p?i.OL:i.rU,S=u.default.canUseIntersectionObserver,T=(0,a.useRef)();(0,a.useEffect)((function(){return!S&&j&&null!=P&&window.docusaurus.prefetch(P),function(){S&&T.current&&T.current.disconnect()}}),[T,P,S,j]);var U=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,A=!P||!j||U;return P&&j&&!U&&!y&&Z.collectLink(P),A?a.createElement("a",Object.assign({href:P},L&&!j&&{target:"_blank",rel:"noopener noreferrer"},k)):a.createElement(R,Object.assign({},k,{onMouseEnter:function(){x.current||null==P||(window.docusaurus.preload(P),x.current=!0)},innerRef:function(e){var t,n;S&&e&&j&&(t=e,n=function(){null!=P&&window.docusaurus.prefetch(P)},T.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.current.unobserve(t),T.current.disconnect(),n())}))})),T.current.observe(t))},to:P||""},p&&{isActive:h,activeClassName:g}))}},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(52263),a=n(13919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},66258:function(e,t,n){n.d(t,{L:function(){return y}});var r=n(87462),a=n(63366),i=n(36742),o=n(44996),c=n(86010),u=n(67294),l={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},s=["children","colSize"],v=["src","alt"],m=["title","imageUrl","summary"],p=function(e){var t=e.children,n=e.colSize,v=void 0===n?4:n,m=(0,a.Z)(e,s),p=(0,o.Z)(m.to);return u.createElement("div",{className:(0,c.Z)("col","col--"+v,l.pageOverviewContainer)},u.createElement(i.Z,(0,r.Z)({className:(0,c.Z)("card",l.pageOverviewLinkCard)},m,{to:p}),t))},d=function(e){var t=e.title;return u.createElement("div",{className:(0,c.Z)("card__header",l.pageOverviewTitle)},u.createElement("h3",null,t))},f=function(e){var t=e.src,n=e.alt,i=(0,a.Z)(e,v),s=(0,o.Z)(t);return u.createElement("div",{className:(0,c.Z)("card__image")},u.createElement("img",(0,r.Z)({className:l.pageOverviewImage},i,{alt:n,src:s})))},g=function(e){var t=e.summary;return u.createElement("div",{className:(0,c.Z)("card__body",l.pageOverviewSummary)},u.createElement("p",null,t))},h=function(e){var t=e.title,n=e.imageUrl,r=e.summary,i=(0,a.Z)(e,m);return u.createElement(p,i,u.createElement(d,{title:t+" \xbb"}),n&&u.createElement(f,{src:n,alt:t}),r&&u.createElement(g,{summary:r}))},y=function(e){var t=e.overviews,n=e.colSize;return u.createElement("section",{className:(0,c.Z)(l.pageList)},u.createElement("div",{className:(0,c.Z)("container")},u.createElement("div",{className:(0,c.Z)("row",l.pageListRow)},t.map((function(e){return u.createElement(h,(0,r.Z)({key:e.to,colSize:n},e))})))))}},40690:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(66258),c=["components"],u={title:"React Native\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",sidebar_label:"\u306f\u3058\u3081\u306b",hide_table_of_contents:!0},l=void 0,s={unversionedId:"react-native/santoku",id:"react-native/santoku",isDocsHomePage:!1,title:"React Native\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",description:"Expo\u306eBare Workflow\u3092\u5229\u7528\u3057\u3066\u3001React Native\u3067\u958b\u767a\u3057\u3066\u3044\u308b\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u3059\u3002",source:"@site/docs/react-native/santoku.mdx",sourceDirName:"react-native",slug:"/react-native/santoku",permalink:"/mobile-app-crib-notes/react-native/santoku",tags:[],version:"current",lastUpdatedAt:1638342794,formattedLastUpdatedAt:"2021/12/1",frontMatter:{title:"React Native\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",sidebar_label:"\u306f\u3058\u3081\u306b",hide_table_of_contents:!0},sidebar:"santoku",next:{title:"Glossary",permalink:"/mobile-app-crib-notes/react-native/santoku/glossary"}},v=[{title:"Glossary",summary:"\u7528\u8a9e\u96c6",to:"/react-native/santoku/glossary"},{title:"Requirements",summary:"\u8981\u4ef6\u5b9a\u7fa9",to:"/react-native/santoku/requirements"},{title:"Application Architecture",summary:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",to:"/react-native/santoku/application-architecture"},{title:"Design",summary:"\u8a2d\u8a08",to:"/react-native/santoku/design"},{title:"Development",summary:"\u958b\u767a\u30ac\u30a4\u30c9",to:"/react-native/santoku/development"},{title:"Decision Record",summary:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3084\u6a5f\u80fd\u8a2d\u8a08\u306b\u95a2\u3059\u308b\u5224\u65ad\u306e\u8a18\u9332",to:"/react-native/santoku/decisions"}],m=[],p={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Expo\u306eBare Workflow\u3092\u5229\u7528\u3057\u3066\u3001React Native\u3067\u958b\u767a\u3057\u3066\u3044\u308b\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"attention")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u624b\u6cd5\u306f\u30a6\u30a9\u30fc\u30bf\u30fc\u30d5\u30a9\u30fc\u30eb\u30e2\u30c7\u30eb\u3092\u63a1\u7528\u3057\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u7406\u7531\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u306a\u8aad\u8005\u3068\u3057\u3066\u60f3\u5b9a\u3057\u3066\u3044\u308b\u30a6\u30a9\u30fc\u30bf\u30fc\u30d5\u30a9\u30fc\u30eb\u30e2\u30c7\u30eb\u306b\u6163\u308c\u3066\u3044\u308b\u958b\u767a\u8005\u306b\u3068\u3063\u3066\u306f\u3001\u516c\u958b\u3059\u308b\u30b5\u30f3\u30d7\u30eb\u304c\u30a6\u30a9\u30fc\u30bf\u30fc\u30d5\u30a9\u30fc\u30eb\u30e2\u30c7\u30eb\u3067\u4f5c\u6210\u3059\u308b\u6210\u679c\u7269\u3068\u4e00\u81f4\u3057\u3066\u3044\u305f\u65b9\u304c\u7406\u89e3\u3057\u3084\u3059\u3044"),(0,i.kt)("li",{parentName:"ul"},"\u30a6\u30a9\u30fc\u30bf\u30fc\u30d5\u30a9\u30fc\u30eb\u30e2\u30c7\u30eb\u306b\u6cbf\u3063\u3066\u5404\u5de5\u7a0b\u3054\u3068\u306e\u6210\u679c\u7269\u3092\u4e00\u901a\u308a\u4f5c\u6210\u3057\u3001\u305d\u306e\u5f8c\u306b\u5404\u6210\u679c\u7269\u306e\u52b9\u679c\u3092\u632f\u308a\u8fd4\u308b\u3053\u3068\u3067\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u958b\u767a\u3092\u6210\u529f\u3055\u305b\u308b\u305f\u3081\u306b\u6700\u4f4e\u9650\u5fc5\u8981\u306a\u6210\u679c\u7269\u3092\u898b\u6975\u3081\u305f\u3044")))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"attention")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"React Native\u3067\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u958b\u767a\u3057\u305f\u3068\u304d\u306b\u3001\u521d\u3081\u306b\u304d\u3061\u3093\u3068\u691c\u8a0e\u3059\u308b\u3079\u304d\u3060\u3063\u305f\u3068\u3075\u308a\u304b\u3048\u3063\u305f\u30c6\u30fc\u30de\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"div"},"\u57fa\u672c\u7684\u306a\u30c6\u30fc\u30de\u304b\u3089\u9806\u756a\u306b\u53d6\u308a\u7d44\u3093\u3067\u3044\u308b\u306e\u3067\u3001\u73fe\u6642\u70b9\u3067\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u5fc5\u8981\u306b\u306a\u308b\u3067\u3042\u308d\u3046\u30c6\u30fc\u30de\u306e\u3054\u304f\u4e00\u90e8\u3057\u304b\u30ab\u30d0\u30fc\u3067\u304d\u3066\u3044\u307e\u305b\u3093\u3002\u4eca\u5f8c\u3082\u65b0\u3057\u3044\u30c6\u30fc\u30de\u3092\u8ffd\u52a0\u3057\u3001\u5185\u5bb9\u3092\u5145\u5b9f\u3055\u305b\u3066\u3044\u304d\u305f\u3044\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"div"},"\u307e\u305f\u3001\u3059\u3067\u306b\u7d39\u4ecb\u3057\u3066\u3044\u308b\u30c6\u30fc\u30de\u306b\u3064\u3044\u3066\u3082\u3001\u5185\u5bb9\u3092\u8ffd\u8a18\u3059\u308b\u53ef\u80fd\u6027\u3082\u3042\u308a\u307e\u3059\u3057\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3084\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u5909\u5316\u306a\u3069\u3067\u5909\u66f4\u3055\u308c\u3066\u3044\u304f\u53ef\u80fd\u6027\u3082\u3042\u308a\u307e\u3059\u3002"))),(0,i.kt)(o.L,{overviews:v,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);