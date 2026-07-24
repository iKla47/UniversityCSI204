import{r as e,t}from"./react-C1VktWof.js";import{t as n}from"./index-Ck9etSGg.js";import{r}from"./styled-components.browser.esm-BhrFqjok.js";import{t as i}from"./createLucideIcon-AHYuUPOs.js";import{a,i as o,n as s,r as c,t as l}from"./map-pin-DKKQi2j6.js";import{t as u}from"./truck-b_tbH1bG.js";import{i as d,n as f}from"./api.order-Ja0LpCHB.js";import{a as p}from"./common-CcV5LtAo.js";var m=i(`box`,[[`path`,{d:`M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z`,key:`hh9hay`}],[`path`,{d:`m3.3 7 8.7 5 8.7-5`,key:`g66t2b`}],[`path`,{d:`M12 22V12`,key:`d0xqtd`}]]),h=i(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),g=i(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),_=i(`hash`,[[`line`,{x1:`4`,x2:`20`,y1:`9`,y2:`9`,key:`4lhtct`}],[`line`,{x1:`4`,x2:`20`,y1:`15`,y2:`15`,key:`vyu0kd`}],[`line`,{x1:`10`,x2:`8`,y1:`3`,y2:`21`,key:`1ggp8o`}],[`line`,{x1:`16`,x2:`14`,y1:`3`,y2:`21`,key:`weycgp`}]]),v=i(`history`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}],[`path`,{d:`M12 7v5l4 2`,key:`1fdv2h`}]]),y=i(`package-x`,[[`path`,{d:`M12 22V12`,key:`d0xqtd`}],[`path`,{d:`m16.5 14.5 5 5`,key:`ozpm51`}],[`path`,{d:`m16.5 19.5 5-5`,key:`syf6b9`}],[`path`,{d:`M21 10.5V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.13-.074`,key:`isw6gs`}],[`path`,{d:`M3.29 7 12 12l8.71-5`,key:`19ckod`}],[`path`,{d:`m7.5 4.27 8.997 5.148`,key:`9yrvtv`}]]),b=e(t(),1),x=n(),S=({order:e})=>{let[t,n]=(0,b.useState)(!1),r=e.items.length>1,i=E(e.status),a=(0,b.useMemo)(()=>e.items.reduce((e,t)=>e+t.price*t.quantity,0),[e.items]),o=(0,b.useMemo)(()=>{if(e.items.length===0)return`ไม่มีรายการสินค้า`;let t=e.items[0].name;return r?`${t} และอีก ${String(e.items.length-1)} รายการ`:t},[e.items,r]);return(0,x.jsx)(R,{children:(0,x.jsxs)(z,{children:[(0,x.jsxs)(B,{children:[(0,x.jsxs)(V,{children:[(0,x.jsx)(_,{size:14}),(0,x.jsxs)(`span`,{children:[`ORD`,String(e.id).padStart(3,`0`)]})]}),(0,x.jsxs)(H,{$bg:i.bg,$color:i.text,children:[i.icon,(0,x.jsx)(`span`,{children:i.label})]})]}),(0,x.jsxs)(U,{onClick:()=>{r&&n(e=>!e)},$isClickable:r,children:[(0,x.jsx)(W,{children:o}),r&&(0,x.jsxs)(G,{type:`button`,children:[(0,x.jsx)(`span`,{children:t?`ซ่อนรายละเอียด`:`ดูรายการทั้งหมด`}),t?(0,x.jsx)(g,{size:16}):(0,x.jsx)(h,{size:16})]})]}),(t||!r)&&e.items.length>0&&(0,x.jsx)(K,{children:e.items.map((e,t)=>(0,x.jsxs)(q,{children:[(0,x.jsxs)(`span`,{className:`p-name`,children:[e.name,` `,(0,x.jsxs)(J,{children:[`x`,e.quantity]})]}),(0,x.jsx)(`span`,{className:`p-price`,children:w(e.price*e.quantity)})]},e.productId||t))}),(0,x.jsxs)(Y,{children:[(0,x.jsxs)(X,{children:[(0,x.jsx)(u,{size:16}),(0,x.jsxs)(`span`,{children:[`วันจัดส่ง: `,(0,x.jsx)(`strong`,{children:T(e.deliveryDate)})]}),(0,x.jsx)(`br`,{}),(0,x.jsx)(l,{size:16}),(0,x.jsxs)(`span`,{children:[`ที่จัดส่ง: `,(0,x.jsx)(`strong`,{children:e.address})]})]}),(0,x.jsxs)(Z,{children:[(0,x.jsx)(Q,{children:`ยอดรวมสุทธิ`}),(0,x.jsx)($,{children:w(a)})]})]})]})})};function C(){let[e,t]=(0,b.useState)([]),[n,r]=(0,b.useState)(!0),[i,o]=(0,b.useState)(null),l=p();(0,b.useEffect)(()=>{(async()=>{try{r(!0),o(null);let e=l.session,[n,i]=await Promise.all([f.getOrder(e).catch(e=>(console.error(`Order API Error:`,e),[])),d.getBasicList(e).catch(e=>(console.error(`Product API Error:`,e),[]))]),a=new Map;Array.isArray(i)&&i.forEach(e=>a.set(e.id,e));let s=n.map(e=>{let t=e.item.map(e=>{let t=a.get(e.productId);return{productId:e.productId,name:t?t.name:`สินค้า ID: ${String(e.productId)}`,price:t?t.price:0,quantity:e.quantity}});return{id:e.orderId,orderDate:new Date(e.created),deliveryDate:e.delivered?new Date(e.delivered):null,status:e.status,items:t,address:e.shipAddress}});t(s)}catch(e){console.error(`Failed to load orders:`,e),o(`เกิดข้อผิดพลาดในการดึงข้อมูลคำสั่งซื้อ`)}finally{r(!1)}})()},[l.session]);let{activeOrders:u,pastOrders:h}=(0,b.useMemo)(()=>({activeOrders:e.filter(e=>e.status===1||e.status===3),pastOrders:e.filter(e=>e.status===2||e.status===0||e.status===4)}),[e]);return n?(0,x.jsx)(D,{children:(0,x.jsxs)(L,{children:[(0,x.jsx)(s,{className:`spin`,size:36}),(0,x.jsx)(`p`,{children:`กำลังโหลดข้อมูลคำสั่งซื้อ...`})]})}):i?(0,x.jsx)(D,{children:(0,x.jsxs)(I,{style:{color:`#ef4444`},children:[(0,x.jsx)(a,{size:32}),(0,x.jsx)(`p`,{children:i})]})}):(0,x.jsx)(D,{children:(0,x.jsx)(O,{children:(0,x.jsx)(k,{children:(0,x.jsxs)(A,{children:[(0,x.jsxs)(j,{children:[(0,x.jsx)(M,{children:`ประวัติคำสั่งซื้อ`}),(0,x.jsx)(N,{children:`ติดตามสถานะคำสั่งซื้อและเรียกดูประวัติการสั่งซื้อของคุณ`})]}),(0,x.jsxs)(P,{children:[(0,x.jsx)(m,{size:20}),(0,x.jsxs)(`span`,{children:[`กำลังดำเนินการ (`,u.length,`)`]})]}),(0,x.jsx)(F,{children:u.length===0?(0,x.jsxs)(I,{children:[(0,x.jsx)(c,{size:32,color:`#64748b`}),(0,x.jsx)(`p`,{children:`ไม่มีคำสั่งซื้อที่อยู่ระหว่างดำเนินการ`})]}):u.map(e=>(0,x.jsx)(S,{order:e},e.id))}),(0,x.jsxs)(P,{children:[(0,x.jsx)(v,{size:20}),(0,x.jsxs)(`span`,{children:[`ประวัติย้อนหลัง (`,h.length,`)`]})]}),(0,x.jsx)(F,{children:h.length===0?(0,x.jsxs)(I,{children:[(0,x.jsx)(y,{size:32,color:`#64748b`}),(0,x.jsx)(`p`,{children:`ไม่มีประวัติคำสั่งซื้อย้อนหลัง`})]}):h.map(e=>(0,x.jsx)(S,{order:e},e.id))})]})})})})}function w(e){return new Intl.NumberFormat(`th-TH`,{style:`currency`,currency:`THB`,minimumFractionDigits:2}).format(e)}function T(e){if(!e)return`อยู่ระหว่างจัดเตรียม`;let t=new Date(e);return isNaN(t.getTime())?`อยู่ระหว่างจัดเตรียม`:t.toLocaleDateString(`th-TH`,{day:`2-digit`,month:`short`,year:`numeric`})}function E(e){switch(e){case 1:return{label:`รอดำเนินการ`,icon:(0,x.jsx)(c,{size:13}),bg:`#cce5ff`,text:`#004085`};case 2:return{label:`จัดส่งสำเร็จแล้ว`,icon:(0,x.jsx)(o,{size:13}),bg:`#d4edda`,text:`#155724`};case 3:return{label:`ล่าช้า`,icon:(0,x.jsx)(a,{size:13}),bg:`#fff3cd`,text:`#856404`};case 0:case 4:return{label:`ยกเลิกแล้ว`,icon:(0,x.jsx)(y,{size:13}),bg:`#f8d7da`,text:`#721c24`};default:return{label:`รอดำเนินการ`,icon:(0,x.jsx)(c,{size:13}),bg:`#e2e8f0`,text:`#334155`}}}var D=r.div`
  background: #0b1220;
  min-height: 100vh;
  padding: 24px 0 64px 0;
  color: #ffffff;
  margin-top: 48px;
`,O=r.div`
  width: 100%;
`,k=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,A=r.div`
  max-width: 720px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`,j=r.div`
  margin-bottom: 28px;
`,M=r.h1`
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 8px 0;
  color: #ffffff;
`,N=r.p`
  font-size: 0.95rem;
  color: #94a3b8;
  margin: 0;
`,P=r.h2`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 32px 0 16px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #38bdf8;
`,F=r.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,I=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background: #111827;
  border: 1px dashed #334155;
  border-radius: 12px;
  color: #94a3b8;
  font-size: 0.95rem;
  gap: 10px;

  p {
    margin: 0;
  }
