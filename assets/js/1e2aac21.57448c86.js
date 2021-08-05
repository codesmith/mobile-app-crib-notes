"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[4921],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return v}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=l(n),v=r,u=s["".concat(p,".").concat(v)]||s[v]||d[v]||i;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2459:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={title:"WebView\u3067\u30da\u30fc\u30b8\u8868\u793a\u3059\u308b\u969b\u306b\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"},c=void 0,p={unversionedId:"react-native/santoku/application-architecture/webview/webview-error-handling",id:"react-native/santoku/application-architecture/webview/webview-error-handling",isDocsHomePage:!1,title:"WebView\u3067\u30da\u30fc\u30b8\u8868\u793a\u3059\u308b\u969b\u306b\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",description:"React Native WebView\u3092\u4f7f\u7528\u3057\u3066Web\u30da\u30fc\u30b8\u3092\u8868\u793a\u3059\u308b\u5834\u5408\u306f\u3001onError\u3001onHttpError\u5c5e\u6027\u3092\u4f7f\u7528\u3057\u3066\u30a8\u30e9\u30fc\u3092\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/webview/webview-error-handling.mdx",sourceDirName:"react-native/santoku/application-architecture/webview",slug:"/react-native/santoku/application-architecture/webview/webview-error-handling",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/webview/webview-error-handling",version:"current",lastUpdatedAt:1628152418,formattedLastUpdatedAt:"2021/8/5",frontMatter:{title:"WebView\u3067\u30da\u30fc\u30b8\u8868\u793a\u3059\u308b\u969b\u306b\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"},sidebar:"santoku",previous:{title:"\ud83d\udea7 (\u5f8c\u3067HTTP API\u306e\u30da\u30fc\u30b8\u306b\u79fb\u884c) \ud83d\udea7 HTTP API\u901a\u4fe1\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/error-handling/api-error-handling"},next:{title:"Overview",permalink:"/mobile-app-crib-notes/react-native/santoku/development"}},l=[],m={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-webview/react-native-webview"},"React Native WebView"),"\u3092\u4f7f\u7528\u3057\u3066Web\u30da\u30fc\u30b8\u3092\u8868\u793a\u3059\u308b\u5834\u5408\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md#onerror"},"onError"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md#onhttperror"},"onHttpError"),"\u5c5e\u6027\u3092\u4f7f\u7528\u3057\u3066\u30a8\u30e9\u30fc\u3092\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u540d"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7528\u9014"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onHttpError")),(0,i.kt)("td",{parentName:"tr",align:"left"},"WebView\u3067\u8868\u793a\u3059\u308b\u30da\u30fc\u30b8\u3092\u53d6\u5f97\u3059\u308b\u6642\u306b\u3001400\u4ee5\u4e0a\u306eHTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u3067\u8fd4\u5374\u3055\u308c\u305f\u5834\u5408\u306b\u547c\u3073\u3060\u3055\u308c\u307e\u3059\u3002SantokuApp\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u3067\u306f\u3001\u30a8\u30e9\u30fc\u306e\u6355\u6349\u5f8c\u306b\u7279\u306b\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u307e\u305b\u3093\u3002\u305d\u306e\u305f\u3081\u3001Web\u30a2\u30d7\u30ea\u304b\u3089\u8fd4\u3055\u308c\u305f\u30a8\u30e9\u30fc\u753b\u9762\u304c\u305d\u306e\u307e\u307e\u8868\u793a\u3055\u308c\u307e\u3059\u3002",(0,i.kt)("br",null),"\u30e6\u30fc\u30b6\u5411\u3051\u306e\u30a8\u30e9\u30fc\u753b\u9762\u304c\u8fd4\u3055\u308c\u306a\u3044\u5834\u5408\u306a\u3069\u3001\u63a5\u7d9a\u5148\u306eWeb\u30a2\u30d7\u30ea\u306b\u5fdc\u3058\u305f\u51e6\u7406\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u500b\u5225\u306b\u30a8\u30e9\u30fc\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onError")),(0,i.kt)("td",{parentName:"tr",align:"left"},"WebView\u3067\u8868\u793a\u3059\u308b\u30da\u30fc\u30b8\u3092\u53d6\u5f97\u3059\u308b\u6642\u306b\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30a8\u30e9\u30fc\u306a\u3069\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306b\u547c\u3073\u3060\u3055\u308c\u307e\u3059\u3002SantokuApp\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u3067\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u78ba\u8a8d\u3092\u4fc3\u3059\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u307e\u305f\u3001Firebase Crashlytics\u306b\u30a8\u30e9\u30fc\u30ed\u30b0\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002\u753b\u9762\u4ed5\u69d8\u306b\u4f9d\u5b58\u3057\u305f\u7279\u5225\u306a\u51e6\u7406\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u500b\u5225\u306b\u30a8\u30e9\u30fc\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"onHttpError"),"\u306f\u3001Android\u306e\u5834\u5408API\u30ec\u30d9\u30eb\u304c23\u4ee5\u4e0a\u306e\u307f\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"WebView\u3067\u8868\u793a\u3059\u308b\u30da\u30fc\u30b8\u5185\u306e\u753b\u50cf\u3084CSS\u306a\u3069\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u305f\u5834\u5408\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"onError"),"\u3084",(0,i.kt)("inlineCode",{parentName:"p"},"onHttpError"),"\u3067\u306f\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3067\u304d\u307e\u305b\u3093\u3002"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"iOS\u306e\u5834\u5408\u30c7\u30d5\u30a9\u30eb\u30c8\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u306f60\u79d2\u3067\u3059\u3002Android\u306e\u5834\u5408\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u304c\u3042\u308a\u307e\u305b\u3093\u3002"),(0,i.kt)("p",{parentName:"div"},"\u306a\u304a\u3001React Native WebView\u306f\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3092\u8a2d\u5b9a\u3067\u304d\u306a\u3044\u305f\u3081\u3001\u8868\u793a\u3059\u308b\u30da\u30fc\u30b8\u3068\u306e\u901a\u4fe1\u3092\u660e\u793a\u7684\u306b\u30ad\u30e3\u30f3\u30bb\u30eb\u3067\u304d\u307e\u305b\u3093\u3002"))))}d.isMDXComponent=!0}}]);