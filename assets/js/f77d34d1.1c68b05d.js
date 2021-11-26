"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8422],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,v=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(v,c(c({ref:t},s),{},{components:n})):r.createElement(v,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(87462),a=n(67294),o=n(72389),c=n(79443);var i=function(){var e=(0,a.useContext)(c.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(83039),u=n(86010),s="tabItem_1uMI";function p(e){var t,n,r,o=e.lazy,c=e.block,p=e.defaultValue,f=e.values,m=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),d=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,l.lx)(d,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=b[0])?void 0:r.props.value;if(null!==h&&!d.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+d.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),w=g.tabGroupChoices,x=g.setTabGroupChoices,O=(0,a.useState)(h),k=O[0],T=O[1],E=[],j=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=w[m];null!=P&&P!==k&&d.some((function(e){return e.value===P}))&&T(P)}var C=function(e){var t=e.currentTarget,n=E.indexOf(t),r=d[n].value;r!==k&&(j(t),T(r),null!=m&&x(m,r))},N=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},v)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,u.Z)("tabs__item",s,{"tabs__item--active":k===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:N,onFocus:C,onClick:C},null!=n?n:t)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}function f(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},40767:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return f},default:function(){return v}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=n(55064),i=n(58215),l=["components"],u={title:"Button"},s=void 0,p={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/button",id:"react-native/learn/basic-concepts/react-native-basics/components/button",isDocsHomePage:!1,title:"Button",description:"\u5404\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u6a19\u6e96\u30b9\u30bf\u30a4\u30eb\u3092\u4f7f\u7528\u3057\u305f\u30dc\u30bf\u30f3\u3092\u8868\u793a\u3059\u308b\u5834\u5408\u3001\u3053\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/button.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/components",slug:"/react-native/learn/basic-concepts/react-native-basics/components/button",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/button",tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"Button"},sidebar:"learn",previous:{title:"Text",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/text"},next:{title:"TouchableOpacity",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity"}},f=[],m={toc:f};function v(e){var t=e.components,u=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5404\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u6a19\u6e96\u30b9\u30bf\u30a4\u30eb\u3092\u4f7f\u7528\u3057\u305f\u30dc\u30bf\u30f3\u3092\u8868\u793a\u3059\u308b\u5834\u5408\u3001\u3053\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\n\u8272\u4ee5\u5916\u306e\u30b9\u30bf\u30a4\u30eb\u304c\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u51fa\u6765\u306a\u3044\u305f\u3081\u3001\u30c7\u30b6\u30a4\u30f3\u304c\u30a2\u30d7\u30ea\u306b\u9069\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u4ee3\u308f\u308a\u306b",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/handling-touches#touchables"},"Touchables"),"\u3084",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/pressable"},"Pressable"),"\u3092\u4f7f\u7528\u3057\u3066\u72ec\u81ea\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,o.kt)(c.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"image",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Button",src:n(28845).Z}))),(0,o.kt)(i.Z,{value:"source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import React, {useState} from 'react';\nimport {Button, StyleSheet, View} from 'react-native';\n\nexport const App = () => {\n  const [count, setCount] = useState(0);\n\n  return (\n    <View style={styles.container}>\n      <Button\n        title={`count is ${count}`}\n        onPress={() => {\n          setCount(count + 1);\n        }}\n      />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});\n")))))}v.isMDXComponent=!0},28845:function(e,t,n){t.Z=n.p+"assets/images/button-4c848f5fac0c7c1f3a31cc893a0888e4.png"}}]);