import{r as e,t}from"./react-C1VktWof.js";import{t as n}from"./index-Ck9etSGg.js";import{r}from"./styled-components.browser.esm-BhrFqjok.js";import{i,t as a}from"./api.order-Ja0LpCHB.js";import{a as o}from"./common-CcV5LtAo.js";var s=e(t(),1),c=n();function l(){let[e,t]=(0,s.useState)([]),[n,r]=(0,s.useState)(``),[a,l]=(0,s.useState)({}),[O,k]=(0,s.useState)(!0),[A,j]=(0,s.useState)(!1),[M,N]=(0,s.useState)(!1),[P,F]=(0,s.useState)([]),[I,L]=(0,s.useState)(0),R=o(),z=async()=>{try{k(!0);let e=await i.getBasicList(R.session);t(e);let n={};await Promise.all(e.map(async e=>{try{let t=await i.getStock(R.session,e.id);n[e.id]=t.quantity}catch{n[e.id]=0}})),l(n)}catch(e){console.error(`Failed to load products or stocks:`,e)}finally{k(!1)}};(0,s.useEffect)(()=>{z()},[]);let B=e=>{F(e?U.map(e=>e.id):[])},V=e=>{F(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},H=async t=>{if(P.length===0){alert(`กรุณาเลือกอย่างน้อย 1 รายการ`);return}if(I<=0){alert(`ตัวเลขต้องมากกว่า 0`);return}if(t===`subtract`){let t=[];for(let n of P){let r=a[n]??0;if(r<I){let i=e.find(e=>e.id===n),a=i?i.name:`ID: ${n}`;t.push(`• ${a} (มีอยู่ ${r} ชิ้น)`)}}if(t.length>0){alert(`ไม่สามารถลดสต็อกได้ เนื่องจากสินค้าคงเหลือไม่พอ (${I} ชิ้น):\n\n`+t.join(`
`));return}}let n=R.session;j(!0);try{await Promise.all(P.map(async e=>{let r=a[e]??0,o=t===`add`?I:-I,s=Math.max(0,r+o);await i.updateStock(n,{productId:e,quantity:s}),l(t=>({...t,[e]:s}))})),alert(`อัปเดตสต็อกเรียบร้อยแล้ว`),F([]),L(0)}catch(e){console.error(`Bulk update failed:`,e),alert(`เกิดข้อผิดพลาดในการอัปเดตบางรายการ`)}finally{j(!1)}},U=e.filter(e=>e.name.toLowerCase().includes(n.toLowerCase()));return(0,c.jsxs)(u,{children:[(0,c.jsxs)(d,{children:[(0,c.jsxs)(f,{children:[(0,c.jsx)(`h1`,{children:`Stock Section`}),(0,c.jsx)(p,{$active:M,onClick:()=>{N(!M),F([])},children:M?`Cancel Edit`:`Edit Stock`})]}),M&&(0,c.jsxs)(m,{children:[(0,c.jsxs)(h,{children:[`เลือกอยู่ `,(0,c.jsx)(`span`,{children:P.length}),` รายการ`]}),(0,c.jsxs)(g,{children:[(0,c.jsx)(`label`,{children:`จำนวนที่ต้องการปรับ:`}),(0,c.jsx)(_,{type:`number`,min:`1`,value:I||``,onChange:e=>L(Number(e.target.value)),placeholder:`ระบุตัวเลข...`})]}),(0,c.jsxs)(v,{children:[(0,c.jsx)(y,{$color:`#10b981`,disabled:A||P.length===0,onClick:()=>void H(`add`),children:`+ เพิ่มสต็อก`}),(0,c.jsx)(y,{$color:`#ef4444`,disabled:A||P.length===0,onClick:()=>void H(`subtract`),children:`- ลดสต็อก`})]})]}),(0,c.jsx)(b,{children:(0,c.jsxs)(x,{children:[(0,c.jsx)(`label`,{htmlFor:`search-input`,children:`Search Product :`}),(0,c.jsx)(S,{id:`search-input`,type:`text`,placeholder:`Search...`,value:n,onChange:e=>r(e.target.value)})]})})]}),(0,c.jsx)(C,{children:(0,c.jsxs)(w,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[M&&(0,c.jsx)(`th`,{style:{width:`40px`},children:(0,c.jsx)(`input`,{type:`checkbox`,checked:U.length>0&&P.length===U.length,onChange:e=>B(e.target.checked)})}),(0,c.jsx)(`th`,{children:`ID`}),(0,c.jsx)(`th`,{children:`Name`}),(0,c.jsx)(`th`,{children:`Platform`}),(0,c.jsx)(`th`,{children:`Stock`}),(0,c.jsx)(`th`,{children:`Price`})]})}),(0,c.jsx)(`tbody`,{children:O?(0,c.jsx)(`tr`,{children:(0,c.jsx)(`td`,{colSpan:M?6:5,style:{textAlign:`center`},children:`กำลังโหลดข้อมูล...`})}):U.length===0?(0,c.jsx)(`tr`,{children:(0,c.jsx)(`td`,{colSpan:M?6:5,style:{textAlign:`center`},children:`ไม่พบข้อมูลสินค้า`})}):U.map(e=>{let t=P.includes(e.id);return(0,c.jsxs)(`tr`,{className:t?`selected-row`:``,children:[M&&(0,c.jsx)(`td`,{children:(0,c.jsx)(`input`,{type:`checkbox`,checked:t,onChange:()=>V(e.id)})}),(0,c.jsx)(`td`,{children:e.id}),(0,c.jsx)(`td`,{children:e.name}),(0,c.jsx)(`td`,{children:e.platform}),(0,c.jsx)(`td`,{children:(()=>{let t=a[e.id]??0;return t===0?(0,c.jsx)(T,{children:`Out of Stock`}):(0,c.jsxs)(E,{children:[(0,c.jsx)(`span`,{children:t}),t<10&&(0,c.jsx)(D,{children:`เหลือน้อย`})]})})()}),(0,c.jsx)(`td`,{children:e.price})]},e.id)})})]})})]})}var u=r.div`
  background: #0b1220;
  min-height: 100vh;
  padding: 28px;
  color: #fff;
`,d=r.div`
  margin-bottom: 24px;
`,f=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
    font-size: 2.3rem;
    font-weight: 800;
    color: white;
  }
