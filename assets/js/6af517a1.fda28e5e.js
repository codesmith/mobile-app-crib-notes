(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2838],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2267:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={title:"XCode\u3067\u30d3\u30eb\u30c9\u304c\u5931\u6557\u3059\u308b"},l={unversionedId:"react-native/troubleshooting/cant-build-in-xcode",id:"react-native/troubleshooting/cant-build-in-xcode",isDocsHomePage:!1,title:"XCode\u3067\u30d3\u30eb\u30c9\u304c\u5931\u6557\u3059\u308b",description:"\u30a8\u30e9\u30fc\u5185\u5bb9",source:"@site/docs/react-native/troubleshooting/cant-build-in-xcode.md",sourceDirName:"react-native/troubleshooting",slug:"/react-native/troubleshooting/cant-build-in-xcode",permalink:"/mobile-app-crib-notes/react-native/troubleshooting/cant-build-in-xcode",version:"current",lastUpdatedAt:1616568863,formattedLastUpdatedAt:"2021/3/24",frontMatter:{title:"XCode\u3067\u30d3\u30eb\u30c9\u304c\u5931\u6557\u3059\u308b"},sidebar:"troubleshoot",previous:{title:"react-native-cli\u306b\u3064\u3044\u3066",permalink:"/mobile-app-crib-notes/react-native/troubleshooting/react-native-cli-uninstall"}},c=[{value:"\u30a8\u30e9\u30fc\u5185\u5bb9",id:"\u30a8\u30e9\u30fc\u5185\u5bb9",children:[]},{value:"\u5bfe\u51e6\u65b9\u6cd5",id:"\u5bfe\u51e6\u65b9\u6cd5",children:[{value:"Flipper-Folly\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4e0a\u66f8\u304d",id:"flipper-folly\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4e0a\u66f8\u304d",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u30a8\u30e9\u30fc\u5185\u5bb9"},"\u30a8\u30e9\u30fc\u5185\u5bb9"),(0,i.kt)("p",null,"XCode\u3067\u6b21\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u3066\u30d3\u30eb\u30c9\u304c\u5931\u6557\u3059\u308b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"'event2/event-config.h' file not found\n")),(0,i.kt)("h2",{id:"\u5bfe\u51e6\u65b9\u6cd5"},"\u5bfe\u51e6\u65b9\u6cd5"),(0,i.kt)("h3",{id:"flipper-folly\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4e0a\u66f8\u304d"},"Flipper-Folly\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4e0a\u66f8\u304d"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"2021/2/19"),"\u306e\u6642\u70b9\u306b\u304a\u3044\u3066\u3001\u300cFlipper-Folly\u300d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u30a2\u30c3\u30d7\u304c\u539f\u56e0\u3067\u3053\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u3066\u3044\u307e\u3059\u3002\n\u6b21\u306e\u3068\u304a\u308a\u306bPodfile\u3092\u4fee\u6b63\u3057\u3066 ",(0,i.kt)("inlineCode",{parentName:"p"},"pod install"),"\u3092\u518d\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h4",{id:"\u53c2\u8003\u30b5\u30a4\u30c8"},"\u53c2\u8003\u30b5\u30a4\u30c8"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/30836"},"Cant build react native from box in XCode: 'event2/event-config.h' file not found #30836")),(0,i.kt)("h4",{id:"podfile\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63"},"Podfile\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"use_flipper!({ 'Flipper-Folly' => '2.3.0' })\n")),(0,i.kt)("h4",{id:"pod-install\u3092\u518d\u5b9f\u884c"},(0,i.kt)("inlineCode",{parentName:"h4"},"pod install"),"\u3092\u518d\u5b9f\u884c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"cd ios\nrm -rf Pods/\nrm Podfile.lock\npod install\ncd ..\nnpx react-native run-ios\n")))}u.isMDXComponent=!0}}]);