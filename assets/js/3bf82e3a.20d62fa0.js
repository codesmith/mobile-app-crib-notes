"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3231],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3001:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],s={title:"\u5171\u901a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"},c=void 0,p={unversionedId:"react-native/learn/todo-app/screens/basic-components",id:"react-native/learn/todo-app/screens/basic-components",isDocsHomePage:!1,title:"\u5171\u901a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",description:"\u3053\u3053\u3067\u306f\u5197\u9577\u306a\u7b87\u6240\u3092\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0\u3057\u3066\u3044\u304d\u307e\u3059\u3002",source:"@site/docs/react-native/learn/todo-app/screens/basic-components.mdx",sourceDirName:"react-native/learn/todo-app/screens",slug:"/react-native/learn/todo-app/screens/basic-components",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/basic-components",tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"\u5171\u901a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"},sidebar:"learn",previous:{title:"useFocusEffect",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/use-focus-effect"},next:{title:"\u30ed\u30b4",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/logo"}},l=[{value:"KeyboardAvoidingView\u306e\u5171\u901a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5316",id:"keyboardavoidingview\u306e\u5171\u901a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5316",children:[],level:2}],m={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u3053\u3053\u3067\u306f\u5197\u9577\u306a\u7b87\u6240\u3092\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"keyboardavoidingview\u306e\u5171\u901a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5316"},"KeyboardAvoidingView\u306e\u5171\u901a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5316"),(0,i.kt)("p",null,"\u73fe\u5728\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"KeyboardAvoidingView"),"\u306f\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3068ToDo\u767b\u9332\u753b\u9762\u306e\u4e8c\u304b\u6240\u3067\u4f7f\u7528\u3057\u3066\u304a\u308a\u3001\u3044\u305a\u308c\u3082",(0,i.kt)("inlineCode",{parentName:"p"},"behavior"),"\u306b\u540c\u69d8\u306e\u30ad\u30fc\u30dc\u30fc\u30c9\u52d5\u4f5c\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\n\u3053\u3053\u306b\u8ffd\u52a0\u3084\u5909\u66f4\u304c\u751f\u3058\u305f\u5834\u5408\u3001\u5909\u66f4\u304c\u8907\u6570\u7b87\u6240\u306b\u307e\u305f\u304c\u308a\u4fee\u6b63\u6f0f\u308c\u306a\u3069\u306e\u30ea\u30b9\u30af\u304c\u751f\u3058\u307e\u3059\u3002\n\u305d\u3053\u3067\u3001\u3053\u306e\u7b87\u6240\u3092\u5171\u901a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5316\u3059\u308b\u3053\u3068\u3067\u4e0a\u8a18\u554f\u984c\u306b\u5bfe\u51e6\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u4eca\u56de\u4f5c\u6210\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u6c4e\u7528\u6027\u304c\u3042\u308b\u305f\u3081\u3001",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/todo-app/app-project-desc"},"ToDo\u30a2\u30d7\u30ea\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u6e96\u5099"),"\u306b\u793a\u3059\u3068\u304a\u308a\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"components/basics"),"\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002\n\u6b21\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/src/components/basics/view/KeyboardView.tsx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/src/components/basics/view/index.ts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/src/components/basics/index.ts"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/components/basics/view/KeyboardView.tsx"',jsx:!0,title:'"/src/components/basics/view/KeyboardView.tsx"'},"import React, {ComponentProps} from 'react';\nimport {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';\n\ntype KeyboardViewProps = ComponentProps<typeof KeyboardAvoidingView>;\n\nconst defaultKeyboardAvoidingViewBehavior = Platform.select({\n  ios: 'padding',\n  android: undefined,\n} as const);\n\nexport const KeyboardView: React.FC<KeyboardViewProps> = ({\n  children,\n  behavior = defaultKeyboardAvoidingViewBehavior,\n  style,\n  ...props\n}) => {\n  return (\n    <KeyboardAvoidingView behavior={behavior} style={StyleSheet.flatten([styles.container, style])} {...props}>\n      {children}\n    </KeyboardAvoidingView>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/components/basics/view/index.ts"',jsx:!0,title:'"/src/components/basics/view/index.ts"'},"export * from './KeyboardView';\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/components/basics/index.ts"',jsx:!0,title:'"/src/components/basics/index.ts"'},"export * from './view';\n")),(0,i.kt)("p",null,"\u8ffd\u52a0\u304c\u51fa\u6765\u305f\u3089",(0,i.kt)("inlineCode",{parentName:"p"},"KeyboardAvoidingView"),"\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u7b87\u6240\u3092\u4fee\u6b63\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u6b21\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/src/screens/auth/Login.tsx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/src/screens/todo/TodoForm.tsx"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="/src/screens/auth/Login.tsx"',title:'"/src/screens/auth/Login.tsx"'},"+ import {KeyboardView} from 'components/basics';\n  import {useUserContext} from 'contexts/UserContext';\n  import {useFormik} from 'formik';\n  import React, {useCallback} from 'react';\n- import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';\n+ import {StyleSheet, View} from 'react-native';\n  import {Button, Input} from 'react-native-elements';\n  import * as Yup from 'yup';\n  \n  export const Login: React.FC = () => {\n  /* \uff5e\u7701\u7565\uff5e */\n  \n    return (\n-     <KeyboardAvoidingView\n-       behavior={Platform.select({\n-         ios: 'padding',\n-         android: undefined,\n-       } as const)}\n-       style={styles.container}>\n+     <KeyboardView>\n\n  /* \uff5e\u7701\u7565\uff5e */\n\n-     </KeyboardAvoidingView>\n+     </KeyboardView>\n    );\n  };\n  \n  const styles = StyleSheet.create({\n-   container: {\n-     flex: 1,\n-   },\n  /* \uff5e\u7701\u7565\uff5e */\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="/src/screens/todo/TodoForm.tsx"',title:'"/src/screens/todo/TodoForm.tsx"'},"  import {useNavigation} from '@react-navigation/native';\n+ import {KeyboardView} from 'components/basics';\n  import {useFormik} from 'formik';\n  import React, {useCallback, useEffect} from 'react';\n- import {Alert, KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';\n+ import {Alert, StyleSheet, View} from 'react-native';\n  import {Button, Input, Text} from 'react-native-elements';\n  import {TodoService} from 'services';\n  import * as Yup from 'yup';\n  \n  export const TodoForm: React.FC = () => {\n  /* \uff5e\u7701\u7565\uff5e */\n  \n    return (\n-     <KeyboardAvoidingView\n-       behavior={Platform.select({\n-         ios: 'padding',\n-         android: undefined,\n-       } as const)}\n-       style={styles.container}>\n+     <KeyboardView>\n\n  /* \uff5e\u7701\u7565\uff5e */\n\n-     </KeyboardAvoidingView>\n+     </KeyboardView>\n    );\n  };\n  \n  const styles = StyleSheet.create({\n-   container: {\n-     flex: 1,\n-   },\n  /* \uff5e\u7701\u7565\uff5e */\n")),(0,i.kt)("p",null,"\u4fee\u6b63\u3067\u304d\u305f\u3089\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u4ee5\u524d\u3068\u5909\u308f\u3089\u305a\u52d5\u4f5c\u3067\u304d\u305f\u3089\u6210\u529f\u3067\u3059\u3002"))}d.isMDXComponent=!0}}]);