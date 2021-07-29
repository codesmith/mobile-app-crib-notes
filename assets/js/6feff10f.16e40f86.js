"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2472],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(9443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_1uMI",p="tabItemActive_2DSg";var s=37,c=39;var u=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,u=e.values,m=e.groupId,d=e.className,v=i(),f=v.tabGroupChoices,g=v.setTabGroupChoices,k=(0,a.useState)(r),h=k[0],y=k[1],b=a.Children.toArray(e.children),N=[];if(null!=m){var x=f[m];null!=x&&x!==h&&u.some((function(e){return e.value===x}))&&y(x)}var w=function(e){var t=e.currentTarget,n=N.indexOf(t),a=u[n].value;y(a),null!=m&&(g(m,a),setTimeout((function(){var e,n,a,r,i,o,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,s=o.innerWidth,n>=0&&i<=s&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case c:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case s:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:w,onClick:w},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},6001:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=n(5064),l=n(8215),p={title:"\u958b\u767a\u74b0\u5883\u306e\u88dc\u8db3"},s=void 0,c={unversionedId:"react-native/learn/getting-started/supplement",id:"react-native/learn/getting-started/supplement",isDocsHomePage:!1,title:"\u958b\u767a\u74b0\u5883\u306e\u88dc\u8db3",description:"\u958b\u767a\u6642\u306b\u4f7f\u7528\u3059\u308b\u30a8\u30c7\u30a3\u30bf\u3084proxy\u74b0\u5883\u4e0b\u3067\u958b\u767a\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/getting-started/supplement.md",sourceDirName:"react-native/learn/getting-started",slug:"/react-native/learn/getting-started/supplement",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/supplement",version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"\u958b\u767a\u74b0\u5883\u306e\u88dc\u8db3"},sidebar:"learn",previous:{title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/launch-created-app"},next:{title:"Overview",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts"}},u=[{value:"Visual Studio Code",id:"visual-studio-code",children:[]},{value:"proxy\u8a2d\u5b9a",id:"proxy\u8a2d\u5b9a",children:[]}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u958b\u767a\u6642\u306b\u4f7f\u7528\u3059\u308b\u30a8\u30c7\u30a3\u30bf\u3084proxy\u74b0\u5883\u4e0b\u3067\u958b\u767a\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"visual-studio-code"},"Visual Studio Code"),(0,i.kt)("p",null,"  \u958b\u767a\u6642\u306b\u4f7f\u7528\u3059\u308b\u30a8\u30c7\u30a3\u30bf\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002\u30a8\u30c7\u30a3\u30bf\u306f\u4f7f\u3044\u6163\u308c\u305f\u3082\u306e\u306a\u3089\u4f55\u3067\u3082\u3044\u3044\u3067\u3059\u3002\u7279\u306b\u3053\u3060\u308f\u308a\u304c\u306a\u3051\u308c\u3070",(0,i.kt)("inlineCode",{parentName:"p"},"Visual Studio Code"),"\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/ja-jp/products/visual-studio-code/"},"\u516c\u5f0f\u30b5\u30a4\u30c8"),"\u306e\u6848\u5185\u306b\u6cbf\u3063\u3066\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30a8\u30c7\u30a3\u30bf\u74b0\u5883\u304c\u6e96\u5099\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u3053\u306e\u624b\u9806\u3092\u30b9\u30ad\u30c3\u30d7\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h2",{id:"proxy\u8a2d\u5b9a"},"proxy\u8a2d\u5b9a"),(0,i.kt)("p",null,"proxy\u74b0\u5883\u4e0b\u3067\u958b\u767a\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b\u5834\u5408\u3001\u8ffd\u52a0\u306e\u8a2d\u5b9a\u304c\u5fc5\u8981\u3067\u3059\u3002\u6b21\u306e\u624b\u9806\u306b\u3057\u305f\u304c\u3044\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u74b0\u5883\u5909\u6570"),(0,i.kt)("p",{parentName:"li"},"\u74b0\u5883\u69cb\u7bc9\u304a\u3088\u3073\u3001\u5b9f\u884c\u6642\u7b49\u306b\u4f7f\u7528\u3059\u308b\u4e00\u90e8\u30c4\u30fc\u30eb\uff08npm\u3084CocoaPods\u7b49\uff09\u306eproxy\u8a2d\u5b9a\u3067\u3059\u3002\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3067\u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)(o.Z,{groupId:"operating-systems",defaultValue:"mac",values:[{label:"macOS",value:"mac"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"~/.bash_profile"),"\u3078\u3001\u4ee5\u4e0b\u306e\u5185\u5bb9\u3092\u8ffd\u8a18\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"export http_proxy=http://\u30d7\u30ed\u30ad\u30b7\u30a2\u30c9\u30ec\u30b9:\u30dd\u30fc\u30c8\u756a\u53f7\nexport https_proxy=http://\u30d7\u30ed\u30ad\u30b7\u30a2\u30c9\u30ec\u30b9:\u30dd\u30fc\u30c8\u756a\u53f7\n")),(0,i.kt)("p",{parentName:"li"},"\u4e0a\u8a18\u8ffd\u8a18\u5f8c\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"source ~/.bash_profile"),"\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,i.kt)(l.Z,{value:"win",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"setx http_proxy http://\u30d7\u30ed\u30ad\u30b7\u30a2\u30c9\u30ec\u30b9:\u30dd\u30fc\u30c8\u756a\u53f7\nsetx https_proxy http://\u30d7\u30ed\u30ad\u30b7\u30a2\u30c9\u30ec\u30b9:\u30dd\u30fc\u30c8\u756a\u53f7\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Gradle"),(0,i.kt)("p",{parentName:"li"},"Android\u958b\u767a\u3067\u306f\u30d3\u30eb\u30c9\u30c4\u30fc\u30eb\u306bGradle\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002Gradle\u306eproxy\u8a2d\u5b9a\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"gradle.properties"),"\u3067\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8a2d\u5b9a\u5185\u5bb9"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"systemProp.http.proxyHost=\u30d7\u30ed\u30ad\u30b7\u30a2\u30c9\u30ec\u30b9\nsystemProp.http.proxyPort=8080\nsystemProp.https.proxyHost=\u30d7\u30ed\u30ad\u30b7\u30a2\u30c9\u30ec\u30b9\nsystemProp.https.proxyPort=8080\n")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u30d7\u30ed\u30ad\u30b7\u30a2\u30c9\u30ec\u30b9\u306b\u3064\u3044\u3066\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30d7\u30ed\u30c8\u30b3\u30eb\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"http://"),"\uff09\u306f\u4e0d\u8981\u3067\u3059\u3002")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8a2d\u5b9a\u5148"),(0,i.kt)(o.Z,{groupId:"operating-systems",defaultValue:"mac",values:[{label:"macOS",value:"mac"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.gradle/gradle.properties"),"\u914d\u4e0b\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"gradle.properties"),"\u304c\u5b58\u5728\u3059\u308b\u304b\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,i.kt)(l.Z,{value:"win",mdxType:"TabItem"},(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Users\\%USERNAME%\\.gradle\\"),"\u914d\u4e0b\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"gradle.properties"),"\u304c\u5b58\u5728\u3059\u308b\u304b\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"gradle.properties"),"\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u3001\u65b0\u898f\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))))))))}d.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);