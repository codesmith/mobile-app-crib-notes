(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{175:function(e,a,t){"use strict";t.d(a,"a",(function(){return O}));var r=t(3),n=t(7),c=t(173),l=t(171),i=t(166),m=t(0),s=t.n(m),u=t(56),o=t.n(u),v=function(e){var a=e.children,t=e.colSize,m=void 0===t?4:t,u=Object(n.a)(e,["children","colSize"]),v=Object(l.a)(u.to);return s.a.createElement("div",{className:Object(i.a)("col","col--"+m,o.a.pageOverviewContainer)},s.a.createElement(c.a,Object(r.a)({className:Object(i.a)("card",o.a.pageOverviewLinkCard)},u,{to:v}),a))},d=function(e){var a=e.title;return s.a.createElement("div",{className:Object(i.a)("card__header",o.a.pageOverviewTitle)},s.a.createElement("h3",null,a))},g=function(e){var a=e.src,t=e.alt,c=Object(n.a)(e,["src","alt"]),m=Object(l.a)(a);return s.a.createElement("div",{className:Object(i.a)("card__image")},s.a.createElement("img",Object(r.a)({className:o.a.pageOverviewImage},c,{alt:t,src:m})))},E=function(e){var a=e.summary;return s.a.createElement("div",{className:Object(i.a)("card__body",o.a.pageOverviewSummary)},s.a.createElement("p",null,a))},b=function(e){var a=e.title,t=e.imageUrl,r=e.summary,c=Object(n.a)(e,["title","imageUrl","summary"]);return s.a.createElement(v,c,s.a.createElement(d,{title:a+" \xbb"}),t&&s.a.createElement(g,{src:t,alt:a}),r&&s.a.createElement(E,{summary:r}))},O=function(e){var a=e.overviews,t=e.colSize;return s.a.createElement("section",{className:Object(i.a)(o.a.pageList)},s.a.createElement("div",{className:Object(i.a)("container")},s.a.createElement("div",{className:Object(i.a)("row",o.a.pageListRow)},a.map((function(e){return s.a.createElement(b,Object(r.a)({key:e.to,colSize:t},e))})))))}},88:function(e,a,t){"use strict";t.r(a);var r=t(20),n=t(179),c=t(166),l=t(0),i=t.n(l),m=t(175),s=t(89),u=t.n(s),o=[{title:"Reference",to:"reference",imageUrl:"img/undraw_docusaurus_mountain.svg",summary:i.a.createElement(i.a.Fragment,null,"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9")},{title:"Distribution",to:"distribution",imageUrl:"img/undraw_docusaurus_mountain.svg",summary:i.a.createElement(i.a.Fragment,null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u914d\u5e03")}],v=[{title:"Learn React Native",to:"react-native/learn",imageUrl:"img/undraw_docusaurus_react.svg",summary:i.a.createElement(i.a.Fragment,null,"\u5b66\u7fd2\u7528\u30b3\u30f3\u30c6\u30f3\u30c4")},{title:"Troubleshooting",to:"react-native/troubleshooting",imageUrl:"img/undraw_docusaurus_react.svg",summary:i.a.createElement(i.a.Fragment,null,"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c8")}];a.default=function(){var e=Object(r.default)().siteConfig;return i.a.createElement(n.a,null,i.a.createElement("header",{className:Object(c.a)("hero hero--primary",u.a.heroBanner)},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"hero__title"},(null==e?void 0:e.title)||""),i.a.createElement("p",{className:"hero__subtitle"},(null==e?void 0:e.tagline)||""))),i.a.createElement("main",null,i.a.createElement(m.a,{overviews:o,colSize:4}),i.a.createElement(m.a,{overviews:v,colSize:4})))}}}]);