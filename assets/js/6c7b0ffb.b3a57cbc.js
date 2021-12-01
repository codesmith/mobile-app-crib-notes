"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[9517],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,v=p["".concat(l,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(v,o(o({ref:t},s),{},{components:n})):r.createElement(v,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36742:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(63366),a=n(67294),i=n(73727),o=n(52263),u=n(13919),l=n(10412),c=(0,a.createContext)({collectLink:function(){}}),s=n(44996),f=n(18780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var m=function(e){var t,n,m=e.isNavLink,v=e.to,d=e.href,g=e.activeClassName,y=e.isActive,b=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,w=void 0===h||h,k=(0,r.Z)(e,p),O=(0,o.Z)().siteConfig,_=O.trailingSlash,E=O.baseUrl,j=(0,s.C)().withBaseUrl,Z=(0,a.useContext)(c),C=v||d,L=(0,u.Z)(C),N=null==C?void 0:C.replace("pathname://",""),P=void 0!==N?(n=N,w&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0;P&&L&&(P=(0,f.applyTrailingSlash)(P,{trailingSlash:_,baseUrl:E}));var S=(0,a.useRef)(!1),T=m?i.OL:i.rU,U=l.default.canUseIntersectionObserver,x=(0,a.useRef)();(0,a.useEffect)((function(){return!U&&L&&null!=P&&window.docusaurus.prefetch(P),function(){U&&x.current&&x.current.disconnect()}}),[x,P,U,L]);var A=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,q=!P||!L||A;return P&&L&&!A&&!b&&Z.collectLink(P),q?a.createElement("a",Object.assign({href:P},C&&!L&&{target:"_blank",rel:"noopener noreferrer"},k)):a.createElement(T,Object.assign({},k,{onMouseEnter:function(){S.current||null==P||(window.docusaurus.preload(P),S.current=!0)},innerRef:function(e){var t,n;U&&e&&L&&(t=e,n=function(){null!=P&&window.docusaurus.prefetch(P)},x.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.current.unobserve(t),x.current.disconnect(),n())}))})),x.current.observe(t))},to:P||""},m&&{isActive:y,activeClassName:g}))}},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(52263),a=n(13919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,u=void 0!==o&&o,l=i.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(u)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},66258:function(e,t,n){n.d(t,{L:function(){return b}});var r=n(87462),a=n(63366),i=n(36742),o=n(44996),u=n(86010),l=n(67294),c={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},s=["children","colSize"],f=["src","alt"],p=["title","imageUrl","summary"],m=function(e){var t=e.children,n=e.colSize,f=void 0===n?4:n,p=(0,a.Z)(e,s),m=(0,o.Z)(p.to);return l.createElement("div",{className:(0,u.Z)("col","col--"+f,c.pageOverviewContainer)},l.createElement(i.Z,(0,r.Z)({className:(0,u.Z)("card",c.pageOverviewLinkCard)},p,{to:m}),t))},v=function(e){var t=e.title;return l.createElement("div",{className:(0,u.Z)("card__header",c.pageOverviewTitle)},l.createElement("h3",null,t))},d=function(e){var t=e.src,n=e.alt,i=(0,a.Z)(e,f),s=(0,o.Z)(t);return l.createElement("div",{className:(0,u.Z)("card__image")},l.createElement("img",(0,r.Z)({className:c.pageOverviewImage},i,{alt:n,src:s})))},g=function(e){var t=e.summary;return l.createElement("div",{className:(0,u.Z)("card__body",c.pageOverviewSummary)},l.createElement("p",null,t))},y=function(e){var t=e.title,n=e.imageUrl,r=e.summary,i=(0,a.Z)(e,p);return l.createElement(m,i,l.createElement(v,{title:t+" \xbb"}),n&&l.createElement(d,{src:n,alt:t}),r&&l.createElement(g,{summary:r}))},b=function(e){var t=e.overviews,n=e.colSize;return l.createElement("section",{className:(0,u.Z)(c.pageList)},l.createElement("div",{className:(0,u.Z)("container")},l.createElement("div",{className:(0,u.Z)("row",c.pageListRow)},t.map((function(e){return l.createElement(y,(0,r.Z)({key:e.to,colSize:n},e))})))))}},45474:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return f},toc:function(){return v},default:function(){return g}});var r=n(87462),a=n(63366),i=n(67294),o=n(3905),u=n(66258),l=["components"],c={title:"\u975e\u6a5f\u80fd\u8981\u4ef6",sidebar_label:"\u6982\u8981"},s=void 0,f={unversionedId:"react-native/santoku/requirements/non-functional/overview",id:"react-native/santoku/requirements/non-functional/overview",isDocsHomePage:!1,title:"\u975e\u6a5f\u80fd\u8981\u4ef6",description:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u975e\u6a5f\u80fd\u8981\u4ef6\u306b\u3064\u3044\u3066\u307e\u3068\u3081\u305f\u3082\u306e\u3067\u3059\u3002",source:"@site/docs/react-native/santoku/requirements/non-functional/overview.mdx",sourceDirName:"react-native/santoku/requirements/non-functional",slug:"/react-native/santoku/requirements/non-functional/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/requirements/non-functional/overview",tags:[],version:"current",lastUpdatedAt:1637831928,formattedLastUpdatedAt:"2021/11/25",frontMatter:{title:"\u975e\u6a5f\u80fd\u8981\u4ef6",sidebar_label:"\u6982\u8981"},sidebar:"santoku",previous:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/requirements/functional/overview"},next:{title:"\u30e6\u30fc\u30b6\u30d3\u30ea\u30c6\u30a3\u304a\u3088\u3073\u30a2\u30af\u30bb\u30b7\u30d3\u30ea\u30c6\u30a3\u306b\u95a2\u3059\u308b\u4e8b\u9805",permalink:"/mobile-app-crib-notes/react-native/santoku/requirements/non-functional/usability"}},p="/react-native/santoku/requirements/non-functional",m=[{title:"\u30e6\u30fc\u30b6\u30d3\u30ea\u30c6\u30a3\u304a\u3088\u3073\u30a2\u30af\u30bb\u30b7\u30d3\u30ea\u30c6\u30a3\u306b\u95a2\u3059\u308b\u4e8b\u9805",summary:(0,o.kt)(i.Fragment,null,"\u4e3b\u306b\u30e6\u30fc\u30b6\u306e\u4f7f\u3044\u3084\u3059\u3055\u3084\u5229\u4fbf\u6027\u306e\u57fa\u6e96\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002"),to:p+"/usability"},{title:"\u30b7\u30b9\u30c6\u30e0\u65b9\u5f0f\u306b\u95a2\u3059\u308b\u4e8b\u9805",summary:(0,o.kt)(i.Fragment,null,"\u4e3b\u306b\u63a1\u7528\u3059\u308b\u30b7\u30b9\u30c6\u30e0\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306e\u7559\u610f\u4e8b\u9805\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002"),to:p+"/system-method"},{title:"\u6027\u80fd\u306b\u95a2\u3059\u308b\u4e8b\u9805",summary:(0,o.kt)(i.Fragment,null,"\u4e3b\u306b\u30a2\u30d7\u30ea\u3067\u7559\u610f\u3059\u308b\u3079\u304d\u6027\u80fd\u8981\u4ef6\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002"),to:p+"/performance"},{title:"\u4e0a\u4f4d\u4e92\u63db\u6027\u306b\u95a2\u3059\u308b\u4e8b\u9805",summary:(0,o.kt)(i.Fragment,null,"\u4e3b\u306bOS\u30d0\u30fc\u30b8\u30e7\u30f3\u30a2\u30c3\u30d7\u3084\u5916\u90e8\u30e9\u30a4\u30d6\u30e9\u30ea\u30d0\u30fc\u30b8\u30e7\u30f3\u30a2\u30c3\u30d7\u3067\u306e\u6ce8\u610f\u4e8b\u9805\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002"),to:p+"/compatibility"},{title:"\u60c5\u5831\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306b\u95a2\u3059\u308b\u4e8b\u9805",summary:(0,o.kt)(i.Fragment,null,"\u4e3b\u306b\u30a2\u30d7\u30ea\u3067\u6ce8\u610f\u3059\u3079\u304d\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e8b\u9805\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002"),to:p+"/security"},{title:"\u30c6\u30b9\u30c8\u306b\u95a2\u3059\u308b\u4e8b\u9805",summary:(0,o.kt)(i.Fragment,null,"\u4e3b\u306b\u5404\u30c6\u30b9\u30c8\u30d5\u30a7\u30fc\u30ba\u306b\u304a\u3044\u3066\u306e\u5b9f\u65bd\u8981\u7db1\u3084\u57fa\u6e96\u3001\u5b9f\u65bd\u65b9\u6cd5\u306a\u3069\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002"),to:p+"/test-outline"},{title:"\u904b\u7528\u306b\u95a2\u3059\u308b\u4e8b\u9805",summary:(0,o.kt)(i.Fragment,null,"\u4e3b\u306b\u30a8\u30e9\u30fc\u76e3\u8996\u3084\u30b9\u30c8\u30a2\u4e0a\u3067\u306e\u7ba1\u7406\u6307\u91dd\u306a\u3069\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002"),to:p+"/operation"},{title:"\u4fdd\u5b88\u306b\u95a2\u3059\u308b\u4e8b\u9805",summary:(0,o.kt)(i.Fragment,null,"\u4e3b\u306bOS\u30fb\u5916\u90e8\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u30a2\u30c3\u30d7\u3078\u306e\u5bfe\u5fdc\u65b9\u91dd\u306a\u3069\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002"),to:p+"/maintenance"},{title:"\u305d\u306e\u4ed6\u4e8b\u9805",summary:(0,o.kt)(i.Fragment,null,"\u4e0a\u8a18\u4ee5\u5916\u306e\u8981\u4ef6\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002"),to:p+"/other"}],v=[{value:"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u975e\u6a5f\u80fd\u8981\u4ef6\u3092\u5b9a\u7fa9\u3059\u308b\u306b\u3042\u305f\u3063\u3066\u306e\u524d\u63d0",id:"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u975e\u6a5f\u80fd\u8981\u4ef6\u3092\u5b9a\u7fa9\u3059\u308b\u306b\u3042\u305f\u3063\u3066\u306e\u524d\u63d0",children:[],level:3}],d={toc:v};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u975e\u6a5f\u80fd\u8981\u4ef6\u306b\u3064\u3044\u3066\u307e\u3068\u3081\u305f\u3082\u306e\u3067\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u653f\u5e9c\u516c\u958b\u306e",(0,o.kt)("a",{parentName:"p",href:"https://cio.go.jp/sites/default/files/uploads/documents/hyoujun_guideline_20210330.pdf"},"\u30c7\u30b8\u30bf\u30eb\u30fb\u30ac\u30d0\u30e1\u30f3\u30c8\u63a8\u9032\u6a19\u6e96\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3"),"\u306e\u300c\u7b2c3\u7de8IT\u30de\u30cd\u30b8\u30e1\u30f3\u30c8\u30fc\u7b2c5\u7ae0\u3000\u8981\u4ef6\u5b9a\u7fa9\u300d\u306b\u3042\u308b\u300c\u30a6\u3000\u975e\u6a5f\u80fd\u8981\u4ef6\u306e\u5b9a\u7fa9\u300d\u3092\u53c2\u8003\u306b\u3001\u975e\u6a5f\u80fd\u8981\u4ef6\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\n\u3053\u3053\u3067\u5b9a\u7fa9\u3057\u305f\u3082\u306e\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/jp/app-store/review/guidelines/"},"Apple Review Guideline"),"\u3068",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/googleplay/android-developer/answer/9859455?hl=ja"},"Google \u30d8\u30eb\u30d7(\u5be9\u67fb\u306e\u305f\u3081\u306b\u30a2\u30d7\u30ea\u3092\u6e96\u5099\u3059\u308b)"),"\u3067\u5b9a\u3081\u3089\u308c\u3066\u3044\u308b\u30eb\u30fc\u30eb\u3092\u9075\u5b88\u3057\u3066\u3044\u307e\u3059\u3002  "),(0,o.kt)("h3",{id:"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u975e\u6a5f\u80fd\u8981\u4ef6\u3092\u5b9a\u7fa9\u3059\u308b\u306b\u3042\u305f\u3063\u3066\u306e\u524d\u63d0"},"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u975e\u6a5f\u80fd\u8981\u4ef6\u3092\u5b9a\u7fa9\u3059\u308b\u306b\u3042\u305f\u3063\u3066\u306e\u524d\u63d0"),(0,o.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8003\u3048\u65b9\u30fb\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u6574\u5099\u3092\u512a\u5148\u3057\u3066\u3044\u308b\u305f\u3081\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u5b9f\u88c5\u3092\u6700\u5c0f\u9650\u306b\u7559\u3081\u307e\u3059\u3002\n\u975e\u6a5f\u80fd\u8981\u4ef6\u306e\u4e8b\u9805\u3068\u3057\u3066\u306f\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u5bfe\u8c61\u306b\u3057\u305f\u308a\u542b\u3081\u3066\u8981\u4ef6\u3092\u5b9a\u7fa9\u3059\u308b\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u4e0a\u8a18\u7406\u7531\u306b\u3088\u308a\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u307f\u3092\u5bfe\u8c61\u306b\u975e\u6a5f\u80fd\u8981\u4ef6\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)(u.L,{overviews:m,colSize:12,mdxType:"PageList"}))}g.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);