(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[99],{1305:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(3),c=a(38),r=a(25),o=a(403),l=a(199),s=a(1275),i=a(35),j=a(0),b=["links","action","heading","moreLink","sx"];function d(e){var t=e.links,a=e.action,d=e.heading,u=e.moreLink,x=void 0===u?[]:u,O=e.sx,h=Object(c.a)(e,b);return Object(j.jsxs)(o.a,{sx:Object(n.a)({mb:5},O),children:[Object(j.jsxs)(o.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(j.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:d}),Object(j.jsx)(i.b,Object(n.a)({links:t},h))]}),a&&Object(j.jsx)(o.a,{sx:{flexShrink:0},children:a})]}),Object(j.jsx)(o.a,{sx:{mt:2},children:Object(r.isString)(x)?Object(j.jsx)(s.a,{href:x,target:"_blank",variant:"body2",children:x}):x.map((function(e){return Object(j.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1309:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return j}));var n=a(3),c=a(199),r=a(1299),o=a(1314),l=a(403),s=a(0);function i(e){var t=e.title;return Object(s.jsx)(c.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function j(e){var t=e.title,a=e.sx,c=e.children;return Object(s.jsxs)(r.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(s.jsx)(o.a,{title:t}),Object(s.jsx)(l.a,{sx:Object(n.a)({p:3,minHeight:180},a),children:c})]})}},1314:function(e,t,a){"use strict";var n=a(6),c=a(8),r=a(2),o=a(1),l=(a(10),a(12)),s=a(235),i=a(199),j=a(13),b=a(7),d=a(197),u=a(236);function x(e){return Object(d.a)("MuiCardHeader",e)}var O=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=a(0),m=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],p=Object(b.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(r.a)((a={},Object(n.a)(a,"& .".concat(O.title),t.title),Object(n.a)(a,"& .".concat(O.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),v=Object(b.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),f=Object(b.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=Object(b.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=o.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiCardHeader"}),n=a.action,o=a.avatar,b=a.className,d=a.component,u=void 0===d?"div":d,O=a.disableTypography,y=void 0!==O&&O,w=a.subheader,k=a.subheaderTypographyProps,C=a.title,S=a.titleTypographyProps,R=Object(c.a)(a,m),T=Object(r.a)({},a,{component:u,disableTypography:y}),B=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},x,t)}(T),N=C;null==N||N.type===i.a||y||(N=Object(h.jsx)(i.a,Object(r.a)({variant:o?"body2":"h5",className:B.title,component:"span",display:"block"},S,{children:N})));var P=w;return null==P||P.type===i.a||y||(P=Object(h.jsx)(i.a,Object(r.a)({variant:o?"body2":"body1",className:B.subheader,color:"text.secondary",component:"span",display:"block"},k,{children:P}))),Object(h.jsxs)(p,Object(r.a)({className:Object(l.a)(B.root,b),as:u,ref:t,ownerState:T},R,{children:[o&&Object(h.jsx)(v,{className:B.avatar,ownerState:T,children:o}),Object(h.jsxs)(g,{className:B.content,ownerState:T,children:[N,P]}),n&&Object(h.jsx)(f,{className:B.action,ownerState:T,children:n})]}))}));t.a=y},2617:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(17),c=a(1),r=a(7),o=a(403),l=a(1286),s=a(1189),i=a(1294),j=a(1256),b=a(1262),d=a(1297),u=a(23),x=a(406),O=a(1305),h=a(1309),m=a(0),p={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:1}},v=Object(r.a)(x.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function f(){var e=Object(c.useState)("a1"),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(m.jsxs)(v,{title:"Components: Radio Buttons | Minimal-UI",children:[Object(m.jsx)(o.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(m.jsx)(l.a,{maxWidth:"lg",children:Object(m.jsx)(O.a,{heading:"Radio Buttons",links:[{name:"Components",href:u.d.components},{name:"Radio Buttons"}],moreLink:"https://mui.com/components/radio-buttons"})})}),Object(m.jsx)(l.a,{maxWidth:"lg",children:Object(m.jsxs)(s.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(m.jsxs)(s.a,{spacing:3,sx:{width:1},children:[Object(m.jsx)(h.a,{title:"Basic",sx:p,children:Object(m.jsx)(i.a,{component:"fieldset",children:Object(m.jsxs)(j.a,{row:!0,defaultValue:"nn",children:[Object(m.jsx)(b.a,{value:"nn"}),Object(m.jsx)(b.a,{value:"gg"}),Object(m.jsx)(b.a,{disabled:!0,value:"hh"})]})})}),Object(m.jsx)(h.a,{title:"Size",sx:p,children:Object(m.jsxs)(j.a,{row:!0,defaultValue:"g",children:[Object(m.jsx)(d.a,{value:"g",control:Object(m.jsx)(b.a,{}),label:"Normal"}),Object(m.jsx)(d.a,{value:"p",control:Object(m.jsx)(b.a,{size:"small"}),label:"Small"})]})}),Object(m.jsx)(h.a,{title:"Placement",sx:p,children:Object(m.jsx)(i.a,{component:"fieldset",children:Object(m.jsxs)(j.a,{row:!0,defaultValue:"top",children:[Object(m.jsx)(d.a,{value:"top",label:"Top",labelPlacement:"top",control:Object(m.jsx)(b.a,{})}),Object(m.jsx)(d.a,{value:"start",label:"Start",labelPlacement:"start",control:Object(m.jsx)(b.a,{})}),Object(m.jsx)(d.a,{value:"bottom",label:"Bottom",labelPlacement:"bottom",control:Object(m.jsx)(b.a,{})}),Object(m.jsx)(d.a,{value:"end",label:"End",control:Object(m.jsx)(b.a,{})})]})})})]}),Object(m.jsx)(h.a,{title:"Adding Colors",children:Object(m.jsx)(i.a,{component:"fieldset",children:Object(m.jsxs)(j.a,{value:a,onChange:function(e){r(e.target.value)},children:[Object(m.jsx)(d.a,{value:"a1",control:Object(m.jsx)(b.a,{color:"default"}),label:"Default"}),Object(m.jsx)(d.a,{value:"a2",control:Object(m.jsx)(b.a,{}),label:"Primary"}),Object(m.jsx)(d.a,{value:"a3",control:Object(m.jsx)(b.a,{color:"secondary"}),label:"Secondary"}),Object(m.jsx)(d.a,{value:"a4",control:Object(m.jsx)(b.a,{color:"info"}),label:"Info"}),Object(m.jsx)(d.a,{value:"a5",control:Object(m.jsx)(b.a,{color:"success"}),label:"Success"}),Object(m.jsx)(d.a,{value:"a6",control:Object(m.jsx)(b.a,{color:"warning"}),label:"Warning"}),Object(m.jsx)(d.a,{value:"a7",control:Object(m.jsx)(b.a,{color:"error"}),label:"Error"}),Object(m.jsx)(d.a,{disabled:!0,value:"a8",control:Object(m.jsx)(b.a,{color:"error"}),label:"Disabled"})]})})})]})})]})}}}]);
//# sourceMappingURL=99.165efc4e.chunk.js.map