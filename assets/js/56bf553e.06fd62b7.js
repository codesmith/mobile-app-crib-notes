"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[9443],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),v=l(n),p=a,d=v["".concat(s,".").concat(p)]||v[p]||f[p]||i;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=v;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},36742:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(63366),a=n(67294),i=n(73727),c=n(52263),o=n(13919),s=n(10412),l=(0,a.createContext)({collectLink:function(){}}),u=n(44996),f=n(18780),v=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var p=function(e){var t,n,p=e.isNavLink,d=e.to,m=e.href,b=e.activeClassName,g=e.isActive,y=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,O=void 0===w||w,h=(0,r.Z)(e,v),k=(0,c.Z)().siteConfig,E=k.trailingSlash,_=k.baseUrl,C=(0,u.C)().withBaseUrl,Z=(0,a.useContext)(l),j=d||m,S=(0,o.Z)(j),L=null==j?void 0:j.replace("pathname://",""),N=void 0!==L?(n=L,O&&function(e){return e.startsWith("/")}(n)?C(n):n):void 0;N&&S&&(N=(0,f.applyTrailingSlash)(N,{trailingSlash:E,baseUrl:_}));var P=(0,a.useRef)(!1),x=p?i.OL:i.rU,T=s.default.canUseIntersectionObserver,U=(0,a.useRef)();(0,a.useEffect)((function(){return!T&&S&&null!=N&&window.docusaurus.prefetch(N),function(){T&&U.current&&U.current.disconnect()}}),[U,N,T,S]);var D=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,A=!N||!S||D;return N&&S&&!D&&!y&&Z.collectLink(N),A?a.createElement("a",Object.assign({href:N},j&&!S&&{target:"_blank",rel:"noopener noreferrer"},h)):a.createElement(x,Object.assign({},h,{onMouseEnter:function(){P.current||null==N||(window.docusaurus.preload(N),P.current=!0)},innerRef:function(e){var t,n;T&&e&&S&&(t=e,n=function(){null!=N&&window.docusaurus.prefetch(N)},U.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(U.current.unobserve(t),U.current.disconnect(),n())}))})),U.current.observe(t))},to:N||""},p&&{isActive:g,activeClassName:b}))}},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return c}});var r=n(52263),a=n(13919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(i,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],c="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,c)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},66258:function(e,t,n){n.d(t,{L:function(){return y}});var r=n(87462),a=n(63366),i=n(36742),c=n(44996),o=n(86010),s=n(67294),l={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},u=["children","colSize"],f=["src","alt"],v=["title","imageUrl","summary"],p=function(e){var t=e.children,n=e.colSize,f=void 0===n?4:n,v=(0,a.Z)(e,u),p=(0,c.Z)(v.to);return s.createElement("div",{className:(0,o.Z)("col","col--"+f,l.pageOverviewContainer)},s.createElement(i.Z,(0,r.Z)({className:(0,o.Z)("card",l.pageOverviewLinkCard)},v,{to:p}),t))},d=function(e){var t=e.title;return s.createElement("div",{className:(0,o.Z)("card__header",l.pageOverviewTitle)},s.createElement("h3",null,t))},m=function(e){var t=e.src,n=e.alt,i=(0,a.Z)(e,f),u=(0,c.Z)(t);return s.createElement("div",{className:(0,o.Z)("card__image")},s.createElement("img",(0,r.Z)({className:l.pageOverviewImage},i,{alt:n,src:u})))},b=function(e){var t=e.summary;return s.createElement("div",{className:(0,o.Z)("card__body",l.pageOverviewSummary)},s.createElement("p",null,t))},g=function(e){var t=e.title,n=e.imageUrl,r=e.summary,i=(0,a.Z)(e,v);return s.createElement(p,i,s.createElement(d,{title:t+" \xbb"}),n&&s.createElement(m,{src:n,alt:t}),r&&s.createElement(b,{summary:r}))},y=function(e){var t=e.overviews,n=e.colSize;return s.createElement("section",{className:(0,o.Z)(l.pageList)},s.createElement("div",{className:(0,o.Z)("container")},s.createElement("div",{className:(0,o.Z)("row",l.pageListRow)},t.map((function(e){return s.createElement(g,(0,r.Z)({key:e.to,colSize:n},e))})))))}},44199:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return v},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),c=n(66258),o=["components"],s={title:"Design",sidebar_label:"\u6982\u8981"},l=void 0,u={unversionedId:"react-native/learn/basic-concepts/react-native-basics/design",id:"react-native/learn/basic-concepts/react-native-basics/design",isDocsHomePage:!1,title:"Design",description:"React Native\u3067\u306f\u3001JavaScript\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/design.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics",slug:"/react-native/learn/basic-concepts/react-native-basics/design",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/design",tags:[],version:"current",lastUpdatedAt:1632798153,formattedLastUpdatedAt:"2021/9/28",frontMatter:{title:"Design",sidebar_label:"\u6982\u8981"},sidebar:"learn",previous:{title:"SectionList",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/lists/section-list"},next:{title:"Style",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/design/style"}},f=[{title:"Style",to:"react-native/learn/basic-concepts/react-native-basics/design/style"},{title:"\u9ad8\u3055\u3068\u5e45",to:"react-native/learn/basic-concepts/react-native-basics/design/height-and-width"},{title:"Flexbox",to:"react-native/learn/basic-concepts/react-native-basics/design/flexbox"}],v=[],p={toc:v};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"React Native\u3067\u306f\u3001JavaScript\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\n\u307b\u3068\u3093\u3069\u306e\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"style")," \u3068\u3044\u3046\u540d\u524d\u306eprop\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u30b9\u30bf\u30a4\u30eb\u540d\u3068\u305d\u306e\u8a2d\u5b9a\u5024\u306f\u3001\u30ad\u30e3\u30e1\u30eb\u30b1\u30fc\u30b9\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u3068\u3044\u3046\u70b9\u3092\u9664\u304d\u3001Web\u306eCSS\u306e\u305d\u308c\u3068\u901a\u5e38\u306f\u4e00\u81f4\u3057\u307e\u3059\u3002\n\u4f8b\u3048\u3070\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"background-color"),"\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"backgroundColor"),"\u3068\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)(c.L,{overviews:f,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);