"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2780],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,v=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),a=n(7294),o=n(2389),i=n(9443);var c=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(3039),u=n(6010),s="tabItem_1uMI";function p(e){var t,n,r,o=e.lazy,i=e.block,p=e.defaultValue,m=e.values,f=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),d=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,l.lx)(d,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=b[0])?void 0:r.props.value;if(null!==g&&!d.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+d.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=c(),w=h.tabGroupChoices,O=h.setTabGroupChoices,k=(0,a.useState)(g),x=k[0],T=k[1],E=[],j=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var I=w[f];null!=I&&I!==x&&d.some((function(e){return e.value===I}))&&T(I)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),r=d[n].value;r!==x&&(j(t),T(r),null!=f&&O(f,r))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},v)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,u.Z)("tabs__item",s,{"tabs__item--active":x===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:Z,onFocus:P,onClick:P},null!=n?n:t)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},3171:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return v}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=n(5064),c=n(8215),l=["components"],u={title:"Image"},s=void 0,p={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/image",id:"react-native/learn/basic-concepts/react-native-basics/components/image",isDocsHomePage:!1,title:"Image",description:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u753b\u50cf\u3001\u9759\u7684\u30ea\u30bd\u30fc\u30b9\u3001\u4e00\u6642\u7684\u306a\u30ed\u30fc\u30ab\u30eb\u753b\u50cf\u3001\u30ab\u30e1\u30e9\u30ed\u30fc\u30eb\u306a\u3069\u306e\u30ed\u30fc\u30ab\u30eb\u30c7\u30a3\u30b9\u30af\u304b\u3089\u306e\u753b\u50cf\u306a\u3069\u3001\u3055\u307e\u3056\u307e\u306a\u7a2e\u985e\u306e\u753b\u50cf\u3092\u8868\u793a\u3067\u304d\u308bReact\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/image.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/components",slug:"/react-native/learn/basic-concepts/react-native-basics/components/image",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/image",tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"Image"},sidebar:"learn",previous:{title:"TouchableOpacity",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity"},next:{title:"ScrollView",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/scroll-view"}},m=[],f={toc:m};function v(e){var t=e.components,u=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u753b\u50cf\u3001\u9759\u7684\u30ea\u30bd\u30fc\u30b9\u3001\u4e00\u6642\u7684\u306a\u30ed\u30fc\u30ab\u30eb\u753b\u50cf\u3001\u30ab\u30e1\u30e9\u30ed\u30fc\u30eb\u306a\u3069\u306e\u30ed\u30fc\u30ab\u30eb\u30c7\u30a3\u30b9\u30af\u304b\u3089\u306e\u753b\u50cf\u306a\u3069\u3001\u3055\u307e\u3056\u307e\u306a\u7a2e\u985e\u306e\u753b\u50cf\u3092\u8868\u793a\u3067\u304d\u308bReact\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u9759\u7684\u30ea\u30bd\u30fc\u30b9\u304b\u3089\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u753b\u50cf\u306f\u30d3\u30eb\u30c9\u6642\u306b\u30b9\u30ad\u30e3\u30f3\u3055\u308c\u3001\u753b\u50cf\u30b5\u30a4\u30ba\u304c\u30a2\u30d7\u30ea\u30d0\u30f3\u30c9\u30eb\u306b\u30e1\u30bf\u30c7\u30fc\u30bf\u3068\u3057\u3066\u542b\u307e\u308c\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u753b\u50cf\u306e\u5927\u304d\u3055\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u753b\u50cf\u3084\u30c7\u30fc\u30bf\u753b\u50cf\u306f\u30d3\u30eb\u30c9\u6642\u306b\u306f\u753b\u50cf\u306e\u30b5\u30a4\u30ba\u304c\u308f\u304b\u3089\u306a\u3044\u305f\u3081\u3001\u5e45\u3068\u9ad8\u3055\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u30670\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u753b\u50cf\u3084\u30c7\u30fc\u30bf\u753b\u50cf\u3092\u8868\u793a\u3059\u308b\u5834\u5408\u3001\u753b\u50cf\u306e\u30b5\u30a4\u30ba\u3092\u624b\u52d5\u3067\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u4e0b\u306e\u4f8b\u3067\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304b\u3089\u306e\u753b\u50cf\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)(i.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"image",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(6625).Z}))),(0,o.kt)(c.Z,{value:"source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import React from 'react';\nimport {StyleSheet, Image, View} from 'react-native';\n\nexport const App = () => {\n  return (\n    <View style={styles.container}>\n      <Image style={styles.image} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  image: {\n    width: 150,\n    height: 150,\n  },\n});\n")))))}v.isMDXComponent=!0},6625:function(e,t,n){t.Z=n.p+"assets/images/image-c4ae98adb6d41c4681671baef4ddf717.png"}}]);