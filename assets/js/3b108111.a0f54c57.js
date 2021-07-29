"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7670],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=c(a),m=r,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return a?n.createElement(f,l(l({ref:e},d),{},{components:a})):n.createElement(f,l({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9343:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),l={title:"ToDo\u30a2\u30d7\u30ea\u306e\u4ed5\u69d8"},i=void 0,p={unversionedId:"react-native/learn/todo-app/app-spec",id:"react-native/learn/todo-app/app-spec",isDocsHomePage:!1,title:"ToDo\u30a2\u30d7\u30ea\u306e\u4ed5\u69d8",description:"\u6a5f\u80fd",source:"@site/docs/react-native/learn/todo-app/app-spec.md",sourceDirName:"react-native/learn/todo-app",slug:"/react-native/learn/todo-app/app-spec",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/app-spec",version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"ToDo\u30a2\u30d7\u30ea\u306e\u4ed5\u69d8"},sidebar:"learn",previous:{title:"Overview",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app"},next:{title:"ToDo\u30a2\u30d7\u30ea\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8aac\u660e",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/app-project-desc"}},c=[{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd",children:[]},{value:"\u753b\u9762\u69cb\u6210\u30fb\u30c7\u30b6\u30a4\u30f3",id:"\u753b\u9762\u69cb\u6210\u30fb\u30c7\u30b6\u30a4\u30f3",children:[{value:"\u753b\u9762\u9077\u79fb",id:"\u753b\u9762\u9077\u79fb",children:[]},{value:"Welcome",id:"welcome",children:[]},{value:"\u30e6\u30fc\u30b6\u767b\u9332",id:"\u30e6\u30fc\u30b6\u767b\u9332",children:[]},{value:"\u30ed\u30b0\u30a4\u30f3",id:"\u30ed\u30b0\u30a4\u30f3",children:[]},{value:"ToDo\u4e00\u89a7",id:"todo\u4e00\u89a7",children:[]},{value:"ToDo\u4e00\u89a7\uff08\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\uff09",id:"todo\u4e00\u89a7\uff08\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\uff09",children:[]},{value:"ToDo\u767b\u9332",id:"todo\u767b\u9332",children:[]},{value:"\u8a2d\u5b9aTab\uff08\u30ed\u30b0\u30a2\u30a6\u30c8\uff09",id:"\u8a2d\u5b9atab\uff08\u30ed\u30b0\u30a2\u30a6\u30c8\uff09",children:[]}]},{value:"REST API",id:"rest-api",children:[]}],d={toc:c};function u(t){var e=t.components,l=(0,r.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6a5f\u80fd"},"\u6a5f\u80fd"),(0,o.kt)("p",null,"\u3053\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3067\u4f5c\u6210\u3059\u308bToDo\u30a2\u30d7\u30ea\u306f\u3001ToDo\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306e\u6b21\u306e\u6a5f\u80fd\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ToDo\u3092\u767b\u9332\u3067\u304d\u308b"),(0,o.kt)("li",{parentName:"ul"},"\u767b\u9332\u3057\u3066\u3044\u308bToDo\u3092\u4e00\u89a7\u5f62\u5f0f\u3067\u8868\u793a\u3067\u304d\u308b"),(0,o.kt)("li",{parentName:"ul"},"ToDo\u3092\u5b8c\u4e86\u306b\u3067\u304d\u308b"),(0,o.kt)("li",{parentName:"ul"},"ToDo\u306e\u5b8c\u4e86\u3092\u53d6\u308a\u6d88\u305b\u308b"),(0,o.kt)("li",{parentName:"ul"},"\u8868\u793a\u3059\u308bToDo\u3092\u7d5e\u308a\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u308b"),(0,o.kt)("li",{parentName:"ul"},"ToDo\u3092\u524a\u9664\u3067\u304d\u308b",(0,o.kt)("sup",{parentName:"li",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,o.kt)("p",null,"\u30a2\u30d7\u30ea\u3092\u5229\u7528\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u767b\u9332\u3057\u3066\u30e6\u30fc\u30b6\u3092\u8a8d\u8a3c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u305f\u3060\u3057\u3001\u73fe\u5728\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u306f\u30a2\u30d7\u30ea\u306e\u30e1\u30e2\u30ea\u4e0a\u306b\u3057\u304b\u60c5\u5831\u3092\u3082\u305f\u306a\u3044\u305f\u3081\u3001\u8a8d\u8a3c\u306f\u30c0\u30df\u30fc\u3068\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u753b\u9762\u69cb\u6210\u30fb\u30c7\u30b6\u30a4\u30f3"},"\u753b\u9762\u69cb\u6210\u30fb\u30c7\u30b6\u30a4\u30f3"),(0,o.kt)("p",null,"\u753b\u9762\u69cb\u6210\u3068\u30c7\u30b6\u30a4\u30f3\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,o.kt)("h3",{id:"\u753b\u9762\u9077\u79fb"},"\u753b\u9762\u9077\u79fb"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u753b\u9762\u9077\u79fb",src:a(7154).Z})),(0,o.kt)("h3",{id:"welcome"},"Welcome"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"welcome",src:a(9306).Z})),(0,o.kt)("h3",{id:"\u30e6\u30fc\u30b6\u767b\u9332"},"\u30e6\u30fc\u30b6\u767b\u9332"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"signup",src:a(8633).Z})),(0,o.kt)("h3",{id:"\u30ed\u30b0\u30a4\u30f3"},"\u30ed\u30b0\u30a4\u30f3"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"login",src:a(7611).Z})),(0,o.kt)("h3",{id:"todo\u4e00\u89a7"},"ToDo\u4e00\u89a7"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"todo_board_all",src:a(4595).Z})),(0,o.kt)("h3",{id:"todo\u4e00\u89a7\uff08\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\uff09"},"ToDo\u4e00\u89a7\uff08\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\uff09"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"todo_board_all",src:a(4122).Z})),(0,o.kt)("h3",{id:"todo\u767b\u9332"},"ToDo\u767b\u9332"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"add_task",src:a(23).Z})),(0,o.kt)("h3",{id:"\u8a2d\u5b9atab\uff08\u30ed\u30b0\u30a2\u30a6\u30c8\uff09"},"\u8a2d\u5b9aTab\uff08\u30ed\u30b0\u30a2\u30a6\u30c8\uff09"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"logout",src:a(6998).Z})),(0,o.kt)("h2",{id:"rest-api"},"REST API"),(0,o.kt)("p",null,"ToDo\u30a2\u30d7\u30ea\u304b\u3089\u5229\u7528\u3059\u308bREST API\u306e\u4ed5\u69d8\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002\nREST API\u3067\u306f\u3001URI\u3067\u30ea\u30bd\u30fc\u30b9\u3092\u8868\u73fe\u3057\u3001HTTP\u30e1\u30bd\u30c3\u30c9\u3067\u305d\u308c\u306b\u5bfe\u3059\u308b\u64cd\u4f5c\u3092\u8868\u73fe\u3057\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u300cToDo\u300d\u3092\u30ea\u30bd\u30fc\u30b9\u3068\u3057\u3001ToDo\u306e\u96c6\u5408\u3092",(0,o.kt)("inlineCode",{parentName:"p"},"/todos"),"\u3001\u96c6\u5408\u306e\u4e2d\u306e1\u3064\u306eToDo\u3092",(0,o.kt)("inlineCode",{parentName:"p"},"/todos/{id}"),"\u3068\u3057\u3066\u8868\u73fe\u3057\u307e\u3059\u3002\n\u307e\u305f\u3001\u6a5f\u80fd\u3084\u753b\u9762\u304b\u3089\u3001ToDo\u306e\u5c5e\u6027\u3068\u3057\u3066\u6b21\u306e\u9805\u76ee\u3092\u7528\u610f\u3057\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ToDo\u3092\u8b58\u5225\u3059\u308b\u305f\u3081\u306eID"),(0,o.kt)("li",{parentName:"ul"},"ToDo\u306e\u5185\u5bb9"),(0,o.kt)("li",{parentName:"ul"},"ToDo\u306e\u72b6\u614b")),(0,o.kt)("p",null,"ToDo\u30ea\u30bd\u30fc\u30b9\u3068\u3053\u308c\u3089\u306e\u5c5e\u6027\u3092\u64cd\u4f5c\u3059\u308b\u305f\u3081\u306b\u3001ToDo\u30a2\u30d7\u30ea\u3067\u306f\u6b21\u306eREST API\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"HTTP\u30e1\u30bd\u30c3\u30c9"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u30d1\u30b9"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u30ea\u30af\u30a8\u30b9\u30c8"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u30ec\u30b9\u30dd\u30f3\u30b9"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,o.kt)("td",{parentName:"tr",align:"left"},"/api/todos"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ToDo\u3092\u5168\u3066\u53d6\u5f97\u3059\u308b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ToDo\u306e\u4e00\u89a7")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,o.kt)("td",{parentName:"tr",align:"left"},"/api/todos"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ToDo\u3092\u65b0\u3057\u304f\u767b\u9332\u3059\u308b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ToDo\u306e\u5185\u5bb9"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u767b\u9332\u3057\u305fToDo")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"PUT"),(0,o.kt)("td",{parentName:"tr",align:"left"},"/api/todo/{id}"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ToDo\u306e\u72b6\u614b\u3092\u66f4\u65b0\u3059\u308b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ToDo\u306e\u72b6\u614b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u65b0\u3057\u305fToDo")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"DELETE"),(0,o.kt)("td",{parentName:"tr",align:"left"},"/api/todo/{id}"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ToDo\u3092\u524a\u9664\u3059\u308b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"\u30b5\u30f3\u30d7\u30eb\u304a\u3088\u3073\u30ac\u30a4\u30c9\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30d2\u30f3\u30c8\u3092\u53c2\u8003\u306b\u3057\u3066\u5b9f\u88c5\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0},23:function(t,e,a){e.Z=a.p+"assets/images/add_task-fd6ba6c53796f4f43769dcb56c6d7b41.png"},7611:function(t,e,a){e.Z=a.p+"assets/images/login-3965c0c4c2edc0d075db3686c4294f9a.png"},7154:function(t,e,a){e.Z=a.p+"assets/images/screen_transition-783c5e16222b47c3a66875f34bd2fffb.png"},6998:function(t,e,a){e.Z=a.p+"assets/images/setting-633ccde72680e057fb8f54c0a09411db.png"},8633:function(t,e,a){e.Z=a.p+"assets/images/signup-c99156ec5874b1054d49d71b4db96124.png"},4595:function(t,e,a){e.Z=a.p+"assets/images/todo_board_all-804ec44a27216b3377fdf791692c4d19.png"},4122:function(t,e,a){e.Z=a.p+"assets/images/todo_board_all_indicator_block-0c925610d65442a24c5a16b346306cec.png"},9306:function(t,e,a){e.Z=a.p+"assets/images/welcome-5fec26510148be6aa4c48b48db9130cc.png"}}]);