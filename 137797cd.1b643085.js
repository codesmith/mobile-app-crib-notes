(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{165:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,u=m["".concat(c,".").concat(d)]||m[d]||b[d]||o;return n?r.a.createElement(u,i(i({ref:t},p),{},{components:n})):r.a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},214:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/modal-f640db37f9bf9f990a78244c53868698.png"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(165)),c={title:"Modal\u30b9\u30af\u30ea\u30fc\u30f3"},i={unversionedId:"react-native/learn/todo-app/modal",id:"react-native/learn/todo-app/modal",isDocsHomePage:!1,title:"Modal\u30b9\u30af\u30ea\u30fc\u30f3",description:"\u30bf\u30b9\u30af\u767b\u9332\u753b\u9762\u3092\u30e2\u30fc\u30c0\u30eb\u753b\u9762\u3068\u3057\u3066\u8868\u793a\u3057\u307e\u3057\u3087\u3046\u3002",source:"@site/docs/react-native/learn/todo-app/modal.mdx",slug:"/react-native/learn/todo-app/modal",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/modal",version:"current",lastUpdatedAt:1614760195,sidebar:"learn",previous:{title:"useFocusEffect",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/use-focus-effect"},next:{title:"\u5171\u901a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/basic-components"}},l=[],p={toc:l};function s(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u30bf\u30b9\u30af\u767b\u9332\u753b\u9762\u3092\u30e2\u30fc\u30c0\u30eb\u753b\u9762\u3068\u3057\u3066\u8868\u793a\u3057\u307e\u3057\u3087\u3046\u3002\n\u30e2\u30fc\u30c0\u30eb\u306f\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u632f\u308b\u821e\u3044\u304c\u7570\u306a\u308b\u3060\u3051\u3067\u3059\u3002\nStack\u30ca\u30d3\u30b2\u30fc\u30bf\u306e",Object(o.b)("inlineCode",{parentName:"p"},"mode"),"\u5c5e\u6027\u3092",Object(o.b)("inlineCode",{parentName:"p"},"modal"),"\u306b\u5909\u66f4\uff08\u30c7\u30d5\u30a9\u30eb\u30c8\u306f",Object(o.b)("inlineCode",{parentName:"p"},"card"),"\uff09\u3059\u308b\u3053\u3068\u3067\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"React Navigation\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnavigation.org/docs/modal/"}),"Opening a full-screen modal"),"\u306b\u6b21\u306e\u8a18\u8f09\u304c\u3042\u308a\u307e\u3059\u3002"),Object(o.b)("blockquote",{parentName:"div"},Object(o.b)("p",{parentName:"blockquote"},"The modal prop has no effect on Android because full-screen modals don't have any different transition behavior on the platform.")),Object(o.b)("p",{parentName:"div"},"\u753b\u9762\u9077\u79fb\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u5404\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u52d5\u4f5c\u306b\u5f93\u3044\u307e\u3059\u3002\n\u4e0a\u8a18\u3068\u304a\u308a\u3001Android\u306e\u30d5\u30eb\u30b9\u30af\u30ea\u30fc\u30f3\u30e2\u30fc\u30c0\u30eb\u306b\u306f\u7570\u306a\u308b\u30c8\u30e9\u30f3\u30b8\u30b7\u30e7\u30f3\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001",Object(o.b)("inlineCode",{parentName:"p"},"mode"),"\u5c5e\u6027\u306e\u5909\u66f4\u306b\u3088\u308b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u5909\u66f4\u306f\u3042\u308a\u307e\u305b\u3093\u3002"))),Object(o.b)("p",null,"\u3067\u306f\u5b9f\u88c5\u3057\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002\n",Object(o.b)("inlineCode",{parentName:"p"},"AuthedStackNav"),"\u30ca\u30d3\u30b2\u30fc\u30bf\u306b\u6b21\u306e\u4fee\u6b63\u3092\u52a0\u3048\u307e\u3059\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Stack\u30ca\u30d3\u30b2\u30fc\u30bf\u306e",Object(o.b)("inlineCode",{parentName:"li"},"mode"),"\u5c5e\u6027\u3092",Object(o.b)("inlineCode",{parentName:"li"},"modal"),"\u306b\u5909\u66f4"),Object(o.b)("li",{parentName:"ul"},"\u30d8\u30c3\u30c0\u306e\u53f3\u306b\u30af\u30ed\u30fc\u30ba\u30dc\u30bf\u30f3\u3092\u8ffd\u52a0"),Object(o.b)("li",{parentName:"ul"},"\u30d8\u30c3\u30c0\u306e\u80cc\u666f\u3092\u975e\u8868\u793a\uff08",Object(o.b)("inlineCode",{parentName:"li"},"headerTransparent"),"\u3092",Object(o.b)("inlineCode",{parentName:"li"},"true"),"\u306b\u8a2d\u5b9a\uff09")),Object(o.b)("p",null,"\u4fee\u6b63\u91cf\u304c\u591a\u3044\u306e\u3067\u3001\u6b21\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3067",Object(o.b)("inlineCode",{parentName:"p"},"AuthedStackNav.tsx"),"\u3092\u4e0a\u66f8\u304d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'jsx title="/src/navigation/AuthedStackNav.tsx"',jsx:!0,title:'"/src/navigation/AuthedStackNav.tsx"'}),"import {Ionicons} from '@expo/vector-icons';\nimport {createStackNavigator} from '@react-navigation/stack';\nimport {MainTabNav} from 'navigation/MainTabNav';\nimport {AuthedStackParamList} from 'navigation/types';\nimport React, {useCallback, useContext} from 'react';\nimport {Button, ThemeContext} from 'react-native-elements';\nimport {TodoForm} from 'screens';\n\nimport {useAuthedStackNavigation} from './hooks';\n\nconst CloseButton: React.FC = () => {\n  const {theme} = useContext(ThemeContext);\n  const navigation = useAuthedStackNavigation<'TodoForm'>();\n  const onClose = useCallback(() => navigation.goBack(), [navigation]);\n\n  return (\n    <Button\n      type=\"clear\"\n      icon={<Ionicons name=\"md-close\" color={theme.colors?.primary} size={30} />}\n      onPress={onClose}\n    />\n  );\n};\n\nconst nav = createStackNavigator<AuthedStackParamList>();\nexport const AuthedStackNav: React.FC = () => {\n  return (\n    <nav.Navigator screenOptions={{headerShown: false}} initialRouteName=\"Main\" mode=\"modal\">\n      <nav.Screen name=\"Main\" component={MainTabNav} />\n      <nav.Screen\n        name=\"TodoForm\"\n        component={TodoForm}\n        options={{\n          headerShown: true,\n          headerLeft: () => undefined,\n          headerRight: () => <CloseButton />,\n          headerTransparent: true,\n        }}\n      />\n    </nav.Navigator>\n  );\n};\n")),Object(o.b)("p",null,"\u4fee\u6b63\u3067\u304d\u305f\u3089\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u6b21\u306e\u64cd\u4f5c\u304c\u3067\u304d\u305f\u3089\u6210\u529f\u3067\u3059\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u4e0b\u304b\u3089\u30b9\u30e9\u30a4\u30c9\u3059\u308b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3067\u30bf\u30b9\u30af\u767b\u9332\u753b\u9762\u304c\u8868\u793a\uff08iOS\u306e\u5834\u5408\u306e\u307f\uff09"),Object(o.b)("li",{parentName:"ul"},"\u30bf\u30b9\u30af\u767b\u9332\u753b\u9762\u306e\u53f3\u4e0a\u306b\xd7\u30dc\u30bf\u30f3\u304c\u8868\u793a")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Modal",src:n(214).default})))}s.isMDXComponent=!0}}]);