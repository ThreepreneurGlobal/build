(this["webpackJsonpsmartnative-user-frontend"]=this["webpackJsonpsmartnative-user-frontend"]||[]).push([[9],{117:function(e,t,a){"use strict";a(6);var c=a(125),n=a(126),s=a(112),i=a(110),r=a(7),o=a(17),l=function(e){return"/".concat(e)===r.b?Object(o.jsx)(i.a,{id:"menu.home"}):Object(o.jsx)(i.a,{id:"menu.".concat(e)})},j=function(e,t){return e.split(t)[0]+t},u=function(e){var t=e.match.path.substr(1),a=t.split("/").filter(Boolean);return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(e){return-1===e.indexOf(":")}))),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(c.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:a.map((function(e,c){return Object(o.jsx)(n.a,{active:a.length===c+1,children:a.length!==c+1?Object(o.jsx)(s.b,{to:"/".concat(j(t,e)),children:l(e)}):l(e)},c)}))})})};t.a=function(e){var t=e.heading,a=e.match;return Object(o.jsxs)(o.Fragment,{children:[t&&Object(o.jsx)("h1",{children:Object(o.jsx)(i.a,{id:t})}),a&&Object(o.jsx)(u,{match:a})]})}},120:function(e,t,a){"use strict";var c=a(114),n=a(6),s=a(240),i=a(198),r=a(199),o=a(106),l=a.n(o),j=a(17),u=function(e){var t=e.id,a=e.className,o=e.color,u=e.children,d=e.onClick,b=e.next,h=e.successNext,O=Object(n.useState)("default"),m=Object(c.a)(O,2),x=m[0],f=m[1],p=Object(n.useState)(""),g=Object(c.a)(p,2),y=g[0],_=g[1],N=Object(n.useState)(!1),v=Object(c.a)(N,2),k=v[0],S=v[1];return Object(j.jsx)("span",{children:Object(j.jsxs)(s.a,{id:t,className:"btn-multiple-state  ".concat(a,"  ").concat(l()({"show-spinner":"processing"===x,"show-success":"success"===x,"show-fail":"fail"===x})),color:o,onClick:function(){f("processing"),d().then((function(e){_(e),f("success"),h&&h()})).catch((function(e){_(e),f("fail")})).finally((function(){S(!0),setTimeout((function(){f("default"),S(!1),b&&b()}),3e3)}))},disabled:"default"!==x,children:[Object(j.jsx)(i.a,{placement:"top",isOpen:k,target:t,children:Object(j.jsx)(r.a,{children:y})}),Object(j.jsxs)("span",{className:"spinner d-inline-block",children:[Object(j.jsx)("span",{className:"bounce1"}),Object(j.jsx)("span",{className:"bounce2"}),Object(j.jsx)("span",{className:"bounce3"})]}),Object(j.jsx)("span",{className:"icon success",children:Object(j.jsx)("i",{className:"simple-icon-check"})}),Object(j.jsx)("span",{className:"icon fail",children:Object(j.jsx)("i",{className:"simple-icon-exclamation"})}),Object(j.jsx)("span",{className:"label",children:u})]})})};u.defaultProps={className:"",children:null,next:null,successNext:null},t.a=u},331:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(3),s=a.n(n),i=a(12),r=a(114),o=a(6),l=a(29),j=a(332),u=a(333),d=a(182),b=a(183),h=a(240),O=a(320),m=a(184),x=a(143),f=a(214),p=a(151),g=a(434),y=a(250),_=a.n(y),N=a(119),v=(a(334),a(110)),k=a(113),S=a(117),w=a(7),C=a(120),P=a(13),T=a(9),F=a(17),D=Object(u.a)();t.default=Object(l.b)((function(e){var t=e.history;return{profileData:e.authUser.profileData,history:t}}),{})((function(e){var t=e.match,a=Object(T.e)(),n=a.user_id,l=a.id,u=a.degree_type,y=a.education_institution,M=a.field_of_study,Y=a.month_of_graduation,E=a.year_of_graduation,J=Object(N.g)(),R=Object(o.useState)(!1),B=Object(r.a)(R,2),I=B[0],q=B[1],U=Object(o.useState)(!1),A=Object(r.a)(U,2),V=A[0],z=A[1],G=Object(o.useState)(!1),H=Object(r.a)(G,2),K=H[0],L=H[1],Q=Object(o.useState)({degree_type:u,education_institution:y,field_of_study:M,month_of_graduation:Y||(new Date).getMonth(),year_of_graduation:E||(new Date).getFullYear()}),W=Object(r.a)(Q,2),X=W[0],Z=W[1],$=Object(o.useState)(new Date(X.year_of_graduation,X.month_of_graduation)),ee=Object(r.a)($,2),te=ee[0],ae=ee[1],ce=function(){var e=Object(i.a)(s.a.mark((function e(t,a){var c,n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:"React POST Request Example"})},e.next=3,fetch("http://api.smart-natives.de/index.php/api/searchSkill?skill_name=".concat(t),c);case 3:return n=e.sent,e.next=6,n.json();case 6:i=e.sent,a(i.map((function(e){return{label:e.name,value:e.name,key:e.id}})));case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),ne=Object(o.useState)([]),se=Object(r.a)(ne,2),ie=se[0],re=se[1],oe=function(e,t){Z(Object(c.a)(Object(c.a)({},X),{},{[t]:e.target.value}))};return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(d.a,{children:Object(F.jsxs)(k.a,{xxs:"12",children:[Object(F.jsx)(S.a,{heading:"menu.education",match:t}),Object(F.jsx)(k.b,{className:"mb-5"})]})}),Object(F.jsx)(d.a,{className:"justify-content-center",children:Object(F.jsx)(k.a,{xxs:"12",md:"8",children:Object(F.jsxs)(b.a,{className:"mb-4",children:[Object(F.jsx)("div",{className:"position-absolute card-top-buttons",children:Object(F.jsx)(h.a,{outline:!0,color:"primary",onClick:function(){q(!I)},className:"icon-button",children:Object(F.jsx)("i",{className:"simple-icon-pencil"})})}),Object(F.jsxs)(O.a,{children:[Object(F.jsxs)(m.a,{children:[Object(F.jsx)("h2",{className:"lead",children:Object(F.jsx)(v.a,{id:"user.update-education"})}),Object(F.jsx)("p",{className:"mt-2",children:Object(F.jsx)(v.a,{id:"user.update-education-desc"})})]}),Object(F.jsx)(k.b,{className:"mb-3"}),Object(F.jsx)(x.a,{children:Object(F.jsx)(f.a,{type:"checkbox",id:"formal-education",checked:V,onChange:function(){z(!V),V&&Z(Object(c.a)(Object(c.a)({},X),{},{degree_type:"",education_institution:""}))},disabled:!I,label:"I don't have Formal Education."})}),Object(F.jsxs)(x.a,{className:"mb-3",children:[Object(F.jsx)(p.a,{children:Object(F.jsx)(v.a,{id:"forms.degree-type"})}),Object(F.jsx)(g.a,{type:"text",name:"degree-type",placeholder:"e.g. B. Tech in Computer Science",value:X.degree_type,onChange:function(e){oe(e,"degree_type")},disabled:!I||V})]}),Object(F.jsxs)(x.a,{className:"mb-5",children:[Object(F.jsx)(p.a,{children:Object(F.jsx)(v.a,{id:"forms.select-institution"})}),Object(F.jsx)(g.a,{type:"text",name:"select-institution",placeholder:"e.g Vellore Institute of Technology",value:X.education_institution,onChange:function(e){oe(e,"education_institution")},disabled:!I||V})]}),Object(F.jsx)(k.b,{className:"mt-2 mb-2"}),Object(F.jsx)(x.a,{children:Object(F.jsx)(f.a,{type:"checkbox",id:"curently-study-here",checked:K,onChange:function(){L(!K),K&&Z(Object(c.a)(Object(c.a)({},X),{},{month_of_graduation:"",year_of_graduation:""}))},disabled:!I,label:"I currently study here."})}),Object(F.jsxs)(x.a,{className:"mb-3",children:[Object(F.jsx)(p.a,{children:Object(F.jsx)(v.a,{id:"forms.field-of-study"})}),Object(F.jsx)(g.a,{type:"text",name:"field-of-study",placeholder:"e.g. Software Engineering",value:X.field_of_study,onChange:function(e){oe(e,"field_of_study")},disabled:!I||K})]}),Object(F.jsxs)(d.a,{children:[Object(F.jsx)(k.a,{children:Object(F.jsxs)(x.a,{className:"mb-3",children:[Object(F.jsx)(p.a,{children:Object(F.jsx)(v.a,{id:"forms.month-of-graduation"})}),I&&!K?Object(F.jsx)(_.a,{selected:te,onChange:function(e){ae(e);var t,a={target:{value:(t=e.getMonth()+1,t<10?"0".concat(t):t)}};oe(a,"month_of_graduation")},dateFormat:"MM",showMonthYearPicker:!0}):Object(F.jsx)(g.a,{type:"text",name:"month",placeholder:"e.g. ".concat((new Date).getMonth()),value:X.month_of_graduation,disabled:!I||K})]})}),Object(F.jsx)(k.a,{children:Object(F.jsxs)(x.a,{className:"mb-3",children:[Object(F.jsx)(p.a,{children:Object(F.jsx)(v.a,{id:"forms.year-of-graduation"})}),I&&!K?Object(F.jsx)(_.a,{selected:te,onChange:function(e){ae(e);var t={target:{value:JSON.stringify(e.getFullYear())}};oe(t,"year_of_graduation")},showYearPicker:!0,dateFormat:"yyyy"}):Object(F.jsx)(g.a,{type:"text",name:"year",placeholder:"e.g. ".concat((new Date).getFullYear()),value:X.year_of_graduation,disabled:!I||K})]})})]}),Object(F.jsx)(k.b,{className:"mt-2 mb-2"}),Object(F.jsxs)(x.a,{className:"mb-3",children:[Object(F.jsx)(p.a,{children:Object(F.jsx)(v.a,{id:"Enter Your Top 5 skills *"})}),Object(F.jsx)(j.a,{className:"react-select",classNamePrefix:"react-select",isMulti:!0,component:D,name:"form-field-name",loadOptions:ce,value:ie,onChange:re})]}),I&&Object(F.jsx)(x.a,{className:"text-center",children:Object(F.jsx)(C.a,{id:"submitAndNextButton",color:"primary",onClick:function(){return e=X,new Promise((function(t,r){!function(){var o=Object(i.a)(s.a.mark((function i(){return s.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(P.a)({method:"POST",url:"/updateProfile",data:Object(c.a)({user_id:n,id:l},e)});case 2:s.sent.data.success?(Object(T.l)(Object(c.a)(Object(c.a)({},a),e)),t("Profile updated successfully!"),J.push("".concat(w.b,"/profile/experience"))):r("Failed to update profile!");case 5:case"end":return s.stop()}}),i)})));return function(){return o.apply(this,arguments)}}()()}));var e},next:function(){!function(){console.log(ie);var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:"React POST Request Example"})};ie.map(function(){var t=Object(i.a)(s.a.mark((function t(c){var n,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://api.smart-natives.de/index.php/api/addUserSkill?user_id=".concat(a.id,"&skill_name=").concat(c.value,"&skill_id=").concat(c.key),e);case 2:return n=t.sent,t.next=5,n.json();case 5:i=t.sent,console.log(i);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}(),q(!1)},children:Object(F.jsx)(v.a,{id:"forms.submit"})})})]})]})})})]})}))}}]);
//# sourceMappingURL=profile-education.806756a3.chunk.js.map