"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8382],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),i="tabItem_1uMI",p="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,a=e.block,c=e.defaultValue,u=e.values,s=e.groupId,d=e.className,m=r.Children.toArray(e.children),f=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,k=o(),g=k.tabGroupChoices,b=k.setTabGroupChoices,h=(0,r.useState)(v),y=h[0],N=h[1],P=[];if(null!=s){var I=g[s];null!=I&&I!==y&&f.some((function(e){return e.value===I}))&&N(I)}var E=function(e){var t=e.currentTarget,n=P.indexOf(t),r=f[n].value;N(r),null!=s&&(b(s,r),setTimeout((function(){var e,n,r,a,o,l,i,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,i=l.innerHeight,c=l.innerWidth,n>=0&&o<=c&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=P.indexOf(e.target)+1;n=P[r]||P[0];break;case"ArrowLeft":var a=P.indexOf(e.target)-1;n=P[a]||P[P.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:A,onFocus:E,onClick:E},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},7922:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(5064),i=n(8215),p={title:"REST API\u306e\u6e96\u5099"},c=void 0,u={unversionedId:"react-native/learn/todo-app/networking/setting-up-local-server",id:"react-native/learn/todo-app/networking/setting-up-local-server",isDocsHomePage:!1,title:"REST API\u306e\u6e96\u5099",description:"\u3053\u3053\u307e\u3067\u3067\u3001ToDo\u30a2\u30d7\u30ea\u306e\u753b\u9762\u306f\u4e00\u901a\u308a\u5b9f\u88c5\u3067\u304d\u307e\u3057\u305f\u3002\u3053\u3053\u304b\u3089\u306f\u3001\u753b\u9762\u306b\u8868\u793a\u3059\u308b\u30c7\u30fc\u30bf\u3092REST API\u304b\u3089\u53d6\u5f97\u3059\u308b\u3088\u3046\u306b\u4fee\u6b63\u3057\u3066\u3044\u304d\u307e\u3059\u3002",source:"@site/docs/react-native/learn/todo-app/networking/setting-up-local-server.mdx",sourceDirName:"react-native/learn/todo-app/networking",slug:"/react-native/learn/todo-app/networking/setting-up-local-server",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/setting-up-local-server",tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"REST API\u306e\u6e96\u5099"},sidebar:"learn",previous:{title:"\u30ed\u30b4",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/logo"},next:{title:"API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u4f5c\u6210",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/generate-api-client"}},s=[{value:"\u958b\u767a\u6642\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u69cb\u6210",id:"\u958b\u767a\u6642\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u69cb\u6210",children:[]},{value:"API\u30b5\u30fc\u30d0\u306e\u8d77\u52d5",id:"api\u30b5\u30fc\u30d0\u306e\u8d77\u52d5",children:[]},{value:"API\u30b5\u30fc\u30d0\u3078\u306e\u63a5\u7d9a\u78ba\u8a8d",id:"api\u30b5\u30fc\u30d0\u3078\u306e\u63a5\u7d9a\u78ba\u8a8d",children:[{value:"\u30a2\u30af\u30bb\u30b9\u5148URL",id:"\u30a2\u30af\u30bb\u30b9\u5148url",children:[]},{value:"\u30ec\u30b9\u30dd\u30f3\u30b9",id:"\u30ec\u30b9\u30dd\u30f3\u30b9",children:[]}]}],d={toc:s};function m(e){var t=e.components,p=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u3053\u3053\u307e\u3067\u3067\u3001ToDo\u30a2\u30d7\u30ea\u306e\u753b\u9762\u306f\u4e00\u901a\u308a\u5b9f\u88c5\u3067\u304d\u307e\u3057\u305f\u3002\u3053\u3053\u304b\u3089\u306f\u3001\u753b\u9762\u306b\u8868\u793a\u3059\u308b\u30c7\u30fc\u30bf\u3092REST API\u304b\u3089\u53d6\u5f97\u3059\u308b\u3088\u3046\u306b\u4fee\u6b63\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u958b\u767a\u6642\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u69cb\u6210"},"\u958b\u767a\u6642\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u69cb\u6210"),(0,o.kt)("p",null,"ToDo\u30a2\u30d7\u30ea\u3092API\u30b5\u30fc\u30d0\u3068\u63a5\u7d9a\u3059\u308b\u5834\u5408\u3001\u4e0b\u306e\u56f3\u306b\u3042\u308b\u3088\u3046\u306a\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u69cb\u6210\u3067\u958b\u767a\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\u3044\u307e\u307e\u3067\u306e\u69cb\u6210\u3068\u3053\u308c\u304b\u3089\u6e96\u5099\u3059\u308b\u69cb\u6210\u306e\u9055\u3044\u304c\u308f\u304b\u308b\u3088\u3046\u8272\u5206\u3051\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30b0\u30ec\u30fc\u90e8\u5206\u306f\u753b\u9762\u306e\u5b9f\u88c5\u306e\u3068\u304d\u306b\u7528\u610f\u3057\u3001\u78ba\u8a8d\u3057\u3066\u3044\u305f\u90e8\u5206\u3067\u3059\u3002Metro Bundler\u306eURL\u306f\u3001React Native\u3084Expo\u304c\u81ea\u52d5\u7684\u306b\u8a2d\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u9752\u8272\u90e8\u5206\u306f\u3053\u308c\u304b\u3089\u6e96\u5099\u3059\u308b\u90e8\u5206\u3092\u8868\u3057\u3066\u3044\u307e\u3059\u3002REST API\u306eURL\u306f\u3001React Native\u3084Expo\u3067\u306f\u8a2d\u5b9a\u3055\u308c\u306a\u3044\u306e\u3067\u3001ToDo\u30a2\u30d7\u30ea\u3067\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(9698).Z})),(0,o.kt)("p",null,"\u3053\u308c\u307e\u3067\u306e\u69cb\u6210\u3068\u306e\u5927\u304d\u306a\u9055\u3044\u306fREST API\u3068\u306e\u901a\u4fe1\u304c\u767a\u751f\u3059\u308b\u90e8\u5206\u3067\u3059\u3002\n\u3053\u3053\u304b\u3089\u306f\u3001ToDo\u30a2\u30d7\u30ea\u304b\u3089REST API\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3057\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u3068\u3057\u3066\u53d7\u3051\u53d6\u3063\u305f\u7d50\u679c\u3092\u753b\u9762\u306b\u8868\u793a\u3059\u308b\u65b9\u6cd5\u306a\u3069\u3092\u5b66\u7fd2\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"api\u30b5\u30fc\u30d0\u306e\u8d77\u52d5"},"API\u30b5\u30fc\u30d0\u306e\u8d77\u52d5"),(0,o.kt)("p",null,"ToDo\u30a2\u30d7\u30ea\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u7aef\u672b\u306bAPI\u30b5\u30fc\u30d0\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002API\u30b5\u30fc\u30d0\u306fDocker\u3092\u5229\u7528\u3057\u3066\u8d77\u52d5\u3059\u308b\u65b9\u6cd5\u3068\u3001Maven\u3092\u5229\u7528\u3057\u3066\u8d77\u52d5\u3059\u308b\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002\u3044\u305a\u308c\u304b\u304a\u597d\u307f\u306e\u65b9\u6cd5\u3067\u8d77\u52d5\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ws-4020/mobile-app-hands-on-backend#readme"},"\u30cf\u30f3\u30ba\u30aa\u30f3\u7528 \u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea"),"\u306b\u305d\u308c\u305e\u308c\u306e\u8d77\u52d5\u65b9\u6cd5\u304c\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u78ba\u8a8d\u3057\u3066\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,"API\u30b5\u30fc\u30d0\u3092\u8d77\u52d5\u3057\u305f\u7aef\u672b\u306e\u30d6\u30e9\u30a6\u30b6\u306a\u3069\u304b\u3089",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9080/api/todos"),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066",(0,o.kt)("inlineCode",{parentName:"p"},"[]"),"\u304c\u8868\u793a\u3055\u308c\u308c\u3070\u8d77\u52d5\u3067\u304d\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"api\u30b5\u30fc\u30d0\u3078\u306e\u63a5\u7d9a\u78ba\u8a8d"},"API\u30b5\u30fc\u30d0\u3078\u306e\u63a5\u7d9a\u78ba\u8a8d"),(0,o.kt)("p",null,"\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3059\u308b\u30c7\u30d0\u30a4\u30b9\u304b\u3089API\u30b5\u30fc\u30d0\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3088\u3046\u3068\u3057\u3066\u3082\u3001\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb\u306a\u3069\u306b\u5236\u9650\u3055\u308c\u3066\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u305d\u306e\u305f\u3081\u521d\u3081\u306b\u3001ToDo\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u5b9f\u884c\u3059\u308b\u30c7\u30d0\u30a4\u30b9\u3084\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306a\u3069\u304b\u3089\u3001API\u30b5\u30fc\u30d0\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3057\u3066\u304a\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u30a2\u30af\u30bb\u30b9\u78ba\u8a8d\u306b\u306f\u3001API\u30b5\u30fc\u30d0\u3092\u8d77\u52d5\u3057\u3066\u3044\u308b\u7aef\u672b\u306eIP\u30a2\u30c9\u30ec\u30b9\u304c\u5fc5\u8981\u3068\u306a\u308a\u307e\u3059\u3002\u305d\u308c\u305e\u308c\u306e\u74b0\u5883\u3067\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066IP\u30a2\u30c9\u30ec\u30b9\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)(l.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"macOS",value:"mac"},{label:"Windows",value:"win"},{label:"Android\u30a8\u30df\u30e5\u30ec\u30fc\u30bf",value:"emulator"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ipconfig getifaddr en0\n"))),(0,o.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ipconfig\n"))),(0,o.kt)(i.Z,{value:"emulator",mdxType:"TabItem"},(0,o.kt)("p",null,"Android\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u304b\u3089\u540c\u3058\u7aef\u672b\u306eAPI\u30b5\u30fc\u30d0\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5834\u5408\u3001",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/emulator-networking.html#networkaddresses"},"Android Emulator\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"),"\u3092\u5229\u7528\u51fa\u6765\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"10.0.2.2")," \u3068\u3044\u3046IP\u3092\u5229\u7528\u3059\u308b\u3068\u7aef\u672b\u306eIP\u30a2\u30c9\u30ec\u30b9\u306b\u95a2\u308f\u3089\u305a\u30a2\u30af\u30bb\u30b9\u51fa\u6765\u307e\u3059\u3002"),(0,o.kt)("p",null,"Android\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u3060\u3051\u3067\u52d5\u4f5c\u78ba\u8a8d\u3059\u308b\u5834\u5408\u306f",(0,o.kt)("inlineCode",{parentName:"p"},"10.0.2.2"),"\u3092\u5229\u7528\u3057\u3066\u52d5\u4f5c\u78ba\u8a8d\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"http://10.0.2.2:9080/api/todos\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"#%E9%96%8B%E7%99%BA%E6%99%82%E3%81%AE%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF%E6%A7%8B%E6%88%90"},"\u958b\u767a\u6642\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u69cb\u6210"),"\u3067\u8aac\u660e\u3057\u3066\u3044\u308b\u3088\u3046\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u8a2d\u5b9a\u3059\u308b\u5024\u306a\u306e\u3067\u3001\nAndroid\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u4ee5\u5916\u306e\u65b9\u6cd5\u3067\u3082\u78ba\u8a8d\u3059\u308b\u5834\u5408\u306fIP\u3092\u78ba\u8a8d\u3057\u3066\u8a2d\u5b9a\u3057\u305f\u307b\u3046\u304c\u52b9\u7387\u7684\u3067\u3059\u3002"))))),(0,o.kt)("p",null,"\u30a2\u30af\u30bb\u30b9\u5148\u7aef\u672b\u306eIP\u30a2\u30c9\u30ec\u30b9\u304c\u78ba\u8a8d\u51fa\u6765\u305f\u3089\u3001ToDo\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3059\u308b\u30c7\u30d0\u30a4\u30b9\u3084\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u5185\u306e\u30d6\u30e9\u30a6\u30b6\u304b\u3089\u3001\u5b9f\u969b\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002\n\u30a2\u30af\u30bb\u30b9\u5148\u306eURL\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u671f\u5f85\u3059\u308b\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u3063\u3066\u304f\u308c\u3070\u63a5\u7d9a\u78ba\u8a8d\u304c\u51fa\u6765\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"\u30a2\u30af\u30bb\u30b9\u5148url"},"\u30a2\u30af\u30bb\u30b9\u5148URL"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"${IP}"),"\u90e8\u5206\u3092\u78ba\u8a8d\u3057\u305fIP\u30a2\u30c9\u30ec\u30b9\u3078\u5909\u66f4\u3057\u3066",(0,o.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/todo-app/app-spec#rest-api"},"REST API"),"\u306eToDo\u306e\u4e00\u89a7\u53d6\u5f97API\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"http://${IP}:9080/api/todos\n")),(0,o.kt)("h3",{id:"\u30ec\u30b9\u30dd\u30f3\u30b9"},"\u30ec\u30b9\u30dd\u30f3\u30b9"),(0,o.kt)("p",null,"\u30d6\u30e9\u30a6\u30b6\u306b\u30ec\u30b9\u30dd\u30f3\u30b9\u306eToDo\u4e00\u89a7\u306eJSON\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\nAPI\u30b5\u30fc\u30d0\u3092\u8d77\u52d5\u3057\u305f\u3060\u3051\u3067\u3042\u308c\u3070\u3001ToDo\u306e\u4e00\u89a7\u306f\u7a7a\u914d\u5217\u306eJSON\u304c\u671f\u5f85\u3059\u308b\u30ec\u30b9\u30dd\u30f3\u30b9\u3068\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="\u671f\u5f85\u3059\u308b\u30ec\u30b9\u30dd\u30f3\u30b9"',title:'"\u671f\u5f85\u3059\u308b\u30ec\u30b9\u30dd\u30f3\u30b9"'},"[]\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ERR_CONNECTION_REFUSED")," \u306e\u3088\u3046\u306a\u30d6\u30e9\u30a6\u30b6\u306e\u30a8\u30e9\u30fc\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u308b\u5834\u5408\u3001API\u30b5\u30fc\u30d0\u304c\u8d77\u52d5\u3057\u3066\u3044\u308b\u304b\u3001\u30a2\u30af\u30bb\u30b9\u5148URL\u304c\u6b63\u3057\u3044\u304b\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,"\u3053\u306e\u3068\u304d\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306e\u306b\u5229\u7528\u3057\u305fIP\u30a2\u30c9\u30ec\u30b9\u306f\u3001\u5f8c\u3067\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306b\u8a2d\u5b9a\u3059\u308b\u306e\u3067\u5fd8\u308c\u306a\u3044\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,"\u3053\u308c\u3067API\u30b5\u30fc\u30d0\u306e\u7528\u610f\u306f\u5b8c\u4e86\u3067\u3059\u3002\u6b21\u306f\u3001ToDo\u30a2\u30d7\u30ea\u3067\u5229\u7528\u3059\u308bREST API\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"))}m.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},9698:function(e,t,n){t.Z=n.p+"assets/images/add-api-to-env-36ab159c1d71ea25589adf2c63d7879c.png"}}]);