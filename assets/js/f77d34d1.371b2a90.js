"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8422],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,b=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(b,c(c({ref:t},u),{},{components:n})):r.createElement(b,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,f=e.groupId,m=e.className,b=o(),v=b.tabGroupChoices,d=b.setTabGroupChoices,y=(0,r.useState)(a),g=y[0],h=y[1],O=r.Children.toArray(e.children),k=[];if(null!=f){var x=v[f];null!=x&&x!==g&&p.some((function(e){return e.value===x}))&&h(x)}var w=function(e){var t=e.currentTarget,n=k.indexOf(t),r=p[n].value;h(r),null!=f&&(d(f,r),setTimeout((function(){var e,n,r,a,o,c,i,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,c=window,i=c.innerHeight,l=c.innerWidth,n>=0&&o<=l&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case u:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case l:var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,c.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:T,onFocus:w,onClick:w},n)}))),t?(0,r.cloneElement)(O.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},7889:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),c=n(5064),i=n(8215),s={title:"Button"},l=void 0,u={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/button",id:"react-native/learn/basic-concepts/react-native-basics/components/button",isDocsHomePage:!1,title:"Button",description:"\u5404\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u6a19\u6e96\u30b9\u30bf\u30a4\u30eb\u3092\u4f7f\u7528\u3057\u305f\u30dc\u30bf\u30f3\u3092\u8868\u793a\u3059\u308b\u5834\u5408\u3001\u3053\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/button.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/components",slug:"/react-native/learn/basic-concepts/react-native-basics/components/button",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/button",version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"Button"},sidebar:"learn",previous:{title:"Text",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/text"},next:{title:"TouchableOpacity",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity"}},p=[],f={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5404\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u6a19\u6e96\u30b9\u30bf\u30a4\u30eb\u3092\u4f7f\u7528\u3057\u305f\u30dc\u30bf\u30f3\u3092\u8868\u793a\u3059\u308b\u5834\u5408\u3001\u3053\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\n\u8272\u4ee5\u5916\u306e\u30b9\u30bf\u30a4\u30eb\u304c\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u51fa\u6765\u306a\u3044\u305f\u3081\u3001\u30c7\u30b6\u30a4\u30f3\u304c\u30a2\u30d7\u30ea\u306b\u9069\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u4ee3\u308f\u308a\u306b",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/handling-touches#touchables"},"Touchables"),"\u3084",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/pressable"},"Pressable"),"\u3092\u4f7f\u7528\u3057\u3066\u72ec\u81ea\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,o.kt)(c.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"image",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Button",src:n(8845).Z}))),(0,o.kt)(i.Z,{value:"source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import React, {useState} from 'react';\nimport {Button, StyleSheet, View} from 'react-native';\n\nexport const App = () => {\n  const [count, setCount] = useState(0);\n\n  return (\n    <View style={styles.container}>\n      <Button\n        title={`count is ${count}`}\n        onPress={() => {\n          setCount(count + 1);\n        }}\n      />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});\n")))))}m.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},8845:function(e,t,n){t.Z=n.p+"assets/images/button-4c848f5fac0c7c1f3a31cc893a0888e4.png"}}]);