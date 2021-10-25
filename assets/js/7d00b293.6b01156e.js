"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8716],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),v=u(n),p=a,d=v["".concat(l,".").concat(p)]||v[p]||f[p]||i;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=v;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},6742:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(102),a=n(7294),i=n(3727),c=n(2263),o=n(3919),l=n(412),u=(0,a.createContext)({collectLink:function(){}}),s=n(4996),f=n(8780),v=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var p=function(e){var t,n,p=e.isNavLink,d=e.to,m=e.href,b=e.activeClassName,g=e.isActive,y=e["data-noBrokenLinkCheck"],O=e.autoAddBaseUrl,w=void 0===O||O,h=(0,r.Z)(e,v),_=(0,c.Z)().siteConfig,k=_.trailingSlash,E=_.baseUrl,Z=(0,s.C)().withBaseUrl,N=(0,a.useContext)(u),j=d||m,C=(0,o.Z)(j),L=null==j?void 0:j.replace("pathname://",""),P=void 0!==L?(n=L,w&&function(e){return e.startsWith("/")}(n)?Z(n):n):void 0;P&&C&&(P=(0,f.applyTrailingSlash)(P,{trailingSlash:k,baseUrl:E}));var S,T=(0,a.useRef)(!1),U=p?i.OL:i.rU,R=l.default.canUseIntersectionObserver;(0,a.useEffect)((function(){return!R&&C&&null!=P&&window.docusaurus.prefetch(P),function(){R&&S&&S.disconnect()}}),[P,R,C]);var x=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,A=!P||!C||x;return P&&C&&!x&&!y&&N.collectLink(P),A?a.createElement("a",Object.assign({href:P},j&&!C&&{target:"_blank",rel:"noopener noreferrer"},h)):a.createElement(U,Object.assign({},h,{onMouseEnter:function(){T.current||null==P||(window.docusaurus.preload(P),T.current=!0)},innerRef:function(e){var t,n;R&&e&&C&&(t=e,n=function(){null!=P&&window.docusaurus.prefetch(P)},(S=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t),S.disconnect(),n())}))}))).observe(t))},to:P||""},p&&{isActive:g,activeClassName:b}))}},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return c}});var r=n(2263),a=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,c=i.forcePrependBaseUrl,o=void 0!==c&&c,l=i.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(o)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(i,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],c="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,c)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6258:function(e,t,n){n.d(t,{L:function(){return y}});var r=n(3117),a=n(102),i=n(6742),c=n(4996),o=n(6010),l=n(7294),u={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},s=["children","colSize"],f=["src","alt"],v=["title","imageUrl","summary"],p=function(e){var t=e.children,n=e.colSize,f=void 0===n?4:n,v=(0,a.Z)(e,s),p=(0,c.Z)(v.to);return l.createElement("div",{className:(0,o.Z)("col","col--"+f,u.pageOverviewContainer)},l.createElement(i.Z,(0,r.Z)({className:(0,o.Z)("card",u.pageOverviewLinkCard)},v,{to:p}),t))},d=function(e){var t=e.title;return l.createElement("div",{className:(0,o.Z)("card__header",u.pageOverviewTitle)},l.createElement("h3",null,t))},m=function(e){var t=e.src,n=e.alt,i=(0,a.Z)(e,f),s=(0,c.Z)(t);return l.createElement("div",{className:(0,o.Z)("card__image")},l.createElement("img",(0,r.Z)({className:u.pageOverviewImage},i,{alt:n,src:s})))},b=function(e){var t=e.summary;return l.createElement("div",{className:(0,o.Z)("card__body",u.pageOverviewSummary)},l.createElement("p",null,t))},g=function(e){var t=e.title,n=e.imageUrl,r=e.summary,i=(0,a.Z)(e,v);return l.createElement(p,i,l.createElement(d,{title:t+" \xbb"}),n&&l.createElement(m,{src:n,alt:t}),r&&l.createElement(b,{summary:r}))},y=function(e){var t=e.overviews,n=e.colSize;return l.createElement("section",{className:(0,o.Z)(u.pageList)},l.createElement("div",{className:(0,o.Z)("container")},l.createElement("div",{className:(0,o.Z)("row",u.pageListRow)},t.map((function(e){return l.createElement(g,(0,r.Z)({key:e.to,colSize:n},e))})))))}},8646:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return f},toc:function(){return p},default:function(){return m}});var r=n(3117),a=n(102),i=n(7294),c=n(3905),o=n(6258),l=["components"],u={title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},s=void 0,f={unversionedId:"react-native/learn/basic-concepts",id:"react-native/learn/basic-concepts",isDocsHomePage:!1,title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b",description:"\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3059\u308b\u524d\u306b\u5fc5\u8981\u3068\u306a\u308b\u524d\u63d0\u77e5\u8b58\u3092\u78ba\u8a8d\u3057\u305f\u5f8c\u3001React Native\u306e\u57fa\u672c\u3001React Navigation\u306e\u57fa\u672c\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts.mdx",sourceDirName:"react-native/learn",slug:"/react-native/learn/basic-concepts",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts",tags:[],version:"current",lastUpdatedAt:1632798153,formattedLastUpdatedAt:"2021/9/28",frontMatter:{title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},sidebar:"learn",previous:{title:"\u958b\u767a\u74b0\u5883\u306e\u88dc\u8db3",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/supplement"},next:{title:"\u524d\u63d0\u77e5\u8b58",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/pre-requisites"}},v=[{title:"\u524d\u63d0\u77e5\u8b58",summary:(0,c.kt)(i.Fragment,null,"\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3059\u308b\u524d\u306b\u5fc5\u8981\u3068\u306a\u308b\u524d\u63d0\u77e5\u8b58\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),to:"/react-native/learn/basic-concepts/pre-requisites"},{title:"React Native\u306e\u57fa\u672c",summary:(0,c.kt)(i.Fragment,null,"React Native\u306e\u57fa\u672c\u77e5\u8b58\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002"),to:"/react-native/learn/basic-concepts/react-native-basics"},{title:"React Navigation\u306e\u57fa\u672c",summary:(0,c.kt)(i.Fragment,null,"React Navigation\u306e\u57fa\u672c\u77e5\u8b58\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002"),to:"/react-native/learn/basic-concepts/react-navigation-basics"}],p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3059\u308b\u524d\u306b\u5fc5\u8981\u3068\u306a\u308b\u524d\u63d0\u77e5\u8b58\u3092\u78ba\u8a8d\u3057\u305f\u5f8c\u3001React Native\u306e\u57fa\u672c\u3001React Navigation\u306e\u57fa\u672c\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002"),(0,c.kt)(o.L,{overviews:v,colSize:12,mdxType:"PageList"}))}m.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);