"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8581],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,g=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9522:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={title:"\u7ba1\u7406\u5bfe\u8c61\u306e\u30e1\u30c3\u30bb\u30fc\u30b8"},c=void 0,u={unversionedId:"react-native/santoku/application-architecture/message-configuration/managed-message",id:"react-native/santoku/application-architecture/message-configuration/managed-message",isDocsHomePage:!1,title:"\u7ba1\u7406\u5bfe\u8c61\u306e\u30e1\u30c3\u30bb\u30fc\u30b8",description:"\u7ba1\u7406\u5bfe\u8c61\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u7ba1\u7406\u5bfe\u8c61\u5916\u306e\u30e1\u30c3\u30bb\u30fc\u30b8",source:"@site/docs/react-native/santoku/application-architecture/message-configuration/managed-message.mdx",sourceDirName:"react-native/santoku/application-architecture/message-configuration",slug:"/react-native/santoku/application-architecture/message-configuration/managed-message",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/message-configuration/managed-message",tags:[],version:"current",lastUpdatedAt:1634693385,formattedLastUpdatedAt:"2021/10/20",frontMatter:{title:"\u7ba1\u7406\u5bfe\u8c61\u306e\u30e1\u30c3\u30bb\u30fc\u30b8"},sidebar:"santoku",previous:{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u30ed\u30fc\u30c9",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/message-configuration/load-message"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/logging-app/overview"}},p=[{value:"\u7ba1\u7406\u5bfe\u8c61\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u7ba1\u7406\u5bfe\u8c61\u5916\u306e\u30e1\u30c3\u30bb\u30fc\u30b8",id:"\u7ba1\u7406\u5bfe\u8c61\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u7ba1\u7406\u5bfe\u8c61\u5916\u306e\u30e1\u30c3\u30bb\u30fc\u30b8",children:[],level:2}],s={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u7ba1\u7406\u5bfe\u8c61\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u7ba1\u7406\u5bfe\u8c61\u5916\u306e\u30e1\u30c3\u30bb\u30fc\u30b8"},"\u7ba1\u7406\u5bfe\u8c61\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u7ba1\u7406\u5bfe\u8c61\u5916\u306e\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,i.kt)("p",null,"\u7ba1\u7406\u5bfe\u8c61\u3068\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u4f7f\u7528\u30d1\u30bf\u30fc\u30f3\u6bce\u306b\u5206\u985e\u3057\u305f\u30ea\u30b9\u30c8\u3092\u6b21\u306b\u793a\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u753b\u9762\u306e\u8868\u793a\u9805\u76ee",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30e9\u30d9\u30eb"),(0,i.kt)("li",{parentName:"ul"},"\u753b\u9762\u30bf\u30a4\u30c8\u30eb"),(0,i.kt)("li",{parentName:"ul"},"\u5165\u529b\u30c6\u30ad\u30b9\u30c8\u5185\u306e\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc"),(0,i.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u30ac\u30a4\u30c0\u30f3\u30b9"),(0,i.kt)("li",{parentName:"ul"},"\u5165\u529b\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5358\u9805\u76ee\u30a8\u30e9\u30fc"),(0,i.kt)("li",{parentName:"ul"},"\u76f8\u95a2\u9805\u76ee\u30a8\u30e9\u30fc"))))),(0,i.kt)("li",{parentName:"ul"},"\u30c0\u30a4\u30a2\u30ed\u30b0",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u78ba\u8a8d\u30e1\u30c3\u30bb\u30fc\u30b8"))),(0,i.kt)("li",{parentName:"ul"},"\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\uff08\u203b1\uff09",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u60c5\u5831\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,i.kt)("li",{parentName:"ul"},"\u8b66\u544a\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,i.kt)("li",{parentName:"ul"},"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8")))),(0,i.kt)("p",null,"\uff08\u203b1\uff09API\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u7d50\u679c\u306b\u5fdc\u3058\u3066\u3001\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u5074\u3067\u7528\u610f\u3057\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u30b7\u30b9\u30c6\u30e0\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6642\u306b\u8fc5\u901f\u304b\u3064\u9069\u5207\u306a\u5185\u5bb9\u3092\u30e6\u30fc\u30b6\u306b\u4f1d\u3048\u308b\u305f\u3081\u3001API\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u542b\u307e\u308c\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u305d\u306e\u307e\u307e\u8868\u793a\u3059\u308b\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u4e00\u65b9\u3001\u7ba1\u7406\u5bfe\u8c61\u5916\u3068\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30ed\u30b0",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30ed\u30b0\u30e1\u30c3\u30bb\u30fc\u30b8"))),(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u30c0\u30a4\u30a2\u30ed\u30b0",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30ab\u30e1\u30e9\u3084\u30de\u30a4\u30af\u3001\u4f4d\u7f6e\u60c5\u5831\u306a\u3069\u3092\u5229\u7528\u3059\u308b\u969b\u306b\u8868\u793a\u3059\u308b\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u30c0\u30a4\u30a2\u30ed\u30b0\u306e\u30e1\u30c3\u30bb\u30fc\u30b8")))))}m.isMDXComponent=!0}}]);