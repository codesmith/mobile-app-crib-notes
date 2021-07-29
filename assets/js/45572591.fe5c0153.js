"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[6335],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||r;return n?o.createElement(d,i(i({ref:t},l),{},{components:n})):o.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6495:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i={title:"useFocusEffect"},c=void 0,s={unversionedId:"react-native/learn/todo-app/screens/use-focus-effect",id:"react-native/learn/todo-app/screens/use-focus-effect",isDocsHomePage:!1,title:"useFocusEffect",description:"\u524d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306fToDo\u767b\u9332\u753b\u9762\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002",source:"@site/docs/react-native/learn/todo-app/screens/use-focus-effect.mdx",sourceDirName:"react-native/learn/todo-app/screens",slug:"/react-native/learn/todo-app/screens/use-focus-effect",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/use-focus-effect",version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"useFocusEffect"},sidebar:"learn",previous:{title:"ToDo\u767b\u9332\u753b\u9762",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/todo-form"},next:{title:"\u5171\u901a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/basic-components"}},p=[],l={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/todo-form"},"\u524d\u30bb\u30af\u30b7\u30e7\u30f3"),"\u3067\u306fToDo\u767b\u9332\u753b\u9762\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002\n\u3057\u304b\u3057\u3001\u73fe\u6642\u70b9\u3067\u306f\u767b\u9332\u3057\u305fToDo\u304cToDo\u4e00\u89a7\u753b\u9762\u306b\u8868\u793a\u3055\u308c\u307e\u305b\u3093\u3002\n\u3053\u3053\u3067\u306f\u305d\u306e\u4e0d\u5177\u5408\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u306a\u305c\u8ffd\u52a0\u3057\u305fToDo\u304c\u8868\u793a\u3055\u308c\u306a\u3044\u306e\u3067\u3057\u3087\u3046\u304b\u3002\n\u6b21\u306b\u793a\u3059\u306e\u306fToDo\u4e00\u89a7\u753b\u9762\u306e\u30b3\u30fc\u30c9\u7b87\u6240\u3067\u3059\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u30d5\u30c3\u30af\u3092\u4f7f\u7528\u3057\u3066\u3001\u753b\u9762\u30de\u30a6\u30f3\u30c8\u6642\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"TodoService.getTodos"),"\u3092\u547c\u3073\u51fa\u3057\u3066ToDo\u4e00\u89a7\u3092\u53d6\u5f97\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"  useEffect(() => {\n    let isActive = true;\n    TodoService.getTodos()\n      .then((response) => {\n        if (isActive) {\n          setTodos(response);\n        }\n      })\n      .catch(() => {});\n    return () => {\n      isActive = false;\n    };\n  }, []);\n")),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e\u5834\u5408\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u30d5\u30c3\u30af\u306e\u51e6\u7406\u306f\u753b\u9762\u30de\u30a6\u30f3\u30c8\u6642\u306b\u3057\u304b\u5b9f\u884c\u3055\u308c\u307e\u305b\u3093\u3002\nToDo\u767b\u9332\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u6642\u3082\u3001ToDo\u4e00\u89a7\u753b\u9762\u306f\u30b9\u30bf\u30c3\u30af\u306e\u4e0b\u306b\u96a0\u308c\u3066\u751f\u304d\u3066\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\uff08ToDo\u767b\u9332\u753b\u9762\u304c\u7834\u68c4\u3055\u308c\u3066\uff09ToDo\u4e00\u89a7\u753b\u9762\u304c\u518d\u8868\u793a\u3055\u308c\u305f\u5834\u5408\u3001\u753b\u9762\u30de\u30a6\u30f3\u30c8\u6642\u3067\u306f\u306a\u3044\u305f\u3081",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u30d5\u30c3\u30af\u306e\u51e6\u7406\u304c\u52d5\u4f5c\u3057\u307e\u305b\u3093\u3002\n\u305d\u308c\u304cToDo\u4e00\u89a7\u753b\u9762\u306bToDo\u304c\u8868\u793a\u3055\u308c\u306a\u3044\u7406\u7531\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u4eca\u56de\u306e\u5834\u5408\u3001\u753b\u9762\u306b\u30d5\u30a9\u30fc\u30ab\u30b9\u79fb\u3063\u305f\uff08\u753b\u9762\u304c\u518d\u8868\u793a\u3055\u308c\u305f\uff09\u969b\u306b\u3082ToDo\u4e00\u89a7\u3092\u53d6\u5f97\u3057\u305f\u3044\u3067\u3059\u3002\n\u3053\u306e\u3088\u3046\u306a\u5834\u5408\u306e\u305f\u3081\u3001React Navigation\u3067\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"useFocusEffect"),"\u30d5\u30c3\u30af\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"useFocusEffect"),"\u30d5\u30c3\u30af\u306f\u753b\u9762\u30d5\u30a9\u30fc\u30ab\u30b9\u6642\u306b\u51e6\u7406\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8a73\u7d30\u306f\u3001React Navigation\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/use-focus-effect/"},"useFocusEffect"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,r.kt)("p",null,"\u3067\u306f\u4fee\u6b63\u3057\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"/src/screens/todo/TodoBoard.tsx"),"\u3092\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="/src/screens/todo/TodoBoard.tsx"',title:'"/src/screens/todo/TodoBoard.tsx"'},"- import {useNavigation} from '@react-navigation/native';\n+ import {useNavigation, useFocusEffect} from '@react-navigation/native';\n  import {FilterType, TodoFilter, TodoList} from 'components/parts';\n- import React, {useContext, useEffect, useState} from 'react';\n+ import React, {useCallback, useContext, useState} from 'react';\n  import {Alert, StyleSheet, View} from 'react-native';\n  import {Icon, ThemeContext} from 'react-native-elements';\n  import {Todo, TodoService} from 'services';\n  \n  /* \uff5e\u7701\u7565\uff5e */  \n  \n  export const TodoBoard: React.FC = () => {\n    const {theme} = useContext(ThemeContext);\n    const navigation = useNavigation();\n    const [todos, setTodos] = useState<Todo[]>([]);\n    const [filterType, setFilterType] = useState<FilterType>(FilterType.ALL);\n  \n-   useEffect(() => {\n+   useFocusEffect(\n+     useCallback(() => {\n        let isActive = true;\n  \n        TodoService.getTodos()\n          .then((response) => {\n            if (isActive) {\n              setTodos(response);\n            }\n          })\n          .catch(() => {});\n  \n        return () => {\n          isActive = false;\n        };\n-   }, []);\n+     }, []),\n+   );\n\n  /* \uff5e\u7701\u7565\uff5e */  \n")),(0,r.kt)("p",null,"\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback"),"\u3067\u30e9\u30c3\u30d7\u3057\u3066\u3044\u308b\u70b9\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"useFocusEffect"),"\u306f\u3001\u753b\u9762\u306b\u30d5\u30a9\u30fc\u30ab\u30b9\u304c\u3042\u308b\u5834\u5408\u306b\u306e\u307f\u5b9f\u884c\u3055\u308c\u308b\u3068\u3044\u3046\u70b9\u3092\u9664\u304d\u3001React\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u30d5\u30c3\u30af\u306b\u4f3c\u3066\u3044\u307e\u3059\u3002\n\u6700\u521d\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\uff08\u753b\u9762\u306b\u30d5\u30a9\u30fc\u30ab\u30b9\u304c\u3042\u308b\u5834\u5408\uff09\u3060\u3051\u3067\u306f\u306a\u304f\u3001\u4f9d\u5b58\u95a2\u4fc2\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408\u306b\u3082\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback"),"\u3067\u30e9\u30c3\u30d7\u3057\u306a\u3044\u3068\u3001\u753b\u9762\u30d5\u30a9\u30fc\u30ab\u30b9\u6642\u306e\u3059\u3079\u3066\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3067\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u304c\u5b9f\u884c\u3055\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u3002\n\u4e0a\u8a18\u51e6\u7406\u306e\u5834\u5408\u3001\u753b\u9762\u304cState\u5909\u66f4\u3055\u308c\u305f\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u304c\u8d70\u308b\u305f\u3081\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback"),"\u3067\u30e9\u30c3\u30d7\u3057\u306a\u3044\u3068\u7121\u9650\u306b\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3057\u3066\u3057\u307e\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u307e\u305f\u3001\u623b\u308a\u5024\u306b\u95a2\u6570\u3092\u8fd4\u3057\u3066\u3044\u308b\u70b9\u306b\u3082\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u3053\u308c\u306f\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7\u95a2\u6570\u3068\u547c\u3070\u308c\u308b\u3082\u306e\u3067\u3001\u6b21\u306e\u5834\u5408\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u5b58\u95a2\u4fc2\u304c\u5909\u66f4\u3055\u308c\u3066\u65b0\u3057\u3044\u51e6\u7406\u304c\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u3055\u308c\u305f"),(0,r.kt)("li",{parentName:"ul"},"\u753b\u9762\u304c\u30a2\u30f3\u30de\u30a6\u30f3\u30c8\u3055\u308c\u305f"),(0,r.kt)("li",{parentName:"ul"},"\u753b\u9762\u304c\u30d5\u30a9\u30fc\u30ab\u30b9\u3092\u5931\u3063\u305f")),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u4e0a\u8a18\u5834\u5408\u306b\u753b\u9762State\u3092\u6291\u6b62\u3059\u308b\u76ee\u7684\u3067\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7\u95a2\u6570\u3092\u6d3b\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8a73\u7d30\u306f\u3001React Native\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/use-focus-effect/#running-asynchronous-effects"},"Running asynchronous effects"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,r.kt)("p",null,"\u4fee\u6b63\u3067\u304d\u305f\u3089\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002\nToDo\u767b\u9332\u753b\u9762\u3067\u767b\u9332\u3057\u305fToDo\u304cToDo\u4e00\u89a7\u753b\u9762\u306b\u8868\u793a\u3067\u304d\u305f\u3089\u6210\u529f\u3067\u3059\u3002"))}u.isMDXComponent=!0}}]);