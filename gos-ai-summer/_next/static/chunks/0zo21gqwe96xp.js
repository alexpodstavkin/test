(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,23903,e=>{"use strict";var t=e.i(99634),a=e.i(41296);e.s(["default",0,function(){let[e,l]=(0,a.useState)(""),[s,i]=(0,a.useState)(""),[r,n]=(0,a.useState)(""),[c,o]=(0,a.useState)(!0),[d,p]=(0,a.useState)(!1);return(0,t.jsxs)("section",{id:"cta",className:"sec",style:{background:"#F4F6FA"},children:[(0,t.jsx)("div",{style:{maxWidth:"1180px",margin:"0 auto"},children:(0,t.jsxs)("div",{className:"cta-grid",children:[(0,t.jsxs)("div",{className:"cta-left",children:[(0,t.jsx)("h2",{className:"h2",style:{color:"#FFFFFF",lineHeight:1.2},children:"Всероссийская летняя программа подготовки детей к школьному курсу «Искусственный интеллект»"}),(0,t.jsxs)("div",{className:"cta-meta",children:[(0,t.jsxs)("span",{className:"cta-meta-item",children:[(0,t.jsx)("span",{className:"cta-meta-dot"}),"Старт программы: 1 июля 2026"]}),(0,t.jsxs)("span",{className:"cta-meta-item",children:[(0,t.jsx)("span",{className:"cta-meta-dot"}),"Количество мест ограничено"]})]})]}),(0,t.jsx)("div",{className:"cta-right",children:d?(0,t.jsxs)("div",{style:{padding:28,borderRadius:6,background:"#F4F6FA",border:"1px solid #E2E6EE"},children:[(0,t.jsx)("h3",{className:"h3",children:"Заявка принята"}),(0,t.jsx)("p",{className:"body",style:{marginTop:8,fontSize:"0.9375rem"},children:"Спасибо! Педагог свяжется с вами в ближайшее время, чтобы подобрать слот."})]}):(0,t.jsxs)("form",{onSubmit:t=>{t.preventDefault(),e&&s&&r&&c&&p(!0)},style:{display:"flex",flexDirection:"column",gap:14},noValidate:!0,children:[(0,t.jsxs)("label",{className:"form-label",children:[(0,t.jsx)("span",{className:"form-label-text",children:"Имя ребёнка"}),(0,t.jsx)("input",{type:"text",className:"form-input",value:e,onChange:e=>l(e.target.value),placeholder:"Например, Артём",required:!0})]}),(0,t.jsxs)("label",{className:"form-label",children:[(0,t.jsx)("span",{className:"form-label-text",children:"Возраст"}),(0,t.jsxs)("select",{className:"form-input",value:s,onChange:e=>i(e.target.value),required:!0,children:[(0,t.jsx)("option",{value:"",children:"Выберите возраст"}),(0,t.jsx)("option",{value:"10",children:"10 лет"}),(0,t.jsx)("option",{value:"11",children:"11 лет"}),(0,t.jsx)("option",{value:"12",children:"12 лет"}),(0,t.jsx)("option",{value:"13",children:"13 лет"}),(0,t.jsx)("option",{value:"14",children:"14 лет"})]})]}),(0,t.jsxs)("label",{className:"form-label",children:[(0,t.jsx)("span",{className:"form-label-text",children:"Телефон родителя"}),(0,t.jsx)("input",{type:"tel",className:"form-input",value:r,onChange:e=>{let t,a,l,s,i,r,c;return n((l=(a=((t=e.target.value.replace(/\D/g,"").slice(0,11)).startsWith("8")?"7"+t.slice(1):t.startsWith("7")?t:"7"+t).slice(1)).slice(0,3),s=a.slice(3,6),i=a.slice(6,8),r=a.slice(8,10),c="+7",l&&(c+=` (${l}`),3===l.length&&(c+=")"),s&&(c+=` ${s}`),i&&(c+=`-${i}`),r&&(c+=`-${r}`),c))},placeholder:"+7 (___) ___-__-__",inputMode:"tel",required:!0})]}),(0,t.jsxs)("label",{className:"form-checkbox",children:[(0,t.jsx)("input",{type:"checkbox",checked:c,onChange:e=>o(e.target.checked)}),(0,t.jsxs)("span",{children:["Согласен с ",(0,t.jsx)("a",{href:"/policy",style:{color:"#1C3F94",textDecoration:"underline"},children:"обработкой персональных данных"})]})]}),(0,t.jsx)("button",{type:"submit",className:"btn-primary",style:{width:"100%",padding:"14px 22px",marginTop:4},children:"Подать заявку"})]})})]})}),(0,t.jsx)("style",{children:`
        .cta-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4px;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid #E2E6EE;
        }
        @media (min-width: 900px) {
          .cta-grid { grid-template-columns: 7fr 5fr; gap: 0; }
        }
        .cta-left {
          background: #1C3F94;
          padding: 36px 28px;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (min-width: 900px) {
          .cta-left { padding: 48px 44px; }
        }
        .cta-right {
          background: #FFFFFF;
          padding: 28px 24px;
        }
        @media (min-width: 900px) {
          .cta-right { padding: 44px 40px; }
        }
        .form-label { display: flex; flex-direction: column; gap: 6px; }
        .form-label-text {
          font-size: 0.8125rem;
          font-weight: 500;
          color: #4A5468;
          letter-spacing: 0.01em;
        }
        .form-checkbox {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.8125rem;
          color: #4A5468;
          line-height: 1.4;
          margin-top: 4px;
        }
        .form-checkbox input { margin-top: 3px; accent-color: #1C3F94; }

        /* Meta info inside navy panel */
        .cta-meta {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .cta-meta-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9375rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.4;
        }
        .cta-meta-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #D62E2E;
          flex-shrink: 0;
        }
      `})]})}])},29604,e=>{"use strict";var t=e.i(99634),a=e.i(41296);e.s(["default",0,function({children:e,delay:l=0,as:s="div",className:i=""}){let r=(0,a.useRef)(null),[n,c]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(!r.current)return;let e=r.current;if("u"<typeof IntersectionObserver)return void c(!0);let t=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&(c(!0),t.unobserve(e))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});return t.observe(e),()=>t.disconnect()},[]),(0,t.jsx)(s,{ref:r,className:`reveal ${n?"is-visible":""} ${i}`.trim(),style:l?{transitionDelay:`${l}ms`}:void 0,children:e})}])}]);