`,L=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  color: #38bdf8;
  gap: 16px;

  .spin {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  p {
    color: #94a3b8;
    margin: 0;
  }
`,R=r.div`
  background: #111827;
  border-radius: 16px;
  border: 1px solid #1e293b;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: #334155;
  }
`,z=r.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,B=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,V=r.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.85rem;
  font-family: monospace;
  font-weight: 600;
  color: #94a3b8;
`,H=r.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  background-color: ${e=>e.$bg};
  color: ${e=>e.$color};
`,U=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: ${e=>e.$isClickable?`pointer`:`default`};
  user-select: none;
`,W=r.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: #f8fafc;
  margin: 0;
`,G=r.button`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #38bdf8;
  font-size: 0.85rem;
  font-weight: 600;
`,K=r.div`
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 10px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,q=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;

  .p-name {
    color: #e2e8f0;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .p-price {
    color: #ffffff;
    font-weight: 600;
  }
`,J=r.span`
  font-size: 0.75rem;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.15);
  padding: 1px 6px;
  border-radius: 4px;
  font-weight: 600;
`,Y=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px dashed #334155;
`,X=r.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.825rem;
  color: #94a3b8;

  strong {
    color: #f8fafc;
  }
`,Z=r.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`,Q=r.span`
  font-size: 0.8rem;
  color: #94a3b8;
`,$=r.span`
  font-size: 1.25rem;
  font-weight: 800;
  color: #3b82f6;
`;export{C as default};