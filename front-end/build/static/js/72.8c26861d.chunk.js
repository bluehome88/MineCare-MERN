(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[72],{1305:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(3),i=n(38),r=n(25),c=n(403),o=n(199),s=n(1275),l=n(35),j=n(0),d=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,n=e.action,b=e.heading,u=e.moreLink,p=void 0===u?[]:u,h=e.sx,x=Object(i.a)(e,d);return Object(j.jsxs)(c.a,{sx:Object(a.a)({mb:5},h),children:[Object(j.jsxs)(c.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(j.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:b}),Object(j.jsx)(l.b,Object(a.a)({links:t},x))]}),n&&Object(j.jsx)(c.a,{sx:{flexShrink:0},children:n})]}),Object(j.jsx)(c.a,{sx:{mt:2},children:Object(r.isString)(p)?Object(j.jsx)(s.a,{href:p,target:"_blank",variant:"body2",children:p}):p.map((function(e){return Object(j.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1355:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(3),i=n(38),r=n(623),c=n(199),o=n(0),s=["searchQuery"];function l(e){var t=e.searchQuery,n=void 0===t?"":t,l=Object(i.a)(e,s);return Object(o.jsxs)(r.a,Object(a.a)(Object(a.a)({},l),{},{children:[Object(o.jsx)(c.a,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),Object(o.jsxs)(c.a,{variant:"body2",align:"center",children:["No results found for \xa0",Object(o.jsxs)("strong",{children:['"',n,'"']}),". Try checking for typos or using complete words."]})]}))}},1411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(38),i=n(3),r=n(1),c=n(1498),o=n(52),s=n(55),l=n(621),j=n(199),d=n(0),b=["images","photoIndex","setPhotoIndex","isOpen","onClose"];function u(){var e=Object(o.a)(),t="rtl"===e.direction,n=function(t){return{backgroundSize:"24px 24px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:Object(s.a)(e.palette.grey[900],.8),backgroundImage:'url("/static/icons/controls/'.concat(t,'.svg")')}};return Object(d.jsx)(l.a,{styles:{"& .ReactModalPortal":{"& .ril__outer":{backdropFilter:"blur(8px)",backgroundColor:Object(s.a)(e.palette.grey[900],.88)},"& .ril__toolbar":{height:"auto !important",padding:e.spacing(2,3),backgroundColor:"transparent"},"& .ril__toolbarLeftSide":{display:"none"},"& .ril__toolbarRightSide":{height:"auto !important",padding:0,flexGrow:1,display:"flex",alignItems:"center","& li":{display:"flex",alignItems:"center"},"& li:first-of-type":{flexGrow:1},"& li:not(:first-of-type)":{width:e.spacing(5),height:e.spacing(5),justifyContent:"center",marginLeft:e.spacing(1),borderRadius:e.shape.borderRadius}},"& button:focus":{outline:"none"},"& .ril__toolbarRightSide button":{width:"100%",height:"100%","&.ril__zoomInButton":n("maximize-outline"),"&.ril__zoomOutButton":n("minimize-outline"),"&.ril__closeButton":n("close")},"& .ril__navButtons":{padding:e.spacing(3),borderRadius:e.shape.borderRadiusSm,"&.ril__navButtonPrev":Object(i.a)({left:e.spacing(2),right:"auto"},n(t?"arrow-ios-forward":"arrow-ios-back")),"&.ril__navButtonNext":Object(i.a)({right:e.spacing(2),left:"auto"},n(t?"arrow-ios-back":"arrow-ios-forward"))}}}})}function p(e){var t=e.images,n=e.photoIndex,o=e.setPhotoIndex,s=e.isOpen,l=e.onClose,p=Object(a.a)(e,b);Object(r.useEffect)((function(){document.body.style.overflow=s?"hidden":"unset"}),[s]);var h=[Object(d.jsx)(j.a,{variant:"subtitle2",children:"".concat(n+1," / ").concat(t.length)})];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{}),s&&Object(d.jsx)(c.a,Object(i.a)({animationDuration:120,mainSrc:t[n],nextSrc:t[(n+1)%t.length],prevSrc:t[(n+t.length-1)%t.length],onCloseRequest:l,onMovePrevRequest:function(){return o((n+t.length-1)%t.length)},onMoveNextRequest:function(){return o((n+1)%t.length)},toolbarButtons:h,reactModalStyle:{overlay:{zIndex:9999}}},p))]})}},1694:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(17),i=n(38),r=n(3),c=(n(1915),n(1940)),o=n(26),s=n(1),l=n(1916),j=n.n(l),d=n(7),b=n(55),u=n(52),p=n(1192),h=n(1277),x=n(0),O=["disabled","value","setValue","alignRight"],f=Object(d.a)("div")({position:"relative"}),m=Object(d.a)("div")((function(e){var t=e.theme;return{bottom:40,overflow:"hidden",position:"absolute",left:t.spacing(-2),boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadiusMd,"& .emoji-mart":{border:"none",backgroundColor:t.palette.background.paper},"& .emoji-mart-anchor":{color:t.palette.text.disabled,"&:hover, &:focus, &.emoji-mart-anchor-selected":{color:t.palette.text.primary}},"& .emoji-mart-bar":{borderColor:t.palette.divider},"& .emoji-mart-search input":{backgroundColor:"transparent",color:t.palette.text.primary,borderColor:t.palette.grey[50032],"&::placeholder":Object(r.a)(Object(r.a)({},t.typography.body2),{},{color:t.palette.text.disabled})},"& .emoji-mart-search-icon svg":{opacity:1,fill:t.palette.text.disabled},"& .emoji-mart-category-label span":Object(r.a)(Object(r.a)({},t.typography.subtitle2),{},{backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",color:t.palette.text.primary,backgroundColor:Object(b.a)(t.palette.background.paper,.8)}),"& .emoji-mart-title-label":{color:t.palette.text.primary},"& .emoji-mart-category .emoji-mart-emoji:hover:before":{backgroundColor:t.palette.action.selected},"& .emoji-mart-emoji":{outline:"none"},"& .emoji-mart-preview-name":{color:t.palette.text.primary},"& .emoji-mart-preview-shortname, .emoji-mart-preview-emoticon":{color:t.palette.text.secondary}}}));function g(e){var t,n=e.disabled,l=e.value,d=e.setValue,b=e.alignRight,g=void 0!==b&&b,v=Object(i.a)(e,O),y=Object(u.a)(),w=Object(s.useState)(!1),k=Object(a.a)(w,2),C=k[0],I=k[1];C&&(t=Object(x.jsx)(c.a,{color:y.palette.primary.main,title:"Pick your emoji\u2026",emoji:"point_up",onSelect:function(e){return d(l+e.native)}}));return Object(x.jsx)(p.a,{onClickAway:function(){I(!1)},children:Object(x.jsxs)(f,Object(r.a)(Object(r.a)({},v),{},{children:[Object(x.jsx)(m,{sx:Object(r.a)({},g&&{right:-2,left:"auto !important"}),children:t}),Object(x.jsx)(h.a,{disabled:n,size:"small",onClick:function(e){e.preventDefault(),I(!C)},children:Object(x.jsx)(o.a,{icon:j.a,width:20,height:20})})]}))})}},1697:function(e,t,n){"use strict";n.d(t,"d",(function(){return x})),n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return g}));var a=n(403),i=n(26),r=n(413),c=n.n(r),o=n(0),s=["jpg","jpeg","gif","bmp","png"],l=["m4v","avi","mpg","mp4","webm"],j=["doc","docx"],d=["xls","xlsx"],b=["ppt","pptx"],u=["pdf"],p=["psd"],h=["ai","esp"];function x(e){return e.split(".").pop()}function O(e){return e.substring(e.lastIndexOf("/")+1).replace(/\.[^/.]+$/,"")}function f(e){return e.split("/").pop()}var m=function(e){return Object(o.jsx)(a.a,{component:"img",src:"/static/icons/file/".concat(e,".svg"),alt:e,sx:{width:28,height:28}})};function g(e){var t;switch(function(e){var t;switch(e.includes(x(e))){case s.includes(x(e)):t="image";break;case l.includes(x(e)):t="video";break;case j.includes(x(e)):t="word";break;case d.includes(x(e)):t="excel";break;case b.includes(x(e)):t="powerpoint";break;case u.includes(x(e)):t="pdf";break;case p.includes(x(e)):t="photoshop";break;case h.includes(x(e)):t="illustrator";break;default:t=x(e)}return t}(e)){case"image":t=Object(o.jsx)(a.a,{component:"img",src:e,alt:e,sx:{width:1,height:1}});break;case"video":t=m("file_type_video");break;case"word":t=m("file_type_word");break;case"excel":t=m("file_type_excel");break;case"powerpoint":t=m("file_type_powerpoint");break;case"pdf":t=m("file_type_pdf");break;case"photoshop":t=m("file_type_photoshop");break;case"illustrator":t=m("file_type_ai");break;default:t=Object(o.jsx)(a.a,{component:i.a,icon:c.a,sx:{width:28,height:28}})}return t}},2639:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ln}));var a=n(1),i=n(1286),r=n(1299),c=n(318),o=n(435),s=n(23),l=n(79),j=n(406),d=n(1305),b=n(17),u=n(26),p=n(1253),h=n(554),x=n.n(h),O=n(1589),f=n.n(O),m=n(2429),g=n.n(m),v=n(403),y=n(1199),w=n(199),k=n(1291),C=n(1277),I=n(1191),S=n(1280),R=n(1278),_=n(1251),P=n(1252),W=n(1264),T=n(1250),A=n(59),z=n(202),M=n(421),D=n(0),F=["online","invisible","away"];function E(){var e=Object(A.a)().user,t=Object(a.useRef)(null),n=Object(a.useState)(!1),i=Object(b.a)(n,2),r=i[0],c=i[1],o=Object(a.useState)("online"),s=Object(b.a)(o,2),l=s[0],j=s[1];return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(v.a,{ref:t,sx:{position:"relative"},children:[Object(D.jsx)(z.a,{onClick:function(){c(!0)},sx:{cursor:"pointer",width:48,height:48}}),Object(D.jsx)(M.a,{status:l,sx:{position:"absolute",bottom:2,right:2}})]}),Object(D.jsxs)(y.a,{open:r,onClose:function(){c(!1)},anchorEl:t.current,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[Object(D.jsxs)(v.a,{sx:{py:2,pr:1,pl:2.5,display:"flex",alignItems:"center"},children:[Object(D.jsx)(z.a,{}),Object(D.jsxs)(v.a,{sx:{ml:2,mr:3},children:[Object(D.jsx)(w.a,{noWrap:!0,variant:"subtitle1",children:e.displayName}),Object(D.jsx)(w.a,{noWrap:!0,variant:"body2",sx:{color:"text.secondary"},children:e.email})]}),Object(D.jsx)(k.a,{title:"Log out",children:Object(D.jsx)(C.a,{children:Object(D.jsx)(u.a,{icon:g.a,width:24,height:24})})})]}),Object(D.jsx)(I.a,{}),Object(D.jsxs)(S.a,{children:[Object(D.jsxs)(R.a,{sx:{px:2.5},children:[Object(D.jsx)(_.a,{children:Object(D.jsx)(M.a,{size:"large",status:l,sx:{m:.75}})}),Object(D.jsx)(P.a,{children:Object(D.jsx)(W.a,{native:!0,value:l,onChange:function(e){j(e.target.value)},sx:{"& svg":{display:"none"},"& select":{p:0,typography:"body2"},"& fieldset":{display:"none"}},children:F.map((function(e){return Object(D.jsx)("option",{value:e,children:Object(p.a)(e)},e)}))})})]}),Object(D.jsxs)(T.a,{sx:{px:2.5},children:[Object(D.jsx)(_.a,{children:Object(D.jsx)(u.a,{icon:f.a,width:24,height:24})}),Object(D.jsx)(P.a,{primary:"Profile",primaryTypographyProps:{variant:"body2"}})]}),Object(D.jsxs)(T.a,{sx:{px:2.5},children:[Object(D.jsx)(_.a,{children:Object(D.jsx)(u.a,{icon:x.a,width:24,height:24})}),Object(D.jsx)(P.a,{primary:"Settings",primaryTypographyProps:{variant:"body2"}})]})]})]})]})}var B=n(3),L=n(38),U=n(322),G=n.n(U),q=n(7),N=n(1273),H=n(1192),Q=n(1294),V=n(1288),J=["query","onChange","onFocus","onClickAway"],K=Object(q.a)("div")((function(e){return{marginTop:e.theme.spacing(2)}})),Y=Object(q.a)(N.a)((function(e){var t=e.theme;return{transition:t.transitions.create("box-shadow",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&.Mui-focused":{boxShadow:t.customShadows.z8},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}));function $(e){var t=e.query,n=e.onChange,a=e.onFocus,i=e.onClickAway,r=Object(L.a)(e,J);return Object(D.jsx)(H.a,{onClickAway:i,children:Object(D.jsx)(K,Object(B.a)(Object(B.a)({},r),{},{children:Object(D.jsx)(Q.a,{fullWidth:!0,size:"small",children:Object(D.jsx)(Y,{value:t,onFocus:a,onChange:n,placeholder:"Search contacts...",startAdornment:Object(D.jsx)(V.a,{position:"start",children:Object(D.jsx)(v.a,{component:u.a,icon:G.a,sx:{color:"text.disabled"}})})})})}))})}var X=n(19),Z=n(25),ee=n(2695),te=n(1290),ne=n(1271),ae=Object(q.a)(T.a)((function(e){var t=e.theme;return{padding:t.spacing(1.5,3),transition:t.transitions.create("all")}})),ie=Object(q.a)("div")({position:"relative",width:48,height:48,"& .MuiAvatar-img":{borderRadius:"50%"},"& .MuiAvatar-root":{width:"100%",height:"100%"}});function re(e){var t=e.isSelected,n=e.conversation,a=e.isOpenSidebar,i=e.onSelectConversation,r=function(e,t){var n=e.participants.filter((function(e){return e.id!==t})),a=n.reduce((function(e,t){return[].concat(Object(X.a)(e),[t.name])}),[]).join(", "),i="",r=e.messages[e.messages.length-1];if(r){var c=r.senderId===t?"You: ":"",o="image"===r.contentType?"Sent a photo":r.body;i="".concat(c).concat(o)}return{otherParticipants:n,displayNames:a,displayText:i}}(n,"8864c717-587d-472a-929a-8e5f298024da-0"),c=Object(Z.last)(n.messages).createdAt,o=r.otherParticipants.length>1,s=n.unreadCount>0,l=o&&r.otherParticipants.map((function(e){return e.status})).includes("online");return Object(D.jsxs)(ae,{onClick:i,sx:Object(B.a)({},t&&{bgcolor:"action.selected"}),children:[Object(D.jsx)(te.a,{children:Object(D.jsxs)(v.a,{sx:Object(B.a)({},o&&{position:"relative",width:48,height:48,"& .avatarWrapper":{position:"absolute",width:32,height:32,"&:nth-of-type(1)":{left:0,zIndex:9,bottom:2,"& .MuiAvatar-root":{border:function(e){return"solid 2px ".concat(e.palette.background.paper)}}},"&:nth-of-type(2)":{top:2,right:0}}}),children:[r.otherParticipants.slice(0,2).map((function(e){return Object(D.jsxs)(ie,{className:"avatarWrapper",children:[Object(D.jsx)(ne.a,{alt:e.name,src:e.avatar}),!o&&Object(D.jsx)(M.a,{status:e.status,sx:{right:2,bottom:2,position:"absolute"}})]},e.id)})),l&&Object(D.jsx)(M.a,{status:"online",sx:{right:2,bottom:2,position:"absolute"}})]})}),a&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(P.a,{primary:r.displayNames,primaryTypographyProps:{noWrap:!0,variant:"subtitle2"},secondary:r.displayText,secondaryTypographyProps:{noWrap:!0,variant:s?"subtitle2":"body2",color:s?"textPrimary":"textSecondary"}}),Object(D.jsxs)(v.a,{sx:{ml:2,height:44,display:"flex",alignItems:"flex-end",flexDirection:"column"},children:[Object(D.jsx)(v.a,{sx:{mb:1.25,fontSize:12,lineHeight:"22px",whiteSpace:"nowrap",color:"text.disabled"},children:Object(ee.a)(new Date(c),{addSuffix:!1})}),s&&Object(D.jsx)(M.a,{status:"unread",size:"small"})]})]})]})}var ce=n(34),oe=["conversations","isOpenSidebar","activeConversationId"];function se(e){var t=e.conversations,n=e.isOpenSidebar,a=e.activeConversationId,i=Object(L.a)(e,oe),r=Object(ce.h)();return Object(D.jsx)(S.a,Object(B.a)(Object(B.a)({disablePadding:!0},i),{},{children:t.allIds.map((function(e){return Object(D.jsx)(re,{isOpenSidebar:n,conversation:t.byId[e],isSelected:a===e,onSelectConversation:function(){return function(e){var n="",a=t.byId[e];n="GROUP"===a.type?a.id:a.participants.find((function(e){return"8864c717-587d-472a-929a-8e5f298024da-0"!==e.id})).username,r("".concat(s.b.chat.root,"/").concat(n))}(e)}},e)}))}))}var le=n(1446),je=n.n(le),de=n(1447),be=n.n(de),ue=n(1346),pe=n.n(ue),he=n(55),xe=n(1604),Oe=n(1462),fe=n(1292),me=n(1355),ge=["contacts","recipients","onAddRecipients"],ve=Object(q.a)("div")((function(e){return{display:"flex",alignItems:"center",padding:e.theme.spacing(2,3)}})),ye=Object(q.a)("div")((function(e){var t=e.theme;return{"& .MuiAutocomplete-root":{minWidth:280,marginLeft:t.spacing(2),"&.Mui-focused .MuiAutocomplete-inputRoot":{boxShadow:t.customShadows.z8}},"& .MuiAutocomplete-inputRoot":{transition:t.transitions.create("box-shadow",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}}));function we(e){var t=e.contacts,n=e.recipients,i=e.onAddRecipients,r=Object(L.a)(e,ge),c=Object(a.useState)(""),o=Object(b.a)(c,2),s=o[0],l=o[1];return Object(D.jsxs)(ve,Object(B.a)(Object(B.a)({},r),{},{children:[Object(D.jsx)(w.a,{variant:"subtitle2",sx:{color:"text.secondary"},children:"To:"}),Object(D.jsx)(ye,{children:Object(D.jsx)(xe.a,{multiple:!0,size:"small",disablePortal:!0,popupIcon:null,clearText:null,noOptionsText:Object(D.jsx)(me.a,{searchQuery:s}),onChange:function(e,t){l(""),i(t)},onInputChange:function(e){l(e.target.value)},options:t,getOptionLabel:function(e){return e.name},renderOption:function(e,t,n){var a=n.inputValue,i=n.selected,r=t.name,c=t.avatar,o=be()(r,a),s=je()(r,o);return Object(D.jsxs)("li",Object(B.a)(Object(B.a)({},e),{},{children:[Object(D.jsxs)(v.a,{sx:{width:32,height:32,overflow:"hidden",borderRadius:"50%",position:"relative"},children:[Object(D.jsx)(ne.a,{alt:r,src:c}),Object(D.jsx)(v.a,{sx:Object(B.a)({top:0,opacity:0,width:"100%",height:"100%",display:"flex",position:"absolute",alignItems:"center",justifyContent:"center",bgcolor:function(e){return Object(he.a)(e.palette.grey[900],.8)},transition:function(e){return e.transitions.create("opacity",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.shorter})}},i&&{opacity:1,color:"primary.main"}),children:Object(D.jsx)(u.a,{icon:pe.a,width:20,height:20})})]}),Object(D.jsx)(v.a,{sx:{ml:2}}),s.map((function(e,t){return Object(D.jsx)(w.a,{variant:"subtitle2",color:e.highlight?"primary":"textPrimary",children:e.text},t)}))]}))},renderTags:function(e,t){return e.map((function(e,n){var i=e.id,r=e.name,c=e.avatar;return Object(a.createElement)(Oe.a,Object(B.a)(Object(B.a)({},t({index:n})),{},{key:i,size:"small",label:r,color:"info",avatar:Object(D.jsx)(ne.a,{alt:r,src:c})}))}))},renderInput:function(e){return Object(D.jsx)(fe.a,Object(B.a)(Object(B.a)({},e),{},{placeholder:0===n.length?"Recipients":""}))}})})]}))}var ke=n(2430),Ce=n.n(ke),Ie=n(1519),Se=n.n(Ie),Re=n(1328),_e=n.n(Re),Pe=n(142),We=n.n(Pe),Te=n(1606),Ae=n(1275),ze=n(241),Me=n(35),De=["participants"],Fe=Object(q.a)("div")((function(e){return{flexShrink:0,minHeight:92,display:"flex",alignItems:"center",padding:e.theme.spacing(0,3)}}));function Ee(e){var t=e.participants,n=Object(X.a)(t)[0];return void 0===n?null:Object(D.jsxs)(v.a,{sx:{display:"flex",alignItems:"center"},children:[Object(D.jsxs)(v.a,{sx:{position:"relative"},children:[Object(D.jsx)(ne.a,{src:n.avatar,alt:n.name}),Object(D.jsx)(M.a,{status:n.status,sx:{position:"absolute",right:2,bottom:2}})]}),Object(D.jsxs)(v.a,{sx:{ml:2},children:[Object(D.jsx)(w.a,{variant:"subtitle2",children:n.name}),Object(D.jsx)(w.a,{variant:"body2",sx:{color:"text.secondary"},children:"offline"!==n.status?Object(p.a)(n.status):Object(ze.e)(n.lastActivity)})]})]})}function Be(e){var t=e.participants;return Object(D.jsxs)("div",{children:[Object(D.jsx)(Te.a,{max:3,sx:{mb:.5,"& .MuiAvatar-root":{width:32,height:32}},children:t.map((function(e){return Object(D.jsx)(ne.a,{alt:e.name,src:e.avatar},e.id)}))}),Object(D.jsx)(Ae.a,{variant:"body2",underline:"none",component:"button",color:"text.secondary",onClick:function(){},children:Object(D.jsxs)(v.a,{sx:{display:"flex",alignItems:"center"},children:[t.length," persons",Object(D.jsx)(u.a,{icon:We.a})]})})]})}function Le(e){var t=e.participants,n=Object(L.a)(e,De),a=t.length>1;return Object(D.jsxs)(Fe,Object(B.a)(Object(B.a)({},n),{},{children:[a?Object(D.jsx)(Be,{participants:t}):Object(D.jsx)(Ee,{participants:t}),Object(D.jsx)(v.a,{sx:{flexGrow:1}}),Object(D.jsx)(Me.e,{children:Object(D.jsx)(u.a,{icon:Se.a,width:20,height:20})}),Object(D.jsx)(Me.e,{children:Object(D.jsx)(u.a,{icon:Ce.a,width:20,height:20})}),Object(D.jsx)(Me.e,{children:Object(D.jsx)(u.a,{icon:_e.a,width:20,height:20})})]}))}var Ue=n(1263),Ge=n(2431),qe=n.n(Ge),Ne=n(1591),He=n.n(Ne),Qe=n(1418),Ve=n.n(Qe),Je=n(1417),Ke=n.n(Je),Ye=n(1287),$e=n(1189),Xe=n(1694),Ze=["disabled","conversationId","onSend"],et=Object(q.a)("div")((function(e){return{minHeight:56,display:"flex",position:"relative",alignItems:"center",paddingLeft:e.theme.spacing(2)}}));function tt(e){var t=e.disabled,n=e.conversationId,i=e.onSend,r=Object(L.a)(e,Ze),c=Object(a.useRef)(null),o=Object(a.useState)(""),s=Object(b.a)(o,2),l=s[0],j=s[1],d=function(){c.current.click()},p=function(){return l?(i&&i({conversationId:n,messageId:Object(Ue.a)(),message:l,contentType:"text",attachments:[],createdAt:new Date,senderId:"8864c717-587d-472a-929a-8e5f298024da-0"}),j("")):""};return Object(D.jsxs)(et,Object(B.a)(Object(B.a)({},r),{},{children:[Object(D.jsx)(Ye.a,{disabled:t,fullWidth:!0,value:l,disableUnderline:!0,onKeyUp:function(e){"Enter"===e.key&&p()},onChange:function(e){j(e.target.value)},placeholder:"Type a message",startAdornment:Object(D.jsx)(V.a,{position:"start",children:Object(D.jsx)(Xe.a,{disabled:t,value:l,setValue:j})}),endAdornment:Object(D.jsxs)($e.a,{direction:"row",spacing:.5,mr:1.5,children:[Object(D.jsx)(C.a,{disabled:t,size:"small",onClick:d,children:Object(D.jsx)(u.a,{icon:Ke.a,width:24,height:24})}),Object(D.jsx)(C.a,{disabled:t,size:"small",onClick:d,children:Object(D.jsx)(u.a,{icon:Ve.a,width:24,height:24})}),Object(D.jsx)(C.a,{disabled:t,size:"small",children:Object(D.jsx)(u.a,{icon:qe.a,width:24,height:24})})]}),sx:{height:"100%"}}),Object(D.jsx)(I.a,{orientation:"vertical",flexItem:!0}),Object(D.jsx)(C.a,{color:"primary",disabled:!l,onClick:p,sx:{mx:1},children:Object(D.jsx)(u.a,{icon:He.a,width:24,height:24})}),Object(D.jsx)("input",{type:"file",ref:c,style:{display:"none"}})]}))}var nt=n(6),at=Object(q.a)("div")((function(e){return{display:"flex",marginBottom:e.theme.spacing(3)}})),it=Object(q.a)("div")((function(e){var t=e.theme;return{maxWidth:320,padding:t.spacing(1.5),marginTop:t.spacing(.5),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.neutral}})),rt=Object(q.a)(w.a)((function(e){var t=e.theme;return{display:"flex",marginBottom:t.spacing(.75),color:t.palette.text.secondary}})),ct=Object(q.a)("img")((function(e){var t=e.theme;return Object(nt.a)({width:"100%",cursor:"pointer",objectFit:"cover",borderRadius:t.shape.borderRadius},t.breakpoints.up("md"),{height:200,minWidth:296})}));function ot(e){var t=e.message,n=e.conversation,a=e.onOpenLightbox,i=n.participants.find((function(e){return e.id===t.senderId})),r="8864c717-587d-472a-929a-8e5f298024da-0"===t.senderId?{type:"me"}:{avatar:null===i||void 0===i?void 0:i.avatar,name:null===i||void 0===i?void 0:i.name},c="me"===r.type,o="image"===t.contentType,s=r.name&&r.name.split(" ")[0];return Object(D.jsx)(at,{children:Object(D.jsxs)(v.a,{sx:Object(B.a)({display:"flex"},c&&{ml:"auto"}),children:["me"!==r.type&&Object(D.jsx)(ne.a,{alt:r.name,src:r.avatar,sx:{width:32,height:32,mr:2}}),Object(D.jsxs)("div",{children:[Object(D.jsxs)(rt,{variant:"caption",sx:Object(B.a)({},c&&{justifyContent:"flex-end"}),children:[!c&&"".concat(s,","),"\xa0",Object(ee.a)(new Date(t.createdAt),{addSuffix:!0})]}),Object(D.jsx)(it,{sx:Object(B.a)(Object(B.a)({},c&&{color:"grey.800",bgcolor:"primary.lighter"}),o&&{p:0}),children:o?Object(D.jsx)(ct,{alt:"attachment",src:t.body,onClick:function(){return a(t.body)}}):Object(D.jsx)(w.a,{variant:"body2",children:t.body})})]})]})})}var st=n(97),lt=n(1411);function jt(e){var t=e.conversation,n=Object(a.useRef)(),i=Object(a.useState)(!1),r=Object(b.a)(i,2),c=r[0],o=r[1],s=Object(a.useState)(null),l=Object(b.a)(s,2),j=l[0],d=l[1];Object(a.useEffect)((function(){n.current&&(n.current.scrollTop=n.current.scrollHeight)}),[t.messages]);var u=t.messages.filter((function(e){return"image"===e.contentType})).map((function(e){return e.body})),p=function(e){var t=Object(Z.findIndex)(u,(function(t){return t===e}));o(!0),d(t)};return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(st.a,{scrollableNodeProps:{ref:n},sx:{p:3,height:1},children:t.messages.map((function(e){return Object(D.jsx)(ot,{message:e,conversation:t,onOpenLightbox:p},e.id)}))}),Object(D.jsx)(lt.a,{images:u,photoIndex:j,setPhotoIndex:d,isOpen:c,onClose:function(){return o(!1)}})]})}var dt=n(320),bt=n.n(dt),ut=n(52),pt=n(1243),ht=n(1283),xt=n(167),Ot=n.n(xt),ft=n(404),mt=n(1200),gt=n(1697),vt=["conversation","isCollapse","onCollapse"],yt=Object(q.a)("div")((function(e){return{flexGrow:1,height:"100%",display:"flex",overflow:"hidden",flexDirection:"column",paddingBottom:e.theme.spacing(2)}})),wt=Object(q.a)("div")((function(e){var t=e.theme;return{display:"flex",alignItems:"center",marginTop:t.spacing(2),padding:t.spacing(0,2.5)}})),kt=Object(q.a)("div")((function(e){var t=e.theme;return{width:40,height:40,flexShrink:0,display:"flex",overflow:"hidden",alignItems:"center",justifyContent:"center",color:t.palette.text.secondary,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.grey[50016]}})),Ct=Object(q.a)(ft.a)((function(e){var t=e.theme;return Object(B.a)(Object(B.a)({},t.typography.overline),{},{height:40,flexShrink:0,borderRadius:0,padding:t.spacing(1,2),justifyContent:"space-between",color:t.palette.text.disabled})}));function It(e){var t=e.file,n=e.fileUrl;return Object(D.jsxs)(wt,{children:[Object(D.jsx)(kt,{children:Object(gt.c)(n)}),Object(D.jsxs)(v.a,{sx:{ml:1.5,maxWidth:150},children:[Object(D.jsx)(w.a,{variant:"body2",noWrap:!0,children:Object(gt.a)(n)}),Object(D.jsx)(w.a,{noWrap:!0,variant:"caption",sx:{color:"text.secondary",display:"block"},children:Object(ze.b)(t.createdAt)})]})]},n)}function St(e){var t=e.conversation,n=e.isCollapse,a=e.onCollapse,i=Object(L.a)(e,vt),r=Object(Z.uniq)(Object(Z.flatten)(t.messages.map((function(e){return e.attachments})))).length;return Object(D.jsxs)(yt,Object(B.a)(Object(B.a)({},i),{},{children:[Object(D.jsxs)(Ct,{fullWidth:!0,color:"inherit",onClick:a,endIcon:Object(D.jsx)(u.a,{icon:n?Ot.a:We.a,width:16,height:16}),children:["attachment (",r,")"]}),!n&&Object(D.jsx)(I.a,{}),Object(D.jsx)(st.a,{children:Object(D.jsx)(mt.a,{in:n,children:t.messages.map((function(e){return Object(D.jsx)("div",{children:e.attachments.map((function(t){return Object(D.jsx)(It,{file:e,fileUrl:t},t)}))},e.id)}))})})]}))}var Rt=n(1590),_t=n.n(Rt),Pt=n(1429),Wt=n.n(Pt),Tt=["participants","isCollapse","onCollapse"],At=Object(q.a)(ft.a)((function(e){var t=e.theme;return Object(B.a)(Object(B.a)({},t.typography.overline),{},{height:40,borderRadius:0,padding:t.spacing(1,2),justifyContent:"space-between",color:t.palette.text.disabled})})),zt=Object(q.a)(u.a)((function(e){return{width:16,height:16,marginTop:4,color:e.theme.palette.text.secondary}})),Mt=Object(q.a)(w.a)((function(e){var t=e.theme;return Object(B.a)({flexGrow:1,maxWidth:160,wordWrap:"break-word"},t.typography.body2)}));function Dt(e){var t=e.participants,n=e.isCollapse,a=e.onCollapse,i=Object(L.a)(e,Tt),r=Object(X.a)(t)[0];return void 0===r?null:Object(D.jsxs)(v.a,Object(B.a)(Object(B.a)({},i),{},{children:[Object(D.jsxs)(v.a,{sx:{pt:4,pb:3,display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(D.jsx)(ne.a,{alt:r.name,src:r.avatar,sx:{width:96,height:96}}),Object(D.jsxs)(v.a,{sx:{mt:2,textAlign:"center"},children:[Object(D.jsx)(w.a,{variant:"subtitle1",children:r.name}),Object(D.jsx)(w.a,{variant:"body2",sx:{color:"text.secondary"},children:r.position})]})]}),Object(D.jsx)(I.a,{}),Object(D.jsx)(At,{fullWidth:!0,color:"inherit",onClick:a,endIcon:Object(D.jsx)(u.a,{icon:n?Ot.a:We.a,width:16,height:16}),children:"information"}),Object(D.jsx)(mt.a,{in:n,children:Object(D.jsxs)($e.a,{spacing:2,sx:{p:2.5,pt:1},children:[Object(D.jsxs)($e.a,{direction:"row",spacing:1,children:[Object(D.jsx)(zt,{icon:_t.a}),Object(D.jsx)(Mt,{children:r.address})]}),Object(D.jsxs)($e.a,{direction:"row",spacing:1,children:[Object(D.jsx)(zt,{icon:Se.a}),Object(D.jsx)(Mt,{children:r.phone})]}),Object(D.jsxs)($e.a,{direction:"row",spacing:1,children:[Object(D.jsx)(zt,{icon:Wt.a}),Object(D.jsx)(Mt,{children:r.email})]})]})})]}))}var Ft=n(1745),Et=n(200),Bt=["participant","isOpen","onClose"],Lt=Object(q.a)("div")((function(e){return{display:"flex",alignItems:"center",justifyContent:"center",marginTop:e.theme.spacing(1.5)}})),Ut=Object(q.a)(u.a)((function(e){var t=e.theme;return{width:16,height:16,marginRight:t.spacing(1),color:t.palette.text.secondary}}));function Gt(e){var t=e.participant,n=e.isOpen,a=e.onClose,i=Object(L.a)(e,Bt),r=t.name,c=t.avatar,o=t.position,s=t.address,l=t.phone,j=t.email;return Object(D.jsx)(Et.b,Object(B.a)(Object(B.a)({fullWidth:!0,maxWidth:"xs",open:n,onClose:a},i),{},{children:Object(D.jsxs)(Ft.a,{sx:{pb:5,textAlign:"center"},children:[Object(D.jsx)(ne.a,{alt:r,src:c,sx:{mt:5,mb:2,mx:"auto",width:96,height:96}}),Object(D.jsx)(w.a,{variant:"h6",children:r}),Object(D.jsx)(w.a,{variant:"body2",paragraph:!0,sx:{color:"text.secondary"},children:o}),Object(D.jsxs)(Lt,{children:[Object(D.jsx)(Ut,{icon:_t.a}),Object(D.jsx)(w.a,{variant:"body2",children:s})]}),Object(D.jsxs)(Lt,{children:[Object(D.jsx)(Ut,{icon:Se.a}),Object(D.jsx)(w.a,{variant:"body2",children:l})]}),Object(D.jsxs)(Lt,{children:[Object(D.jsx)(Ut,{icon:Wt.a}),Object(D.jsx)(w.a,{variant:"body2",children:j})]})]})}))}var qt=Object(q.a)(ft.a)((function(e){var t=e.theme;return Object(B.a)(Object(B.a)({},t.typography.overline),{},{height:40,borderRadius:0,padding:t.spacing(1,2),justifyContent:"space-between",color:t.palette.text.disabled})}));function Nt(e){var t=e.participant,n=e.isOpen,a=e.onClosePopup,i=e.onShowPopup,r=t.name,c=t.avatar,o=t.status,s=t.position;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(T.a,{onClick:i,sx:{height:64,px:2.5},children:[Object(D.jsx)(te.a,{children:Object(D.jsxs)(v.a,{sx:{position:"relative",width:40,height:40},children:[Object(D.jsx)(ne.a,{alt:r,src:c}),Object(D.jsx)(M.a,{status:o,sx:{right:0,bottom:0,position:"absolute"}})]})}),Object(D.jsx)(P.a,{primary:r,secondary:s,primaryTypographyProps:{variant:"subtitle2",noWrap:!0},secondaryTypographyProps:{noWrap:!0}})]}),Object(D.jsx)(Gt,{participant:t,isOpen:n,onClose:a})]})}function Ht(e){var t=e.participants,n=e.selectUserId,a=e.onShowPopupUserInfo,i=e.isCollapse,r=e.onCollapse;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(qt,{fullWidth:!0,disableRipple:!0,color:"inherit",onClick:r,endIcon:Object(D.jsx)(u.a,{icon:i?Ot.a:We.a,width:16,height:16}),children:["In room (",t.length,")"]}),Object(D.jsx)(v.a,{sx:{height:i?256:0},children:Object(D.jsx)(st.a,{children:Object(D.jsx)(mt.a,{in:i,sx:{height:i?256:0},children:Object(D.jsx)(S.a,{disablePadding:!0,children:t.map((function(e){return Object(D.jsx)(Nt,{participant:e,isOpen:n===e.id,onShowPopup:function(){return a(e.id)},onClosePopup:function(){return a(null)}},e.id)}))})})})})]})}var Qt=240,Vt=Object(q.a)((function(e){return Object(D.jsx)(C.a,Object(B.a)({disableRipple:!0},e))}))((function(e){var t=e.theme;return{right:0,zIndex:9,width:32,height:32,position:"absolute",top:t.spacing(1),boxShadow:t.customShadows.z8,backgroundColor:t.palette.background.paper,border:"solid 1px ".concat(t.palette.divider),borderRight:0,borderRadius:"12px 0 0 12px",transition:t.transitions.create("all"),"&:hover":{backgroundColor:t.palette.background.neutral}}}));function Jt(e){var t=e.conversation,n=e.participants,i=Object(ut.a)(),r=Object(a.useState)(!0),c=Object(b.a)(r,2),o=c[0],s=c[1],l=Object(a.useState)(!0),j=Object(b.a)(l,2),d=j[0],p=j[1],h=Object(a.useState)(null),x=Object(b.a)(h,2),O=x[0],f=x[1],m=Object(a.useState)(!0),g=Object(b.a)(m,2),y=g[0],w=g[1],k=Object(a.useState)(!0),C=Object(b.a)(k,2),S=C[0],R=C[1],_=Object(pt.a)(i.breakpoints.down("lg")),P=n.length>1;Object(a.useEffect)((function(){return _?T():W()}),[_]);var W=function(){s(!0)},T=function(){s(!1)},A=Object(D.jsxs)(D.Fragment,{children:[P?Object(D.jsx)(Ht,{selectUserId:O,participants:n,isCollapse:S,onShowPopupUserInfo:function(e){return f(e)},onCollapse:function(){return R((function(e){return!e}))}}):Object(D.jsx)("div",{children:Object(D.jsx)(Dt,{participants:n,isCollapse:d,onCollapse:function(){return p((function(e){return!e}))}})}),Object(D.jsx)(I.a,{}),Object(D.jsx)(St,{conversation:t,isCollapse:y,onCollapse:function(){return w((function(e){return!e}))}})]});return Object(D.jsxs)(v.a,{sx:{position:"relative"},children:[Object(D.jsx)(Vt,{onClick:function(){s((function(e){return!e}))},sx:Object(B.a)({},o&&!_&&{right:Qt}),children:Object(D.jsx)(u.a,{width:16,height:16,icon:o?We.a:bt.a})}),Object(D.jsx)(Me.d,{width:"lgUp",children:Object(D.jsx)(ht.a,{anchor:"right",ModalProps:{keepMounted:!0},open:o,onClose:T,sx:{"& .MuiDrawer-paper":{width:Qt}},children:A})}),Object(D.jsx)(Me.d,{width:"lgDown",children:Object(D.jsx)(ht.a,{open:o,anchor:"right",variant:"persistent",sx:Object(B.a)(Object(B.a)({height:1,width:Qt,transition:i.transitions.create("width")},!o&&{width:"0px"}),{},{"& .MuiDrawer-paper":{position:"static",width:Qt}}),children:A})})]})}function Kt(e){var t=e.query,n=e.results,a=e.onSelectContact,i=n.length>0;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(w.a,{paragraph:!0,variant:"subtitle1",sx:{px:3,color:"text.secondary"},children:"Contacts"}),Object(D.jsx)(S.a,{disablePadding:!0,children:n.map((function(e){return Object(D.jsxs)(T.a,{onClick:function(){return a(e)},sx:{py:1.5,px:3},children:[Object(D.jsx)(te.a,{children:Object(D.jsx)(ne.a,{alt:e.name,src:e.avatar})}),Object(D.jsx)(P.a,{primary:e.name,primaryTypographyProps:{noWrap:!0,variant:"subtitle2"}})]},e.id)}))}),!i&&Object(D.jsx)(me.a,{searchQuery:t,sx:{p:3,mx:"auto",width:"calc(100% - 48px)",bgcolor:"background.neutral"}})]})}var Yt=n(15),$t=n.n(Yt),Xt=n(24),Zt=n(32),en=n(1345),tn=n.n(en),nn=n(425),an=n.n(nn),rn=n(28),cn=Object(q.a)((function(e){return Object(D.jsx)(C.a,Object(B.a)({disableRipple:!0},e))}))((function(e){var t=e.theme;return{left:0,zIndex:9,width:32,height:32,position:"absolute",top:t.spacing(13),borderRadius:"0 12px 12px 0",color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.main,boxShadow:t.customShadows.primary,"&:hover":{backgroundColor:t.palette.primary.darker}}}));function on(){var e=Object(ut.a)(),t=Object(ce.h)(),n=Object(ce.g)().pathname,i=Object(a.useState)(!0),r=Object(b.a)(i,2),o=r[0],l=r[1],j=Object(a.useState)(""),d=Object(b.a)(j,2),p=d[0],h=d[1],x=Object(a.useState)([]),O=Object(b.a)(x,2),f=O[0],m=O[1],g=Object(a.useState)(!1),y=Object(b.a)(g,2),w=y[0],k=y[1],C=Object(c.d)((function(e){return e.chat})),I=C.conversations,S=C.activeConversationId,R=p&&w,_=Object(pt.a)(e.breakpoints.down("md")),P=!_&&!o;Object(a.useEffect)((function(){return _?T():W()}),[_,n]),Object(a.useEffect)((function(){if(!o)return k(!1)}),[o]);var W=function(){l(!0)},T=function(){l(!1)},A=function(){l((function(e){return!e}))},z=function(){var e=Object(Xt.a)($t.a.mark((function e(t){var n,a;return $t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=t.target.value,h(n),!n){e.next=10;break}return e.next=6,rn.a.get("/api/chat/search",{params:{query:n}});case 6:a=e.sent,m(a.data.results),e.next=11;break;case 10:m([]);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),M=function(e){k(!1),h(""),t("".concat(s.b.chat.root,"/").concat(e))},F=Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(v.a,{sx:{py:2,px:3},children:[Object(D.jsxs)($e.a,{direction:"row",alignItems:"center",justifyContent:"center",children:[!P&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(E,{}),Object(D.jsx)(v.a,{sx:{flexGrow:1}})]}),Object(D.jsx)(Me.e,{onClick:A,children:Object(D.jsx)(u.a,{width:20,height:20,icon:o?bt.a:We.a})}),!P&&Object(D.jsx)(Me.e,{to:s.b.chat.new,component:Zt.b,children:Object(D.jsx)(u.a,{icon:tn.a,width:20,height:20})})]}),!P&&Object(D.jsx)($,{query:p,onFocus:function(){k(!0)},onChange:z,onClickAway:function(){k(!1),h("")}})]}),Object(D.jsx)(st.a,{children:R?Object(D.jsx)(Kt,{query:p,results:f,onSelectContact:function(e){M&&M(e.username)}}):Object(D.jsx)(se,{conversations:I,isOpenSidebar:o,activeConversationId:S,sx:Object(B.a)({},w&&{display:"none"})})})]});return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(Me.d,{width:"mdUp",children:Object(D.jsx)(cn,{onClick:A,children:Object(D.jsx)(u.a,{width:16,height:16,icon:an.a})})}),Object(D.jsx)(Me.d,{width:"mdUp",children:Object(D.jsx)(ht.a,{ModalProps:{keepMounted:!0},open:o,onClose:T,sx:{"& .MuiDrawer-paper":{width:320}},children:F})}),Object(D.jsx)(Me.d,{width:"mdDown",children:Object(D.jsx)(ht.a,{open:o,variant:"persistent",sx:Object(B.a)({width:320,transition:e.transitions.create("width"),"& .MuiDrawer-paper":{position:"static",width:320}},P&&{width:96,"& .MuiDrawer-paper":{width:96,position:"static",transform:"none !important",visibility:"visible !important"}}),children:F})})]})}function sn(){var e=Object(c.c)(),t=Object(ce.h)(),n=Object(ce.g)().pathname,i=Object(ce.i)().conversationKey,r=Object(c.d)((function(e){return e.chat})),l=r.contacts,j=r.recipients,d=r.participants,b=r.activeConversationId,u=Object(c.d)((function(e){return function(e){var t=e.chat,n=t.conversations,a=t.activeConversationId,i=a?n.byId[a]:null;return i||{id:"",messages:[],participants:[],unreadCount:0,type:""}}(e)})),p=i?"DETAIL":"COMPOSE",h=d.filter((function(e){return"8864c717-587d-472a-929a-8e5f298024da-0"!==e.id}));Object(a.useEffect)((function(){var n=function(){var n=Object(Xt.a)($t.a.mark((function n(){return $t.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(Object(o.f)(i)),n.prev=1,n.next=4,e(Object(o.d)(i));case 4:n.next=10;break;case 6:n.prev=6,n.t0=n.catch(1),console.error(n.t0),t(s.b.chat.new);case 10:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(){return n.apply(this,arguments)}}();i?n():b&&e(Object(o.i)())}),[i]),Object(a.useEffect)((function(){b&&e(Object(o.g)(b))}),[e,b]);var x=function(){var t=Object(Xt.a)($t.a.mark((function t(n){return $t.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e(Object(o.h)(n))}catch(a){console.error(a)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(D.jsxs)($e.a,{sx:{flexGrow:1,minWidth:"1px"},children:["DETAIL"===p?Object(D.jsx)(Le,{participants:h}):Object(D.jsx)(we,{recipients:j,contacts:Object.values(l.byId),onAddRecipients:function(t){e(Object(o.a)(t))}}),Object(D.jsx)(I.a,{}),Object(D.jsxs)(v.a,{sx:{flexGrow:1,display:"flex",overflow:"hidden"},children:[Object(D.jsxs)($e.a,{sx:{flexGrow:1},children:[Object(D.jsx)(jt,{conversation:u}),Object(D.jsx)(I.a,{}),Object(D.jsx)(tt,{conversationId:b,onSend:x,disabled:n===s.b.chat.new})]}),"DETAIL"===p&&Object(D.jsx)(Jt,{conversation:u,participants:h})]})]})}function ln(){var e=Object(l.a)().themeStretch,t=Object(c.c)();return Object(a.useEffect)((function(){t(Object(o.e)()),t(Object(o.c)())}),[t]),Object(D.jsx)(j.a,{title:"Chat | Minimal-UI",children:Object(D.jsxs)(i.a,{maxWidth:!e&&"xl",children:[Object(D.jsx)(d.a,{heading:"Chat",links:[{name:"Dashboard",href:s.b.root},{name:"Chat"}]}),Object(D.jsxs)(r.a,{sx:{height:"72vh",display:"flex"},children:[Object(D.jsx)(on,{}),Object(D.jsx)(sn,{})]})]})})}}}]);
//# sourceMappingURL=72.8c26861d.chunk.js.map