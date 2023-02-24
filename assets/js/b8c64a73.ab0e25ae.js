"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2997],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),r=n(67294),l=n(86010),i=n(12466),o=n(16550),s=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,c]=f({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var g=n(72389);const k="tabList__CuJ",x="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==o&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",x,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function h(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},29592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),l=n(74866),i=n(85162);const o={title:"Flexbox"},s=void 0,c={unversionedId:"react-native/learn/basic-concepts/react-native-basics/design/flexbox",id:"react-native/learn/basic-concepts/react-native-basics/design/flexbox",title:"Flexbox",description:"Flexbox\u3092\u4f7f\u7528\u3057\u305f\u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u6307\u5b9a\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/design/flexbox.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/design",slug:"/react-native/learn/basic-concepts/react-native-basics/design/flexbox",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/design/flexbox",draft:!1,tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021\u5e747\u67089\u65e5",frontMatter:{title:"Flexbox"},sidebar:"learn",previous:{title:"\u9ad8\u3055\u3068\u5e45",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/design/height-and-width"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics"}},u={},p=[{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"\u30d7\u30ed\u30d1\u30c6\u30a3",level:2},{value:"\u53c2\u8003\u30b5\u30a4\u30c8",id:"\u53c2\u8003\u30b5\u30a4\u30c8",level:2}],d={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Flexbox\u3092\u4f7f\u7528\u3057\u305f\u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u6307\u5b9a\u304c\u3067\u304d\u307e\u3059\u3002\nFlexbox\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u591a\u69d8\u306a\u30b5\u30a4\u30ba\u306e\u753b\u9762\u3042\u308f\u305b\u3066\u62e1\u5927\u307e\u305f\u306f\u7e2e\u5c0f\u3059\u308b\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002\n\u307e\u305f\u3001\u3053\u306e\u3088\u3046\u306a\u81ea\u52d5\u30ec\u30a4\u30a2\u30a6\u30c8\u3068\u5e45100\u306a\u3069\u306e\u56fa\u5b9a\u30b5\u30a4\u30ba\u3092\u30b7\u30fc\u30e0\u30ec\u30b9\u306b\u7d44\u307f\u5408\u308f\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5185\u90e8\u7684\u306b\u306f",(0,r.kt)("a",{parentName:"p",href:"https://yogalayout.com/"},"Yoga"),"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u7528\u3044\u3066Flexbox\u304c\u5b9f\u88c5\u3055\u308c\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)(l.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"image",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Flexbox",src:n(55229).Z,width:"1080",height:"2220"}))),(0,r.kt)(i.Z,{value:"source",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import React, {useState} from 'react';\nimport {View, StyleSheet, Text} from 'react-native';\nimport {ButtonGroup, Slider} from 'react-native-elements';\n\ntype flexDirectionOptionType =\n  | 'row'\n  | 'column'\n  | 'row-reverse'\n  | 'column-reverse';\ntype flexWrapOptionType = 'wrap' | 'nowrap' | 'wrap-reverse';\ntype justifyContentOptionType =\n  | 'flex-start'\n  | 'flex-end'\n  | 'center'\n  | 'space-between'\n  | 'space-around'\n  | 'space-evenly';\ntype alignItemsOptionType =\n  | 'flex-start'\n  | 'flex-end'\n  | 'center'\n  | 'stretch'\n  | 'baseline';\ntype alignContentOptionType =\n  | 'flex-start'\n  | 'flex-end'\n  | 'center'\n  | 'stretch'\n  | 'space-between'\n  | 'space-around';\n\nconst flexDirectionOptions: flexDirectionOptionType[] = [\n  'row',\n  'column',\n  'row-reverse',\n  'column-reverse',\n];\nconst flexWrapOptions: flexWrapOptionType[] = [\n  'nowrap',\n  'wrap',\n  'wrap-reverse',\n];\nconst justifyContentOptions: justifyContentOptionType[] = [\n  'flex-start',\n  'flex-end',\n  'center',\n  'space-between',\n  'space-around',\n  'space-evenly',\n];\nconst alignItemsOptions: alignItemsOptionType[] = [\n  'flex-start',\n  'flex-end',\n  'center',\n  'stretch',\n  'baseline',\n];\nconst alignContentOptions: alignContentOptionType[] = [\n  'flex-start',\n  'flex-end',\n  'center',\n  'stretch',\n  'space-between',\n  'space-around',\n];\n\nconst alignSelfOptions: ('auto' | alignItemsOptionType)[] = [\n  'auto',\n  'flex-start',\n  'flex-end',\n  'center',\n  'stretch',\n  'baseline',\n];\n\nexport const App = () => {\n  const [selectedFlexDirection, setFlexDirection] = useState(0);\n  const [selectedFlexWrap, setFlexWrap] = useState(0);\n  const [selectedJustifyContent, setJustifyContent] = useState(0);\n  const [selectedAlignItems, setAlignItems] = useState(0);\n  const [selectedAlignContent, setAlignContent] = useState(0);\n\n  const [children, setChildren] = useState(3);\n  const [flexGrow, setFlexGrow] = useState(0);\n  const [selectedAlignSelf, setAlignSelf] = useState(0);\n\n  return (\n    <View style={{flex: 1}}>\n      <Text>flexDirection: {flexDirectionOptions[selectedFlexDirection]}</Text>\n      <ButtonGroup\n        onPress={setFlexDirection}\n        selectedIndex={selectedFlexDirection}\n        buttons={flexDirectionOptions}\n      />\n      <Text>flexWrap: {flexWrapOptions[selectedFlexWrap]}</Text>\n      <ButtonGroup\n        onPress={setFlexWrap}\n        selectedIndex={selectedFlexWrap}\n        buttons={flexWrapOptions}\n      />\n      <Text>\n        justifyContent: {justifyContentOptions[selectedJustifyContent]}\n      </Text>\n      <ButtonGroup\n        onPress={setJustifyContent}\n        selectedIndex={selectedJustifyContent}\n        buttons={justifyContentOptions}\n      />\n      <Text>alignItems: {alignItemsOptions[selectedAlignItems]}</Text>\n      <ButtonGroup\n        onPress={setAlignItems}\n        selectedIndex={selectedAlignItems}\n        buttons={alignItemsOptions}\n      />\n      <Text>alignContent: {alignContentOptions[selectedAlignContent]}</Text>\n      <ButtonGroup\n        onPress={setAlignContent}\n        selectedIndex={selectedAlignContent}\n        buttons={alignContentOptions}\n      />\n\n      <Text>children: {children}</Text>\n      <Slider\n        value={children}\n        onValueChange={setChildren}\n        step={1}\n        maximumValue={20}\n      />\n      <Text>flexGrow: {flexGrow}</Text>\n      <Slider\n        value={flexGrow}\n        onValueChange={setFlexGrow}\n        step={1}\n        maximumValue={10}\n      />\n      <Text>alignSelf: {alignSelfOptions[selectedAlignSelf]}</Text>\n      <ButtonGroup\n        onPress={setAlignSelf}\n        selectedIndex={selectedAlignSelf}\n        buttons={alignSelfOptions}\n      />\n\n      <View\n        style={[\n          styles.container,\n          {\n            flexDirection: flexDirectionOptions[selectedFlexDirection],\n            flexWrap: flexWrapOptions[selectedFlexWrap],\n            justifyContent: justifyContentOptions[selectedJustifyContent],\n            alignItems: alignItemsOptions[selectedAlignItems],\n            alignContent: alignContentOptions[selectedAlignContent],\n          },\n        ]}>\n        <View\n          style={[\n            styles.item,\n            {\n              backgroundColor: 'red',\n              flexGrow,\n              alignSelf: alignSelfOptions[selectedAlignSelf],\n            },\n          ]}\n        />\n        {[...Array(children).keys()].map((index) => (\n          <View style={styles.item} key={index} />\n        ))}\n      </View>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    borderColor: 'blue',\n    borderStyle: 'solid',\n    borderWidth: 1,\n    margin: 10,\n  },\n  item: {\n    height: 50,\n    width: 50,\n    backgroundColor: '#3B6CD4',\n    margin: 5,\n  },\n});\n")))),(0,r.kt)("h2",{id:"\u30d7\u30ed\u30d1\u30c6\u30a3"},"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,r.kt)("p",null,"Flex\u30b3\u30f3\u30c6\u30ca\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u306b\u4f7f\u7528\u3059\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6b21\u306b\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30c7\u30d5\u30a9\u30eb\u30c8"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"flexDirection")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"column")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"row"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"column"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"row-reverse"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"column-reverse")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b50\u8981\u7d20\u306e\u4e26\u3076\u5411\u304d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"flexWrap")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nowrap")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nowrap"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"wrap"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"wrap-reverse")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b50\u8981\u7d20\u306e\u6298\u308a\u8fd4\u3057")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"justifyContent")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"flex-start")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"flex-start"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"flex-end"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"center"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"space-between"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"space-around"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"space-evenly")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6c34\u5e73\u65b9\u5411\u306e\u63c3\u3048")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alignItems")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stretch")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"flex-start"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"flex-end"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"center"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"stretch"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"baseline")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5782\u76f4\u65b9\u5411\u306e\u63c3\u3048")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alignContent")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"flex-start")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"flex-start"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"flex-end"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"center"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"stretch"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"space-between"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"space-around")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8907\u6570\u884c\u306b\u3057\u305f\u6642\u306e\u63c3\u3048")))),(0,r.kt)("p",null,"\u5b50\u8981\u7d20\uff08Flex\u30a2\u30a4\u30c6\u30e0\uff09\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u306b\u4f7f\u7528\u3059\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6b21\u306b\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30c7\u30d5\u30a9\u30eb\u30c8"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"flexGrow")),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b50\u8981\u7d20\u306e\u4f38\u3073\u308b\u6bd4\u7387")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"flexShrink")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b50\u8981\u7d20\u306e\u7e2e\u3080\u6bd4\u7387")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"flexBasis")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b50\u8981\u7d20\u306e\u30b5\u30a4\u30ba"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b50\u8981\u7d20\u306e\u30d9\u30fc\u30b9\u3068\u306a\u308b\u5e45\u306e\u6307\u5b9a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alignSelf")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"auto")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"auto"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"flex-start"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"flex-end"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"center"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"stretch"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"baseline")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b50\u8981\u7d20\u81ea\u8eab\u306e\u5782\u76f4\u65b9\u5411\u306e\u63c3\u3048")))),(0,r.kt)("h2",{id:"\u53c2\u8003\u30b5\u30a4\u30c8"},"\u53c2\u8003\u30b5\u30a4\u30c8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://yogalayout.com/"},"Yoga")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.webcreatorbox.com/tech/css-flexbox-cheat-sheet"},"\u65e5\u672c\u8a9e\u5bfe\u5fdc\uff01CSS Flexbox\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8\u3092\u4f5c\u3063\u305f\u306e\u3067\u914d\u5e03\u3057\u307e\u3059"))))}m.isMDXComponent=!0},55229:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flexbox-bb2959e10def019fa9debd95e1faa476.png"}}]);