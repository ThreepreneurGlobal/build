(this["webpackJsonpsmartnative-frontend"]=this["webpackJsonpsmartnative-frontend"]||[]).push([[5],{288:function(e,s,a){"use strict";a.r(s);var t=a(128),r=a(8),c=a(192),l=a(258),i=a(259),o=a(267),n=a(268),j=a(173),b=a(120),d=a(138),m=a(35),u=a(124),h=a(122),x=a(2),O=a(140),f=a(25),p=function(e){var s;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(s="Invalid email address"):s="Please enter your email address",s};s.default=Object(m.b)((function(e){var s=e.authUser;return{forgotUserMail:s.forgotUserMail,loading:s.loading,error:s.error}}),{forgotPasswordAction:x.ib})((function(e){var s=e.history,a=e.forgotUserMail,m=e.loading,x=e.error,N=e.forgotPasswordAction,g=Object(r.useState)(""),w=Object(t.a)(g,1)[0];Object(r.useEffect)((function(){x?O.b.warning(x,"Forgot Password Error",3e3,null,null,""):m||"success"!==a||O.b.success("Please check your email.","Forgot Password Success",3e3,null,null,"")}),[x,a,m]);var v={email:w};return Object(f.jsx)(c.a,{className:"h-100",children:Object(f.jsx)(u.a,{xxs:"12",md:"10",className:"mx-auto my-auto",children:Object(f.jsxs)(l.a,{className:"auth-card",children:[Object(f.jsxs)("div",{className:"position-relative image-side ",children:[Object(f.jsx)("p",{className:"text-white h2",children:"MAGIC IS IN THE DETAILS"}),Object(f.jsxs)("p",{className:"white mb-0",children:["Please use your e-mail to reset your password. ",Object(f.jsx)("br",{}),"If you are not a member, please"," ",Object(f.jsx)(b.b,{to:"/user/register",className:"white",children:"register"}),"."]})]}),Object(f.jsxs)("div",{className:"form-side",children:[Object(f.jsx)(b.b,{to:"/",className:"white",children:Object(f.jsx)("span",{className:"logo-single"})}),Object(f.jsx)(i.a,{className:"mb-4",children:Object(f.jsx)(h.a,{id:"user.forgot-password"})}),Object(f.jsx)(d.c,{initialValues:v,onSubmit:function(e){m||""!==e.email&&N(e,s)},children:function(e){var s=e.errors,a=e.touched;return Object(f.jsxs)(d.b,{className:"av-tooltip tooltip-label-bottom",children:[Object(f.jsxs)(o.a,{className:"form-group has-float-label",children:[Object(f.jsx)(n.a,{children:Object(f.jsx)(h.a,{id:"user.email"})}),Object(f.jsx)(d.a,{className:"form-control",name:"email",validate:p}),s.email&&a.email&&Object(f.jsx)("div",{className:"invalid-feedback d-block",children:s.email})]}),Object(f.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(f.jsx)(b.b,{to:"/user/forgot-password",children:Object(f.jsx)(h.a,{id:"user.forgot-password-question"})}),Object(f.jsxs)(j.a,{color:"primary",className:"btn-shadow btn-multiple-state ".concat(m?"show-spinner":""),size:"lg",children:[Object(f.jsxs)("span",{className:"spinner d-inline-block",children:[Object(f.jsx)("span",{className:"bounce1"}),Object(f.jsx)("span",{className:"bounce2"}),Object(f.jsx)("span",{className:"bounce3"})]}),Object(f.jsx)("span",{className:"label",children:Object(f.jsx)(h.a,{id:"user.reset-password-button"})})]})]})]})}})]})]})})})}))}}]);
//# sourceMappingURL=user-forgot-password.511313a6.chunk.js.map