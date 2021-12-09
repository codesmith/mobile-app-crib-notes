"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[4208],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),v=a,d=m["".concat(c,".").concat(v)]||m[v]||p[v]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),o=n(72389),i=n(79443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(83039),s=n(86010),u="tabItem_1uMI";function p(e){var t,n,r,o=e.lazy,i=e.block,p=e.defaultValue,m=e.values,v=e.groupId,d=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,c.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),y=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,a.useState)(g),x=w[0],T=w[1],O=[],E=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var C=y[v];null!=C&&C!==x&&b.some((function(e){return e.value===C}))&&T(C)}var j=function(e){var t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==x&&(E(t),T(r),null!=v&&N(v,r))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},d)},b.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":x===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:S,onFocus:j,onClick:j},null!=n?n:t)}))),o?(0,a.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},839:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=(n(55064),n(58215),["components"]),l={title:"Welcome"},c=void 0,s={unversionedId:"react-native/learn/todo-app/screens/welcome",id:"react-native/learn/todo-app/screens/welcome",isDocsHomePage:!1,title:"Welcome",description:"ToDo\u30a2\u30d7\u30ea\u3078\u3088\u3046\u3053\u305d",source:"@site/docs/react-native/learn/todo-app/screens/welcome.mdx",sourceDirName:"react-native/learn/todo-app/screens",slug:"/react-native/learn/todo-app/screens/welcome",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/welcome",tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"Welcome"},sidebar:"learn",previous:{title:"ToDo\u30a2\u30d7\u30ea\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8aac\u660e",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/app-project-desc"},next:{title:"Stack\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/stack"}},u=[{value:"ToDo\u30a2\u30d7\u30ea\u3078\u3088\u3046\u3053\u305d",id:"todo\u30a2\u30d7\u30ea\u3078\u3088\u3046\u3053\u305d",children:[],level:2}],p={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"todo\u30a2\u30d7\u30ea\u3078\u3088\u3046\u3053\u305d"},"ToDo\u30a2\u30d7\u30ea\u3078\u3088\u3046\u3053\u305d"),(0,o.kt)("p",null,"\u3067\u306f\u3055\u3063\u305d\u304fToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u3092\u3059\u3059\u3081\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002\n",(0,o.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/todo-app/app-spec"},"ToDo\u30a2\u30d7\u30ea\u306e\u4ed5\u69d8"),"\u306b\u5f93\u3044\u3001\u30cf\u30f3\u30ba\u30aa\u30f3\u5f62\u5f0f\u3067ToDo\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3057\u3066\u3044\u304d\u307e\u3059\u3002\n\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f",(0,o.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/getting-started/create-project"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"),"\u3067\u4f5c\u6210\u3057\u305f\u3082\u306e\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ws-4020/rn-spoiler/blob/v2021.12.0/template/src/App.tsx"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210\u6642\u306eApp.tsx"),"\u306e\u5185\u5bb9\u306b\u4e0a\u66f8\u304d\u3057\u3066\u304b\u3089ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u3092\u306f\u3058\u3081\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/src/screens/home/Home.tsx"),"\u3092",(0,o.kt)("inlineCode",{parentName:"p"},"/src/screens/home/Welcome.tsx"),"\u306b\u30ea\u30cd\u30fc\u30e0\u3057\u3001\u6b21\u306e\u30b3\u30fc\u30c9\u306b\u7f6e\u304d\u63db\u3048\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/screens/home/Welcome.tsx"',jsx:!0,title:'"/src/screens/home/Welcome.tsx"'},"import {useNavigation} from '@react-navigation/native';\nimport React from 'react';\nimport {StyleSheet, View} from 'react-native';\nimport {Button, Text} from 'react-native-elements';\n\nexport const Welcome: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.container}>\n      <Text h1>Welcome</Text>\n      <View>\n        <Button onPress={() => navigation.navigate('Instructions')} title=\"\u767b\u9332\u3059\u308b\" />\n      </View>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/src/screens/home/index.ts"),"\u3092\u6b21\u306e\u901a\u308a\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6b21\u306e\u30de\u30fc\u30af\u3067\u8ffd\u52a0\u30fb\u524a\u9664\u7b87\u6240\u3092\u793a\u3057\u307e\u3059\u3002\n\u5909\u66f4\u306f\u8ffd\u52a0\u3068\u524a\u9664\u306e\u7d44\u307f\u5408\u308f\u305b\u3067\u793a\u3057\u307e\u3059\u3002"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+"),": \u8ffd\u52a0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-"),": \u524a\u9664")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="/src/screens/home/index.ts"',title:'"/src/screens/home/index.ts"'},"- export * from './Home';\n+ export * from './Welcome';\n")),(0,o.kt)("p",null,"\u6700\u5f8c\u306b",(0,o.kt)("inlineCode",{parentName:"p"},"/src/navigation/RootStackNav.tsx"),"\u3092\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="/src/navigation/RootStackNav.tsx"',title:'"/src/navigation/RootStackNav.tsx"'},"  import {createStackNavigator} from '@react-navigation/stack';\n  import React from 'react';\n- import {Home, Instructions} from 'screens';\n+ import {Welcome, Instructions} from 'screens';\n\n  const nav = createStackNavigator();\n  export const RootStackNav: React.FC = () => {\n    return (\n-     <nav.Navigator initialRouteName={Home.name}>\n-       <nav.Screen name=\"Home\" component={Home} options={{headerShown: false}} />\n+     <nav.Navigator initialRouteName={Welcome.name}>\n+       <nav.Screen name=\"Welcome\" component={Welcome} options={{headerShown: false}} />\n        <nav.Screen name=\"Instructions\" component={Instructions} />\n      </nav.Navigator>\n    );\n  };\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/basic-concepts"},"\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b"),"\u3067\u5f97\u305f\u77e5\u8b58\u304c\u3042\u308c\u3070\u3001\u4e0a\u8a18\u30b3\u30fc\u30c9\u306f\u7406\u89e3\u3067\u304d\u308b\u3067\u3057\u3087\u3046\u3002"),(0,o.kt)("p",null,"\u4fee\u6b63\u3067\u304d\u305f\u3089\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u6b21\u306e\u753b\u9762\u304c\u8868\u793a\u3067\u304d\u305f\u3089\u6210\u529f\u3067\u3059\u3002\n\u6b21\u3078\u9032\u307f\u307e\u3057\u3087\u3046\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Welcome",src:n(42400).Z})))}m.isMDXComponent=!0},42400:function(e,t,n){t.Z=n.p+"assets/images/welcome-4388ebc9327ef914a3af82c54ac87747.png"}}]);