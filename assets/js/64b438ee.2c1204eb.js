"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2120],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",p="tabItemActive_2DSg";var c=37,s=39;var u=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,u=e.values,d=e.groupId,m=e.className,f=o(),v=f.tabGroupChoices,g=f.setTabGroupChoices,k=(0,a.useState)(r),b=k[0],h=k[1],x=a.Children.toArray(e.children),N=[];if(null!=d){var y=v[d];null!=y&&y!==b&&u.some((function(e){return e.value===y}))&&h(y)}var w=function(e){var t=e.currentTarget,n=N.indexOf(t),a=u[n].value;h(a),null!=d&&(g(d,a),setTimeout((function(){var e,n,a,r,o,i,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},E=function(e){var t,n;switch(e.keyCode){case s:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case c:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:E,onFocus:w,onClick:w},n)}))),t?(0,a.cloneElement)(x.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},2806:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=n(5064),l=n(8215),p={title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c"},c=void 0,s={unversionedId:"react-native/learn/getting-started/launch-created-app",id:"react-native/learn/getting-started/launch-created-app",isDocsHomePage:!1,title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c",description:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u3067\u4f5c\u3063\u305f\u30a2\u30d7\u30ea\u306e\u5b9f\u884c\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/getting-started/launch-created-app.mdx",sourceDirName:"react-native/learn/getting-started",slug:"/react-native/learn/getting-started/launch-created-app",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/launch-created-app",version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c"},sidebar:"learn",previous:{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/create-project"},next:{title:"\u958b\u767a\u74b0\u5883\u306e\u88dc\u8db3",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/supplement"}},u=[],d={toc:u};function m(e){var t=e.components,p=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/getting-started/create-project"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"),"\u3067\u4f5c\u3063\u305f\u30a2\u30d7\u30ea\u306e\u5b9f\u884c\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"iOS\u30a2\u30d7\u30ea\u306fiPhone\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3001Android\u30a2\u30d7\u30ea\u306fAndroid\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u8d77\u52d5\u3059\u308b\u306e\u304c\u57fa\u672c\u3067\u3059\u3002\u307e\u305f\u3001\u4eca\u56de\u4f5c\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306fExpo\u3092\u5229\u7528\u3057\u3066\u3044\u308b\u306e\u3067\u3001Expo Go\u3068\u3044\u3046\u30a2\u30d7\u30ea\u3067\u3082\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"React Native\u30a2\u30d7\u30ea\u306e\u5b9f\u884c\u65b9\u6cd5\u3068\u4ed5\u7d44\u307f\u3092\u304b\u3093\u305f\u3093\u306b\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u5b9f\u884c\u65b9\u6cd5\u3067\u7d39\u4ecb\u3057\u3066\u3044\u308b\u30b3\u30de\u30f3\u30c9\u306f\u3001\u5168\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30eb\u30fc\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"\u306e\u3042\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\uff09\u3067\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,"\u3046\u307e\u304f\u8d77\u52d5\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/common-pitfalls"},"\u30cf\u30de\u308a\u304c\u3061\u306a\u843d\u3068\u3057\u7a74"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)(i.Z,{defaultValue:"expo",values:[{label:"Expo Go",value:"expo"},{label:"iPhone\u30b7\u30df\u30e5\u30ec\u30fc\u30bf",value:"iphone"},{label:"Android\u30a8\u30df\u30e5\u30ec\u30fc\u30bf",value:"android"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"expo",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(607).Z})),(0,o.kt)("p",null,"Expo Go\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u3001\u30b9\u30c8\u30a2\u516c\u958b\u3055\u308c\u3066\u3044\u308bExpo Go\u30a2\u30d7\u30ea\u3092\u7aef\u672b\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u4f7f\u7528\u3059\u308b\u305f\u3081\u3001\u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9\u306f\u4e0d\u8981\u3067\u3059\u3002\nExpo Go\u306f\u3001Expo\u3067\u4f5c\u3089\u308c\u305f\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b\u3053\u3068\u306a\u304f\u7c21\u5358\u306b\u5b9f\u6a5f\u3067\u52d5\u304b\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u30a2\u30d7\u30ea\u3067\u3059\u3002Expo SDK\u306b\u542b\u307e\u308c\u306a\u3044\u30cd\u30a4\u30c6\u30a3\u30d6\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u5229\u7528\u3057\u3066\u3044\u306a\u3051\u308c\u3070\u3001",(0,o.kt)("a",{parentName:"p",href:"https://docs.expo.io/introduction/managed-vs-bare/#bare-workflow"},"Bare Workflow"),"\u306e\u30a2\u30d7\u30ea\u3067\u3082\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/jp/app/expo-go/id982107779"},"App Store"),", ",(0,o.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=host.exp.exponent"},"Google Play"),"\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,"Expo Go\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u3089\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067Expo\u306e\u958b\u767a\u30b5\u30fc\u30d0\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo start\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"expo-cli"),"\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001\u6b21\u306e\u3088\u3046\u306a\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u3066",(0,o.kt)("inlineCode",{parentName:"p"},"expo-cli"),"\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u6c42\u3081\u3089\u308c\u307e\u3059\u3002Expo Go\u3067\u30a2\u30d7\u30ea\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u306f\u5fc5\u8981\u306a\u306e\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"This command requires Expo CLI.\nDo you want to install it globally [Y/n]?\n")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expo start")," \u3092\u5b9f\u884c\u3059\u308b\u3068Expo\u306e\u958b\u767a\u8005\u30c4\u30fc\u30eb\u3068Metro Bundler\u304c\u8d77\u52d5\u3057\u307e\u3059\u3002\n\u958b\u767a\u8005\u30c4\u30fc\u30eb\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308bQR\u30b3\u30fc\u30c9\u3092\u8aad\u307f\u53d6\u308b\u3053\u3068\u3067\u3001Expo Go\u306f\u540c\u4e00\u7121\u7dda\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u5185\u306eMetro Bundler\u306b\u63a5\u7d9a\u3059\u308b\u3088\u3046\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u305d\u3057\u3066Metro Bundler\u3092\u901a\u3057\u3066Java Script\u306e\u30bd\u30fc\u30b9\u3092\u8aad\u307f\u8fbc\u307f\u3001\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u30bf\u30fc\u30df\u30ca\u30eb\u4e0a\u3001\u3082\u3057\u304f\u306f\u8d77\u52d5\u3057\u305f\u30d6\u30e9\u30a6\u30b6\u306e\u5de6\u4e0b\u306b\u8868\u793a\u3055\u308c\u305fQR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3057\u307e\u3059\u3002Android\u3067\u306fExpo Go\u304b\u3089\u3001iOS\u3067\u306fOS\u306e\u30ab\u30e1\u30e9\u30a2\u30d7\u30ea\u304b\u3089QR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,"Android\u3067\u306f\u3001QR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3059\u308b\u3068\u30a2\u30d7\u30ea\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("p",null,"iOS\u3067\u306f\u3001QR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3059\u308b\u3068Expo Go\u3067\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u30d0\u30ca\u30fc\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u30d0\u30ca\u30fc\u3092\u30bf\u30c3\u30d7\u3057\u3066Expo Go\u3067\u30a2\u30d7\u30ea\u3092\u8868\u793a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"npx expo start"),"\u3067\u306f\u3001Expo\u306e\u958b\u767a\u8005\u30c4\u30fc\u30eb\u3068Metro Bundler\u304c\u8d77\u52d5\u3057\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u958b\u767a\u8005\u30c4\u30fc\u30eb\u306f",(0,o.kt)("inlineCode",{parentName:"p"},"19002"),"\u30dd\u30fc\u30c8\u3001Metro Bundler\u306f",(0,o.kt)("inlineCode",{parentName:"p"},"19000"),"\u30dd\u30fc\u30c8\u3067\u305d\u308c\u305e\u308c\u8d77\u52d5\u3057\u307e\u3059\u3002"),(0,o.kt)("p",{parentName:"div"},"\u30d6\u30e9\u30a6\u30b6\u304c\u3046\u307e\u304f\u8d77\u52d5\u305b\u305a\u958b\u767a\u8005\u30c4\u30fc\u30eb\u306e\u753b\u9762\u304c\u81ea\u52d5\u7684\u306b\u958b\u304b\u308c\u306a\u304b\u3063\u305f\u3068\u3057\u3066\u3082\u3001",(0,o.kt)("a",{parentName:"p",href:"http://localhost:19002"},"http://localhost:19002"),"\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308c\u3070\u8868\u793a\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",{parentName:"div"},"\u306a\u304a\u3001\u4ed6\u306e\u30d7\u30ed\u30bb\u30b9\u306a\u3069\u306b\u3088\u3063\u3066\u3053\u308c\u3089\u306e\u30dd\u30fc\u30c8\u304c\u3059\u3067\u306b\u5229\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u81ea\u52d5\u7684\u306b\u7570\u306a\u308b\u30dd\u30fc\u30c8\u304c\u9078\u629e\u3055\u308c\u3066\u8d77\u52d5\u3057\u307e\u3059\u3002\u305d\u306e\u5834\u5408\u3067\u3082\u3001\u6b21\u306e\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u30ed\u30b0\u304b\u3089URL\u3092\u78ba\u8a8d\u3057\u3066\u958b\u767a\u8005\u30c4\u30fc\u30eb\u3092\u8868\u793a\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"Expo DevTools is running at http://localhost:19003\n"))))),(0,o.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(1).Z})),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm run android")," \u3068\u5b9f\u884c\u3059\u308b\u3068Metro Bundler\u304c\u8d77\u52d5\u3057\u305f\u5f8c\u3001\u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9\u304c\u59cb\u307e\u308a\u307e\u3059\u3002\nAndroid\u30a2\u30d7\u30ea\u304c\u30d3\u30eb\u30c9\u3055\u308c\u3001\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u305d\u306e\u5f8c\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30a2\u30d7\u30ea\u304cMetro Bundler\u3092\u901a\u3057\u3066Java Script\u306e\u30bd\u30fc\u30b9\u3092\u8aad\u307f\u8fbc\u307f\u3001\u5b9f\u884c\u3057\u307e\u3059\u3002")),(0,o.kt)(l.Z,{value:"iphone",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(7417).Z})),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm run ios")," \u3068\u5b9f\u884c\u3059\u308b\u3068Metro Bundler\u304c\u8d77\u52d5\u3057\u305f\u5f8c\u3001\u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9\u304c\u59cb\u307e\u308a\u307e\u3059\u3002\niOS\u30a2\u30d7\u30ea\u304c\u30d3\u30eb\u30c9\u3055\u308c\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u305d\u306e\u5f8c\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30a2\u30d7\u30ea\u304cMetro Bundler\u3092\u901a\u3057\u3066Java Script\u306e\u30bd\u30fc\u30b9\u3092\u8aad\u307f\u8fbc\u307f\u3001\u5b9f\u884c\u3057\u307e\u3059\u3002"))))}m.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},607:function(e,t,n){t.Z=n.p+"assets/images/expo-build-28965c27a1de05a986ffaa6c6157fc04.png"},1:function(e,t,n){t.Z=n.p+"assets/images/react-native-android-build-c9f25bdea97ce41c93a579624c95a67d.png"},7417:function(e,t,n){t.Z=n.p+"assets/images/react-native-ios-build-fd14892b50df87a486e18318a3283bd2.png"}}]);