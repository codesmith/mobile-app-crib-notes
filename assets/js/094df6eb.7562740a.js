"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"USB\u63a5\u7d9a\u3067iOS\u7aef\u672b\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},i=void 0,l={unversionedId:"react-native/santoku/development/development-environment/setting-up-ios-run-on-device",id:"react-native/santoku/development/development-environment/setting-up-ios-run-on-device",title:"USB\u63a5\u7d9a\u3067iOS\u7aef\u672b\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"iOS\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u306e\u4fee\u6b63",source:"@site/docs/react-native/santoku/development/development-environment/02.setting-up-ios-run-on-device.mdx",sourceDirName:"react-native/santoku/development/development-environment",slug:"/react-native/santoku/development/development-environment/setting-up-ios-run-on-device",permalink:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-ios-run-on-device",draft:!1,tags:[],version:"current",lastUpdatedAt:1675738815,formattedLastUpdatedAt:"2023\u5e742\u67087\u65e5",sidebarPosition:2,frontMatter:{title:"USB\u63a5\u7d9a\u3067iOS\u7aef\u672b\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},sidebar:"santoku",previous:{title:"\u57fa\u672c\u7684\u306a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",permalink:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/basic-setup"},next:{title:"USB\u63a5\u7d9a\u3067iOS\u7aef\u672b\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff08App\u306e\u9ad8\u5ea6\u306a\u6a5f\u80fd\uff09",permalink:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-ios-advanced-run-on-device"}},p={},c=[{value:"iOS\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u306e\u4fee\u6b63",id:"ios\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u306e\u4fee\u6b63",level:2},{value:"\u30c7\u30d9\u30ed\u30c3\u30d1\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30c1\u30fc\u30e0ID\u3092\u78ba\u8a8d\u3059\u308b",id:"\u30c7\u30d9\u30ed\u30c3\u30d1\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30c1\u30fc\u30e0id\u3092\u78ba\u8a8d\u3059\u308b",level:3}],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ios\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u306e\u4fee\u6b63"},"iOS\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u306e\u4fee\u6b63"),(0,o.kt)("p",null,"iOS\u7aef\u672b\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u958b\u767a\u3059\u308b\u5834\u5408\u3001Xcode\u304b\u3089Apple ID\uff08\u958b\u767a\u8005\u30a2\u30ab\u30a6\u30f3\u30c8\uff09\u3067\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u305d\u306e\u958b\u767a\u8005\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3084\u8a3c\u660e\u66f8\u3092\u5229\u7528\u3057\u3066\u30d3\u30eb\u30c9\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3092\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u8a2d\u5b9a\u65b9\u6cd5\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"../build-configuration/development-account-for-ios#%E9%96%8B%E7%99%BA%E8%80%85%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%81%AE%E8%A8%AD%E5%AE%9A"},"\u30d3\u30eb\u30c9 - \u958b\u767a\u8005\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u8a2d\u5b9a"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3067\u304d\u305f\u3089\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"<device name>"),"\u306f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5148\u306eiOS\u30c7\u30d0\u30a4\u30b9\u540d\u3067\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=iOS\u7aef\u672b\u3067\u8d77\u52d5\u3059\u308b",title:"iOS\u7aef\u672b\u3067\u8d77\u52d5\u3059\u308b"},"npm run ios -- --device='<device name>'\n")),(0,o.kt)("p",null,"\u30c7\u30d0\u30a4\u30b9\u540d\u304c\u308f\u304b\u3089\u306a\u3044\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306b\u6319\u3052\u308b\u30b3\u30de\u30f3\u30c9\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30c7\u30d0\u30a4\u30b9\u540d\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u540d\u3092\u78ba\u8a8d\u3059\u308b",title:"\u30c7\u30d0\u30a4\u30b9\u540d\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u540d\u3092\u78ba\u8a8d\u3059\u308b"},"xcrun xctrace list devices\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=USB\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b\u30c7\u30d0\u30a4\u30b9\u3092\u78ba\u8a8d\u3059\u308b",title:"USB\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b\u30c7\u30d0\u30a4\u30b9\u3092\u78ba\u8a8d\u3059\u308b"},"ios-deploy --detect\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Xcode\u3067\u4e00\u5ea6\u3082\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u3044\u3066\u3044\u306a\u3044\u72b6\u614b\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3088\u3046\u3068\u3059\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"error: No profiles for 'personal.jp.fintan.mobile.SantokuApp.local.<personal>' were found: Xcode couldn't find any iOS App Development provisioning profiles matching 'personal.jp.fintan.mobile.SantokuApp.local.<personal>'. Automatic signing is disabled and unable to generate a profile. To enable automatic signing, pass -allowProvisioningUpdates to xcodebuild. (in target 'SantokuApp' from project 'SantokuApp')\n")),(0,o.kt)("p",{parentName:"admonition"},"\u3053\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306f\u3001\u4e00\u5ea6Xcode\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u3044\u3066\u304b\u3089\u30c7\u30d0\u30a4\u30b9\u3078\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u8a66\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,o.kt)("h3",{id:"\u30c7\u30d9\u30ed\u30c3\u30d1\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30c1\u30fc\u30e0id\u3092\u78ba\u8a8d\u3059\u308b"},"\u30c7\u30d9\u30ed\u30c3\u30d1\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30c1\u30fc\u30e0ID\u3092\u78ba\u8a8d\u3059\u308b"),(0,o.kt)("p",null,"\u7121\u511f\u306e\u30c7\u30d9\u30ed\u30c3\u30d1\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30c1\u30fc\u30e0ID\u306f\u3001Xcode\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3084\u958b\u767a\u7528\u8a3c\u660e\u66f8\u306a\u3069\u304b\u3089\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u3001\u958b\u767a\u7528\u8a3c\u660e\u66f8\u304b\u3089\u78ba\u8a8d\u3059\u308b\u624b\u9806\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u307e\u305a\u3001Xcode\u304b\u3089Apple ID\uff08\u30c7\u30d9\u30ed\u30c3\u30d1\u30a2\u30ab\u30a6\u30f3\u30c8\uff09\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u3001\u958b\u767a\u7528\u306e\u8a3c\u660e\u66f8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Xcode\u3067\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u8a2d\u5b9a\u753b\u9762\u3092\u958b\u304d\u3001\u5fc5\u8981\u306a\u3089\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u300cPreferences\u300d\uff1e\u300cAccounts\u300d\u3067\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u8a2d\u5b9a\u753b\u9762\u304c\u958b\u304d\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u5834\u5408\u3001\u5de6\u4e0b\u306e\u300c\uff0b\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002"))),(0,o.kt)("li",{parentName:"ol"},"\u5229\u7528\u3059\u308bApple ID\u3092\u9078\u629e\u72b6\u614b\u306b\u3057\u3001\u53f3\u5074\u306e\u30c1\u30fc\u30e0\u4e00\u89a7\u3067\u300c<Apple ID\u306e\u6c0f\u540d> ",(0,o.kt)("strong",{parentName:"li"},"(Personal Team)"),"\u300d\u3068\u66f8\u304b\u308c\u3066\u3044\u308b\u30c1\u30fc\u30e0\u3092\u9078\u629e\u3057\u307e\u3059\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Apple Developer Program\u306a\u3069\u306b\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u30e6\u30fc\u30b6\u306e\u5834\u5408\u3001Apple Developer Program\u306e\u30c7\u30d9\u30ed\u30c3\u30d1\u540d\u306a\u3069\u3082\u8868\u793a\u3055\u308c\u308b\u305f\u3081\u3001\u8907\u6570\u306e\u30c1\u30fc\u30e0\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"))),(0,o.kt)("li",{parentName:"ol"},"\u300cPersonal Team\u300d\u3092\u9078\u629e\u3057\u305f\u72b6\u614b\u3067\u300cManage Certificates\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u300cApple Development Certificates\u300d\u306b\u8a3c\u660e\u66f8\u304c\u30ea\u30b9\u30c8\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u8a3c\u660e\u66f8\u304c\u8868\u793a\u3055\u308c\u306a\u3044\u5834\u5408\u306f\u3001\u5de6\u4e0b\u306e\u300c\uff0b\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u8a3c\u660e\u66f8\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))),(0,o.kt)("p",null,"\u6b21\u306b\u3001\u300c\u30ad\u30fc\u30c1\u30a7\u30fc\u30f3\u30a2\u30af\u30bb\u30b9\u300d\u3092\u958b\u304d\u3001\u958b\u767a\u7528\u306e\u8a3c\u660e\u66f8\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u300c\u30ad\u30fc\u30c1\u30a7\u30fc\u30f3\u30a2\u30af\u30bb\u30b9\u300d\u3092\u958b\u304d\u3001\u5de6\u4e0a\u306e\u30ad\u30fc\u30c1\u30a7\u30fc\u30f3\u4e00\u89a7\u304b\u3089\u300c\u30ed\u30b0\u30a4\u30f3\u300d\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u300c\u5206\u985e\u300d\u306e\u300c\u8a3c\u660e\u66f8\u300d\u3092\u9078\u629e\u3057\u3001\u30ed\u30b0\u30a4\u30f3\u30ad\u30fc\u30c1\u30a7\u30fc\u30f3\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u8a3c\u660e\u66f8\u306e\u4e00\u89a7\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u300cApple Development: <Apple ID\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9> (xxxxxxxxxx)\u300d\u3068\u3044\u3046\u540d\u524d\u306e\u8a3c\u660e\u66f8\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3057\u3001\u60c5\u5831\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8868\u793a\u3055\u308c\u305f\u60c5\u5831\u306e\u4e2d\u306e\u300c\u90e8\u7f72\u300d\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u6587\u5b57\u5217\u304c\u30c1\u30fc\u30e0ID\u3067\u3059\u3002")))}u.isMDXComponent=!0}}]);