import{n as t,b as I,j as i,i as x,r as l,u as G,g as Q,c as q,d as H,M as s,_ as M,e as J}from"./index-4e0a7d8e.js";import{u as K,M as O}from"./booksSelectors-7fa026a4.js";const p=t.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;

  &#title {
    width: 100%;

    @media screen and (min-width: 1280px) {
      width: 346px;
    }
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 1;
  }

  &#author {
    width: 100%;
    @media screen and (min-width: 768px) {
      width: 336px;
    }

    @media screen and (min-width: 1280px) {
      width: 250px;
    }
  }
  &#date {
    @media screen and (min-width: 768px) {
      width: 152px;
    }

    @media screen and (min-width: 1280px) {
      width: 134px;
    }
  }
  &#pages {
    @media screen and (min-width: 768px) {
      width: 152px;
    }

    @media screen and (min-width: 1280px) {
      width: 134px;
    }
  }
`,o=t.input`
  background-color: transparent;
  border: 1px solid #a6abb9;
  padding: 12px;
  margin-top: 8px;
  outline: none;

  &#title {
    width: 346px;

    /* @media screen and (min-width: 768px) {
      max-width: none;
      width: 768px;
      padding: 14px 32px 13px 32px;
    }

    @media screen and (min-width: 1280px) {
      width: 1280px;
      padding: 11px 16px;
    } */
  }

  &:focus {
    background-color: #ffffff;
    box-shadow: 0px 1px 2px 0px #1d1d1b26 inset;
    /* border: none; */
    border-color: #1d1d1b26;
  }
`,U=t.form`
  margin-bottom: 40px;
  @media screen and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: flex-end;
  }
`,V=t.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #000000;
  border: 1px solid #242a37;
  background-color: transparent;
  padding: 12px 75px;
  height: 42px;
  width: 171px;
`,m=t.h3`
  font-weight: 600;
  font-size: 19px;
  line-height: 23.16px;
  color: #242a37;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`,n=t.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;

  @media screen and (min-width: 768px) {
    &#title-title {
      margin-right: 299px;
    }
    &#author-title {
      margin-right: 164px;
    }
    &#year-title {
      margin-right: 32px;
    }

    &#title-title-rating {
      margin-right: 147px;
    }
    &#author-title-rating {
      margin-right: 79px;
    }
    &#year-title-rating {
      margin-right: 28px;
    }
    &#pages-title-rating {
      margin-right: 27px;
    }
  }

  @media screen and (min-width: 1280px) {
    &#title-title {
      margin-right: 571px;
    }
    &#author-title {
      margin-right: 339px;
    }
    &#year-title {
      margin-right: 72px;
    }

    &#title-title-rating {
      margin-right: 292px;
    }
    &#author-title-rating {
      margin-right: 218px;
    }
    &#year-title-rating {
      margin-right: 65px;
    }
    &#pages-title-rating {
      margin-right: 102px;
    }
  }
`,r=t.p`
  font-weight: 500;
  color: #242a37;
  font-size: 12px;
  line-height: 14.63px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 17.07px;

    &#title-list {
    }
    &#author-list {
      width: 109px;
      margin-right: 96px;
    }
    &#year-list {
      width: 32px;
      margin-right: 62px;
    }
    &#pages-list {
    }

    &#title-resume {
      width: 124px;
    }

    &#author-resume {
      overflow: hidden;
      width: 88px;
      margin-right: 28px;
    }

    &#year-resume {
      min-width: 36px;
      margin-right: 52px;
    }
    &#pages-resume {
      width: 23px;
      margin-right: 32px;
    }
  }

  @media screen and (min-width: 1280px) {
    &#title-list {
    }
    &#author-list {
      width: 221px;
      margin-right: 160px;
    }
    &#year-list {
      min-width: 36px;
      margin-right: 102px;
    }
    &#pages-list {
    }

    &#title-resume {
      /* width: 157px; */
    }

    &#author-resume {
      overflow: hidden;
      width: 88px;
      margin-right: 178px;
    }

    &#year-resume {
      width: 36px;
      margin-right: 81px;
    }
    &#pages-resume {
      width: 23px;
      margin-right: 110px;
    }
  }
`,u=t.li`
  display: flex;

  background-color: #ffffff;
  box-shadow: 0px 2px 3px 0px #091e3f1a;
  padding: 22px 20px;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  &#resume {
    @media screen and (min-width: 768px) {
      padding: 11px 20px;
    }
    @media screen and (min-width: 1280px) {
      padding: 11px 80px 11px 20px;
    }
  }
`,f=t.div`
  display: flex;

  margin-bottom: 8px;
