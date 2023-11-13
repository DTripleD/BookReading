import{n,N as u,R as s}from"./index-a142bfeb.js";const b="/BookReading/assets/background_s@2x-ddb404d9.jpg",h="/BookReading/assets/background_s@1x-c589b0ee.jpg",k="/BookReading/assets/background_m@2x-fafc948d.jpg",w="/BookReading/assets/background_m@1x-9452e710.jpg",v="/BookReading/assets/background_l@2x-b30ca6b8.jpg",y="/BookReading/assets/background_l@1x-a7eb5c50.jpg",R=n.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    height: calc(100vh - 60px);
  }
`,O=n.button`
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
`,P=n.div`
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
    url(${h});
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
      url(${b});
  }

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
        95deg,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${w});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          95deg,
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${k});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: linear-gradient(
        95deg,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${y});

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
`,L=n.form`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  max-width: 400px;

  @media screen and (min-width: 768px) {
    background-color: #ffffff;
    padding: 40px;
    width: 400px;
  }
`,B=n.h2`
  margin-bottom: 32px;
  font-family: "Abril Fatface";
  font-weight: 400;
  font-size: 34px;
  line-height: 38px;
  color: #242a37;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }
`,N=n.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;
`,C=n.p`
  margin-bottom: 14px;
  font-weight: 500;
  font-size: 20px;
  line-height: 38px;
  color: #242a37;
`,E=n.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    padding: 32px 25px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 64px;
  }
`,S=n.label`
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
`,T=n.input`
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
`,F=n.span`
  color: #f25137;
`,I=n(u)`
  font-weight: 500;
  font-size: 13px;
  line-height: 15.85px;
  color: #ff6b08;
  text-align: center;
  text-decoration: underline;
`,W=n.span`
  font-weight: 500;
  font-size: 13px;
  line-height: 15.85px;
  text-align: center;
  color: #898f9f;
`,$=n.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,A=n.div`
  margin-bottom: 32px;
`,M=n.div``,D=n.li`
  display: flex;
  gap: 12px;
  align-items: center;
`,q=n.div`
  position: relative;
`;var p={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g=s.createContext&&s.createContext(p),o=globalThis&&globalThis.__assign||function(){return o=Object.assign||function(e){for(var a,t=1,i=arguments.length;t<i;t++){a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)},_=globalThis&&globalThis.__rest||function(e,a){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&a.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)a.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(t[i[r]]=e[i[r]]);return t};function m(e){return e&&e.map(function(a,t){return s.createElement(a.tag,o({key:t},a.attr),m(a.child))})}function x(e){return function(a){return s.createElement(j,o({attr:o({},e.attr)},a),m(e.child))}}function j(e){var a=function(t){var i=e.attr,r=e.size,l=e.title,f=_(e,["attr","size","title"]),c=r||t.size||"1em",d;return t.className&&(d=t.className),e.className&&(d=(d?d+" ":"")+e.className),s.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,f,{className:d,style:o(o({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&s.createElement("title",null,l),e.children)};return g!==void 0?s.createElement(g.Consumer,null,function(t){return a(t)}):a(p)}function G(e){return x({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"}}]})(e)}function H(e){return x({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}}]})(e)}export{H as F,T as I,S as L,E as P,R,q as S,b as a,h as b,w as c,k as d,y as e,v as f,G as g,P as h,L as i,F as j,O as k,W as l,I as m,B as n,A as o,C as p,$ as q,D as r,N as s,M as t};
