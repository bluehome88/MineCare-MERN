(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[128],{1315:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return p})),o.d(t,"c",(function(){return h})),o.d(t,"d",(function(){return m})),o.d(t,"e",(function(){return O})),o.d(t,"f",(function(){return w}));var n=o(3),a=o(1307),r=o(7),c=o(0),i=Object(r.a)(a.b)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:t.spacing(1.5),left:t.spacing(1.5),boxShadow:t.customShadows.z8,"& span.mapboxgl-ctrl-icon":{transform:" scale(0.75)"}}}));function s(e){var t=Object.assign({},e);return Object(c.jsx)(i,Object(n.a)({},t))}var b=Object(r.a)(a.c)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:t.spacing(6),left:t.spacing(1.5),boxShadow:t.customShadows.z8}}));function p(e){var t=Object.assign({},e);return Object(c.jsx)(b,Object(n.a)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0},t))}var l=o(38),u=["onClick"],d=Object(r.a)("svg")((function(e){return{height:20,stroke:"none",cursor:"pointer",fill:e.theme.palette.error.main,transform:"translate(".concat(-10,"px,").concat(-20,"px)")}}));function h(e){var t=e.onClick,o=Object(l.a)(e,u);return Object(c.jsx)(a.f,Object(n.a)(Object(n.a)({},o),{},{children:Object(c.jsx)(d,{viewBox:"0 0 24 24",onClick:t,children:Object(c.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}))}var j=Object(r.a)(a.g)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",bottom:t.spacing(6),left:t.spacing(1.5),boxShadow:t.customShadows.z8,"& button+button":{borderTop:"1px solid ".concat(t.palette.divider)}}}));function m(e){var t=Object.assign({},e);return Object(c.jsx)(j,Object(n.a)({},t))}var g=["children","onClose"],x=Object(r.a)(a.h)((function(e){var t=e.theme,o="rtl"===t.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:t.spacing(1),boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:t.palette.common.white,right:o&&"0",left:o&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:t.palette.grey[800]}}}));function O(e){var t=e.children,o=e.onClose,a=Object(l.a)(e,g);return Object(c.jsx)(x,Object(n.a)(Object(n.a)({tipSize:8,anchor:"bottom",onClose:o,closeButton:!0,closeOnClick:!1},a),{},{children:t}))}var f=["sx"],v=Object(r.a)("div")((function(e){var t=e.theme;return{zIndex:99,position:"absolute",left:t.spacing(1.5),bottom:t.spacing(3.5),boxShadow:t.customShadows.z8,"& .mapboxgl-ctrl":{border:"none",borderRadius:4,lineHeight:"14px",color:t.palette.common.white,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}}));function w(e){var t=e.sx,o=Object(l.a)(e,f);return Object(c.jsx)(v,{sx:t,children:Object(c.jsx)(a.i,Object(n.a)({maxWidth:100,unit:"imperial"},o))})}},1746:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return f}));var n=o(3),a=o(17),r=o(38),c=o(1307),i=o(1),s=o(1315),b=o(7),p=o(55),l=o(199),u=o(1256),d=o(1297),h=o(1262),j=o(0),m=["themes","selectTheme","onChangeTheme"],g=Object(b.a)("div")((function(e){var t=e.theme;return{zIndex:99,minWidth:200,position:"absolute",top:t.spacing(1),right:t.spacing(1),padding:t.spacing(2),backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",borderRadius:t.shape.borderRadius,backgroundColor:Object(p.a)(t.palette.grey[900],.72)}}));function x(e){var t=e.themes,o=e.selectTheme,a=e.onChangeTheme,c=Object(r.a)(e,m);return Object(j.jsxs)(g,{children:[Object(j.jsx)(l.a,{gutterBottom:!0,variant:"subtitle2",sx:{color:"common.white"},children:"Select Theme:"}),Object(j.jsx)(u.a,Object(n.a)(Object(n.a)({value:o,onChange:a},c),{},{children:Object.keys(t).map((function(e){return Object(j.jsx)(d.a,{value:e,control:Object(j.jsx)(h.a,{size:"small"}),label:e,sx:{color:"common.white",textTransform:"capitalize"}},e)}))}))]})}var O=["themes"];function f(e){var t=e.themes,o=Object(r.a)(e,O),b=Object(i.useState)("outdoors"),p=Object(a.a)(b,2),l=p[0],u=p[1],d=Object(i.useState)({latitude:37.785164,longitude:-100,zoom:3.5,bearing:0,pitch:0}),h=Object(a.a)(d,2),m=h[0],g=h[1],f=Object(i.useCallback)((function(e){return u(e.target.value)}),[]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(c.l,Object(n.a)(Object(n.a)(Object(n.a)({},m),{},{onViewportChange:g,mapStyle:t[l]},o),{},{children:[Object(j.jsx)(s.f,{}),Object(j.jsx)(s.d,{}),Object(j.jsx)(s.a,{}),Object(j.jsx)(s.b,{})]})),Object(j.jsx)(x,{themes:t,selectTheme:l,onChangeTheme:f})]})}}}]);
//# sourceMappingURL=128.d8102a3d.chunk.js.map