(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[108],{1305:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(3),i=n(38),c=n(25),s=n(403),l=n(199),r=n(1275),o=n(35),j=n(0),x=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,n=e.action,b=e.heading,d=e.moreLink,u=void 0===d?[]:d,m=e.sx,O=Object(i.a)(e,x);return Object(j.jsxs)(s.a,{sx:Object(a.a)({mb:5},m),children:[Object(j.jsxs)(s.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(j.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:b}),Object(j.jsx)(o.b,Object(a.a)({links:t},O))]}),n&&Object(j.jsx)(s.a,{sx:{flexShrink:0},children:n})]}),Object(j.jsx)(s.a,{sx:{mt:2},children:Object(c.isString)(u)?Object(j.jsx)(r.a,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(e){return Object(j.jsx)(r.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1309:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return j}));var a=n(3),i=n(199),c=n(1299),s=n(1314),l=n(403),r=n(0);function o(e){var t=e.title;return Object(r.jsx)(i.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function j(e){var t=e.title,n=e.sx,i=e.children;return Object(r.jsxs)(c.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(r.jsx)(s.a,{title:t}),Object(r.jsx)(l.a,{sx:Object(a.a)({p:3,minHeight:180},n),children:i})]})}},2618:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var a=n(17),i=n(3),c=n(38),s=n(1),l=n(1549),r=n.n(l),o=n(2507),j=n.n(o),x=n(2506),b=n.n(x),d=n(2509),u=n.n(d),m=n(2505),O=n.n(m),h=n(2508),f=n.n(h),p=n(7),g=n(403),v=n(1286),k=n(1189),y=n(1487),C=n(23),V=n(406),w=n(1305),z=n(1309),S=n(0),I=["value"],L={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"},H={1:{icon:Object(S.jsx)(O.a,{}),label:"Very Dissatisfied"},2:{icon:Object(S.jsx)(b.a,{}),label:"Dissatisfied"},3:{icon:Object(S.jsx)(j.a,{}),label:"Neutral"},4:{icon:Object(S.jsx)(f.a,{}),label:"Satisfied"},5:{icon:Object(S.jsx)(u.a,{}),label:"Very Satisfied"}},R={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},W=Object(p.a)(V.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function B(e){var t=e.value,n=Object(c.a)(e,I);return Object(S.jsx)("span",Object(i.a)(Object(i.a)({},n),{},{children:H[t].icon}))}function D(){var e=Object(s.useState)(2),t=Object(a.a)(e,2),n=t[0],i=t[1],c=Object(s.useState)(-1),l=Object(a.a)(c,2),o=l[0],j=l[1];return Object(S.jsxs)(W,{title:"Components: Rating | Minimal-UI",children:[Object(S.jsx)(g.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(S.jsx)(v.a,{maxWidth:"lg",children:Object(S.jsx)(w.a,{heading:"Rating",links:[{name:"Components",href:C.d.components},{name:"Rating"}],moreLink:"https://mui.com/components/rating"})})}),Object(S.jsx)(v.a,{maxWidth:"lg",children:Object(S.jsxs)(k.a,{spacing:3,children:[Object(S.jsxs)(k.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(S.jsx)(z.a,{title:"Controlled",sx:R,children:Object(S.jsx)(y.a,{name:"simple-controlled",value:n,onChange:function(e,t){i(t)}})}),Object(S.jsx)(z.a,{title:"Read only",sx:R,children:Object(S.jsx)(y.a,{name:"read-only",value:n,readOnly:!0})}),Object(S.jsx)(z.a,{title:"Disabled",sx:R,children:Object(S.jsx)(y.a,{name:"disabled",value:n,disabled:!0})})]}),Object(S.jsxs)(k.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(S.jsx)(z.a,{title:"Pristine",sx:R,children:Object(S.jsx)(y.a,{name:"pristine",value:null})}),Object(S.jsx)(z.a,{title:"Custom empty icon",sx:R,children:Object(S.jsx)(y.a,{name:"customized-empty",defaultValue:2,precision:.5})}),Object(S.jsx)(z.a,{title:"Custom icon and color",sx:R,children:Object(S.jsx)(y.a,{name:"customized-color",defaultValue:2,getLabelText:function(e){return"".concat(e," Heart").concat(1!==e?"s":"")},precision:.5,icon:Object(S.jsx)(r.a,{}),emptyIcon:Object(S.jsx)(r.a,{}),sx:{color:"info.main","&:hover":{color:"info.dark"}}})})]}),Object(S.jsxs)(k.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(S.jsx)(z.a,{title:"10 stars",sx:R,children:Object(S.jsx)(y.a,{name:"customized-10",defaultValue:2,max:10})}),Object(S.jsx)(z.a,{title:"Custom icon set",sx:R,children:Object(S.jsx)(y.a,{name:"customized-icons",defaultValue:2,getLabelText:function(e){return H[e].label},IconContainerComponent:B})}),Object(S.jsxs)(z.a,{title:"Hover feedback",sx:R,children:[Object(S.jsx)(y.a,{name:"hover-feedback",value:n,precision:.5,onChange:function(e,t){i(t)},onChangeActive:function(e,t){j(t)}}),null!==n&&Object(S.jsx)(g.a,{sx:{ml:2},children:L[-1!==o?o:n]})]})]}),Object(S.jsxs)(k.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(S.jsxs)(z.a,{title:"Half ratings",sx:R,children:[Object(S.jsx)(y.a,{name:"half-rating",defaultValue:2.5,precision:.5}),Object(S.jsx)("br",{}),Object(S.jsx)(y.a,{name:"half-rating-read",defaultValue:2.5,precision:.5,readOnly:!0})]}),Object(S.jsxs)(z.a,{title:"Sizes",sx:R,children:[Object(S.jsx)(y.a,{name:"size-small",defaultValue:2,size:"small"}),Object(S.jsx)("br",{}),Object(S.jsx)(y.a,{name:"size-medium",defaultValue:2}),Object(S.jsx)("br",{}),Object(S.jsx)(y.a,{name:"size-large",defaultValue:2,size:"large"})]})]})]})})]})}}}]);
//# sourceMappingURL=108.36cc3c9e.chunk.js.map