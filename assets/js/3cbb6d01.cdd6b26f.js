"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1782],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47611:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"ADR\u3092\u5229\u7528\u3057\u3066\u6c7a\u5b9a\u306e\u30ed\u30b0\u3092\u6b8b\u3059"},u=void 0,c={unversionedId:"react-native/santoku/decisions/adr-000-use-adr",id:"react-native/santoku/decisions/adr-000-use-adr",title:"ADR\u3092\u5229\u7528\u3057\u3066\u6c7a\u5b9a\u306e\u30ed\u30b0\u3092\u6b8b\u3059",description:"Status: Accepted",source:"@site/docs/react-native/santoku/decisions/adr-000-use-adr.mdx",sourceDirName:"react-native/santoku/decisions",slug:"/react-native/santoku/decisions/adr-000-use-adr",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-000-use-adr",tags:[],version:"current",lastUpdatedAt:1627555501,formattedLastUpdatedAt:"2021/7/29",frontMatter:{title:"ADR\u3092\u5229\u7528\u3057\u3066\u6c7a\u5b9a\u306e\u30ed\u30b0\u3092\u6b8b\u3059"}},p={},s=[{value:"\u8981\u7d04",id:"\u8981\u7d04",level:2},{value:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",level:2},{value:"\u8b70\u8ad6",id:"\u8b70\u8ad6",level:2},{value:"ADR\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u3064\u3044\u3066",id:"adr\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u3064\u3044\u3066",level:3},{value:"\u3044\u3064ADR\u3092\u66f8\u304f\u304b",id:"\u3044\u3064adr\u3092\u66f8\u304f\u304b",level:3},{value:"\u3069\u306e\u3088\u3046\u306bADR\u3092\u904b\u7528\u3059\u308b\u304b",id:"\u3069\u306e\u3088\u3046\u306badr\u3092\u904b\u7528\u3059\u308b\u304b",level:3},{value:"\u6c7a\u5b9a",id:"\u6c7a\u5b9a",level:2}],d={toc:s};function m(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Status: Accepted"),(0,i.kt)("h2",{id:"\u8981\u7d04"},"\u8981\u7d04"),(0,i.kt)("p",null,"ADR\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u5229\u7528\u3057\u3066\u3001\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3084\u6a5f\u80fd\u8981\u4ef6\u306b\u95a2\u3059\u308b\u6c7a\u5b9a\u30ed\u30b0\u3092\u6b8b\u3057\u307e\u3059\u3002",(0,i.kt)("strong",{parentName:"p"},"\u4e00\u5ea6\u6c7a\u5b9a\u3057\u305f\u3089\u305d\u306e\u5909\u66f4\u306b\u5927\u304d\u306a\u30b3\u30b9\u30c8\u304c\u304b\u304b\u308b\u3082\u306e"),"\u306f\u3001\u691c\u8a0e\u904e\u7a0b\u3092\u542b\u3081\u3066\u3001\u6c7a\u5b9a\u306e\u30ed\u30b0\u3092\u6b8b\u3059\u3053\u3068\u306b\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"ADR\u306e\u30d5\u30a1\u30a4\u30eb\u540d\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"adr-<seq>-<title>.mdx"),"\u3068\u3057\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3068\u3057\u3066",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/decisions/decision-record-template"},"decision-record-template"),"\u3092\u5229\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"ADR\u3092\u63d0\u6848\u3059\u308b\u969b\u306f\u3001Status\u3092\u300cAccepted\u300d\u3068\u3057\u3066Pull Request\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30de\u30fc\u30b8\u3055\u308c\u305f\u3089\u3001ADR\u304c\u63a1\u7528\u3055\u308c\u305f\u3068\u8003\u3048\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"},"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"),(0,i.kt)("p",null,"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u4f3c\u305f\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u4f55\u304b\u6c7a\u5b9a\u3057\u305f\u3044\u3068\u304d\u306b\u3001\u3069\u306e\u3088\u3046\u306b\u691c\u8a0e\u3055\u308c\u305f\u304b\u8a18\u9332\u304c\u6b8b\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u5f79\u306b\u7acb\u3064  \u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u5b9f\u969b\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u3082\u6c7a\u65ad\u304c\u96e3\u3057\u306a\u308a\u305d\u3046\u306a\u6c7a\u5b9a\u306b\u3064\u3044\u3066\u306f\u3001\u3069\u306e\u3088\u3046\u306b\u691c\u8a0e\u3057\u305f\u304b\u306e\u30ed\u30b0\u3092\u6b8b\u3057\u305f\u3044\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u8b70\u8ad6"},"\u8b70\u8ad6"),(0,i.kt)("h3",{id:"adr\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u3064\u3044\u3066"},"ADR\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u3064\u3044\u3066"),(0,i.kt)("p",null,"\u3044\u304f\u3064\u304b\u306e\u53c2\u8003\u30da\u30fc\u30b8\u306e\u60c5\u5831\u3092\u5143\u306b\u3001\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u691c\u8a0e\u3057\u307e\u3057\u305f\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://fintan.jp/?p=3578"},"Architecture Decision Records\u5c0e\u5165\u4e8b\u4f8b ","|"," Fintan")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://scrapbox.io/kawasima/%E5%AE%9F%E8%B7%B5ADR"},"\u5b9f\u8df5ADR"))),(0,i.kt)("p",null,"\u6b8b\u3059\u9805\u76ee\u304c\u3042\u307e\u308a\u591a\u3059\u304e\u3066\u3082\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u3057\u3066\u3044\u3051\u306a\u304f\u306a\u3063\u3066\u3057\u307e\u3046\u3068\u8003\u3048\u3066\u3001\u6b21\u306e5\u9805\u76ee\u306b\u7d5e\u308a\u307e\u3057\u305f\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30c8\u30eb",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6c7a\u5b9a\u3057\u305f\u3044\u3053\u3068\u3092\u7aef\u7684\u306b\u8868\u73fe\u3057\u305f\u30bf\u30a4\u30c8\u30eb"))),(0,i.kt)("li",{parentName:"ul"},"\u8981\u7d04",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ADR\u306e\u5185\u5bb9\u3092\u8981\u7d04\u3057\u3066\u30013\u884c\u7a0b\u5ea6\u3067\u8a18\u8f09"))),(0,i.kt)("li",{parentName:"ul"},"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u3053\u306e\u6c7a\u5b9a\u3084\u5909\u66f4\u3092\u3057\u306a\u304f\u3066\u306f\u3044\u3051\u306a\u3044\u72b6\u6cc1\u3084\u554f\u984c\u306a\u3069\u3092\u8aac\u660e"))),(0,i.kt)("li",{parentName:"ul"},"\u8b70\u8ad6",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u89e3\u6c7a\u65b9\u6cd5\u3084\u9078\u629e\u80a2\u306b\u3064\u3044\u3066\u691c\u8a0e\u30fb\u8b70\u8ad6\u3057\u305f\u5185\u5bb9"))),(0,i.kt)("li",{parentName:"ul"},"\u6c7a\u5b9a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6700\u7d42\u7684\u306a\u6c7a\u5b9a\u5185\u5bb9")))),(0,i.kt)("p",null,"\u3069\u3046\u3044\u3063\u305f\u72b6\u6cc1\u3067\u3001\u4f55\u3092\u8b70\u8ad6\u3057\u3066\u3001\u3069\u306e\u3088\u3046\u306b\u6c7a\u5b9a\u3057\u305f\u306e\u304b\u304c\u8a18\u9332\u3055\u308c\u3066\u3044\u308c\u3070\u3001\u53c2\u8003\u306b\u3057\u3084\u3059\u3044\u3068\u8003\u3048\u307e\u3057\u305f\u3002"),(0,i.kt)("h3",{id:"\u3044\u3064adr\u3092\u66f8\u304f\u304b"},"\u3044\u3064ADR\u3092\u66f8\u304f\u304b"),(0,i.kt)("p",null,"\u53c2\u8003\u30da\u30fc\u30b8\u306b\u8a18\u8f09\u3057\u3066\u3042\u308b\u307e\u307e\u3067\u3059\u304c\u3001\u300c\u4e00\u65e6\u6c7a\u5b9a\u3057\u305f\u3089\u3001\u305d\u306e\u5909\u66f4\u306b\u306f\u5927\u304d\u306a\u30b3\u30b9\u30c8\u304c\u304b\u304b\u308b\u3082\u306e\u300d\u3092ADR\u306e\u5bfe\u8c61\u3068\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u6b21\u306e\u3088\u3046\u306a\u3082\u306e\u3092\u8003\u3048\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306e\u6c7a\u5b9a"),(0,i.kt)("li",{parentName:"ul"},"\u6a5f\u80fd\u6a2a\u65ad\u8981\u4ef6\u306e\u5b9f\u73fe\u65b9\u6cd5"),(0,i.kt)("li",{parentName:"ul"},"\u958b\u767a\u30ac\u30a4\u30c9\uff08\u8a2d\u8a08\u30fb\u5b9f\u88c5\uff09\u3067\u30ac\u30a4\u30c9\u3059\u308b\u5185\u5bb9"),(0,i.kt)("li",{parentName:"ul"},"\u958b\u767a\u30c4\u30fc\u30eb\u3084\u30e9\u30a4\u30d6\u30e9\u30ea\u3001\u30b3\u30b9\u30c8\u306a\u3069\u3068\u306e\u30c8\u30ec\u30fc\u30c9\u30aa\u30d5\u3067\u306e\u6a5f\u80fd\u8981\u4ef6\u306e\u53d6\u4e0b\u3052\u3084\u7e2e\u5c0f")),(0,i.kt)("h3",{id:"\u3069\u306e\u3088\u3046\u306badr\u3092\u904b\u7528\u3059\u308b\u304b"},"\u3069\u306e\u3088\u3046\u306bADR\u3092\u904b\u7528\u3059\u308b\u304b"),(0,i.kt)("p",null,"\u6b21\u306e\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8\u306e\u3088\u3046\u306b\u904b\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"decision-record-workflow",src:n(28939).Z,width:"856",height:"772"})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8349\u6848\u3092\u66f8\u3044\u3066Pull Request\u3092\u4f5c\u6210\u3057\u305f\u6bb5\u968e\u3067\u306f\u3001\u300c\u6c7a\u5b9a\u300d\u306e\u5f8c\u306b\u306f\u8a18\u8f09\u304c\u306a\u304f\u3066\u3082\u5927\u4e08\u592b\u3067\u3059\u3002"))),(0,i.kt)("h2",{id:"\u6c7a\u5b9a"},"\u6c7a\u5b9a"),(0,i.kt)("p",null,"T.B.W."))}m.isMDXComponent=!0},28939:function(e,t,n){t.Z=n.p+"assets/images/decision-record-workflow-10ed05a77f174c901a8c88e9ee18e644.png"}}]);