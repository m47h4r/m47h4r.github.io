(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(17),s=n.n(i),r=(n(24),n(7)),o=n(11),l=(n(25),n(0));function j(e){var t=e.children,n=e.isDense,c=Object(o.a)(e,["children","isDense"]),a=n?"glass-container glass-container--dense":"glass-container";return Object(l.jsx)("div",Object(r.a)(Object(r.a)({className:a},c),{},{children:t}))}n(27);function u(e){var t=e.style,n=e.children;return Object(l.jsx)("div",{style:t,className:"image-background",children:n})}n(28);function b(e){var t=e.children;return Object(l.jsx)("div",{className:"main-container",children:t})}n(29),n(30);var h=n(9);function d(e){var t=e.text,n=e.isActive,c=Object(o.a)(e,["text","isActive"]),a=n?"link link--active":"link";return Object(l.jsx)(h.b,Object(r.a)(Object(r.a)({className:a},c),{},{children:t}))}n(36);function f(){return Object(l.jsx)("div",{className:"faded-divider-line"})}var O=n(2);function x(){var e=Object(O.f)().pathname;return Object(l.jsxs)("div",{className:"navigation-sidebar",children:[Object(l.jsx)(d,{to:"/",text:"Home",isActive:"/"===e}),Object(l.jsx)(f,{}),Object(l.jsx)(d,{to:"/blog",text:"Diary",isActive:"/blog"===e}),Object(l.jsx)(f,{}),Object(l.jsx)(d,{to:"/about",text:"About",isActive:"/about"===e})]})}function m(){return Object(l.jsx)("p",{children:"I am Diary, I will contain articles that Maz wrote and want everyone to see."})}n(37);var v=n.p+"static/media/profile.96e21011.jpeg";function g(){return Object(l.jsxs)("div",{className:"about",children:[Object(l.jsx)("img",{className:"about__profile-image",src:v,alt:"Profile of Maz"}),Object(l.jsx)("p",{className:"about__paragraph",children:"Not much here!"}),Object(l.jsx)("p",{className:"about__paragraph",children:"Just that my career is Software development, my hobbies include binge watching good series or sitcoms, and last but not least (maybe even best), I love reading good books and learning about the truth."})]})}var p=n(19),N=[{filename:"the-unbearable-lightness-of-being",author:"Milan Kundera",source:"The Unbearable Lightness of Being"},{filename:"the-end-of-faith",author:"Sam Harris",source:"The End of Faith"},{filename:"a-fraction-of-the-whole",author:"Steve Toltz",source:"A Fraction of the Whole"}];n(38);function _(){var e=Object(c.useState)({text:"",author:"",source:""}),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e,t=(e=N)[Math.floor(Math.random()*e.length)],n="/data/quote/"+t.filename;fetch(n).then((function(e){return e.text()})).then((function(e){a((function(n){return Object(r.a)(Object(r.a)({},n),{},{text:e,author:t.author,source:t.source})}))}))}),[]),Object(l.jsxs)("div",{className:"quote",children:[Object(l.jsx)("p",{className:"quote__text",children:n.text}),Object(l.jsx)("p",{className:"quote__author",children:n.author}),Object(l.jsx)("p",{className:"quote__source",children:n.source})]})}function y(){return Object(l.jsx)(_,{})}var w=function(){return Object(l.jsx)(h.a,{children:Object(l.jsx)(u,{children:Object(l.jsxs)(b,{children:[Object(l.jsx)(j,{children:Object(l.jsx)(x,{})}),Object(l.jsx)(j,{style:{flexGrow:"1"},isDense:!0,children:Object(l.jsxs)(O.c,{children:[Object(l.jsx)(O.a,{path:"/blog",children:Object(l.jsx)(m,{})}),Object(l.jsx)(O.a,{path:"/about",children:Object(l.jsx)(g,{})}),Object(l.jsx)(O.a,{path:"/",children:Object(l.jsx)(y,{})})]})})]})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root")),k()}},[[39,1,2]]]);
//# sourceMappingURL=main.8a344501.chunk.js.map