(this["webpackJsonpsmartnative-user-frontend"]=this["webpackJsonpsmartnative-user-frontend"]||[]).push([[14],{101:function(e,t,n){"use strict";var s=n(2),c=(n(5),n(177)),a=n(131),i=n(17);t.a=Object(a.c)((function(e){return Object(i.jsx)(c.a,Object(s.a)({},e))}),{withRef:!1})},102:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var s=n(2),c=(n(5),n(163)),a=n(17),i=function(e){return Object(a.jsx)(c.a,Object(s.a)(Object(s.a)({},e),{},{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},l=function(e){var t=e.className;return Object(a.jsx)("div",{className:"separator ".concat(t)})}},412:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n(5),a=n.n(c),i=n(108),l=n(24),r=n(105),o=n(131),u=n(396),d=n(418),m=n(393),b=n(394),j=n(397),h=n(104),p=n(1),O=n(7),x=n(17),f=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("svg",{className:"main",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 9 17",children:[Object(x.jsx)("rect",{x:"0.48",y:"0.5",width:"7",height:"1"}),Object(x.jsx)("rect",{x:"0.48",y:"7.5",width:"7",height:"1"}),Object(x.jsx)("rect",{x:"0.48",y:"15.5",width:"7",height:"1"})]}),Object(x.jsxs)("svg",{className:"sub",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 17",children:[Object(x.jsx)("rect",{x:"1.56",y:"0.5",width:"16",height:"1"}),Object(x.jsx)("rect",{x:"1.56",y:"7.5",width:"16",height:"1"}),Object(x.jsx)("rect",{x:"1.56",y:"15.5",width:"16",height:"1"})]})]})},g=function(){return Object(x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 17",children:[Object(x.jsx)("rect",{x:"0.5",y:"0.5",width:"25",height:"1"}),Object(x.jsx)("rect",{x:"0.5",y:"7.5",width:"25",height:"1"}),Object(x.jsx)("rect",{x:"0.5",y:"15.5",width:"25",height:"1"})]})},v=n(392),w=n(188),k=n.n(w),N=[{img:"/assets/img/profiles/l-2.jpg",title:"Joisse Kaycee just sent a new comment!",date:"09.04.2018 - 12:45",id:1},{img:"/assets/img/notifications/thumb-1.jpg",title:"1 item is out of stock!",date:"09.04.2018 - 12:45",id:2},{img:"/assets/img/notifications/thumb-2.jpg",title:"New order received! It is total $147,20.",date:"09.04.2018 - 12:45",id:3},{img:"/assets/img/notifications/thumb-3.jpg",title:"3 items just added to wish list by a user!",date:"09.04.2018 - 12:45",id:4}],C=function(e){var t=e.img,n=e.title,s=e.date;return Object(x.jsxs)("div",{className:"d-flex flex-row mb-3 pb-3 border-bottom",children:[Object(x.jsx)(v.a,{to:"".concat(O.b,"/pages/product/details"),children:Object(x.jsx)("img",{src:t,alt:n,className:"img-thumbnail list-thumbnail xsmall border-0 rounded-circle"})}),Object(x.jsx)("div",{className:"pl-3 pr-2",children:Object(x.jsxs)(v.a,{to:"".concat(O.b,"/pages/product/details"),children:[Object(x.jsx)("p",{className:"font-weight-medium mb-1",children:n}),Object(x.jsx)("p",{className:"text-muted mb-0 text-small",children:s})]})})]})},S=function(){return Object(x.jsx)("div",{className:"position-relative d-inline-block",children:Object(x.jsxs)(d.a,{className:"dropdown-menu-right",children:[Object(x.jsxs)(m.a,{className:"header-icon notificationButton",color:"empty",children:[Object(x.jsx)("i",{className:"simple-icon-bell"}),Object(x.jsx)("span",{className:"count",children:"3"})]}),Object(x.jsx)(b.a,{className:"position-absolute mt-3 scroll",right:!0,id:"notificationDropdown",children:Object(x.jsx)(k.a,{options:{suppressScrollX:!0,wheelPropagation:!1},children:N.map((function(e,t){return Object(x.jsx)(C,Object(s.a)({},e),t)}))})})]})})},E=n(380),M=(n(276),n(395)),y=n(10),L=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),i=Object(r.a)(a,2),l=i[0],o=i[1];Object(c.useEffect)((function(){var e=Object(y.a)();s(e.indexOf("dark")>-1)}),[]);return Object(x.jsxs)("div",{className:"d-none d-md-inline-block align-middle mr-3",children:[Object(x.jsx)(E.a,{id:"tooltip_switch",className:"custom-switch custom-switch-primary custom-switch-small",checked:n,onChange:function(){var e=Object(y.a)();e.indexOf("dark")>-1?e=e.replace("dark","light"):e.indexOf("light")>-1&&(e=e.replace("light","dark")),Object(y.f)(e),s(e.indexOf("dark")>-1),setTimeout((function(){window.location.reload()}),300)}}),Object(x.jsx)(M.a,{placement:"left",isOpen:l,target:"tooltip_switch",toggle:function(){return o(!l)},children:"Dark Mode"})]})},z=Object(o.c)(Object(l.b)((function(e){var t=e.menu,n=e.settings;return{containerClassnames:t.containerClassnames,menuClickCount:t.menuClickCount,selectedMenuHasSubItems:t.selectedMenuHasSubItems,locale:n.locale}}),{setContainerClassnamesAction:p.N,clickOnMobileMenuAction:p.G,logoutUserAction:p.K,changeLocaleAction:p.E})((function(e){var t=e.intl,n=e.history,s=e.containerClassnames,a=e.menuClickCount,i=e.selectedMenuHasSubItems,l=e.locale,o=e.setContainerClassnamesAction,p=e.clickOnMobileMenuAction,v=e.logoutUserAction,w=e.changeLocaleAction,k=Object(c.useState)(!1),N=Object(r.a)(k,2),C=N[0],E=N[1],M=Object(c.useState)(""),z=Object(r.a)(M,2),F=z[0],P=z[1],H=function(){n.push("".concat(O.p,"?key=").concat(F)),P("")},A=function(e){var t=!1;if(e.target&&e.target.classList&&(e.target.classList.contains("navbar")||e.target.classList.contains("simple-icon-magnifier"))?(t=!0,e.target.classList.contains("simple-icon-magnifier")&&H()):e.target.parentElement&&e.target.parentElement.classList&&e.target.parentElement.classList.contains("search")&&(t=!0),!t){var n=document.querySelector(".mobile-view");n&&n.classList&&n.classList.remove("mobile-view"),I(),P("")}},I=function(){document.removeEventListener("click",A,!0)},D=function(){document.addEventListener("click",A,!0)},U=t.messages;return Object(x.jsxs)("nav",{className:"navbar fixed-top",children:[Object(x.jsxs)("div",{className:"d-flex align-items-center navbar-left",children:[Object(x.jsx)(h.b,{to:"#",location:{},className:"menu-button d-none d-md-block",onClick:function(e){return function(e,t,n){e.preventDefault(),setTimeout((function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!1,!1),window.dispatchEvent(e)}),350),o(t+1,n,i)}(e,a,s)},children:Object(x.jsx)(f,{})}),Object(x.jsx)(h.b,{to:"#",location:{},className:"menu-button-mobile d-xs-block d-sm-block d-md-none",onClick:function(e){return function(e,t){e.preventDefault(),p(t)}(e,s)},children:Object(x.jsx)(g,{})}),Object(x.jsxs)("div",{className:"search",children:[Object(x.jsx)(u.a,{name:"searchKeyword",id:"searchKeyword",placeholder:U["menu.search"],value:F,onChange:function(e){return P(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&H()}(e)}}),Object(x.jsx)("span",{className:"search-icon",onClick:function(e){return function(e){if(window.innerWidth<O.n){var t=e.target;e.target.classList.contains("search")||(e.target.parentElement.classList.contains("search")?t=e.target.parentElement:e.target.parentElement.parentElement.classList.contains("search")&&(t=e.target.parentElement.parentElement)),t.classList.contains("mobile-view")?(H(),t.classList.remove("mobile-view"),I()):(t.classList.add("mobile-view"),D())}else H();e.stopPropagation()}(e)},children:Object(x.jsx)("i",{className:"simple-icon-magnifier"})})]}),Object(x.jsx)("div",{className:"d-inline-block",children:Object(x.jsxs)(d.a,{className:"ml-2",children:[Object(x.jsx)(m.a,{caret:!0,color:"light",size:"sm",className:"language-button",children:Object(x.jsx)("span",{className:"name",children:l.toUpperCase()})}),Object(x.jsx)(b.a,{className:"mt-3",right:!0,children:O.m.map((function(e){return Object(x.jsx)(j.a,{onClick:function(){return t=e.id,n=e.direction,w(t),void(n!==Object(y.d)().direction&&(Object(y.i)(n),setTimeout((function(){window.location.reload()}),500)));var t,n},children:e.name},e.id)}))})]})})]}),Object(x.jsxs)(h.b,{className:"navbar-logo",to:O.b,children:[Object(x.jsx)("span",{className:"logo d-none d-xs-block"}),Object(x.jsx)("span",{className:"logo-mobile d-block d-xs-none"})]}),Object(x.jsxs)("div",{className:"navbar-right",children:[O.k&&Object(x.jsx)(L,{}),Object(x.jsxs)("div",{className:"header-icons d-inline-block align-middle",children:[Object(x.jsx)(S,{}),Object(x.jsx)("button",{className:"header-icon btn btn-empty d-none d-sm-inline-block",type:"button",id:"fullScreenButton",onClick:function(){var e=document.fullscreenElement&&null!==document.fullscreenElement||document.webkitFullscreenElement&&null!==document.webkitFullscreenElement||document.mozFullScreenElement&&null!==document.mozFullScreenElement||document.msFullscreenElement&&null!==document.msFullscreenElement,t=document.documentElement;e?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),E(!e)},children:C?Object(x.jsx)("i",{className:"simple-icon-size-actual d-block"}):Object(x.jsx)("i",{className:"simple-icon-size-fullscreen d-block"})})]}),Object(x.jsx)("div",{className:"user d-inline-block",children:Object(x.jsxs)(d.a,{className:"dropdown-menu-right",children:[Object(x.jsxs)(m.a,{className:"p-0",color:"empty",children:[Object(x.jsx)("span",{className:"name mr-1",children:"Sarah Granger"}),Object(x.jsx)("span",{children:Object(x.jsx)("img",{alt:"Profile",src:"/assets/img/profiles/l-10.jpg"})})]}),Object(x.jsxs)(b.a,{className:"mt-3",right:!0,children:[Object(x.jsx)(j.a,{href:"".concat(O.b,"/profile"),color:"light",children:"Account"}),Object(x.jsx)(j.a,{children:"Support"}),Object(x.jsx)(j.a,{divider:!0}),Object(x.jsx)(j.a,{color:"light",onClick:function(){v(n)},children:"Sign out"})]})]})})]})]})}))),F=n(124),P=n(125),H=n(179),A=n(129),I=n(127),D=n(18),U=n.n(D),q=n(398),R=n(399),B=n(400),_=n(96),W=n.n(_),T=n(101),K=[{id:"dashboard",icon:"iconsminds-full-view-2",label:"menu.dashboard",roles:[O.a.User,O.a.Organization,O.a.Admin],to:"".concat(O.b,"/dashboard")},{id:"profile",icon:"iconsminds-user",label:"menu.profile",roles:[O.a.User,O.a.Organization,O.a.Admin],to:"".concat(O.b,"/profile"),subs:[{icon:"iconsminds-file-edit",label:"menu.about",roles:[O.a.User,O.a.Organization,O.a.Admin],to:"".concat(O.b,"/profile/about")},{icon:"iconsminds-open-book",label:"menu.education",to:"".concat(O.b,"/profile/education")},{icon:"iconsminds-add-file",label:"menu.experience",to:"".concat(O.b,"/profile/experience")},{icon:"simple-icon-link",label:"menu.links",to:"".concat(O.b,"/profile/links")},{icon:"iconsminds-profile",label:"menu.contact",to:"".concat(O.b,"/profile/contact")}]},{id:"challenges",icon:"simple-icon-bulb",label:"menu.challenges",roles:[O.a.User,O.a.Organization,O.a.Admin],to:"".concat(O.b,"/challenges")},{id:"badges",icon:"simple-icon-badge",label:"menu.badges",roles:[O.a.User,O.a.Organization,O.a.Admin],to:"".concat(O.b,"/blank-page")},{id:"project",icon:" iconsminds-book",label:"menu.project",roles:[O.a.User,O.a.Organization,O.a.Admin],to:"".concat(O.b,"/blank-page")}],J=function(e){Object(A.a)(n,e);var t=Object(I.a)(n);function n(e){var s;return Object(F.a)(this,n),(s=t.call(this,e)).handleWindowResize=function(e){if(!e||e.isTrusted){var t=s.props.containerClassnames,n=s.getMenuClassesForResize(t);s.props.setContainerClassnames(0,n.join(" "),s.props.selectedMenuHasSubItems)}},s.handleDocumentClick=function(e){var t=s.getContainer(),n=!1;(e.target&&e.target.classList&&(e.target.classList.contains("menu-button")||e.target.classList.contains("menu-button-mobile"))||e.target.parentElement&&e.target.parentElement.classList&&(e.target.parentElement.classList.contains("menu-button")||e.target.parentElement.classList.contains("menu-button-mobile"))||e.target.parentElement&&e.target.parentElement.parentElement&&e.target.parentElement.parentElement.classList&&(e.target.parentElement.parentElement.classList.contains("menu-button")||e.target.parentElement.parentElement.classList.contains("menu-button-mobile")))&&(n=!0),t.contains(e.target)||t===e.target||n||(s.setState({viewingParentMenu:""}),s.toggle())},s.getMenuClassesForResize=function(e){var t=s.props,n=t.menuHiddenBreakpoint,c=t.subHiddenBreakpoint,a=e.split(" ").filter((function(e){return""!==e})),i=window.innerWidth;return i<n?a.push("menu-mobile"):i<c?(a=a.filter((function(e){return"menu-mobile"!==e}))).includes("menu-default")&&!a.includes("menu-sub-hidden")&&a.push("menu-sub-hidden"):(a=a.filter((function(e){return"menu-mobile"!==e}))).includes("menu-default")&&a.includes("menu-sub-hidden")&&(a=a.filter((function(e){return"menu-sub-hidden"!==e}))),a},s.getContainer=function(){return U.a.findDOMNode(Object(H.a)(s))},s.toggle=function(){var e=s.getIsHasSubItem();s.props.changeSelectedMenuHasSubItems(e);var t=s.props,n=t.containerClassnames,c=t.menuClickCount,a=n?n.split(" ").filter((function(e){return""!==e})):"",i=-1;e?a.includes("menu-sub-hidden")&&3===c?i=2:(a.includes("menu-hidden")||a.includes("menu-mobile"))&&(i=0):!a.includes("menu-default")||c%4!==0&&c%4!==3?!a.includes("menu-sub-hidden")||2!==c&&3!==c?(a.includes("menu-hidden")||a.includes("menu-mobile"))&&(i=0):i=0:i=1,i>=0&&s.props.setContainerClassnames(i,n,e)},s.handleProps=function(){s.addEvents()},s.addEvents=function(){["click","touchstart","touchend"].forEach((function(e){return document.addEventListener(e,s.handleDocumentClick,!0)}))},s.removeEvents=function(){["click","touchstart","touchend"].forEach((function(e){return document.removeEventListener(e,s.handleDocumentClick,!0)}))},s.setSelectedLiActive=function(e){var t=document.querySelector(".sub-menu  li.active");null!=t&&t.classList.remove("active");var n=document.querySelector(".third-level-menu  li.active");null!=n&&n.classList.remove("active");var c=document.querySelector(".third-level-menu  a.active");null!=c&&c.parentElement.classList.add("active");var a=document.querySelector(".sub-menu  a.active");if(null!=a)a.parentElement.classList.add("active"),s.setState({selectedParentMenu:a.parentElement.parentElement.getAttribute("data-parent")},e);else{var i=document.querySelector(".main-menu  li a.active");null!=i?s.setState({selectedParentMenu:i.getAttribute("data-flag")},e):""===s.state.selectedParentMenu&&s.setState({selectedParentMenu:K[0].id},e)}},s.setHasSubItemStatus=function(){var e=s.getIsHasSubItem();s.props.changeSelectedMenuHasSubItems(e),s.toggle()},s.getIsHasSubItem=function(){var e=s.state.selectedParentMenu,t=K.find((function(t){return t.id===e}));return!!t&&!!(t&&t.subs&&t.subs.length>0)},s.openSubMenu=function(e,t){var n=t.id,c=t.subs&&t.subs.length>0;if(s.props.changeSelectedMenuHasSubItems(c),c){e.preventDefault();var a=s.props,i=a.containerClassnames,l=a.menuClickCount,r=i?i.split(" ").filter((function(e){return""!==e})):"";r.includes("menu-mobile")?s.props.addContainerClassname("sub-show-temporary",i):!r.includes("menu-sub-hidden")||2!==l&&0!==l?!r.includes("menu-hidden")||1!==l&&3!==l?!r.includes("menu-default")||r.includes("menu-sub-hidden")||1!==l&&3!==l||s.props.setContainerClassnames(0,i,c):s.props.setContainerClassnames(2,i,c):s.props.setContainerClassnames(3,i,c),s.setState({viewingParentMenu:n})}else s.setState({viewingParentMenu:n,selectedParentMenu:n}),s.toggle()},s.toggleMenuCollapse=function(e,t){e.preventDefault();var n=s.state.collapsedMenus;return n.indexOf(t)>-1?s.setState({collapsedMenus:n.filter((function(e){return e!==t}))}):(n.push(t),s.setState({collapsedMenus:n})),!1},s.filteredList=function(e){var t=s.props.currentUser;return t?e.filter((function(e){return e.roles&&e.roles.includes(t.role)||!e.roles})):e},s.state={selectedParentMenu:"",viewingParentMenu:"",collapsedMenus:[]},s}return Object(P.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&(this.setSelectedLiActive(this.setHasSubItemStatus),window.scrollTo(0,0)),this.handleProps()}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize(),this.handleProps(),this.setSelectedLiActive(this.setHasSubItemStatus)}},{key:"componentWillUnmount",value:function(){this.removeEvents(),window.removeEventListener("resize",this.handleWindowResize)}},{key:"render",value:function(){var e=this,t=this.state,n=t.selectedParentMenu,s=t.viewingParentMenu,c=t.collapsedMenus;return Object(x.jsxs)("div",{className:"sidebar",children:[Object(x.jsx)("div",{className:"main-menu",children:Object(x.jsx)("div",{className:"scroll",children:Object(x.jsx)(k.a,{options:{suppressScrollX:!0,wheelPropagation:!1},children:Object(x.jsx)(q.a,{vertical:!0,className:"list-unstyled",children:K&&this.filteredList(K).map((function(t){return Object(x.jsx)(R.a,{className:W()({active:n===t.id&&""===s||s===t.id}),children:t.newWindow?Object(x.jsxs)("a",{href:t.to,rel:"noopener noreferrer",target:"_blank",children:[Object(x.jsx)("i",{className:t.icon})," ",Object(x.jsx)(T.a,{id:t.label})]}):Object(x.jsxs)(h.b,{to:t.to,onClick:function(n){return e.openSubMenu(n,t)},"data-flag":t.id,children:[Object(x.jsx)("i",{className:t.icon})," ",Object(x.jsx)(T.a,{id:t.label})]})},t.id)}))})})})}),Object(x.jsx)("div",{className:"sub-menu",children:Object(x.jsx)("div",{className:"scroll",children:Object(x.jsx)(k.a,{options:{suppressScrollX:!0,wheelPropagation:!1},children:K&&this.filteredList(K).map((function(t){return Object(x.jsx)(q.a,{className:W()({"d-block":e.state.selectedParentMenu===t.id&&""===e.state.viewingParentMenu||e.state.viewingParentMenu===t.id}),"data-parent":t.id,children:t.subs&&e.filteredList(t.subs).map((function(n,s){return Object(x.jsx)(R.a,{className:"".concat(n.subs&&n.subs.length>0?"has-sub-item":""),children:n.newWindow?Object(x.jsxs)("a",{href:n.to,rel:"noopener noreferrer",target:"_blank",children:[Object(x.jsx)("i",{className:n.icon})," ",Object(x.jsx)(T.a,{id:n.label})]}):n.subs&&n.subs.length>0?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(h.b,{className:"rotate-arrow-icon opacity-50 ".concat(-1===c.indexOf("".concat(t.id,"_").concat(s))?"":"collapsed"),to:n.to,id:"".concat(t.id,"_").concat(s),onClick:function(n){return e.toggleMenuCollapse(n,"".concat(t.id,"_").concat(s))},children:[Object(x.jsx)("i",{className:"simple-icon-arrow-down"})," ",Object(x.jsx)(T.a,{id:n.label})]}),Object(x.jsx)(B.a,{isOpen:-1===c.indexOf("".concat(t.id,"_").concat(s)),children:Object(x.jsx)(q.a,{className:"third-level-menu",children:e.filteredList(n.subs).map((function(e,n){return Object(x.jsx)(R.a,{children:e.newWindow?Object(x.jsxs)("a",{href:e.to,rel:"noopener noreferrer",target:"_blank",children:[Object(x.jsx)("i",{className:e.icon})," ",Object(x.jsx)(T.a,{id:e.label})]}):Object(x.jsxs)(h.b,{to:e.to,children:[Object(x.jsx)("i",{className:e.icon})," ",Object(x.jsx)(T.a,{id:e.label})]})},"".concat(t.id,"_").concat(s,"_").concat(n))}))})})]}):Object(x.jsxs)(h.b,{to:n.to,children:[Object(x.jsx)("i",{className:n.icon})," ",Object(x.jsx)(T.a,{id:n.label})]})},"".concat(t.id,"_").concat(s))}))},t.id)}))})})})]})}}]),n}(c.Component),X=Object(i.g)(Object(l.b)((function(e){var t=e.menu,n=e.authUser;return{containerClassnames:t.containerClassnames,subHiddenBreakpoint:t.subHiddenBreakpoint,menuHiddenBreakpoint:t.menuHiddenBreakpoint,menuClickCount:t.menuClickCount,selectedMenuHasSubItems:t.selectedMenuHasSubItems,currentUser:n.currentUser}}),{setContainerClassnames:p.N,addContainerClassname:p.B,changeDefaultClassnames:p.D,changeSelectedMenuHasSubItems:p.F})(J)),G=n(164),$=n(102),Q=function(){return Object(x.jsx)("footer",{className:"page-footer",children:Object(x.jsx)("div",{className:"footer-content",children:Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsxs)(G.a,{children:[Object(x.jsx)($.a,{xxs:"12",sm:"6",children:Object(x.jsx)("p",{className:"mb-0 text-muted",children:"\xa9 Smart Natives 2021"})}),Object(x.jsx)($.a,{className:"col-sm-6 d-none d-sm-block",children:Object(x.jsxs)("ul",{className:"breadcrumb pt-0 pr-0 float-right",children:[Object(x.jsx)("li",{className:"breadcrumb-item mb-0",children:Object(x.jsx)(h.b,{className:"btn-link",to:"#",location:{},children:"Home"})}),Object(x.jsx)("li",{className:"breadcrumb-item mb-0",children:Object(x.jsx)(h.b,{className:"btn-link",to:"#",location:{},children:"Contact Us"})}),Object(x.jsx)("li",{className:"breadcrumb-item mb-0",children:Object(x.jsx)(h.b,{className:"btn-link",to:"#",location:{},children:"Docs"})})]})})]})})})})},V=Object(i.g)(Object(l.b)((function(e){return{containerClassnames:e.menu.containerClassnames}}),{})((function(e){var t=e.containerClassnames,n=e.children,s=e.history;return Object(x.jsxs)("div",{id:"app-container",className:t,children:[Object(x.jsx)(z,{history:s}),Object(x.jsx)(X,{}),Object(x.jsx)("main",{children:Object(x.jsx)("div",{className:"container-fluid",children:n})}),Object(x.jsx)(Q,{})]})}))),Y=n(165),Z=n(284),ee=function(e){Object(A.a)(n,e);var t=Object(I.a)(n);function n(e){var s;return Object(F.a)(this,n),(s=t.call(this,e)).state={hasError:!1},s}return Object(P.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e),console.trace(t.componentStack)}},{key:"render",value:function(){var e=this.state.hasError,t=this.props.children;return e?Object(x.jsx)(te,{}):t}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(a.a.Component),te=function(){return Object(x.jsx)(G.a,{children:Object(x.jsx)($.a,{xxs:"12",children:Object(x.jsx)(Y.a,{children:Object(x.jsx)(Z.a,{className:"text-center",children:Object(x.jsx)("h1",{className:"lead",children:"Something went wrong..."})})})})})},ne=ee,se=a.a.lazy((function(){return n.e(16).then(n.bind(null,416))})),ce=a.a.lazy((function(){return n.e(18).then(n.bind(null,403))})),ae=a.a.lazy((function(){return n.e(21).then(n.bind(null,404))})),ie=a.a.lazy((function(){return n.e(15).then(n.bind(null,405))}));t.default=Object(i.g)(Object(l.b)((function(e){return{containerClassnames:e.menu.containerClassnames}}),{})((function(e){var t=e.match;return Object(x.jsx)(V,{children:Object(x.jsx)(ne,{children:Object(x.jsx)("div",{className:"dashboard-wrapper",children:Object(x.jsx)(c.Suspense,{fallback:Object(x.jsx)("div",{className:"loading"}),children:Object(x.jsxs)(i.d,{children:[Object(x.jsx)(i.a,{exact:!0,from:"".concat(t.url,"/"),to:"".concat(t.url,"/dashboard")}),Object(x.jsx)(i.b,{path:"".concat(t.url,"/dashboard"),render:function(e){return Object(x.jsx)(se,Object(s.a)({},e))}}),Object(x.jsx)(i.b,{path:"".concat(t.url,"/profile"),render:function(e){return Object(x.jsx)(ce,Object(s.a)({},e))}}),Object(x.jsx)(i.b,{path:"".concat(t.url,"/challenges"),render:function(e){return Object(x.jsx)(ae,Object(s.a)({},e))}}),Object(x.jsx)(i.b,{path:"".concat(t.url,"/blank-page"),render:function(e){return Object(x.jsx)(ie,Object(s.a)({},e))}}),Object(x.jsx)(i.a,{to:"/error"})]})})})})})})))}}]);
//# sourceMappingURL=views-app.620348b9.chunk.js.map