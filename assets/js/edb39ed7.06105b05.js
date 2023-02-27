"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(67294),i=n(86010),o=n(12466),s=n(16550),l=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=m(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,c]=b({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),v=(()=>{const e=l??p;return d({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,i]),tabValues:i}}var v=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==s&&(p(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},o,{className:(0,i.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=f(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(h,(0,r.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},69649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),i=n(74866),o=n(85162);const s={title:"SectionList"},l=void 0,c={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/lists/section-list",id:"react-native/learn/basic-concepts/react-native-basics/components/lists/section-list",title:"SectionList",description:"SectionList\u306fFlatList\u3068\u540c\u3058\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u307f\u3092\u63cf\u753b\u3057\u3001\u3055\u3089\u306b\u884c\u533a\u5207\u308a\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u30d8\u30c3\u30c0\u30fc\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/lists/section-list.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/components/lists",slug:"/react-native/learn/basic-concepts/react-native-basics/components/lists/section-list",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/lists/section-list",draft:!1,tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021\u5e747\u67089\u65e5",frontMatter:{title:"SectionList"},sidebar:"learn",previous:{title:"FlatList",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/design"}},u={},p=[],m={toc:p},d="wrapper";function b(e){let{components:t,...s}=e;return(0,a.kt)(d,(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SectionList"),"\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList"),"\u3068\u540c\u3058\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u307f\u3092\u63cf\u753b\u3057\u3001\u3055\u3089\u306b\u884c\u533a\u5207\u308a\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u30d8\u30c3\u30c0\u30fc\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"props"),"\u306b\u6307\u5b9a\u3057\u305f",(0,a.kt)("inlineCode",{parentName:"p"},"renderSectionHeader"),"\u304a\u3088\u3073",(0,a.kt)("inlineCode",{parentName:"p"},"renderItem"),"\u3092\u7528\u3044\u3066\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"sections"),"\u306b\u6e21\u3055\u308c\u305f\u9805\u76ee\u3092\u63cf\u753b\u3057\u307e\u3059\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"sections"),"\u306e\u5404\u9805\u76ee\u306f\u914d\u5217\u578b\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3042\u308b",(0,a.kt)("inlineCode",{parentName:"p"},"data"),"\u3092\u3082\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)(i.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"image",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SectionList",src:n(75642).Z,width:"1080",height:"2220"}))),(0,a.kt)(o.Z,{value:"source",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import React from 'react';\nimport {SectionList, StyleSheet, Text} from 'react-native';\n\nconst sections = [\n  {\n    title: 'Basic',\n    data: ['View', 'Text', 'Button', 'Image'],\n  },\n  {\n    title: 'Lists',\n    data: ['FlatList', 'SectionList'],\n  },\n];\n\nexport const App = () => {\n  return (\n    <SectionList\n      style={styles.container}\n      sections={sections}\n      renderItem={({item}) => <Text style={styles.row}>{item}</Text>}\n      renderSectionHeader={({section}) => <Text style={styles.header}>{section.title}</Text>}\n      keyExtractor={(_, index) => index.toString()}\n    />\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  row: {\n    padding: 15,\n    marginBottom: 5,\n    backgroundColor: 'lightskyblue',\n  },\n  header: {\n    padding: 15,\n    marginBottom: 5,\n    backgroundColor: 'steelblue',\n    color: 'white',\n    fontWeight: 'bold',\n  },\n});\n")))))}b.isMDXComponent=!0},75642:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/section-list-f94012fde7be96384ec16bece3aee540.png"}}]);