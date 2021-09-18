(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[114],{1305:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(3),r=a(38),c=a(25),i=a(403),o=a(199),s=a(1275),l=a(35),d=a(0),b=["links","action","heading","moreLink","sx"];function j(e){var t=e.links,a=e.action,j=e.heading,u=e.moreLink,h=void 0===u?[]:u,m=e.sx,p=Object(r.a)(e,b);return Object(d.jsxs)(i.a,{sx:Object(n.a)({mb:5},m),children:[Object(d.jsxs)(i.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(d.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:j}),Object(d.jsx)(l.b,Object(n.a)({links:t},p))]}),a&&Object(d.jsx)(i.a,{sx:{flexShrink:0},children:a})]}),Object(d.jsx)(i.a,{sx:{mt:2},children:Object(c.isString)(h)?Object(d.jsx)(s.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(d.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1314:function(e,t,a){"use strict";var n=a(6),r=a(8),c=a(2),i=a(1),o=(a(10),a(12)),s=a(235),l=a(199),d=a(13),b=a(7),j=a(197),u=a(236);function h(e){return Object(j.a)("MuiCardHeader",e)}var m=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),p=a(0),x=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],O=Object(b.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(c.a)((a={},Object(n.a)(a,"& .".concat(m.title),t.title),Object(n.a)(a,"& .".concat(m.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),g=Object(b.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=Object(b.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=Object(b.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=i.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),n=a.action,i=a.avatar,b=a.className,j=a.component,u=void 0===j?"div":j,m=a.disableTypography,y=void 0!==m&&m,k=a.subheader,C=a.subheaderTypographyProps,w=a.title,M=a.titleTypographyProps,S=Object(r.a)(a,x),L=Object(c.a)({},a,{component:u,disableTypography:y}),P=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)}(L),R=w;null==R||R.type===l.a||y||(R=Object(p.jsx)(l.a,Object(c.a)({variant:i?"body2":"h5",className:P.title,component:"span",display:"block"},M,{children:R})));var T=k;return null==T||T.type===l.a||y||(T=Object(p.jsx)(l.a,Object(c.a)({variant:i?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:T}))),Object(p.jsxs)(O,Object(c.a)({className:Object(o.a)(P.root,b),as:u,ref:t,ownerState:L},S,{children:[i&&Object(p.jsx)(g,{className:P.avatar,ownerState:L,children:i}),Object(p.jsxs)(f,{className:P.content,ownerState:L,children:[R,T]}),n&&Object(p.jsx)(v,{className:P.action,ownerState:L,children:n})]}))}));t.a=y},2634:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(17),r=a(1),c=a(7),i=a(403),o=a(1286),s=a(1189),l=a(1299),d=a(1314),b=a(1256),j=a(1297),u=a(1262),h=a(199),m=a(2684),p=a(23),x=a(284),O=a(406),g=a(1305),v=a(0),f=Object(c.a)(O.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function y(){var e=Object(x.a)(),t=e.allLang,a=e.currentLang,c=e.translate,O=e.onChangeLang,y=Object(r.useState)(2),k=Object(n.a)(y,2),C=k[0],w=k[1],M=Object(r.useState)(10),S=Object(n.a)(M,2),L=S[0],P=S[1];return Object(v.jsxs)(f,{title:"Components: Multi Language | Minimal-UI",children:[Object(v.jsx)(i.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(v.jsx)(o.a,{maxWidth:"lg",children:Object(v.jsx)(g.a,{heading:"Multi Language",links:[{name:"Components",href:p.d.components},{name:"Multi Language"}],moreLink:["https://react.i18next.com","https://mui.com/guides/localization/#main-content"]})})}),Object(v.jsx)(o.a,{maxWidth:"lg",children:Object(v.jsxs)(s.a,{spacing:5,children:[Object(v.jsxs)(l.a,{children:[Object(v.jsx)(d.a,{title:"Flexible"}),Object(v.jsxs)(i.a,{sx:{p:3},children:[Object(v.jsx)(b.a,{row:!0,value:a.value,onChange:function(e){return O(e.target.value)},children:t.map((function(e){return Object(v.jsx)(j.a,{value:e.value,label:e.label,control:Object(v.jsx)(u.a,{})},e.label)}))}),Object(v.jsxs)(i.a,{sx:{my:3,display:"flex",alignItems:"center"},children:[Object(v.jsx)(i.a,{component:"img",alt:a.label,src:a.icon,sx:{mr:1}}),Object(v.jsx)(h.a,{variant:"h2",children:c("demo.title")})]}),Object(v.jsx)(h.a,{variant:"body1",children:c("demo.introduction")})]})]}),Object(v.jsxs)(l.a,{children:[Object(v.jsx)(d.a,{title:"System",sx:{pb:2}}),Object(v.jsx)(m.a,{component:"div",count:100,page:C,onPageChange:function(e,t){w(t)},rowsPerPage:L,onRowsPerPageChange:function(e){P(parseInt(e.target.value,10)),w(0)}})]})]})})]})}}}]);
//# sourceMappingURL=114.4c5601c2.chunk.js.map