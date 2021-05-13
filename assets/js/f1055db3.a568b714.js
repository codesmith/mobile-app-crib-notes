(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(172)),i={title:"Tab\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3"},c={unversionedId:"react-native/learn/todo-app/tab",id:"react-native/learn/todo-app/tab",isDocsHomePage:!1,title:"Tab\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3",description:"\u300cToDo\u4e00\u89a7\u300d\u3068\u300c\u8a2d\u5b9a\u300d\u306e\u30bf\u30d6\u5207\u66ff\u3092\u5b9f\u88c5\u3057\u3066\u3044\u304d\u307e\u3059\u3002\u30bf\u30d6\u5207\u66ff\u306fTab\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3067\u5b9f\u88c5\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/todo-app/tab.mdx",sourceDirName:"react-native/learn/todo-app",slug:"/react-native/learn/todo-app/tab",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/tab",version:"current",lastUpdatedAt:1620621203,formattedLastUpdatedAt:"2021/5/10",frontMatter:{title:"Tab\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3"},sidebar:"learn",previous:{title:"\u72b6\u614b\u306b\u5fdc\u3058\u305f\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/auth"},next:{title:"Modal\u30b9\u30af\u30ea\u30fc\u30f3",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/modal"}},s=[{value:"\u753b\u9762\u3092\u8ffd\u52a0",id:"\u753b\u9762\u3092\u8ffd\u52a0",children:[]},{value:"Tab\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3",id:"tab\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3",children:[]}],l={toc:s};function b(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u300cToDo\u4e00\u89a7\u300d\u3068\u300c\u8a2d\u5b9a\u300d\u306e\u30bf\u30d6\u5207\u66ff\u3092\u5b9f\u88c5\u3057\u3066\u3044\u304d\u307e\u3059\u3002\u30bf\u30d6\u5207\u66ff\u306fTab\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3067\u5b9f\u88c5\u3057\u307e\u3059\u3002"),Object(o.b)("p",null,Object(o.b)("img",{alt:"TabNavigation",src:n(281).default})),Object(o.b)("h2",{id:"\u753b\u9762\u3092\u8ffd\u52a0"},"\u753b\u9762\u3092\u8ffd\u52a0"),Object(o.b)("p",null,"\u8a2d\u5b9a\u753b\u9762\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\n\u8a2d\u5b9a\u753b\u9762\u304b\u3089\u30ed\u30b0\u30a2\u30a6\u30c8\u3067\u304d\u308b\u3088\u3046\u306b\u3001\u524d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u5b9f\u88c5\u3057\u305f\u30ed\u30b0\u30a2\u30a6\u30c8\u30dc\u30bf\u30f3\u3092\u8a2d\u5b9a\u753b\u9762\u306b\u79fb\u52d5\u3055\u305b\u307e\u3059\u3002"),Object(o.b)("p",null,"\u6b21\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u30fb\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/screens/settings/UserSetting.tsx")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/screens/settings/index.ts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/screens/todo/TodoBoard.tsx")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/screens/index.ts"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/screens/settings/UserSetting.tsx"',jsx:!0,title:'"/src/screens/settings/UserSetting.tsx"'},"import {useUserContext} from 'contexts/UserContext';\nimport React, {useCallback} from 'react';\nimport {StyleSheet, View} from 'react-native';\nimport {Button} from 'react-native-elements';\n\nexport const UserSetting: React.FC = () => {\n  const userContext = useUserContext();\n\n  const onLogout = useCallback(() => userContext.logout(), [userContext]);\n\n  return (\n    <View style={styles.container}>\n      <Button type=\"clear\" onPress={onLogout} title=\"\u30ed\u30b0\u30a2\u30a6\u30c8\" />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/screens/settings/index.ts"',jsx:!0,title:'"/src/screens/settings/index.ts"'},"export * from './UserSetting';\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"TodoBoard"),"\u306f\u3072\u306a\u5f62\u306b\u623b\u3059\u305f\u3081\u4e0b\u8a18\u306e\u30b3\u30fc\u30c9\u3067\u4e0a\u66f8\u304d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx  title="/src/screens/todo/TodoBoard.tsx"',jsx:!0,"":!0,title:'"/src/screens/todo/TodoBoard.tsx"'},"import React from 'react';\nimport {StyleSheet, View} from 'react-native';\nimport {Text} from 'react-native-elements';\n\nexport const TodoBoard: React.FC = () => {\n  return (\n    <View style={styles.container}>\n      <Text h1>Todo</Text>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff",metastring:'title="/src/screens/index.ts"',title:'"/src/screens/index.ts"'},"  export * from './auth';\n  export * from './home';\n  export * from './instructions';\n+ export * from './settings';\n  export * from './todo';\n")),Object(o.b)("h2",{id:"tab\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3"},"Tab\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3"),Object(o.b)("p",null,"\u5148\u307b\u3069\u8ffd\u52a0\u3057\u305f\u753b\u9762\u3092\u30bf\u30d6\u5207\u66ff\u3067\u304d\u308b\u3088\u3046\u306b\u30ca\u30d3\u30b2\u30fc\u30bf\u69cb\u6210\u3092\u4fee\u6b63\u3057\u307e\u3059\u3002\u4fee\u6b63\u624b\u9806\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"ToDo\u4e00\u89a7\u753b\u9762\u3068\u8a2d\u5b9a\u753b\u9762\u3092\u305d\u308c\u305e\u308c\u914d\u7f6e\u3059\u308bStack\u30ca\u30d3\u30b2\u30fc\u30bf\uff08",Object(o.b)("inlineCode",{parentName:"li"},"TodoStackNav"),"\u3068",Object(o.b)("inlineCode",{parentName:"li"},"SettingsStackNav"),"\uff09\u3092\u8ffd\u52a0"),Object(o.b)("li",{parentName:"ol"},"Stack\u30ca\u30d3\u30b2\u30fc\u30bf\u3092\u5207\u308a\u66ff\u3048\u308bTab\u30ca\u30d3\u30b2\u30fc\u30bf\uff08",Object(o.b)("inlineCode",{parentName:"li"},"MainTabNav"),"\uff09\u3092\u8ffd\u52a0"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"RootStackNav"),"\u30ca\u30d3\u30b2\u30fc\u30bf\u306b",Object(o.b)("inlineCode",{parentName:"li"},"Main"),"\u3068\u3044\u3046\u540d\u524d\u3067Tab\u30ca\u30d3\u30b2\u30fc\u30bf\uff08",Object(o.b)("inlineCode",{parentName:"li"},"MainTabNav"),"\uff09\u3092\u914d\u7f6e")),Object(o.b)("p",null,Object(o.b)("img",{alt:"TabNavigation",src:n(282).default})),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Tab\u30ca\u30d3\u30b2\u30fc\u30bf\u306b\u753b\u9762\uff08",Object(o.b)("inlineCode",{parentName:"p"},"TodoBoard"),"\u3084",Object(o.b)("inlineCode",{parentName:"p"},"UserSetting"),"\uff09\u3092\u76f4\u63a5\u8a2d\u5b9a\u3057\u3066\u3082\u3088\u3044\u3067\u3059\u304c\u3001\n\u30bf\u30d6\u5185\u3067\u753b\u9762\u9077\u79fb\u3055\u305b\u305f\u3044\u5834\u5408\u3001Stack\u30ca\u30d3\u30b2\u30fc\u30bf\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u4eca\u56de\u306e\u30a2\u30d7\u30ea\u3067\u306f\u30bf\u30d6\u5185\u3067\u753b\u9762\u9077\u79fb\u3057\u306a\u3044\u305f\u3081\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u4e00\u822c\u7684\u306a\u5b9f\u88c5\u65b9\u6cd5\u3068\u3057\u3066Stack\u30ca\u30d3\u30b2\u30fc\u30bf\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"))),Object(o.b)("p",null,"\u307e\u305a\u3001ToDo\u4e00\u89a7\u753b\u9762\u3068\u8a2d\u5b9a\u753b\u9762\u3092\u305d\u308c\u305e\u308c\u914d\u7f6e\u3059\u308bStack\u30ca\u30d3\u30b2\u30fc\u30bf\uff08",Object(o.b)("inlineCode",{parentName:"p"},"TodoStackNav"),"\u3068",Object(o.b)("inlineCode",{parentName:"p"},"SettingsStackNav"),"\uff09\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\n\u6b21\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u30fb\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/navigation/TodoStackNav.tsx")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/navigation/SettingsStackNav.tsx")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/navigation/index.ts"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/navigation/TodoStackNav.tsx"',jsx:!0,title:'"/src/navigation/TodoStackNav.tsx"'},"import {createStackNavigator} from '@react-navigation/stack';\nimport React from 'react';\nimport {TodoBoard} from 'screens';\n\nconst nav = createStackNavigator();\nexport const TodoStackNav: React.FC = () => (\n  <nav.Navigator initialRouteName=\"TodoBoard\">\n    <nav.Screen\n      name=\"TodoBoard\"\n      component={TodoBoard}\n      options={{\n        headerTitle: 'Todo\u30a2\u30d7\u30ea',\n      }}\n    />\n  </nav.Navigator>\n);\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/navigation/SettingsStackNav.tsx"',jsx:!0,title:'"/src/navigation/SettingsStackNav.tsx"'},"import {createStackNavigator} from '@react-navigation/stack';\nimport React from 'react';\nimport {UserSetting} from 'screens';\n\nconst nav = createStackNavigator();\nexport const SettingsStackNav: React.FC = () => (\n  <nav.Navigator screenOptions={{headerShown: false}} initialRouteName=\"UserSetting\">\n    <nav.Screen name=\"UserSetting\" component={UserSetting} />\n  </nav.Navigator>\n);\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff",metastring:'jsx title="/src/navigation/index.ts"',jsx:!0,title:'"/src/navigation/index.ts"'},"  export * from './RootStackNav';\n  export * from './UnauthedStackNav';\n  export * from './AuthedStackNav';\n+ export * from './TodoStackNav';\n+ export * from './SettingsStackNav';\n")),Object(o.b)("p",null,"\u6b21\u306b\u3001\u8ffd\u52a0\u3057\u305fStack\u30ca\u30d3\u30b2\u30fc\u30bf\u3092\u5207\u308a\u66ff\u3048\u308bTab\u30ca\u30d3\u30b2\u30fc\u30bf\uff08",Object(o.b)("inlineCode",{parentName:"p"},"MainTabNav"),"\uff09\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\n\u300c",Object(o.b)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/tab"},"\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b"),"\u300d\u3067\u8ff0\u3079\u305f\u3068\u304a\u308aTab\u30ca\u30d3\u30b2\u30fc\u30bf\u306f3\u7a2e\u985e\u3042\u308a\u307e\u3059\u304c\u3001\n\u4eca\u56de\u306f\u6700\u3082\u30b7\u30f3\u30d7\u30eb\u306aBottomTabNavigator\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),Object(o.b)("p",null,"\u6b21\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u30fb\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/navigation/MainTabNav.tsx")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/navigation/index.ts"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/navigation/MainTabNav.tsx"',jsx:!0,title:'"/src/navigation/MainTabNav.tsx"'},"import {Ionicons} from '@expo/vector-icons';\nimport {createBottomTabNavigator} from '@react-navigation/bottom-tabs';\nimport React from 'react';\n\nimport {SettingsStackNav} from './SettingsStackNav';\nimport {TodoStackNav} from './TodoStackNav';\n\nconst nav = createBottomTabNavigator();\nexport const MainTabNav: React.FC = () => {\n  return (\n    <nav.Navigator initialRouteName=\"Todo\">\n      <nav.Screen\n        name=\"Todo\"\n        component={TodoStackNav}\n        options={{\n          title: '\u30db\u30fc\u30e0',\n          tabBarIcon: ({color}) => <Ionicons name=\"md-home\" size={30} color={color} />,\n        }}\n      />\n      <nav.Screen\n        name=\"Settings\"\n        component={SettingsStackNav}\n        options={{\n          title: '\u8a2d\u5b9a',\n          tabBarIcon: ({color}) => <Ionicons name=\"md-settings\" size={30} color={color} />,\n        }}\n      />\n    </nav.Navigator>\n  );\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff",metastring:'jsx title="/src/navigation/index.ts"',jsx:!0,title:'"/src/navigation/index.ts"'},"  export * from './RootStackNav';\n  export * from './UnauthedStackNav';\n  export * from './AuthedStackNav';\n  export * from './TodoStackNav';\n  export * from './SettingsStackNav';\n+ export * from './MainTabNav';\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"BottomTabNavigator\u306b\u6307\u5b9a\u3067\u304d\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u7a2e\u985e\u306b\u3064\u3044\u3066\u306f",Object(o.b)("a",{parentName:"p",href:"https://reactnavigation.org/docs/bottom-tab-navigator#options"},"\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306eAPI\u5b9a\u7fa9"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),Object(o.b)("p",null,"\u6700\u5f8c\u306b\u3001",Object(o.b)("inlineCode",{parentName:"p"},"AuthedStackNav"),"\u30ca\u30d3\u30b2\u30fc\u30bf\u306b",Object(o.b)("inlineCode",{parentName:"p"},"Main"),"\u3068\u3044\u3046\u540d\u524d\u3067Tab\u30ca\u30d3\u30b2\u30fc\u30bf\uff08",Object(o.b)("inlineCode",{parentName:"p"},"MainTabNav"),"\uff09\u3092\u914d\u7f6e\u3057\u307e\u3059\u3002"),Object(o.b)("p",null,"\u6b21\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/navigation/AuthedStackNav.tsx"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff",metastring:'jsx title="/src/navigation/AuthedStackNav.tsx"',jsx:!0,title:'"/src/navigation/AuthedStackNav.tsx"'},"  import {createStackNavigator} from '@react-navigation/stack';\n  import React from 'react';\n- import {TodoBoard} from 'screens';\n+ import {MainTabNav} from 'navigation/MainTabNav';\n  \n  const nav = createStackNavigator();\n  export const AuthedStackNav: React.FC = () => {\n    return (\n      <nav.Navigator screenOptions={{headerShown: false}}>\n-       <nav.Screen name=\"Todo\" component={TodoBoard} />\n+       <nav.Screen name=\"Main\" component={MainTabNav} />\n      </nav.Navigator>\n    );\n  };\n")),Object(o.b)("p",null,"\u4fee\u6b63\u3067\u304d\u305f\u3089\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002ToDo\u4e00\u89a7\u753b\u9762\u3068\u8a2d\u5b9a\u753b\u9762\u306e\u30bf\u30d6\u5207\u66ff\u304c\u3067\u304d\u305f\u3089\u6210\u529f\u3067\u3059\u3002"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Tab",src:n(283).default})))}b.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return v}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,v=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(v,c(c({ref:t},l),{},{components:n})):r.a.createElement(v,c({ref:t},l))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},281:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/screen-transition-tab-7f40a88c03c80de3cf20b8108c1c6a08.png"},282:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tab_navigation-1081adb57002fd16f93ffbccc1916f4f.png"},283:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tab-dc036a8b449498bb3b59ee72cc133009.png"}}]);