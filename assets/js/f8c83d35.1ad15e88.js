"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2606],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=c(a),s=i,k=u["".concat(o,".").concat(s)]||u[s]||d[s]||r;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:i,l[1]=p;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},26201:(e,t,a)=>{a.d(t,{L:()=>k});var n=a(87462),i=a(39960),r=a(44996),l=a(86010),p=a(67294);const o={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},c=e=>{let{children:t,colSize:a=4,...c}=e;const m=(0,r.Z)(c.to);return p.createElement("div",{className:(0,l.Z)("col",`col--${a}`,o.pageOverviewContainer)},p.createElement(i.Z,(0,n.Z)({className:(0,l.Z)("card",o.pageOverviewLinkCard)},c,{to:m}),t))},m=e=>{let{title:t}=e;return p.createElement("div",{className:(0,l.Z)("card__header",o.pageOverviewTitle)},p.createElement("h3",null,t))},u=e=>{let{src:t,alt:a,...i}=e;const c=(0,r.Z)(t);return p.createElement("div",{className:(0,l.Z)("card__image")},p.createElement("img",(0,n.Z)({className:o.pageOverviewImage},i,{alt:a,src:c})))},d=e=>{let{summary:t}=e;return p.createElement("div",{className:(0,l.Z)("card__body",o.pageOverviewSummary)},p.createElement("p",null,t))},s=e=>{let{title:t,imageUrl:a,summary:n,...i}=e;return p.createElement(c,i,p.createElement(m,{title:`${t} \xbb`}),a&&p.createElement(u,{src:a,alt:t}),n&&p.createElement(d,{summary:n}))},k=e=>{let{overviews:t,colSize:a}=e;return p.createElement("section",{className:(0,l.Z)(o.pageList)},p.createElement("div",{className:(0,l.Z)("container")},p.createElement("div",{className:(0,l.Z)("row",o.pageListRow)},t.map((e=>p.createElement(s,(0,n.Z)({key:e.to,colSize:a},e)))))))}},64652:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(87462),i=(a(67294),a(3905)),r=a(26201);const l={title:"\u30a2\u30d7\u30ea\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u7ba1\u7406",sidebar_label:"\u6982\u8981",pagination_label:"\u30a2\u30d7\u30ea\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u7ba1\u7406"},p=void 0,o={unversionedId:"react-native/santoku/application-architecture/life-cycle-management/overview",id:"react-native/santoku/application-architecture/life-cycle-management/overview",title:"\u30a2\u30d7\u30ea\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u7ba1\u7406",description:"\u30a2\u30d7\u30ea\u306e\u72b6\u614b",source:"@site/docs/react-native/santoku/application-architecture/life-cycle-management/overview.mdx",sourceDirName:"react-native/santoku/application-architecture/life-cycle-management",slug:"/react-native/santoku/application-architecture/life-cycle-management/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1681450141,formattedLastUpdatedAt:"2023\u5e744\u670814\u65e5",frontMatter:{title:"\u30a2\u30d7\u30ea\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u7ba1\u7406",sidebar_label:"\u6982\u8981",pagination_label:"\u30a2\u30d7\u30ea\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u7ba1\u7406"},sidebar:"santoku",previous:{title:"\u30b7\u30b9\u30c6\u30e0\u69cb\u6210",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/system-configuration/overview"},next:{title:"\u30a2\u30d7\u30ea\u8d77\u52d5\u5f8c\u306e\u521d\u671f\u5316\u51e6\u7406",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/initialization"}},c={},m=[{title:"\u30a2\u30d7\u30ea\u8d77\u52d5\u5f8c\u306e\u521d\u671f\u5316\u51e6\u7406",to:"/react-native/santoku/application-architecture/life-cycle-management/initialization"}],u=[{value:"\u30a2\u30d7\u30ea\u306e\u72b6\u614b",id:"\u30a2\u30d7\u30ea\u306e\u72b6\u614b",level:2},{value:"\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u306e\u72b6\u614b",id:"\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u306e\u72b6\u614b",level:3},{value:"\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u306e\u72b6\u614b",id:"\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u306e\u72b6\u614b",level:3},{value:"\u30a2\u30d7\u30ea\u30b9\u30bf\u30fc\u30c8\u306e\u7a2e\u985e\u306b\u5fdc\u3058\u305f\u521d\u671f\u5316\u51e6\u7406",id:"\u30a2\u30d7\u30ea\u30b9\u30bf\u30fc\u30c8\u306e\u7a2e\u985e\u306b\u5fdc\u3058\u305f\u521d\u671f\u5316\u51e6\u7406",level:2},{value:"\u30b3\u30fc\u30eb\u30c9\u30b9\u30bf\u30fc\u30c8\u3001\u30a6\u30a9\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8",id:"\u30b3\u30fc\u30eb\u30c9\u30b9\u30bf\u30fc\u30c8\u30a6\u30a9\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8",level:3},{value:"\u30db\u30c3\u30c8\u30b9\u30bf\u30fc\u30c8",id:"\u30db\u30c3\u30c8\u30b9\u30bf\u30fc\u30c8",level:3},{value:"\u88dc\u8db3",id:"\u88dc\u8db3",level:2}],d={toc:u},s="wrapper";function k(e){let{components:t,...l}=e;return(0,i.kt)(s,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u30a2\u30d7\u30ea\u306e\u72b6\u614b"},"\u30a2\u30d7\u30ea\u306e\u72b6\u614b"),(0,i.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306f\u3001\u30a2\u30d7\u30ea\u306e\u8d77\u52d5\u304b\u3089\u505c\u6b62\u307e\u3067\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u306e\u4e2d\u3067\u69d8\u3005\u306a\u72b6\u614b\u306b\u9077\u79fb\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u30e6\u30fc\u30b6\u304c\u4ed6\u306e\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3057\u305f\u5834\u5408\u3001\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u306b\u3042\u3063\u305f\u30a2\u30d7\u30ea\u306f\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002\u30e6\u30fc\u30b6\u304c\u591a\u304f\u306e\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306b\u79fb\u52d5\u3057\u305f\u30a2\u30d7\u30ea\u304cOS\u306e\u5224\u65ad\u306b\u3088\u3063\u3066\u505c\u6b62\u3055\u308c\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3053\u3046\u3044\u3063\u305f\u3001\u30a2\u30d7\u30ea\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u306b\u3064\u3044\u3066\u306f\u305d\u308c\u305e\u308c\u306eOS\u306e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u8a73\u7d30\u306b\u8aac\u660e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/guide/components/activities/activity-lifecycle?hl=ja"},"Android - \u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u306b\u3064\u3044\u3066")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/uikit/app_and_environment/managing_your_app_s_life_cycle?language=objc"},"iOS - Managing Your App's Life Cycle"))),(0,i.kt)("p",null,"\u4ee5\u4e0b\u306f\u3001\u3053\u306e\u30a2\u30d7\u30ea\u3067\u5fc5\u8981\u3068\u306a\u308b\u72b6\u614b\u306b\u7126\u70b9\u3092\u5f53\u3066\u3066\u3001\u30a2\u30d7\u30ea\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u3092\u7c21\u7565\u5316\u3057\u3066\u793a\u3057\u305f\u3082\u306e\u3067\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a2\u30d7\u30ea\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u30d5\u30ed\u30fc",src:a(51741).Z,width:"650",height:"346"})),(0,i.kt)("p",null,"React Native\u3092\u4f7f\u7528\u3057\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/appstate#app-states"},"AppState"),"\u3092\u5229\u7528\u3057\u3066\u3053\u308c\u3089\u306e\u72b6\u614b\u306e\u5909\u5316\u3092\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u305d\u308c\u305e\u308c\u306e\u72b6\u614b\u306b\u9077\u79fb\u3059\u308b\u4ee3\u8868\u7684\u306a\u64cd\u4f5c\u3068\u3042\u308f\u305b\u3066\u3001\u4ee5\u4e0b\u306b\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u306e\u72b6\u614b"},"\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u306e\u72b6\u614b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30af\u30c6\u30a3\u30d6\uff08",(0,i.kt)("inlineCode",{parentName:"li"},"active"),"\uff09",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3057\u305f\u3068\u304d"),(0,i.kt)("li",{parentName:"ul"},"\u4ed6\u30a2\u30d7\u30ea\u3084\u30db\u30fc\u30e0\u753b\u9762\u304b\u3089\u3053\u306e\u30a2\u30d7\u30ea\u306b\u5207\u308a\u66ff\u3048\u305f\u3068\u304d"))),(0,i.kt)("li",{parentName:"ul"},"\u975e\u30a2\u30af\u30c6\u30a3\u30d6\uff08",(0,i.kt)("inlineCode",{parentName:"li"},"inactive"),"\u3001iOS\u306e\u307f\uff09",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.apple.com/ja-jp/HT201925#control-center"},"\u901a\u77e5\u30bb\u30f3\u30bf\u30fc"),"\u3001",(0,i.kt)("a",{parentName:"li",href:"https://support.apple.com/ja-jp/HT202769"},"\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30bb\u30f3\u30bf\u30fc"),"\u3092\u958b\u3044\u305f\u3068\u304d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.apple.com/en-us/HT202070"},"App\u30b9\u30a4\u30c3\u30c1\u30e3\u30fc"),"\u3092\u8868\u793a\u3057\u305f\u3068\u304d")))),(0,i.kt)("h3",{id:"\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u306e\u72b6\u614b"},"\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u306e\u72b6\u614b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e00\u6642\u505c\u6b62\uff08",(0,i.kt)("inlineCode",{parentName:"li"},"background"),"\uff09",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4ed6\u306e\u30a2\u30d7\u30ea\u3084\u30db\u30fc\u30e0\u753b\u9762\u306b\u5207\u308a\u66ff\u3048\u305f\u3068\u304d"),(0,i.kt)("li",{parentName:"ul"},"\u753b\u9762\u304c\u30ed\u30c3\u30af\u3055\u308c\u305f\u3068\u304d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/guide/topics/ui/notifiers/notifications?hl=ja#bar-and-drawer"},"\u901a\u77e5\u30c9\u30ed\u30ef\u30fc"),"\u3092\u958b\u3044\u305f\u3068\u304d\uff08Android\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/guide/components/activities/recents"},"\u6700\u8fd1\u306e\u753b\u9762"),"\u3092\u8868\u793a\u3057\u305f\u3068\u304d\uff08Android\uff09"))),(0,i.kt)("li",{parentName:"ul"},"\u505c\u6b62",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30e1\u30e2\u30ea\u89e3\u653e\u306a\u3069\u306e\u76ee\u7684\u3067\u3001OS\u306b\u3088\u308a\u30a2\u30d7\u30ea\u304c\u505c\u6b62\u3055\u308c\u305f\u3068\u304d")))),(0,i.kt)("h2",{id:"\u30a2\u30d7\u30ea\u30b9\u30bf\u30fc\u30c8\u306e\u7a2e\u985e\u306b\u5fdc\u3058\u305f\u521d\u671f\u5316\u51e6\u7406"},"\u30a2\u30d7\u30ea\u30b9\u30bf\u30fc\u30c8\u306e\u7a2e\u985e\u306b\u5fdc\u3058\u305f\u521d\u671f\u5316\u51e6\u7406"),(0,i.kt)("p",null,"\u30a2\u30d7\u30ea\u3092\u30b9\u30bf\u30fc\u30c8\u3059\u308b\uff08\u30a2\u30d7\u30ea\u304c\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u306b\u306a\u3044\u72b6\u614b\u304b\u3089\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u306b\u8868\u793a\u3059\u308b\uff09\u3068\u304d\u3001\u64cd\u4f5c\u524d\u306e\u30a2\u30d7\u30ea\u306e\u72b6\u614b\u306b\u3088\u3063\u3066\u8d77\u52d5\u30d7\u30ed\u30bb\u30b9\u304c\u5927\u304d\u304f\u7570\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u30a2\u30d7\u30ea\u30b9\u30bf\u30fc\u30c8\u306e\u7a2e\u985e\u3092\u64cd\u4f5c\u524d\u306e\u30a2\u30d7\u30ea\u306e\u72b6\u614b\u306b\u5fdc\u3058\u3066\u6b21\u306e\u3088\u3046\u306b\u6574\u7406\u3057\u3066\u304a\u304d\u307e\u3059\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u30b9\u30bf\u30fc\u30c8\u306e\u7a2e\u985e"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u6982\u8981"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30fc\u30eb\u30c9\u30b9\u30bf\u30fc\u30c8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u304c\u5168\u304f\u8d77\u52d5\u3057\u3066\u3044\u306a\u3044\u300c\u30a2\u30d7\u30ea\u7834\u68c4\u300d\u72b6\u614b\u304b\u3089\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3059\u308b\u3053\u3068")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a6\u30a9\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u300c\u505c\u6b62\u300d\u72b6\u614b\u306e\u30a2\u30d7\u30ea\u3092\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u306b\u8868\u793a\u3059\u308b\u3053\u3068")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30db\u30c3\u30c8\u30b9\u30bf\u30fc\u30c8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u300c\u975e\u30a2\u30af\u30c6\u30a3\u30d6\u300d\u72b6\u614b\u3084\u300c\u4e00\u6642\u505c\u6b62\u300d\u72b6\u614b\u306e\u30a2\u30d7\u30ea\u3092\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u306b\u8868\u793a\u3059\u308b\u3053\u3068")))),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30a2\u30d7\u30ea\u3092\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u5316\u3059\u308b\u64cd\u4f5c\u3068\u3057\u3066\u4ee5\u4e0b\u306e\u65b9\u6cd5\u3092\u60f3\u5b9a\u3057\u307e\u3059\u304c\u3001\u4e0a\u8a18\u3059\u3079\u3066\u306e\u7a2e\u985e\u306b\u5bfe\u5fdc\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30a2\u30a4\u30b3\u30f3\u3092\u30bf\u30c3\u30d7"),(0,i.kt)("li",{parentName:"ul"},"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u30bf\u30c3\u30d7"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u77e5\u3092\u30bf\u30c3\u30d7"),(0,i.kt)("li",{parentName:"ul"},"OS\u6a5f\u80fd\u3067\u306e\u30a2\u30d7\u30ea\u5207\u66ff")),(0,i.kt)("h3",{id:"\u30b3\u30fc\u30eb\u30c9\u30b9\u30bf\u30fc\u30c8\u30a6\u30a9\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8"},"\u30b3\u30fc\u30eb\u30c9\u30b9\u30bf\u30fc\u30c8\u3001\u30a6\u30a9\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8"),(0,i.kt)("p",null,"React Native\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30b3\u30fc\u30eb\u30c9\u30b9\u30bf\u30fc\u30c8\u3068\u30a6\u30a9\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8\u306f\u307b\u307c\u540c\u7b49\u3067\u3059\u3002"),(0,i.kt)("p",null,"JavaScript\u3067\u5b9f\u88c5\u3055\u308c\u308b\u30a2\u30d7\u30ea\u306e\u521d\u671f\u5316\u51e6\u7406\u306f\u3001\u4ee5\u4e0b\u306e\u51e6\u7406\u5185\u3067\u30a2\u30d7\u30ea\u306e\u521d\u671f\u5316\u51e6\u7406\u3092\u884c\u3046\u3053\u3068\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u51e6\u7406\u306f\u30b3\u30fc\u30eb\u30c9\u30b9\u30bf\u30fc\u30c8\u306e\u5834\u5408\u3060\u3051\u3067\u306a\u304f\u3001\u30a6\u30a9\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8\u306e\u5834\u5408\u306b\u3082\u547c\u3070\u308c\u308b\u306e\u3067\u3001JavaScript\u306e\u307f\u3067\u5b9f\u88c5\u3057\u305f\u30a2\u30d7\u30ea\u3067\u306f\u3053\u308c\u3089\u306e\u533a\u5225\u306f\u307b\u307c\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android: \u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u306e",(0,i.kt)("inlineCode",{parentName:"li"},"onCreate")),(0,i.kt)("li",{parentName:"ul"},"iOS: AppDelegate\u306e",(0,i.kt)("inlineCode",{parentName:"li"},"didFinishLaunchingWithOptions"))),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u3082\u3001\u30b3\u30fc\u30eb\u30c9\u30b9\u30bf\u30fc\u30c8\u3068\u30a6\u30a9\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8\u306e\u5834\u5408\u306b\u30a2\u30d7\u30ea\u306e\u521d\u671f\u5316\u51e6\u7406\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,i.kt)(r.L,{overviews:m,colSize:12,mdxType:"PageList"}),(0,i.kt)("h3",{id:"\u30db\u30c3\u30c8\u30b9\u30bf\u30fc\u30c8"},"\u30db\u30c3\u30c8\u30b9\u30bf\u30fc\u30c8"),(0,i.kt)("p",null,"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3084\u901a\u77e5\u3092\u30bf\u30c3\u30d7\u3059\u308b\u3053\u3068\u3067\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u4e00\u6642\u505c\u6b62\u72b6\u614b\u3068\u306a\u3063\u3066\u3044\u308b\u30a2\u30d7\u30ea\u3092\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u306b\u8868\u793a\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3053\u3046\u3044\u3063\u305f\u8d77\u52d5\u65b9\u6cd5\u306e\u5834\u5408\u3001\u30bf\u30c3\u30d7\u3057\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3084\u901a\u77e5\u306e\u30c7\u30fc\u30bf\u3092\u30a2\u30d7\u30ea\u3067\u53d7\u4fe1\u3057\u3066\u3001\u30c7\u30fc\u30bf\u306b\u5fdc\u3058\u305f\u521d\u671f\u5316\u51e6\u7406\u3092\u884c\u3044\u305f\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\n\u4f8b\u3048\u3070\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306b\u5fdc\u3058\u3066\u8868\u793a\u3059\u308b\u753b\u9762\u3092\u5909\u66f4\u3057\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u304b\u3089\u53d6\u5f97\u3057\u305f\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u521d\u671f\u5024\u3068\u3057\u3066\u5165\u529b\u6b04\u306b\u8a2d\u5b9a\u3059\u308b\u753b\u9762\u306a\u3069\u304c\u8003\u3048\u3089\u308c\u307e\u3059\u3002\n\u8a73\u7d30\u306f\u4ee5\u4e0b\u306e\u5185\u5bb9\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/process-deep-link"},"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u51e6\u7406")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/application-architecture/push-notification/receive-push-notification#%E9%80%9A%E7%9F%A5%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%81%AE%E3%83%97%E3%83%83%E3%82%B7%E3%83%A5%E9%80%9A%E7%9F%A5%E3%82%BF%E3%83%83%E3%83%97%E6%99%82%E3%81%AE%E5%87%A6%E7%90%86%E3%83%95%E3%83%AD%E3%83%BC"},"\u901a\u77e5\u30bb\u30f3\u30bf\u30fc\u306e\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u30bf\u30c3\u30d7\u6642\u306e\u51e6\u7406\u30d5\u30ed\u30fc"))),(0,i.kt)("p",null,"\u306a\u304a\u3001\u30a2\u30d7\u30ea\u30a2\u30a4\u30b3\u30f3\u306e\u30bf\u30c3\u30d7\u3084OS\u6a5f\u80fd\u3067\u306e\u30a2\u30d7\u30ea\u5207\u66ff\u3067\u3082\u30a2\u30d7\u30ea\u304c\u30db\u30c3\u30c8\u30b9\u30bf\u30fc\u30c8\u3059\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u3059\u304c\u3001\u305d\u306e\u3068\u304d\u306f\u4ee5\u524d\u306e\u4f5c\u696d\u72b6\u614b\u306b\u623b\u308c\u3070\u826f\u3044\u306e\u3067\u7279\u5225\u306a\u521d\u671f\u5316\u51e6\u7406\u306f\u884c\u3044\u307e\u305b\u3093\u3002"),(0,i.kt)("h2",{id:"\u88dc\u8db3"},"\u88dc\u8db3"),(0,i.kt)("p",null,"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u898b\u3064\u3051\u3089\u308c\u307e\u305b\u3093\u3067\u3057\u305f\u304c\u3001Android\u306e\u5834\u5408\u306f\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"onResume"),"\u3067",(0,i.kt)("inlineCode",{parentName:"p"},"active"),"\u306b\u3057\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"onPause"),"\u3067",(0,i.kt)("inlineCode",{parentName:"p"},"background"),"\u306b\u3057\u3066\u3044\u308b\u3088\u3046\u3067\u3059\u3002\uff08",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/v0.63.4/ReactAndroid/src/main/java/com/facebook/react/modules/appstate/AppStateModule.java"},"react-native/AppStateModule.java at v0.63.4 \xb7 facebook/react-native"),"\uff09"),(0,i.kt)("p",null,"\u4e00\u65b9\u3001iOS\u3067\u306f\u4ee5\u4e0b\u306e\u30a4\u30d9\u30f3\u30c8\u306b\u5bfe\u5fdc\u3057\u3066\u72b6\u614b\u3092\u5909\u3048\u3066\u3044\u308b\u3088\u3046\u3067\u3059\u3002\uff08",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/v0.63.4/React/CoreModules/RCTAppState.mm"},"react-native/RCTAppState.mm at v0.63.4 \xb7 facebook/react-native"),"\uff09"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UIApplicationDidBecomeActiveNotification"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"UIApplicationDidEnterBackgroundNotification"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"UIApplicationDidFinishLaunchingNotification"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/uikit/uiapplication/1623003-applicationstate?language=objc"},(0,i.kt)("inlineCode",{parentName:"a"},"UIApplication"),"\u306e",(0,i.kt)("inlineCode",{parentName:"a"},"applicationState")),"\u306b\u5fdc\u3058\u3066\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"active"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"background"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"unknown"),"\u306e\u3044\u305a\u308c\u304b"))),(0,i.kt)("li",{parentName:"ul"},"UIApplicationWillResignActiveNotification",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inactive")))),(0,i.kt)("li",{parentName:"ul"},"UIApplicationWillEnterForegroundNotification",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"background"))))))}k.isMDXComponent=!0},51741:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/app-life-cycle-flow.drawio-d4c5aae0d77d7015ae3fbb3ccd193cdb.png"}}]);