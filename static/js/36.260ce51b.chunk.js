(this["webpackJsonpsmartnative-user-frontend"]=this["webpackJsonpsmartnative-user-frontend"]||[]).push([[36],{120:function(e,t,a){"use strict";var c=a(114),n=a(6),s=a(240),i=a(198),r=a(199),l=a(106),o=a.n(l),j=a(17),d=function(e){var t=e.id,a=e.className,l=e.color,d=e.children,b=e.onClick,u=e.next,h=e.successNext,O=Object(n.useState)("default"),m=Object(c.a)(O,2),x=m[0],p=m[1],f=Object(n.useState)(""),g=Object(c.a)(f,2),y=g[0],v=g[1],_=Object(n.useState)(!1),N=Object(c.a)(_,2),k=N[0],C=N[1];return Object(j.jsx)("span",{children:Object(j.jsxs)(s.a,{id:t,className:"btn-multiple-state  ".concat(a,"  ").concat(o()({"show-spinner":"processing"===x,"show-success":"success"===x,"show-fail":"fail"===x})),color:l,onClick:function(){p("processing"),b().then((function(e){v(e),p("success"),h&&h()})).catch((function(e){v(e),p("fail")})).finally((function(){C(!0),setTimeout((function(){p("default"),C(!1),u&&u()}),3e3)}))},disabled:"default"!==x,children:[Object(j.jsx)(i.a,{placement:"top",isOpen:k,target:t,children:Object(j.jsx)(r.a,{children:y})}),Object(j.jsxs)("span",{className:"spinner d-inline-block",children:[Object(j.jsx)("span",{className:"bounce1"}),Object(j.jsx)("span",{className:"bounce2"}),Object(j.jsx)("span",{className:"bounce3"})]}),Object(j.jsx)("span",{className:"icon success",children:Object(j.jsx)("i",{className:"simple-icon-check"})}),Object(j.jsx)("span",{className:"icon fail",children:Object(j.jsx)("i",{className:"simple-icon-exclamation"})}),Object(j.jsx)("span",{className:"label",children:d})]})})};d.defaultProps={className:"",children:null,next:null,successNext:null},t.a=d},157:function(e,t,a){"use strict";var c=a(3),n=a.n(c),s=a(12),i=a(114),r=a(6),l=a(21),o=a.n(l),j=a(13),d=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"data",c=Object(r.useState)(!0),l=Object(i.a)(c,2),o=l[0],d=l[1],b=Object(r.useState)(""),u=Object(i.a)(b,2),h=u[0],O=u[1],m=Object(r.useState)([]),x=Object(i.a)(m,2),p=x[0],f=x[1];return Object(r.useEffect)((function(){e?(t&&f(!1),function(){var t=Object(s.a)(n.a.mark((function t(){var c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(j.a)({method:"GET",url:e});case 3:(c=t.sent).data.success?f(c.data[a]):O(c.data.message),d(!1),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),O(t.t0.message),d(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()()):O("Please Provide a Uri!")}),[]),{loading:o,data:p,error:h}};t.a=d,d.propTypes={url:o.a.string.isRequired,refresh:o.a.bool}},196:function(e,t,a){"use strict";var c=a(2),n=(a(6),a(128)),s=a(17);t.a=function(e){var t=Object(c.a)({},e);return delete t.autoCorrect,delete t.autoCapitalize,Object(s.jsx)(n.m.Input,Object(c.a)({},t))}},423:function(e,t,a){"use strict";a.r(t);var c=a(114),n=a(6),s=a(189),i=a(182),r=a(183),l=a(320),o=a(113),j=a(157),d=a(3),b=a.n(d),u=a(12),h=a(119),O=a(184),m=a(240),x=a(428),p=a(2),f=a(412),g=a(413),y=a(143),v=a(151),_=a(434),N=a(457),k=a(110),C=a(120),w=a(17),P=function(e){var t=e.setOpenModal,a=Object(n.useState)({code:""}),s=Object(c.a)(a,2),i=s[0],r=s[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f.a,{children:Object(w.jsx)("h2",{className:"lead",children:Object(w.jsx)(k.a,{id:"challenges.modal.join-team-title"})})}),Object(w.jsx)(g.a,{children:Object(w.jsxs)(y.a,{children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"challenges.modal.code"})}),Object(w.jsx)(y.a,{children:Object(w.jsx)(_.a,{type:"text",value:i.question,onChange:function(e){return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r(Object(p.a)(Object(p.a)({},i),{},{[t]:a?e:e.target.value}))}(e,"code")}})})]})}),Object(w.jsxs)(N.a,{children:[Object(w.jsx)(C.a,{id:"add-question-buttom",color:"secondary",onClick:function(){return new Promise((function(e){setTimeout((function(){e("Everything went right!")}),1400)}))},children:Object(w.jsx)(k.a,{id:"challenges.modal.application-add"})}),Object(w.jsx)(m.a,{color:"danger",onClick:function(){return t(!1)},children:Object(w.jsx)(k.a,{id:"challenges.modal.application-cancel"})})]})]})},S=a(13),z=a(7),D=a(9),F=function(e){var t=e.completePercentage,a=e.id,s=Object(h.g)(),i=Object(n.useState)(!1),j=Object(c.a)(i,2),d=j[0],p=j[1],f=Object(D.e)().user_id,g=function(){var e=Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,c){t<100&&c("Please Complete the Form!"),function(){var t=Object(u.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("hackathon Submitted"),t.prev=1,t.next=4,Object(S.a)({method:"POST",url:"/addparticipant",data:{hackathon_id:a,status:"0",user_id:f}});case 4:n=t.sent,n.data.success?(e("Application submitted successfully!"),s.push("".concat(z.b,"/challenges/").concat(a))):c("Failed to Submit Application!"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),c("Failed to update hackathon!");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}()()})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(r.a,{children:Object(w.jsxs)(l.a,{className:"text-center",children:[Object(w.jsxs)(O.a,{children:[Object(w.jsx)("h2",{className:"lead",children:Object(w.jsx)(k.a,{id:"challenges.application-not-submitted"})}),Object(w.jsx)(o.b,{className:"mb-5"})]}),Object(w.jsx)("p",{children:Object(w.jsx)(k.a,{id:"challenges.application-filled"})}),Object(w.jsxs)("h3",{className:"lead",children:[t,"%"]}),Object(w.jsx)("p",{children:Object(w.jsx)(k.a,{id:"challenges.fill-complete-message"})}),Object(w.jsx)(C.a,{id:"submit-application",color:"primary",onClick:g,className:t>=100?"":"disabled",successNext:function(){window.location.href="/"},children:Object(w.jsx)(k.a,{id:"challenges.submit-individual-button"})}),Object(w.jsx)(o.b,{className:"mt-4 mb-4"}),Object(w.jsx)(m.a,{outline:!0,onClick:function(){return p(!0)},children:Object(w.jsx)(k.a,{id:"challenges.join-team-button"})}),Object(w.jsx)(x.a,{isOpen:d,toggle:function(){return p(!d)},children:Object(w.jsx)(P,{setOpenModal:p})})]})})})},T=a(214),I=function(e){var t=e.setCompletePercentage,a=e.hackData,s=Object(h.g)(),i=Object(n.useState)(!1),r=Object(c.a)(i,2),l=r[0],j=r[1],d=Object(D.e)();Object(n.useEffect)((function(){l&&t(100)}),[l]);var O=function(){var e=Object(u.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l){e.next=9;break}return e.next=3,Object(S.a)({method:"POST",url:"/addparticipant",data:{user_id:d.user_id,hackathon_id:a.hackathon.id,status:"0"}});case 3:if(t=e.sent,!(c=t.data).success){e.next=8;break}return s.push("".concat(z.b,"/challenges/").concat(a.hackathon.id)),e.abrupt("return",new Promise((function(e){e("Hackathon applied successfully!")})));case 8:return e.abrupt("return",new Promise((function(e,t){t(c.message)})));case 9:return e.abrupt("return",new Promise((function(e,t){t("Please accept terms and conditions!")})));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"wizard-basic-step m-4 pt-4",children:[Object(w.jsx)("h6",{className:"lead",children:Object(w.jsx)(k.a,{id:"challenges.terms-and-conditions-title"})}),Object(w.jsx)("p",{children:Object(w.jsx)(k.a,{id:"challenges.terms-and-conditions-text"})}),Object(w.jsx)(T.a,{type:"checkbox",label:Object(w.jsx)(k.a,{id:"challenges.terms-and-conditions"}),checked:l,onClick:function(){return j(!l)}}),Object(w.jsx)(o.a,{xxs:"12",className:"text-center my-4",children:Object(w.jsx)(C.a,{id:"step-one-button",color:"primary",onClick:O,children:Object(w.jsx)(k.a,{id:"forms.submit"})})})]})},E=a(29),M=a(211),U=a(215),Y=a(154),A=a(250),q=a.n(A),J=a(122),V=a(196),B=Object(E.b)((function(e){var t=e.history,a=e.authUser;return{currentUser:a.currentUser,profileData:a.profileData,history:t}}),{})((function(e){var t=e.hackData,a=e.currentUser,s=e.setChange,j=e.setCompletePercentage,d=t.hackathon,h=a.email,m=Object(D.e)();console.log(h);var x=m.id,f=m.user_id,g=Object(n.useState)(!1),N=Object(c.a)(g,2),P=N[0],F=N[1],I=Object(n.useState)(!1),E=Object(c.a)(I,2),A=E[0],B=E[1],H=Object(n.useState)(!1),R=Object(c.a)(H,2),G=R[0],W=R[1],K=Object(n.useState)({full_name:m.full_name,gender:m.gender,tshirt_size:m.tshirt_size,contact_no:m.contact_no,bio:m.bio,degree_type:m.degree_type,education_institution:m.education_institution,field_of_study:m.field_of_study,month_of_graduation:m.month_of_graduation||(new Date).getMonth(),year_of_graduation:m.year_of_graduation||(new Date).getFullYear(),employer:m.employer,role:m.role,joining_data:m.joining_data,leaving_data:m.leaving_data,job_description:m.job_description,facebook:m.facebook,github:m.github,linkedin:m.linkedin,instagram:m.instagram,city:m.city}),L=Object(c.a)(K,2),Q=L[0],X=L[1],Z=Object(n.useState)(new Date(Q.year_of_graduation,Q.month_of_graduation)),$=Object(c.a)(Z,2),ee=$[0],te=$[1],ae=function(e,t){X(Object(p.a)(Object(p.a)({},Q),{},{[t]:e.target.value}))},ce=function(){var e=Object(u.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.full_name&&null!==t.gender&&null!==t.tshirt_size&&null!==t.contact_no&&null!==t.bio&&null!==t.linkedin&&null!==t.city){e.next=4;break}J.b.error("Please enter all the information!","Hackathon Operation Error",3e3,null,null,""),e.next=13;break;case 4:return e.next=6,Object(S.a)({method:"POST",url:"/updateProfile",data:Object(p.a)({user_id:f,id:x},t)});case 6:if(a=e.sent,!a.data.success){e.next=13;break}return Object(D.l)(Object(p.a)(Object(p.a)({},m),t)),j(75),s(2),e.abrupt("return",new Promise((function(e){e("Profile updated successfully!")})));case 13:return e.abrupt("return",new Promise((function(e,t){t("Failed to update profile!")})));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"wizard-basic-step m-4 pt-4",children:[Object(w.jsx)(r.a,{className:"mb-4",color:"secondary",children:Object(w.jsx)(l.a,{children:Object(w.jsx)(O.a,{className:"d-flex justify-content-between",children:Object(w.jsx)(k.a,{id:"challenges.step-1"})})})}),Object(w.jsx)("h2",{className:"lead",children:d.name}),Object(w.jsx)("p",{children:Object(w.jsx)(k.a,{id:"challenges.sub-title"})}),Object(w.jsx)(o.b,{className:"mb-2"}),Object(w.jsx)(i.a,{className:"justify-content-center",children:Object(w.jsx)(o.a,{xxs:"12",md:"12",children:Object(w.jsx)(r.a,{className:"mb-4",children:Object(w.jsxs)(l.a,{children:[Object(w.jsx)(O.a,{children:Object(w.jsx)("h2",{className:"lead",children:Object(w.jsx)(k.a,{id:"Update your all details"})})}),Object(w.jsx)(o.b,{className:"mb-3"}),Object(w.jsxs)(y.a,{className:"mb-3",children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"forms.full-name"})}),Object(w.jsx)(_.a,{type:"text",name:"full-name",value:Q.full_name,onChange:function(e){ae(e,"full_name")}})]}),Object(w.jsxs)(y.a,{className:"mb-3",children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"forms.email"})}),Object(w.jsx)(_.a,{type:"text",name:"email",value:h,disabled:!0})]}),Object(w.jsxs)(y.a,{className:"mb-3",children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"forms.phone"})}),Object(w.jsx)(_.a,{type:"text",name:"phone",value:Q.contact_no,onChange:function(e){ae(e,"contact_no")}})]}),Object(w.jsxs)(y.a,{className:"mb-3",children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"forms.gender"})}),Object(w.jsx)(Y.a,{components:{Input:V.a},className:"react-select",classNamePrefix:"react-select",name:"select-gender",defaultInputValue:Q.gender,onChange:function(e){X(Object(p.a)(Object(p.a)({},Q),{},{gender:e.value}))},options:z.i})]}),Object(w.jsxs)(y.a,{className:"mb-3",children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"forms.t-shirt-size"})}),Object(w.jsx)(Y.a,{components:{Input:V.a},className:"react-select",classNamePrefix:"react-select",name:"select-t-shirt-size",defaultInputValue:Q.tshirt_size,onChange:function(e){X(Object(p.a)(Object(p.a)({},Q),{},{tshirt_size:e.value}))},options:z.r})]}),Object(w.jsxs)(y.a,{className:"mb-3",children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"forms.bio"})}),Object(w.jsx)(_.a,{type:"textarea",name:"bio",rows:"6",placeholder:"About Yourself",value:Q.bio,onChange:function(e){ae(e,"bio")}})]}),Object(w.jsx)(y.a,{children:Object(w.jsx)(T.a,{type:"checkbox",id:"formal-education",checked:P,onChange:function(){F(!P),P&&X(Object(p.a)(Object(p.a)({},Q),{},{degree_type:"",education_institution:""}))},label:"I don't have Formal Education."})}),Object(w.jsxs)(y.a,{className:"mb-3",children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"forms.degree-type"})}),Object(w.jsx)(_.a,{type:"text",name:"degree-type",placeholder:"e.g. B. Tech in Computer Science",value:Q.degree_type,onChange:function(e){ae(e,"degree_type")},disabled:P})]}),Object(w.jsxs)(y.a,{className:"mb-5",children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"forms.select-institution"})}),Object(w.jsx)(_.a,{type:"text",name:"select-institution",placeholder:"e.g Vellore Institute of Technology",value:Q.education_institution,onChange:function(e){ae(e,"education_institution")},disabled:P})]}),Object(w.jsx)(o.b,{className:"mt-2 mb-2"}),Object(w.jsx)(y.a,{children:Object(w.jsx)(T.a,{type:"checkbox",id:"curently-study-here",checked:A,onChange:function(){B(!A),A&&X(Object(p.a)(Object(p.a)({},Q),{},{month_of_graduation:"",year_of_graduation:""}))},label:"I currently study here."})}),Object(w.jsxs)(y.a,{className:"mb-3",children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"forms.field-of-study"})}),Object(w.jsx)(_.a,{type:"text",name:"field-of-study",placeholder:"e.g. Software Engineering",value:Q.field_of_study,onChange:function(e){ae(e,"field_of_study")},disabled:A})]}),Object(w.jsxs)(i.a,{children:[Object(w.jsx)(o.a,{children:Object(w.jsxs)(y.a,{className:"mb-3",children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"forms.month-of-graduation"})}),A?Object(w.jsx)(_.a,{type:"text",name:"month",placeholder:"e.g. ".concat((new Date).getMonth()),value:Q.month_of_graduation,disabled:A}):Object(w.jsx)(q.a,{selected:ee,onChange:function(e){te(e);var t,a={target:{value:(t=e.getMonth()+1,t<10?"0".concat(t):t)}};ae(a,"month_of_graduation")},dateFormat:"MM",showMonthYearPicker:!0})]})}),Object(w.jsx)(o.a,{children:Object(w.jsxs)(y.a,{className:"mb-3",children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"forms.year-of-graduation"})}),A?Object(w.jsx)(_.a,{type:"text",name:"year",placeholder:"e.g. ".concat((new Date).getFullYear()),value:Q.year_of_graduation,disabled:A}):Object(w.jsx)(q.a,{selected:ee,onChange:function(e){te(e);var t={target:{value:JSON.stringify(e.getFullYear())}};ae(t,"year_of_graduation")},showYearPicker:!0,dateFormat:"yyyy"})]})})]}),Object(w.jsx)(y.a,{children:Object(w.jsx)(T.a,{type:"checkbox",id:"formal-education",label:"I am yet to find opportunity.",checked:G,onChange:function(){return W(!G)}})}),Object(w.jsxs)(i.a,{children:[Object(w.jsx)(o.a,{md:"6",children:Object(w.jsxs)(y.a,{className:"mb-3",children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"forms.employer"})}),Object(w.jsx)(_.a,{type:"text",name:"employer",placeholder:"employer",value:Q.employer,onChange:function(e){ae(e,"employer")},disabled:G})]})}),Object(w.jsx)(o.a,{md:"6",children:Object(w.jsxs)(y.a,{className:"mb-3",children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"forms.role"})}),Object(w.jsx)(_.a,{type:"text",name:"role",placeholder:"Role",value:Q.role,onChange:function(e){ae(e,"role")},disabled:G})]})})]}),Object(w.jsxs)(i.a,{children:[Object(w.jsx)(o.a,{md:"6",children:Object(w.jsxs)(y.a,{className:"mb-3",children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"forms.from"})}),Object(w.jsx)(_.a,{type:"text",name:"joining_data",placeholder:"2021",value:Q.joining_data,onChange:function(e){ae(e,"joining_data")},disabled:G})]})}),Object(w.jsx)(o.a,{md:"6",children:Object(w.jsxs)(y.a,{className:"mb-3",children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"forms.to"})}),Object(w.jsx)(_.a,{type:"text",name:"leaving_data",placeholder:"04",value:Q.leaving_data,onChange:function(e){ae(e,"leaving_data")},disabled:G})]})})]}),Object(w.jsxs)(y.a,{className:"mb-3",children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"forms.description"})}),Object(w.jsx)(_.a,{type:"textarea",name:"job_description",placeholder:"Desribe your work experience",value:Q.job_description,onChange:function(e){ae(e,"job_description")},rows:"6",disabled:G})]}),Object(w.jsx)(y.a,{className:"mb-6",children:Object(w.jsxs)(M.a,{children:[Object(w.jsx)(U.a,{addonType:"prepend",children:Object(w.jsx)("i",{className:"simple-icon-social-linkedin btn"})}),Object(w.jsx)(_.a,{type:"text",className:"form-control",name:"linkedin",value:Q.linkedin,onChange:function(e){ae(e,"linkedin")}})]})}),Object(w.jsx)(y.a,{className:"mb-6",children:Object(w.jsxs)(M.a,{children:[Object(w.jsx)(U.a,{addonType:"prepend",children:Object(w.jsx)("i",{className:"simple-icon-social-facebook btn"})}),Object(w.jsx)(_.a,{type:"text",name:"facebook",value:Q.facebook,onChange:function(e){ae(e,"facebook")}})]})}),Object(w.jsx)(y.a,{className:"mb-6",children:Object(w.jsxs)(M.a,{children:[Object(w.jsx)(U.a,{addonType:"prepend",children:Object(w.jsx)("i",{className:"simple-icon-social-github btn"})}),Object(w.jsx)(_.a,{type:"text",name:"github",className:"form-control",value:Q.github,onChange:function(e){ae(e,"github")}})]})}),Object(w.jsx)(y.a,{className:"mb-6",children:Object(w.jsxs)(M.a,{children:[Object(w.jsx)(U.a,{addonType:"prepend",children:Object(w.jsx)("i",{className:"simple-icon-social-instagram btn"})}),Object(w.jsx)(_.a,{type:"text",name:"github",className:"form-control",value:Q.instagram,onChange:function(e){ae(e,"instagram")}})]})}),Object(w.jsxs)(y.a,{className:"mb-3",children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"forms.email"})}),Object(w.jsx)(_.a,{type:"text",name:"email",value:h,disabled:!0,title:"Can't update Email"})]}),Object(w.jsx)(o.b,{className:"mb-4"}),Object(w.jsxs)(y.a,{className:"mb-3",children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"forms.phone"})}),Object(w.jsx)(_.a,{type:"text",name:"contact-number",value:Q.contact_no,onChange:function(e){ae(e,"contact_no")}})]}),Object(w.jsxs)(y.a,{className:"mb-3",children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(k.a,{id:"forms.city"})}),Object(w.jsx)(_.a,{type:"text",name:"city",placeholder:"e.g. Delhi",value:Q.city,onChange:function(e){ae(e,"city")}})]}),Object(w.jsx)(y.a,{className:"text-center",children:Object(w.jsx)(C.a,{id:"submitAndNextButton",color:"primary",onClick:function(){return ce(Q)},children:Object(w.jsx)(k.a,{id:"forms.submit"})})})]})})})})]})}));t.default=function(e){var t=e.match.params.id,a=Object(n.useState)(1),d=Object(c.a)(a,2),b=d[0],u=d[1],h=Object(n.useState)(0),O=Object(c.a)(h,2),m=O[0],x=O[1];console.log(m);var p=Object(j.a)("/getdetails/".concat(t),!1,"getdetails"),f=p.data;return p.loading?Object(w.jsx)("div",{className:"loading"}):Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(i.a,{children:[Object(w.jsx)(o.a,{xs:"12",md:"8",className:"mb-4",children:Object(w.jsx)(r.a,{children:Object(w.jsx)(l.a,{className:"wizard wizard-default ",children:Object(w.jsxs)(s.Wizard,{children:[1===b&&Object(w.jsx)(B,{hackData:f,setChange:u,setCompletePercentage:x}),2===b&&Object(w.jsx)(I,{hackData:f,setCompletePercentage:x})]})})})}),Object(w.jsx)(o.a,{xs:"12",md:"4",children:Object(w.jsx)(F,{completePercentage:m,id:t})})]})})}}}]);
//# sourceMappingURL=36.260ce51b.chunk.js.map