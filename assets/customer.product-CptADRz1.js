import{r as e,t}from"./react-C1VktWof.js";import{n,t as r}from"./index-CdWMyIIp.js";import{r as i}from"./styled-components.browser.esm-BhrFqjok.js";import{t as a}from"./createLucideIcon-AHYuUPOs.js";import{t as o}from"./arrow-left-C8aUR7th.js";import{n as s,t as c}from"./menu.bar-BrOyw2Xx.js";import{t as l}from"./shopping-basket-C4Thn0t1.js";import{t as u}from"./shopping-cart-B0OfAdL7.js";import{a as d}from"./common-CcV5LtAo.js";import{a as f,c as p,d as m,i as h,l as g,p as _,s as v,t as y,u as b}from"./api.storage-BZ9QeM3l.js";import{i as x,t as S}from"./api.account-B6XxI1Rq.js";import{p as C,y as w}from"./common.ui-xMs2_JMV.js";var ee=a(`heart`,[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}]]),T=a(`message-square`,[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`}]]),E=a(`monitor-cog`,[[`path`,{d:`M12 17v4`,key:`1riwvh`}],[`path`,{d:`m14.305 7.53.923-.382`,key:`1mlnsw`}],[`path`,{d:`m15.228 4.852-.923-.383`,key:`82mpwg`}],[`path`,{d:`m16.852 3.228-.383-.924`,key:`ln4sir`}],[`path`,{d:`m16.852 8.772-.383.923`,key:`1dejw0`}],[`path`,{d:`m19.148 3.228.383-.924`,key:`192kgf`}],[`path`,{d:`m19.53 9.696-.382-.924`,key:`fiavlr`}],[`path`,{d:`m20.772 4.852.924-.383`,key:`1j8mgp`}],[`path`,{d:`m20.772 7.148.924.383`,key:`zix9be`}],[`path`,{d:`M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7`,key:`1tnzv8`}],[`path`,{d:`M8 21h8`,key:`1ev6f3`}],[`circle`,{cx:`18`,cy:`6`,r:`3`,key:`1h7g24`}]]),te=a(`share-2`,[[`circle`,{cx:`18`,cy:`5`,r:`3`,key:`gq8acd`}],[`circle`,{cx:`6`,cy:`12`,r:`3`,key:`w7nqdw`}],[`circle`,{cx:`18`,cy:`19`,r:`3`,key:`1xt0gg`}],[`line`,{x1:`8.59`,x2:`15.42`,y1:`13.51`,y2:`17.49`,key:`47mynk`}],[`line`,{x1:`15.41`,x2:`8.59`,y1:`6.51`,y2:`10.49`,key:`1n3mei`}]]),D=a(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),ne=a(`text-align-start`,[[`path`,{d:`M21 5H3`,key:`1fi0y6`}],[`path`,{d:`M15 12H3`,key:`6jk70r`}],[`path`,{d:`M17 19H3`,key:`z6ezky`}]]),O=e(t(),1),k=r(),A=function(){let[e]=n(),t=e.get(`id`),r=g(Number(t)).data,i=r?y.getUrlStream(r.background):void 0;return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(j,{children:[(0,k.jsx)(M,{src:i,$visible:i!=null&&i.length>0}),(0,k.jsx)(A.Main,{}),(0,k.jsx)(A.Comment,{}),(0,k.jsx)(A.Cart,{})]})})};A.Cart=function(){let e=v(),t=p(),n=h(),r=t=>{t.preventDefault(),t.stopPropagation(),e.setVisible(!0),e.setClose(()=>{e.setVisible(!1)})},i=t.data,a=i?i.reduce((e,t)=>e+=t.quantity,0):0;return(0,k.jsxs)(ce,{onClick:r,$visible:n.data!==void 0,children:[(0,k.jsx)(le,{children:a}),(0,k.jsx)(l,{})]})},A.Main=function(){let[e]=n(),t=e.get(`id`),r=d(),i=w(),a=g(Number(t)),o=_(Number(t)),s=h(),l=a.data,f=o.data,[p,m]=(0,O.useState)(1),[v]=C(),b=e=>{if(e.preventDefault(),e.stopPropagation(),s.data!==void 0){let e=a.data,t=e?e.id:NaN;S.createCart(r.session,{productId:t,quantity:1}).then(()=>{i.setDuration(5e3),i.setText(`เพิ่ม ${l?l.name:``} ลงในตะกร้าเรียบร้อย`),i.setVisible(!0)}).catch(()=>{i.setDuration(5e3),i.setText(`เกิดข้อผิดพลาด โปรดลองใหม่อีกครั้ง`),i.setVisible(!0)})}else i.setDuration(5e3),i.setText(`คุณจำเป็นต้องลงชื่อเข้าใช้ก่อนจึงจะสามารถเพิ่มสินค้าได้`),i.setVisible(!0)},x=e=>{e.preventDefault(),e.stopPropagation(),s.data===void 0&&(i.setDuration(5e3),i.setText(`คุณจำเป็นต้องลงชื่อเข้าใช้ก่อนจึงจะสามารถเพิ่มรายการโปรดได้`),i.setVisible(!0))},T=e=>{e.preventDefault(),e.stopPropagation(),navigator.clipboard.writeText(window.location.href).then(()=>{i.setDuration(5e3),i.setText(`คัดลอกลิงค์แชร์เรียบร้อย`),i.setVisible(!0)}).catch(()=>{v.reset(),v.setTitle(`คัดลอกลิงค์แชร์ผิดพลาด`),v.setMessage(`เกิดข้อผิดพลาดบางอย่าง โปรดทำการลองใหม่อีกครั้ง`),v.setPrimary(`เข้าใจแล้ว`,()=>{v.setVisible(!1)}),v.setVisible(!0)})},D=l?l.name:``,A=l?l.description:``,j=l?l.price.toFixed(2):``,M=l?y.getUrlStream(l.cover):void 0;return(0,k.jsxs)(re,{children:[(0,k.jsx)(N,{src:M}),(0,k.jsxs)(P,{children:[(0,k.jsxs)(`header`,{children:[(0,k.jsx)(F,{children:D}),(0,k.jsx)(I,{children:``})]}),(0,k.jsxs)(`main`,{children:[(0,k.jsxs)(c,{direction:`row`,selected:p,margin:`0px 0px 16px 0px`,onClick:e=>{m(e)},children:[(0,k.jsx)(c.Item,{icon:(0,k.jsx)(ne,{}),width:`192px`,text:`รายละเอียด`,value:1}),(0,k.jsx)(c.Item,{icon:(0,k.jsx)(E,{}),width:`192px`,text:`ข้อมูลจำเพาะ`,value:2})]}),p===1?(0,k.jsx)(L,{children:A}):(0,k.jsx)(k.Fragment,{}),p===2?(0,k.jsxs)(se,{children:[(0,k.jsxs)(X,{children:[(0,k.jsx)(Z,{children:`ผู้ผลิต`}),(0,k.jsx)(Q,{children:`—`})]}),(0,k.jsxs)(X,{children:[(0,k.jsx)(Z,{children:`แพลตฟอร์ม`}),(0,k.jsx)(Q,{children:`PlayStation 5`})]}),(0,k.jsxs)(X,{children:[(0,k.jsx)(Z,{children:`ประเภท`}),(0,k.jsx)(Q,{children:`Action`})]}),(0,k.jsxs)(X,{children:[(0,k.jsx)(Z,{children:`ภาษา`}),(0,k.jsx)(Q,{children:`ไทย / อังกฤษ`})]}),(0,k.jsxs)(X,{children:[(0,k.jsx)(Z,{children:`ปีที่ออก`}),(0,k.jsx)(Q,{children:`2024`})]})]}):(0,k.jsx)(k.Fragment,{}),p===3?(0,k.jsx)(L,{children:`จัดส่งทั่วประเทศไทยผ่าน Kerry / Flash ภายใน 1-3 วันทำการ สั่งซื้อครบ 1,500 ฿ ขึ้นไป จัดส่งฟรี สามารถรับสินค้าที่หน้าร้านได้เช่นกัน`}):(0,k.jsx)(k.Fragment,{}),(0,k.jsx)(R,{children:f?f.map(e=>{if(e.mime===`text/html`)return(0,k.jsx)(`iframe`,{src:e.link,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,referrerPolicy:`strict-origin-when-cross-origin`,allowFullScreen:!0,style:{aspectRatio:`16 / 9 `}},e.reviewId);if(e.mime===`image/jpeg`||e.mime===`image/png`)return(0,k.jsx)(`img`,{src:e.link,style:{aspectRatio:`16 / 9 `}},e.reviewId)}):(0,k.jsx)(k.Fragment,{})}),(0,k.jsxs)(z,{children:[(0,k.jsxs)(B,{children:[(0,k.jsx)(V,{children:`99%`}),(0,k.jsxs)(`span`,{children:[j,` ฿`]})]}),(0,k.jsxs)(H,{children:[(0,k.jsxs)(`button`,{onClick:b,children:[(0,k.jsx)(u,{}),(0,k.jsx)(`span`,{children:`เพิ่มลงในตะกร้า`})]}),(0,k.jsxs)(`button`,{onClick:x,children:[(0,k.jsx)(ee,{}),(0,k.jsx)(`span`,{children:`เพิ่มรายการโปรด`})]}),(0,k.jsxs)(`button`,{onClick:T,children:[(0,k.jsx)(te,{}),(0,k.jsx)(`span`,{children:`แชร์`})]})]})]})]})]})]})},A.Comment=function(){let[e]=n(),t=e.get(`id`),r=d(),i=m(Number(t)),a=h(),s=i.data,c=(0,O.useRef)(!1),[l,u]=(0,O.useState)(5),[f,p]=(0,O.useState)(``),[g,_]=(0,O.useState)(!1),v=w(),y=s&&s.length>0?s.reduce((e,t)=>e+=t.rating,0)/s.length:0,b=s?s.length:0,S=s?s.length===0:!0;return(0,k.jsxs)(U,{children:[(0,k.jsx)(W,{children:`ความคิดเห็น`}),(0,k.jsxs)(G,{children:[(0,k.jsxs)(q,{children:[(g?l>=1:y>=1)?(0,k.jsx)(D,{color:`#f5ec00`,absoluteStrokeWidth:!0}):(0,k.jsx)(D,{}),(g?l>=2:y>=2)?(0,k.jsx)(D,{color:`#f5ec00`,absoluteStrokeWidth:!0}):(0,k.jsx)(D,{}),(g?l>=3:y>=3)?(0,k.jsx)(D,{color:`#f5ec00`,absoluteStrokeWidth:!0,onClick:()=>{u(3)}}):(0,k.jsx)(D,{onClick:()=>{u(3)}}),(g?l>=4:y>=4)?(0,k.jsx)(D,{color:`#f5ec00`,absoluteStrokeWidth:!0,onClick:()=>{u(4)}}):(0,k.jsx)(D,{onClick:()=>{u(4)}}),(g?l>=5:y>=5)?(0,k.jsx)(D,{color:`#f5ec00`,absoluteStrokeWidth:!0,onClick:()=>{u(5)}}):(0,k.jsx)(D,{onClick:()=>{u(5)}})]}),g?(0,k.jsx)(k.Fragment,{}):(0,k.jsxs)(`p`,{children:[y.toFixed(2),` / 5.0 จากทั้งหมด `,b,` คน`]}),g?(0,k.jsx)($,{value:f,onChange:e=>{p(e.target.value)}}):(0,k.jsx)(k.Fragment,{}),(0,k.jsxs)(`div`,{style:{display:`flex`,gap:`8px`},children:[(0,k.jsxs)(J,{onClick:e=>{if(e.preventDefault(),e.stopPropagation(),i.data!==void 0&&a.data!==void 0)if(g){_(!1);let e=i.data.find(e=>e.author===a.data.id);if(e){x.updateComment(r.session,{commentId:e.commentId,title:``,text:f,rating:l}).then(()=>{v.setText(`อัพเดทความคิดเห็นของคุณแล้ว`),v.setDuration(5e3),v.setVisible(!0),i.refetch()}).catch(()=>{v.setText(`เกิดข้อผิดพลาดในการอัพเดทความคิดเห็น โปรดลองใหม่อีกครั้ง`),v.setDuration(5e3),v.setVisible(!0)});return}x.createComment(r.session,{productId:Number(t),title:``,text:f,rating:l}).then(()=>{v.setText(`เพิ่มความคิดเห็นของคุณแล้ว`),v.setDuration(5e3),v.setVisible(!0),i.refetch()}).catch(()=>{v.setText(`เกิดข้อผิดพลาดในการแสดงความคิดเห็น โปรดลองใหม่อีกครั้ง`),v.setDuration(5e3),v.setVisible(!0)});return}else{let e=i.data.find(e=>e.author===a.data.id);e&&(u(e.rating),p(e.text),c.current=!0),_(!0);return}else v.setDuration(5e3),v.setText(`คุณจำเป็นต้องลงชื่อเข้าใช้ก่อนจึงจะสามารถแสดงความคิดเห็นได้`),v.setVisible(!0)},children:[(0,k.jsx)(T,{size:24}),(0,k.jsx)(`span`,{children:`ให้คะแนนเลย`})]}),(0,k.jsxs)(J,{onClick:e=>{e.preventDefault(),e.stopPropagation(),_(!1)},style:{display:g?`block`:`none`},children:[(0,k.jsx)(o,{size:24}),(0,k.jsx)(`span`,{children:`ย้อนกลับ`})]})]})]}),(0,k.jsxs)(K,{children:[S?(0,k.jsx)(`p`,{children:`สินค้ายังไม่ใครรีวิวเลย เป็นคนแรกที่รีวิวเลย`}):(0,k.jsx)(k.Fragment,{}),s?s.map(e=>(0,k.jsx)(A.CommentItem,{id:e.commentId},e.commentId)):(0,k.jsx)(k.Fragment,{})]})]})},A.CommentItem=function({id:e}){let t=b(e),n=f(t.data?t.data.author:0),r=t.data,i=n.data,a=i?i.icon:``,o=i?i.name:``,c=r?r.text:``;return(0,k.jsxs)(Y,{children:[a.length>0?(0,k.jsx)(ie,{src:y.getUrlStream(a)}):(0,k.jsx)(s,{}),(0,k.jsx)(ae,{children:o}),(0,k.jsx)(oe,{children:c})]})};var j=i.div`
  margin: 96px 0px 64px 0px;
  display: block;
`,M=i.img`
  display: ${e=>e.$visible?`block`:`none`};
  position: fixed;
  inset: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  z-index: -1;
`,re=i.div`
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
`,N=i.img`
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
`,P=i.div`
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
`,F=i.h1`
  font-size: 2.5rem;
  font-weight: normal;
`,I=i.h2`
  font-size: 1.25rem;
  font-weight: normal;
  margin-bottom: 32px;
`,L=i.p`
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 32px;
  min-height: 256px;
`,R=i.div`
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
`,z=i.div`
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
`,B=i.label`
  display: block;
  position: relative;
  font-size: 1.5rem;
  width: 128px;
`,V=i.label`
  font-size: 1.25rem;
  position: absolute;
  inset: auto 16px -32px auto;
  background-color: #FF7373;
  border-radius: 16px;
  padding: 0px 16px;
`,H=i.div`
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
`,U=i.div`
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
`,W=i.label`
  display: block;
  font-size: 2rem;
  font-weight: normal;
  color: var(--text-primary);
`,G=i.div`
  width: 100%;
  height: 324px;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,K=i.div`
  margin: 8px 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 8px;
`,q=i.div`
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
`,J=i.button`
  & > img, & > svg
  {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`,Y=i.div`
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
`,ie=i.img`
  display: block;
  position: absolute;
  background-color: var(--bg-secondary);
  border-radius: 100%;
  inset: 16px auto auto 16px;
  width: 32px;
  height: 32px;
`,ae=i.label`
  display: block;
  position: absolute;
  inset: 20px auto auto 64px;
  width: 32px;
  height: 32px;
  font-size: 1rem;
  font-weight: normal
`,oe=i.p`
  padding: 48px 0px 16px 64px;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  font-weight: normal
`,se=i.dl`
    margin: 0;
    display: grid;
    grid-template-columns: 180px 1fr;
    row-gap: 0;
    min-height: 256px;
    margin-bottom: 32px;
    color: var(--text-primary);
`,X=i.div`
    display: contents;
    & > * { padding: 12px 0; border-bottom: 1px solid var(--bg-hairline); }
`,Z=i.dt`
    color: var(--text-muted);
    font-size: 1rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
`,Q=i.dd`
    margin: 0;
    color: #fff;
    font-size: 0.92rem;
`,ce=i.button`
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
`,le=i.label`
  position: absolute;
  inset: auto -16px 0px auto;
  font-size: 1rem;

  min-width: 24px;
  min-height: 24px;
  padding: 0px 4px;
  text-align: center;

  background-color: #FF7373;
  border-radius: 4px;
`,$=i.textarea`
  background-color: var(--input-primary);
  color: var(--text-primary);
  width: 100%;
  height: 50%;
  padding: 12px;
  border: 0px black solid;
  border-radius: 12px;
`;export{A as default};