"use strict";(self.webpackChunkonedayseedjs=self.webpackChunkonedayseedjs||[]).push([[530],{119:(e,s,a)=>{a.d(s,{Z:()=>t});var r=a(689),n=a(420),l=a(135),c=a(184);const t=e=>{let{children:s}=e;(0,r.s0)();const a=(0,n.I0)(),t=(0,n.v9)((e=>e.loginSlice));return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("header",{children:[(0,c.jsx)("nav",{className:"navbar navbar-expand-lg",id:"nav",children:(0,c.jsxs)("div",{className:"container-fluid",id:"nav-form",children:[(0,c.jsx)("a",{href:"/",className:"navbar-brand",id:"logo",children:"OnedaySeed"}),(0,c.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,c.jsx)("span",{className:"navbar-toggler-icon"})}),(0,c.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,c.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[(0,c.jsx)("li",{className:"nav-item",children:(0,c.jsx)("a",{href:"/about",className:"nav-link active","aria-current":"page",children:"About Us"})}),t.userId?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("li",{className:"nav-item",children:(0,c.jsx)("a",{href:"/mypage",className:"nav-link",children:"My Page"})})}):(0,c.jsx)(c.Fragment,{}),t.userId?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("li",{className:"nav-item",children:(0,c.jsx)("a",{className:"nav-link active","aria-current":"page",onClick:()=>{a((0,l.kS)())},children:"Logout"})})}):(0,c.jsx)(c.Fragment,{}),t.userId?(0,c.jsx)(c.Fragment,{}):(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("li",{className:"nav-item",children:(0,c.jsx)("a",{href:"/user/login",className:"nav-link active","aria-current":"page",children:"Login"})})})]}),(0,c.jsxs)("form",{className:"d-flex",role:"search",children:[(0,c.jsx)("input",{className:"form-control me-2 ",id:"search-input",type:"search",placeholder:"Search","aria-label":"Search"}),(0,c.jsx)("button",{className:"btn btn-outline-success ",id:"search-btn",type:"submit",children:"Search"})]})]})]})}),(0,c.jsx)("hr",{})]}),(0,c.jsx)("main",{children:s}),(0,c.jsxs)("footer",{children:[(0,c.jsx)("hr",{}),(0,c.jsxs)("div",{className:"footer-body",children:[(0,c.jsxs)("span",{children:[(0,c.jsx)("b",{children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc"})," ",(0,c.jsx)("br",{}),(0,c.jsxs)("span",{className:"our-info",children:["\uc11c\uc6b8\uc2dc \uc885\ub85c\uad6c \uc778\uc0ac\ub3d9\uae38 12 15\uce35 ",(0,c.jsx)("br",{}),"\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 : 135-87-***** | \ud1b5\uc2e0\ud310\ub9e4\uc5c5 : \uc2e0\uace0\ubc88\ud638 \uc81c2024-\uc11c\uc6b8\uc885\ub85c-987**\ud638  ",(0,c.jsx)("br",{})]})," ",(0,c.jsx)("br",{}),(0,c.jsx)("span",{className:"not-host",children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc\ub294 \ud1b5\uc2e0\ud310\ub9e4\uc911\uac1c\uc790\uc774\uba70, \ud1b5\uc2e0\ud310\ub9e4\uc758 \ub2f9\uc0ac\uc790\uac00 \uc544\ub2d9\ub2c8\ub2e4. \uc0c1\ud488, \uc0c1\ud488\uc815\ubcf4, \uac70\ub798\uc5d0 \uad00\ud55c \uc758\ubb34\uc640 \ucc45\uc784\uc740 \ud310\ub9e4\uc790\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{})]})]})]})}},595:(e,s,a)=>{a.r(s),a.d(s,{default:()=>m});var r=a(689),n=a(87),l=a(119),c=(a(979),a(791)),t=a(420),o=(a(135),a(855)),i=a(294),d=a(184);const h={userId:"",password:""},m=()=>{const[e,s]=(0,c.useState)({...h}),a=((0,t.I0)(),async()=>{try{const e=await i.Z.get("/api/userLogin");s(e.data)}catch(e){console.log("ERROR FETCHING USER LOGIN : ",e)}});(0,c.useEffect)((()=>{a()}),[]);const m=(0,r.s0)(),x=e=>{const{name:a,value:r}=e.target;s((e=>({...e,[a]:r})))};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(l.Z,{children:(0,d.jsxs)("div",{className:"loginBox",children:[(0,d.jsx)("h1",{children:(0,d.jsx)("b",{children:"\ub85c\uadf8\uc778"})}),(0,d.jsxs)(o.Z,{onSubmit:async s=>{s.preventDefault(),console.log(e.userId),console.log(e.password);try{const s=await i.Z.post("/api/userLogin",{userId:e.userId,password:e.password});s.data.alertMessage&&alert(s.data.alertMessage),s.data.successMessage&&(console.log("Form submitted successfully:",s.data.successMessage),a(),m("/"))}catch(r){r.response?console.error("Error submitting form:",r.response.data):r.request?console.error("Request error:",r.request):console.error("Unexpected error:",r.message)}},children:[(0,d.jsx)("span",{className:"formName",children:"\uc544\uc774\ub514"}),(0,d.jsx)("input",{className:"formInfo",type:"text",id:"id_val",placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"userId",value:e.userId,onChange:x}),(0,d.jsx)("span",{className:"formName",children:"\ube44\ubc00\ubc88\ud638"}),(0,d.jsx)("input",{className:"formInfo",type:"password",id:"password_val",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"password",value:e.password,onChange:x}),(0,d.jsx)("div",{className:"loginBtn",children:(0,d.jsx)("button",{className:"s_bt",type:"submit",children:"\ub85c\uadf8\uc778"})})]}),(0,d.jsx)(n.Link,{to:"/host/login",className:"another-login",children:"\ud638\uc2a4\ud2b8\ub85c \ub85c\uadf8\uc778\ud558\uae30"}),(0,d.jsx)("span",{className:"choiceNewmember",children:"\uc544\uc9c1 \ud68c\uc6d0\uc774 \uc544\ub2c8\uc2e0\uac00\uc694?"}),(0,d.jsxs)("div",{className:"newmember",children:[(0,d.jsx)("button",{className:"another-btn",children:(0,d.jsx)(n.Link,{to:"/host/new",children:"\ud638\uc2a4\ud2b8 \ud68c\uc6d0\uac00\uc785"})}),(0,d.jsx)("button",{className:"another-btn",children:(0,d.jsx)(n.Link,{to:"/user/new",children:"\uac8c\uc2a4\ud2b8 \ud68c\uc6d0\uac00\uc785"})})]})]})})})}},979:()=>{}}]);
//# sourceMappingURL=530.280df4d5.chunk.js.map