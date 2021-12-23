"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3474],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return v}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),v=r,b=m["".concat(l,".").concat(v)]||m[v]||p[v]||o;return t?a.createElement(b,i(i({ref:n},u),{},{components:t})):a.createElement(b,i({ref:n},u))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(87462),r=t(67294),o=t(72389),i=t(79443);var c=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(63616),s=t(86010),u="tabItem_1uMI";function p(e){var n,t,o,i=e.lazy,p=e.block,m=e.defaultValue,v=e.values,b=e.groupId,f=e.className,d=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:d.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,l.lx)(g,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(n=null!=m?m:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=d[0])?void 0:o.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=c(),S=T.tabGroupChoices,h=T.setTabGroupChoices,N=(0,r.useState)(k),x=N[0],w=N[1],O=[],C=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var E=S[b];null!=E&&E!==x&&g.some((function(e){return e.value===E}))&&w(E)}var j=function(e){var n=e.currentTarget,t=O.indexOf(n),a=g[t].value;a!==x&&(C(n),w(a),null!=b&&h(b,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;t=O[r]||O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},f)},g.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:j,onClick:j},o,{className:(0,s.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(d.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function m(e){var n=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},81136:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return b}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=t(26396),c=t(58215),l=["components"],s={title:"Tab"},u=void 0,p={unversionedId:"react-native/learn/basic-concepts/react-navigation-basics/tab",id:"react-native/learn/basic-concepts/react-navigation-basics/tab",title:"Tab",description:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u63a1\u7528\u3055\u308c\u308b\u4e00\u822c\u7684\u306a\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u306b\u30bf\u30d6\u304c\u3042\u308a\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-navigation-basics/tab.mdx",sourceDirName:"react-native/learn/basic-concepts/react-navigation-basics",slug:"/react-native/learn/basic-concepts/react-navigation-basics/tab",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/tab",tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"Tab"},sidebar:"learn",previous:{title:"Modal",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/modal"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app"}},m=[],v={toc:m};function b(e){var n=e.components,s=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},v,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u63a1\u7528\u3055\u308c\u308b\u4e00\u822c\u7684\u306a\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u306b\u30bf\u30d6\u304c\u3042\u308a\u307e\u3059\u3002\n\u30bf\u30d6\u306f\u753b\u9762\u306e\u4e0b\u90e8\uff08\u307e\u305f\u306f\u4e0a\u90e8\uff09\u306b\u914d\u7f6e\u3055\u308c\u3001\u30dc\u30bf\u30f3\u62bc\u4e0b\u3067\u753b\u9762\u3092\u5207\u308a\u66ff\u3048\u307e\u3059\u3002"),(0,o.kt)("p",null,"React Navigation\u3067\u306f\u3001\u6b21\u306eAPI\u3092\u4f7f\u7528\u3057\u3066\u30bf\u30d6\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"createBottomTabNavigator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"createMaterialBottomTabNavigator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"createMaterialTopTabNavigator"))),(0,o.kt)("p",null,"\u30bf\u30d6\u30ca\u30d3\u30b2\u30fc\u30bf\u306e\u5b9a\u7fa9\u306f\u30b9\u30bf\u30c3\u30af\u306e\u305d\u308c\u3068\u4f3c\u3066\u3044\u307e\u3059\u3002\u6b21\u306e\u30b3\u30fc\u30c9\u306f\u30bf\u30d6\u30ca\u30d3\u30b2\u30fc\u30bf\u306e\u5b9a\u7fa9\u4f8b\u3067\u3059\u3002\n\u5b9a\u7fa9\u306e\u4e2d\u3067\u3001\u30bf\u30d6\u306e\u5916\u89b3\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\uff08\u30a2\u30a4\u30b3\u30f3\u8868\u793a\u3057\u305f\u308a\u30d0\u30c3\u30b8\u3092\u8ffd\u52a0\u3057\u305f\u308a\uff09\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'<NavigationContainer>\n  <RootTab.Navigator>\n    <RootTab.Screen\n      name="Settings"\n      component={SettingsScreen}\n      options={{\n        title: \'\u8a2d\u5b9a\',\n        tabBarBadge: 3,\n        tabBarIcon: ({color}) => (\n          <Ionicons name="md-settings" size={30} color={color} />\n        ),\n      }}\n    />\n    /* \uff5e\u7701\u7565\uff5e */\n  </RootTab.Navigator>\n</NavigationContainer>\n')),(0,o.kt)("p",null,"\u30bf\u30d6\u306e\u5207\u308a\u66ff\u3048\u3001\u304a\u3088\u3073\u30bf\u30d6\u914d\u4e0b\u306e\uff08\u30cd\u30b9\u30c8\u3055\u308c\u305f\uff09\u30ca\u30d3\u30b2\u30fc\u30bf\u306e\u753b\u9762\u9077\u79fb\u3082\u3001\u30b9\u30bf\u30c3\u30af\u3068\u540c\u69d8\u306b",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.navigate"),"\u3092\u7528\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u6b21\u306e\u56f3\u306f\u3001\u30b3\u30fc\u30c9\u4f8b\u306e\u30ca\u30d3\u30b2\u30fc\u30bf\u69cb\u6210\u3067\u3059\u3002\n\u30bf\u30d6\u914d\u4e0b\u306b\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30b9\u30bf\u30c3\u30af\u30ca\u30d3\u30b2\u30fc\u30bf\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tab navigator",src:t(89688).Z})),(0,o.kt)(i.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"image",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tab",src:t(74289).Z}))),(0,o.kt)(c.Z,{value:"source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import {Ionicons} from '@expo/vector-icons';\nimport {\n  createBottomTabNavigator,\n} from '@react-navigation/bottom-tabs';\nimport {\n  NavigationContainer,\n  useNavigation,\n} from '@react-navigation/native';\nimport {\n  createStackNavigator,\n} from '@react-navigation/stack';\nimport * as React from 'react';\nimport {StyleSheet, Text, View} from 'react-native';\nimport {Button} from 'react-native-elements';\n\nconst HomeStack = createStackNavigator();\nconst RootTab = createBottomTabNavigator();\n\nconst HomeStackScreen: React.FC = () => {\n  return (\n    <HomeStack.Navigator>\n      <HomeStack.Screen name=\"Home\" component={HomeScreen} />\n      <HomeStack.Screen name=\"Details\" component={DetailsScreen} />\n    </HomeStack.Navigator>\n  );\n};\n\nexport const App: React.FC = () => {\n  return (\n    <NavigationContainer>\n      <RootTab.Navigator>\n        <RootTab.Screen\n          name=\"HomeStack\"\n          component={HomeStackScreen}\n          options={{\n            title: '\u30db\u30fc\u30e0',\n            tabBarIcon: ({color}) => (\n              <Ionicons name=\"md-home\" size={30} color={color} />\n            ),\n          }}\n        />\n        <RootTab.Screen\n          name=\"Settings\"\n          component={SettingsScreen}\n          options={{\n            title: '\u8a2d\u5b9a',\n            tabBarBadge: 3,\n            tabBarIcon: ({color}) => (\n              <Ionicons name=\"md-settings\" size={30} color={color} />\n            ),\n          }}\n        />\n      </RootTab.Navigator>\n    </NavigationContainer>\n  );\n};\n\nconst HomeScreen: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text>Home screen</Text>\n      <Button\n        title=\"Go to Details\"\n        buttonStyle={styles.button}\n        onPress={() => navigation.navigate('Details')}\n      />\n      <Button\n        title=\"Go to Settings\"\n        buttonStyle={styles.button}\n        onPress={() => navigation.navigate('Settings')}\n      />\n    </View>\n  );\n};\n\nconst SettingsScreen: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text>Settings screen</Text>\n      <Button\n        title=\"Go to HomeStack\"\n        buttonStyle={styles.button}\n        onPress={() => navigation.navigate('HomeStack')}\n      />\n    </View>\n  );\n};\n\nconst DetailsScreen: React.FC = () => {\n  return (\n    <View style={styles.screen}>\n      <Text>Details!</Text>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  screen: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  button: {\n    marginTop: 10,\n    width: 200,\n  },\n});\n")))))}b.isMDXComponent=!0},74289:function(e,n,t){n.Z=t.p+"assets/images/tab-96dd0dafdd7f1ff2b7536738d2ce05d3.png"},89688:function(e,n,t){n.Z=t.p+"assets/images/tab_image-a016354dedf177e989dc540abaa02012.png"}}]);