`,j=t.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 767px) {
    gap: 8px;
  }
`,X=t.div`
  display: grid;

  column-gap: 32px;

  row-gap: 24px;

  @media screen and (max-width: 1279px) {
    width: 100%;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 16px;
    margin-right: 48px;
  }

  /* display: flex;
  gap: 12px;
  margin-right: 48px; */
`,Z=t.button`
  color: #ffffff;
  font-weight: 600;

  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  line-height: 19.5px;
  background-color: #ff6b08;
  width: 200px;
  border: none;
  padding: 10px 0;
  margin-top: 28px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`,$=t.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  box-shadow: 0px 2px 4px 0px #00000040;
  background-color: #6d7a8d;
  color: #ffffff;
  border: none;
  padding: 11px 34px 12px 34px;
  margin-left: auto;

  @media screen and (max-width: 767px) {
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    padding: 11px 11px 12px 10px;
  }

  @media screen and (min-width: 1280px) {
    padding: 12px 36px;
  }
`,ii=t.button`
  bottom: 12px;
  position: fixed;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background-color: #ff6b08;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`,w=t.div`
  display: flex;
  gap: 18px;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    min-width: 268px;
    margin-right: 80px;

    &#title-wrapper-resume {
      min-width: 164px;
      margin-right: 32px;
    }
  }

  @media screen and (min-width: 1280px) {
    min-width: 509px;
    margin-right: 111px;

    &#title-wrapper-resume {
      min-width: 197px;
      margin-right: 144px;
    }
  }
`,ei=t(I)`
  color: #ff6b08;
  font-size: 19.5px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-size: 20.2px;
  }

  &.Mui-disabled {
    opacity: 1;
  }

  & .MuiRating-icon {
    color: inherit;
  }
`,a=t.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14.63px;
`,y=t.div`
  gap: 14px;
  display: flex;
  flex-direction: column;
  margin-right: 35px;
`,b=t.div`
  @media screen and (max-width: 767px) {
    display: flex;
    margin-top: 27px;

    &#rating {
      margin-bottom: 20px;
    }
  }
`,v=t.div`
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 14px;
  }
`,P=t.div`
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
  }
`,ti=t.div`
  background-color: #ffffff;
  padding: 43px 18px 98px 20px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 24px;
    padding: 40px;
    width: 608px;
  }
`,k=t.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 21.94px;
  color: #242a37;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 19px;
    line-height: 23.16px;
  }
`,C=t.div`
  display: flex;
  gap: 12px;
`,D=t.h3`
  margin-bottom: 8px;

  font-weight: 600;
  font-size: 16px;
  line-height: 19.5px;

  color: #242a37;
`,L=t.div`
  margin-left: 30px;
  display: flex;
  gap: 8px;
