(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{102:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,O=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return a?r.a.createElement(O,b(b({ref:t},p),{},{components:a})):r.a.createElement(O,b({ref:t},p))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var p=2;p<i;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},154:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/authn-overview.drawio-7233f914fc1bed8aa5056b40e7d63f4a.png"},155:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/stateless-authn-overview.drawio-ece58aa1e6b8ac48d6ed388a8e5c284c.png"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(102)),c={title:"\u8a8d\u8a3c\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"},b={unversionedId:"reference/auth/authn-architecture",id:"reference/auth/authn-architecture",isDocsHomePage:!1,title:"\u8a8d\u8a3c\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",description:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u901a\u4fe1\u30d7\u30ed\u30c8\u30b3\u30eb\u3068\u3057\u3066HTTP\u3092\u4f7f\u3046\u306e\u304c\u4e00\u822c\u7684\u3067\u3059\u304c\u3001HTTP\u81ea\u4f53\u306f\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u30d7\u30ed\u30c8\u30b3\u30eb\u3067\u3059\u3002\u305d\u306e\u305f\u3081\u521d\u56de\u4ee5\u964d\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u30e6\u30fc\u30b6\u306b\u7d10\u4ed8\u3051\u308b\u5834\u5408\u3001\u30b9\u30c6\u30fc\u30c8\u30d5\u30eb\u306a\u8a8d\u8a3c\u3001\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u8a8d\u8a3c\u306e\u3044\u305a\u308c\u304b\u3092\u4f7f\u3046\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002",source:"@site/docs/reference/auth/authn-architecture.md",slug:"/reference/auth/authn-architecture",permalink:"/mobile-app-crib-notes/reference/auth/authn-architecture",version:"current",lastUpdatedAt:1612864624,sidebar:"reference",previous:{title:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u95a2\u9023\u30ea\u30f3\u30af",permalink:"/mobile-app-crib-notes/reference/security/awesome-sites"},next:{title:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306e\u8868\u793a\u30d1\u30bf\u30fc\u30f3",permalink:"/mobile-app-crib-notes/reference/auth/login-screens"}},o=[],p={toc:o};function l(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u901a\u4fe1\u30d7\u30ed\u30c8\u30b3\u30eb\u3068\u3057\u3066HTTP\u3092\u4f7f\u3046\u306e\u304c\u4e00\u822c\u7684\u3067\u3059\u304c\u3001HTTP\u81ea\u4f53\u306f\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u30d7\u30ed\u30c8\u30b3\u30eb\u3067\u3059\u3002\u305d\u306e\u305f\u3081\u521d\u56de\u4ee5\u964d\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u30e6\u30fc\u30b6\u306b\u7d10\u4ed8\u3051\u308b\u5834\u5408\u3001\u30b9\u30c6\u30fc\u30c8\u30d5\u30eb\u306a\u8a8d\u8a3c\u3001\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u8a8d\u8a3c\u306e\u3044\u305a\u308c\u304b\u3092\u4f7f\u3046\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u672c\u30da\u30fc\u30b8\u3067\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u3001\u30d5\u30a1\u30fc\u30b9\u30c8\u30d1\u30fc\u30c6\u30a3\u30fc\u3067\u3042\u308b",Object(i.b)("strong",{parentName:"p"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0"),"(\u30d0\u30c3\u30af\u30a8\u30f3\u30c9API)\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u969b\u306e",Object(i.b)("strong",{parentName:"p"},"\u8a8d\u8a3c"),"\u306b\u3064\u3044\u3066\u8a00\u53ca\u3057\u3066\u3044\u307e\u3059\u3002\n",Object(i.b)("img",{alt:"\u8a8d\u8a3c",src:a(154).default})),Object(i.b)("p",{parentName:"div"},"\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u8a8d\u8a3c\u3067\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u304cRelying Party\u306b\u3042\u305f\u308a\u307e\u3059\u3002\u307e\u305f\u8a8d\u8a3c\u30b5\u30fc\u30d0\uff08\u30d5\u30a1\u30fc\u30b9\u30c8\u30d1\u30fc\u30c6\u30a3\u30fc\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30fc\u3069\u3061\u3089\u3067\u3082\u53ef\uff09\u3092\u4f7f\u3046\u524d\u63d0\u3067\u3059\u3002"),Object(i.b)("p",{parentName:"div"},Object(i.b)("img",{alt:"\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u8a8d\u8a3c",src:a(155).default})),Object(i.b)("p",{parentName:"div"},"\u306a\u304a\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u8a8d\u8a3c\u3068\u3042\u308f\u305b\u3066\u8a00\u53ca\u3055\u308c\u308b\u3053\u3068\u306e\u591a\u3044\u3001\u8a8d\u53ef\uff08\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304cRelying Party\u3068\u306a\u308a\u3001",Object(i.b)("strong",{parentName:"p"},"\u30ea\u30bd\u30fc\u30b9\u30b5\u30fc\u30d0"),"\u3078\u30a2\u30af\u30bb\u30b9\u3059\u308b\u969b\u306e",Object(i.b)("strong",{parentName:"p"},"\u8a8d\u53ef"),"\uff09\u306b\u3064\u3044\u3066\u306f\u8a00\u53ca\u3057\u307e\u305b\u3093\u3002"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u30b9\u30c6\u30fc\u30c8\u30d5\u30eb\u306a\u8a8d\u8a3c")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u30ed\u30b0\u30a4\u30f3\u6642\u306b\u30e6\u30cb\u30fc\u30af\u306a\u30bb\u30c3\u30b7\u30e7\u30f3ID\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u3067\u751f\u6210\u3059\u308b"),Object(i.b)("li",{parentName:"ul"},"\u30ea\u30af\u30a8\u30b9\u30c8\u3068\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u306b\u4fdd\u5b58\u3055\u308c\u305f\u30e6\u30fc\u30b6\u60c5\u5831\u3092\u7d10\u4ed8\u3051\u308b\u305f\u3081\u306b\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u6bce\u56de\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u30bb\u30c3\u30b7\u30e7\u30f3ID\u3092\u542b\u3081\u308b"),Object(i.b)("li",{parentName:"ul"},"\u30bb\u30c3\u30b7\u30e7\u30f3ID\u306f\u305f\u3060\u306e\u8b58\u5225\u5b50\u3067\u3042\u308a\u3001\u30e6\u30fc\u30b6\u60c5\u5831\u306f\u542b\u307e\u306a\u3044"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/mobile-app-crib-notes/reference/auth/stateless-authn"}),Object(i.b)("strong",{parentName:"a"},"\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u8a8d\u8a3c"))),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u3092\u8b58\u5225\u3059\u308b\u305f\u3081\u306e\u60c5\u5831\u306f\u3059\u3079\u3066\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067\u30c8\u30fc\u30af\u30f3\u3068\u3057\u3066\u4fdd\u5b58\u3055\u308c\u308b"),Object(i.b)("li",{parentName:"ul"},"\u30ea\u30af\u30a8\u30b9\u30c8\u3068\u30e6\u30fc\u30b6\u60c5\u5831\u3092\u7d10\u4ed8\u3051\u308b\u305f\u3081\u306b\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u6bce\u56de\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u30c8\u30fc\u30af\u30f3\u3092\u542b\u3081\u308b"),Object(i.b)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u306f\u30c8\u30fc\u30af\u30f3\u306e\u6b63\u5f53\u6027\u3092\u691c\u8a3c\u3057\u305f\u3046\u3048\u3067\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u542b\u307e\u308c\u308b\u30c8\u30fc\u30af\u30f3\u304b\u3089\u30e6\u30fc\u30b6\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b"),Object(i.b)("li",{parentName:"ul"},"\u3053\u306e\u5834\u5408\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u306f\u30e6\u30fc\u30b6\u3054\u3068\u306e\u8a8d\u8a3c\u72b6\u614b\u3092\u30bb\u30c3\u30b7\u30e7\u30f3\u306a\u3069\u3067\u7ba1\u7406\u3059\u308b\u5fc5\u8981\u304c\u306a\u3044"),Object(i.b)("li",{parentName:"ul"},"\u4e00\u5ea6\u767a\u884c\u3055\u308c\u305f\u30c8\u30fc\u30af\u30f3\u306f\u57fa\u672c\u7684\u306b\u6709\u52b9\u671f\u9650\u307e\u3067\u6709\u52b9\u3068\u306a\u308b\u3002\u500b\u5225\u306b\u30c8\u30fc\u30af\u30f3\u3092\u5931\u52b9\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u306a\u3044",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u305d\u306e\u305f\u3081\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u7406\u7531\u306b\u3088\u308a\u7279\u5b9a\u306e\u30c8\u30fc\u30af\u30f3\u3092\uff08\u6709\u52b9\u671f\u9650\u524d\u306b\uff09\u5931\u52b9\u3055\u305b\u305f\u3044\u5834\u5408\u306b\u306f\u3001\u5931\u52b9\u3057\u305f\u30c8\u30fc\u30af\u30f3\u3092\u7ba1\u7406\u3059\u308b\u306a\u3069\u306e\u4ed5\u7d44\u307f\u304c\u5fc5\u8981\u3002\u3053\u306e\u5834\u5408\u30b9\u30c6\u30fc\u30c8\u30d5\u30eb\u8a8d\u8a3c\u306e\u5834\u5408\u3068\u540c\u3058\u3088\u3046\u306b\u30b9\u30b1\u30fc\u30eb\u30a2\u30a6\u30c8\u3057\u305f\u3059\u3079\u3066\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u3067\u5931\u52b9\u30ea\u30b9\u30c8\u3092\u5171\u6709\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306fWeb\u3068\u6bd4\u3079\u3066\u30c8\u30fc\u30af\u30f3\u3092\u6a5f\u5bc6\u60c5\u5831\u3068\u3057\u3066\u7ba1\u7406\u3057\u3084\u3059\u3044"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5834\u5408\u3001\u30c8\u30fc\u30af\u30f3\u306f\u30ed\u30fc\u30ab\u30eb\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u30bb\u30c3\u30b7\u30e7\u30f3\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u4fdd\u5b58\u3059\u308b\u304c\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u9762\u3067\u5b89\u5168\u3068\u306f\u8a00\u3044\u96e3\u3044"),Object(i.b)("li",{parentName:"ul"},"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5834\u5408\u3001Android\u306a\u3089KeyStore\u3001iOS\u306a\u3089KeyChain\u3092\u4f7f\u3048\u3070\u30bb\u30ad\u30e5\u30a2\u306b\u30c8\u30fc\u30af\u30f3\u3092\u4fdd\u5b58\u3067\u304d\u308b\uff08\u53c2\u8003\uff1a ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/mobile-app-crib-notes/reference/auth/manage-credentials"}),"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406\u65b9\u6cd5"),"\uff09"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u3067\u7ba1\u7406\u3059\u308b\u5fc5\u8981\u304c\u306a\u3044\u305f\u3081\u3001\u30b9\u30b1\u30fc\u30e9\u30d3\u30ea\u30c6\u30a3\u3068\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u5411\u4e0a\u3059\u308b")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8a8d\u8a3c\u30ed\u30b8\u30c3\u30af\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u5206\u96e2\u3067\u304d\u3001\u8a8d\u8a3c\u30b5\u30fc\u30d0\u3067\u30c8\u30fc\u30af\u30f3\u3092\u751f\u6210\u3067\u304d\u308b\u306e\u3067\u3001\u8a8d\u8a3c\u30ed\u30b8\u30c3\u30af\u3092\u7c21\u5358\u306b\u5207\u308a\u66ff\u3048\u3089\u308c\u308b"))),Object(i.b)("p",null,"\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u8a8d\u8a3c\u30fb\u30b9\u30c6\u30fc\u30c8\u30d5\u30eb\u8a8d\u8a3c\u306b\u5bfe\u3057\u3066\u3001\u4e00\u6982\u306b\u512a\u52a3\u3092\u3064\u3051\u308b\u3053\u3068\u306f\u96e3\u3057\u3044\u3067\u3059\u3002\n\u8a8d\u8a3c\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3068\u3057\u3066\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u8a8d\u8a3c\u30fb\u30b9\u30c6\u30fc\u30c8\u30d5\u30eb\u8a8d\u8a3c\u306e\u3044\u305a\u308c\u3092\u63a1\u7528\u3059\u308b\u304b\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u8003\u616e\u3057\u3066\u5224\u65ad\u3059\u308b\u306e\u304c\u826f\u3044\u3067\u3059\u3002\n\u4f8b\u3048\u3070\u3001\u3059\u3067\u306b\u30b9\u30c6\u30fc\u30c8\u30d5\u30eb\u8a8d\u8a3c\u306e\u4ed5\u7d44\u307f\u304c\u3042\u308b\u30b7\u30b9\u30c6\u30e0\u306b\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u305f\u3081\u3060\u3051\u306b\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u8a8d\u8a3c\u3092\u5c0e\u5165\u3059\u308b\u5fc5\u7136\u6027\u306f\u306a\u3044\u3068\u8003\u3048\u307e\u3059\u3057\u3001\u9006\u3082\u540c\u69d8\u3060\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u53c2\u8003\uff1a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://mobile-security.gitbook.io/mobile-security-testing-guide/general-mobile-app-testing-guide/0x04e-testing-authentication-and-session-management#stateful-vs-stateless-authentication"}),"Mobile App Authentication Architectures - Mobile Security Testing Guide")))))}l.isMDXComponent=!0}}]);