import{r as e,t}from"./react-C1VktWof.js";import{n,t as r}from"./index-Ck9etSGg.js";import{r as i}from"./styled-components.browser.esm-BhrFqjok.js";import{t as a}from"./createLucideIcon-AHYuUPOs.js";import{t as o}from"./arrow-left-C8aUR7th.js";import{t as s}from"./circle-user-bdA1tqbP.js";import{t as c}from"./shopping-basket-C4Thn0t1.js";import{t as l}from"./shopping-cart-B0OfAdL7.js";import{i as u,n as d}from"./api.order-Ja0LpCHB.js";import{a as f}from"./common-CcV5LtAo.js";import{c as p,d as m,g as h,i as g,l as _,o as v,p as y,r as b,s as x,u as S}from"./customer-Dw5Nd6pM.js";import{p as C,y as w}from"./common.ui-xMs2_JMV.js";import{t as T}from"./menu.bar-BR8uEjd1.js";var ee=a(`heart`,[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}]]),E=a(`message-square`,[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`}]]),D=a(`monitor-cog`,[[`path`,{d:`M12 17v4`,key:`1riwvh`}],[`path`,{d:`m14.305 7.53.923-.382`,key:`1mlnsw`}],[`path`,{d:`m15.228 4.852-.923-.383`,key:`82mpwg`}],[`path`,{d:`m16.852 3.228-.383-.924`,key:`ln4sir`}],[`path`,{d:`m16.852 8.772-.383.923`,key:`1dejw0`}],[`path`,{d:`m19.148 3.228.383-.924`,key:`192kgf`}],[`path`,{d:`m19.53 9.696-.382-.924`,key:`fiavlr`}],[`path`,{d:`m20.772 4.852.924-.383`,key:`1j8mgp`}],[`path`,{d:`m20.772 7.148.924.383`,key:`zix9be`}],[`path`,{d:`M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7`,key:`1tnzv8`}],[`path`,{d:`M8 21h8`,key:`1ev6f3`}],[`circle`,{cx:`18`,cy:`6`,r:`3`,key:`1h7g24`}]]),te=a(`share-2`,[[`circle`,{cx:`18`,cy:`5`,r:`3`,key:`gq8acd`}],[`circle`,{cx:`6`,cy:`12`,r:`3`,key:`w7nqdw`}],[`circle`,{cx:`18`,cy:`19`,r:`3`,key:`1xt0gg`}],[`line`,{x1:`8.59`,x2:`15.42`,y1:`13.51`,y2:`17.49`,key:`47mynk`}],[`line`,{x1:`15.41`,x2:`8.59`,y1:`6.51`,y2:`10.49`,key:`1n3mei`}]]),O=a(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),ne=a(`text-align-start`,[[`path`,{d:`M21 5H3`,key:`1fi0y6`}],[`path`,{d:`M15 12H3`,key:`6jk70r`}],[`path`,{d:`M17 19H3`,key:`z6ezky`}]]),k=e(t(),1),A=r();function j(){let[e]=n(),t=e.get(`id`),r=_(Number(t)).data,i=r?h.getUrlStream(r.background):void 0;return(0,A.jsxs)(I,{children:[(0,A.jsx)(L,{src:i,$visible:i!=null&&i.length>0}),(0,A.jsx)(N,{}),(0,A.jsx)(P,{}),(0,A.jsx)(M,{})]})}function M(){let e=v(),t=x(),n=b(),r=t=>{t.preventDefault(),t.stopPropagation(),e.setVisible(!0),e.setClose(()=>{e.setVisible(!1)})},i=t.data,a=i?i.reduce((e,t)=>e+=t.quantity,0):0;return(0,A.jsxs)(de,{onClick:r,$visible:n.data!==void 0,children:[(0,A.jsx)(fe,{children:a}),(0,A.jsx)(c,{})]})}function N(){let[e]=n(),t=e.get(`id`),r=f(),i=w(),[a,o]=(0,k.useState)(1),[s]=C(),c=Number(t),m=_(c),g=y(Number(t)),v=b(),S=x(),E=p(),O=m.data,j=g.data,M=E.data,N=O?O.name:``,P=O?O.description:``,F=O?O.price.toFixed(2):``,I=O?h.getUrlStream(O.cover):void 0,L=M?M.find(e=>e.productId===c):void 0,W=O?O.status===u.STATUS_OUT_OF_STOCK:!0;function G(e){if(e.preventDefault(),e.stopPropagation(),v.data===void 0){i.setDuration(5e3),i.setText(`คุณจำเป็นต้องลงชื่อเข้าใช้ก่อนจึงจะสามารถเพิ่มสินค้าได้`),i.setVisible(!0);return}let t=S.data?S.data.find(e=>e.productId===c):void 0,n=t?t.quantity+1:0;if(t===void 0){K();return}s.reset(),s.setTitle(`ยืนยันเพิ่มสินค้านี้ลงในตะกร้า`),s.setMessage(`คุณได้เพิ่มสินค้านี้ลงในตะกร้าแล้ว การดำเนินการนี้จะเพิ่มเป็น ${String(n)} จำนวน ยืนยันหรือไหม่`),s.setVisible(!0),s.setPrimary(`ยืนยัน`,()=>{s.setVisible(!1),K()}),s.setSecondary(`ยกเลิก`,()=>{s.setVisible(!1)})}function K(){let e=O?O.id:NaN,t=O?O.name:``;d.createCart(r.session,{productId:e,quantity:1}).then(()=>{i.setDuration(5e3),i.setText(`เพิ่ม ${t} ลงในตะกร้าเรียบร้อย`),i.setVisible(!0),S.refetch()}).catch(()=>{s.reset(),s.setTitle(`เกิดข้อผิดพลาด`),s.setMessage(`เกิดข้อผิดพลาดบางอย่าง โปรดทำการลองใหม่อีกครั้ง`),s.setPrimary(`เข้าใจแล้ว`,()=>{s.setVisible(!1)}),s.setVisible(!0)})}let q=e=>{if(e.preventDefault(),e.stopPropagation(),v.data===void 0){i.setDuration(5e3),i.setText(`คุณจำเป็นต้องลงชื่อเข้าใช้ก่อนจึงจะสามารถจัดการรายการโปรดได้`),i.setVisible(!0);return}if(L){d.deleteFavorite(r.session,L.favoriteId).then(()=>{i.setDuration(5e3),i.setText(`นำ ${O?O.name:`สินค้า`} ออกจากรายการโปรดแล้ว`),i.setVisible(!0),E.refetch()}).catch(()=>{s.reset(),s.setTitle(`เกิดข้อผิดพลาด`),s.setMessage(`เกิดข้อผิดพลาดในการนำรายการโปรดออก โปรดลองใหม่อีกครั้ง`),s.setPrimary(`เข้าใจแล้ว`,()=>{s.setVisible(!1)}),s.setVisible(!0)});return}d.createFavorite(r.session,{productId:c}).then(()=>{i.setDuration(5e3),i.setText(`เพิ่ม ${O?O.name:`สินค้า`} ลงในรายการโปรดเรียบร้อย`),i.setVisible(!0),E.refetch()}).catch(()=>{s.reset(),s.setTitle(`เกิดข้อผิดพลาด`),s.setMessage(`เกิดข้อผิดพลาดในการเพิ่มรายการโปรด โปรดลองใหม่อีกครั้ง`),s.setPrimary(`เข้าใจแล้ว`,()=>{s.setVisible(!1)}),s.setVisible(!0)})};function J(e){e.preventDefault(),e.stopPropagation(),navigator.clipboard.writeText(window.location.href).then(()=>{i.setDuration(5e3),i.setText(`คัดลอกลิงค์แชร์เรียบร้อย`),i.setVisible(!0)}).catch(()=>{s.reset(),s.setTitle(`คัดลอกลิงค์แชร์ผิดพลาด`),s.setMessage(`เกิดข้อผิดพลาดบางอย่าง โปรดทำการลองใหม่อีกครั้ง`),s.setPrimary(`เข้าใจแล้ว`,()=>{s.setVisible(!1)}),s.setVisible(!0)})}return(0,A.jsxs)(R,{children:[(0,A.jsx)(z,{src:I}),(0,A.jsxs)(re,{children:[(0,A.jsxs)(`header`,{children:[(0,A.jsx)(ie,{children:N}),(0,A.jsx)(ae,{children:``})]}),(0,A.jsxs)(`main`,{children:[(0,A.jsxs)(T,{direction:`row`,selected:a,margin:`0px 0px 16px 0px`,onClick:e=>{o(e)},children:[(0,A.jsx)(T.Item,{icon:(0,A.jsx)(ne,{}),width:`192px`,text:`รายละเอียด`,value:1}),(0,A.jsx)(T.Item,{icon:(0,A.jsx)(D,{}),width:`192px`,text:`ข้อมูลจำเพาะ`,value:2})]}),a===1?(0,A.jsx)(B,{children:P}):(0,A.jsx)(A.Fragment,{}),a===2?(0,A.jsxs)(X,{children:[(0,A.jsxs)(Z,{children:[(0,A.jsx)(Q,{children:`ผู้ผลิต`}),(0,A.jsx)($,{children:`—`})]}),(0,A.jsxs)(Z,{children:[(0,A.jsx)(Q,{children:`แพลตฟอร์ม`}),(0,A.jsx)($,{children:`PlayStation 5`})]}),(0,A.jsxs)(Z,{children:[(0,A.jsx)(Q,{children:`ประเภท`}),(0,A.jsx)($,{children:`Action`})]}),(0,A.jsxs)(Z,{children:[(0,A.jsx)(Q,{children:`ภาษา`}),(0,A.jsx)($,{children:`ไทย / อังกฤษ`})]}),(0,A.jsxs)(Z,{children:[(0,A.jsx)(Q,{children:`ปีที่ออก`}),(0,A.jsx)($,{children:`2024`})]})]}):(0,A.jsx)(A.Fragment,{}),a===3?(0,A.jsx)(B,{children:`จัดส่งทั่วประเทศไทยผ่าน Kerry / Flash ภายใน 1-3 วันทำการ สั่งซื้อครบ 1,500 ฿ ขึ้นไป จัดส่งฟรี สามารถรับสินค้าที่หน้าร้านได้เช่นกัน`}):(0,A.jsx)(A.Fragment,{}),(0,A.jsx)(oe,{children:j?j.map(e=>{if(e.mime===`text/html`)return(0,A.jsx)(`iframe`,{src:e.link,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,referrerPolicy:`strict-origin-when-cross-origin`,allowFullScreen:!0,style:{aspectRatio:`16 / 9 `}},e.reviewId);if(e.mime===`image/jpeg`||e.mime===`image/png`)return(0,A.jsx)(`img`,{src:e.link,style:{aspectRatio:`16 / 9 `}},e.reviewId)}):(0,A.jsx)(A.Fragment,{})}),(0,A.jsxs)(V,{children:[(0,A.jsx)(H,{children:W?(0,A.jsx)(`span`,{children:`สินค้าหมด`}):(0,A.jsxs)(`span`,{children:[F,` ฿`]})}),(0,A.jsxs)(U,{children:[(0,A.jsxs)(`button`,{onClick:G,children:[(0,A.jsx)(l,{}),(0,A.jsx)(`span`,{children:`เพิ่มลงในตะกร้า`})]}),(0,A.jsxs)(`button`,{onClick:q,children:[(0,A.jsx)(ee,{color:L?`#ff4d4f`:`currentColor`,fill:L?`#ff4d4f`:`none`}),(0,A.jsx)(`span`,{children:L?`นำออกจากรายการโปรด`:`เพิ่มรายการโปรด`})]}),(0,A.jsxs)(`button`,{onClick:J,children:[(0,A.jsx)(te,{}),(0,A.jsx)(`span`,{children:`แชร์`})]})]})]})]})]})]})}function P(){let[e]=n(),t=e.get(`id`),r=f(),i=w(),a=m(Number(t)),s=b(),[c,l]=(0,k.useState)(!1),[d,p]=(0,k.useState)(``),[h,g]=(0,k.useState)(5),_=a.data,v=_&&_.length>0?_.reduce((e,t)=>e+=t.rating,0)/_.length:0,y=_?_.length:0,x=_?_.length===0:!0;function S(e){if(e.preventDefault(),e.stopPropagation(),!s.data){i.setDuration(5e3),i.setText(`คุณจำเป็นต้องลงชื่อเข้าใช้ก่อนจึงจะสามารถแสดงความคิดเห็นได้`),i.setVisible(!0);return}if(!a.data)return;let n=a.data.find(e=>e.author===s.data.id);if(!c){l(!0),n!==void 0&&(g(n.rating),p(n.text));return}if(n){u.updateComment(r.session,{commentId:n.commentId,title:``,text:d,rating:h}).then(()=>{i.setText(`อัพเดทความคิดเห็นของคุณแล้ว`),i.setDuration(5e3),i.setVisible(!0),a.refetch()}).catch(()=>{i.setText(`เกิดข้อผิดพลาดในการอัพเดทความคิดเห็น โปรดลองใหม่อีกครั้ง`),i.setDuration(5e3),i.setVisible(!0)});return}u.createComment(r.session,{productId:Number(t),title:``,text:d,rating:h}).then(()=>{i.setText(`เพิ่มความคิดเห็นของคุณแล้ว`),i.setDuration(5e3),i.setVisible(!0),a.refetch()}).catch(()=>{i.setText(`เกิดข้อผิดพลาดในการแสดงความคิดเห็น โปรดลองใหม่อีกครั้ง`),i.setDuration(5e3),i.setVisible(!0)})}function C(e){e.preventDefault(),e.stopPropagation(),l(!1)}return(0,A.jsxs)(W,{children:[(0,A.jsx)(G,{children:`ความคิดเห็น`}),(0,A.jsxs)(K,{children:[(0,A.jsxs)(J,{children:[(c?h>=1:v>=1)?(0,A.jsx)(O,{color:`#f5ec00`,absoluteStrokeWidth:!0}):(0,A.jsx)(O,{}),(c?h>=2:v>=2)?(0,A.jsx)(O,{color:`#f5ec00`,absoluteStrokeWidth:!0}):(0,A.jsx)(O,{}),(c?h>=3:v>=3)?(0,A.jsx)(O,{color:`#f5ec00`,absoluteStrokeWidth:!0,onClick:()=>{g(3)}}):(0,A.jsx)(O,{onClick:()=>{g(3)}}),(c?h>=4:v>=4)?(0,A.jsx)(O,{color:`#f5ec00`,absoluteStrokeWidth:!0,onClick:()=>{g(4)}}):(0,A.jsx)(O,{onClick:()=>{g(4)}}),(c?h>=5:v>=5)?(0,A.jsx)(O,{color:`#f5ec00`,absoluteStrokeWidth:!0,onClick:()=>{g(5)}}):(0,A.jsx)(O,{onClick:()=>{g(5)}})]}),c?(0,A.jsx)(A.Fragment,{}):(0,A.jsxs)(`p`,{children:[v.toFixed(2),` / 5.0 จากทั้งหมด `,y,` คน`]}),c?(0,A.jsx)(pe,{value:d,onChange:e=>{p(e.target.value)}}):(0,A.jsx)(A.Fragment,{}),(0,A.jsxs)(`div`,{style:{display:`flex`,gap:`8px`},children:[(0,A.jsxs)(Y,{onClick:S,children:[(0,A.jsx)(E,{size:24}),(0,A.jsx)(`span`,{children:`ให้คะแนนเลย`})]}),(0,A.jsxs)(Y,{onClick:C,style:{display:c?`block`:`none`},children:[(0,A.jsx)(o,{size:24}),(0,A.jsx)(`span`,{children:`ย้อนกลับ`})]})]})]}),(0,A.jsxs)(q,{children:[x?(0,A.jsx)(`p`,{children:`สินค้ายังไม่ใครรีวิวเลย เป็นคนแรกที่รีวิวเลย`}):(0,A.jsx)(A.Fragment,{}),_?_.map(e=>(0,A.jsx)(F,{id:e.commentId},e.commentId)):(0,A.jsx)(A.Fragment,{})]})]})}function F({id:e}){let t=S(e),n=g(t.data?t.data.author:0),r=t.data,i=n.data,a=i?i.icon:``,o=i?i.name:``,c=r?r.text:``;return(0,A.jsxs)(se,{children:[a.length>0?(0,A.jsx)(ce,{src:h.getUrlStream(a)}):(0,A.jsx)(s,{}),(0,A.jsx)(le,{children:o}),(0,A.jsx)(ue,{children:c})]})}var I=i.div`
  margin: 96px 0px 64px 0px;
  display: block;
`,L=i.img`
  display: ${e=>e.$visible?`block`:`none`};
  position: fixed;
  inset: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  z-index: -1;
`,R=i.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 64px;
  position: relative;

  @media (max-width: 960px)
  {
    height: 100%;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
`,z=i.img`
  display: block;
  width: 550px;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 3 / 4;

  @media (max-width: 1268px)
  {
    width: 412px;
    height: 75%;
  }
  @media (max-width: 1024px)
  {
    width: 275px;
    height: 50%;
  }
`,re=i.div`
  display: block;
  width: 40%;
  height: 100%;

  @media (max-width: 960px)
  {
    width: 100%;
    padding: 0px 96px;
  }
  @media (max-width: 768px)
  {
    width: 100%;
    padding: 0px 64px;
  }
  @media (max-width: 680px)
  {
    width: 100%;
    padding: 0px 16px;
  }
`,ie=i.h1`
  font-size: 2.5rem;
  font-weight: normal;
`,ae=i.h2`
  font-size: 1.25rem;
  font-weight: normal;
  margin-bottom: 32px;
`,B=i.p`
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 32px;
  min-height: 256px;
`,oe=i.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  max-height: 256px;
  margin-bottom: 32px;
  overflow: hidden;
  gap: 8px;

  & > iframe
  {
    min-width: 384px;
    min-height: 256px;
    max-width: 384px;
    max-height: 256px;
  }

  @media (max-width: 768px)
  {
    flex-direction: column;

    & > iframe
    {
      min-width: 100%;
      min-height: 324px;
      max-width: 100%;
      max-height: 324px;
    }
  }
`,V=i.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-height: 40px;
  align-items: center;
  gap: 48px;

  @media (max-width: 1024px)
  {
    flex-direction: column;
  }
`,H=i.label`
  display: block;
  position: relative;
  font-size: 1.5rem;
  width: 128px;
`,U=i.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;

  width: 100%;
  height: 40px;

    & > button
  {
    display: inline-block;
    min-width: 192px;
    min-height: 40px;
  }
  & > button > img,
  & > button > svg
  {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`,W=i.div`
  width: 100%;
  min-height: 256px;
  padding: 32px 580px;

  @media (max-width: 1600px)
  {
    padding: 32px 512px;
  }
  @media (max-width: 1440px)
  {
    padding: 32px 384px;
  }
  @media (max-width: 1280px)
  {
    padding: 32px 256px;
  }
  @media (max-width: 1024px)
  {
    padding: 32px 128px;
  }
  @media (max-width: 860px)
  {
    padding: 32px 64px;
  }
  @media (max-width: 680px)
  {
    padding: 32px 16px;
  }
`,G=i.label`
  display: block;
  font-size: 2rem;
  font-weight: normal;
  color: var(--text-primary);
`,K=i.div`
  width: 100%;
  height: 324px;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,q=i.div`
  margin: 8px 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 8px;
`,J=i.div`
  display: inline-block;
  color: var(--text-primary);
  margin: 4px 0px;

  & > img, & > svg
  {
    display: inline-block;
    width: 64px;
    height: 64px;
    margin: 0px 8px;
  }
`,Y=i.button`
  & > img, & > svg
  {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`,se=i.div`
  width: 100%;
  height: 100%;
  min-height: 64px;
  background-color: var(--bg-primary);
  border-radius: 4px;
  position: relative;

  & > svg
  {
    display: block;
    position: absolute;
    background-color: var(--bg-secondary);
    border-radius: 100%;
    inset: 16px auto auto 16px;
    width: 32px;
    height: 32px;
    color: var(--text-primary);
  }
`,ce=i.img`
  display: block;
  position: absolute;
  background-color: var(--bg-secondary);
  border-radius: 100%;
  inset: 16px auto auto 16px;
  width: 32px;
  height: 32px;
`,le=i.label`
  display: block;
  position: absolute;
  inset: 20px auto auto 64px;
  width: 32px;
  height: 32px;
  font-size: 1rem;
  font-weight: normal
`,ue=i.p`
  padding: 48px 0px 16px 64px;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  font-weight: normal
`,X=i.dl`
    margin: 0;
    display: grid;
    grid-template-columns: 180px 1fr;
    row-gap: 0;
    min-height: 256px;
    margin-bottom: 32px;
    color: var(--text-primary);
`,Z=i.div`
    display: contents;
    & > * { padding: 12px 0; border-bottom: 1px solid var(--bg-hairline); }
`,Q=i.dt`
    color: var(--text-muted);
    font-size: 1rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
`,$=i.dd`
    margin: 0;
    color: #fff;
    font-size: 0.92rem;
`,de=i.button`
  display: ${e=>e.$visible?`block`:`none`};
  position: fixed;
  inset: auto 64px 64px auto;
  width: 64px;
  height: 64px;
  padding: 0px;
  margin: 0px;
  border-radius: 100%;

  & > img,
  & > svg
  {
    display: inline-block;
    min-width: 32px;
    min-height: 32px;
    vertical-align: middle;
  }
  @media (max-width: 1024px)
  {
    bottom: 24px;
    right: 32px;
  }
`,fe=i.label`
  position: absolute;
  inset: auto -16px 0px auto;
  font-size: 1rem;

  min-width: 24px;
  min-height: 24px;
  padding: 0px 4px;
  text-align: center;

  background-color: #FF7373;
  border-radius: 4px;
`,pe=i.textarea`
  background-color: var(--input-primary);
  color: var(--text-primary);
  width: 100%;
  height: 50%;
  padding: 12px;
  border: 0px black solid;
  border-radius: 12px;
`;export{j as default};