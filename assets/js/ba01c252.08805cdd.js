"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(86010),l=n(72389),c=n(67392),i=n(7094),s=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function b(e){var t,n;const{lazy:l,block:b,defaultValue:m,values:d,groupId:v,className:f}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,c.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const O=null===m?m:null!=(t=null!=m?m:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+O+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:k}=(0,i.U)(),[w,x]=(0,r.useState)(O),E=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=v){const e=T[v];null!=e&&e!==w&&h.some((t=>t.value===e))&&x(e)}const N=e=>{const t=e.currentTarget,n=E.indexOf(t),a=h[n].value;a!==w&&(j(t),x(a),null!=v&&k(v,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":b},f)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:C,onFocus:N,onClick:N},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return r.createElement(b,(0,a.Z)({key:String(t)},e))}},37375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),l=n(85162);const c={title:"TouchableOpacity"},i=void 0,s={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity",id:"react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity",title:"TouchableOpacity",description:"\u30d3\u30e5\u30fc\u3092\u30bf\u30c3\u30c1\u306b\u5bfe\u5fdc\u3055\u305b\u308b\u305f\u3081\u30e9\u30c3\u30d7\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/components",slug:"/react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity",draft:!1,tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"TouchableOpacity"},sidebar:"learn",previous:{title:"Button",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/button"},next:{title:"Image",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/image"}},u={},p=[],b={toc:p};function m(e){let{components:t,...c}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u30d3\u30e5\u30fc\u3092\u30bf\u30c3\u30c1\u306b\u5bfe\u5fdc\u3055\u305b\u308b\u305f\u3081\u30e9\u30c3\u30d7\u3057\u307e\u3059\u3002\n\u62bc\u3059\u3068\u30e9\u30c3\u30d7\u3055\u308c\u305f\u30d3\u30e5\u30fc\u304c\u30d5\u30a7\u30fc\u30c9\u30a2\u30a6\u30c8\u3057\u3001\u96e2\u3059\u3068\u30d5\u30a7\u30fc\u30c9\u30a4\u30f3\u3057\u307e\u3059\u3002\n\u30b9\u30bf\u30a4\u30eb\u3092\u81ea\u7531\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"React Native\u30a2\u30d7\u30ea\u3067\u306f\u3001\u4e00\u822c\u7684\u306b\u30dc\u30bf\u30f3\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(o.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"image",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TouchableOpacity",src:n(77845).Z,width:"1080",height:"2220"}))),(0,r.kt)(l.Z,{value:"source",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import React, {useState} from 'react';\nimport {StyleSheet, Text, TouchableOpacity, View} from 'react-native';\n\nexport const App = () => {\n  const [count, setCount] = useState(0);\n\n  return (\n    <View style={styles.container}>\n      <TouchableOpacity\n        style={styles.button}\n        onPress={() => {\n          setCount(count + 1);\n        }}>\n        <Text>count is {count}</Text>\n      </TouchableOpacity>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  button: {\n    padding: 20,\n    borderRadius: 20,\n    borderWidth: 1,\n    borderColor: 'blue',\n    backgroundColor: 'lightskyblue',\n  },\n});\n")))))}m.isMDXComponent=!0},77845:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/touchable-opacity-b1d7c0efff9f713f64d891197820003c.png"}}]);