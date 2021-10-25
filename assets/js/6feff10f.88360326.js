"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2472],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,v=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(v,l(l({ref:t},s),{},{components:n})):a.createElement(v,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),o=n(2389),l=n(9443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=n(9558),u=n(6010),s="tabItem_1uMI";function c(e){var t,n,a,o=e.lazy,l=e.block,c=e.defaultValue,m=e.values,d=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,p.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),y=k.tabGroupChoices,N=k.setTabGroupChoices,x=(0,r.useState)(g),w=x[0],O=x[1],T=[],C=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=y[d];null!=E&&E!==w&&h.some((function(e){return e.value===E}))&&O(E)}var P=function(e){var t=e.currentTarget,n=T.indexOf(t),a=h[n].value;a!==w&&(C(t),O(a),null!=d&&N(d,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},v)},h.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,u.Z)("tabs__item",s,{"tabs__item--active":w===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:P,onClick:P},null!=n?n:t)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},2713:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return v}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=n(5064),i=n(8215),p=["components"],u={title:"\u958b\u767a\u74b0\u5883\u306e\u88dc\u8db3"},s=void 0,c={unversionedId:"react-native/learn/getting-started/supplement",id:"react-native/learn/getting-started/supplement",isDocsHomePage:!1,title:"\u958b\u767a\u74b0\u5883\u306e\u88dc\u8db3",description:"\u958b\u767a\u6642\u306b\u4f7f\u7528\u3059\u308b\u30a8\u30c7\u30a3\u30bf\u3084proxy\u74b0\u5883\u4e0b\u3067\u958b\u767a\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/getting-started/supplement.md",sourceDirName:"react-native/learn/getting-started",slug:"/react-native/learn/getting-started/supplement",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/supplement",tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"\u958b\u767a\u74b0\u5883\u306e\u88dc\u8db3"},sidebar:"learn",previous:{title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/launch-created-app"},next:{title:"\u76ee\u6b21",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts"}},m=[{value:"Visual Studio Code",id:"visual-studio-code",children:[],level:2},{value:"proxy\u8a2d\u5b9a",id:"proxy\u8a2d\u5b9a",children:[],level:2}],d={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u958b\u767a\u6642\u306b\u4f7f\u7528\u3059\u308b\u30a8\u30c7\u30a3\u30bf\u3084proxy\u74b0\u5883\u4e0b\u3067\u958b\u767a\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"visual-studio-code"},"Visual Studio Code"),(0,o.kt)("p",null,"  \u958b\u767a\u6642\u306b\u4f7f\u7528\u3059\u308b\u30a8\u30c7\u30a3\u30bf\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002\u30a8\u30c7\u30a3\u30bf\u306f\u4f7f\u3044\u6163\u308c\u305f\u3082\u306e\u306a\u3089\u4f55\u3067\u3082\u3044\u3044\u3067\u3059\u3002\u7279\u306b\u3053\u3060\u308f\u308a\u304c\u306a\u3051\u308c\u3070",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Studio Code"),"\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/ja-jp/products/visual-studio-code/"},"\u516c\u5f0f\u30b5\u30a4\u30c8"),"\u306e\u6848\u5185\u306b\u6cbf\u3063\u3066\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30a8\u30c7\u30a3\u30bf\u74b0\u5883\u304c\u6e96\u5099\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u3053\u306e\u624b\u9806\u3092\u30b9\u30ad\u30c3\u30d7\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("h2",{id:"proxy\u8a2d\u5b9a"},"proxy\u8a2d\u5b9a"),(0,o.kt)("p",null,"proxy\u74b0\u5883\u4e0b\u3067\u958b\u767a\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b\u5834\u5408\u3001\u8ffd\u52a0\u306e\u8a2d\u5b9a\u304c\u5fc5\u8981\u3067\u3059\u3002\u6b21\u306e\u624b\u9806\u306b\u3057\u305f\u304c\u3044\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u74b0\u5883\u5909\u6570"),(0,o.kt)("p",{parentName:"li"},"\u74b0\u5883\u69cb\u7bc9\u304a\u3088\u3073\u3001\u5b9f\u884c\u6642\u7b49\u306b\u4f7f\u7528\u3059\u308b\u4e00\u90e8\u30c4\u30fc\u30eb\uff08npm\u3084CocoaPods\u7b49\uff09\u306eproxy\u8a2d\u5b9a\u3067\u3059\u3002\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3067\u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)(l.Z,{groupId:"operating-systems",defaultValue:"mac",values:[{label:"macOS",value:"mac"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"~/.bash_profile"),"\u3078\u3001\u4ee5\u4e0b\u306e\u5185\u5bb9\u3092\u8ffd\u8a18\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"export http_proxy=http://\u30d7\u30ed\u30ad\u30b7\u30a2\u30c9\u30ec\u30b9:\u30dd\u30fc\u30c8\u756a\u53f7\nexport https_proxy=http://\u30d7\u30ed\u30ad\u30b7\u30a2\u30c9\u30ec\u30b9:\u30dd\u30fc\u30c8\u756a\u53f7\n")),(0,o.kt)("p",{parentName:"li"},"\u4e0a\u8a18\u8ffd\u8a18\u5f8c\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"source ~/.bash_profile"),"\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,o.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"setx http_proxy http://\u30d7\u30ed\u30ad\u30b7\u30a2\u30c9\u30ec\u30b9:\u30dd\u30fc\u30c8\u756a\u53f7\nsetx https_proxy http://\u30d7\u30ed\u30ad\u30b7\u30a2\u30c9\u30ec\u30b9:\u30dd\u30fc\u30c8\u756a\u53f7\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Gradle"),(0,o.kt)("p",{parentName:"li"},"Android\u958b\u767a\u3067\u306f\u30d3\u30eb\u30c9\u30c4\u30fc\u30eb\u306bGradle\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002Gradle\u306eproxy\u8a2d\u5b9a\u306f",(0,o.kt)("inlineCode",{parentName:"p"},"gradle.properties"),"\u3067\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8a2d\u5b9a\u5185\u5bb9"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"systemProp.http.proxyHost=\u30d7\u30ed\u30ad\u30b7\u30a2\u30c9\u30ec\u30b9\nsystemProp.http.proxyPort=8080\nsystemProp.https.proxyHost=\u30d7\u30ed\u30ad\u30b7\u30a2\u30c9\u30ec\u30b9\nsystemProp.https.proxyPort=8080\n")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u30d7\u30ed\u30ad\u30b7\u30a2\u30c9\u30ec\u30b9\u306b\u3064\u3044\u3066\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30d7\u30ed\u30c8\u30b3\u30eb\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"http://"),"\uff09\u306f\u4e0d\u8981\u3067\u3059\u3002")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8a2d\u5b9a\u5148"),(0,o.kt)(l.Z,{groupId:"operating-systems",defaultValue:"mac",values:[{label:"macOS",value:"mac"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.gradle/gradle.properties"),"\u914d\u4e0b\u306b",(0,o.kt)("inlineCode",{parentName:"p"},"gradle.properties"),"\u304c\u5b58\u5728\u3059\u308b\u304b\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,o.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Users\\%USERNAME%\\.gradle\\"),"\u914d\u4e0b\u306b",(0,o.kt)("inlineCode",{parentName:"p"},"gradle.properties"),"\u304c\u5b58\u5728\u3059\u308b\u304b\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"gradle.properties"),"\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u3001\u65b0\u898f\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))))))))}v.isMDXComponent=!0}}]);