(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(165)),i={title:"\u8a8d\u8a3c\u5236\u5fa1"},c={unversionedId:"react-native/learn/todo-app/auth",id:"react-native/learn/todo-app/auth",isDocsHomePage:!1,title:"\u8a8d\u8a3c\u5236\u5fa1",description:"\u8a8d\u8a3c\u95a2\u9023\u306e\u90e8\u54c1",source:"@site/docs/react-native/learn/todo-app/auth.mdx",slug:"/react-native/learn/todo-app/auth",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/auth",version:"current",lastUpdatedAt:1614760195,sidebar:"learn",previous:{title:"\u4eee\u60f3\u30ad\u30fc\u30dc\u30fc\u30c9\u306e\u5236\u5fa1",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/keyboard-avoiding-view"},next:{title:"\u78ba\u8a8d\u30c0\u30a4\u30a2\u30ed\u30b0",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/alert"}},s=[{value:"\u8a8d\u8a3c\u95a2\u9023\u306e\u90e8\u54c1",id:"\u8a8d\u8a3c\u95a2\u9023\u306e\u90e8\u54c1",children:[]},{value:"\u8a8d\u8a3c\u30d5\u30ed\u30fc",id:"\u8a8d\u8a3c\u30d5\u30ed\u30fc",children:[]}],l={toc:s};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u8a8d\u8a3c\u95a2\u9023\u306e\u90e8\u54c1"},"\u8a8d\u8a3c\u95a2\u9023\u306e\u90e8\u54c1"),Object(o.b)("p",null,"\u6b21\u306f\u8a8d\u8a3c\u5236\u5fa1\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002\n\u307e\u305a\u306f\u8a8d\u8a3c\u5236\u5fa1\u306b\u5fc5\u8981\u306a\u90e8\u54c1\u3092\u7528\u610f\u3057\u307e\u3059\u3002"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u7528\u610f\u3059\u308b\u90e8\u54c1\u306f",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://fintan-contents.github.io/spa-restapi-handson/"}),"Web\u30d9\u30fc\u30b9\u306e\u30cf\u30f3\u30ba\u30aa\u30f3"),"\u3092\u53c2\u8003\u306b\u3057\u3066\u3044\u307e\u3059\u3002\n\u305d\u3053\u3067\u7528\u610f\u3055\u308c\u3066\u3044\u308b",Object(o.b)("inlineCode",{parentName:"p"},"BackendService.ts"),"\u3092\u6b21\u306e\u3068\u304a\u308a\u6a5f\u80fd\u5206\u5272\u3057\u3066\u3044\u308b\u70b9\u3092\u9664\u304d\u3001\u307b\u307c\u540c\u7b49\u6a5f\u80fd\u3067\u3059\u3002"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AuthService"),": \u8a8d\u8a3c\u6a5f\u80fd"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TodoService"),": ToDo\u6a5f\u80fd")),Object(o.b)("p",{parentName:"div"},"\u4e0a\u8a18\u7406\u7531\u304b\u3089\u3001\u672c\u30cf\u30f3\u30ba\u30aa\u30f3\u3067\u306e\u90e8\u54c1\u8aac\u660e\u306f\u7701\u7565\u3057\u307e\u3059\u3002"))),Object(o.b)("p",null,"\u6b21\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/services/AuthService.ts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/services/index.ts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/contexts/UserContext.tsx"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'jsx title="/src/services/AuthService.ts"',jsx:!0,title:'"/src/services/AuthService.ts"'}),"const refreshCsrfToken = async () => {};\n\nconst signup = async (userName: string, password: string) => {\n  return Promise.resolve();\n};\n\nconst login = async (userName: string, password: string) => {\n  return Promise.resolve();\n};\n\nconst logout = async () => {\n  return Promise.resolve();\n};\n\nexport const AuthService = {\n  signup,\n  login,\n  logout,\n  refreshCsrfToken,\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'jsx title="/src/services/index.ts"',jsx:!0,title:'"/src/services/index.ts"'}),"export * from './AuthService';\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'jsx title="/src/contexts/UserContext.tsx"',jsx:!0,title:'"/src/contexts/UserContext.tsx"'}),"import React, {useContext, useState} from 'react';\nimport {AuthService} from 'services/AuthService';\n\nexport class AccountConflictError {}\n\nexport class AuthenticationFailedError {}\n\ninterface ContextValueType {\n  signup: (userName: string, password: string) => Promise<void | AccountConflictError>;\n  login: (userName: string, password: string) => Promise<void | AuthenticationFailedError>;\n  logout: () => Promise<void>;\n  userName: string;\n  isLoggedIn: boolean;\n}\n\nexport const UserContext = React.createContext<ContextValueType>({} as ContextValueType);\n\nexport const useUserContext = () => useContext(UserContext);\n\nexport const UserContextProvider: React.FC = ({children}) => {\n  const [userName, setUserName] = useState<string>('');\n\n  const contextValue: ContextValueType = {\n    signup: async (userName, password) => {\n      // TODO::\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306f\u672a\u5b9f\u88c5\n      await AuthService.signup(userName, password);\n    },\n    login: async (userName, password) => {\n      // TODO::\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306f\u672a\u5b9f\u88c5\n      await AuthService.login(userName, password);\n      await AuthService.refreshCsrfToken();\n      setUserName(userName);\n    },\n    logout: async () => {\n      // TODO::\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306f\u672a\u5b9f\u88c5\n      await AuthService.logout();\n      await AuthService.refreshCsrfToken();\n      setUserName('');\n    },\n    userName,\n    isLoggedIn: userName !== '',\n  };\n\n  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;\n};\n")),Object(o.b)("h2",{id:"\u8a8d\u8a3c\u30d5\u30ed\u30fc"},"\u8a8d\u8a3c\u30d5\u30ed\u30fc"),Object(o.b)("p",null,"React Navigation\u3067\u306f\u3001\u8a8d\u8a3c\u72b6\u614b\u306b\u5fdc\u3058\u3066\u30b9\u30bf\u30c3\u30af\u5b9a\u7fa9\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u305d\u306e\u30b3\u30fc\u30c9\u4f8b\u3092\u6b21\u306b\u793a\u3057\u307e\u3059\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),'isSignedIn ? (\n  <>\n    <Stack.Screen name="Home" component={HomeScreen} />\n    <Stack.Screen name="UserSettings" component={SettingsScreen} />\n  </>\n) : (\n  <>\n    <Stack.Screen name="Welcome" component={SignInScreen} />\n    <Stack.Screen name="Login" component={SignUpScreen} />\n  </>\n)\n')),Object(o.b)("p",null,"\u3053\u306e\u65b9\u6cd5\u306f\u3001React Navigation\u306e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u7d39\u4ecb\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u3067\u3059\u3002\nToDo\u30a2\u30d7\u30ea\u3067\u3082\u3053\u308c\u306b\u5f93\u3044\u3001\u8a8d\u8a3c\u5236\u5fa1\u3092\u7d44\u307f\u8fbc\u3093\u3067\u3044\u304d\u307e\u3059\u3002"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u8a8d\u8a3c\u30d5\u30ed\u30fc\u306e\u8a73\u7d30\u306a\u8aac\u660e\u306f\u3001React Navigation\u306e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u3042\u308b",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnavigation.org/docs/auth-flow"}),"Authentication flows"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),Object(o.b)("p",null,"\u4fee\u6b63\u30a4\u30e1\u30fc\u30b8\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\uff08\u4eca\u306e\uff09",Object(o.b)("inlineCode",{parentName:"li"},"RootStack"),"\u3092\u672a\u8a8d\u8a3c\u6642\u306e\u753b\u9762\u3092\u5b9a\u7fa9\u3059\u308b",Object(o.b)("inlineCode",{parentName:"li"},"UnauthedStack"),"\u306b\u5909\u66f4"),Object(o.b)("li",{parentName:"ul"},"\u8a8d\u8a3c\u6642\u306e\u753b\u9762\u3092\u5b9a\u7fa9\u3059\u308b",Object(o.b)("inlineCode",{parentName:"li"},"AuthedStack"),"\u3092\u8ffd\u52a0"),Object(o.b)("li",{parentName:"ul"},"\u8a8d\u8a3c\u72b6\u614b\u306b\u3088\u308a\u30b9\u30bf\u30c3\u30af\u5b9a\u7fa9\u3092\u5207\u308a\u66ff\u3048\u308b",Object(o.b)("inlineCode",{parentName:"li"},"RootStack"),"\u3092\u30eb\u30fc\u30c8\u306b\u8ffd\u52a0"),Object(o.b)("li",{parentName:"ul"},"\u8a8d\u8a3c\u6642\u306b\u8868\u793a\u3055\u308c\u308b",Object(o.b)("inlineCode",{parentName:"li"},"UserSettings"),"\u753b\u9762\u3092\u5b9a\u7fa9")),Object(o.b)("p",null,Object(o.b)("img",{alt:"AuthStack",src:n(259).default})),Object(o.b)("p",null,"\u307e\u305a\u306f",Object(o.b)("inlineCode",{parentName:"p"},"UserSettings"),"\u753b\u9762\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\n\u6b21\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u30fb\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/screens/settings/UserSetting.tsx")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/screens/settings/index.ts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/screens/index.ts"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'jsx title="/src/screens/settings/UserSetting.tsx"',jsx:!0,title:'"/src/screens/settings/UserSetting.tsx"'}),"import {useUserContext} from 'contexts/UserContext';\nimport React, {useCallback} from 'react';\nimport {StyleSheet, View} from 'react-native';\nimport {Button} from 'react-native-elements';\n\nexport const UserSetting: React.FC = () => {\n  const userContext = useUserContext();\n\n  const onLogout = useCallback(() => userContext.logout(), [userContext]);\n\n  return (\n    <View style={styles.container} testID=\"screen/main/setting\">\n      <Button type=\"clear\" onPress={onLogout} title=\"\u30ed\u30b0\u30a2\u30a6\u30c8\" />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'jsx title="/src/screens/settings/index.ts"',jsx:!0,title:'"/src/screens/settings/index.ts"'}),"export * from './UserSetting';\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff",metastring:'title="/src/screens/index.ts"',title:'"/src/screens/index.ts"'}),"  export * from './auth';\n  export * from './home';\n  export * from './instructions';\n+ export * from './settings';\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"UserSettings"),"\u753b\u9762\u306b\u306f\u30ed\u30b0\u30a2\u30a6\u30c8\u30dc\u30bf\u30f3\u306e\u307f\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002\n\u30ed\u30b0\u30a2\u30a6\u30c8\u30dc\u30bf\u30f3\u3092\u62bc\u4e0b\u3059\u308b\u3068\u3001",Object(o.b)("inlineCode",{parentName:"p"},"userContext.logout()"),"\u3092\u547c\u3073\u51fa\u3057\u3066\u8a8d\u8a3c\u72b6\u614b\u3092\u89e3\u9664\u3057\u307e\u3059\u3002"),Object(o.b)("p",null,"\u6b21\u306b\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u5b9a\u7fa9\u3092\u4fee\u6b63\u3057\u307e\u3059\u3002\n\u4fee\u6b63\u7b87\u6240\u306f",Object(o.b)("inlineCode",{parentName:"p"},"/src/navigation/RootStackNav.tsx"),"\u3067\u3059\u3002\n\u4fee\u6b63\u91cf\u304c\u591a\u3044\u306e\u3067\u3001\u6b21\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3067",Object(o.b)("inlineCode",{parentName:"p"},"RootStackNav.tsx"),"\u3092\u4e0a\u66f8\u304d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'jsx title="/src/navigation/RootStackNav.tsx"',jsx:!0,title:'"/src/navigation/RootStackNav.tsx"'}),"import {NavigatorScreenParams, RouteProp, useNavigation} from '@react-navigation/native';\nimport {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack';\nimport {useUserContext} from 'contexts/UserContext';\nimport React from 'react';\nimport {Button} from 'react-native-elements';\nimport {Instructions, Login, UserSetting, Welcome} from 'screens';\n\ntype UnauthedStackParamList = {\n  Welcome: undefined;\n  Login: undefined;\n  Instructions: undefined;\n};\n\nconst nav = createStackNavigator<UnauthedStackParamList>();\nconst HeaderRight: React.FC = () => {\n  const navigation = useNavigation();\n  return <Button type=\"clear\" onPress={() => navigation.navigate('Login')} title=\"\u30ed\u30b0\u30a4\u30f3\" />;\n};\nconst createScreenOptions: (props: {\n  route: RouteProp<UnauthedStackParamList, keyof UnauthedStackParamList>;\n}) => StackNavigationOptions = ({route}) => {\n  if (route.name === 'Login') {\n    return {};\n  } else {\n    return {headerRight: () => <HeaderRight />};\n  }\n};\n\nconst UnauthedStackNav: React.FC = () => {\n  return (\n    <nav.Navigator initialRouteName=\"Welcome\" screenOptions={createScreenOptions}>\n      <nav.Screen\n        name=\"Welcome\"\n        component={Welcome}\n        options={{\n          headerTitle: 'Welcome',\n        }}\n      />\n      <nav.Screen\n        name=\"Login\"\n        component={Login}\n        options={{\n          headerTitle: '\u30ed\u30b0\u30a4\u30f3',\n        }}\n      />\n      <nav.Screen name=\"Instructions\" component={Instructions} />\n    </nav.Navigator>\n  );\n};\n\ntype AuthedStackParamList = {\n  UserSetting: undefined;\n};\n\nconst authNav = createStackNavigator<AuthedStackParamList>();\nconst AuthedStackNav: React.FC = () => {\n  return (\n    <authNav.Navigator screenOptions={{headerShown: false}}>\n      <authNav.Screen name=\"UserSetting\" component={UserSetting} />\n    </authNav.Navigator>\n  );\n};\n\ntype RootStackParamList = {\n  Authed: NavigatorScreenParams<AuthedStackParamList>;\n  Unauthed: NavigatorScreenParams<UnauthedStackParamList>;\n};\n\nconst rootNav = createStackNavigator<RootStackParamList>();\nexport const RootStackNav: React.FC = () => {\n  const userContext = useUserContext();\n  return (\n    <rootNav.Navigator screenOptions={{headerShown: false}}>\n      {userContext.isLoggedIn ? (\n        <rootNav.Screen name=\"Authed\" component={AuthedStackNav} />\n      ) : (\n        <rootNav.Screen name=\"Unauthed\" component={UnauthedStackNav} />\n      )}\n    </rootNav.Navigator>\n  );\n};\n")),Object(o.b)("p",null,"\u6700\u5f8c\u306b\u30ed\u30b0\u30a4\u30f3\u6a5f\u80fd\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\n\u6b21\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/screens/auth/Login.tsx")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/App.tsx"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff",metastring:'title="/src/screens/auth/Login.tsx"',title:'"/src/screens/auth/Login.tsx"'}),"- import {useNavigation} from '@react-navigation/native';\n+ import {useUserContext} from 'contexts/UserContext';\n  import {useFormik} from 'formik';\n  import React, {useCallback} from 'react';\n  import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';\n  import {Button, Input} from 'react-native-elements';\n  import * as Yup from 'yup';\n  \n  export const Login: React.FC = () => {\n-   const navigation = useNavigation();\n-   const login = useCallback(() => {\n-     navigation.goBack();\n-   }, [navigation]);\n+   const userContext = useUserContext();\n+ \n+   const login = useCallback(\n+     (values: {name: string; password: string}) => {\n+       userContext.login(values.name, values.password).then(\n+         () => {},\n+         () => {},\n+       );\n+     },\n+     [userContext],\n+   );\n  /* \uff5e\u7701\u7565\uff5e */  \n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff",metastring:'title="/src/App.tsx"',title:'"/src/App.tsx"'}),"  import {NavigationContainer} from '@react-navigation/native';\n+ import {UserContextProvider} from 'contexts/UserContext';\n  import {RootStackNav} from 'navigation';\n  import React from 'react';\n  \n  export const App = () => {\n    return (\n+     <UserContextProvider>\n        <NavigationContainer>\n          <RootStackNav />\n        </NavigationContainer>\n+     </UserContextProvider>\n    );\n  };\n")),Object(o.b)("p",null,"\u4fee\u6b63\u3067\u304d\u305f\u3089\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u6b21\u306e\u64cd\u4f5c\u304c\u3067\u304d\u305f\u3089\u6210\u529f\u3067\u3059\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u304b\u3089\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u30ed\u30b0\u30a2\u30a6\u30c8\u753b\u9762\u304c\u8868\u793a"),Object(o.b)("li",{parentName:"ul"},"\u30ed\u30b0\u30a2\u30a6\u30c8\u753b\u9762\u3067\u30ed\u30b0\u30a2\u30a6\u30c8\u3059\u308b\u3068Welcome\u753b\u9762\u304c\u8868\u793a")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Logout",src:n(260).default})))}p.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},259:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/auth_flows-a70e616e6facb23b27b38524d860f9d7.png"},260:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/logout-e02bd71610f77c0d56a0ff90ec6731f2.png"}}]);