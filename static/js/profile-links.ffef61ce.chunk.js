(this["webpackJsonpsmartnative-user-frontend"]=this["webpackJsonpsmartnative-user-frontend"]||[]).push([[11],{117:function(e,a,t){"use strict";t(6);var s=t(125),c=t(126),n=t(112),i=t(110),r=t(7),l=t(17),o=function(e){return"/".concat(e)===r.b?Object(l.jsx)(i.a,{id:"menu.home"}):Object(l.jsx)(i.a,{id:"menu.".concat(e)})},u=function(e,a){return e.split(a)[0]+a},b=function(e){var a=e.match.path.substr(1),t=a.split("/").filter(Boolean);return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(s.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:t.map((function(e,s){return Object(l.jsx)(c.a,{active:t.length===s+1,children:t.length!==s+1?Object(l.jsx)(n.b,{to:"/".concat(u(a,e)),children:o(e)}):o(e)},s)}))})})};a.a=function(e){var a=e.heading,t=e.match;return Object(l.jsxs)(l.Fragment,{children:[a&&Object(l.jsx)("h1",{children:Object(l.jsx)(i.a,{id:a})}),t&&Object(l.jsx)(b,{match:t})]})}},120:function(e,a,t){"use strict";var s=t(114),c=t(6),n=t(240),i=t(198),r=t(199),l=t(106),o=t.n(l),u=t(17),b=function(e){var a=e.id,t=e.className,l=e.color,b=e.children,d=e.onClick,j=e.next,m=e.successNext,p=Object(c.useState)("default"),O=Object(s.a)(p,2),f=O[0],h=O[1],x=Object(c.useState)(""),g=Object(s.a)(x,2),N=g[0],v=g[1],k=Object(c.useState)(!1),y=Object(s.a)(k,2),M=y[0],T=y[1];return Object(u.jsx)("span",{children:Object(u.jsxs)(n.a,{id:a,className:"btn-multiple-state  ".concat(t,"  ").concat(o()({"show-spinner":"processing"===f,"show-success":"success"===f,"show-fail":"fail"===f})),color:l,onClick:function(){h("processing"),d().then((function(e){v(e),h("success"),m&&m()})).catch((function(e){v(e),h("fail")})).finally((function(){T(!0),setTimeout((function(){h("default"),T(!1),j&&j()}),3e3)}))},disabled:"default"!==f,children:[Object(u.jsx)(i.a,{placement:"top",isOpen:M,target:a,children:Object(u.jsx)(r.a,{children:N})}),Object(u.jsxs)("span",{className:"spinner d-inline-block",children:[Object(u.jsx)("span",{className:"bounce1"}),Object(u.jsx)("span",{className:"bounce2"}),Object(u.jsx)("span",{className:"bounce3"})]}),Object(u.jsx)("span",{className:"icon success",children:Object(u.jsx)("i",{className:"simple-icon-check"})}),Object(u.jsx)("span",{className:"icon fail",children:Object(u.jsx)("i",{className:"simple-icon-exclamation"})}),Object(u.jsx)("span",{className:"label",children:b})]})})};b.defaultProps={className:"",children:null,next:null,successNext:null},a.a=b},125:function(e,a,t){"use strict";var s=t(11),c=t(16),n=t(6),i=t.n(n),r=t(21),l=t.n(r),o=t(106),u=t.n(o),b=t(107),d={tag:b.q,listTag:b.q,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},j=function(e){var a=e.className,t=e.listClassName,n=e.cssModule,r=e.children,l=e.tag,o=e.listTag,d=e["aria-label"],j=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),m=Object(b.m)(u()(a),n),p=Object(b.m)(u()("breadcrumb",t),n);return i.a.createElement(l,Object(s.a)({},j,{className:m,"aria-label":d}),i.a.createElement(o,{className:p},r))};j.propTypes=d,j.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=j},126:function(e,a,t){"use strict";var s=t(11),c=t(16),n=t(6),i=t.n(n),r=t(21),l=t.n(r),o=t(106),u=t.n(o),b=t(107),d={tag:b.q,active:l.a.bool,className:l.a.string,cssModule:l.a.object},j=function(e){var a=e.className,t=e.cssModule,n=e.active,r=e.tag,l=Object(c.a)(e,["className","cssModule","active","tag"]),o=Object(b.m)(u()(a,!!n&&"active","breadcrumb-item"),t);return i.a.createElement(r,Object(s.a)({},l,{className:o,"aria-current":n?"page":void 0}))};j.propTypes=d,j.defaultProps={tag:"li"},a.a=j},143:function(e,a,t){"use strict";var s=t(11),c=t(16),n=t(6),i=t.n(n),r=t(21),l=t.n(r),o=t(106),u=t.n(o),b=t(107),d={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:b.q,className:l.a.string,cssModule:l.a.object},j=function(e){var a=e.className,t=e.cssModule,n=e.row,r=e.disabled,l=e.check,o=e.inline,d=e.tag,j=Object(c.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),m=Object(b.m)(u()(a,!!n&&"row",l?"form-check":"form-group",!(!l||!o)&&"form-check-inline",!(!l||!r)&&"disabled"),t);return"fieldset"===d&&(j.disabled=r),i.a.createElement(d,Object(s.a)({},j,{className:m}))};j.propTypes=d,j.defaultProps={tag:"div"},a.a=j},198:function(e,a,t){"use strict";var s=t(11),c=t(6),n=t.n(c),i=t(106),r=t.n(i),l=t(158),o=function(e){var a=r()("popover","show",e.popperClassName),t=r()("popover-inner",e.innerClassName);return n.a.createElement(l.a,Object(s.a)({},e,{popperClassName:a,innerClassName:t}))};o.propTypes=l.b,o.defaultProps={placement:"right",placementPrefix:"bs-popover",trigger:"click"},a.a=o},199:function(e,a,t){"use strict";var s=t(11),c=t(16),n=t(6),i=t.n(n),r=t(21),l=t.n(r),o=t(106),u=t.n(o),b=t(107),d={tag:b.q,className:l.a.string,cssModule:l.a.object},j=function(e){var a=e.className,t=e.cssModule,n=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),l=Object(b.m)(u()(a,"popover-body"),t);return i.a.createElement(n,Object(s.a)({},r,{className:l}))};j.propTypes=d,j.defaultProps={tag:"div"},a.a=j},211:function(e,a,t){"use strict";var s=t(11),c=t(16),n=t(6),i=t.n(n),r=t(21),l=t.n(r),o=t(106),u=t.n(o),b=t(107),d={tag:b.q,size:l.a.string,className:l.a.string,cssModule:l.a.object},j=function(e){var a=e.className,t=e.cssModule,n=e.tag,r=e.size,l=Object(c.a)(e,["className","cssModule","tag","size"]),o=Object(b.m)(u()(a,"input-group",r?"input-group-"+r:null),t);return i.a.createElement(n,Object(s.a)({},l,{className:o}))};j.propTypes=d,j.defaultProps={tag:"div"},a.a=j},215:function(e,a,t){"use strict";var s=t(11),c=t(16),n=t(6),i=t.n(n),r=t(21),l=t.n(r),o=t(106),u=t.n(o),b=t(107),d={tag:b.q,className:l.a.string,cssModule:l.a.object},j=function(e){var a=e.className,t=e.cssModule,n=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),l=Object(b.m)(u()(a,"input-group-text"),t);return i.a.createElement(n,Object(s.a)({},r,{className:l}))};j.propTypes=d,j.defaultProps={tag:"span"};var m=j,p={tag:b.q,addonType:l.a.oneOf(["prepend","append"]).isRequired,children:l.a.node,className:l.a.string,cssModule:l.a.object},O=function(e){var a=e.className,t=e.cssModule,n=e.tag,r=e.addonType,l=e.children,o=Object(c.a)(e,["className","cssModule","tag","addonType","children"]),d=Object(b.m)(u()(a,"input-group-"+r),t);return"string"===typeof l?i.a.createElement(n,Object(s.a)({},o,{className:d}),i.a.createElement(m,{children:l})):i.a.createElement(n,Object(s.a)({},o,{className:d,children:l}))};O.propTypes=p,O.defaultProps={tag:"div"};a.a=O},403:function(e,a,t){"use strict";t.r(a);var s=t(3),c=t.n(s),n=t(12),i=t(2),r=t(114),l=t(6),o=t(119),u=t(182),b=t(183),d=t(240),j=t(320),m=t(184),p=t(143),O=t(211),f=t(215),h=t(434),x=t(29),g=t(110),N=t(113),v=t(117),k=t(7),y=t(120),M=t(13),T=t(9),w=t(17);a.default=Object(x.b)((function(e){var a=e.authUser;return{currentUser:a.currentUser,profileData:a.profileData}}),{})((function(e){var a=e.match,t=Object(o.g)(),s=Object(T.e)(),x=Object(l.useState)(!1),C=Object(r.a)(x,2),P=C[0],E=C[1],q=s.id,S=s.facebook,F=s.github,z=s.linkedin,U=s.instagram,D=s.user_id,J=Object(l.useState)({facebook:S,github:F,linkedin:z,instagram:U}),_=Object(r.a)(J,2),B=_[0],L=_[1],R=function(e,a){L(Object(i.a)(Object(i.a)({},B),{},{[a]:e.target.value}))},A=function(){var e=Object(n.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){(function(){var l=Object(n.a)(c.a.mark((function n(){var l;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(M.a)({method:"POST",url:"/updateProfile",data:Object(i.a)({user_id:D,id:q},a)});case 2:l=c.sent,l.data.success?(Object(T.l)(Object(i.a)(Object(i.a)({},s),a)),e("Profile updated successfully!"),t.push("".concat(k.b,"/profile/contact"))):r("Failed to update profile!");case 5:case"end":return c.stop()}}),n)})));return function(){return l.apply(this,arguments)}})()()})));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(u.a,{children:Object(w.jsxs)(N.a,{xxs:"12",children:[Object(w.jsx)(v.a,{heading:"menu.links",match:a}),Object(w.jsx)(N.b,{className:"mb-5"})]})}),Object(w.jsx)(u.a,{className:"justify-content-center",children:Object(w.jsx)(N.a,{xxs:"12",md:"8",children:Object(w.jsxs)(b.a,{className:"mb-4",children:[Object(w.jsx)("div",{className:"position-absolute card-top-buttons",children:Object(w.jsx)(d.a,{outline:!0,color:"primary",onClick:function(){E(!P)},className:"icon-button",children:Object(w.jsx)("i",{className:"simple-icon-pencil"})})}),Object(w.jsxs)(j.a,{children:[Object(w.jsxs)(m.a,{children:[Object(w.jsx)("h2",{className:"lead",children:Object(w.jsx)(g.a,{id:"user.update-links"})}),Object(w.jsx)("p",{className:"mt-2",children:Object(w.jsx)(g.a,{id:"user.update-links-desc"})})]}),Object(w.jsx)(p.a,{className:"mb-6",children:Object(w.jsxs)(O.a,{children:[Object(w.jsx)(f.a,{addonType:"prepend",children:Object(w.jsx)("i",{className:"simple-icon-social-linkedin btn"})}),Object(w.jsx)(h.a,{type:"text",className:"form-control",name:"linkedin",value:B.linkedin,onChange:function(e){R(e,"linkedin")},disabled:!P})]})}),Object(w.jsx)(p.a,{className:"mb-6",children:Object(w.jsxs)(O.a,{children:[Object(w.jsx)(f.a,{addonType:"prepend",children:Object(w.jsx)("i",{className:"simple-icon-social-facebook btn"})}),Object(w.jsx)(h.a,{type:"text",name:"facebook",value:B.facebook,onChange:function(e){R(e,"facebook")},disabled:!P})]})}),Object(w.jsx)(p.a,{className:"mb-6",children:Object(w.jsxs)(O.a,{children:[Object(w.jsx)(f.a,{addonType:"prepend",children:Object(w.jsx)("i",{className:"simple-icon-social-github btn"})}),Object(w.jsx)(h.a,{type:"text",name:"github",className:"form-control",value:B.github,onChange:function(e){R(e,"github")},disabled:!P})]})}),Object(w.jsx)(p.a,{className:"mb-6",children:Object(w.jsxs)(O.a,{children:[Object(w.jsx)(f.a,{addonType:"prepend",children:Object(w.jsx)("i",{className:"simple-icon-social-instagram btn"})}),Object(w.jsx)(h.a,{type:"text",name:"github",className:"form-control",value:B.instagram,onChange:function(e){R(e,"instagram")},disabled:!P})]})}),Object(w.jsx)(p.a,{className:"text-center",children:P&&Object(w.jsx)(y.a,{id:"submitLinks",color:"primary",type:"submit",onClick:function(){return A(B)},next:function(){E(!1)},children:Object(w.jsx)(g.a,{id:"forms.submit"})})})]})]})})})]})}))}}]);
//# sourceMappingURL=profile-links.ffef61ce.chunk.js.map