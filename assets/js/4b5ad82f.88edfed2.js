"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[6479],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=m(a),u=r,f=c["".concat(o,".").concat(u)]||c[u]||k[u]||l;return a?n.createElement(f,i(i({ref:e},d),{},{components:a})):n.createElement(f,i({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5397:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return d},default:function(){return c}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],p={title:"HTTP API\u901a\u4fe1\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"},o=void 0,m={unversionedId:"react-native/santoku/application-architecture/http-api/http-api-error-handling",id:"react-native/santoku/application-architecture/http-api/http-api-error-handling",isDocsHomePage:!1,title:"HTTP API\u901a\u4fe1\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",description:"HTTP API\u306f\u3001HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u3066\u51e6\u7406\u306e\u6210\u529f\u3068\u5931\u6557\u3092\u8868\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/http-api/http-api-error-handling.mdx",sourceDirName:"react-native/santoku/application-architecture/http-api",slug:"/react-native/santoku/application-architecture/http-api/http-api-error-handling",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/http-api/http-api-error-handling",tags:[],version:"current",lastUpdatedAt:1631497811,formattedLastUpdatedAt:"2021/9/13",frontMatter:{title:"HTTP API\u901a\u4fe1\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"},sidebar:"santoku",previous:{title:"\u30a8\u30e9\u30fc\u306e\u767a\u751f\u7b87\u6240\u3068\u51e6\u7406\u65b9\u6cd5",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/error-handling/how-to-handle-error"},next:{title:"WebView\u3067\u30da\u30fc\u30b8\u8868\u793a\u3059\u308b\u969b\u306b\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/webview/webview-error-handling"}},d=[{value:"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c4xx\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",id:"http\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c4xx\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",children:[],level:2},{value:"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c5xx\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",id:"http\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c5xx\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",children:[],level:2},{value:"HTTP API\u304b\u3089\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u5374\u3055\u308c\u306a\u3044\u5834\u5408\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",id:"http-api\u304b\u3089\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u5374\u3055\u308c\u306a\u3044\u5834\u5408\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",children:[],level:2},{value:"HTTP API\u901a\u4fe1\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8",id:"http-api\u901a\u4fe1\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8",children:[],level:2},{value:"\u30a8\u30e9\u30fc\u767a\u751f\u6642\u306b\u8868\u793a\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8",id:"\u30a8\u30e9\u30fc\u767a\u751f\u6642\u306b\u8868\u793a\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8",children:[],level:2},{value:"HTTP API\u901a\u4fe1\u306e\u30ea\u30c8\u30e9\u30a4",id:"http-api\u901a\u4fe1\u306e\u30ea\u30c8\u30e9\u30a4",children:[],level:2}],k={toc:d};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"HTTP API\u306f\u3001HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u3066\u51e6\u7406\u306e\u6210\u529f\u3068\u5931\u6557\u3092\u8868\u3057\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u610f\u5473"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2xx"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"4xx"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u306b\u8d77\u56e0\u3059\u308b\u30a8\u30e9\u30fc")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"5xx"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30b5\u30fc\u30d0\u30b5\u30a4\u30c9\u306b\u8d77\u56e0\u3059\u308b\u30a8\u30e9\u30fc")))),(0,l.kt)("p",null,"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c4xx\u306e\u5834\u5408\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u64cd\u4f5c\u306b\u3088\u3063\u3066\u89e3\u6c7a\u304c\u53ef\u80fd\u306a\u30a8\u30e9\u30fc\u306b\u306a\u308a\u307e\u3059\u3002HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c5xx\u306e\u5834\u5408\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u64cd\u4f5c\u3067\u306f\u89e3\u6c7a\u3067\u304d\u306a\u3044\u30a8\u30e9\u30fc\u3068\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"http\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c4xx\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c4xx\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306eHTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c\u8fd4\u5374\u3055\u308c\u305f\u5834\u5408\u3001\u30e6\u30fc\u30b6\u306b\u30a8\u30e9\u30fc\u306e\u5185\u5bb9\u3068\u89e3\u6d88\u306e\u305f\u3081\u306e\u9069\u5207\u306a\u624b\u9806\u3092\u4f1d\u3048\u307e\u3059\u3002\u3053\u3053\u306b\u542b\u307e\u308c\u306a\u3044HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u306e\u5834\u5408\u306f\u3001\u60f3\u5b9a\u5916\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u3053\u3068\u3092\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\u306b\u8868\u793a\u3057\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u610f\u5473"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"400"),(0,l.kt)("td",{parentName:"tr",align:"left"},"BadRequest - \u30ea\u30af\u30a8\u30b9\u30c8\u3068\u3057\u3066\u9001\u308b\u30da\u30a4\u30ed\u30fc\u30c9\u304c\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u30a8\u30e9\u30fc\u306b\u306a\u3063\u305f\u5834\u5408\u306a\u3069")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"401"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unauthorized - \u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u671f\u9650\u304c\u5207\u308c\u305f\u5834\u5408")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"404"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Not found - \u30ea\u30bd\u30fc\u30b9\u304c\u898b\u3064\u304b\u3089\u306a\u304b\u3063\u305f\u5834\u5408")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"412"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Precondition Failed - \u64cd\u4f5c\u3057\u3066\u3044\u308b\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u5f37\u5236\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u5bfe\u8c61\u306e\u5834\u5408")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"429"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Too Many Requests - \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u5927\u91cf\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u9001\u4fe1\u3055\u308c\u305f\u5834\u5408")))),(0,l.kt)("p",null,"4xx\u306eHTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c\u8fd4\u5374\u3055\u308c\u305f\u5834\u5408\u3001SantokuApp\u306e\u52d5\u4f5c\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9"),(0,l.kt)("th",{parentName:"tr",align:"left"},"SantokuApp\u306e\u52d5\u4f5c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"400"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u3067\u306f\u3001\u7279\u306b\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u307e\u305b\u3093\u3002SantokuApp\u3067\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u65bd\u3059\u308b\u305f\u3081\u57fa\u672c\u7684\u306b\u306f\u767a\u751f\u3057\u306a\u3044\u60f3\u5b9a\u3067\u3059\u3002\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067\u306f\u5b9f\u65bd\u3067\u304d\u306a\u3044\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u306a\u3069\u304c\u3042\u308b\u6a5f\u80fd\u306b\u95a2\u3057\u3066\u306f\u3001\u500b\u5225\u306b\u30a8\u30e9\u30fc\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"401"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u3067\u306f\u3001\u671f\u9650\u304c\u5207\u308c\u305f\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u7834\u68c4\u3057\u3066\u65b0\u3057\u3044\u8cc7\u683c\u60c5\u5831\u3092\u518d\u53d6\u5f97\u3057\u307e\u3059\u3002\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u53d6\u5f97\u5f8c\u3001HTTP API\u901a\u4fe1\u3092\u30ea\u30c8\u30e9\u30a4\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"404"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u3067\u306f\u3001\u7279\u306b\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u307e\u305b\u3093\u3002\u3042\u308b\u30e6\u30fc\u30b6\u304c\u30a2\u30af\u30bb\u30b9\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308b\u60c5\u5831\u304c\u3001\u4ed6\u306e\u30e6\u30fc\u30b6\u306b\u524a\u9664\u3055\u308c\u3066\u3057\u307e\u3063\u305f\u5834\u5408\u306a\u3069\u306b\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u3046\u3044\u3063\u305f\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u304c\u5b58\u5728\u3059\u308b\u6a5f\u80fd\u306b\u95a2\u3057\u3066\u306f\u3001\u500b\u5225\u306b\u30a8\u30e9\u30fc\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"412"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u3067\u306f\u3001\u30a2\u30d7\u30ea\u3092\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b\u3088\u3046\u306b\u4fc3\u3059\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u30a2\u30d7\u30ea\u3092\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b\u307e\u3067\u306f\u5e38\u306b\u3053\u306e\u30c0\u30a4\u30a2\u30ed\u30b0\u304c\u8868\u793a\u3055\u308c\u3001\u30e6\u30fc\u30b6\u306f\u4ed6\u306e\u64cd\u4f5c\u3092\u3067\u304d\u307e\u305b\u3093\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"429"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u3067\u306f\u3001\u6642\u9593\u3092\u304a\u3044\u3066\u304b\u3089\u518d\u64cd\u4f5c\u3092\u3059\u308b\u3088\u3046\u306b\u4fc3\u3059\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u305d\u306e\u4ed6"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u3067\u306f\u3001\u60f3\u5b9a\u5916\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u3053\u3068\u3092\u4f1d\u3048\u308b\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u30a8\u30e9\u30fc\u5185\u5bb9\u3092Firebase Crashlytics\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002")))),(0,l.kt)("h2",{id:"http\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c5xx\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c5xx\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306eHTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c\u8fd4\u5374\u3055\u308c\u305f\u5834\u5408\u3001HTTP API\u304b\u3089\u8fd4\u5374\u3055\u308c\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30e6\u30fc\u30b6\u306b\u4f1d\u3048\u307e\u3059\u3002\u3053\u3053\u306b\u542b\u307e\u308c\u306a\u3044HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u306e\u5834\u5408\u306f\u3001\u60f3\u5b9a\u5916\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u3053\u3068\u3092\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\u306b\u8868\u793a\u3057\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u610f\u5473"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"503"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Service Unavailable - HTTP API\u304c\u30b7\u30b9\u30c6\u30e0\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u3067\u6b62\u307e\u3063\u3066\u3044\u308b\u5834\u5408")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"504"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Gateway Timeout - HTTP API\u304b\u3089\u6642\u9593\u5185\u306b\u5fdc\u7b54\u304c\u306a\u304b\u3063\u305f\u5834\u5408")))),(0,l.kt)("p",null,"5xx\u306eHTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c\u8fd4\u5374\u3055\u308c\u305f\u5834\u5408\u3001SantokuApp\u306e\u52d5\u4f5c\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9"),(0,l.kt)("th",{parentName:"tr",align:"left"},"SantokuApp\u306e\u52d5\u4f5c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"503"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u3067\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u4e2d\u3067\u3042\u308b\u3053\u3068\u3092\u4f1d\u3048\u308b\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"504"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u3067\u306f\u3001\u6642\u9593\u3092\u304a\u3044\u3066\u304b\u3089\u518d\u64cd\u4f5c\u3092\u3059\u308b\u3088\u3046\u306b\u4fc3\u3059\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u305d\u306e\u4ed6"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u3067\u306f\u3001\u60f3\u5b9a\u5916\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u3053\u3068\u3092\u4f1d\u3048\u308b\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u30a8\u30e9\u30fc\u5185\u5bb9\u3092Firebase Crashlytics\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002")))),(0,l.kt)("h2",{id:"http-api\u304b\u3089\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u5374\u3055\u308c\u306a\u3044\u5834\u5408\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"},"HTTP API\u304b\u3089\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u5374\u3055\u308c\u306a\u3044\u5834\u5408\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"),(0,l.kt)("p",null,"HTTP API\u304b\u3089\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u5374\u3055\u308c\u306a\u3044\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u539f\u56e0\u304c\u8003\u3048\u3089\u308c\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7aef\u672b\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304cOFF\u306b\u306a\u3063\u3066\u3044\u308b"),(0,l.kt)("li",{parentName:"ul"},"HTTP API\u3068\u306e\u901a\u4fe1\u4e2d\u306b\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u5207\u65ad\u3055\u308c\u305f"),(0,l.kt)("li",{parentName:"ul"},"\u63a5\u7d9a\u5148\u30b5\u30fc\u30d0\u306e\u30dd\u30fc\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044")),(0,l.kt)("p",null,"\u3053\u308c\u3089\u306e\u5834\u5408\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u72b6\u614b\u3092\u78ba\u8a8d\u3057\u3066\u3082\u3089\u3046\u304b\u3001\u6642\u9593\u3092\u304a\u3044\u3066\u304b\u3089\u518d\u64cd\u4f5c\u3092\u3059\u308b\u3088\u3046\u306b\u4fc3\u3059\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"http-api\u901a\u4fe1\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8"},"HTTP API\u901a\u4fe1\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8"),(0,l.kt)("p",null,"HTTP API\u3068\u306e\u901a\u4fe1\u304c1\u5206\u4ee5\u4e0a\u7d4c\u904e\u3057\u305f\u5834\u5408\u3001\u901a\u4fe1\u3092\u5f37\u5236\u7684\u306b\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u72b6\u614b\u3092\u78ba\u8a8d\u3057\u3066\u3082\u3089\u3046\u304b\u3001\u6642\u9593\u3092\u304a\u3044\u3066\u304b\u3089\u518d\u64cd\u4f5c\u3092\u3059\u308b\u3088\u3046\u306b\u4fc3\u3059\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"SantokuApp\u306eHTTP API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u3057\u3066\u5229\u7528\u3059\u308baxios\u3067\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"https://github.com/axios/axios#request-config"},"timeout"),"\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002axios\u306e",(0,l.kt)("inlineCode",{parentName:"p"},"timeout"),"\u306f\u3001Android\u3067\u306f\u30b3\u30cd\u30af\u30b7\u30e7\u30f3\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u306e\u307f\u306b\u4f7f\u7528\u3055\u308c\u308b\u305f\u3081\u3001\u30b3\u30cd\u30af\u30b7\u30e7\u30f3\u63a5\u7d9a\u5f8c\u306b\u30b5\u30fc\u30d0\u306e\u5fdc\u7b54\u304c\u9045\u3044\u5834\u5408\u306a\u3069\u306f\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3057\u307e\u305b\u3093\u3002"),(0,l.kt)("p",{parentName:"div"},"\u305d\u306e\u305f\u3081\u3001SantokuApp\u3067\u306faxios\u306e",(0,l.kt)("inlineCode",{parentName:"p"},"timeout"),"\u3092\u4f7f\u7528\u305b\u305a\u3001",(0,l.kt)("a",{parentName:"p",href:"https://github.com/axios/axios#cancellation"},"CancelToken"),"\u3092\u5229\u7528\u3057\u3066HTTP API\u901a\u4fe1\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3092\u5b9f\u73fe\u3057\u3066\u3044\u307e\u3059\u3002"))),(0,l.kt)("h2",{id:"\u30a8\u30e9\u30fc\u767a\u751f\u6642\u306b\u8868\u793a\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8"},"\u30a8\u30e9\u30fc\u767a\u751f\u6642\u306b\u8868\u793a\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,l.kt)("p",null,"HTTP API\u901a\u4fe1\u6642\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306f\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u542b\u307e\u308c\u3066\u3044\u308b\u30a8\u30e9\u30fc\u30b3\u30fc\u30c9\u306b\u5fdc\u3058\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30c0\u30a4\u30a2\u30ed\u30b0\u3001\u307e\u305f\u306f\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\u3067\u8868\u793a\u3057\u307e\u3059\u3002\u30a8\u30e9\u30fc\u30b3\u30fc\u30c9\u304c\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u542b\u307e\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001SantokuApp\u3067\u5b9a\u7fa9\u3057\u305f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"http-api\u901a\u4fe1\u306e\u30ea\u30c8\u30e9\u30a4"},"HTTP API\u901a\u4fe1\u306e\u30ea\u30c8\u30e9\u30a4"),(0,l.kt)("p",null,"SantokuApp\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u52d5\u4f5c\u3067\u306f\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u307e\u305b\u3093\u3002\u30e6\u30fc\u30b6\u81ea\u8eab\u304c\u518d\u8a66\u884c\u306e\u5224\u65ad\u3092\u3059\u308b\u65b9\u304c\u5229\u7528\u3057\u3084\u3059\u3044\u3068\u8003\u3048\u305f\u305f\u3081\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306b\u8a18\u8f09\u3057\u3066\u3044\u308b\u65b9\u6cd5\u3067\u3001\u5404\u753b\u9762\u6bce\u306b\u30e6\u30fc\u30b6\u304cHTTP API\u3092\u518d\u8a66\u884c\u53ef\u80fd\u306aUI / UX\u3092\u63d0\u4f9b\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30ea\u30bd\u30fc\u30b9\u3092\u53d6\u5f97\u3059\u308b\u5834\u5408\u306f\u3001",(0,l.kt)("a",{parentName:"li",href:"https://developer.apple.com/design/human-interface-guidelines/ios/controls/refresh-content-controls/"},"Pull-to-refresh"),"\u306a\u3069\u3001\u30e6\u30fc\u30b6\u64cd\u4f5c\u3067\u518d\u53d6\u5f97\u3092\u8a66\u307f\u308b\u3053\u3068\u304c\u3067\u304d\u308bUI\u3092\u914d\u7f6e\u3059\u308b"),(0,l.kt)("li",{parentName:"ul"},"\u30ea\u30bd\u30fc\u30b9\u306e\u767b\u9332\u3084\u66f4\u65b0\u3001\u524a\u9664\u3092\u518d\u8a66\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u3001\u975e\u6d3b\u6027\u306b\u3057\u3066\u3044\u305f\u30dc\u30bf\u30f3\u306a\u3069\u3092\u6d3b\u6027\u5316\u3055\u305b\u308b"),(0,l.kt)("li",{parentName:"ul"},"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\u3059\u308b\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\u306b\u3001\u518d\u8a66\u884c\u53ef\u80fd\u306aUI\u3092\u914d\u7f6e\u3059\u308b"),(0,l.kt)("li",{parentName:"ul"},"\u5165\u529b\u5024\u3092HTTP API\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3068\u3057\u3066\u9001\u4fe1\u3059\u308b\u5834\u5408\u306f\u3001\u30a8\u30e9\u30fc\u767a\u751f\u524d\u306e\u72b6\u614b\u3092\u4fdd\u6301\u3059\u308b")))}c.isMDXComponent=!0}}]);