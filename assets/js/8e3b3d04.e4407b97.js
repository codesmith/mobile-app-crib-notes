"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7947],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80943:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],p={title:"\u30ed\u30b0\u306e\u5229\u7528"},l=void 0,s={unversionedId:"react-native/santoku/development/implement/logs-implementation",id:"react-native/santoku/development/implement/logs-implementation",isDocsHomePage:!1,title:"\u30ed\u30b0\u306e\u5229\u7528",description:"\u958b\u767a\u6642\u306e\u30c7\u30d0\u30c3\u30b0\u7528\u9014\u306b\u5229\u7528",source:"@site/docs/react-native/santoku/development/implement/logs-implementation.mdx",sourceDirName:"react-native/santoku/development/implement",slug:"/react-native/santoku/development/implement/logs-implementation",permalink:"/mobile-app-crib-notes/react-native/santoku/development/implement/logs-implementation",tags:[],version:"current",lastUpdatedAt:1636681827,formattedLastUpdatedAt:"2021/11/12",frontMatter:{title:"\u30ed\u30b0\u306e\u5229\u7528"},sidebar:"santoku",previous:{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5b9a\u7fa9\u3068\u53d6\u5f97",permalink:"/mobile-app-crib-notes/react-native/santoku/development/implement/message-configuration"},next:{title:"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306e\u30a2\u30d7\u30ea\u8d77\u52d5",permalink:"/mobile-app-crib-notes/react-native/santoku/development/implement/app-launch-with-build-variants"}},c=[{value:"\u958b\u767a\u6642\u306e\u30c7\u30d0\u30c3\u30b0\u7528\u9014\u306b\u5229\u7528",id:"\u958b\u767a\u6642\u306e\u30c7\u30d0\u30c3\u30b0\u7528\u9014\u306b\u5229\u7528",children:[],level:2},{value:"\u30ea\u30ea\u30fc\u30b9\u6642\u306e\u969c\u5bb3\u89e3\u6790",id:"\u30ea\u30ea\u30fc\u30b9\u6642\u306e\u969c\u5bb3\u89e3\u6790",children:[],level:2},{value:"Firebase Crashlytics\u306e\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u8868\u793a\u3055\u308c\u308b\u30b9\u30bf\u30c3\u30af\u30c8\u30ec\u30fc\u30b9\u3068\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u30de\u30c3\u30d4\u30f3\u30b0",id:"firebase-crashlytics\u306e\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u8868\u793a\u3055\u308c\u308b\u30b9\u30bf\u30c3\u30af\u30c8\u30ec\u30fc\u30b9\u3068\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u30de\u30c3\u30d4\u30f3\u30b0",children:[{value:"\u30bd\u30fc\u30b9\u30de\u30c3\u30d7\u306e\u4f5c\u6210",id:"\u30bd\u30fc\u30b9\u30de\u30c3\u30d7\u306e\u4f5c\u6210",children:[],level:3},{value:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3068\u306e\u30de\u30c3\u30d4\u30f3\u30b0",id:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3068\u306e\u30de\u30c3\u30d4\u30f3\u30b0",children:[],level:3}],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u958b\u767a\u6642\u306e\u30c7\u30d0\u30c3\u30b0\u7528\u9014\u306b\u5229\u7528"},"\u958b\u767a\u6642\u306e\u30c7\u30d0\u30c3\u30b0\u7528\u9014\u306b\u5229\u7528"),(0,i.kt)("p",null,"\u958b\u767a\u6642\u306e\u30c7\u30d0\u30c3\u30b0\u7528\u9014\u3067\u30ed\u30b0\u3092\u51fa\u529b\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="\u57fa\u672c\u7684\u306a\u5229\u7528\u65b9\u6cd5"',title:'"\u57fa\u672c\u7684\u306a\u5229\u7528\u65b9\u6cd5"'},"import {log} from 'framework';\n\nlog.debug(\"\u30c7\u30d0\u30c3\u30b0\u7528\u306e\u6587\u5b57\u5217\") // \u30c7\u30d0\u30c3\u30b0\u30ed\u30b0\u3092\u51fa\u529b\n")),(0,i.kt)("p",null,"\u30ed\u30ac\u30fc\u306e\u30ed\u30b0\u30ec\u30d9\u30eb\u3092\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u6bce\u306b\u5206\u3051\u308b\u3053\u3068\u3067\u3001\u30b3\u30fc\u30c9\u3092\u5909\u3048\u308b\u3053\u3068\u306a\u304f\u30c7\u30d0\u30c3\u30b0\u60c5\u5831\u306e\u51fa\u529b\u6709\u7121\u3092\u5207\u308a\u66ff\u3048\u3067\u304d\u307e\u3059\u3002\n\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u6bce\u306b\u4ee5\u4e0b\u306e\u30ed\u30b0\u30ec\u30d9\u30eb\u306e\u30ed\u30b0\u3092\u51fa\u529b\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Release"),"\u3001\u307e\u305f\u306f",(0,i.kt)("inlineCode",{parentName:"li"},"ReleaseInHouse"),": \u30a8\u30e9\u30fc\u30ec\u30d9\u30eb"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Debug"),"\u3001\u307e\u305f\u306f",(0,i.kt)("inlineCode",{parentName:"li"},"DebugAdvanced"),": \u5168\u3066\u306e\u30ed\u30b0\u30ec\u30d9\u30eb")),(0,i.kt)("h2",{id:"\u30ea\u30ea\u30fc\u30b9\u6642\u306e\u969c\u5bb3\u89e3\u6790"},"\u30ea\u30ea\u30fc\u30b9\u6642\u306e\u969c\u5bb3\u89e3\u6790"),(0,i.kt)("p",null,"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"Release"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"ReleaseInHouse"),"\u306e\u5834\u5408\u306f\u3001\u30a8\u30e9\u30fc\u30ec\u30d9\u30eb\u306e\u30ed\u30b0\u3092Firebase Crashlytics\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002\nWebView\u3067\u306e\u30a8\u30e9\u30fc\u767a\u751f\u6642\u3068HTTP\u30b9\u30c6\u30fc\u30bf\u30b95xx\u7cfb\u306e\u30a8\u30e9\u30fc\u767a\u751f\u6642\u306f\u3001\u57fa\u76e4\u90e8\u54c1\u3067\u81ea\u52d5\u7684\u306b\u30a8\u30e9\u30fc\u30ed\u30b0\u304c\u51fa\u529b\u3055\u308c\u307e\u3059\u3002\n\u305d\u308c\u4ee5\u5916\u306b\u3082\u969c\u5bb3\u3068\u3057\u3066\u691c\u77e5\u3059\u308b\u3079\u304d\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306b\u306f\u3001\u30a8\u30e9\u30fc\u30ed\u30b0\u3092\u51fa\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u30c7\u30d0\u30c3\u30b0\u60c5\u5831\u306e\u305f\u3081\u306e\u30ed\u30b0\u306a\u3069\u3001\u969c\u5bb3\u306b\u306f\u5f53\u305f\u3089\u306a\u3044\u30ed\u30b0\u306f\u30a8\u30e9\u30fc\u30ec\u30d9\u30eb\u3067\u306f\u51fa\u529b\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"))),(0,i.kt)("h2",{id:"firebase-crashlytics\u306e\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u8868\u793a\u3055\u308c\u308b\u30b9\u30bf\u30c3\u30af\u30c8\u30ec\u30fc\u30b9\u3068\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u30de\u30c3\u30d4\u30f3\u30b0"},"Firebase Crashlytics\u306e\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u8868\u793a\u3055\u308c\u308b\u30b9\u30bf\u30c3\u30af\u30c8\u30ec\u30fc\u30b9\u3068\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u30de\u30c3\u30d4\u30f3\u30b0"),(0,i.kt)("p",null,"Firebase Crashlytics\u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u3001\u9001\u4fe1\u3055\u308c\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u3084\u30b9\u30bf\u30c3\u30af\u30c8\u30ec\u30fc\u30b9\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\n\u3057\u304b\u3057\u3001\u6b21\u306e\u4f8b\u3067\u793a\u3059\u3088\u3046\u306bMinify\u51e6\u7406\u3055\u308c\u305f\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u30b9\u30bf\u30c3\u30af\u30c8\u30ec\u30fc\u30b9\u304c\u8868\u793a\u3055\u308c\u308b\u305f\u3081\u3001\u5143\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3068\u306e\u30de\u30c3\u30d4\u30f3\u30b0\u304c\u306a\u3044\u3068\u76f4\u611f\u7684\u306b\u308f\u304b\u3089\u306a\u3044\u8868\u793a\u3068\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="\u30b9\u30bf\u30c3\u30af\u30c8\u30ec\u30fc\u30b9\u306e\u4f8b"',title:'"\u30b9\u30bf\u30c3\u30af\u30c8\u30ec\u30fc\u30b9\u306e\u4f8b"'},"Fatal Exception: com.facebook.react.common.JavascriptException: Error: Error has occurred in synchronous process., stack:\n<unknown>@855:884\n<unknown>@677:2461\nvalue@231:8208\nvalue@231:7464\nonResponderRelease@231:6218\np@96:384\nb@96:527\nT@96:581\nw@96:876\nke@96:12621\nforEach@-1\n_@96:2057\n<unknown>@96:12968\nxe@96:89236\nSe@96:12419\nRe@96:12808\nreceiveTouches@96:13600\nvalue@32:3350\n<unknown>@32:747\nvalue@32:2610\nvalue@32:719\nvalue@-1\n")),(0,i.kt)("p",null,"\u305d\u3053\u3067\u3001\u4ee5\u4e0b\u306e\u624b\u9806\u3092\u884c\u3046\u3053\u3068\u3067\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3068\u306e\u30de\u30c3\u30d4\u30f3\u30b0\u3092\u89e3\u6c7a\u3057\u3066\u8868\u793a\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30bd\u30fc\u30b9\u30de\u30c3\u30d7\u306e\u4f5c\u6210"),(0,i.kt)("li",{parentName:"ul"},"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3068\u306e\u30de\u30c3\u30d4\u30f3\u30b0")),(0,i.kt)("p",null,"\u305d\u308c\u305e\u308c\u306e\u624b\u9806\u3092\u6b21\u306b\u793a\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"\u30bd\u30fc\u30b9\u30de\u30c3\u30d7\u306e\u4f5c\u6210"},"\u30bd\u30fc\u30b9\u30de\u30c3\u30d7\u306e\u4f5c\u6210"),(0,i.kt)("p",null,"\u307e\u305a\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3067\u30bd\u30fc\u30b9\u30de\u30c3\u30d7\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run bundle\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\uff3b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30eb\u30fc\u30c8\uff3d/generated"),"\u306b\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"index.android.bundle.map"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ios.bundle.map"),"\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u6b21\u306b\u3001Firebase Crashlytics\u306e\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u30b9\u30bf\u30c3\u30af\u30c8\u30ec\u30fc\u30b9\u3092\u30b3\u30d4\u30fc\u3057\u3066\u3001\u4efb\u610f\u306e\u30d5\u30a1\u30a4\u30eb\u3001\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u683c\u7d0d\u3057\u307e\u3059\u3002\n\u3053\u3053\u3067\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"\uff3b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30eb\u30fc\u30c8\uff3d/stack-trace.txt"),"\u306b\u4fdd\u5b58\u3059\u308b\u3068\u4eee\u5b9a\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3068\u306e\u30de\u30c3\u30d4\u30f3\u30b0"},"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3068\u306e\u30de\u30c3\u30d4\u30f3\u30b0"),(0,i.kt)("p",null,"\u6b21\u306b\u3001\u30bd\u30fc\u30b9\u30de\u30c3\u30d7\u3092\u4f7f\u3063\u3066\u3001\u30b9\u30bf\u30c3\u30af\u30c8\u30ec\u30fc\u30b9\u3068\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u30de\u30c3\u30d4\u30f3\u30b0\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="\u3010Android\u3011\u306e\u5834\u5408"',title:'"\u3010Android\u3011\u306e\u5834\u5408"'},"cat stack-trace.txt | npm run symbolicate:android\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="\u3010iOS\u3011\u306e\u5834\u5408"',title:'"\u3010iOS\u3011\u306e\u5834\u5408"'},"cat stack-trace.txt | npm run symbolicate:ios\n")),(0,i.kt)("p",null,"\uff08\u203b\uff09",(0,i.kt)("inlineCode",{parentName:"p"},"cat"),"\u30b3\u30de\u30f3\u30c9\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"\u30b3\u30de\u30f3\u30c9\u306a\u3069\u3067\u4ee3\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"\u5b9f\u884c\u5f8c\u306b\u3001\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u884c\u6570\u3068\u95a2\u6570\u540d\u306e\u30de\u30c3\u30d4\u30f3\u30b0\u89e3\u6c7a\u6e08\u307f\u306e\u30b9\u30bf\u30c3\u30af\u30c8\u30ec\u30fc\u30b9\u304c\u6a19\u6e96\u51fa\u529b\u3055\u308c\u3001\u30a8\u30e9\u30fc\u767a\u751f\u7b87\u6240\u304c\u308f\u304b\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Fatal Exception: com.facebook.react.common.JavascriptException: Error: Error has occurred in synchronous process., stack:\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/src/screens/error/ErrorInEventHandler.tsx:8:useCallback$argument_0\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/node_modules/react-native-elements/dist/buttons/Button.js:35:useCallback$argument_0\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/node_modules/react-native/Libraries/Pressability/Pressability.js:691:_performTransitionSideEffects\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/node_modules/react-native/Libraries/Pressability/Pressability.js:628:_receiveSignal\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/node_modules/react-native/Libraries/Pressability/Pressability.js:524:responderEventHandlers.onResponderRelease\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:32:invokeGuardedCallbackImpl\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:50:invokeGuardedCallback\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:63:invokeGuardedCallbackAndCatchFirstError\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:82:executeDispatch\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:976:executeDispatchesAndReleaseTopLevel\nforEach@-1\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:155:forEachAccumulated\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:1007:batchedUpdates$argument_0\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:7566:batchedUpdatesImpl\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:957:batchedUpdates\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:988:_receiveRootNodeIDEvent\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:1053:ReactNativePrivateInterface.RCTEventEmitter.register$argument_0.receiveTouches\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/node_modules/react-native/Libraries/BatchedBridge/MessageQueue.js:416:__callFunction\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/node_modules/react-native/Libraries/BatchedBridge/MessageQueue.js:109:__guard$argument_0\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/node_modules/react-native/Libraries/BatchedBridge/MessageQueue.js:364:__guard\n~/dev/src/github.com/ws-4020/mobile-app-crib-notes/example-app/SantokuApp/node_modules/react-native/Libraries/BatchedBridge/MessageQueue.js:108:callFunctionReturnFlushedQueue\nvalue@-1\n")))}u.isMDXComponent=!0}}]);