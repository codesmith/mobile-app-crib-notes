(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[849],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return v}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),v=r,d=m["".concat(s,".").concat(v)]||m[v]||p[v]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),c="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var p=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,p=e.values,m=e.groupId,v=e.className,d=o(),g=d.tabGroupChoices,f=d.setTabGroupChoices,y=(0,a.useState)(r),k=y[0],b=y[1],N=a.Children.toArray(e.children),S=[];if(null!=m){var h=g[m];null!=h&&h!==k&&p.some((function(e){return e.value===h}))&&b(h)}var x=function(e){var t=e.currentTarget,n=S.indexOf(t),a=p[n].value;b(a),null!=m&&(f(m,a),setTimeout((function(){var e,n,a,r,o,i,c,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,c=i.innerHeight,l=i.innerWidth,n>=0&&o<=l&&r<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case u:var a=S.indexOf(e.target)+1;n=S[a]||S[0];break;case l:var r=S.indexOf(e.target)-1;n=S[r]||S[S.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},v)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":k===t}),key:t,ref:function(e){return S.push(e)},onKeyDown:w,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},3662:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return v}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=n(5064),c=n(8215),s={title:"\u9077\u79fb\u5148\u306e\u753b\u9762\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6e21\u3059"},l=void 0,u={unversionedId:"react-native/learn/advance/react-navigation-param",id:"react-native/learn/advance/react-navigation-param",isDocsHomePage:!1,title:"\u9077\u79fb\u5148\u306e\u753b\u9762\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6e21\u3059",description:"\u691c\u7d22\u6761\u4ef6\u3084ID\u306a\u3069\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6b21\u306e\u753b\u9762\u306b\u6e21\u3057\u305f\u3044\u5834\u5408\u3001React Navigation\u3067\u3069\u306e\u3088\u3046\u306b\u5b9f\u88c5\u3059\u308b\u304b\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/advance/react-navigation-param.mdx",sourceDirName:"react-native/learn/advance",slug:"/react-native/learn/advance/react-navigation-param",permalink:"/mobile-app-crib-notes/react-native/learn/advance/react-navigation-param",version:"current",lastUpdatedAt:1624959359,formattedLastUpdatedAt:"2021/6/29",frontMatter:{title:"\u9077\u79fb\u5148\u306e\u753b\u9762\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6e21\u3059"},sidebar:"learn",previous:{title:"\u6f14\u7fd2\u8ab2\u984c",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/exercise"}},p=[{value:"\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u578b\u5b9a\u7fa9",id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u578b\u5b9a\u7fa9",children:[]}],m={toc:p};function v(e){var t=e.components,s=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u691c\u7d22\u6761\u4ef6\u3084ID\u306a\u3069\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6b21\u306e\u753b\u9762\u306b\u6e21\u3057\u305f\u3044\u5834\u5408\u3001React Navigation\u3067\u3069\u306e\u3088\u3046\u306b\u5b9f\u88c5\u3059\u308b\u304b\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"React Navigation\u3067\u9077\u79fb\u3059\u308b\u969b\u3001\u9077\u79fb\u5148\u306e\u753b\u9762\u306b\u6e21\u3057\u305f\u3044\u30d1\u30e9\u30e1\u30fc\u30bf\u3092",(0,o.kt)("inlineCode",{parentName:"p"},"navigate"),"\u306e\u5f15\u6570\u3068\u3057\u3066\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\n\u9077\u79fb\u5148\u753b\u9762\u3067\u306f\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"route"),"\u304b\u3089\u305d\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx {8-10,21}",jsx:!0,"{8-10,21}":!0},"const Screen1: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View>\n      <Button\n        title=\"Go to Screen2\"\n        onPress={() => {\n          navigation.navigate('Screen2', {\n            message: 'Hello',\n          });\n        }}\n      />\n    </View>\n  );\n};\n\nconst Screen2: React.FC = () => {\n  const route = useRoute();\n  return (\n    <View>\n      <Text>{route.params.message}</Text>\n    </View>\n  );\n};\n")),(0,o.kt)("p",null,"\u305f\u3060\u3057\u3001TypeScript\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u6b21\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"TS2532: Object is possibly 'undefined'.\nTS2339: Property 'message' does not exist on type 'object'.\n")),(0,o.kt)("h2",{id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u578b\u5b9a\u7fa9"},"\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u578b\u5b9a\u7fa9"),(0,o.kt)("p",null,"\u5148\u306e\u30a8\u30e9\u30fc\u3092\u89e3\u6d88\u3059\u308b\u305f\u3081\u306b\u306f\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"route"),"\u3092\u5229\u7528\u3059\u308b\u969b\u306b\u305d\u306e\u753b\u9762\u304c\u53d7\u3051\u53d6\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u578b\u5b9a\u7fa9\u3092\u6559\u3048\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u5b9f\u88c5\u30a4\u30e1\u30fc\u30b8\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u753b\u9762\u540d\u3092\u30ad\u30fc\u306b\u3001\u30d1\u30e9\u30e1\u30fc\u30bf\u5b9a\u7fa9\u3092\u5024\u3068\u3057\u3066\u3082\u3064\u30ea\u30b9\u30c8\u3092\u5b9a\u7fa9\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"RootParamList"),"\uff09"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"type RootParamList = {\n  Screen1: undefined;\n  Screen2: {message: string};\n};\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"useRoute"),"\u306b",(0,o.kt)("inlineCode",{parentName:"p"},"RouteProp<RootParamList, '\u753b\u9762\u540d'>"),"\u3092\u6e21\u3059"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"const Screen2: React.FC = () => {\n    /* \uff5e\u7701\u7565\uff5e */\n  const route = useRoute<RouteProp<RootParamList, 'Screen2'>>();\n  return (\n    /* \uff5e\u7701\u7565\uff5e */\n      <Text>{route.params.message}</Text>\n    /* \uff5e\u7701\u7565\uff5e */\n  );\n};\n")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001\u753b\u9762\u3067\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53d7\u3051\u53d6\u308b\u5b9f\u88c5\u3067\u767a\u751f\u3059\u308b\u3001TypeScript\u306e\u578b\u30c1\u30a7\u30c3\u30af\u30a8\u30e9\u30fc\u3092\u89e3\u6d88\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002"),(0,o.kt)("p",{parentName:"div"},"React Navigation\u3067\u306f\u3001\u578b\u5b9a\u7fa9\u3092\u7a4d\u6975\u7684\u306b\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3088\u308a\u8a73\u7d30\u306a\u578b\u30c1\u30a7\u30c3\u30af\u304c\u53ef\u80fd\u3067\u3059\u3002\n\u4f8b\u3048\u3070\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"navigate"),"\u3067\u9077\u79fb\u3059\u308b\u5148\u306e\u753b\u9762\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u540d\u304c\u9593\u9055\u3048\u3066\u3044\u308b\u6642\u306b\u3001\u578b\u30c1\u30a7\u30c3\u30af\u3067\u30a8\u30e9\u30fc\u3068\u3059\u308b\u3053\u3068\u306a\u3069\u304c\u53ef\u80fd\u3067\u3059\u3002\n\u3082\u3057React Navigation\u3067\u5229\u7528\u3059\u308b\u578b\u5b9a\u7fa9\u306e\u5168\u4f53\u50cf\u306b\u3064\u3044\u3066\u77e5\u308a\u305f\u3044\u5834\u5408\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/typescript/"},"Type checking with TypeScript | React Navigation"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",{parentName:"div"},"\u305f\u3060\u3001React Navigation\u3067\u5229\u7528\u3059\u308b\u578b\u5b9a\u7fa9\u306fTypeScript\u306e\u578b\u30b7\u30b9\u30c6\u30e0\u306b\u7cbe\u901a\u3057\u3066\u3044\u306a\u3044\u3068\u7406\u89e3\u304c\u96e3\u3057\u3044\u3067\u3059\u3002\n\u307e\u305f\u3001\u305b\u3063\u304b\u304f\u578b\u5b9a\u7fa9\u3092\u9811\u5f35\u3063\u3066\u3082\u305d\u306e\u5229\u7528\u65b9\u6cd5\u304c\u8aa4\u3063\u3066\u3044\u308b\u3068\u3001\u578b\u30c1\u30a7\u30c3\u30af\u3067\u306f\u30a8\u30e9\u30fc\u306b\u306f\u306a\u308a\u307e\u305b\u3093\u304c\u5b9f\u884c\u6642\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u3066\u3057\u307e\u3044\u307e\u3059\u3002"),(0,o.kt)("p",{parentName:"div"},"\u3053\u3046\u3044\u3063\u305f\u7406\u7531\u304b\u3089\u3001React Navigation\u306e\u305f\u3081\u306e\u578b\u5b9a\u7fa9\u306f\u3001\u5b9a\u7fa9\u3057\u306a\u3044\u3068\u30a8\u30e9\u30fc\u306b\u306a\u308b\u306a\u3069\u306e\u5fc5\u8981\u6700\u4f4e\u9650\u306e\u3082\u306e\u3060\u3051\u3092\u7d39\u4ecb\u3057\u3066\u3044\u307e\u3059\u3002"))),(0,o.kt)(i.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"image",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modal",src:n(4061).Z}))),(0,o.kt)(c.Z,{value:"source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import {\n  NavigationContainer,\n  NavigatorScreenParams,\n  RouteProp,\n  useNavigation,\n  useRoute,\n} from '@react-navigation/native';\nimport {\n  createStackNavigator,\n} from '@react-navigation/stack';\nimport React from 'react';\nimport {Text, View, StyleSheet} from 'react-native';\nimport {Button} from 'react-native-elements';\n\ntype RootParamList = {\n  MainStack: NavigatorScreenParams<MainParamList>;\n  Modal1: {message: string};\n};\ntype MainParamList = {\n  Screen1: undefined;\n  Screen2: undefined;\n};\n\nconst RootStack = createStackNavigator();\nconst MainStack = createStackNavigator();\n\nexport const App = () => {\n  return (\n    <NavigationContainer>\n      <RootStack.Navigator mode=\"modal\" screenOptions={{headerShown: false}}>\n        <RootStack.Screen name=\"MainStack\" component={Main} />\n        <RootStack.Screen name=\"Modal1\" component={Modal1} />\n      </RootStack.Navigator>\n    </NavigationContainer>\n  );\n};\n\nconst Main = () => {\n  return (\n    <MainStack.Navigator>\n      <MainStack.Screen name=\"Screen1\" component={Screen1} />\n      <MainStack.Screen name=\"Screen2\" component={Screen2} />\n    </MainStack.Navigator>\n  );\n};\n\nconst Screen1: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Screen 1</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Navigate Screen 2\"\n        onPress={() => navigation.navigate('Screen2')}\n      />\n      <Button\n        buttonStyle={styles.button}\n        title=\"Popup Modal 1\"\n        onPress={() => navigation.navigate('Modal1', {message: 'from Screen1'})}\n      />\n    </View>\n  );\n};\n\nconst Screen2: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Screen 2</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Go Back\"\n        onPress={() => navigation.goBack()}\n      />\n      <Button\n        buttonStyle={styles.button}\n        title=\"Popup Modal 1\"\n        onPress={() => navigation.navigate('Modal1', {message: 'from Screen2'})}\n      />\n    </View>\n  );\n};\n\nconst Modal1: React.FC = () => {\n  const navigation = useNavigation();\n  const route = useRoute<RouteProp<RootParamList, 'Modal1'>>();\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Modal 1</Text>\n      <Text>{route.params.message}</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Close\"\n        onPress={() => navigation.goBack()}\n      />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  screen: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  title: {\n    padding: 20,\n    fontSize: 42,\n  },\n  button: {\n    margin: 10,\n    width: 200,\n  },\n});\n")))))}v.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},4061:function(e,t,n){"use strict";t.Z=n.p+"assets/images/modal-0adaa2089bf13635963aea38fa962dd8.png"}}]);