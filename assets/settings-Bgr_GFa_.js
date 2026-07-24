import{r as e,t}from"./react-C1VktWof.js";import{t as n}from"./index-Ck9etSGg.js";import{r}from"./styled-components.browser.esm-BhrFqjok.js";import{t as i}from"./createLucideIcon-AHYuUPOs.js";import{t as a}from"./circle-user-bdA1tqbP.js";import{t as o}from"./user-lock-Cisi-UFr.js";import{t as s}from"./user-DE1zXFWB.js";import{t as c}from"./x-CbaDagQ9.js";import{n as l}from"./api.order-Ja0LpCHB.js";import{a as u}from"./common-CcV5LtAo.js";import{a as d,g as f,r as p}from"./customer-Dw5Nd6pM.js";import{m,p as h,v as g,y as _}from"./common.ui-xMs2_JMV.js";import{t as v}from"./menu.bar-BR8uEjd1.js";var y=i(`circle-arrow-left`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m12 8-4 4 4 4`,key:`15vm53`}],[`path`,{d:`M16 12H8`,key:`1fr5h0`}]]),b=i(`container`,[[`path`,{d:`M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z`,key:`1t2lqe`}],[`path`,{d:`M10 21.9V14L2.1 9.1`,key:`o7czzq`}],[`path`,{d:`m10 14 11.9-6.9`,key:`zm5e20`}],[`path`,{d:`M14 19.8v-8.1`,key:`159ecu`}],[`path`,{d:`M18 17.5V9.4`,key:`11uown`}]]),x=e(t(),1),S=n(),C=function(e){return(0,S.jsx)(C.Root,{visible:e.visible,transparent:e.transparent,width:e.width,widthMax:e.widthMax,height:e.height,heightMax:e.heightMax})};C.Root=function(e){let t=`256px`,n=x.useRef(HTMLDivElement.prototype),r=(0,x.useCallback)(()=>n.current instanceof HTMLDivElement&&n.current!=HTMLDivElement.prototype?n.current.clientWidth>=768?t:`100%`:window.innerWidth>=768?t:`100%`,[n]),i=e.visible??!1,[a,o]=(0,x.useState)(C.CONTENT_GENERAL),[s,l]=(0,x.useState)(r()),[u,d]=(0,x.useState)(!1),f=t=>{t.preventDefault(),t.stopPropagation(),e.onClose&&e.onClose()},p=()=>{d(!1)},m=(0,x.useCallback)(()=>{l(r())},[r]);return(0,x.useEffect)(()=>(window.addEventListener(`resize`,m),()=>{window.removeEventListener(`resize`,m)}),[m]),(0,S.jsx)(x.Activity,{mode:i?`visible`:`hidden`,children:(0,S.jsxs)(C.View,{transparent:e.transparent,width:e.width,widthMax:e.widthMax,height:e.height,heightMax:e.heightMax,container:n,children:[(0,S.jsx)(C.Menu,{visible:s===t?!0:!u,width:`100%`,widthMax:s,content:[a,e=>{o(e),d(!0)}]}),(0,S.jsx)(C.Content,{visible:s===t?!0:u,content:a,onBack:s===t?void 0:p}),(0,S.jsx)(T,{$visible:!!e.onClose,onClick:f,children:(0,S.jsx)(c,{})})]})})},C.View=function(e){let t=e.transparent??!0,n=e.width??`100%`,r=e.widthMax??`1024px`,i=e.height??`100%`,a=e.heightMax??`512px`;return(0,S.jsx)(w,{ref:e.container,$transparent:t,$width:n,$widthMax:r,$height:i,$heightMax:a,children:e.children})},C.Menu=function(e){return(0,S.jsxs)(v,{visible:e.visible??!0,direction:`column`,width:e.width??`100%`,widthMax:e.widthMax??`256px`,height:`100%`,align:`start`,selected:1,margin:e.widthMax==`100%`?`0px`:`0px 32px 0px 0px`,onClick:t=>{e.content&&e.content[1](t)},children:[(0,S.jsx)(v.Heading,{text:`การตั้งค่า`}),(0,S.jsx)(v.Item,{value:C.CONTENT_GENERAL,text:`ทั่วไป`,icon:(0,S.jsx)(s,{})}),(0,S.jsx)(v.Item,{value:C.CONTENT_SECURITY,text:`ความปลอดภัย`,icon:(0,S.jsx)(o,{})}),(0,S.jsx)(v.Item,{value:C.CONTENT_SHIPPING,text:`การจัดส่ง`,icon:(0,S.jsx)(b,{})})]})},C.Content=function(e){let t=e.visible??!0,n=e.content??0,r=t&&n===C.CONTENT_GENERAL,i=t&&n===C.CONTENT_SECURITY,a=t&&n===C.CONTENT_SHIPPING,o=t&&n===C.CONTENT_PAYMENT,s=e.onBack;return(0,S.jsxs)(E,{children:[(0,S.jsx)(C.ContentGeneral,{visible:r,onBack:s}),(0,S.jsx)(C.ContentSecurity,{visible:i,onBack:s}),(0,S.jsx)(C.ContentShipping,{visible:a,onBack:s}),(0,S.jsx)(C.ContentPayment,{visible:o,onBack:s})]})},C.ContentGeneral=function(e){let t=u(),n=_(),r=(0,x.useRef)(HTMLInputElement.prototype),[i]=h(),[o]=m(),[s,c]=(0,x.useState)(!1),g=p(),v=d(),y=e=>{e.preventDefault(),e.stopPropagation(),r.current instanceof HTMLInputElement&&r.current!=HTMLInputElement.prototype&&r.current.click()},b=e=>{if(e.preventDefault(),e.stopPropagation(),c(!0),!e.target.files)return;let r=e.target.files[0];l.updateBasic(t.session,{icon:r}).then(()=>g.refetch()).then(()=>{n.setText(`เปลี่ยนรูปโปรไฟล์ใหม่เรียบร้อย`),n.setDuration(5e3),n.setVisible(!0),c(!1)}).catch(()=>{i.reset(),i.setTitle(`เกิดข้อผิดพลาด`),i.setMessage(`เกิดข้อผิดพลาดในการเปลี่ยนรูปโปรไฟล์ กรุณาลองใหม่อีกครั้ง`),i.setPrimary(`เข้าใจแล้ว`,()=>{i.setVisible(!1)}),i.setVisible(!0),c(!1)})},w=e=>{e.preventDefault(),e.stopPropagation(),o.reset(),o.setTitle(`เปลี่ยนชื่อ`),o.setMessage(`โปรดป้อนชื่อใหม่ของคุณ`),o.setPrimary(`เรียบร้อย`,e=>{o.setVisible(!1),l.updateBasic(t.session,{name:e}).then(()=>g.refetch()).then(()=>{n.setText(`เปลี่ยนชื่อใหม่เรียบร้อย`),n.setDuration(5e3),n.setVisible(!0),c(!1)}).catch(()=>{i.reset(),i.setTitle(`เกิดข้อผิดพลาด`),i.setMessage(`เกิดข้อผิดพลาดในการเปลี่ยนชื่อของคุณ กรุณาลองใหม่อีกครั้ง`),i.setPrimary(`เข้าใจแล้ว`,()=>{i.setVisible(!1)}),i.setVisible(!0),c(!1)})}),o.setSecondary(`ยกเลิก`,()=>{o.setVisible(!1)}),o.setVisible(!0)},T=e=>{e.preventDefault(),e.stopPropagation(),o.reset(),o.setTitle(`เปลี่ยนอีเมล`),o.setMessage(`โปรดป้อนอีเมลใหม่ของคุณ`),o.setPrimary(`เรียบร้อย`,e=>{o.setVisible(!1),l.updateContact(t.session,{email:e}).then(()=>v.refetch()).then(()=>{n.setText(`เปลี่ยนอีเมลเรียบร้อย`),n.setDuration(5e3),n.setVisible(!0),c(!1)}).catch(()=>{i.reset(),i.setTitle(`เกิดข้อผิดพลาด`),i.setMessage(`เกิดข้อผิดพลาดในการเปลี่ยนอีเมลของคุณ กรุณาลองใหม่อีกครั้ง`),i.setPrimary(`เข้าใจแล้ว`,()=>{i.setVisible(!1)}),i.setVisible(!0),c(!1)})}),o.setSecondary(`ยกเลิก`,()=>{o.setVisible(!1)}),o.setVisible(!0)},E=g.data,D=v.data,j=E?f.getUrlStream(E.icon):``,N=E?E.name:``,P=D?D.email:``;return(0,S.jsxs)(x.Activity,{mode:e.visible?`visible`:`hidden`,children:[(0,S.jsx)(`input`,{disabled:s,type:`file`,style:{display:`none`},ref:r,onChange:b,accept:`image/png, image/jpeg`,multiple:!1}),(0,S.jsx)(C.TemplateBackButton,{visible:e.onBack!=null,onClick:e.onBack}),(0,S.jsx)(A,{children:`ข้อมูลบัญชี`}),(0,S.jsxs)(O,{children:[j.length>0?(0,S.jsx)(`img`,{src:j}):(0,S.jsx)(a,{}),(0,S.jsx)(k,{children:(0,S.jsx)(`button`,{disabled:s,onClick:y,children:`เปลี่ยนรูป`})})]}),(0,S.jsxs)(M,{children:[(0,S.jsx)(`div`,{children:(0,S.jsx)(`label`,{children:`ชื่อผู้ใช้`})}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`label`,{children:N}),(0,S.jsx)(`button`,{disabled:s,onClick:w,children:`เปลี่ยนชื่อ`})]})]}),(0,S.jsxs)(M,{children:[(0,S.jsx)(`div`,{children:(0,S.jsx)(`label`,{children:`อีเมล`})}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`label`,{children:P}),(0,S.jsx)(`button`,{disabled:s,onClick:T,children:P.length>0?`เปลี่ยนอีเมล`:`เพิ่มอีเมล`})]})]})]})},C.ContentSecurity=function(e){return(0,S.jsxs)(x.Activity,{mode:e.visible?`visible`:`hidden`,children:[(0,S.jsx)(C.TemplateBackButton,{visible:e.onBack!=null,onClick:e.onBack}),(0,S.jsx)(A,{children:`ความปลอดภัย`}),(0,S.jsxs)(M,{children:[(0,S.jsx)(`div`,{children:(0,S.jsx)(`label`,{children:`รหัสผ่าน`})}),(0,S.jsx)(`div`,{children:(0,S.jsx)(`button`,{children:`เปลี่ยน`})})]}),(0,S.jsxs)(M,{children:[(0,S.jsx)(`div`,{children:(0,S.jsx)(`label`,{children:`ยืนยันสองชั้นด้วย รหัสผ่านใช้ครั้งเดียวแบบกำหนดเวลา`})}),(0,S.jsx)(`div`,{children:(0,S.jsx)(`button`,{children:`เปิด`})})]}),(0,S.jsxs)(M,{children:[(0,S.jsx)(`div`,{children:(0,S.jsx)(`label`,{children:`ยืนยันสองชั้นด้วย อีเมล`})}),(0,S.jsx)(`div`,{children:(0,S.jsx)(`button`,{children:`เปิด`})})]})]})},C.ContentShipping=function(e){let t=d(),n=t.data,r=u(),[i]=h(),[a]=m(),o=_(),s=n?n.address:``,c=n?n.name:``,f=n?n.phone:``;return(0,S.jsxs)(x.Activity,{mode:e.visible?`visible`:`hidden`,children:[(0,S.jsx)(C.TemplateBackButton,{visible:e.onBack!=null,onClick:e.onBack}),(0,S.jsx)(A,{children:`การจัดส่ง`}),(0,S.jsx)(`p`,{style:{padding:`16px`,backgroundColor:`var(--bg-secondary)`,borderRadius:`4px`,marginBottom:`8px`},children:`ชุดข้อมูลนี้จะเป็นข้อมูลเริ่มต้นเมื่อคุณดำเนินการชำระเงิน`}),(0,S.jsxs)(M,{children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`label`,{children:`ที่อยู่เริ่มต้น`}),(0,S.jsx)(`br`,{}),(0,S.jsx)(`label`,{style:{color:`#b3e2f6`},children:s})]}),(0,S.jsx)(`div`,{children:(0,S.jsx)(`button`,{onClick:e=>{e.preventDefault(),e.stopPropagation(),a.reset(),a.setTitle(`เปลี่ยนที่อยู่`),a.setMessage(`โปรดป้อนที่อยู่เริ่มต้นของคุณ`),a.setPrimary(`เรียบร้อย`,e=>{a.setVisible(!1),l.updateContact(r.session,{address:e}).then(()=>t.refetch()).then(()=>{o.setText(`เปลี่ยนที่อยู่เริ่มต้นใหม่เรียบร้อย`),o.setDuration(5e3),o.setVisible(!0)}).catch(()=>{i.reset(),i.setTitle(`เกิดข้อผิดพลาด`),i.setMessage(`เกิดข้อผิดพลาดในการเปลี่ยนอยู่เริ่มต้นของคุณ กรุณาลองใหม่อีกครั้ง`),i.setPrimary(`เข้าใจแล้ว`,()=>{i.setVisible(!1)}),i.setVisible(!0)})}),a.setSecondary(`ยกเลิก`,()=>{a.setVisible(!1)}),a.setVisible(!0)},children:s.length>0?`แก้ไข`:`เพิ่ม`})})]}),(0,S.jsxs)(M,{children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`label`,{children:`ชื่อผู้รับ`}),(0,S.jsx)(`br`,{}),(0,S.jsx)(`label`,{style:{color:`#b3e2f6`},children:c})]}),(0,S.jsx)(`div`,{children:(0,S.jsx)(`button`,{onClick:e=>{e.preventDefault(),e.stopPropagation(),a.reset(),a.setTitle(`เปลี่ยนชื่อผู้รับสินค้า`),a.setMessage(`โปรดป้อนชื่อผู้รับเริ่มต้นของคุณ`),a.setPrimary(`เรียบร้อย`,e=>{a.setVisible(!1),l.updateContact(r.session,{name:e}).then(()=>t.refetch()).then(()=>{o.setText(`เปลี่ยนชื่อผู้รับเริ่มต้นเรียบร้อย`),o.setDuration(5e3),o.setVisible(!0)}).catch(()=>{i.reset(),i.setTitle(`เกิดข้อผิดพลาด`),i.setMessage(`เกิดข้อผิดพลาดในการเปลี่ยนชื่อผู้รับเริ่มต้นของคุณ กรุณาลองใหม่อีกครั้ง`),i.setPrimary(`เข้าใจแล้ว`,()=>{i.setVisible(!1)}),i.setVisible(!0)})}),a.setSecondary(`ยกเลิก`,()=>{a.setVisible(!1)}),a.setVisible(!0)},children:c.length>0?`แก้ไข`:`เพิ่ม`})})]}),(0,S.jsxs)(M,{children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`label`,{children:`เบอร์โทรศัพท์`}),(0,S.jsx)(`br`,{}),(0,S.jsx)(`label`,{style:{color:`#b3e2f6`},children:f})]}),(0,S.jsx)(`div`,{children:(0,S.jsx)(`button`,{onClick:e=>{e.preventDefault(),e.stopPropagation(),a.reset(),a.setTitle(`เปลี่ยนเบอร์โทรศัพท์`),a.setMessage(`โปรดป้อนเบอร์โทรศัพท์เริ่มต้นของคุณ`),a.setPrimary(`เรียบร้อย`,e=>{a.setVisible(!1),l.updateContact(r.session,{phone:e}).then(()=>t.refetch()).then(()=>{o.setText(`เปลี่ยนชื่อเบอร์โทรศัพท์เริ่มต้นเรียบร้อย`),o.setDuration(5e3),o.setVisible(!0)}).catch(()=>{i.reset(),i.setTitle(`เกิดข้อผิดพลาด`),i.setMessage(`เกิดข้อผิดพลาดในการเปลี่ยนเบอร์โทรศัพท์เริ่มต้นของคุณ กรุณาลองใหม่อีกครั้ง`),i.setPrimary(`เข้าใจแล้ว`,()=>{i.setVisible(!1)}),i.setVisible(!0)})}),a.setSecondary(`ยกเลิก`,()=>{a.setVisible(!1)}),a.setVisible(!0)},children:f.length>0?`แก้ไข`:`เพิ่ม`})})]})]})},C.ContentPayment=function(e){return(0,S.jsxs)(x.Activity,{mode:e.visible?`visible`:`hidden`,children:[(0,S.jsx)(C.TemplateBackButton,{visible:e.onBack!=null,onClick:e.onBack}),(0,S.jsx)(A,{children:`การชำระเงิน`}),(0,S.jsxs)(M,{children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`label`,{children:`วิธีเริ่มต้น`}),(0,S.jsx)(`br`,{}),(0,S.jsx)(`label`,{children:`0000-0000-0000-0000`})]}),(0,S.jsx)(`div`,{children:(0,S.jsx)(`button`,{children:`เลือก`})})]}),(0,S.jsx)(j,{children:`รายการบันทึกที่อยู่`}),(0,S.jsx)(M,{children:(0,S.jsx)(`div`,{children:(0,S.jsx)(`button`,{children:`เพิ่ม`})})})]})},C.Provider=function(){let e=g(),t=x.useRef(void 0),[n,r]=x.useState(!1);return x.useEffect(()=>(e.setVisible=e=>{r(e)},e.setClose=e=>{t.current=e},()=>{e.setClose=()=>{},e.setVisible=()=>{}}),[]),(0,S.jsx)(D,{$visible:n,children:(0,S.jsx)(C.Root,{visible:n,transparent:!1,onClose:t.current})})},C.TemplateBackButton=function(e){return(0,S.jsxs)(N,{onClick:t=>{t.preventDefault(),t.stopPropagation(),e.onClick&&e.onClick()},$visible:e.visible??!1,children:[(0,S.jsx)(y,{}),`ย้อนกลับ`]})},C.CONTENT_UNDEFINED=0,C.CONTENT_GENERAL=1,C.CONTENT_SECURITY=2,C.CONTENT_SHIPPING=3,C.CONTENT_PAYMENT=4;var w=r.div`
  background-color: ${e=>e.$transparent?`transparent`:`var(--bg-primary)`};
  border-radius: 8px;
  width: ${e=>e.$width};
  height: ${e=>e.$height};
  max-width: ${e=>e.$widthMax};
  max-height: ${e=>e.$heightMax};
  
  padding: 16px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
`,T=r.button`
  width: 32px;
  height: 32px;
  border: none;
  position: absolute;
  inset: 16px 16px auto auto;
  margin: 0px;
  padding: 0px;
  display: ${e=>e.$visible?`block`:`none`};

  & > img, & > svg
  {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: 24px;
  }
`,E=r.div`
  flex-grow: 1;
`,D=r.div`
  position: fixed;
  pointer-events: ${e=>e.$visible?`all`:`hidden`};
  inset: 0px;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  overscroll-behavior: none;
  padding: 16px;

  background-color: rgba(0,0,0,0.5);
  display: ${e=>e.$visible?`flex`:`none`};
  align-items: center;
  justify-content: center;
`,O=r.div`
  width: 100%;
  min-height: 160px;
  max-height: 160px;
  position: relative;

  background-color: var(--bg-secondary);
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 8px;

  & > img,
  & > svg
  {
    display: block;
    min-width: 128px;
    min-height: 128px;
    max-width: 128px;
    max-height: 128px;
    border-radius: 100%;
    background-color: var(--bg-tertiary);
    color: var(--text-primary);
  }
`,k=r.div`
  position: absolute;
  inset: 16px 16px 16px 192px;

  & > button
  {
    display: block;
    width: 128px;
    margin-bottom: 4px;
  }
`,A=r.h1`
  font-size: 2rem;
  font-weight: normal;
  margin: 0px 0px 16px 0px;
`,j=r.h2`
  font-size: 1.25rem;
  font-weight: normal;
  margin: 16px 0px 16px 0px;
`,M=r.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  height: 48px;

  @media (max-width: 768px) 
  {
    min-height: 48px;
    height: auto;
  }

  & > div:nth-child(1)
  {
    width: 100%;
    flex-grow: 1;
    /* background-color: var(--bg-secondary); */
  }
  & > div:nth-child(2)
  {
    display: inline-flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    max-width: 324px;
    gap: 16px;
  }
  & > div:nth-child(2) > button
  {
    width: 128px;
  }
`,N=r.button`
  display: ${e=>e.$visible?`block`:`none`};
  width: 192px;
  height: 40px;
  background-color: transparent;
  text-align: start;

  & > img,
  & > svg
  {
    width: 24px;
    height: 24px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 16px;
  }
`;export{y as n,C as t};