import{r as o,u as C,j as s,i as t,_ as c,a as k}from"./index-4e0a7d8e.js";import{R as E,h as L,i as F,L as l,j as d,I as h,S as b,F as D,g as I,k as T,l as W,m as B,P as N,n as A,o as _,p,q as j,r as a,s as i,t as q}from"./index.esm-6e6d6c83.js";const z=()=>{const[u,g]=o.useState(""),[w,f]=o.useState(""),[x,m]=o.useState(""),[y,v]=o.useState(""),[n,P]=o.useState(!1),S=C(),R=e=>{if(e.preventDefault(),x!==y){c.error("Password wrong");return}S(k({name:u,email:w,password:x})).then(r=>{if(r.payload.response.status===400||r.payload.response.status===403||r.payload.response.status===409)throw c.error(r.payload.response.data.message),new Error;c.success("Success!")}).catch(r=>console.log(r))};return s.jsxs(E,{children:[s.jsx(L,{children:s.jsxs(F,{children:[s.jsxs(l,{id:"email",children:["Name ",s.jsx(d,{children:"*"}),s.jsx(h,{type:"text",placeholder:"...",onChange:e=>g(e.target.value)})]}),s.jsxs(l,{id:"email",children:["Email ",s.jsx(d,{children:"*"}),s.jsx(h,{type:"text",placeholder:"your@email.com",onChange:e=>f(e.target.value)})]}),s.jsxs(l,{id:"email",children:["Password ",s.jsx(d,{children:"*"}),s.jsx(h,{type:n?"text":"password",placeholder:"...",onChange:e=>m(e.target.value)})]}),s.jsxs(l,{children:["Confirm password ",s.jsx(d,{children:"*"}),s.jsxs(b,{children:[s.jsx(h,{type:n?"text":"password",placeholder:"...",onChange:e=>v(e.target.value)}),s.jsx("span",{onClick:e=>{e.preventDefault(),P(!n)},style:{position:"absolute",right:"24px",top:"18px"},children:n?s.jsx(D,{color:"#898f9f",style:{width:"20px",height:"20px"}}):s.jsx(I,{color:"#898f9f",style:{width:"20px",height:"20px"}})})]})]}),s.jsx(T,{type:"submit",onClick:R,children:"Register"}),s.jsxs(W,{children:["Already have an account?",s.jsx(B,{to:"/",children:"Log in"})]})]})}),s.jsxs(N,{children:[s.jsx(A,{children:"Books Reading"}),s.jsxs("div",{children:[s.jsxs(_,{children:[s.jsx(p,{children:"Will help you to"}),s.jsxs(j,{children:[s.jsxs(a,{children:[s.jsx("svg",{width:"4",height:"8",children:s.jsx("use",{href:t+"#icon-arrow"})}),s.jsx(i,{children:"Create your goal faster and proceed to read"})]}),s.jsxs(a,{children:[s.jsx("svg",{width:"4",height:"8",children:s.jsx("use",{href:t+"#icon-arrow"})}),s.jsx(i,{children:"Divide process proportionally for each day"})]}),s.jsxs(a,{children:[s.jsx("svg",{width:"4",height:"8",children:s.jsx("use",{href:t+"#icon-arrow"})}),s.jsx(i,{children:"Track your success"})]})]})]}),s.jsxs(q,{children:[s.jsx(p,{children:"You may also"}),s.jsxs(j,{children:[s.jsxs(a,{children:[s.jsx("svg",{width:"4",height:"8",children:s.jsx("use",{href:t+"#icon-arrow"})}),s.jsx(i,{children:"Pose your own independent point of view"})]}),s.jsxs(a,{children:[s.jsx("svg",{width:"4",height:"8",children:s.jsx("use",{href:t+"#icon-arrow"})}),s.jsx(i,{children:"Improve your professional skills according to new knowledge"})]}),s.jsxs(a,{children:[s.jsx("svg",{width:"4",height:"8",children:s.jsx("use",{href:t+"#icon-arrow"})}),s.jsx(i,{children:"Become an interesting interlocutor"})]})]})]})]})]})]})};export{z as default};