`,_=t.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;
`,ni=()=>i.jsxs(ti,{children:[i.jsxs("div",{children:[i.jsx(k,{children:"Step 1."}),i.jsxs(C,{children:[i.jsx("svg",{width:"22",height:"17",children:i.jsx("use",{href:x+"#icon-book"})}),i.jsx(D,{children:"Create your own library"})]}),i.jsxs(L,{children:[i.jsx("svg",{width:"10",height:"12",children:i.jsx("use",{href:x+"#icon-line"})}),i.jsx(_,{children:"Add there books which you are going to read."})]})]}),i.jsxs("div",{children:[i.jsx(k,{children:"Step 2."}),i.jsxs(C,{children:[i.jsx("svg",{width:"15",height:"17",children:i.jsx("use",{href:x+"#icon-flag"})}),i.jsx(D,{children:"Create your first training"})]}),i.jsxs(L,{children:[i.jsx("svg",{width:"10",height:"12",children:i.jsx("use",{href:x+"#icon-line"})}),i.jsx(_,{children:"Set a goal, choose period, start training."})]})]})]}),ai=({handleModalOpen:N})=>{const[R,W]=l.useState(""),[T,z]=l.useState(""),[g,S]=l.useState(""),[B,A]=l.useState(""),c=G();l.useEffect(()=>{c(Q())},[c]);const d=q(K),E=e=>{if(e.preventDefault(),g.length>4)return M.error("Каріна блін!!!!! Введи чотири числа!!!!!!");c(J({title:R,author:T,publishYear:Number(g),pagesTotal:Number(B)})).then(h=>{var Y;if(console.log(h.payload.response),((Y=h.payload.response)==null?void 0:Y.status)===400)throw M.error(h.payload.response.data.message),new Error}).then(()=>{console.log("aaaa"),W(""),z(""),S(""),A("")}).catch(h=>console.log(h))},F=H();return i.jsx(O,{children:i.jsxs("div",{children:[i.jsx(s,{minWidth:768,children:i.jsxs(U,{onSubmit:e=>E(e),children:[i.jsxs(X,{children:[i.jsxs(p,{id:"title",children:["Book title",i.jsx(o,{type:"text",value:R,placeholder:"...",onChange:e=>W(e.target.value)})]}),i.jsxs(p,{id:"author",children:["Author",i.jsx(o,{value:T,type:"text",placeholder:"...",onChange:e=>z(e.target.value)})]}),i.jsxs(p,{id:"date",children:["Publication date",i.jsx(o,{value:g,type:"text",placeholder:"...",onChange:e=>S(e.target.value)})]}),i.jsxs(p,{id:"pages",children:["Amount of pages",i.jsx(o,{value:B,type:"text",placeholder:"...",onChange:e=>A(e.target.value)})]})]}),i.jsx(V,{type:"submit",children:"Add"})]})}),d.goingToRead.length>0||d.finishedReading.length>0||d.currentlyReading.length>0?i.jsxs("div",{children:[d.finishedReading.length>0&&i.jsxs(P,{children:[i.jsx(m,{children:"Already read"}),i.jsx(s,{minWidth:768,children:i.jsxs(f,{children:[i.jsx(n,{id:"title-title-rating",children:"Book title"}),i.jsx(n,{id:"author-title-rating",children:"Author"}),i.jsx(n,{id:"year-title-rating",children:"Year"}),i.jsx(n,{id:"pages-title-rating",children:"Pages"}),i.jsx(n,{id:"rating-title-rating",children:"Rating"})]})}),i.jsx(j,{children:d.finishedReading.map(e=>i.jsxs(u,{id:"resume",children:[i.jsxs(w,{id:"title-wrapper-resume",children:[i.jsx("svg",{width:"22",height:"17",children:i.jsx("use",{href:x+"#icon-book"})}),i.jsx(r,{id:"title-resume",children:e.title})]}),i.jsxs(b,{id:"rating",children:[i.jsx(s,{maxWidth:767,children:i.jsxs(y,{children:[i.jsx(a,{children:"Author:"}),i.jsx(a,{children:"Year:"}),i.jsx(a,{children:"Pages:"}),i.jsx(a,{children:"Rating:"})]})}),i.jsxs(v,{children:[i.jsx(r,{id:"author-resume",children:e.author}),i.jsx(r,{id:"year-resume",children:e.publishYear}),i.jsx(r,{id:"pages-resume",children:e.pagesTotal}),i.jsx(ei,{name:"simple-controlled",disabled:!0,value:e.rating?e.rating:0})]})]}),i.jsx($,{type:"button",onClick:()=>{N(e._id)},children:"Resume"})]},e._id))})]}),d.currentlyReading.length>0&&i.jsxs(P,{children:[i.jsx(m,{children:"Reading now"}),i.jsx(s,{minWidth:768,children:i.jsxs(f,{children:[i.jsx(n,{id:"title-title",children:"Book title"}),i.jsx(n,{id:"author-title",children:"Author"}),i.jsx(n,{id:"year-title",children:"Year"}),i.jsx(n,{id:"pages-title",children:"Pages"})]})}),i.jsx(j,{children:d.currentlyReading.map(e=>i.jsxs(u,{children:[i.jsxs(w,{children:[i.jsx("svg",{width:"22",height:"17",children:i.jsx("use",{href:x+"#icon-book"})}),i.jsx(r,{id:"title-list",children:e.title})]}),i.jsxs(b,{children:[i.jsx(s,{maxWidth:767,children:i.jsxs(y,{children:[i.jsx(a,{children:"Author:"}),i.jsx(a,{children:"Year:"}),i.jsx(a,{children:"Pages:"})]})}),i.jsxs(v,{children:[i.jsx(r,{id:"author-list",children:e.author}),i.jsx(r,{id:"year-list",children:e.publishYear}),i.jsx(r,{id:"pages-list",children:e.pagesTotal})]})]})]},e._id))})]}),d.goingToRead.length>0&&i.jsxs("div",{children:[i.jsx(m,{children:"Going to read"}),i.jsx(s,{minWidth:768,children:i.jsxs(f,{children:[i.jsx(n,{id:"title-title",children:"Book title"}),i.jsx(n,{id:"author-title",children:"Author"}),i.jsx(n,{id:"year-title",children:"Year"}),i.jsx(n,{id:"pages-title",children:"Pages"})]})}),i.jsx(j,{children:d.goingToRead.map(e=>i.jsxs(u,{children:[i.jsxs(w,{children:[i.jsx("svg",{width:"22",height:"17",children:i.jsx("use",{href:x+"#icon-book"})}),i.jsx(r,{id:"title-list",children:e.title})]}),i.jsxs(b,{children:[i.jsx(s,{maxWidth:767,children:i.jsxs(y,{children:[i.jsx(a,{children:"Author:"}),i.jsx(a,{children:"Year:"}),i.jsx(a,{children:"Pages:"})]})}),i.jsxs(v,{children:[i.jsx(r,{id:"author-list",children:e.author}),i.jsx(r,{id:"year-list",children:e.publishYear}),i.jsx(r,{id:"pages-list",children:e.pagesTotal})]})]})]},e._id))})]}),!d.currentlyReading.length&&i.jsx(Z,{onClick:()=>F("/progress"),children:"My training"})]}):i.jsx(ni,{}),i.jsx(s,{maxWidth:767,children:i.jsx(ii,{children:i.jsx("svg",{width:"16",height:"16",children:i.jsx("use",{href:x+"#icon-plus"})})})})]})})};export{ai as default};