`,p=r.button`
  padding: 10px 20px;
  background: ${e=>e.$active?`#ef4444`:`#3b82f6`};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`,m=r.div`
  margin-top: 16px;
  padding: 16px;
  background: #1e293b;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid #334155;
  flex-wrap: wrap;
`,h=r.div`
  font-size: 14px;
  color: #94a3b8;

  span {
    color: #3b82f6;
    font-weight: bold;
    font-size: 16px;
  }
`,g=r.div`
  display: flex;
  align-items: center;
  gap: 10px;

  label {
    font-size: 14px;
    color: #cbd5e1;
  }
`,_=r.input`
  width: 120px;
  padding: 8px 12px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 6px;
  color: white;
  outline: none;

  &:focus {
    border-color: #3b82f6;
  }
`,v=r.div`
  display: flex;
  gap: 10px;
`,y=r.button`
  padding: 8px 16px;
  background: ${e=>e.$color};
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,b=r.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`,x=r.div`
  flex: 1;
`,S=r.input`
  width: 100%;
  padding: 14px 18px;
  background: #111827;
  color: white;
  border: 1px solid #334155;
  border-radius: 10px;
  font-size: 15px;
  outline: none;

  &:focus {
    border-color: #3b82f6;
  }

  &::placeholder {
    color: #64748b;
  }
`,C=r.div`
  background: #111827;
  border: 1px solid #1e293b;
  border-radius: 16px;
  overflow: hidden;
