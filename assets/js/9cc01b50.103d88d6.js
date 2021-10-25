"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2658],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return v}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=s(n),v=r,d=m["".concat(c,".").concat(v)]||m[v]||p[v]||o;return n?a.createElement(d,i(i({ref:e},u),{},{components:n})):a.createElement(d,i({ref:e},u))}));function v(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(t,e,n){var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},5064:function(t,e,n){n.d(e,{Z:function(){return m}});var a=n(3117),r=n(7294),o=n(2389),i=n(9443);var l=function(){var t=(0,r.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},c=n(9558),s=n(6010),u="tabItem_1uMI";function p(t){var e,n,a,o=t.lazy,i=t.block,p=t.defaultValue,m=t.values,v=t.groupId,d=t.className,b=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&"string"==typeof t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:b.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),g=(0,c.lx)(f,(function(t,e){return t.value===e.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(e=null!=p?p:null==(n=b.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(a=b[0])?void 0:a.props.value;if(null!==y&&!f.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),S=k.tabGroupChoices,N=k.setTabGroupChoices,h=(0,r.useState)(y),w=h[0],P=h[1],T=[],x=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var O=S[v];null!=O&&O!==w&&f.some((function(t){return t.value===O}))&&P(O)}var C=function(t){var e=t.currentTarget,n=T.indexOf(e),a=f[n].value;a!==w&&(x(e),P(a),null!=v&&N(v,a))},E=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=T.indexOf(t.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(t.currentTarget)-1;n=T[r]||T[T.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},d)},f.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":w===e}),key:e,ref:function(t){return T.push(t)},onKeyDown:E,onFocus:C,onClick:C},null!=n?n:e)}))),o?(0,r.cloneElement)(b.filter((function(t){return t.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==w})}))))}function m(t){var e=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(e)},t))}},9443:function(t,e,n){var a=(0,n(7294).createContext)(void 0);e.Z=a},4601:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=n(5064),l=n(8215),c=["components"],s={title:"Stack"},u=void 0,p={unversionedId:"react-native/learn/basic-concepts/react-navigation-basics/stack",id:"react-native/learn/basic-concepts/react-navigation-basics/stack",isDocsHomePage:!1,title:"Stack",description:"Stack\u306f\u6700\u3082\u4e00\u822c\u7684\u306b\u4f7f\u308f\u308c\u308b\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-navigation-basics/stack.mdx",sourceDirName:"react-native/learn/basic-concepts/react-navigation-basics",slug:"/react-native/learn/basic-concepts/react-navigation-basics/stack",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/stack",tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"Stack"},sidebar:"learn",previous:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics"},next:{title:"Modal",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/modal"}},m=[],v={toc:m};function d(t){var e=t.components,s=(0,r.Z)(t,c);return(0,o.kt)("wrapper",(0,a.Z)({},v,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Stack\u306f\u6700\u3082\u4e00\u822c\u7684\u306b\u4f7f\u308f\u308c\u308b\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3002\nStack\u306e\u64cd\u4f5c\u3068\u3057\u3066\u6b21\u306eAPI\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"navigate")),(0,o.kt)("td",{parentName:"tr",align:null},"\u30b9\u30bf\u30c3\u30af\u5185\u306b\u6307\u5b9a\u3057\u305f\u753b\u9762\u3042\u308c\u3070\u3001\u305d\u306e\u753b\u9762\u306b\u9077\u79fb\u3057\u307e\u3059\u3002\u306a\u3044\u5834\u5408\u306f\u65b0\u3057\u3044\u753b\u9762\u3092\u30b9\u30bf\u30c3\u30af\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"push")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5e38\u306b\u65b0\u3057\u3044\u753b\u9762\u3092\u30b9\u30bf\u30c3\u30af\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pop")),(0,o.kt)("td",{parentName:"tr",align:null},"\u524d\u306e\u753b\u9762\u306b\u623b\u308a\u307e\u3059\u3002\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u3088\u308a\u623b\u308b\u753b\u9762\u306e\u6570\u3082\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"goBack")),(0,o.kt)("td",{parentName:"tr",align:null},"\u524d\u306e\u753b\u9762\u306b\u623b\u308a\u307e\u3059\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"popToTop")),(0,o.kt)("td",{parentName:"tr",align:null},"\u30b9\u30bf\u30c3\u30af\u306e\u6700\u521d\u306e\u753b\u9762\u306b\u623b\u308a\u307e\u3059\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"replace")),(0,o.kt)("td",{parentName:"tr",align:null},"\u753b\u9762\u3092\u7f6e\u304d\u63db\u3048\u307e\u3059\u3002")))),(0,o.kt)("p",null,"\u305d\u308c\u305e\u308c\u306e\u64cd\u4f5c\u30a4\u30e1\u30fc\u30b8\u3092\u3042\u3089\u308f\u3057\u305f\u306e\u304c\u6b21\u306e\u56f3\u3067\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Stack operations",src:n(1499).Z})),(0,o.kt)(i.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"image",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Stack",src:n(1033).Z}))),(0,o.kt)(l.Z,{value:"source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import {\n  NavigationContainer,\n  useNavigation,\n  useNavigationState,\n} from '@react-navigation/native';\nimport {\n  createStackNavigator, StackNavigationProp,\n} from '@react-navigation/stack';\nimport React from 'react';\nimport {Text, View, ScrollView, StyleSheet} from 'react-native';\nimport {Button} from 'react-native-elements';\n\ntype RootParamList = {\n  Screen1: undefined;\n  Screen2: undefined;\n};\n\nconst Root = createStackNavigator<RootParamList>();\n\nexport const App = () => {\n  return (\n    <NavigationContainer>\n      <Root.Navigator>\n        <Root.Screen name=\"Screen1\" component={Screen1} />\n        <Root.Screen name=\"Screen2\" component={Screen2} />\n      </Root.Navigator>\n    </NavigationContainer>\n  );\n};\n\nconst Screen1: React.FC = () => {\n  const navigation = useNavigation<StackNavigationProp<RootParamList, 'Screen1'>>();\n  const state = useNavigationState((state) => state);\n\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Screen 1</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Push Screen 2\"\n        onPress={() => navigation.push('Screen2')}\n      />\n      <Button\n        buttonStyle={styles.button}\n        title=\"Navigate Screen 2\"\n        onPress={() => navigation.navigate('Screen2')}\n      />\n      <View style={styles.state}>\n        <Text>{JSON.stringify(state, null, '\\t')}</Text>\n      </View>\n    </View>\n  );\n};\n\nconst Screen2: React.FC = () => {\n  const navigation = useNavigation<StackNavigationProp<RootParamList, 'Screen2'>>();\n  const state = useNavigationState((state) => state);\n\n  return (\n    <ScrollView>\n      <View style={styles.screen}>\n        <Text style={styles.title}>Screen 2</Text>\n        <Button\n          buttonStyle={styles.button}\n          title=\"Push Screen 1\"\n          onPress={() => navigation.push('Screen1')}\n        />\n        <Button\n          buttonStyle={styles.button}\n          title=\"Push Screen 2\"\n          onPress={() => navigation.push('Screen2')}\n        />\n        <Button\n          buttonStyle={styles.button}\n          title=\"Pop\"\n          onPress={() => navigation.pop()}\n        />\n        <Button\n          buttonStyle={styles.button}\n          title=\"GoBack\"\n          onPress={() => navigation.goBack()}\n        />\n        <Button\n          buttonStyle={styles.button}\n          title=\"Pop2\"\n          onPress={() => navigation.pop(2)}\n        />\n        <Button\n          buttonStyle={styles.button}\n          title=\"Pop to Top\"\n          onPress={() => navigation.popToTop()}\n        />\n        <Button\n          buttonStyle={styles.button}\n          title=\"Navigate Screen 1\"\n          onPress={() => navigation.navigate('Screen1')}\n        />\n        <Button\n          buttonStyle={styles.button}\n          title=\"Replace Screen 1\"\n          onPress={() => navigation.replace('Screen1')}\n        />\n        <View style={styles.state}>\n          <Text>{JSON.stringify(state, null, '\\t')}</Text>\n        </View>\n      </View>\n    </ScrollView>\n  );\n};\n\nconst styles = StyleSheet.create({\n  screen: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  state: {\n    padding: 5,\n    borderStyle: 'solid',\n    borderWidth: 1,\n  },\n  title: {\n    padding: 20,\n    fontSize: 42,\n  },\n  button: {\n    margin: 10,\n    width: 200,\n  },\n});\n")))))}d.isMDXComponent=!0},1033:function(t,e,n){e.Z=n.p+"assets/images/stack-f65c9b6d46c5740b19281833f85fded6.png"},1499:function(t,e,n){e.Z=n.p+"assets/images/stack_image-c92ae64ceb9e29638d930bfa934769f9.png"}}]);