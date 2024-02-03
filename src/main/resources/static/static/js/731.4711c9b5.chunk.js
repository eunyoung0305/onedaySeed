"use strict";(self.webpackChunkonedayseedjs=self.webpackChunkonedayseedjs||[]).push([[731],{724:(e,s,a)=>{a(135),a(184)},119:(e,s,a)=>{a.d(s,{Z:()=>t});var n=a(689),r=a(420),l=(a(724),a(184));const t=e=>{let{children:s}=e;const a=(0,n.s0)();(0,r.v9)((e=>e.loginSlice));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("header",{children:[(0,l.jsx)("nav",{className:"navbar navbar-expand-lg",id:"nav",children:(0,l.jsxs)("div",{className:"container-fluid",id:"nav-form",children:[(0,l.jsx)("a",{href:"/",className:"navbar-brand",id:"logo",children:"OnedaySeed"}),(0,l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,l.jsx)("span",{className:"navbar-toggler-icon"})}),(0,l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{href:"/about",className:"nav-link active","aria-current":"page",children:"About Us"})}),"loginState.id ?",(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{href:"/mypage",className:"nav-link",children:"My Page"})})}),":",(0,l.jsx)(l.Fragment,{}),"loginState.id ?",(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{className:"nav-link",onClick:()=>{localStorage.removeItem("isLoggedIn"),a("/")},children:"Logout"})})}),":",(0,l.jsx)(l.Fragment,{}),"! loginState.id?",(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("li",{class:"nav-item",children:(0,l.jsx)("a",{href:"/user/login",className:"nav-link disabled","aria-disabled":"true",children:"Login"})})}),": ",(0,l.jsx)(l.Fragment,{})]}),(0,l.jsxs)("form",{className:"d-flex",role:"search",children:[(0,l.jsx)("input",{className:"form-control me-2 ",id:"search-input",type:"search",placeholder:"Search","aria-label":"Search"}),(0,l.jsx)("button",{className:"btn btn-outline-success ",id:"search-btn",type:"submit",children:"Search"})]})]})]})}),(0,l.jsx)("hr",{})]}),(0,l.jsx)("main",{children:s}),(0,l.jsxs)("footer",{children:[(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:"footer-body",children:[(0,l.jsxs)("span",{children:[(0,l.jsx)("b",{children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc"})," ",(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"our-info",children:["\uc11c\uc6b8\uc2dc \uc885\ub85c\uad6c \uc778\uc0ac\ub3d9\uae38 12 15\uce35 ",(0,l.jsx)("br",{}),"\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 : 135-87-***** | \ud1b5\uc2e0\ud310\ub9e4\uc5c5 : \uc2e0\uace0\ubc88\ud638 \uc81c2024-\uc11c\uc6b8\uc885\ub85c-987**\ud638  ",(0,l.jsx)("br",{})]})," ",(0,l.jsx)("br",{}),(0,l.jsx)("span",{className:"not-host",children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc\ub294 \ud1b5\uc2e0\ud310\ub9e4\uc911\uac1c\uc790\uc774\uba70, \ud1b5\uc2e0\ud310\ub9e4\uc758 \ub2f9\uc0ac\uc790\uac00 \uc544\ub2d9\ub2c8\ub2e4. \uc0c1\ud488, \uc0c1\ud488\uc815\ubcf4, \uac70\ub798\uc5d0 \uad00\ud55c \uc758\ubb34\uc640 \ucc45\uc784\uc740 \ud310\ub9e4\uc790\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{})]})]})]})}},731:(e,s,a)=>{a.r(s),a.d(s,{default:()=>d});var n=a(689),r=a(87),l=a(119),t=(a(979),a(791)),c=(a(135),a(855)),o=a(294),i=(a(724),a(184));const d=()=>{const[e,s]=(0,t.useState)({}),a=async()=>{try{const e=await o.Z.get("/api/userLogin");s(e.data)}catch(e){console.log("ERROR FETCHING USER LOGIN : ",e)}};(0,t.useEffect)((()=>{a()}),[]);const d=(0,n.s0)(),h=e=>{const{name:a,value:n}=e.target;s((e=>({...e,[a]:n})))};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.Z,{children:(0,i.jsxs)("div",{className:"loginBox",children:[(0,i.jsx)("h1",{children:(0,i.jsx)("b",{children:"\ub85c\uadf8\uc778"})}),(0,i.jsxs)(c.Z,{onSubmit:async s=>{s.preventDefault(),console.log(e.userId),console.log(e.password);try{const s=await o.Z.post("/api/userLogin",{userId:e.userId,password:e.password});s.data.alertMessage&&alert(s.data.alertMessage),s.data.successMessage&&(console.log("Form submitted successfully:",s.data.successMessage),localStorage.setItem("isLoggedIn",JSON.stringify(s.data.isLoggedIn)),a(),d("/"))}catch(n){n.response?console.error("Error submitting form:",n.response.data):n.request?console.error("Request error:",n.request):console.error("Unexpected error:",n.message)}},children:[(0,i.jsx)("span",{className:"formName",children:"\uc544\uc774\ub514"}),(0,i.jsx)("input",{className:"formInfo",type:"text",id:"id_val",placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"userId",value:e.userId,onChange:h}),(0,i.jsx)("span",{className:"formName",children:"\ube44\ubc00\ubc88\ud638"}),(0,i.jsx)("input",{className:"formInfo",type:"password",id:"password_val",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"password",value:e.password,onChange:h}),(0,i.jsx)("div",{className:"loginBtn",children:(0,i.jsx)("button",{className:"s_bt",type:"submit",children:"\ub85c\uadf8\uc778"})})]}),(0,i.jsx)(r.Link,{to:"/host/login",className:"another-login",children:"\ud638\uc2a4\ud2b8\ub85c \ub85c\uadf8\uc778\ud558\uae30"}),(0,i.jsx)("span",{className:"choiceNewmember",children:"\uc544\uc9c1 \ud68c\uc6d0\uc774 \uc544\ub2c8\uc2e0\uac00\uc694?"}),(0,i.jsxs)("div",{className:"newmember",children:[(0,i.jsx)("button",{className:"another-btn",children:(0,i.jsx)(r.Link,{to:"/host/new",children:"\ud638\uc2a4\ud2b8 \ud68c\uc6d0\uac00\uc785"})}),(0,i.jsx)("button",{className:"another-btn",children:(0,i.jsx)(r.Link,{to:"/user/new",children:"\uac8c\uc2a4\ud2b8 \ud68c\uc6d0\uac00\uc785"})})]})]})})})}},979:()=>{}}]);
//# sourceMappingURL=731.4711c9b5.chunk.js.map