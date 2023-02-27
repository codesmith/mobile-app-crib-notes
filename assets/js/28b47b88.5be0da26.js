"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[480],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95201:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const a={title:"ToDo\u767b\u9332\u753b\u9762"},i=void 0,s={unversionedId:"react-native/learn/todo-app/screens/todo-form",id:"react-native/learn/todo-app/screens/todo-form",title:"ToDo\u767b\u9332\u753b\u9762",description:"ToDo\u767b\u9332\u753b\u9762\u3092\u5b9f\u88c5\u3057\u3066\u3044\u304d\u307e\u3059\u3002",source:"@site/docs/react-native/learn/todo-app/screens/todo-form.mdx",sourceDirName:"react-native/learn/todo-app/screens",slug:"/react-native/learn/todo-app/screens/todo-form",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/todo-form",draft:!1,tags:[],version:"current",lastUpdatedAt:1639050084,formattedLastUpdatedAt:"2021\u5e7412\u67089\u65e5",frontMatter:{title:"ToDo\u767b\u9332\u753b\u9762"},sidebar:"learn",previous:{title:"ToDo\u4e00\u89a7\u753b\u9762",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/todo-board"},next:{title:"useFocusEffect",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/use-focus-effect"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:n,...a}=e;return(0,r.kt)(u,(0,o.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ToDo\u767b\u9332\u753b\u9762\u3092\u5b9f\u88c5\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4fee\u6b63\u91cf\u304c\u591a\u3044\u306e\u3067\u3001\u6b21\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3067",(0,r.kt)("inlineCode",{parentName:"p"},"TodoForm.tsx"),"\u3092\u4e0a\u66f8\u304d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/screens/todo/TodoForm.tsx"',jsx:!0,title:'"/src/screens/todo/TodoForm.tsx"'},"import {useNavigation} from '@react-navigation/native';\nimport {useFormik} from 'formik';\nimport React, {useCallback, useEffect} from 'react';\nimport {Alert, KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';\nimport {Button, Input, Text} from 'react-native-elements';\nimport {TodoService} from 'services';\nimport * as Yup from 'yup';\n\nexport const TodoForm: React.FC = () => {\n  const navigation = useNavigation();\n\n  const onAdd = useCallback<(values: {todo: string}) => void>(\n    async ({todo}) => {\n      await TodoService.postTodo(todo);\n      if (navigation.isFocused()) {\n        navigation.goBack();\n      }\n    },\n    [navigation],\n  );\n\n  const formik = useFormik({\n    initialValues: {todo: ''},\n    validationSchema: Yup.object().shape({\n      todo: Yup.string().required('ToDo\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044'),\n    }),\n    validateOnChange: false,\n    onSubmit: onAdd,\n  });\n\n  useEffect(() => {\n    const unsubscribe = navigation.addListener('beforeRemove', event => {\n      if (!formik.dirty || formik.isSubmitting) {\n        return;\n      }\n      event.preventDefault();\n\n      Alert.alert('\u7834\u68c4\u78ba\u8a8d', '\u5165\u529b\u5185\u5bb9\u304c\u4fdd\u5b58\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\\n\u5165\u529b\u5185\u5bb9\u3092\u7834\u68c4\u3057\u3066\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f', [\n        {text: 'Cancel', style: 'cancel', onPress: () => {}},\n        {\n          text: 'OK',\n          style: 'destructive',\n          onPress: () => navigation.dispatch(event.data.action),\n        },\n      ]);\n    });\n    return unsubscribe;\n  }, [navigation, formik]);\n\n  return (\n    <KeyboardAvoidingView\n      behavior={Platform.select({\n        ios: 'padding',\n        android: undefined,\n      } as const)}\n      style={styles.container}>\n      <View style={styles.form}>\n        <Text h1>ToDo\u767b\u9332</Text>\n        <Input\n          placeholder=\"ToDo\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\"\n          containerStyle={styles.input}\n          autoCapitalize=\"none\"\n          errorMessage={formik.errors.todo}\n          onChangeText={formik.handleChange('todo')}\n          value={formik.values.todo}\n        />\n        <Button\n          disabled={formik.isSubmitting}\n          onPress={() => formik.handleSubmit()}\n          title=\"\u8ffd\u52a0\"\n          buttonStyle={styles.addButton}\n        />\n      </View>\n    </KeyboardAvoidingView>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  form: {\n    flex: 1,\n    alignSelf: 'stretch',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  input: {marginTop: 20, width: '80%'},\n  addButton: {\n    marginTop: 30,\n  },\n});\n\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"onAdd"),"\u3067\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"navigation.goBack()"),"\u3092\u547c\u3076\u524d\u306b\u72b6\u614b\u3092\u5224\u5b9a\u3057\u3066\u3001\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3060\u3051ToDo\u4e00\u89a7\u306b\u623b\u308b\u3088\u3046\u306b\u5236\u5fa1\u3057\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)("p",null,"ToDo\u767b\u9332\u753b\u9762\u3067\u306f\u5909\u66f4\u9014\u4e2d\u306e\u30c7\u30fc\u30bf\u304c\u3042\u3063\u305f\u5834\u5408\u3001\u7834\u68c4\u78ba\u8a8d\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u8868\u793a\u3057\u307e\u3059\u3002\n\u6b21\u306b\u793a\u3059\u306e\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"TodoForm.tsx"),"\u3067\u305d\u308c\u3092\u5b9f\u73fe\u3057\u3066\u3044\u308b\u30b3\u30fc\u30c9\u7b87\u6240\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"  useEffect(() => {\n    const unsubscribe = navigation.addListener('beforeRemove', event => {\n      if (!formik.dirty || formik.isSubmitting) {\n        return;\n      }\n      event.preventDefault();\n\n      Alert.alert('\u7834\u68c4\u78ba\u8a8d', '\u5165\u529b\u5185\u5bb9\u304c\u4fdd\u5b58\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\\n\u5165\u529b\u5185\u5bb9\u3092\u7834\u68c4\u3057\u3066\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f', [\n        {text: 'Cancel', style: 'cancel', onPress: () => {}},\n        {\n          text: 'OK',\n          style: 'destructive',\n          onPress: () => navigation.dispatch(event.data.action),\n        },\n      ]);\n    });\n    return unsubscribe;\n  }, [navigation, formik]);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"navigation"),"\u306b\u30ea\u30b9\u30ca\u30fc\u767b\u9332\u3059\u308b\u3053\u3068\u3067\u3001\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30a4\u30d9\u30f3\u30c8\u306b\u5fdc\u3058\u305f\u51e6\u7406\u3092\u8a18\u8ff0\u3067\u304d\u307e\u3059\u3002\n\u3053\u3053\u3067\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"beforeRemove"),"\u30a4\u30d9\u30f3\u30c8\u306b\u5bfe\u3057\u3066\u30ea\u30b9\u30ca\u30fc\u767b\u9332\u3057\u3066\u3044\u307e\u3059\u3002\n\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306f\u30e6\u30fc\u30b6\u304c\u753b\u9762\u3092\u96e2\u308c\u308b\u3068\u304d\u306b\u767a\u751f\u3057\u307e\u3059\u3002\n\u3053\u308c\u3092\u5229\u7528\u3057\u3066\u3001\u6b21\u306e\u6761\u4ef6\u6642\u306b\u304a\u3044\u3066\u30a4\u30d9\u30f3\u30c8\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u3066\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"event.preventDefault()"),"\uff09\u7834\u68c4\u78ba\u8a8d\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30d5\u30a9\u30fc\u30e0\u306b\u5165\u529b\u3042\u308a\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"formik.dirty"),"\u304c",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u30d5\u30a9\u30fc\u30e0\u304c\u30b5\u30d6\u30df\u30c3\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"formik.isSubmitting"),"\u304c",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"\uff09")),(0,r.kt)("p",null,"\u300c\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30a4\u30d9\u30f3\u30c8\u300d\u3001\u304a\u3088\u3073\u300c\u623b\u308b\u3092\u9632\u3050\u300d\u306e\u8a73\u7d30\u306f\u3001\u6b21\u306eReact Navigation\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/navigation-events/"},"Navigation events")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/preventing-going-back/"},"Preventing going back"))),(0,r.kt)("p",null,"\u4fee\u6b63\u3067\u304d\u305f\u3089\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u6b21\u306e\u64cd\u4f5c\u304c\u3067\u304d\u305f\u3089\u6210\u529f\u3067\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ToDo\u767b\u9332\u753b\u9762\u3067ToDo\u304c\u767b\u9332\u3067\u304d\u308b"),(0,r.kt)("li",{parentName:"ul"},"ToDo\u767b\u9332\u753b\u9762\u3067\u5909\u66f4\u9014\u4e2d\u306e\u30c7\u30fc\u30bf\u304c\u3042\u3063\u305f\u5834\u5408\u3001\u623b\u308b\u64cd\u4f5c\u3067\u7834\u68c4\u78ba\u8a8d\u30c0\u30a4\u30a2\u30ed\u30b0\u304c\u8868\u793a\u3055\u308c\u308b")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u73fe\u6642\u70b9\u3067\u306f\u767b\u9332\u3057\u305fToDo\u304cToDo\u4e00\u89a7\u753b\u9762\u306b\u8868\u793a\u3055\u308c\u307e\u305b\u3093\u3002\n\u6b21\u30bb\u30af\u30b7\u30e7\u30f3\u306e",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/use-focus-effect"},"useFocusEffect"),"\u3067\u305d\u306e\u4e0d\u5177\u5408\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TodoForm",src:t(26468).Z,width:"1080",height:"2220"})))}d.isMDXComponent=!0},26468:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/todo-form-3ba1c5704a109d1f2d9d7de47aba70c9.png"}}]);