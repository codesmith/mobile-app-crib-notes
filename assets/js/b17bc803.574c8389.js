(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[6880],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=d(n),s=r,k=c["".concat(o,".").concat(s)]||c[s]||m[s]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7294),r=n(944),i=n(6010),l="tabItem_1uMI",p="tabItemActive_2DSg";var o=37,d=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,m=e.values,c=e.groupId,s=e.className,k=(0,r.Z)(),v=k.tabGroupChoices,f=k.setTabGroupChoices,g=(0,a.useState)(u),N=g[0],b=g[1],h=a.Children.toArray(e.children),y=[];if(null!=c){var x=v[c];null!=x&&x!==N&&m.some((function(e){return e.value===x}))&&b(x)}var S=function(e){var t=e.currentTarget,n=y.indexOf(t),a=m[n].value;b(a),null!=c&&(f(c,a),setTimeout((function(){var e,n,a,r,i,l,o,d;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,d=l.innerWidth,n>=0&&i<=d&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},A=function(e){var t,n;switch(e.keyCode){case d:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case o:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},s)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":N===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:A,onFocus:S,onClick:S},n)}))),t?(0,a.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},8665:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=n(1395),p=n(8215),o={title:"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8"},d={unversionedId:"react-native/santoku/development/build-variants",id:"react-native/santoku/development/build-variants",isDocsHomePage:!1,title:"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8",description:"\u57fa\u672c\u7684\u306a\u8003\u3048\u65b9",source:"@site/docs/react-native/santoku/development/build-variants.mdx",sourceDirName:"react-native/santoku/development",slug:"/react-native/santoku/development/build-variants",permalink:"/mobile-app-crib-notes/react-native/santoku/development/build-variants",version:"current",lastUpdatedAt:1620894773,formattedLastUpdatedAt:"2021/5/13",frontMatter:{title:"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8"}},u=[{value:"\u57fa\u672c\u7684\u306a\u8003\u3048\u65b9",id:"\u57fa\u672c\u7684\u306a\u8003\u3048\u65b9",children:[{value:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7",id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7",children:[]},{value:"\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc",id:"\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc",children:[]}]},{value:"\u5b9f\u884c\u6642\u306e\u5207\u66ff\u65b9\u6cd5",id:"\u5b9f\u884c\u6642\u306e\u5207\u66ff\u65b9\u6cd5",children:[]}],m={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u57fa\u672c\u7684\u306a\u8003\u3048\u65b9"},"\u57fa\u672c\u7684\u306a\u8003\u3048\u65b9"),(0,i.kt)("p",null,"Android\u306e",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/build/build-variants"},"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8"),"\uff08",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/build#build-config"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3068\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc"),"\uff09\u306e\u8003\u3048\u65b9\u3092\u53c2\u8003\u306b\u3057\u3066\u3001React Native\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d3\u30eb\u30c9\u8a2d\u5b9a\u3092\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u306fAndroid\u3067\u306fGradle\u3001iOS\u3067\u306fXcode\u306eConfiguration\u3067\u8a2d\u5b9a\u3057\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u306f",(0,i.kt)("a",{parentName:"p",href:"https://github.com/luggit/react-native-config"},"react-native-config"),"\u3067\u8a2d\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306b\u7570\u306a\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u308b\u3088\u3046\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID\uff08Android\uff09\u3068Bundle Identifier\uff08iOS\uff09\u3092\u6b21\u306e\u30eb\u30fc\u30eb\u3067\u8a2d\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID\uff08Android\uff09\u3068Bundle Identifier\uff08iOS\uff09\u306e\u30eb\u30fc\u30eb"',title:'"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID\uff08Android\uff09\u3068Bundle','Identifier\uff08iOS\uff09\u306e\u30eb\u30fc\u30eb"':!0},"jp.fintan.mobile.SantokuApp<flavorSuffix><typeSuffix>\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<flavorSuffix>"),"\u306f\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u3054\u3068\u306b\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"<typeSuffix>"),"\u306f\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3054\u3068\u306b\u8a2d\u5b9a\u3059\u308b\u30b5\u30d5\u30a3\u30c3\u30af\u30b9\u3067\u3059\u3002iOS\u306eDebug\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3060\u3051\u306fBundle Identifier\u306e\u5f62\u5f0f\u304c\u5c11\u3057\u7570\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u306b\u3064\u3044\u3066\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\uff08",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/development/build-type-configurations#bundle-identifier%E3%81%AE%E3%82%B5%E3%83%95%E3%82%A3%E3%83%83%E3%82%AF%E3%82%B9"},"Bundle Identifier\u306e\u30b5\u30d5\u30a3\u30c3\u30af\u30b9"),"\uff09\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h3",{id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7"),(0,i.kt)("p",null,"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d3\u30eb\u30c9\u65b9\u6cd5\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u4e3b\u306b\u6b21\u306b\u3042\u3052\u308b\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"React Native\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9a\u6570 ",(0,i.kt)("inlineCode",{parentName:"li"},"__DEV__")),(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID (Android)\u3001Bundle Identifier (iOS) \u306e\u30b5\u30d5\u30a3\u30c3\u30af\u30b9"),(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30a2\u30a4\u30b3\u30f3"),(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u7f72\u540d\u8a2d\u5b9a"),(0,i.kt)("li",{parentName:"ul"},"\u30db\u30c3\u30c8\u30ea\u30ed\u30fc\u30c9\u306a\u3069\u306e\u958b\u767a\u6a5f\u80fd\u3084Flipper\u306e\u6709\u52b9/\u7121\u52b9"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/bundleresources/information_property_list/nsapptransportsecurity"},"App Transport Security"),"\u306e\u6709\u52b9/\u7121\u52b9\uff08iOS\u306e\u307f\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u96e3\u8aad\u5316 (R8) \u306e\u6709\u52b9/\u7121\u52b9\uff08Android\u306e\u307f\uff09")),(0,i.kt)("p",null,"\u3069\u306e\u3088\u3046\u306b\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3054\u3068\u306e\u8a2d\u5b9a\u3092\u3057\u3066\u3044\u308b\u304b\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/development/build-type-configurations"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u30014\u3064\u306e\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3092\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)(l.Z,{groupId:"build-type",defaultValue:"debug",values:[{label:"Debug",value:"debug"},{label:"DebugAdvanced",value:"debug-advanced"},{label:"ReleaseInHouse",value:"release-in-house"},{label:"Release",value:"release"}],mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"debug",mdxType:"TabItem"},(0,i.kt)("p",null,"Android\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u3042\u308b\u3044\u306fiOS\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u52d5\u4f5c\u691c\u8a3c\u3057\u305f\u3044\u5834\u5408\u306b\u5229\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<typeSuffix>"),"\u306f",(0,i.kt)("inlineCode",{parentName:"p"},".debug"),"\u3067\u3059\u3002"),(0,i.kt)("p",null,"iOS\u306eApp\u306e\u9ad8\u5ea6\u306a\u6a5f\u80fd\u3092\u542b\u3080\u52d5\u4f5c\u306f\u691c\u8a3c\u3067\u304d\u307e\u305b\u3093\u304c\u3001USB\u63a5\u7d9a\u3067\u30c7\u30d0\u30a4\u30b9\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002\u305f\u3060\u3057\u3001iOS\u30a2\u30d7\u30ea\u3092\u5b9f\u6a5f\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5834\u5408\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ws-4020/mobile-app-crib-notes/tree/master/SantokuApp#readme"},"README"),"\u306b\u66f8\u3044\u3066\u3042\u308b\u65b9\u6cd5\u3067 ",(0,i.kt)("inlineCode",{parentName:"p"},"ios/PersonalAccount.xcconfig")," \u306b\u500b\u4eba\u306eApple ID\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,i.kt)(p.Z,{value:"debug-advanced",mdxType:"TabItem"},(0,i.kt)("p",null,"USB\u63a5\u7d9a\u3067\u30c7\u30d0\u30a4\u30b9\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3001iOS\u306eApp\u306e\u9ad8\u5ea6\u306a\u6a5f\u80fd\u3092\u542b\u3080\u52d5\u4f5c\u3092\u691c\u8a3c\u3057\u305f\u3044\u5834\u5408\u306b\u5229\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<typeSuffix>"),"\u306f",(0,i.kt)("inlineCode",{parentName:"p"},".debugAdvanced"),"\u3067\u3059\u3002"),(0,i.kt)("p",null,"iOS\u5411\u3051\u306e\u30d3\u30eb\u30c9\u306b\u306f\u3001Apple Developer Enterprise Program\u306e\u958b\u767a\u7528\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3068\u958b\u767a\u7528\u8a3c\u660e\u66f8\u306e\u79d8\u5bc6\u9375\u304c\u5fc5\u8981\u3067\u3059\u3002\u307e\u305f\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5148\u306e\u30c7\u30d0\u30a4\u30b9\u306eUDID\u304c\u3001\u958b\u767a\u7528\u30c7\u30d0\u30a4\u30b9\u3068\u3057\u3066\u767b\u9332\u3057\u3066\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Apple Developer (Enterprise) Program\u3067\u306f\u3001\u958b\u767a\u7528\u30c7\u30d0\u30a4\u30b9\u306f\u30c7\u30d0\u30a4\u30b9\u7a2e\u5225\u3054\u3068\u306b100\u53f0\u307e\u3067\u3057\u304b\u767b\u9332\u3067\u304d\u307e\u305b\u3093\u3002\u5927\u91cf\u306e\u30c7\u30d0\u30a4\u30b9\u3092\u767b\u9332\u3057\u306a\u3044\u3088\u3046\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))),(0,i.kt)(p.Z,{value:"release-in-house",mdxType:"TabItem"},(0,i.kt)("p",null,"DeployGate\u3067\u914d\u5e03\u3059\u308b\u305f\u3081\u306e\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b\u5834\u5408\u306b\u5229\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<typeSuffix>"),"\u306f",(0,i.kt)("inlineCode",{parentName:"p"},".house"),"\u3067\u3059\u3002"),(0,i.kt)("p",null,"iOS\u5411\u3051\u306e\u30d3\u30eb\u30c9\u306b\u306f\u3001Apple Developer Enterprise Program\u306e\u958b\u767a\u7528\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3068\u958b\u767a\u7528\u8a3c\u660e\u66f8\u306e\u79d8\u5bc6\u9375\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,i.kt)("p",null,"Android\u5411\u3051\u306e\u30d3\u30eb\u30c9\u306b\u306f\u3001\u7f72\u540d\u306b\u5229\u7528\u3059\u308b\u9375\u3092\u4fdd\u5b58\u3057\u3066\u3042\u308b\u30ad\u30fc\u30b9\u30c8\u30a2\u30d5\u30a1\u30a4\u30eb\u304c\u5fc5\u8981\u3067\u3059\u3002")),(0,i.kt)(p.Z,{value:"release",mdxType:"TabItem"},(0,i.kt)("p",null,"TestFlight\u3084Google Play\u306e\u30c6\u30b9\u30c8\u7248\u3068\u3057\u3066\u914d\u5e03\u3059\u308b\u305f\u3081\u306e\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b\u5834\u5408\u306b\u5229\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<typeSuffix>"),"\u306f\u7a7a\u6587\u5b57\u3067\u3059\u3002"),(0,i.kt)("p",null,"iOS\u5411\u3051\u306e\u30d3\u30eb\u30c9\u306b\u306f\u3001Apple Developer Program\u306e\u958b\u767a\u7528\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3068\u958b\u767a\u7528\u8a3c\u660e\u66f8\u306e\u79d8\u5bc6\u9375\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,i.kt)("p",null,"Android\u5411\u3051\u306e\u30d3\u30eb\u30c9\u306b\u306f\u3001Google Play\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u9375\u3092\u4fdd\u5b58\u3057\u3066\u3042\u308b\u30ad\u30fc\u30b9\u30c8\u30a2\u30d5\u30a1\u30a4\u30eb\u304c\u5fc5\u8981\u3067\u3059\u3002"))),(0,i.kt)("h3",{id:"\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc"},"\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc"),(0,i.kt)("p",null,"\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u7a2e\u985e\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/build/build-variants"},"Android \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3067\u306f\u300c\u6709\u6599\u7248\u300d\u300c\u7121\u6599\u7248\u300d\u3068\u3044\u3063\u305f\u4f8b\u304c\u6319\u3052\u3089\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u300c\u672c\u756a\u74b0\u5883\u5411\u3051\u300d\u300c\u30b9\u30c6\u30fc\u30b8\u30f3\u30b0\u74b0\u5883\u5411\u3051\u300d\u3068\u3044\u3063\u305f\u3088\u3046\u306a\u74b0\u5883\u306e\u6307\u5b9a\u306b\u3082\u5229\u7528\u3067\u304d\u307e\u3059\u3002\u4e3b\u306b\u6b21\u306b\u3042\u3052\u308b\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID (Android)\u3001Bundle Identifier (iOS) \u306e\u30b5\u30d5\u30a3\u30c3\u30af\u30b9"),(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u540d"),(0,i.kt)("li",{parentName:"ul"},"\u63a5\u7d9a\u5148\u306e\u30db\u30b9\u30c8\u540d\u306a\u3069\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u884c\u74b0\u5883\u306b\u95a2\u3059\u308b\u8a2d\u5b9a")),(0,i.kt)("p",null,"\u3069\u306e\u3088\u3046\u306b\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u3054\u3068\u306e\u8a2d\u5b9a\u3092\u3057\u3066\u3044\u308b\u304b\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/development/product-flavor-configurations"},"\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u30012\u3064\u306e\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u3092\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u540d\u306fXcode Organizer\u3067\u30a2\u30d7\u30ea\u3092\u9078\u629e\u3059\u308b\u3068\u304d\u306e\u30a2\u30d7\u30ea\u540d\u3068\u3057\u3066\u3082\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u540d\u306b\u30a2\u30d7\u30ea\u540d\u3082\u542b\u3081\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)(l.Z,{groupId:"product-flavor",defaultValue:"development",values:[{label:"DevSantokuApp",value:"development"},{label:"SantokuApp",value:"production"}],mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"development",mdxType:"TabItem"},(0,i.kt)("p",null,"\u958b\u767a\u7528\u306b\u3001API\u306a\u3069\u306e\u63a5\u7d9a\u5148\u3092\u30ed\u30fc\u30ab\u30eb\u30db\u30b9\u30c8\u3068\u3057\u3066\u3044\u308b\u30d5\u30ec\u30fc\u30d0\u30fc\u3067\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<flavorSuffix>"),"\u306f",(0,i.kt)("inlineCode",{parentName:"p"},".dev"),"\u3067\u3059\u3002")),(0,i.kt)(p.Z,{value:"production",mdxType:"TabItem"},(0,i.kt)("p",null,"\u5b9f\u969b\u306e\u30b5\u30fc\u30d0\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u8a2d\u5b9a\u3092\u3057\u3066\u3044\u308b\u30d5\u30ec\u30fc\u30d0\u30fc\u3067\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<flavorSuffix>"),"\u306f\u7a7a\u6587\u5b57\u3067\u3059\u3002"))),(0,i.kt)("h2",{id:"\u5b9f\u884c\u6642\u306e\u5207\u66ff\u65b9\u6cd5"},"\u5b9f\u884c\u6642\u306e\u5207\u66ff\u65b9\u6cd5"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"npm run android"),"\u3084",(0,i.kt)("inlineCode",{parentName:"p"},"npm run ios"),"\u306e\u307f\u3067\u5b9f\u884c\u3057\u305f\u5834\u5408\u306f\u3001\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7",(0,i.kt)("inlineCode",{parentName:"p"},"Debug"),"\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc",(0,i.kt)("inlineCode",{parentName:"p"},"Development"),"\u3067\u30d3\u30eb\u30c9\u3055\u308c\u3066\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"))),(0,i.kt)(l.Z,{groupId:"operating-systems",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"android",mdxType:"TabItem"},(0,i.kt)("p",null,"\u8d77\u52d5\u6642\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"variants"),"\u3068",(0,i.kt)("inlineCode",{parentName:"p"},"appIdSuffix"),"\u306e2\u3064\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6e21\u3059\u3068\u3001\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3068\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u3092\u6307\u5b9a\u3057\u3066Android\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'npm run android -- --appId jp.fintan.mobile.SantokuApp --variants "<flavor><Type>" --appIdSuffix "<flavorSuffix><typeSuffix>"\n')),(0,i.kt)("p",null,"\u4f8b\u3048\u3070\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7Debug\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcDevSantokuApp\u3067\u30a2\u30d7\u30ea\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'npm run android -- --variant "devSantokuAppDebug" --appIdSuffix "dev.debug"\n')),(0,i.kt)("p",null,"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7Release\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcSantokuApp\u3068\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'npm run android -- --variant "santokuAppRelease" --appIdSuffix ""\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Android\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID\u3068\u30d1\u30c3\u30b1\u30fc\u30b8\u540d\u304c\u7570\u306a\u308b\u306e\u3067\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"appIdSuffix"),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6e21\u3057\u3066\u3044\u307e\u3059\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"appIdSuffix"),"\u3092\u6e21\u3055\u306a\u3044\u5834\u5408\u3084\u9593\u9055\u3048\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u6b21\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"Starting: Intent { cmp=jp.fintan.mobile.santokuapp.dev.debug/jp.fintan.mobile.santokuapp.MainActivity }\nError type 3\nError: Activity class {jp.fintan.mobile.santokuapp.dev.debug/jp.fintan.mobile.santokuapp.MainActivity} does not exist.\n")),(0,i.kt)("p",{parentName:"div"},"\u306a\u304a\u3001CLI\u304b\u3089\u306e\u30a2\u30d7\u30ea\u306e\u8d77\u52d5\u306b\u5931\u6557\u3057\u3066\u3044\u308b\u305f\u3081\u3053\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u307e\u3067\u306f\u6b63\u5e38\u306b\u5b8c\u4e86\u3057\u3066\u3044\u308b\u306e\u3067\u624b\u52d5\u3067\u3042\u308c\u3070\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3067\u304d\u307e\u3059\u3002"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"appIdSuffix"),"\u30aa\u30d7\u30b7\u30e7\u30f3\u306fAndroid\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u540d\u306b\u81ea\u52d5\u7684\u306b\u30d4\u30ea\u30aa\u30c9\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"flavorSuffix"),"\u3084",(0,i.kt)("inlineCode",{parentName:"p"},"typeSuffix"),"\u306e\u8a2d\u5b9a\u5024\u306f\u30d4\u30ea\u30aa\u30c9\u3067\u59cb\u3081\u3066\u3044\u307e\u3059\u304c\u3001\u6b21\u306e\u8868\u306e\u3088\u3046\u306b\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"appIdSuffix"),"\u306b\u6307\u5b9a\u3059\u308b\u5024\u306e\u5148\u982d\u306b\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"."),"\u3092\u3064\u3051\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"flavorSuffix"),(0,i.kt)("th",{parentName:"tr",align:"center"},"typeSuffix"),(0,i.kt)("th",{parentName:"tr",align:"center"},"appIdSuffix"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u8d77\u52d5\u306b\u6210\u529f\u3059\u308b\u304b\u3069\u3046\u304b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},".dev"),(0,i.kt)("td",{parentName:"tr",align:"center"},".debug"),(0,i.kt)("td",{parentName:"tr",align:"center"},"dev.debug"),(0,i.kt)("td",{parentName:"tr",align:"center"},"jp.fintan.mobile.santokuapp.dev.debug"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},".dev"),(0,i.kt)("td",{parentName:"tr",align:"center"},".debug"),(0,i.kt)("td",{parentName:"tr",align:"center"},".dev.debug"),(0,i.kt)("td",{parentName:"tr",align:"center"},"jp.fintan.mobile.santokuapp..dev.debug"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},".dev"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"dev"),(0,i.kt)("td",{parentName:"tr",align:"center"},"jp.fintan.mobile.santokuapp.dev"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},".debug"),(0,i.kt)("td",{parentName:"tr",align:"center"},"debug"),(0,i.kt)("td",{parentName:"tr",align:"center"},"jp.fintan.mobile.santokuapp.debug"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"))))))),(0,i.kt)(p.Z,{value:"ios",mdxType:"TabItem"},(0,i.kt)("p",null,"\u8d77\u52d5\u6642\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"configuration"),"\u3067\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3092\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"scheme"),"\u3067\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u3092\u6307\u5b9a\u3057\u3066iOS\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'npm run ios -- --scheme "<Flavor>" --configuration "<Type>"\n')),(0,i.kt)("p",null,"\u4f8b\u3048\u3070\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7Debug\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcDevSantokuApp\u3067\u30a2\u30d7\u30ea\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'npm run ios -- --scheme "DevSantokuApp" --configuration "Debug"\n')),(0,i.kt)("p",null,"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3092Release\u306b\u5909\u66f4\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'npm run ios -- --scheme "DevSantokuApp" --configuration "Release"\n')))))}c.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);