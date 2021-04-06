(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(152)),l={title:"\u5404\u30b5\u30fc\u30d3\u30b9\u306e\u521d\u671f\u8a2d\u5b9a"},b={unversionedId:"reference/notification/configuration",id:"reference/notification/configuration",isDocsHomePage:!1,title:"\u5404\u30b5\u30fc\u30d3\u30b9\u306e\u521d\u671f\u8a2d\u5b9a",description:"\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u306e\u958b\u767a\u306b\u5fc5\u8981\u306a\u30a2\u30ab\u30a6\u30f3\u30c8",source:"@site/docs/reference/notification/configuration.md",slug:"/reference/notification/configuration",permalink:"/mobile-app-crib-notes/reference/notification/configuration",version:"current",lastUpdatedAt:1616404383,sidebar:"reference",previous:{title:"Firebase Cloud Messaging\u3092\u7528\u3044\u305f\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u69cb\u6210\u4f8b",permalink:"/mobile-app-crib-notes/reference/notification/infrastructure"},next:{title:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306e\u5b9f\u88c5",permalink:"/mobile-app-crib-notes/reference/notification/backend"}},c=[{value:"\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u306e\u958b\u767a\u306b\u5fc5\u8981\u306a\u30a2\u30ab\u30a6\u30f3\u30c8",id:"\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u306e\u958b\u767a\u306b\u5fc5\u8981\u306a\u30a2\u30ab\u30a6\u30f3\u30c8",children:[{value:"Apple\u306e\u30a2\u30d7\u30eaID\u767a\u884c\u3068Push Notification\u306e\u6709\u52b9\u5316",id:"apple\u306e\u30a2\u30d7\u30eaid\u767a\u884c\u3068push-notification\u306e\u6709\u52b9\u5316",children:[]},{value:"APNs Auth Key\u306e\u767a\u884c",id:"apns-auth-key\u306e\u767a\u884c",children:[]},{value:"Firebase\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210\u3068\u521d\u671f\u8a2d\u5b9a",id:"firebase\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210\u3068\u521d\u671f\u8a2d\u5b9a",children:[]},{value:"Firebase\u30a2\u30d7\u30ea\u306e\u4f5c\u6210",id:"firebase\u30a2\u30d7\u30ea\u306e\u4f5c\u6210",children:[]},{value:"Firebase\u306bAPNs Auth Key\u3092\u767b\u9332",id:"firebase\u306bapns-auth-key\u3092\u767b\u9332",children:[]},{value:"Firebase Admin SDK\u306e\u79d8\u5bc6\u9375\u306e\u751f\u6210",id:"firebase-admin-sdk\u306e\u79d8\u5bc6\u9375\u306e\u751f\u6210",children:[]}]}],o={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u306e\u958b\u767a\u306b\u5fc5\u8981\u306a\u30a2\u30ab\u30a6\u30f3\u30c8"},"\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u306e\u958b\u767a\u306b\u5fc5\u8981\u306a\u30a2\u30ab\u30a6\u30f3\u30c8"),Object(i.b)("p",null,"\u5177\u4f53\u7684\u306a\u5b9f\u88c5\u65b9\u6cd5\u306e\u8a71\u3092\u3059\u308b\u524d\u306b\u3001\u307e\u305a\u306f\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u306e\u9001\u4fe1\u306e\u305f\u3081\u306b\u5fc5\u8981\u306a\u30d5\u30a1\u30a4\u30eb\u3084\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u53d6\u5f97\u3057\u3001\u521d\u671f\u8a2d\u5b9a\u3092\u6e08\u307e\u305b\u3066\u304a\u304d\u307e\u3057\u3087\u3046\u3002"),Object(i.b)("h3",{id:"apple\u306e\u30a2\u30d7\u30eaid\u767a\u884c\u3068push-notification\u306e\u6709\u52b9\u5316"},"Apple\u306e\u30a2\u30d7\u30eaID\u767a\u884c\u3068Push Notification\u306e\u6709\u52b9\u5316"),Object(i.b)("p",null,"\u521d\u3081\u3066iOS\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u306a\u3069\u3067\u307e\u3060\u30a2\u30d7\u30eaID\u306e\u767a\u884c\u304c\u6e08\u3093\u3067\u3044\u306a\u3044\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u624b\u9806\u3067Apple\u306e\u30a2\u30d7\u30eaID\u3092\u767a\u884c\u3057\u3066\u304a\u304d\u307e\u3057\u3087\u3046\u3002"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.apple.com/membercenter/index.action"}),"Apple Developer Member Center"),"\u306b\u3001Apple Developer Program\u306b\u767b\u9332\u3057\u305fApple ID\u3067\u30ed\u30b0\u30a4\u30f3"),Object(i.b)("li",{parentName:"ol"},"\u5de6\u5074\u306e\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u300cCertificates, IDs & Profiles\u300d\u3092\u9078\u629e"),Object(i.b)("li",{parentName:"ol"},"\u5de6\u5074\u306e\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u300cIdentifiers\u300d\u5185\u306e\u300cApp IDs\u300d\u3092\u9078\u629e\u3057\u3001\u53f3\u4e0a\u306b\u3042\u308b\uff0b\u30dc\u30bf\u30f3\u3092\u62bc\u3059",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"App ID\u3092\u767a\u884c\u3059\u308b\u6a29\u9650\u304c\u306a\u3044\u5834\u5408\u306f\u3001\u30e1\u30cb\u30e5\u30fc\u306bApp IDs\u304c\u8868\u793a\u3055\u308c\u307e\u305b\u3093\u3002\u305d\u306e\u5834\u5408\u306f\u6a29\u9650\u3092\u6301\u3064\u30e6\u30fc\u30b6\u306b\u4f5c\u6210\u3092\u4f9d\u983c\u3057\u3066\u304f\u3060\u3055\u3044"))),Object(i.b)("li",{parentName:"ol"},"Name, Bundle ID\u3092\u5165\u529b"),Object(i.b)("li",{parentName:"ol"},"App Services\u30bb\u30af\u30b7\u30e7\u30f3\u5185\u306ePush Notification\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u3066\u4fdd\u5b58")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u65e2\u5b58\u306e\u30a2\u30d7\u30eaID\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u305d\u306e\u30a2\u30d7\u30eaID\u306e\u8a2d\u5b9a\u3092\u958b\u304d\u3001App Service\u30bb\u30af\u30b7\u30e7\u30f3\u3067Push Notification\u304c\u8a31\u53ef\u3055\u308c\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3057\u3066\u304a\u304d\u307e\u3057\u3087\u3046\u3002"))),Object(i.b)("h3",{id:"apns-auth-key\u306e\u767a\u884c"},"APNs Auth Key\u306e\u767a\u884c"),Object(i.b)("p",null,"iOS\u7aef\u672b\u306b\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u306b\u306f\u3001APNs Auth Key\u3068\u547c\u3070\u308c\u308b\u3001APNs\u3092\u5229\u7528\u3059\u308b\u305f\u3081\u306e\u9375\u30d5\u30a1\u30a4\u30eb\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002\nAPNs Auth Key\u306f\u3001Apple Developer Program\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u5185\u306b\u6700\u59272\u3064\u307e\u3067\u3057\u304b\u4f5c\u6210\u3067\u304d\u307e\u305b\u3093\u3002\n\u65e2\u306b\u767a\u884c\u6e08\u307f\u306eAPNs Auth Key\u304c\u3042\u308b\u304b\u30a2\u30ab\u30a6\u30f3\u30c8\u7ba1\u7406\u8005\u306e\u65b9\u306b\u78ba\u8a8d\u3057\u3001\u7121\u3051\u308c\u3070\u4ee5\u4e0b\u306e\u624b\u9806\u3067APNs Auth Key\u3092\u767a\u884c\u3057\u3066\u3082\u3089\u3044\u307e\u3057\u3087\u3046\u3002"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.apple.com/membercenter/index.action"}),"Apple Developer Member Center"),"\u306b\u3001Apple Developer Program\u306b\u767b\u9332\u3057\u305fApple ID\u3067\u30ed\u30b0\u30a4\u30f3",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Apple Developer Program\u306b\u767b\u9332\u3057\u3066\u3044\u306a\u3044Apple ID\u3067\u306fAPNs Auth Key\u306f\u767a\u884c\u3067\u304d\u307e\u305b\u3093\u3002"))),Object(i.b)("li",{parentName:"ol"},"\u5de6\u5074\u306e\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u300cCertificates, IDs & Profiles\u300d\u3092\u9078\u629e"),Object(i.b)("li",{parentName:"ol"},"\u5de6\u5074\u306e\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u300cKeys\u300d\u5185\u306e\u300cAll\u300d\u3092\u9078\u629e\u3057\u3001\u53f3\u4e0a\u306b\u3042\u308b\uff0b\u30dc\u30bf\u30f3\u3092\u62bc\u3059",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"APNs Auth Key\u3092\u767a\u884c\u3059\u308b\u6a29\u9650\u304c\u306a\u3044\u5834\u5408\u306f\u3001\u30e1\u30cb\u30e5\u30fc\u306bKeys\u304c\u8868\u793a\u3055\u308c\u307e\u305b\u3093\u3002\u305d\u306e\u5834\u5408\u306f\u6a29\u9650\u3092\u6301\u3064\u30e6\u30fc\u30b6\u306b\u4f5c\u6210\u3092\u4f9d\u983c\u3057\u3066\u304f\u3060\u3055\u3044"))),Object(i.b)("li",{parentName:"ol"},"\u65b0\u898f\u4f5c\u6210\u753b\u9762\u3067Key\u306e\u540d\u524d\u3092\u5165\u529b\u3057\u3001Key Services\u306e\u4e2d\u304b\u3089APNs\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u3066Continue\u3092\u62bc\u3059"),Object(i.b)("li",{parentName:"ol"},"\u78ba\u8a8d\u753b\u9762\u306e\u5185\u5bb9\u3092\u78ba\u8a8d\u3057\u3066Confirm\u3092\u62bc\u3059"),Object(i.b)("li",{parentName:"ol"},"APNs Auth Key\u304c\u767a\u884c\u3055\u308c\u3066Download\u30dc\u30bf\u30f3\u304c\u51fa\u3066\u304d\u307e\u3059\u306e\u3067\u3001\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u3002p8\u62e1\u5f35\u5b50\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u5f8c\u307b\u3069Firebase\u3078\u767b\u9332\u3059\u308b\u969b\u306b\u4f7f\u7528\u3057\u307e\u3059"))),Object(i.b)("li",{parentName:"ol"},"APNs Auth Key\u306e\u753b\u9762\u3067Key ID\u3092\u63a7\u3048\u3066\u304a\u304f")),Object(i.b)("p",null,"\u3053\u306eAPNs Auth Key\u306e\u30d5\u30a1\u30a4\u30eb\u3092Firebase\u306b\u767b\u9332\u3059\u308b\u3053\u3068\u3067\u3001Firebase\u7d4c\u7531\u3067iOS\u7aef\u672b\u306b\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u304c\u9001\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),Object(i.b)("h3",{id:"firebase\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210\u3068\u521d\u671f\u8a2d\u5b9a"},"Firebase\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210\u3068\u521d\u671f\u8a2d\u5b9a"),Object(i.b)("p",null,"Firebase Cloud Messaging\u3092\u7528\u3044\u3066\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u306b\u306f\u3001Firebase\u3092\u5229\u7528\u3059\u308b\u305f\u3081\u306eGoogle\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u5fc5\u8981\u3067\u3059\u3002\n\u65e2\u306bGoogle\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3063\u3066\u3044\u308b\u5834\u5408\u306f\u3001",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://console.firebase.google.com/"}),"Firebase\u30b3\u30f3\u30bd\u30fc\u30eb"),"\u304b\u3089\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u3060\u3051\u3067Firebase\u306e\u5229\u7528\u3092\u958b\u59cb\u3067\u304d\u307e\u3059\u3002\n\u6301\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306e\u4e0b\u5074\u306b\u3042\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u3092\u9078\u629e\u3057\u3001\u753b\u9762\u306e\u8aac\u660e\u306b\u3057\u305f\u304c\u3063\u3066Google\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046\u3002"),Object(i.b)("p",null,"Firebase\u306e\u30b3\u30f3\u30bd\u30fc\u30eb\u753b\u9762\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u3089\u3001\u958b\u767a\u306b\u5229\u7528\u3059\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30921\u3064\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046\u3002"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u30c8\u30c3\u30d7\u753b\u9762\u306b\u3042\u308b\u300c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3059"),Object(i.b)("li",{parentName:"ol"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d\u3092\u5165\u529b\u3057\u3001\u898f\u7d04\u3092\u78ba\u8a8d\u3057\u305f\u4e0a\u3067\u540c\u610f\u3057\u3066\u300c\u7d9a\u884c\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3059"),Object(i.b)("li",{parentName:"ol"},"Google Analytics\u3092\u6709\u52b9\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u9078\u629e\u3057\u3066\u300c\u7d9a\u884c\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3059"),Object(i.b)("li",{parentName:"ol"},"Google Analytics\u3092\u6709\u52b9\u306b\u3057\u305f\u5834\u5408\u306f\u3001\u5730\u57df\u30fb\u521d\u671f\u8a2d\u5b9a\u30fb\u898f\u7d04\u3078\u306e\u540c\u610f\u3092\u5165\u529b\u3057\u3066\u300c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3059")),Object(i.b)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3068\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u753b\u9762\u306b\u9077\u79fb\u3057\u307e\u3059\u3002\n\u6b21\u306f\u3001iOS\u30a2\u30d7\u30ea\u3068Android\u30a2\u30d7\u30ea\u30921\u3064\u305a\u3064\u767b\u9332\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),Object(i.b)("h3",{id:"firebase\u30a2\u30d7\u30ea\u306e\u4f5c\u6210"},"Firebase\u30a2\u30d7\u30ea\u306e\u4f5c\u6210"),Object(i.b)("p",null,"Android\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b\u624b\u9806\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u753b\u9762\u306b\u3042\u308bAndroid\u30a2\u30d7\u30ea\u8ffd\u52a0\u306e\u30dc\u30bf\u30f3\u3092\u62bc\u3059"),Object(i.b)("li",{parentName:"ol"},"\u4ee5\u4e0b\u306e\u9805\u76ee\u3092\u5165\u529b",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Android\u30d1\u30c3\u30b1\u30fc\u30b8\u540d",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u306eandroid/app/build.gradle\u30d5\u30a1\u30a4\u30eb\u5185\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308bapplicationId\u306e\u5024\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"))),Object(i.b)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u306e\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\uff08\u7701\u7565\u53ef\uff09",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Firebase\u30b3\u30f3\u30bd\u30fc\u30eb\u4e0a\u3067\u306e\u8868\u793a\u540d\u3067\u3059\u3002\u81ea\u7531\u306b\u547d\u540d\u3057\u3066\u69cb\u3044\u307e\u305b\u3093"))),Object(i.b)("li",{parentName:"ul"},"\u30c7\u30d0\u30c3\u30b0\u7528\u306e\u7f72\u540d\u8a3c\u660e\u66f8SHA-1\uff08\u7701\u7565\u53ef\uff09",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Firebase Dynamic Links\u3084\u3001Firebase Authentication\u3067Google\u30ed\u30b0\u30a4\u30f3\u3084\u96fb\u8a71\u756a\u53f7\u30ed\u30b0\u30a4\u30f3\u3092\u7528\u3044\u308b\u5834\u5408\u306b\u5fc5\u8981\u3067\u3059"),Object(i.b)("li",{parentName:"ul"},"\u5f8c\u304b\u3089\u3067\u3082\u8a2d\u5b9a\u3067\u304d\u308b\u306e\u3067\u3001\u4e00\u65e6\u7a7a\u306e\u307e\u307e\u9032\u3081\u3066\u3082\u554f\u984c\u3042\u308a\u307e\u305b\u3093"))))),Object(i.b)("li",{parentName:"ol"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u753b\u9762\u304b\u3089google-services.json\u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304a\u304d\u307e\u3059"),Object(i.b)("li",{parentName:"ul"},"\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u5f8c\u307b\u3069Android\u30a2\u30d7\u30ea\u306e\u958b\u767a\u6642\u306b\u4f7f\u7528\u3057\u307e\u3059"))),Object(i.b)("li",{parentName:"ol"},"Firebase SDK\u306e\u8ffd\u52a0\u624b\u9806\u3001\u521d\u671f\u5316\u30b3\u30fc\u30c9\u306e\u8ffd\u52a0\u624b\u9806\u3092\u78ba\u8a8d",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3053\u306e\u30ac\u30a4\u30c9\u3067\u3082\u5f8c\u8ff0\u3059\u308b\u305f\u3081\u3001\u3053\u306e\u6642\u70b9\u3067\u306f\u8efd\u304f\u78ba\u8a8d\u3059\u308b\u3060\u3051\u3067\u69cb\u3044\u307e\u305b\u3093")))),Object(i.b)("p",null,"iOS\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b\u624b\u9806\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u753b\u9762\u306b\u3042\u308biOS\u30a2\u30d7\u30ea\u8ffd\u52a0\u306e\u30dc\u30bf\u30f3\u3092\u62bc\u3059"),Object(i.b)("li",{parentName:"ol"},"\u4ee5\u4e0b\u306e\u9805\u76ee\u3092\u5165\u529b",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"iOS\u30d0\u30f3\u30c9\u30ebID",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"iOS\u30d0\u30f3\u30c9\u30ebID\u306fXcode\u3067iOS\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304d\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30ca\u30d3\u30b2\u30fc\u30bf\u3067\u6700\u4e0a\u4f4d\u306e\u30a2\u30d7\u30ea\u3092\u9078\u629e\u3057\u3066General\u30bf\u30d6\u5185\u306eBundle Identifier\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5024\u304b\u3089\u78ba\u8a8d\u3067\u304d\u307e\u3059"))),Object(i.b)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u306e\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\uff08\u7701\u7565\u53ef\uff09",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Firebase\u30b3\u30f3\u30bd\u30fc\u30eb\u4e0a\u3067\u306e\u8868\u793a\u540d\u3067\u3059\u3002\u81ea\u7531\u306b\u547d\u540d\u3057\u3066\u69cb\u3044\u307e\u305b\u3093"))),Object(i.b)("li",{parentName:"ul"},"Apple Store ID\uff08\u7701\u7565\u53ef\uff09",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Firebase Dynamic Links\u3067\u30e6\u30fc\u30b6\u3092App Store\u30da\u30fc\u30b8\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3059\u308b\u5834\u5408\u306a\u3069\u3067\u5fc5\u8981\u3067\u3059"),Object(i.b)("li",{parentName:"ul"},"\u5f8c\u304b\u3089\u3067\u3082\u8a2d\u5b9a\u3067\u304d\u308b\u306e\u3067\u3001\u4e00\u65e6\u7a7a\u306e\u307e\u307e\u9032\u3081\u3066\u3082\u554f\u984c\u3042\u308a\u307e\u305b\u3093"))))),Object(i.b)("li",{parentName:"ol"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u753b\u9762\u304b\u3089GoogleService-Info.plist\u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304a\u304d\u307e\u3059"),Object(i.b)("li",{parentName:"ul"},"\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u5f8c\u307b\u3069iOS\u30a2\u30d7\u30ea\u306e\u958b\u767a\u6642\u306b\u4f7f\u7528\u3057\u307e\u3059"))),Object(i.b)("li",{parentName:"ol"},"Firebase SDK\u306e\u8ffd\u52a0\u624b\u9806\u3001\u521d\u671f\u5316\u30b3\u30fc\u30c9\u306e\u8ffd\u52a0\u624b\u9806\u3092\u78ba\u8a8d",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3053\u306e\u30ac\u30a4\u30c9\u3067\u3082\u5f8c\u8ff0\u3059\u308b\u305f\u3081\u3001\u3053\u306e\u6642\u70b9\u3067\u306f\u8efd\u304f\u78ba\u8a8d\u3059\u308b\u3060\u3051\u3067\u69cb\u3044\u307e\u305b\u3093")))),Object(i.b)("h3",{id:"firebase\u306bapns-auth-key\u3092\u767b\u9332"},"Firebase\u306bAPNs Auth Key\u3092\u767b\u9332"),Object(i.b)("p",null,"iOS\u30a2\u30d7\u30ea\u3092Firebase\u306b\u767b\u9332\u3059\u308b\u3068\u3001APNs Auth Key\u3092\u8a2d\u5b9a\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\n\u3053\u308c\u3092\u8a2d\u5b9a\u3057\u3066\u304a\u304b\u306a\u3044\u3068iOS\u7aef\u672b\u3078\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u3092\u9001\u4fe1\u3067\u304d\u306a\u3044\u306e\u3067\u3001\u8a2d\u5b9a\u3057\u3066\u304a\u304d\u307e\u3057\u3087\u3046\u3002"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u753b\u9762\u306e\u5de6\u5074\u30e1\u30cb\u30e5\u30fc\u5185\u306b\u3042\u308b\u3001\u8a2d\u5b9a\u30dc\u30bf\u30f3\uff08\u6b6f\u8eca\u306e\u30a2\u30a4\u30b3\u30f3\uff09\u3092\u62bc\u3057\u3001\u300c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u8a2d\u5b9a\u300d\u3092\u9078\u629e"),Object(i.b)("li",{parentName:"ol"},"Cloud Messaging\u306e\u30bf\u30d6\u3092\u958b\u304f"),Object(i.b)("li",{parentName:"ol"},"iOS\u30a2\u30d7\u30ea\u306e\u69cb\u6210\u306e\u6b04\u3067\u3001\u8a2d\u5b9a\u3057\u305f\u3044iOS\u30a2\u30d7\u30ea\u3092\u9078\u3076"),Object(i.b)("li",{parentName:"ol"},"APNs\u8a8d\u8a3c\u30ad\u30fc\u306e\u6b04\u3067\u3001\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3092\u9078\u629e"),Object(i.b)("li",{parentName:"ol"},"\u53c2\u7167\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3001\u4e8b\u524d\u306b\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304a\u3044\u305fAPNs Auth Key\u306e\u30d5\u30a1\u30a4\u30eb\uff08.p8\u62e1\u5f35\u5b50\u306e\u30d5\u30a1\u30a4\u30eb\uff09\u3092\u9078\u629e"),Object(i.b)("li",{parentName:"ol"},"\u30ad\u30fcID\u3068\u30c1\u30fc\u30e0ID\u3092\u5165\u529b\u3057\u3066\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u30dc\u30bf\u30f3\u3092\u62bc\u3059",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u30ad\u30fcID\u306f",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.apple.com/account/resources/authkeys/list"}),"Apple Developer Member Center"),"\u306eCertificates, Identifiers & Profiles\u5185\u306eKeys\u304b\u3089\u5bfe\u8c61\u306eKey\u3092\u9078\u629e\u3059\u308b\u3068\u78ba\u8a8d\u3067\u304d\u307e\u3059"),Object(i.b)("li",{parentName:"ul"},"\u30c1\u30fc\u30e0ID\u306f",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.apple.com/account/#/membership/"}),"Apple Developer Member Center"),"\u306eMembership\u306e\u753b\u9762\u304b\u3089\u78ba\u8a8d\u3067\u304d\u307e\u3059")))),Object(i.b)("h3",{id:"firebase-admin-sdk\u306e\u79d8\u5bc6\u9375\u306e\u751f\u6210"},"Firebase Admin SDK\u306e\u79d8\u5bc6\u9375\u306e\u751f\u6210"),Object(i.b)("p",null,"\u6700\u5f8c\u306b\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d0\u304b\u3089Firebase\u306eAPI\u3092\u547c\u3073\u3060\u3059\u969b\u306e\u8a8d\u8a3c\u60c5\u5831\u3068\u306a\u308b\u3001Firebase Admin SDK\u306e\u79d8\u5bc6\u9375\u3092\u751f\u6210\u3057\u307e\u3057\u3087\u3046\u3002"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u753b\u9762\u306e\u5de6\u5074\u30e1\u30cb\u30e5\u30fc\u5185\u306b\u3042\u308b\u3001\u8a2d\u5b9a\u30dc\u30bf\u30f3\uff08\u6b6f\u8eca\u306e\u30a2\u30a4\u30b3\u30f3\uff09\u3092\u62bc\u3057\u3001\u300c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u8a2d\u5b9a\u300d\u3092\u9078\u629e"),Object(i.b)("li",{parentName:"ol"},"\u30b5\u30fc\u30d3\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30bf\u30d6\u3092\u958b\u304f"),Object(i.b)("li",{parentName:"ol"},"Firebase Admin SDK\u306e\u6b04\u306e\u4e00\u756a\u4e0b\u306b\u3042\u308b\u300c\u65b0\u3057\u3044\u79d8\u5bc6\u9375\u306e\u751f\u6210\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3059"),Object(i.b)("li",{parentName:"ol"},"\u300c\u30ad\u30fc\u3092\u751f\u6210\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u79d8\u5bc6\u9375\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u5f8c\u307b\u3069\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u5074\u306e\u30b3\u30fc\u30c9\u306e\u5b9f\u88c5\u6642\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002")))),Object(i.b)("p",null,"\u4ee5\u4e0a\u3067Firebase\u5074\u306e\u8a2d\u5b9a\u306f\u5b8c\u4e86\u3067\u3059\u3002\n\u6b21\u306f\u958b\u767a\u306b\u53d6\u308a\u639b\u304b\u308a\u307e\u3057\u3087\u3046\u3002"))}p.isMDXComponent=!0},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(a),O=n,m=u["".concat(l,".").concat(O)]||u[O]||s[O]||i;return a?r.a.createElement(m,b(b({ref:t},o),{},{components:a})):r.a.createElement(m,b({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=O;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var o=2;o<i;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);