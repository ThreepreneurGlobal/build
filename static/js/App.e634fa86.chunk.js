(this["webpackJsonpsmartnative-frontend"]=this["webpackJsonpsmartnative-frontend"]||[]).push([[2],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return R}));var r=n(130),a=n(131),s=n(138),o=n(137),i=n(6),c=n.n(i),u=n(407),l=n(400),d=n(108),m=n.n(d),h=n(20),b=function(e){var t=e.title,n=e.type,r=e.message,a=e.customClassName,s=e.timeOut,o=e.onClick,c=e.onRequestHide,u=function(){c&&c()};Object(i.useEffect)((function(){var e=null;return 0!==s&&(e=setTimeout(u,s)),function(){e&&clearTimeout(e)}}),[]);var l=function(){o&&o(),u()},d=m()(["notification","notification-".concat(n),a]),b=t?Object(h.jsx)("h4",{className:"title",children:t}):null;return Object(h.jsx)("div",{className:d,onClick:function(){return l()},children:Object(h.jsxs)("div",{className:"notification-message",role:"alert",children:[b,Object(h.jsx)("div",{className:"message",children:r})]})})};b.defaultProps={type:"info",title:null,message:null,timeOut:5e3,onClick:function(){},onRequestHide:function(){},customClassName:""};var f=b,j=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).handleRequestHide=function(t){return function(){var n=e.props.onRequestHide;n&&n(t)}},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.notifications,r=t.enterTimeout,a=t.leaveTimeout,s=m()("notification-container",{"notification-container-empty":0===n.length});return Object(h.jsx)("div",{className:s,children:Object(h.jsx)(u.a,{children:n.map((function(t){var n=t.id||(new Date).getTime();return Object(h.jsx)(l.a,{classNames:"notification",timeout:{exit:a,enter:r},children:Object(h.jsx)(f,{type:t.type,title:t.title,message:t.message,timeOut:t.timeOut,onClick:t.onClick,onRequestHide:e.handleRequestHide(t),customClassName:t.customClassName},n)},n)}))})})}}]),n}(c.a.Component);j.defaultProps={notifications:[],onRequestHide:function(){},enterTimeout:400,leaveTimeout:400};var p=j,O=n(240),g="change",v="primary",x="secondary",y="info",k="success",C="warning",N="error",R=new(function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).listNotify=[],e}return Object(a.a)(n,[{key:"create",value:function(e){var t={id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),type:"info",title:null,message:null,timeOut:5e3,customClassName:""};e.priority?this.listNotify.unshift(Object.assign(t,e)):this.listNotify.push(Object.assign(t,e)),this.emitChange()}},{key:"primary",value:function(e,t,n,r,a,s){this.create({type:v,message:e,title:t,timeOut:n,onClick:r,priority:a,customClassName:s})}},{key:"secondary",value:function(e,t,n,r,a,s){this.create({type:x,message:e,title:t,timeOut:n,onClick:r,priority:a,customClassName:s})}},{key:"info",value:function(e,t,n,r,a,s){this.create({type:y,message:e,title:t,timeOut:n,onClick:r,priority:a,customClassName:s})}},{key:"success",value:function(e,t,n,r,a,s){this.create({type:k,message:e,title:t,timeOut:n,onClick:r,priority:a,customClassName:s})}},{key:"warning",value:function(e,t,n,r,a,s){this.create({type:C,message:e,title:t,timeOut:n,onClick:r,priority:a,customClassName:s})}},{key:"error",value:function(e,t,n,r,a,s){this.create({type:N,message:e,title:t,timeOut:n,onClick:r,priority:a,customClassName:s})}},{key:"remove",value:function(e){this.listNotify=this.listNotify.filter((function(t){return e.id!==t.id})),this.emitChange()}},{key:"emitChange",value:function(){this.emit(g,this.listNotify)}},{key:"addChangeListener",value:function(e){this.addListener(g,e)}},{key:"removeChangeListener",value:function(e){this.removeListener(g,e)}}]),n}(O.EventEmitter)),w=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).componentWillUnmount=function(){R.removeChangeListener(a.handleStoreChange)},a.handleStoreChange=function(e){a.setState({notifications:e})},a.handleRequestHide=function(e){R.remove(e)},R.addChangeListener(a.handleStoreChange),a.state={notifications:[]},a}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state.notifications,t=this.props,n=t.enterTimeout,r=t.leaveTimeout;return Object(h.jsx)(p,{enterTimeout:n,leaveTimeout:r,notifications:e,onRequestHide:this.handleRequestHide})}}]),n}(c.a.Component);w.defaultProps={enterTimeout:400,leaveTimeout:400};var E=w},171:function(e,t){e.exports={"general.copyright":"Smart Natives \xa9 2021 All Rights Reserved.","unauthorized.title":"Unauthorized Access Attempt","unauthorized.detail":"You are not authorized to view the page you are trying to access.","user.login-title":"Login","user.register":"Register","user.forgot-password":"Forgot Password","user.reset-password":"Reset Password","user.verify-otp":"Enter OTP","user.otp":"OTP","user.email":"E-mail","user.password":"Password","user.phone-number":"Phone Number","user.forgot-password-question":"Forget password?","user.fullname":"Full Name","user.fullname-desc":"Please Enter your Full Name","user.rank-skills":"Rank your top 5 tech skills!","user.rank-skills-desc":"You can update or edit your skills!","user.login-button":"LOGIN","user.register-button":"REGISTER","user.next-button":"NEXT","user.previous-button":"PREVIOUS","user.verify-otp-button":"VERIFY OTP","user.reset-password-button":"RESET","user.buy":"BUY","user.username":"Username","menu.home":"Home","menu.app":"Home","menu.dashboards":"Dashboards","menu.gogo":"Home","menu.start":"Start","menu.profile":"Profile","menu.second":"Second","menu.ui":"UI","menu.charts":"Charts","menu.chat":"Chat","menu.survey":"Survey","menu.todo":"Todo","menu.search":"Search","menu.docs":"Docs","menu.blank-page":"Blank Page","menu.view":"View","menu.create":"Create","pages.error-title":"Ooops... looks like an error occurred!","pages.error-code":"Error code","pages.go-back-home":"GO BACK HOME"}},238:function(e,t){e.exports={"general.copyright":"Gogo React \xa9 Todos los derechos reservados.","unauthorized.title":"Unauthorized Access Attempt","unauthorized.detail":"You are not authorized to view the page you are trying to access.","user.login-title":"Iniciar sesi\xf3n","user.register":"Registro","user.forgot-password":"Se te olvid\xf3 tu contrase\xf1a","user.email":"Email","user.password":"Contrase\xf1a","user.forgot-password-question":"\xbfContrase\xf1a olvidada?","user.fullname":"Nombre completo","user.login-button":"INICIAR SESI\xd3N","user.register-button":"REGISTRO","user.reset-password-button":"REINICIAR","user.buy":"COMPRAR","user.username":"Nombre de Usuario","menu.home":"Inicio","menu.app":"Inicio","menu.dashboards":"Tableros","menu.gogo":"Gogo","menu.start":"Comienzo","menu.second-menu":"Segundo men\xfa","menu.second":"Segundo","menu.ui":"IU","menu.charts":"Gr\xe1ficos","menu.chat":"Chatea","menu.survey":"Encuesta","menu.todo":"Notas","menu.search":"B\xfasqueda","menu.docs":"Docs","menu.blank-page":"Blank Page","layouts.error-title":"Vaya, parece que ha ocurrido un error!","layouts.error-code":"C\xf3digo de error","layouts.go-back-home":"REGRESAR A INICIO"}},239:function(e,t){e.exports={"general.copyright":"Smart Natives \xa9 2021Alle Rechte vorbehalten.","unauthorized.title":"Nicht autorisierter Zugriffsversuch","unauthorized.detail":"Sie sind nicht berechtigt, die Seite anzuzeigen, auf die Sie zugreifen m\xf6chten.","user.login-title":"Anmeldung","user.register":"Registrieren","user.forgot-password":"Passwort vergessen","user.reset-password":"Passwort zur\xfccksetzen","user.verify-otp":"OTP eingeben","user.otp":"OTP","user.email":"E-Mail","user.password":"Passwort","user.phone-number":"Phone Number","user.forgot-password-question":"Passwort vergessen?","user.fullname":"Vollst\xe4ndiger Name","user.login-button":"LOGIN","user.register-button":"REGISTER","user.reset-password-button":"RESET","user.verify-otp-button":"OTP \xdcBERPR\xdcFEN","user.buy":"KAUFEN","user.username":"Username","menu.home":"Home","menu.app":"Home","menu.dashboards":"Dashboards","menu.gogo":"Home","menu.start":"Start","menu.profile":"Profile","menu.second":"Second","menu.ui":"UI","menu.charts":"Charts","menu.chat":"Chat","menu.survey":"Umfrage","menu.todo":"Todo","menu.search":"Suche","menu.docs":"Docs","menu.blank-page":"Leere Seite","pages.error-title":"Ups ... sieht aus, als w\xe4re ein Fehler aufgetreten!","pages.error-code":"Fehlercode","pages.go-back-home":"GEHE ZUR\xdcCK NACH HAUSE"}},398:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(130),s=n(131),o=n(138),i=n(137),c=n(6),u=n.n(c),l=n(28),d=n(116),m=n(117),h=n(399),b=n(233),f=(n(234),n(236),n(8));b.a.initializeApp(f.j);b.a.auth(),b.a.database();var j=n(171),p=n.n(j),O={messages:Object(r.a)({},p.a),locale:"en-US"},g=n(238),v=n.n(g),x={messages:Object(r.a)({},v.a),locale:"es-ES"},y={messages:Object(r.a)({},p.a),locale:"en-US"},k=n(239),C=n.n(k),N={en:O,es:x,enrtl:y,de:{messages:Object(r.a)({},C.a),locale:"de-DE"}},R=n(121),w=n(372),E=n(373),S=n(405),T=n(10),P=n(20),z=function(){var e=Object(c.useRef)(),t=Object(c.useState)(!1),n=Object(R.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(Object(T.a)()),o=Object(R.a)(s,1)[0],i=Object(c.useState)(Object(T.c)()),u=Object(R.a)(i,2),l=u[0],d=u[1];Object(c.useEffect)((function(){"flat"===l?document.body.classList.remove("rounded"):document.body.classList.add("rounded"),Object(T.j)(l),r&&a(!1)}),[l]);var m=function(t){if(r){var n=e.current;if(n.contains(t.target)||n===t.target)return;a(!1)}};Object(c.useEffect)((function(){return["click","touchstart"].forEach((function(e){return document.addEventListener(e,m,!1)})),function(){["click","touchstart"].forEach((function(e){return document.removeEventListener(e,m,!1)}))}}),[r]);var h=function(e,t){e.preventDefault(),Object(T.h)(t),a(!1),setTimeout((function(){window.location.reload()}),500)};return Object(P.jsxs)("div",{ref:e,className:"theme-colors ".concat(r?"shown":""),children:[Object(P.jsxs)("div",{className:"p-4",children:[Object(P.jsx)("p",{className:"text-muted mb-2",children:"Light Theme"}),Object(P.jsx)("div",{className:"d-flex flex-row justify-content-between mb-3",children:f.d.slice(0,5).map((function(e){return Object(P.jsx)("a",{href:"#light.".concat(e),className:"theme-color theme-color-".concat(e," ").concat(o==="light.".concat(e)?"active":""),onClick:function(t){return h(t,"light.".concat(e))},children:Object(P.jsx)("span",{children:" "})},"light.".concat(e))}))}),Object(P.jsx)("div",{className:"d-flex flex-row justify-content-between mb-4",children:f.d.slice(5,10).map((function(e){return Object(P.jsx)("a",{href:"#light.".concat(e),className:"theme-color theme-color-".concat(e," ").concat(o==="light.".concat(e)?"active":""),onClick:function(t){return h(t,"light.".concat(e))},children:Object(P.jsx)("span",{children:" "})},"light.".concat(e))}))}),Object(P.jsx)("p",{className:"text-muted mb-2",children:"Dark Theme"}),Object(P.jsx)("div",{className:"d-flex flex-row justify-content-between mb-3",children:f.d.slice(0,5).map((function(e){return Object(P.jsx)("a",{href:"#dark.".concat(e),className:"theme-color theme-color-".concat(e," ").concat(o==="dark.".concat(e)?"active":""),onClick:function(t){return h(t,"dark.".concat(e))},children:Object(P.jsx)("span",{children:" "})},"dark.".concat(e))}))}),Object(P.jsx)("div",{className:"d-flex flex-row justify-content-between",children:f.d.slice(5,10).map((function(e){return Object(P.jsx)("a",{href:"#dark.".concat(e),className:"theme-color theme-color-".concat(e," ").concat(o==="dark.".concat(e)?"active":""),onClick:function(t){return h(t,"dark.".concat(e))},children:Object(P.jsx)("span",{children:" "})},"dark.".concat(e))}))})]}),Object(P.jsx)("div",{className:" pb-0 pl-4 pt-4",children:Object(P.jsxs)(w.a,{children:[Object(P.jsx)(E.a,{for:"radiusRadio",children:"Border Radius "}),Object(P.jsxs)("div",{children:[Object(P.jsx)(S.a,{type:"radio",name:"radiusRadio",id:"rounded",label:"Rounded",inline:!0,defaultChecked:"rounded"===l,onChange:function(){return d("rounded")}}),Object(P.jsx)(S.a,{type:"radio",name:"radiusRadio",id:"flat",label:"Flat",inline:!0,defaultChecked:"flat"===l,onChange:function(){return d("flat")}})]})]})}),Object(P.jsxs)("a",{href:"#section",className:"theme-button",onClick:function(e){e.preventDefault(),a(!r)},children:[" ",Object(P.jsx)("i",{className:"simple-icon-magic-wand"})," "]})]})},I=n(129),U=n(370),A=function(e){var t=e.component,n=e.roles,a=void 0===n?void 0:n,s=Object(U.a)(e,["component","roles"]);return Object(P.jsx)(m.b,Object(r.a)(Object(r.a)({},s),{},{render:function(e){if(f.k){var n=Object(T.e)();return n?a?a.includes(n.role)?Object(P.jsx)(t,Object(r.a)({},e)):Object(P.jsx)(m.a,{to:{pathname:"/unauthorized",state:{from:e.location}}}):Object(P.jsx)(t,Object(r.a)({},e)):Object(P.jsx)(m.a,{to:{pathname:"/user/login",state:{from:e.location}}})}return Object(P.jsx)(t,Object(r.a)({},e))}}))},H=u.a.lazy((function(){return Promise.all([n.e(1),n.e(19),n.e(10)]).then(n.bind(null,397))})),L=u.a.lazy((function(){return n.e(13).then(n.bind(null,404))})),q=u.a.lazy((function(){return n.e(11).then(n.bind(null,385))})),D=u.a.lazy((function(){return n.e(11).then(n.bind(null,386))})),F=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),r=t.call(this,e),Object(T.g)().isRtl?(document.body.classList.add("rtl"),document.body.classList.remove("ltr")):(document.body.classList.add("ltr"),document.body.classList.remove("rtl")),r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){document.body.classList.add("rounded")}},{key:"render",value:function(){var e=this.props.locale,t=N[e];return Object(P.jsx)("div",{className:"h-100",children:Object(P.jsx)(h.a,{locale:t.locale,messages:t.messages,children:Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(I.a,{}),f.m&&Object(P.jsx)(z,{}),Object(P.jsx)(c.Suspense,{fallback:Object(P.jsx)("div",{className:"loading"}),children:Object(P.jsx)(d.a,{children:Object(P.jsxs)(m.d,{children:[Object(P.jsx)(m.a,{exact:!0,from:"/",to:f.b}),Object(P.jsx)(A,{path:f.b,component:H,roles:[f.a.Admin,f.a.User,f.a.SuperAdmin]}),Object(P.jsx)(m.b,{path:"/user",render:function(e){return Object(P.jsx)(L,Object(r.a)({},e))}}),Object(P.jsx)(m.b,{path:"/error",exact:!0,render:function(e){return Object(P.jsx)(q,Object(r.a)({},e))}}),Object(P.jsx)(m.b,{path:"/unauthorized",exact:!0,render:function(e){return Object(P.jsx)(D,Object(r.a)({},e))}}),Object(P.jsx)(m.a,{to:"/error"})]})})})]})})})}}]),n}(u.a.Component);t.default=Object(l.b)((function(e){var t=e.authUser,n=e.settings;return{currentUser:t.currentUser,locale:n.locale}}),{})(F)}}]);
//# sourceMappingURL=App.e634fa86.chunk.js.map