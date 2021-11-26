"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[5574],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),v=i,d=p["".concat(s,".").concat(v)]||p[v]||f[v]||a;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36742:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(63366),i=n(67294),a=n(73727),c=n(52263),o=n(13919),s=n(10412),l=(0,i.createContext)({collectLink:function(){}}),u=n(44996),f=n(18780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var t,n,v=e.isNavLink,d=e.to,m=e.href,b=e.activeClassName,g=e.isActive,y=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,O=void 0===w||w,h=(0,r.Z)(e,p),_=(0,c.Z)().siteConfig,k=_.trailingSlash,E=_.baseUrl,L=(0,u.C)().withBaseUrl,Z=(0,i.useContext)(l),C=d||m,j=(0,o.Z)(C),S=null==C?void 0:C.replace("pathname://",""),P=void 0!==S?(n=S,O&&function(e){return e.startsWith("/")}(n)?L(n):n):void 0;P&&j&&(P=(0,f.applyTrailingSlash)(P,{trailingSlash:k,baseUrl:E}));var N=(0,i.useRef)(!1),T=v?a.OL:a.rU,U=s.default.canUseIntersectionObserver,x=(0,i.useRef)();(0,i.useEffect)((function(){return!U&&j&&null!=P&&window.docusaurus.prefetch(P),function(){U&&x.current&&x.current.disconnect()}}),[x,P,U,j]);var A=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,M=!P||!j||A;return P&&j&&!A&&!y&&Z.collectLink(P),M?i.createElement("a",Object.assign({href:P},C&&!j&&{target:"_blank",rel:"noopener noreferrer"},h)):i.createElement(T,Object.assign({},h,{onMouseEnter:function(){N.current||null==P||(window.docusaurus.preload(P),N.current=!0)},innerRef:function(e){var t,n;U&&e&&j&&(t=e,n=function(){null!=P&&window.docusaurus.prefetch(P)},x.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.current.unobserve(t),x.current.disconnect(),n())}))})),x.current.observe(t))},to:P||""},v&&{isActive:g,activeClassName:b}))}},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},44996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return c}});var r=n(52263),i=n(13919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,c=a.forcePrependBaseUrl,o=void 0!==c&&c,s=a.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],c="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,c)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},66258:function(e,t,n){n.d(t,{L:function(){return y}});var r=n(87462),i=n(63366),a=n(36742),c=n(44996),o=n(86010),s=n(67294),l={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},u=["children","colSize"],f=["src","alt"],p=["title","imageUrl","summary"],v=function(e){var t=e.children,n=e.colSize,f=void 0===n?4:n,p=(0,i.Z)(e,u),v=(0,c.Z)(p.to);return s.createElement("div",{className:(0,o.Z)("col","col--"+f,l.pageOverviewContainer)},s.createElement(a.Z,(0,r.Z)({className:(0,o.Z)("card",l.pageOverviewLinkCard)},p,{to:v}),t))},d=function(e){var t=e.title;return s.createElement("div",{className:(0,o.Z)("card__header",l.pageOverviewTitle)},s.createElement("h3",null,t))},m=function(e){var t=e.src,n=e.alt,a=(0,i.Z)(e,f),u=(0,c.Z)(t);return s.createElement("div",{className:(0,o.Z)("card__image")},s.createElement("img",(0,r.Z)({className:l.pageOverviewImage},a,{alt:n,src:u})))},b=function(e){var t=e.summary;return s.createElement("div",{className:(0,o.Z)("card__body",l.pageOverviewSummary)},s.createElement("p",null,t))},g=function(e){var t=e.title,n=e.imageUrl,r=e.summary,a=(0,i.Z)(e,p);return s.createElement(v,a,s.createElement(d,{title:t+" \xbb"}),n&&s.createElement(m,{src:n,alt:t}),r&&s.createElement(b,{summary:r}))},y=function(e){var t=e.overviews,n=e.colSize;return s.createElement("section",{className:(0,o.Z)(l.pageList)},s.createElement("div",{className:(0,o.Z)("container")},s.createElement("div",{className:(0,o.Z)("row",l.pageListRow)},t.map((function(e){return s.createElement(g,(0,r.Z)({key:e.to,colSize:n},e))})))))}},87914:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),c=n(66258),o=["components"],s={title:"Lists",sidebar_label:"\u6982\u8981",hide_table_of_contents:!0},l=void 0,u={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/lists",id:"react-native/learn/basic-concepts/react-native-basics/components/lists",isDocsHomePage:!1,title:"Lists",description:"\u30ea\u30b9\u30c8\u306fScrollView\u306b\u4f3c\u3066\u3044\u307e\u3059\u304c\u3001\u8981\u7d20\u3092\u30ea\u30b5\u30a4\u30af\u30eb\u3057\u3066\u518d\u63cf\u753b\u3092\u6e1b\u3089\u3059\u3053\u3068\u3067\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5411\u4e0a\u3059\u308b\u3088\u3046\u6700\u9069\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/lists.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/components",slug:"/react-native/learn/basic-concepts/react-native-basics/components/lists",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/lists",tags:[],version:"current",lastUpdatedAt:1632798153,formattedLastUpdatedAt:"2021/9/28",frontMatter:{title:"Lists",sidebar_label:"\u6982\u8981",hide_table_of_contents:!0},sidebar:"learn",previous:{title:"ScrollView",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/scroll-view"},next:{title:"FlatList",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list"}},f=[{title:"FlatList",to:"/react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list"},{title:"SectionList",to:"/react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list"}],p=[],v={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u30ea\u30b9\u30c8\u306fScrollView\u306b\u4f3c\u3066\u3044\u307e\u3059\u304c\u3001\u8981\u7d20\u3092\u30ea\u30b5\u30a4\u30af\u30eb\u3057\u3066\u518d\u63cf\u753b\u3092\u6e1b\u3089\u3059\u3053\u3068\u3067\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5411\u4e0a\u3059\u308b\u3088\u3046\u6700\u9069\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView")," \u3088\u308a\u3082\u3084\u3084\u8907\u96d1\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u5927\u91cf\u306e\u30c7\u30fc\u30bf\u3092\u753b\u9762\u306b\u8868\u793a\u3059\u308b\u5834\u5408\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList"),"\u307e\u305f\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"SectionList"),"\u306e\u4f7f\u7528\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)(c.L,{overviews:f,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);