import{n as i,N as u,r as o,u as b,j as e,l as w,_ as r}from"./index-2afb4d81.js";import{b as j,a as y,c as k,d as v,e as _,f as z,S,F as L,g as E}from"./index.esm-c19b8de4.js";const F=i.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    height: calc(100vh - 60px);
  }
`,P=i.button`
  margin-top: 20px;
  margin-bottom: 16px;
  background-color: #ff6b08;
  color: #ffffff;
  padding: 20px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 19.5px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 20px;
  }
`,$=i.form`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  max-width: 400px;

  @media screen and (min-width: 768px) {
    background-color: #ffffff;
    padding: 40px;
    width: 400px;
  }
`,B=i.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #091e3fcc;
  max-height: calc(100vh - 60px);

  padding: 32px 20px;

  display: flex;
  justify-content: center;

  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 64px 75px;
  }

  background-image: linear-gradient(
      95deg,
      rgba(9, 30, 63, 0.8),
      rgba(9, 30, 63, 0.8)
    ),
    url(${j});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        95deg,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${y});
  }

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
        95deg,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${k});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          95deg,
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${v});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: linear-gradient(
        95deg,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${_});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          95deg,
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${z});
    }
  }
`,C=i.h2`
  font-weight: 500;
  font-size: 13px;
  line-height: 15.85px;
  text-align: center;
  color: #242a37;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 38px;
    margin-bottom: 20px;
  }
`,Q=i.p`
  font-family: "Abril Fatface";
  font-weight: 400;
  font-size: 59px;
  line-height: 79.59px;
  color: #ff6b08;

  @media screen and (min-width: 768px) {
    font-size: 69px;
    line-height: 93.08px;
  }
`,W=i.p`
  font-weight: 500;

  font-size: 14px;
  line-height: 17.07px;
  text-align: center;
  color: #898f9f;
  max-width: 150px;
  display: flex;
  padding-top: 12px;
  border-top: 1px solid #242a3780;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 24.38px;
  }
`,A=i.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-top: 4px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 64px;
  }
`,D=i.div`
  width: 229px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 397px;
  }
`,s=i.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 17.07px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-weight: 500;
    color: #898f9f;
  }

  &#email {
    margin-bottom: 20px;
  }
`,d=i.input`
  outline: none;
  margin-top: 8px;
  width: 100%;
  padding: 12px 12px 12px 8px;
  background-color: #f5f7fa;
  box-shadow: 0px 1px 2px 0px #1d1d1b26 inset;
  border: none;

  @media screen and (min-width: 768px) {
    padding: 12px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 17.07px;
    color: #a6abb9;
  }
`,p=i.span`
  color: #f25137;
`,N=i(u)`
  font-weight: 500;
  font-size: 13px;
  line-height: 15.85px;
  color: #ff6b08;
  text-align: center;
  text-decoration: underline;
`,O=()=>{const[l,c]=o.useState(""),[x,g]=o.useState(""),[a,h]=o.useState(!1),m=b(),f=n=>{n.preventDefault(),m(w({email:l,password:x})).then(t=>{if(t.payload.response.status===400||t.payload.response.status===403)throw r.error(t.payload.response.data.message),new Error;r.success("Success!")}).catch(t=>console.log(t))};return e.jsxs(F,{children:[e.jsx(B,{children:e.jsxs($,{children:[e.jsxs(s,{id:"email",children:["Email ",e.jsx(p,{children:"*"}),e.jsx(d,{type:"text",placeholder:"your@email.com",onChange:n=>c(n.target.value)})]}),e.jsxs(s,{children:["Password ",e.jsx(p,{children:"*"}),e.jsxs(S,{children:[e.jsx(d,{type:a?"text":"password",placeholder:"Password",onChange:n=>g(n.target.value)}),e.jsx("span",{onClick:()=>h(!a),style:{position:"absolute",right:"24px",top:"18px"},children:a?e.jsx(L,{color:"#898f9f",style:{width:"20px",height:"20px"}}):e.jsx(E,{color:"#898f9f",style:{width:"20px",height:"20px"}})})]})]}),e.jsx(P,{type:"submit",onClick:f,children:"Login"}),e.jsx(N,{to:"/signup",children:"Register"})]})}),e.jsx(A,{children:e.jsxs(D,{children:[e.jsx(Q,{children:"“"}),e.jsx(C,{children:"Books are the ships of thoughts, wandering through the waves of time."}),e.jsx(W,{children:"Francis Bacon"})]})})]})};export{O as default};
