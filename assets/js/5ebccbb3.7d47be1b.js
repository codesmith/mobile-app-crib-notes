"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2629],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76927:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5b9a\u7fa9\u3068\u53d6\u5f97"},s=void 0,p={unversionedId:"react-native/santoku/development/implement/message-configuration",id:"react-native/santoku/development/implement/message-configuration",isDocsHomePage:!1,title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5b9a\u7fa9\u3068\u53d6\u5f97",description:"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30a2\u30d7\u30ea\u5185\u306b\u30d0\u30f3\u30c9\u30eb\u3057\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u5b9a\u7fa9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/development/implement/message-configuration.mdx",sourceDirName:"react-native/santoku/development/implement",slug:"/react-native/santoku/development/implement/message-configuration",permalink:"/mobile-app-crib-notes/react-native/santoku/development/implement/message-configuration",tags:[],version:"current",lastUpdatedAt:1634693385,formattedLastUpdatedAt:"2021/10/20",frontMatter:{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5b9a\u7fa9\u3068\u53d6\u5f97"},sidebar:"santoku",previous:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/development/implement"},next:{title:"\u30ed\u30b0\u306e\u5229\u7528",permalink:"/mobile-app-crib-notes/react-native/santoku/development/implement/logs-implementation"}},c=[{value:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5b9a\u7fa9",id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5b9a\u7fa9",children:[],level:2},{value:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u53d6\u5f97",id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u53d6\u5f97",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30a2\u30d7\u30ea\u5185\u306b\u30d0\u30f3\u30c9\u30eb\u3057\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u5b9a\u7fa9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5b9a\u7fa9"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5b9a\u7fa9"),(0,o.kt)("p",null,"\u65b0\u305f\u306a\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8ffd\u52a0\u3059\u308b\u5834\u5408\u306f\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u5b9a\u7fa9\u30d5\u30a1\u30a4\u30eb\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"src/generated/BundledMessages.ts"),"\uff09\u3092\u4fee\u6b63\u3057\u307e\u3059\u3002\n\u4f8b\u3048\u3070\u3001\u30e6\u30fc\u30b6\u540d\u3068\u3044\u3046\u30e9\u30d9\u30eb\u3092\u8ffd\u52a0\u3059\u308b\u5834\u5408\u306e\u4f8b\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'typescript title="BundledMessages.ts"',typescript:!0,title:'"BundledMessages.ts"'},"export const bundledMessages = {\n  /* \u4e2d\u7565 */\n+ \u30e6\u30fc\u30b6\u540d: '\u30e6\u30fc\u30b6\u540d',\n  \u30d1\u30b9\u30ef\u30fc\u30c9: '\u30d1\u30b9\u30ef\u30fc\u30c9',\n  \u30db\u30fc\u30e0: '\u30db\u30fc\u30e0',\n  '\u6700\u5927{0}\u4ef6': '\u6700\u5927{0}\u4ef6',\n  '\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002': '\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002',\n  /* \u4e2d\u7565 */\n} as const;\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u958b\u767a\u73fe\u5834\u306b\u3088\u3063\u3066\u306f\u3001\uff08Excel\u306a\u3069\u3067\u4f5c\u6210\u3055\u308c\u305f\uff09\u30e1\u30c3\u30bb\u30fc\u30b8\u5b9a\u7fa9\u66f8\u304b\u3089\u30e1\u30c3\u30bb\u30fc\u30b8\u5b9a\u7fa9\u30d5\u30a1\u30a4\u30eb\u3092\u81ea\u52d5\u751f\u6210\u3059\u308b\u904b\u7528\u3082\u8003\u3048\u3089\u308c\u307e\u3059\u3002\n\u305d\u3046\u3057\u305f\u80cc\u666f\u304b\u3089\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"BundledMessages.ts"),"\u30d5\u30a1\u30a4\u30eb\u306f",(0,o.kt)("inlineCode",{parentName:"p"},"src/generated/"),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u914d\u7f6e\u3057\u3066\u3044\u307e\u3059\u3002"))),(0,o.kt)("h2",{id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u53d6\u5f97"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u53d6\u5f97"),(0,o.kt)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u53d6\u5f97\u3059\u308b\u5834\u5408\u306f\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"src/framework/message/Message.ts"),"\u306b\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b",(0,o.kt)("inlineCode",{parentName:"p"},"m"),"\u95a2\u6570\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx title='\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u53d6\u5f97'",jsx:!0,title:"'\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u53d6\u5f97'"},"import {m} from 'framework';\n\nconsole.log(m('\u6700\u5927{0}\u4ef6', '3'));  // => \u6700\u59273\u4ef6\n")))}u.isMDXComponent=!0}}]);