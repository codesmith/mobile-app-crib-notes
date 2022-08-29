"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[4631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,k=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const i={title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5",sidebar_label:"\u6982\u8981"},a=void 0,o={unversionedId:"reference/notification/overview",id:"reference/notification/overview",title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5",description:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3068\u306f",source:"@site/docs/reference/notification/overview.md",sourceDirName:"reference/notification",slug:"/reference/notification/overview",permalink:"/mobile-app-crib-notes/reference/notification/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1648600430,formattedLastUpdatedAt:"2022\u5e743\u670830\u65e5",frontMatter:{title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5",sidebar_label:"\u6982\u8981"},sidebar:"reference",previous:{title:"OpenID Connect\u3068\u7aef\u672b\u8a8d\u8a3c\u3092\u7528\u3044\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d3\u30b9\u306e\u8a8d\u8a3c\u65b9\u5f0f",permalink:"/mobile-app-crib-notes/reference/auth/authn-with-backend-using-OIDC-and-device-authn"},next:{title:"Firebase Cloud Messaging\u3092\u7528\u3044\u305f\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u69cb\u6210\u4f8b",permalink:"/mobile-app-crib-notes/reference/notification/infrastructure"}},u={},p=[{value:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3068\u306f",id:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3068\u306f",level:2},{value:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u7a2e\u985e",id:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u7a2e\u985e",level:2},{value:"\u30ea\u30e2\u30fc\u30c8\u901a\u77e5",id:"\u30ea\u30e2\u30fc\u30c8\u901a\u77e5",level:3},{value:"\u30ed\u30fc\u30ab\u30eb\u901a\u77e5",id:"\u30ed\u30fc\u30ab\u30eb\u901a\u77e5",level:3},{value:"\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u306e\u4ed5\u7d44\u307f",id:"\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u306e\u4ed5\u7d44\u307f",level:2},{value:"\u7aef\u672b\u306eOS\u8b58\u5225\u306f\u81ea\u524d\u3067\u884c\u3044\u3001\u5404OS\u306e\u958b\u767a\u5143\u304c\u63d0\u4f9b\u3059\u308b\u516c\u5f0f\u63d0\u4f9b\u306e\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u76f4\u63a5\u5229\u7528\u3059\u308b",id:"\u7aef\u672b\u306eos\u8b58\u5225\u306f\u81ea\u524d\u3067\u884c\u3044\u5404os\u306e\u958b\u767a\u5143\u304c\u63d0\u4f9b\u3059\u308b\u516c\u5f0f\u63d0\u4f9b\u306e\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u76f4\u63a5\u5229\u7528\u3059\u308b",level:3},{value:"\u7aef\u672b\u306eOS\u306b\u5fdc\u3058\u3066\u9069\u5207\u306a\u516c\u5f0f\u63d0\u4f9b\u306e\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u547c\u3073\u51fa\u3057\u3066\u304f\u308c\u308b\u30af\u30e9\u30a6\u30c9\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3059\u308b",id:"\u7aef\u672b\u306eos\u306b\u5fdc\u3058\u3066\u9069\u5207\u306a\u516c\u5f0f\u63d0\u4f9b\u306e\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u547c\u3073\u51fa\u3057\u3066\u304f\u308c\u308b\u30af\u30e9\u30a6\u30c9\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3059\u308b",level:3},{value:"\u672c\u30ac\u30a4\u30c9\u3067\u53d6\u308a\u6271\u3046\u5185\u5bb9",id:"\u672c\u30ac\u30a4\u30c9\u3067\u53d6\u308a\u6271\u3046\u5185\u5bb9",level:2}],c={toc:p};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3068\u306f"},"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3068\u306f"),(0,l.kt)("p",null,"\u305d\u3082\u305d\u3082\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3068\u306f\u4f55\u3067\u3057\u3087\u3046\u304b\u3002\n\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u958b\u767a\u306e\u6587\u8108\u3067\u306f\u3001\u72ed\u7fa9\u306e\u610f\u5473\u3067\u3001Android\u7aef\u672b\u3084iOS\u7aef\u672b\u306a\u3069\u306e\u901a\u77e5\u9818\u57df\u306b\u8868\u793a\u3055\u308c\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u767a\u4fe1\u3059\u308b\u6a5f\u80fd\u3092\u6307\u3059\u3053\u3068\u304c\u591a\u3044\u3067\u3059\u3002\n\u3057\u304b\u3057\u5e83\u7fa9\u306e\u610f\u5473\u3067\u306f\u3001\u30b5\u30fc\u30d3\u30b9\u63d0\u4f9b\u5074\u304c\u80fd\u52d5\u7684\u306b\u30e6\u30fc\u30b6\u306b\u60c5\u5831\u3092\u767a\u4fe1\u3059\u308b\u4ed5\u7d44\u307f\u3068\u8a00\u3048\u307e\u3059\u3002\n\u643a\u5e2f\u7aef\u672b\u306e\u901a\u77e5\u9818\u57df\u306b\u8868\u793a\u3055\u308c\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u4ed6\u306b\u3001\u4f8b\u3048\u3070\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u3082\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u4e00\u7a2e\u3068\u8a00\u3048\u308b\u3067\u3057\u3087\u3046\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u57fa\u3065\u304fEmail\u9001\u4fe1"),(0,l.kt)("li",{parentName:"ul"},"\u96fb\u8a71\u756a\u53f7\u306b\u57fa\u3065\u304fSMS\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1"),(0,l.kt)("li",{parentName:"ul"},"\u96fb\u8a71\u756a\u53f7\u306b\u57fa\u3065\u304fLINE\u306e\u901a\u77e5\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1")),(0,l.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u958b\u767a\u6642\u306b\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3068\u3044\u3046\u8981\u4ef6\u304c\u51fa\u3066\u304d\u305f\u5834\u5408\u3001\n\u5e83\u7fa9\u306e\u610f\u5473\u3067\u306e\u60c5\u5831\u767a\u4fe1\u304c\u6c42\u3081\u3089\u308c\u3066\u3044\u308b\u306e\u304b\u3001\n\u72ed\u7fa9\u306e\u610f\u5473\u3067\u306e\u643a\u5e2f\u7aef\u672b\u306e\u901a\u77e5\u9818\u57df\u3078\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u767a\u4fe1\u304c\u6c42\u3081\u3089\u308c\u3066\u3044\u308b\u306e\u304b\u78ba\u8a8d\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u672c\u30ac\u30a4\u30c9\u3067\u306f\u3001\u72ed\u7fa9\u306e\u610f\u5473\u3067\u306e\u643a\u5e2f\u7aef\u672b\u306e\u901a\u77e5\u9818\u57df\u3078\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u767a\u4fe1\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u3066\u3044\u304d\u307e\u3059\u3002\n\u4ee5\u964d\u7279\u306b\u65ad\u308a\u304c\u306a\u3044\u9650\u308a\u3001\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3068\u3044\u3046\u8a00\u8449\u306f\u3001\u72ed\u7fa9\u306e\u610f\u5473\u3067\u306e\u643a\u5e2f\u7aef\u672b\u306e\u901a\u77e5\u9818\u57df\u3078\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u767a\u4fe1\u3092\u6307\u3059\u3082\u306e\u3068\u3057\u307e\u3059\u3002\n\u307e\u305f\u3001\u672c\u30ac\u30a4\u30c9\u3067\u306fAndroid\u7aef\u672b\u3068iOS\u7aef\u672b\u3078\u306e\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u5bfe\u8c61\u3068\u3057\u3001\u305d\u306e\u4ed6\u306eOS\u306e\u7aef\u672b\u3078\u306e\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3084Web\u30d6\u30e9\u30a6\u30b6\u3078\u306eWeb\u30d7\u30c3\u30b7\u30e5\u306f\u53d6\u308a\u6271\u3044\u307e\u305b\u3093\u3002"),(0,l.kt)("h2",{id:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u7a2e\u985e"},"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u7a2e\u985e"),(0,l.kt)("p",null,"\u643a\u5e2f\u7aef\u672b\u306b\u304a\u3051\u308b\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306b\u306f\u3001\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u3068\u30ed\u30fc\u30ab\u30eb\u901a\u77e5\u306e2\u7a2e\u985e\u304c\u5b58\u5728\u3057\u307e\u3059\u3002\n\u305d\u308c\u305e\u308c\u306e\u6982\u8981\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,l.kt)("h3",{id:"\u30ea\u30e2\u30fc\u30c8\u901a\u77e5"},"\u30ea\u30e2\u30fc\u30c8\u901a\u77e5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7279\u5fb4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5916\u90e8\u306e\u30b5\u30fc\u30d0\u304b\u3089\u3001\u30a2\u30d7\u30ea\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30e6\u30fc\u30b6\u7aef\u672b\u3078\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b\u6a5f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u3057\u305f\u8907\u6570\u306e\u7aef\u672b\u306b\u5bfe\u3057\u3066\u4e00\u62ec\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u53ef\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u7aef\u672b\u304c\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306b\u63a5\u7d9a\u3055\u308c\u3066\u3044\u306a\u3044\u9593\u306f\u914d\u4fe1\u3055\u308c\u306a\u3044",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u914d\u4fe1\u3067\u304d\u306a\u304b\u3063\u305f\u5834\u5408\u3001\u4e00\u5b9a\u671f\u9593\uff08Android\u306e\u5834\u5408\u306f\u6700\u592728\u65e5\u3001iOS\u306e\u5834\u5408\u306f\u975e\u516c\u958b\uff09\u306f\u518d\u914d\u4fe1\u304c\u8a66\u307f\u3089\u308c\u308b\u3002"))))),(0,l.kt)("li",{parentName:"ul"},"\u6d3b\u7528\u4f8b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u306e\u4ed8\u8fd1\u306b\u96e8\u96f2\u304c\u63a5\u8fd1\u3057\u3066\u3044\u308b\u6642\u306b\u304a\u77e5\u3089\u305b"),(0,l.kt)("li",{parentName:"ul"},"\u78ba\u5b9a\u3057\u305f\u30b5\u30fc\u30d3\u30b9\u5229\u7528\u6599\u91d1\u306e\u304a\u77e5\u3089\u305b")))),(0,l.kt)("h3",{id:"\u30ed\u30fc\u30ab\u30eb\u901a\u77e5"},"\u30ed\u30fc\u30ab\u30eb\u901a\u77e5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7279\u5fb4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u306e\u7aef\u672b\u5185\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u30a2\u30d7\u30ea\u304b\u3089\u3001\u51e6\u7406\u306e\u5b8c\u4e86\u6642\u3084\u4e88\u5b9a\u6642\u523b\u306a\u3069\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\u3059\u308b\u6a5f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u7aef\u672b\u5185\u306b\u306e\u307f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\u53ef\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u7aef\u672b\u304c\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306b\u63a5\u7d9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3067\u3082\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\u53ef\u80fd"))),(0,l.kt)("li",{parentName:"ul"},"\u6d3b\u7528\u4f8b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u306e\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u51e6\u7406\uff08\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u51e6\u7406\u306a\u3069\uff09\u306e\u5b8c\u4e86\u901a\u77e5"),(0,l.kt)("li",{parentName:"ul"},"\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u30a2\u30d7\u30ea\u3067\u4e88\u5b9a\u3092\u767b\u9332\u3057\u3001\u4e88\u5b9a\u6642\u523b\u306e\u6570\u5206\u524d\u306b\u30ea\u30de\u30a4\u30f3\u30c9\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a"),(0,l.kt)("li",{parentName:"ul"},"\u97f3\u697d\u30d7\u30ec\u30a4\u30e4\u30fc\u30a2\u30d7\u30ea\u3067\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u306e\u97f3\u697d\u518d\u751f\u4e2d\u306b\u3001\u518d\u751f/\u505c\u6b62\u306a\u3069\u306e\u64cd\u4f5c\u3092\u901a\u77e5\u9818\u57df\u5185\u3067\u884c\u3046\u305f\u3081\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a")))),(0,l.kt)("p",null,"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u5229\u7528\u3059\u308b\u969b\u306b\u306f\u3001\u76ee\u7684\u306b\u5fdc\u3058\u3066\u3053\u308c\u3089\u306e\u65b9\u5f0f\u3092\u4f7f\u3044\u5206\u3051\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u672c\u30ac\u30a4\u30c9\u3067\u306f\u3001\u5b9f\u88c5\u3059\u308b\u4e0a\u3067\u77e5\u3063\u3066\u304a\u304f\u3079\u304d\u70b9\u306e\u591a\u3044\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u306e\u4ed5\u7d44\u307f"},"\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u306e\u4ed5\u7d44\u307f"),(0,l.kt)("p",null,"\u958b\u767a\u8005\u304c\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u306e\u65b9\u6cd5\u3068\u3057\u3066\u306f\u3001\u5927\u5225\u3057\u3066\u4ee5\u4e0b\u306e2\u3064\u304c\u5b58\u5728\u3057\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7aef\u672b\u306eOS\u8b58\u5225\u306f\u81ea\u524d\u3067\u884c\u3044\u3001\u5404OS\u306e\u958b\u767a\u5143\u304c\u63d0\u4f9b\u3059\u308b\u516c\u5f0f\u63d0\u4f9b\u306e\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u306eAPI\u3092\u76f4\u63a5\u547c\u3073\u3060\u3059"),(0,l.kt)("li",{parentName:"ul"},"\u7aef\u672b\u306eOS\u306b\u5fdc\u3058\u3066\u9069\u5207\u306a\u516c\u5f0f\u63d0\u4f9b\u306e\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u547c\u3073\u51fa\u3057\u3066\u304f\u308c\u308b\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u304c\u63d0\u4f9b\u3059\u308b\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3059\u308b")),(0,l.kt)("p",null,"\u305d\u308c\u305e\u308c\u306e\u8a73\u7d30\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,l.kt)("h3",{id:"\u7aef\u672b\u306eos\u8b58\u5225\u306f\u81ea\u524d\u3067\u884c\u3044\u5404os\u306e\u958b\u767a\u5143\u304c\u63d0\u4f9b\u3059\u308b\u516c\u5f0f\u63d0\u4f9b\u306e\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u76f4\u63a5\u5229\u7528\u3059\u308b"},"\u7aef\u672b\u306eOS\u8b58\u5225\u306f\u81ea\u524d\u3067\u884c\u3044\u3001\u5404OS\u306e\u958b\u767a\u5143\u304c\u63d0\u4f9b\u3059\u308b\u516c\u5f0f\u63d0\u4f9b\u306e\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u76f4\u63a5\u5229\u7528\u3059\u308b"),(0,l.kt)("p",null,"Android\u3084iOS\u3068\u3044\u3063\u305f\u4e3b\u8981\u306a\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u306eOS\u3067\u306f\u3001OS\u306e\u958b\u767a\u5143\u306e\u4f1a\u793e\u306b\u3088\u3063\u3066\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u914d\u4fe1\u3059\u308b\u30b5\u30fc\u30d3\u30b9\u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002\nAndroid\u3067\u3042\u308c\u3070",(0,l.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging?hl=ja"},"Firebase Cloud Messaging (FCM)"),"\u304c\u305d\u306e\u5f79\u5272\u3092\u5185\u5305\u3057\u3066\u3044\u307e\u3059\u3002\niOS\u3067\u3042\u308c\u3070",(0,l.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server"},"Apple Push Notification service (APNs)"),"\u304c\u8a72\u5f53\u3057\u307e\u3059\u3002\n\u958b\u767a\u8005\u306f\u305d\u308c\u305e\u308c\u306e\u30b5\u30fc\u30d3\u30b9\u306eAPI\u3092\u547c\u3073\u3060\u3059\u3053\u3068\u3067\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u3092\u9001\u4fe1\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"Android\u306a\u3089FCM\u3001iOS\u306a\u3089APNs\u306eAPI\u3092\u76f4\u63a5\u547c\u3073\u3060\u3059\u3053\u3068\u3067\u3001\u5404OS\u7279\u6709\u306e\u7d30\u304b\u3044\u30aa\u30d7\u30b7\u30e7\u30f3\u3082\u542b\u3081\u305f\u5168\u3066\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002\n\u4e00\u65b9\u3067API\u3092\u547c\u3073\u5206\u3051\u308b\u305f\u3081\u306b\u306f\u3001\u9001\u4fe1\u5148\u306e\u7aef\u672b\u306eOS\u304c\u4f55\u306a\u306e\u304b\u306f\u81ea\u524d\u3067\u8b58\u5225\u3057\u3001\u305d\u308c\u305e\u308c\u306eOS\u306b\u3042\u3063\u305f\u9069\u5207\u306a\u516c\u5f0f\u30b5\u30fc\u30d3\u30b9\u3092\u547c\u3073\u3060\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u7aef\u672b\u306eos\u306b\u5fdc\u3058\u3066\u9069\u5207\u306a\u516c\u5f0f\u63d0\u4f9b\u306e\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u547c\u3073\u51fa\u3057\u3066\u304f\u308c\u308b\u30af\u30e9\u30a6\u30c9\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3059\u308b"},"\u7aef\u672b\u306eOS\u306b\u5fdc\u3058\u3066\u9069\u5207\u306a\u516c\u5f0f\u63d0\u4f9b\u306e\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u547c\u3073\u51fa\u3057\u3066\u304f\u308c\u308b\u30af\u30e9\u30a6\u30c9\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3059\u308b"),(0,l.kt)("p",null,"\u7aef\u672b\u306eOS\u7a2e\u5225\u306b\u5fdc\u3058\u3066FCM\u3084APNs\u3092\u76f4\u63a5\u547c\u3073\u51fa\u305b\u3070\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u306e\u9001\u4fe1\u306f\u53ef\u80fd\u3067\u3059\u3002\n\u3057\u304b\u3057\u7aef\u672b\u306eOS\u7a2e\u5225\u3092\u81ea\u524d\u3067\u7ba1\u7406\u3057\u3066\u9069\u5207\u306a\u30b5\u30fc\u30d3\u30b9\u3092\u547c\u3073\u5206\u3051\u308b\u306e\u306f\u3001\u958b\u767a\u3092\u9032\u3081\u308b\u4e0a\u3067\u624b\u9593\u304c\u304b\u304b\u308a\u307e\u3059\u3002\n\u3053\u3046\u3057\u305f\u9762\u5012\u306a\u5b9f\u88c5\u3092\u80a9\u4ee3\u308f\u308a\u3057\u3001\u3055\u3089\u306b\u52b9\u679c\u7684\u306b\u901a\u77e5\u3092\u30e6\u30fc\u30b6\u306b\u5c4a\u3051\u308b\u305f\u3081\u306e\u4ed8\u52a0\u6a5f\u80fd\u3092\u8ffd\u52a0\u3057\u3066\u304f\u308c\u308b\u30b5\u30fc\u30d3\u30b9\u304c\u3044\u304f\u3064\u304b\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u3053\u3046\u3057\u305f\u30b5\u30fc\u30d3\u30b9\u306e\u4f8b\u3068\u3057\u3066\u3001\u4ee5\u4e0b\u306e\u3082\u306e\u304c\u6319\u3052\u3089\u308c\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Firebase Cloud Messaging",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Android\u3078\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u914d\u4fe1\u3059\u308b\u516c\u5f0f\u30b5\u30fc\u30d3\u30b9\u3067\u3042\u308b\u306e\u306b\u52a0\u3048\u3066\u3001APNs\u7d4c\u7531\u3067\u306eiOS\u3078\u306e\u914d\u4fe1\u3084Web Push\u306b\u3082\u5bfe\u5fdc"),(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d0\u30a4\u30b9\u304c\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3067\u304d\u3001\u6307\u5b9a\u3057\u305f\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3057\u3066\u3044\u308b\u7aef\u672b\u3078\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u3092\u914d\u4fe1\u3059\u308b\u6a5f\u80fd\u3092\u63d0\u4f9b"),(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d0\u30a4\u30b9\u30b0\u30eb\u30fc\u30d7\u3092\u5b9a\u7fa9\u3057\u3066\u304a\u304d\u3001\u305d\u306e\u7aef\u672b\u30b0\u30eb\u30fc\u30d7\u3078\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u3092\u914d\u4fe1\u3059\u308b\u6a5f\u80fd\u3092\u63d0\u4f9b"),(0,l.kt)("li",{parentName:"ul"},"Firebase Analytics\u306a\u3069\u3001Firebase\u306e\u4ed6\u30b5\u30fc\u30d3\u30b9\u3068\u9023\u643a\u53ef\u80fd"))),(0,l.kt)("li",{parentName:"ul"},"Amazon Pinpoint",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Android/iOS/Kindle Fire/Baidu\u306a\u3069\u306b\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u9001\u4fe1\u53ef\u80fd\u3002\u307e\u305fEmail\u3084SMS\u30e1\u30c3\u30bb\u30fc\u30b8\u3082\u9001\u4fe1\u53ef\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u7aef\u672b\u306eOS\u7a2e\u5225\u3084\u76f4\u8fd1\u306e\u5229\u7528\u72b6\u6cc1\u306a\u3069\u306b\u5fdc\u3058\u3066\u30bb\u30b0\u30e1\u30f3\u30c8\u5206\u985e\u3057\u3001\u30bb\u30b0\u30e1\u30f3\u30c8\u5358\u4f4d\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u53ef\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u306e\u30b9\u30b1\u30b8\u30e5\u30fc\u30ea\u30f3\u30b0\u304c\u53ef\u80fd"))),(0,l.kt)("li",{parentName:"ul"},"Azure Notification Hubs",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Android/iOS/Windows/Kindle/Baidu\u306a\u3069\u306b\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u9001\u4fe1\u53ef\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u3001\u95a2\u5fc3\u4e8b\u3001\u5834\u6240\u3001\u8a2d\u5b9a\u306a\u3069\u306b\u57fa\u3065\u3044\u3066\u5bfe\u8c61\u9867\u5ba2\u306e\u30bb\u30b0\u30e1\u30f3\u30c8\u5206\u985e\u3057\u3001\u30bb\u30b0\u30e1\u30f3\u30c8\u5358\u4f4d\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u53ef\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u306e\u30b9\u30b1\u30b8\u30e5\u30fc\u30ea\u30f3\u30b0\u304c\u53ef\u80fd")))),(0,l.kt)("h2",{id:"\u672c\u30ac\u30a4\u30c9\u3067\u53d6\u308a\u6271\u3046\u5185\u5bb9"},"\u672c\u30ac\u30a4\u30c9\u3067\u53d6\u308a\u6271\u3046\u5185\u5bb9"),(0,l.kt)("p",null,"\u672c\u30ac\u30a4\u30c9\u3067\u306f\u3001Firebase Cloud Messaging\u3092\u7528\u3044\u3066Android\u3001iOS\u53cc\u65b9\u306b\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u3092\u9001\u4fe1\u3059\u308b\u5834\u5408\u306e\u69cb\u6210\u3068\u5b9f\u88c5\u4f8b\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002"))}s.isMDXComponent=!0}}]);