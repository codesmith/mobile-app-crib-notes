"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3407],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(o),u=r,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return o?n.createElement(g,a(a({ref:t},d),{},{components:o})):n.createElement(g,a({ref:t},d))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},12503:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const i={title:"ToDo\u66f4\u65b0\u4e2d\u306e\u8868\u793a"},a=void 0,s={unversionedId:"react-native/learn/todo-app/networking/activity-indicator-each-todo",id:"react-native/learn/todo-app/networking/activity-indicator-each-todo",title:"ToDo\u66f4\u65b0\u4e2d\u306e\u8868\u793a",description:"\u6b21\u306fToDo\u306e\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u304c\u30bf\u30c3\u30d7\u3055\u308c\u305f\u3089\u3001\u66f4\u65b0API\u3092\u547c\u3073\u3060\u3057\u3066\u3044\u308b\u9593\u306f\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u3092\u8868\u793a\u3057\u3001\u30d6\u30ed\u30c3\u30af\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002",source:"@site/docs/react-native/learn/todo-app/networking/activity-indicator-each-todo.mdx",sourceDirName:"react-native/learn/todo-app/networking",slug:"/react-native/learn/todo-app/networking/activity-indicator-each-todo",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/activity-indicator-each-todo",draft:!1,tags:[],version:"current",lastUpdatedAt:1668577138,formattedLastUpdatedAt:"2022\u5e7411\u670816\u65e5",frontMatter:{title:"ToDo\u66f4\u65b0\u4e2d\u306e\u8868\u793a"},sidebar:"learn",previous:{title:"ToDo\u4e00\u89a7\u53d6\u5f97\u4e2d\u306e\u8868\u793a",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/activity-indicator"},next:{title:"\u6f14\u7fd2\u8ab2\u984c",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/exercise"}},p={},l=[{value:"\u51e6\u7406\u4e2d\u306eToDo\u3092\u7ba1\u7406\u3059\u308b",id:"\u51e6\u7406\u4e2d\u306etodo\u3092\u7ba1\u7406\u3059\u308b",level:2},{value:"ToDo\u3054\u3068\u306e\u51e6\u7406\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u5f15\u304d\u7d99\u3050",id:"todo\u3054\u3068\u306e\u51e6\u7406\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u5f15\u304d\u7d99\u3050",level:2},{value:"\u51e6\u7406\u4e2d\u306eUI\u3092\u8868\u793a\u3059\u308b",id:"\u51e6\u7406\u4e2d\u306eui\u3092\u8868\u793a\u3059\u308b",level:2},{value:"\u52d5\u4f5c\u78ba\u8a8d",id:"\u52d5\u4f5c\u78ba\u8a8d",level:2}],d={toc:l},c="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6b21\u306fToDo\u306e\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u304c\u30bf\u30c3\u30d7\u3055\u308c\u305f\u3089\u3001\u66f4\u65b0API\u3092\u547c\u3073\u3060\u3057\u3066\u3044\u308b\u9593\u306f\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u3092\u8868\u793a\u3057\u3001\u30d6\u30ed\u30c3\u30af\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"ToDo\u4e00\u89a7\u306e\u6700\u65b0\u5316\u3068\u540c\u3058\u3088\u3046\u306b\u51e6\u7406\u304c\u7d42\u308f\u308b\u307e\u3067\u64cd\u4f5c\u3092\u30d6\u30ed\u30c3\u30af\u3057\u3066\u3082\u826f\u3044\u3067\u3059\u304c\u3001\u9023\u7d9a\u3057\u3066ToDo\u306e\u5b8c\u4e86\u72b6\u614b\u3092\u5909\u66f4\u3059\u308b\u3068\u304d\u306b\u3001\u304b\u306a\u308a\u306e\u30b9\u30c8\u30ec\u30b9\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u304c\u30bf\u30c3\u30d7\u3055\u308c\u305fToDo\u3060\u3051\u3092\u51e6\u7406\u4e2d\u306eUI\u306b\u5909\u66f4\u3057\u3001\u64cd\u4f5c\u3092\u30d6\u30ed\u30c3\u30af\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"\u4e0b\u306e\u30a4\u30e1\u30fc\u30b8\u306f\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u3092\u8868\u793a\u3057\u3066\u3044\u308b\u753b\u9762\u3067\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:o(60556).Z,width:"1080",height:"2220"})),(0,r.kt)("h2",{id:"\u51e6\u7406\u4e2d\u306etodo\u3092\u7ba1\u7406\u3059\u308b"},"\u51e6\u7406\u4e2d\u306eToDo\u3092\u7ba1\u7406\u3059\u308b"),(0,r.kt)("p",null,"ToDo\u4e00\u89a7\u306e\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u8868\u793a\u3068\u540c\u3058\u3088\u3046\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"State"),"\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\n\u51e6\u7406\u4e2d\u306eToDo\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"processingTodos"),"\u3068\u3044\u3046",(0,r.kt)("inlineCode",{parentName:"p"},"State"),"\u3092\u8ffd\u52a0\u3057\u3066\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"toggleTodoCompletion"),"\u3067\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'typescript title="/src/screens/todo/TodoBoard.tsx"',typescript:!0,title:'"/src/screens/todo/TodoBoard.tsx"'},"export const TodoBoard: React.FC = () => {\n   const navigation = useNavigation();\n   const {theme} = useContext(ThemeContext);\n   const [todos, setTodos] = useState<Todo[]>();\n   const [filterType, setFilterType] = useState<FilterType>(FilterType.ALL);\n   const [loading, setLoading] = useState(false);\n+  const [processingTodos, setProcessingTodos] = useState<number[]>([]);\n\n/* \uff5e\u7701\u7565\uff5e */\n\n  const toggleTodoCompletion = (id: number) => {\n    const target = todos.find(todo => todo.id === id);\n    if (!target) {\n      return;\n    }\n+   setProcessingTodos(prevs => [id, ...prevs]);\n    TodoService.putTodo(id, !target.completed)\n      .then(returnedTodo =>\n        setTodos(prevTodos => {\n          return prevTodos.map(todo => (todo.id === id ? returnedTodo : todo));\n        }),\n      )\n-     .catch(() => {});\n+     .catch(() => {})\n+     .finally(() => {\n+       setProcessingTodos(prevs => {\n+         return prevs.filter(processedId => processedId !== id);\n+       });\n+     });\n  };\n\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"REST API\u3067\u6b63\u5e38\u306b\u51e6\u7406\u51fa\u6765\u306a\u304b\u3063\u305f\u5834\u5408\u3001\u5b9f\u969b\u306b\u306f\u5b8c\u4e86\u72b6\u614b\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u3066\u304a\u308a\u3001\u6700\u65b0\u306e\u72b6\u614b\u304cUI\u306b\u53cd\u6620\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\n\u30a8\u30e9\u30fc\u304c\u8d77\u304d\u305f\u3068\u304d\u306b\u3082ToDo\u4e00\u89a7\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u305f\u3068\u3048\u3070\u3001\u30a8\u30e9\u30fc\u304c\u8d77\u304d\u305f\u3068\u304d\u306f\u300c\u30e6\u30fc\u30b6\u306b\u30a8\u30e9\u30fc\u3092\u4f1d\u3048\u300d\u300cToDo\u4e00\u89a7\u3092\u6700\u65b0\u5316\u3059\u308b\u300d\u3068\u3044\u3046\u65b9\u6cd5\u304c\u8003\u3048\u3089\u308c\u307e\u3059\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u3053\u3053\u3067\u306f\u5177\u4f53\u7684\u306a\u5b9f\u88c5\u306f\u7d39\u4ecb\u3057\u306a\u3044\u306e\u3067\u3001\u3069\u306e\u3088\u3046\u306b\u5b9f\u88c5\u3067\u304d\u308b\u304b\u305c\u3072\u8003\u3048\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h2",{id:"todo\u3054\u3068\u306e\u51e6\u7406\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u5f15\u304d\u7d99\u3050"},"ToDo\u3054\u3068\u306e\u51e6\u7406\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u5f15\u304d\u7d99\u3050"),(0,r.kt)("p",null,"\u51e6\u7406\u4e2d\u306eToDo\u306eID\u3092\u7ba1\u7406\u3067\u304d\u305f\u306e\u3067\u3001\u51e6\u7406\u4e2d\u306e\u72b6\u614b\u3092\u5224\u65ad\u3067\u304d\u308b\u3088\u3046\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"TodoList.tsx"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"TodoItem.tsx"),"\u3092\u4fee\u6b63\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u307e\u305a\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"TodoList.tsx"),"\u304c\u51e6\u7406\u4e2d\u306eToDo\u306eID\u306e\u30ea\u30b9\u30c8\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"processingTodos"),"\uff09\u3092\u53d7\u3051\u53d6\u308c\u308b\u3088\u3046\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'typescritp title="/src/components/parts/todo/TodoList.tsx"',typescritp:!0,title:'"/src/components/parts/todo/TodoList.tsx"'}," interface Props {\n   todos: Todo[];\n+  processingTodos: number[];\n   contentContainerStyle?: StyleProp<ViewStyle>;\n   toggleTodoCompletion: (id: number) => void;\n   removeTodo: (id: number) => void;\n }\n\n-export const TodoList: React.FC<Props> = ({todos, contentContainerStyle, toggleTodoCompletion, removeTodo}) => {\n+export const TodoList: React.FC<Props> = ({\n+  todos,\n+  contentContainerStyle,\n+  toggleTodoCompletion,\n+  removeTodo,\n+  processingTodos,\n+}) => {\n\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TodoBoard.tsx"),"\u3067",(0,r.kt)("inlineCode",{parentName:"p"},"TodoList"),"\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"processingTodos"),"\u3092\u6e21\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'typescript title="/src/screens/todo/TodoBoard.tsx"',typescript:!0,title:'"/src/screens/todo/TodoBoard.tsx"'},"      <TodoList\n        todos={showTodos}\n        contentContainerStyle={styles.todoListContainer}\n        toggleTodoCompletion={toggleTodoCompletion}\n        removeTodo={removeTodo}\n+       processingTodos={processingTodos}\n      />\n")),(0,r.kt)("p",null,"\u6b21\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"TodoList"),"\u3067\u51e6\u7406\u4e2d\u306eToDo\u3092\u5224\u5b9a\u3057",(0,r.kt)("inlineCode",{parentName:"p"},"TodoItem"),"\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"processing"),"\u72b6\u614b\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u53d7\u3051\u53d6\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"Props"),"\uff09\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"processing"),"\u3092\u8ffd\u52a0\u3057\u3066\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"ToDoItem"),"\u3067\u8868\u793a\u3057\u3066\u3044\u308bToDo\u304c\u51e6\u7406\u4e2d\u304b\u3069\u3046\u304b\u3092\u5224\u65ad\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TodoItem.tsx"),"\u3067",(0,r.kt)("inlineCode",{parentName:"p"},"processing"),"\u3092\u53d7\u3051\u53d6\u308c\u308b\u3088\u3046\u306b\u4fee\u6b63\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'typescript title="/src/components/parts/todo/TodoItem.tsx "',typescript:!0,title:'"/src/components/parts/todo/TodoItem.tsx','"':!0}," interface Props {\n   id: number;\n   text: string;\n   completed: boolean;\n+  processing: boolean;\n   toggleTodoCompletion: (id: number) => void;\n }\n \n-export const TodoItem: React.FC<Props> = ({id, text, completed, toggleTodoCompletion}) => {\n+export const TodoItem: React.FC<Props> = ({id, text, completed, toggleTodoCompletion, processing}) => {\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TodoList.tsx"),"\u3067\u5224\u5b9a\u3057\u305f\u5024\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"TodoItem"),"\u306b\u6e21\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'typescript title="/src/components/parts/todo/TodoList.tsx"',typescript:!0,title:'"/src/components/parts/todo/TodoList.tsx"'},"        <TodoItem\n          key={todo.id}\n          id={todo.id}\n          text={todo.text}\n          completed={todo.completed}\n          toggleTodoCompletion={toggleTodoCompletion}\n+         processing={processingTodos.includes(todo.id)}\n        />\n\n")),(0,r.kt)("h2",{id:"\u51e6\u7406\u4e2d\u306eui\u3092\u8868\u793a\u3059\u308b"},"\u51e6\u7406\u4e2d\u306eUI\u3092\u8868\u793a\u3059\u308b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TodoItem"),"\u306b\u51e6\u7406\u72b6\u614b\u304c\u6e21\u305b\u305f\u306e\u3067\u3001\u51e6\u7406\u4e2d\u306eUI\u3092\u8868\u793a\u3059\u308b\u3088\u3046\u306b\u4fee\u6b63\u3057\u307e\u3059\u3002\n\u6b21\u306e\u3088\u3046\u306b\u4fee\u6b63\u3057\u3066\u3001ToDo\u304c\u51e6\u7406\u4e2d\u306e\u5834\u5408\u3060\u3051\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u3068\u64cd\u4f5c\u30d6\u30ed\u30c3\u30af\u7528\u306eView\u3092\u8868\u793a\u3057\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'typescript title="/src/components/parts/todo/TodoItem.tsx"',typescript:!0,title:'"/src/components/parts/todo/TodoItem.tsx"'}," import React, {useCallback} from 'react';\n-import {StyleSheet, View} from 'react-native';\n+import {StyleSheet, View, ActivityIndicator} from 'react-native';\n import {CheckBox} from 'react-native-elements';\n\n/* \uff5e\u7701\u7565\uff5e */\n   return (\n     <View style={styles.item}>\n       <View style={styles.todo}>\n         <CheckBox title={text} checked={completed} containerStyle={styles.checkbox} onPress={onToggle} />\n       </View>\n+      {processing && (\n+        <View style={styles.processing}>\n+          <ActivityIndicator animating={processing} size=\"large\" color=\"white\" style={styles.indicator} />\n+        </View>\n+      )}\n     </View>\n   );\n };\n\n/* \uff5e\u7701\u7565\uff5e */\n\nconst styles = StyleSheet.create({\n     flexGrow: 1,\n     flexShrink: 1,\n   },\n+  processing: {\n+    flex: 1,\n+    position: 'absolute',\n+    borderRadius: 10,\n+    backgroundColor: 'rgba(0, 0, 0, 0.2)',\n+    width: '100%',\n+    height: '100%',\n+    flexDirection: 'column',\n+    zIndex: 2,\n+  },\n+  indicator: {\n+    justifyContent: 'center',\n+    alignSelf: 'center',\n+    flexGrow: 1,\n+  },\n   checkbox: {\n     backgroundColor: 'transparent',\n     borderWidth: 0,\n")),(0,r.kt)("h2",{id:"\u52d5\u4f5c\u78ba\u8a8d"},"\u52d5\u4f5c\u78ba\u8a8d"),(0,r.kt)("p",null,"\u3053\u308c\u3067ToDo\u306e\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u3092\u30bf\u30c3\u30d7\u3057\u305f\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u51e6\u7406\u4e2d\u306eUI\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"\u5b9f\u969b\u306b\u30a2\u30d7\u30ea\u3092\u6b21\u306e\u624b\u9806\u3067\u52d5\u304b\u3057\u3066\u3001\u78ba\u8a8d\u3057\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"API\u30b5\u30fc\u30d0\u3092\u8d77\u52d5"),(0,r.kt)("li",{parentName:"ol"},"\u30a2\u30d7\u30ea\u3092\u8d77\u52d5"),(0,r.kt)("li",{parentName:"ol"},"\u30ed\u30b0\u30a4\u30f3"),(0,r.kt)("li",{parentName:"ol"},"\u4efb\u610f\u306eToDo\u306e\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u3092\u30bf\u30c3\u30d7\u3059\u308b\uff08\u8907\u6570\u500b\uff09")),(0,r.kt)("p",null,"\u30bf\u30c3\u30d7\u3057\u305fToDo\u304c\u30d6\u30ed\u30c3\u30af\u3055\u308c\u3066\u3001\u51e6\u7406\u304c\u5b8c\u4e86\u3059\u308b\u307e\u3067\u64cd\u4f5c\u3067\u304d\u306a\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"))}m.isMDXComponent=!0},60556:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/todo_indicator-ade8951004f803e9aa8fb193a42f1356.png"}}]);