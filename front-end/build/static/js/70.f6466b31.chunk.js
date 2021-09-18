(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[70],{1494:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(432),r=a(429),i=a(169),o=a(433);function c(e){return Object(n.a)(e)||Object(r.a)(e)||Object(i.a)(e)||Object(o.a)()}},1545:function(e,t,a){"use strict";var n=a(1),r=n.createContext({});t.a=r},2540:function(e,t,a){"use strict";var n=a(1494),r=a(17),i=a(6),o=a(8),c=a(2),s=a(1),d=(a(247),a(10),a(12)),l=a(235),u=a(7),b=a(13),j=a(1200),p=a(623),x=a(1545),m=a(99),h=a(197),O=a(236);function f(e){return Object(h.a)("MuiAccordion",e)}var g=Object(O.a)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),v=a(0),y=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],w=Object(u.a)(p.a,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[Object(i.a)({},"& .".concat(g.region),t.region),t.root,!a.square&&t.rounded,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,n={duration:a.transitions.duration.shortest};return t={position:"relative",transition:a.transitions.create(["margin"],n),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:a.palette.divider,transition:a.transitions.create(["opacity","background-color"],n)},"&:first-of-type":{"&:before":{display:"none"}}},Object(i.a)(t,"&.".concat(g.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),Object(i.a)(t,"&.".concat(g.disabled),{backgroundColor:a.palette.action.disabledBackground}),t}),(function(e){var t=e.theme,a=e.ownerState;return Object(c.a)({},!a.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:t.shape.borderRadius,borderTopRightRadius:t.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:t.shape.borderRadius,borderBottomRightRadius:t.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!a.disableGutters&&Object(i.a)({},"&.".concat(g.expanded),{margin:"16px 0"}))})),R=s.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiAccordion"}),i=a.children,u=a.className,p=a.defaultExpanded,h=void 0!==p&&p,O=a.disabled,g=void 0!==O&&O,R=a.disableGutters,k=void 0!==R&&R,A=a.expanded,C=a.onChange,S=a.square,M=void 0!==S&&S,q=a.TransitionComponent,N=void 0===q?j.a:q,G=a.TransitionProps,I=Object(o.a)(a,y),W=Object(m.a)({controlled:A,default:h,name:"Accordion",state:"expanded"}),T=Object(r.a)(W,2),V=T[0],B=T[1],D=s.useCallback((function(e){B(!V),C&&C(e,!V)}),[V,C,B]),P=s.Children.toArray(i),_=Object(n.a)(P),E=_[0],H=_.slice(1),z=s.useMemo((function(){return{expanded:V,disabled:g,disableGutters:k,toggle:D}}),[V,g,k,D]),L=Object(c.a)({},a,{square:M,disabled:g,disableGutters:k,expanded:V}),F=function(e){var t=e.classes,a={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return Object(l.a)(a,f,t)}(L);return Object(v.jsxs)(w,Object(c.a)({className:Object(d.a)(F.root,u),ref:t,ownerState:L,square:M},I,{children:[Object(v.jsx)(x.a.Provider,{value:z,children:E}),Object(v.jsx)(N,Object(c.a)({in:V,timeout:"auto"},G,{children:Object(v.jsx)("div",{"aria-labelledby":E.props.id,id:E.props["aria-controls"],role:"region",className:F.region,children:H})}))]}))}));t.a=R},2541:function(e,t,a){"use strict";var n=a(6),r=a(8),i=a(2),o=a(1),c=(a(10),a(12)),s=a(235),d=a(7),l=a(13),u=a(1195),b=a(1545),j=a(197),p=a(236);function x(e){return Object(j.a)("MuiAccordionSummary",e)}var m=Object(p.a)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),h=a(0),O=["children","className","expandIcon","focusVisibleClassName","onClick"],f=Object(d.a)(u.a,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,a=e.theme,r=e.ownerState,o={duration:a.transitions.duration.shortest};return Object(i.a)((t={display:"flex",minHeight:48,padding:a.spacing(0,2),transition:a.transitions.create(["min-height","background-color"],o)},Object(n.a)(t,"&.".concat(m.focusVisible),{backgroundColor:a.palette.action.focus}),Object(n.a)(t,"&.".concat(m.disabled),{opacity:a.palette.action.disabledOpacity}),Object(n.a)(t,"&:hover:not(.".concat(m.disabled,")"),{cursor:"pointer"}),t),!r.disableGutters&&Object(n.a)({},"&.".concat(m.expanded),{minHeight:64}))})),g=Object(d.a)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,t){return t.content}})((function(e){var t=e.theme,a=e.ownerState;return Object(i.a)({display:"flex",flexGrow:1,margin:"12px 0"},!a.disableGutters&&Object(n.a)({transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest})},"&.".concat(m.expanded),{margin:"20px 0"}))})),v=Object(d.a)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,t){return t.expandIconWrapper}})((function(e){var t=e.theme;return Object(n.a)({display:"flex",color:t.palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},"&.".concat(m.expanded),{transform:"rotate(180deg)"})})),y=o.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiAccordionSummary"}),n=a.children,d=a.className,u=a.expandIcon,j=a.focusVisibleClassName,p=a.onClick,m=Object(r.a)(a,O),y=o.useContext(b.a),w=y.disabled,R=void 0!==w&&w,k=y.disableGutters,A=y.expanded,C=y.toggle,S=Object(i.a)({},a,{expanded:A,disabled:R,disableGutters:k}),M=function(e){var t=e.classes,a=e.expanded,n=e.disabled,r=e.disableGutters,i={root:["root",a&&"expanded",n&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",a&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",a&&"expanded"]};return Object(s.a)(i,x,t)}(S);return Object(h.jsxs)(f,Object(i.a)({focusRipple:!1,disableRipple:!0,disabled:R,component:"div","aria-expanded":A,className:Object(c.a)(M.root,d),focusVisibleClassName:Object(c.a)(M.focusVisible,j),onClick:function(e){C&&C(e),p&&p(e)},ref:t,ownerState:S},m,{children:[Object(h.jsx)(g,{className:M.content,ownerState:S,children:n}),u&&Object(h.jsx)(v,{className:M.expandIconWrapper,ownerState:S,children:u})]}))}));t.a=y},2542:function(e,t,a){"use strict";var n=a(2),r=a(8),i=a(1),o=(a(10),a(12)),c=a(235),s=a(7),d=a(13),l=a(197),u=a(236);function b(e){return Object(l.a)("MuiAccordionDetails",e)}Object(u.a)("MuiAccordionDetails",["root"]);var j=a(0),p=["className"],x=Object(s.a)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),m=i.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiAccordionDetails"}),i=a.className,s=Object(r.a)(a,p),l=a,u=function(e){var t=e.classes;return Object(c.a)({root:["root"]},b,t)}(l);return Object(j.jsx)(x,Object(n.a)({className:Object(o.a)(u.root,i),ref:t,ownerState:l},s))}));t.a=m},2662:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var n=a(6),r=a(7),i=a(1286),o=a(199),c=a(1272),s=a(406),d=a(1258),l=a(26),u=a(322),b=a.n(u),j=a(1273),p=a(55),x=a(403),m=a(1288),h=a(200),O=a(0),f=Object(r.a)(d.a.div)((function(e){var t=e.theme;return Object(n.a)({backgroundSize:"cover",backgroundImage:"url(/static/overlay.svg), url(/static/faqs/hero.jpg)",padding:t.spacing(10,0)},t.breakpoints.up("md"),{height:560,padding:0})})),g=Object(r.a)("div")((function(e){var t=e.theme;return Object(n.a)({textAlign:"center"},t.breakpoints.up("md"),{textAlign:"left",position:"absolute",bottom:t.spacing(10)})})),v=Object(r.a)(j.a)((function(e){var t=e.theme;return{width:320,color:t.palette.common.white,transition:t.transitions.create(["box-shadow","width"],{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&.Mui-focused":Object(n.a)({backgroundColor:Object(p.a)(t.palette.common.white,.04)},t.breakpoints.up("md"),{width:480}),"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}));function y(){return Object(O.jsx)(f,{initial:"initial",animate:"animate",variants:h.eb,children:Object(O.jsx)(i.a,{maxWidth:"lg",sx:{position:"relative",height:"100%"},children:Object(O.jsxs)(g,{children:[Object(O.jsx)(h.e,{text:"How",sx:{color:"primary.main"},variants:h.w}),Object(O.jsx)("br",{}),Object(O.jsxs)(x.a,{sx:{display:"inline-flex",color:"common.white"},children:[Object(O.jsx)(h.e,{text:"can",sx:{mr:2}}),Object(O.jsx)(h.e,{text:"we",sx:{mr:2}}),Object(O.jsx)(h.e,{text:"help",sx:{mr:2}}),Object(O.jsx)(h.e,{text:"you?"})]}),Object(O.jsx)(h.d,{variants:h.x,sx:{mt:5},children:Object(O.jsx)(v,{placeholder:"Search support",startAdornment:Object(O.jsx)(m.a,{position:"start",children:Object(O.jsx)(x.a,{component:l.a,icon:b.a,sx:{color:"text.disabled"}})})})})]})})})}var w=a(19),R=a(167),k=a.n(R),A=a(2540),C=a(2541),S=a(2542),M=a(4),q=Object(w.a)(Array(8)).map((function(e,t){return{id:M.a.id(t),value:"panel".concat(t+1),heading:"Questions ".concat(t+1),detail:M.a.text.description(t)}}));function N(){return Object(O.jsx)(h.d,{variants:h.t,children:q.map((function(e){return Object(O.jsxs)(A.a,{children:[Object(O.jsx)(C.a,{expandIcon:Object(O.jsx)(l.a,{icon:k.a,width:20,height:20}),children:Object(O.jsx)(o.a,{variant:"subtitle1",children:e.heading})}),Object(O.jsx)(S.a,{children:Object(O.jsx)(o.a,{children:e.detail})})]},e.value)}))})}var G=a(1189),I=a(1292),W=a(404);function T(){return Object(O.jsxs)(G.a,{spacing:3,children:[Object(O.jsx)(h.d,{variants:h.x,children:Object(O.jsx)(o.a,{variant:"h4",children:"Haven't found the right help?"})}),Object(O.jsx)(h.d,{variants:h.x,children:Object(O.jsx)(I.a,{fullWidth:!0,label:"Name"})}),Object(O.jsx)(h.d,{variants:h.x,children:Object(O.jsx)(I.a,{fullWidth:!0,label:"Email"})}),Object(O.jsx)(h.d,{variants:h.x,children:Object(O.jsx)(I.a,{fullWidth:!0,label:"Subject"})}),Object(O.jsx)(h.d,{variants:h.x,children:Object(O.jsx)(I.a,{fullWidth:!0,label:"Enter your message here.",multiline:!0,rows:4})}),Object(O.jsx)(h.d,{variants:h.x,children:Object(O.jsx)(W.a,{size:"large",variant:"contained",children:"Submit Now"})})]})}var V=a(623),B=[{label:"Managing your account",icon:"/static/faqs/ic_account.svg",href:"#"},{label:"Payment",icon:"/static/faqs/ic_payment.svg",href:"#"},{label:"Delivery",icon:"/static/faqs/ic_delivery.svg",href:"#"},{label:"Problem with the Product",icon:"/static/faqs/ic_package.svg",href:"#"},{label:"Return & Refund",icon:"/static/faqs/ic_refund.svg",href:"#"},{label:"Guarantees and assurances",icon:"/static/faqs/ic_assurances.svg",href:"#"}];function D(e){var t=e.category,a=t.label,n=t.icon;return Object(O.jsxs)(V.a,{sx:{px:2,height:260,display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",boxShadow:function(e){return e.customShadows.z8}},children:[Object(O.jsx)(x.a,{component:"img",src:n,sx:{mb:2,width:80,height:80}}),Object(O.jsx)(o.a,{variant:"subtitle2",children:a})]})}function P(){return Object(O.jsx)(c.a,{container:!0,spacing:3,sx:{mb:15},children:B.map((function(e){return Object(O.jsx)(c.a,{item:!0,xs:12,sm:4,md:2,children:Object(O.jsx)(h.d,{variants:h.t,children:Object(O.jsx)(D,{category:e})})},e.label)}))})}var _=Object(r.a)(s.a)((function(e){var t=e.theme;return Object(n.a)({paddingTop:t.spacing(8)},t.breakpoints.up("md"),{paddingTop:t.spacing(11)})}));function E(){return Object(O.jsxs)(_,{title:"Faqs | Minimal-UI",children:[Object(O.jsx)(y,{}),Object(O.jsxs)(i.a,{sx:{mt:15,mb:10},children:[Object(O.jsx)(P,{}),Object(O.jsx)(o.a,{variant:"h3",sx:{mb:5},children:"Frequently asked questions"}),Object(O.jsxs)(c.a,{container:!0,spacing:10,children:[Object(O.jsx)(c.a,{item:!0,xs:12,md:6,children:Object(O.jsx)(N,{})}),Object(O.jsx)(c.a,{item:!0,xs:12,md:6,children:Object(O.jsx)(T,{})})]})]})]})}}}]);
//# sourceMappingURL=70.f6466b31.chunk.js.map