`,w=r.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background: #0f172a;
  }

  th {
    color: #94a3b8;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 18px;
    border-bottom: 1px solid #1e293b;
    text-align: left;
  }

  td {
    padding: 18px;
    color: white;
    border-bottom: 1px solid #1e293b;
    vertical-align: middle;
  }

  tbody tr:hover {
    background: #1e293b;
  }

  tbody tr.selected-row {
    background: rgba(59, 130, 246, 0.1);
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`,T=r.span`
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(239, 68, 68, 0.2);
  display: inline-block;
`,E=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,D=r.span`
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(245, 158, 11, 0.25);
  display: inline-block;
`;function O(){let[e,t]=(0,s.useState)([]),[n,r]=(0,s.useState)(!0),[l,u]=(0,s.useState)(null),[d,f]=(0,s.useState)(``),[p,m]=(0,s.useState)(`All`),[h,g]=(0,s.useState)(null),_=o(),v=e=>{switch(e){case 1:return`รอดำเนินการ`;case 2:return`จัดส่งแล้ว`;case 0:return`ยกเลิก`;default:return`กำลังจัดส่ง`}},y=[`All`,`รอดำเนินการ`,`กำลังจัดส่ง`,`จัดส่งแล้ว`,`ยกเลิก`],b=async()=>{try{r(!0),u(null);let e=_.session,n=await a.getBasicList(e),o=await Promise.all(n.map(async t=>{let n=await Promise.all(t.item.map(async t=>{try{let n=await i.getBasic(e,t.productId);return{productId:t.productId,name:n.name,price:n.price,quantity:t.quantity}}catch{return{productId:t.productId,name:`สินค้า ID: ${t.productId}`,price:0,quantity:t.quantity}}}));return{id:t.orderId,orderDate:new Date(t.created),deliveryDate:t.delivered?new Date(t.delivered):null,status:t.status,items:n,shipName:t.shipName,shipAddress:t.shipAddress,shipPhone:t.shipPhone,shipEmail:t.shipEmail}}));t(o)}catch(e){console.error(`Failed to load orders:`,e),u(e.message||`เกิดข้อผิดพลาดในการดึงข้อมูลคำสั่งซื้อ`)}finally{r(!1)}};(0,s.useEffect)(()=>{b()},[]);let x=e.find(e=>e.id===h)||null,S=e.filter(e=>{let t=v(e.status);return(`ORD${String(e.id).padStart(3,`0`)}`.toLowerCase().includes(d.toLowerCase())||e.items.some(e=>e.name.toLowerCase().includes(d.toLowerCase()))||e.shipName.toLowerCase().includes(d.toLowerCase()))&&(p===`All`||t===p)}),C=e=>e.reduce((e,t)=>e+t.quantity,0),w=e=>e.reduce((e,t)=>e+t.price*t.quantity,0),T=async(e,n)=>{try{let r=_.session,i=n===2?new Date:null;await a.updateBasic(r,{orderId:e,status:n,delivered:i}),t(t=>t.map(t=>t.id===e?{...t,status:n,deliveryDate:i}:t))}catch(e){console.error(`Failed to update status:`,e),alert(e.message||`เกิดข้อผิดพลาดในการอัปเดตสถานะ`)}},E=e=>{switch(e){case`จัดส่งแล้ว`:return{bg:`#d4edda`,text:`#155724`};case`กำลังจัดส่ง`:return{bg:`#cce5ff`,text:`#004085`};case`รอดำเนินการ`:return{bg:`#fff3cd`,text:`#856404`};case`ยกเลิก`:return{bg:`#f8d7da`,text:`#721c24`};default:return{bg:`#e2e8f0`,text:`#334155`}}},D=e=>{if(!e)return`-`;let t=new Date(e);return isNaN(t.getTime())?`-`:t.toISOString().split(`T`)[0]};return(0,c.jsxs)(k,{children:[(0,c.jsxs)(A,{children:[(0,c.jsx)(`h1`,{style:{color:`var(--text-primary, #ffffff)`},children:`Order Section`}),(0,c.jsxs)(j,{children:[(0,c.jsxs)(M,{children:[(0,c.jsx)(`label`,{htmlFor:`search-input`,children:`Search Order: `}),(0,c.jsx)(N,{id:`search-input`,type:`text`,placeholder:`ค้นหา ID, ชื่อผู้รับ หรือ ชื่อสินค้า...`,value:d,onChange:e=>f(e.target.value)})]}),(0,c.jsxs)(P,{children:[(0,c.jsx)(`label`,{htmlFor:`status-select`,children:`Filter by Status: `}),(0,c.jsx)(F,{id:`status-select`,value:p,onChange:e=>m(e.target.value),children:y.map(e=>(0,c.jsx)(`option`,{value:e,children:e},e))})]})]})]}),(0,c.jsx)(I,{children:(0,c.jsxs)(L,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Order ID`}),(0,c.jsx)(`th`,{children:`วันที่สั่ง`}),(0,c.jsx)(`th`,{children:`วันที่ส่งถึง`}),(0,c.jsx)(`th`,{style:{textAlign:`center`},children:`สถานะ`})]})}),(0,c.jsx)(`tbody`,{children:n?(0,c.jsx)(`tr`,{children:(0,c.jsx)(`td`,{colSpan:4,style:{textAlign:`center`,padding:`2rem`},children:`กำลังโหลดข้อมูลคำสั่งซื้อ...`})}):l?(0,c.jsx)(`tr`,{children:(0,c.jsx)(`td`,{colSpan:4,style:{textAlign:`center`,padding:`2rem`,color:`#ef4444`},children:l})}):S.length===0?(0,c.jsx)(`tr`,{children:(0,c.jsx)(`td`,{colSpan:4,style:{textAlign:`center`,padding:`2rem`},children:`ไม่พบข้อมูลคำสั่งซื้อในระบบ`})}):S.map(e=>{let t=v(e.status),n=E(t);return(0,c.jsxs)(`tr`,{onClick:()=>g(e.id),children:[(0,c.jsxs)(`td`,{children:[`ORD`,String(e.id).padStart(3,`0`)]}),(0,c.jsx)(`td`,{children:D(e.orderDate)}),(0,c.jsx)(`td`,{children:D(e.deliveryDate)}),(0,c.jsx)(`td`,{style:{textAlign:`center`},children:(0,c.jsx)(R,{bg:n.bg,color:n.text,children:t})})]},e.id)})})]})}),x&&(0,c.jsx)(z,{onClick:()=>g(null),children:(0,c.jsxs)(B,{onClick:e=>e.stopPropagation(),children:[(0,c.jsxs)(V,{children:[(0,c.jsxs)(`h2`,{children:[`Order Details (ORD`,String(x.id).padStart(3,`0`),`)`]}),(0,c.jsx)(H,{onClick:()=>g(null),children:`×`})]}),(0,c.jsxs)(U,{children:[(0,c.jsxs)(W,{children:[(0,c.jsx)(`span`,{className:`label`,children:`Order ID:`}),(0,c.jsx)(`span`,{className:`value`,children:(0,c.jsxs)(`strong`,{children:[`ORD`,String(x.id).padStart(3,`0`)]})})]}),(0,c.jsxs)(G,{children:[(0,c.jsx)(`div`,{className:`section-title`,children:`ข้อมูลการจัดส่ง`}),(0,c.jsxs)(`div`,{className:`info-row`,children:[(0,c.jsx)(`span`,{className:`info-label`,children:`ชื่อผู้รับ:`}),(0,c.jsx)(`span`,{className:`info-value`,children:x.shipName||`-`})]}),(0,c.jsxs)(`div`,{className:`info-row`,children:[(0,c.jsx)(`span`,{className:`info-label`,children:`ที่อยู่:`}),(0,c.jsx)(`span`,{className:`info-value`,children:x.shipAddress||`-`})]}),(0,c.jsxs)(`div`,{className:`info-row`,children:[(0,c.jsx)(`span`,{className:`info-label`,children:`เบอร์โทรศัพท์:`}),(0,c.jsx)(`span`,{className:`info-value`,children:x.shipPhone||`-`})]}),(0,c.jsxs)(`div`,{className:`info-row`,children:[(0,c.jsx)(`span`,{className:`info-label`,children:`อีเมล:`}),(0,c.jsx)(`span`,{className:`info-value`,children:x.shipEmail||`-`})]})]}),(0,c.jsxs)(W,{children:[(0,c.jsx)(`span`,{className:`label`,children:`จำนวนสินค้าทั้งหมด:`}),(0,c.jsxs)(`span`,{className:`value`,children:[C(x.items),` ชิ้น`]})]}),(0,c.jsxs)(K,{children:[(0,c.jsx)(`div`,{className:`list-title`,children:`List สินค้าและราคา:`}),x.items.map((e,t)=>(0,c.jsxs)(q,{children:[(0,c.jsxs)(`span`,{className:`p-name`,children:[e.name,` (x`,e.quantity,`)`]}),(0,c.jsxs)(`span`,{className:`p-price`,children:[`฿`,(e.price*e.quantity).toLocaleString()]})]},e.productId||t))]}),(0,c.jsxs)(W,{className:`highlight-row`,children:[(0,c.jsx)(`span`,{className:`label`,children:`ราคารวม:`}),(0,c.jsxs)(`span`,{className:`value total-price`,children:[`฿`,w(x.items).toLocaleString()]})]}),(0,c.jsxs)(W,{children:[(0,c.jsx)(`span`,{className:`label`,children:`วันที่สั่ง:`}),(0,c.jsx)(`span`,{className:`value`,children:D(x.orderDate)})]}),(0,c.jsxs)(W,{children:[(0,c.jsx)(`span`,{className:`label`,children:`วันที่ส่งถึง:`}),(0,c.jsx)(`span`,{className:`value`,children:D(x.deliveryDate)})]}),(0,c.jsxs)(J,{children:[(0,c.jsx)(`span`,{className:`label`,children:`สถานะ:`}),(0,c.jsxs)(Y,{children:[x.status===1&&(0,c.jsx)(X,{onClick:()=>T(x.id,2),children:`ยืนยันการจัดส่ง`}),(0,c.jsx)(R,{bg:E(v(x.status)).bg,color:E(v(x.status)).text,children:v(x.status)})]})]})]}),(0,c.jsx)(Z,{onClick:()=>g(null),children:`ปิดหน้าต่าง`})]})})]})}var k=r.div`
  background: #0b1220;
  min-height: 100vh;
  padding: 28px;
  color: #fff;
`,A=r.div`
  margin-bottom: 24px;
`,j=r.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`,M=r.div`
  flex: 1;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    color: #cbd5e1;
  }
`,N=r.input`
  width: 100%;
  padding: 14px 18px;
  background: #111827;
  color: white;
  border: 1px solid #334155;
  border-radius: 10px;
  font-size: 15px;
  outline: none;

  &:focus {
    border-color: #3b82f6;
  }

  &::placeholder {
    color: #64748b;
  }
`,P=r.div`
  width: 240px;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    color: #cbd5e1;
  }
`,F=r.select`
  width: 100%;
  padding: 14px 18px;
  background: #111827;
  color: white;
  border: 1px solid #334155;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: #3b82f6;
  }

  option {
    background: #111827;
    color: white;
  }
`,I=r.div`
  background: #111827;
  border: 1px solid #1e293b;
  border-radius: 16px;
  overflow: hidden;
`,L=r.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background: #0f172a;
  }

  th {
    color: #94a3b8;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 18px;
    border-bottom: 1px solid #1e293b;
    text-align: left;
  }

  td {
    padding: 18px;
    color: white;
    border-bottom: 1px solid #1e293b;
    vertical-align: middle;
  }

  tbody tr {
    transition: background 0.2s ease;
    cursor: pointer;
  }

  tbody tr:hover {
    background: #1e293b;
  }
`,R=r.span`
  background: ${e=>e.bg};
  color: ${e=>e.color};
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  display: inline-block;
`,z=r.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,B=r.div`
  width: 100%;
  max-width: 560px;
  max-height: 90vh;
  overflow-y: auto;
  background: #111827;
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 24px;
  color: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);

  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      transform: translateY(-12px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,V=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  margin-bottom: 20px;
  border-bottom: 1px solid #334155;

  h2 {
    margin: 0;
    font-size: 22px;
    color: white;
  }
`,H=r.button`
  background: transparent;
  border: none;
  color: #94a3b8;
  font-size: 28px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: white;
  }
`,U=r.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,W=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    color: #94a3b8;
    font-size: 14px;
  }

  .value {
    color: white;
    font-weight: 600;
  }

  .total-price {
    color: #3b82f6;
    font-size: 18px;
    font-weight: 700;
  }

  &.highlight-row {
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 10px;
    padding: 12px 14px;
  }
`,G=r.div`
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 10px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .section-title {
    color: #3b82f6;
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
  }

  .info-label {
    color: #94a3b8;
    font-size: 13px;
    min-width: 90px;
  }

  .info-value {
    color: #e2e8f0;
    font-size: 13px;
    font-weight: 500;
    text-align: right;
    word-break: break-word;
  }
`,K=r.div`
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 10px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .list-title {
    color: white;
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 6px;
  }
`,q=r.div`
  display: flex;
  justify-content: space-between;

  .p-name {
    color: #e2e8f0;
  }

  .p-price {
    color: white;
    font-weight: 600;
  }
`,J=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;

  .label {
    color: #94a3b8;
    font-size: 14px;
  }
`,Y=r.div`
  display: flex;
  align-items: center;
  gap: 10px;

  select {
    padding: 10px 16px;
    border-radius: 8px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    outline: none;
  }
`,X=r.button`
  background: #22c55e;
  color: white;
  border: none;
  padding: 9px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #16a34a;
  }
`,Z=r.button`
  width: 100%;
  margin-top: 24px;
  padding: 12px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;export{l as n,O as t};