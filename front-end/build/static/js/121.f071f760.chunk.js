(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[121],{1346:function(e,t){t.__esModule=!0,t.default={body:'<path fill="currentColor" d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39l8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/>',width:24,height:24}},1348:function(e,t,a){"use strict";var i=a(6),c=a(8),o=a(2),n=a(1),r=(a(10),a(12)),s=a(235),l=a(55),d=a(16),b=a(246),h=a(13),p=a(7),m=a(197),j=a(236);function u(e){return Object(m.a)("MuiSwitch",e)}var x=Object(j.a)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),O=a(0),g=["className","color","edge","size","sx"],v=Object(p.a)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.edge&&t["edge".concat(Object(d.a)(a.edge))],t["size".concat(Object(d.a)(a.size))]]}})((function(e){var t,a=e.ownerState;return Object(o.a)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===a.edge&&{marginLeft:-8},"end"===a.edge&&{marginRight:-8},"small"===a.size&&(t={width:40,height:24,padding:7},Object(i.a)(t,"& .".concat(x.thumb),{width:16,height:16}),Object(i.a)(t,"& .".concat(x.switchBase),Object(i.a)({padding:4},"&.".concat(x.checked),{transform:"translateX(16px)"})),t))})),f=Object(p.a)(b.a,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var a=e.ownerState;return[t.switchBase,t.input,"default"!==a.color&&t["color".concat(Object(d.a)(a.color))]]}})((function(e){var t,a=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:"light"===a.palette.mode?a.palette.common.white:a.palette.grey[300],transition:a.transitions.create(["left","transform"],{duration:a.transitions.duration.shortest})},Object(i.a)(t,"&.".concat(x.checked),{transform:"translateX(20px)"}),Object(i.a)(t,"&.".concat(x.disabled),{color:"light"===a.palette.mode?a.palette.grey[100]:a.palette.grey[600]}),Object(i.a)(t,"&.".concat(x.checked," + .").concat(x.track),{opacity:.5}),Object(i.a)(t,"&.".concat(x.disabled," + .").concat(x.track),{opacity:"light"===a.palette.mode?.12:.2}),Object(i.a)(t,"& .".concat(x.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,a=e.theme,c=e.ownerState;return Object(o.a)({"&:hover":{backgroundColor:Object(l.a)(a.palette.action.active,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==c.color&&(t={},Object(i.a)(t,"&.".concat(x.checked),Object(i.a)({color:a.palette[c.color].main,"&:hover":{backgroundColor:Object(l.a)(a.palette[c.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(x.disabled),{color:"light"===a.palette.mode?Object(l.i)(a.palette[c.color].main,.62):Object(l.b)(a.palette[c.color].main,.55)})),Object(i.a)(t,"&.".concat(x.checked," + .").concat(x.track),{backgroundColor:a.palette[c.color].main}),t))})),w=Object(p.a)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:"light"===t.palette.mode?t.palette.common.black:t.palette.common.white,opacity:"light"===t.palette.mode?.38:.3}})),y=Object(p.a)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){return{boxShadow:e.theme.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),k=n.forwardRef((function(e,t){var a=Object(h.a)({props:e,name:"MuiSwitch"}),i=a.className,n=a.color,l=void 0===n?"primary":n,b=a.edge,p=void 0!==b&&b,m=a.size,j=void 0===m?"medium":m,x=a.sx,k=Object(c.a)(a,g),A=Object(o.a)({},a,{color:l,edge:p,size:j}),S=function(e){var t=e.classes,a=e.edge,i=e.size,c=e.color,n=e.checked,r=e.disabled,l={root:["root",a&&"edge".concat(Object(d.a)(a)),"size".concat(Object(d.a)(i))],switchBase:["switchBase","color".concat(Object(d.a)(c)),n&&"checked",r&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},b=Object(s.a)(l,u,t);return Object(o.a)({},t,b)}(A),z=Object(O.jsx)(y,{className:S.thumb,ownerState:A});return Object(O.jsxs)(v,{className:Object(r.a)(S.root,i),sx:x,ownerState:A,children:[Object(O.jsx)(f,Object(o.a)({type:"checkbox",icon:z,checkedIcon:z,ref:t,ownerState:A},k,{classes:Object(o.a)({},S,{root:S.switchBase})})),Object(O.jsx)(w,{className:S.track,ownerState:A})]})}));t.a=k},2676:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var i=a(7),c=a(1286),o=a(199),n=a(403),r=a(1189),s=a(1348),l=a(1272),d=a(406),b=a(6),h=a(26),p=a(32),m=a(1346),j=a.n(m),u=a(1299),x=a(404),O=a(23),g=a(245),v=a(0),f=Object(i.a)(u.a)((function(e){var t=e.theme;return Object(b.a)({maxWidth:480,margin:"auto",display:"flex",position:"relative",alignItems:"center",flexDirection:"column",padding:t.spacing(3)},t.breakpoints.up(414),{padding:t.spacing(5)})}));function w(e){var t=e.card,a=e.index,i=t.subscription,c=t.icon,s=t.price,l=t.caption,d=t.lists,b=t.labelAction;return Object(v.jsxs)(f,{children:[1===a&&Object(v.jsx)(g.a,{color:"info",sx:{top:16,right:16,position:"absolute"},children:"POPULAR"}),Object(v.jsx)(o.a,{variant:"overline",sx:{color:"text.secondary"},children:i}),Object(v.jsxs)(n.a,{sx:{display:"flex",justifyContent:"flex-end",my:2},children:[1===a||2===a?Object(v.jsx)(o.a,{variant:"subtitle1",sx:{color:"text.secondary"},children:"$"}):"",Object(v.jsx)(o.a,{variant:"h2",sx:{mx:1},children:0===s?"Free":s}),1===a||2===a?Object(v.jsx)(o.a,{gutterBottom:!0,component:"span",variant:"subtitle2",sx:{alignSelf:"flex-end",color:"text.secondary"},children:"/mo"}):""]}),Object(v.jsx)(o.a,{variant:"caption",sx:{color:"primary.main",textTransform:"capitalize"},children:l}),Object(v.jsx)(n.a,{sx:{width:80,height:80,mt:3},children:c}),Object(v.jsx)(r.a,{component:"ul",spacing:2,sx:{my:5,width:1},children:d.map((function(e){return Object(v.jsxs)(r.a,{component:"li",direction:"row",alignItems:"center",spacing:1.5,sx:{typography:"body2",color:e.isAvailable?"text.primary":"text.disabled"},children:[Object(v.jsx)(n.a,{component:h.a,icon:j.a,sx:{width:20,height:20}}),Object(v.jsx)(o.a,{variant:"body2",children:e.text})]},e.text)}))}),Object(v.jsx)(x.a,{to:O.b.root,fullWidth:!0,size:"large",variant:"contained",disabled:0===a,component:p.b,children:b})]})}var y=a(407),k=[{subscription:"basic",icon:Object(v.jsx)(y.j,{}),price:0,caption:"forever",lists:[{text:"3 prototypes",isAvailable:!0},{text:"3 boards",isAvailable:!0},{text:"Up to 5 team members",isAvailable:!1},{text:"Advanced security",isAvailable:!1},{text:"Permissions & workflows",isAvailable:!1}],labelAction:"current plan"},{subscription:"starter",icon:Object(v.jsx)(y.l,{}),price:4.99,caption:"saving $24 a year",lists:[{text:"3 prototypes",isAvailable:!0},{text:"3 boards",isAvailable:!0},{text:"Up to 5 team members",isAvailable:!0},{text:"Advanced security",isAvailable:!1},{text:"Permissions & workflows",isAvailable:!1}],labelAction:"choose starter"},{subscription:"premium",icon:Object(v.jsx)(y.k,{}),price:9.99,caption:"saving $124 a year",lists:[{text:"3 prototypes",isAvailable:!0},{text:"3 boards",isAvailable:!0},{text:"Up to 5 team members",isAvailable:!0},{text:"Advanced security",isAvailable:!0},{text:"Permissions & workflows",isAvailable:!0}],labelAction:"choose premium"}],A=Object(i.a)(d.a)((function(e){var t=e.theme;return{minHeight:"100%",paddingTop:t.spacing(15),paddingBottom:t.spacing(10)}}));function S(){return Object(v.jsx)(A,{title:"Pricing | Minimal-UI",children:Object(v.jsxs)(c.a,{maxWidth:"lg",children:[Object(v.jsxs)(o.a,{variant:"h3",align:"center",paragraph:!0,children:["Flexible plans for your",Object(v.jsx)("br",{})," community's size and needs"]}),Object(v.jsx)(o.a,{align:"center",sx:{color:"text.secondary"},children:"Choose your plan and make modern online conversation magic"}),Object(v.jsxs)(n.a,{sx:{my:5},children:[Object(v.jsxs)(r.a,{direction:"row",alignItems:"center",justifyContent:"flex-end",children:[Object(v.jsx)(o.a,{variant:"overline",sx:{mr:1.5},children:"MONTHLY"}),Object(v.jsx)(s.a,{}),Object(v.jsx)(o.a,{variant:"overline",sx:{ml:1.5},children:"YEARLY (save 10%)"})]}),Object(v.jsx)(o.a,{variant:"caption",align:"right",sx:{color:"text.secondary",display:"block"},children:"* Plus applicable taxes"})]}),Object(v.jsx)(l.a,{container:!0,spacing:3,children:k.map((function(e,t){return Object(v.jsx)(l.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(w,{card:e,index:t})},e.subscription)}))})]})})}}}]);
//# sourceMappingURL=121.f071f760.chunk.js.map