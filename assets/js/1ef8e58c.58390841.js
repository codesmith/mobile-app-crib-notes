"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,v=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),o=n(67294),r=n(86010),i=n(72389),l=n(67392),c=n(7094),s=n(12466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n;const{lazy:i,block:m,defaultValue:d,values:v,groupId:g,className:k}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=v?v:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,l.l)(f,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===d?d:null!=(t=null!=d?d:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:S}=(0,c.U)(),[w,M]=(0,o.useState)(h),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=g){const e=y[g];null!=e&&e!==w&&f.some((t=>t.value===e))&&M(e)}const O=e=>{const t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==w&&(C(t),M(a),null!=g&&S(g,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var o;const t=x.indexOf(e.currentTarget)-1;n=null!=(o=x[t])?o:x[x.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},k)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:T,onFocus:O,onClick:O},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,i.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},80072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905)),r=n(65488),i=n(85162);const l={title:"Modal"},c=void 0,s={unversionedId:"react-native/learn/basic-concepts/react-navigation-basics/modal",id:"react-native/learn/basic-concepts/react-navigation-basics/modal",title:"Modal",description:"\u30e2\u30fc\u30c0\u30eb\u306f\u3001\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4e00\u6642\u7684\u306b\u30d6\u30ed\u30c3\u30af\u3057\u3066\u5225\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3068\u4f3c\u305f\u3088\u3046\u306a\u6027\u8cea\u3092\u6301\u3061\u3001\u901a\u5e38\u306e\u753b\u9762\u9077\u79fb\u3068\u306f\u7570\u306a\u308b\u65b9\u6cd5\u3067\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-navigation-basics/modal.mdx",sourceDirName:"react-native/learn/basic-concepts/react-navigation-basics",slug:"/react-native/learn/basic-concepts/react-navigation-basics/modal",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/modal",draft:!1,tags:[],version:"current",lastUpdatedAt:1638350987,formattedLastUpdatedAt:"2021/12/1",frontMatter:{title:"Modal"},sidebar:"learn",previous:{title:"Stack",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/stack"},next:{title:"Tab",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/tab"}},p={},u=[{value:"\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30ca\u30d3\u30b2\u30fc\u30bf",id:"\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30ca\u30d3\u30b2\u30fc\u30bf",level:2}],m={toc:u};function d(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u30e2\u30fc\u30c0\u30eb\u306f\u3001\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4e00\u6642\u7684\u306b\u30d6\u30ed\u30c3\u30af\u3057\u3066\u5225\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3068\u4f3c\u305f\u3088\u3046\u306a\u6027\u8cea\u3092\u6301\u3061\u3001\u901a\u5e38\u306e\u753b\u9762\u9077\u79fb\u3068\u306f\u7570\u306a\u308b\u65b9\u6cd5\u3067\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u30e2\u30fc\u30c0\u30eb\u753b\u9762\u306e\u30ca\u30d3\u30b2\u30fc\u30bf\u5b9a\u7fa9\u306b\u3082",(0,o.kt)("inlineCode",{parentName:"p"},"StackNavigator"),"\u3092\u7528\u3044\u307e\u3059\u3002\n",(0,o.kt)("inlineCode",{parentName:"p"},"StackNavigator"),"\u306e",(0,o.kt)("inlineCode",{parentName:"p"},"screenOptions.presentation"),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306b",(0,o.kt)("inlineCode",{parentName:"p"},"'modal'"),"\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u30e2\u30fc\u30c0\u30eb\u8868\u793a\u306e\u753b\u9762\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u304c\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30ca\u30d3\u30b2\u30fc\u30bf"},"\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30ca\u30d3\u30b2\u30fc\u30bf"),(0,o.kt)("p",null,"\u30e2\u30fc\u30c0\u30eb\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u5168\u3066\u306e\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u512a\u5148\u3057\u3066\u8868\u793a\u3055\u305b\u308b\u305f\u3081\u3001\u4e00\u822c\u7684\u306b\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30ca\u30d3\u30b2\u30fc\u30bf\u3092\u7528\u3044\u3066\u5b9a\u7fa9\u3057\u307e\u3059\u3002\n\u6b21\u306e\u56f3\u306f\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Modal 1"),"\u3092\u30e2\u30fc\u30c0\u30eb\u3068\u3057\u3066\u5b9a\u7fa9\u3057\u305f\u5834\u5408\u306e\u30ca\u30d3\u30b2\u30fc\u30bf\u69cb\u6210\u3067\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modal navigator structure",src:n(80250).Z,width:"462",height:"242"})),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RootStack"),"\u306f",(0,o.kt)("inlineCode",{parentName:"p"},"MainStack"),"\u3092\u5b50\u30ca\u30d3\u30b2\u30fc\u30bf\u3068\u3057\u3066\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u3053\u306e\u30ca\u30d3\u30b2\u30fc\u30bf\u69cb\u6210\u306e\u30b3\u30fc\u30c9\u4f8b\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'const RootStack = createStackNavigator();\nconst MainStack = createStackNavigator();\n\nexport const App = () => {\n  return (\n    <NavigationContainer>\n      <RootStack.Navigator screenOptions={{headerShown: false, presentation: \'modal\'}}>\n        <RootStack.Screen name="MainStack" component={Main} />\n        <RootStack.Screen name="Modal1" component={Modal1} />\n      </RootStack.Navigator>\n    </NavigationContainer>\n  );\n};\n\nconst Main = () => {\n  return (\n    <MainStack.Navigator>\n      <MainStack.Screen name="Screen1" component={Screen1} />\n      <MainStack.Screen name="Screen2" component={Screen2} />\n    </MainStack.Navigator>\n  );\n};\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RootStack.Navigator"),"\u30bf\u30b0\u306e\u4e2d\u3067",(0,o.kt)("inlineCode",{parentName:"p"},"screenOptions.presentation"),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306b",(0,o.kt)("inlineCode",{parentName:"p"},"'modal'"),"\u3092\u6307\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002\n\u3053\u308c\u306b\u3088\u308a\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Modal1"),"\u3078\u306e\u753b\u9762\u9077\u79fb\u306f\u30e2\u30fc\u30c0\u30eb\u8868\u793a\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3068\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"React Navigation\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e",(0,o.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/modal/"},"Opening a full-screen modal"),"\u306b\u6b21\u306e\u8a18\u8f09\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("blockquote",{parentName:"div"},(0,o.kt)("p",{parentName:"blockquote"},"The modal prop has no effect on Android because full-screen modals don't have any different transition behavior on the platform.")),(0,o.kt)("p",{parentName:"div"},"\u753b\u9762\u9077\u79fb\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u5404\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u52d5\u4f5c\u306b\u5f93\u3044\u307e\u3059\u3002\n\u4e0a\u8a18\u306e\u3068\u304a\u308a\u3001Android\u306e\u30d5\u30eb\u30b9\u30af\u30ea\u30fc\u30f3\u30e2\u30fc\u30c0\u30eb\u306b\u306f\u7570\u306a\u308b\u30c8\u30e9\u30f3\u30b8\u30b7\u30e7\u30f3\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"presentation"),"\u5c5e\u6027\u306e\u5909\u66f4\u306b\u3088\u308b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u5909\u66f4\u306f\u3042\u308a\u307e\u305b\u3093\u3002"))),(0,o.kt)("p",null,"\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30ca\u30d3\u30b2\u30fc\u30bf\u306f\u6b21\u306e\u3088\u3046\u306b\u52d5\u4f5c\u3057\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5404\u30ca\u30d3\u30b2\u30fc\u30bf\u306f\u72ec\u81ea\u306e\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u5c65\u6b74\u3092\u4fdd\u6301\u3059\u308b"),(0,o.kt)("li",{parentName:"ul"},"\u5404\u30ca\u30d3\u30b2\u30fc\u30bf\u6bce\u306b\u72ec\u81ea\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u5b9a\u7fa9\u3067\u304d\u308b"),(0,o.kt)("li",{parentName:"ul"},"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u64cd\u4f5c\u306f\u73fe\u5728\u306e\u30ca\u30d3\u30b2\u30fc\u30bf\u306b\u3088\u3063\u3066\u51e6\u7406\u3055\u308c\u3001\u51e6\u7406\u3067\u304d\u306a\u304b\u3063\u305f\u5834\u5408\u306f\u4e0a\u4f4d\u306e\u30ca\u30d3\u30b2\u30fc\u30bf\u306b\u51e6\u7406\u3092\u79fb\u8b72\u3059\u308b"),(0,o.kt)("li",{parentName:"ul"},"\u89aa\u30ca\u30d3\u30b2\u30fc\u30bf\u306eUI\u306f\u3001\u5b50\u30ca\u30d3\u30b2\u30fc\u30bf\u306e\u4e0a\u306b\u63cf\u753b\u3055\u308c\u308b")),(0,o.kt)(r.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"image",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modal",src:n(76423).Z,width:"1080",height:"2220"}))),(0,o.kt)(i.Z,{value:"source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import {\n  NavigationContainer,\n  useNavigation,\n} from '@react-navigation/native';\nimport {createStackNavigator} from '@react-navigation/stack';\nimport React from 'react';\nimport {Text, View, StyleSheet} from 'react-native';\nimport {Button} from 'react-native-elements';\n\nconst RootStack = createStackNavigator();\nconst MainStack = createStackNavigator();\n\nexport const App = () => {\n  return (\n    <NavigationContainer>\n      <RootStack.Navigator screenOptions={{headerShown: false, presentation: 'modal'}}>\n        <RootStack.Screen name=\"MainStack\" component={Main} />\n        <RootStack.Screen name=\"Modal1\" component={Modal1} />\n      </RootStack.Navigator>\n    </NavigationContainer>\n  );\n};\n\nconst Main = () => {\n  return (\n    <MainStack.Navigator>\n      <MainStack.Screen name=\"Screen1\" component={Screen1} />\n      <MainStack.Screen name=\"Screen2\" component={Screen2} />\n    </MainStack.Navigator>\n  );\n};\n\nconst Screen1: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Screen 1</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Navigate Screen 2\"\n        onPress={() => navigation.navigate('Screen2')}\n      />\n      <Button\n        buttonStyle={styles.button}\n        title=\"Popup Modal 1\"\n        onPress={() => navigation.navigate('Modal1')}\n      />\n    </View>\n  );\n};\n\nconst Screen2: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Screen 2</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Go Back\"\n        onPress={() => navigation.goBack()}\n      />\n      <Button\n        buttonStyle={styles.button}\n        title=\"Popup Modal 1\"\n        onPress={() => navigation.navigate('Modal1')}\n      />\n    </View>\n  );\n};\n\nconst Modal1: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Modal 1</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Close\"\n        onPress={() => navigation.goBack()}\n      />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  screen: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  title: {\n    padding: 20,\n    fontSize: 42,\n  },\n  button: {\n    margin: 10,\n    width: 200,\n  },\n});\n")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"React Navigation v5\u3067\u306f\u3001\u753b\u9762\u5358\u4f4d\u3067\u306f\u30e2\u30fc\u30c0\u30eb\u8868\u793a\u3092\u8a2d\u5b9a\u3067\u304d\u305a\u3001\u30e2\u30fc\u30c0\u30eb\u8868\u793a\u306e\u305f\u3081\u306b\u5c02\u7528\u306e\u30ca\u30d3\u30b2\u30fc\u30bf\u304c\u5fc5\u8981\u3067\u3057\u305f\u3002v6\u3067\u5c0e\u5165\u3055\u308c\u305f",(0,o.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/group/"},(0,o.kt)("inlineCode",{parentName:"a"},"Group")),"\u3092\u4f7f\u3046\u3053\u3068\u3067\u3001\u30e2\u30fc\u30c0\u30eb\u8868\u793a\u306e\u753b\u9762\u3068\u975e\u30e2\u30fc\u30c0\u30eb\u8868\u793a\u306e\u753b\u9762\u3092\u3001\u4e21\u65b9\u3068\u3082\u540c\u3058\u30ca\u30d3\u30b2\u30fc\u30bf\u306e\u4e2d\u306b\u914d\u7f6e\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"Group"),"\u3092\u4f7f\u3063\u305f\u30e2\u30fc\u30c0\u30eb\u8868\u793a\u306e\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/modal/"},"Opening a full-screen modal ","|"," React Navigation"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))))}d.isMDXComponent=!0},76423:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/modal-8ff6571341fa9df022bb2a680ad4d464.png"},80250:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/modal_image-12959ded44b893d64c2085e949a012d1.png"}}]);