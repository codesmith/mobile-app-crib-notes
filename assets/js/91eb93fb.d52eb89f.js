"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[4865],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,b=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45154:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"\u30b7\u30b9\u30c6\u30e0\u69cb\u6210",sidebar_label:"\u30b7\u30b9\u30c6\u30e0\u69cb\u6210"},o=void 0,c={unversionedId:"react-native/santoku/application-architecture/system-configuration/overview",id:"react-native/santoku/application-architecture/system-configuration/overview",title:"\u30b7\u30b9\u30c6\u30e0\u69cb\u6210",description:"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001HTTP API\u3084\u5229\u7528\u898f\u7d04\u306a\u3069\u306e\u9759\u7684\u30d5\u30a1\u30a4\u30eb\u306e\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u306bAzure\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3057\u307e\u3059\u3002\u307e\u305f\u3001Push\u901a\u77e5\u3084\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3001\u30ed\u30b0\u306e\u7ba1\u7406\u306a\u3069\u306bFirebase\u306e\u30b5\u30fc\u30d3\u30b9\u3082\u5229\u7528\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/system-configuration/overview.md",sourceDirName:"react-native/santoku/application-architecture/system-configuration",slug:"/react-native/santoku/application-architecture/system-configuration/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/system-configuration/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1639441749,formattedLastUpdatedAt:"2021/12/14",frontMatter:{title:"\u30b7\u30b9\u30c6\u30e0\u69cb\u6210",sidebar_label:"\u30b7\u30b9\u30c6\u30e0\u69cb\u6210"},sidebar:"santoku",previous:{title:"\u76ee\u6b21",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/overview"}},s={},l=[{value:"\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u306e\u30b7\u30b9\u30c6\u30e0\u69cb\u6210",id:"\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u306e\u30b7\u30b9\u30c6\u30e0\u69cb\u6210",level:2},{value:"Azure\u3084Firebase\u3092\u4f7f\u7528\u3057\u305f\u5834\u5408\u306e\u30b7\u30b9\u30c6\u30e0\u69cb\u6210",id:"azure\u3084firebase\u3092\u4f7f\u7528\u3057\u305f\u5834\u5408\u306e\u30b7\u30b9\u30c6\u30e0\u69cb\u6210",level:2}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001HTTP API\u3084\u5229\u7528\u898f\u7d04\u306a\u3069\u306e\u9759\u7684\u30d5\u30a1\u30a4\u30eb\u306e\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u306bAzure\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3057\u307e\u3059\u3002\u307e\u305f\u3001Push\u901a\u77e5\u3084\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3001\u30ed\u30b0\u306e\u7ba1\u7406\u306a\u3069\u306bFirebase\u306e\u30b5\u30fc\u30d3\u30b9\u3082\u5229\u7528\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/development/build-configuration/build-variants"},"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8"),"\u306b\u5fdc\u3058\u3066\u3001\u4f7f\u7528\u3059\u308bAzure\u306e\u30ea\u30bd\u30fc\u30b9\u30b0\u30eb\u30fc\u30d7\u3084Firebase\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u5207\u308a\u66ff\u3048\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u306e\u30b7\u30b9\u30c6\u30e0\u69cb\u6210"},"\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u306e\u30b7\u30b9\u30c6\u30e0\u69cb\u6210"),(0,a.kt)("p",null,"\u958b\u767a\u306f\u57fa\u672c\u7684\u306b\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u3067\u5b9f\u65bd\u3057\u307e\u3059\u3002\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u306e\u5834\u5408\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u74b0\u5883\u306f\u30e2\u30c3\u30af\u30b5\u30fc\u30d0\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"system-configuration",src:r(74964).Z,width:"522",height:"139"})),(0,a.kt)("h2",{id:"azure\u3084firebase\u3092\u4f7f\u7528\u3057\u305f\u5834\u5408\u306e\u30b7\u30b9\u30c6\u30e0\u69cb\u6210"},"Azure\u3084Firebase\u3092\u4f7f\u7528\u3057\u305f\u5834\u5408\u306e\u30b7\u30b9\u30c6\u30e0\u69cb\u6210"),(0,a.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3092\u914d\u5e03\u3059\u308b\u5834\u5408\u3084\u3001Azure\u3001Firebase\u306e\u30b5\u30fc\u30d3\u30b9\u3068\u63a5\u7d9a\u3057\u3066\u30c6\u30b9\u30c8\u3059\u308b\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u69cb\u6210\u306b\u306a\u308a\u307e\u3059\u3002\nFirebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u969b\u306f\u3001\u3053\u3061\u3089\u306e",(0,a.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/development/implement/cautions-on-using-firebase"},"\u6ce8\u610f\u70b9"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"system-configuration",src:r(46826).Z,width:"1392",height:"762"})))}u.isMDXComponent=!0},74964:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/local-system-configuration.drawio-328ee3d0bc396ef642c844d99698b966.png"},46826:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/system-configuration.drawio-390fc139a39104d3ef4ed1e524001929.png"}}]);