(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8149],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),b=a,m=f["".concat(p,".").concat(b)]||f[b]||s[b]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3803:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={title:"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5",sidebar_label:"Overview",hide_table_of_contents:!0},c={unversionedId:"react-native/learn/todo-app",id:"react-native/learn/todo-app",isDocsHomePage:!1,title:"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5",description:"\u3053\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3067\u4f5c\u6210\u3059\u308bToDo\u30a2\u30d7\u30ea\u306fWeb\u30d9\u30fc\u30b9\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3068\u540c\u3058\u3088\u3046\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3002\u305f\u3060\u3057\u3001\u30cf\u30f3\u30ba\u30aa\u30f3\u306e\u76ee\u7684\u3067\u3042\u308bReact\u3068React Native\u306e\u9055\u3044\u3092\u5b66\u3093\u3067\u3082\u3089\u3046\u305f\u3081\u3001\u73fe\u5728\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u306f\u30e2\u30d0\u30a4\u30eb\u5358\u4f53\u3067\u52d5\u4f5c\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/todo-app.md",sourceDirName:"react-native/learn",slug:"/react-native/learn/todo-app",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app",version:"current",lastUpdatedAt:1613389266,formattedLastUpdatedAt:"2021/2/15",sidebar_label:"Overview",frontMatter:{title:"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5",sidebar_label:"Overview",hide_table_of_contents:!0},sidebar:"learn",previous:{title:"Tab",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/tab"},next:{title:"ToDo\u30a2\u30d7\u30ea\u306e\u4ed5\u69d8",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/app-spec"}},p=[],l={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u3053\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3067\u4f5c\u6210\u3059\u308bToDo\u30a2\u30d7\u30ea\u306f",(0,o.kt)("a",{parentName:"p",href:"https://fintan-contents.github.io/spa-restapi-handson/"},"Web\u30d9\u30fc\u30b9\u306e\u30cf\u30f3\u30ba\u30aa\u30f3"),"\u3068\u540c\u3058\u3088\u3046\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3002\u305f\u3060\u3057\u3001\u30cf\u30f3\u30ba\u30aa\u30f3\u306e\u76ee\u7684\u3067\u3042\u308b",(0,o.kt)("strong",{parentName:"p"},"React\u3068React Native\u306e\u9055\u3044"),"\u3092\u5b66\u3093\u3067\u3082\u3089\u3046\u305f\u3081\u3001\u73fe\u5728\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u306f\u30e2\u30d0\u30a4\u30eb\u5358\u4f53\u3067\u52d5\u4f5c\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"React\u3067\u306eWeb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u7d4c\u9a13\u304c\u306a\u3044\u3001\u307e\u305f\u306f\u524d\u63d0\u3068\u306a\u308b\u30ec\u30d9\u30eb\u3092\u78ba\u8a8d\u3057\u305f\u3044\u65b9\u306fWeb\u30d9\u30fc\u30b9\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u53c2\u7167\u3057\u3001\u5fc5\u8981\u3067\u3042\u308c\u3070\u5b66\u7fd2\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,"\u30a2\u30d7\u30ea\u306e\u4ed5\u69d8\u306b\u3064\u3044\u3066\u306f\u3001\u5f8c\u8ff0\u3057\u307e\u3059\u3002"))}u.isMDXComponent=!0}}]);