import{r as e,t}from"./react-C1VktWof.js";import{t as n}from"./index-Ck9etSGg.js";import{r}from"./styled-components.browser.esm-BhrFqjok.js";import{t as i}from"./api.auth-DxXV33kQ.js";import{t as a}from"./createLucideIcon-AHYuUPOs.js";import{n as o,t as s}from"./settings-Bgr_GFa_.js";import{t as c}from"./log-out-jpxF1KAH.js";import{t as l}from"./shield-user-D_1lttQr.js";import{t as u}from"./x-CbaDagQ9.js";import{t as d}from"./common.navigation-A3RdcBvm.js";import{_ as f}from"./common.ui-xMs2_JMV.js";import{i as p,n as m,r as h,t as g}from"./toast-SUxwthAS.js";import{t as _}from"./menu.bar-BR8uEjd1.js";import{n as v,t as y}from"./staff.order-DVR8VVhu.js";var b=a(`cuboid`,[[`path`,{d:`M10 22v-8`,key:`1f8443`}],[`path`,{d:`M2.336 8.89 10 14l11.715-7.029`,key:`1qnufy`}],[`path`,{d:`M22 14a2 2 0 0 1-.971 1.715l-10 6a2 2 0 0 1-2.138-.05l-6-4A2 2 0 0 1 2 16v-6a2 2 0 0 1 .971-1.715l10-6a2 2 0 0 1 2.138.05l6 4A2 2 0 0 1 22 8z`,key:`670npk`}]]),x=a(`package-search`,[[`path`,{d:`M12 22V12`,key:`d0xqtd`}],[`path`,{d:`M20.27 18.27 22 20`,key:`er2am`}],[`path`,{d:`M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559`,key:`tok1h1`}],[`path`,{d:`M3.29 7 12 12l8.71-5`,key:`19ckod`}],[`path`,{d:`m7.5 4.27 8.997 5.148`,key:`9yrvtv`}],[`circle`,{cx:`18.5`,cy:`16.5`,r:`2.5`,key:`ke13xx`}]]),S=e(t(),1),C=n();function w(){let e=f();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(T,{visible:!0,transparent:!0,width:`100%`,widthMax:`100%`,height:`100%`,heightMax:`100%`,margin:`48px 0px 0px 0px`}),(0,C.jsxs)(h,{children:[(0,C.jsx)(h.Branding,{text:`แผนควบคุมระบบ`,icon:p}),(0,C.jsx)(h.Spacing,{}),(0,C.jsx)(h.Profile,{onClick:()=>{e.setChildren((0,C.jsx)(C.Fragment,{children:(0,C.jsx)(m.Item,{text:`ลงชื่อออก`,icon:(0,C.jsx)(c,{}),onClick:()=>{i.saveSetPrefered(-1),i.saveWrite(),d.toAuth({replace:!0})}})})),e.setInset(`56px 16px 0px auto`),e.setCancel(()=>{e.setVisible(!1)}),e.setVisible(!0)}}),` :`]}),(0,C.jsx)(s.Provider,{}),(0,C.jsx)(g.Provider,{}),(0,C.jsx)(m.Provider,{})]})}function T({visible:e,transparent:t,width:n,widthMax:r,height:i,heightMax:a,margin:o,onClose:s}){let c=(0,S.useRef)(null),[l,d]=(0,S.useState)(N),f=`256px`;function p(e){e.preventDefault(),e.stopPropagation(),s&&s()}function m(){y(!1)}let h=()=>c.current instanceof HTMLDivElement&&c.current!=HTMLDivElement.prototype?c.current.clientWidth>=768?f:`100%`:window.innerWidth>=768?f:`100%`,[g,_]=(0,S.useState)(f),[v,y]=(0,S.useState)(!1),b=(0,S.useCallback)(()=>{_(h())},[]);return(0,S.useEffect)(()=>(window.addEventListener(`resize`,b),c.current&&b(),()=>{window.removeEventListener(`resize`,b)}),[b]),(0,C.jsx)(S.Activity,{mode:e?`visible`:`hidden`,children:(0,C.jsxs)(E,{transparent:t??!0,width:n??`100%`,widthMax:r??`100%`,height:i??`100%`,heightMax:a??`100%`,margin:o??`0px`,container:c,children:[(0,C.jsx)(D,{visible:g===f?!0:!v,width:`100%`,widthMax:g,content:[l,e=>{d(e),y(!0)}]}),(0,C.jsx)(O,{visible:g===f?!0:v,content:l,onBack:g===f?void 0:m}),(0,C.jsx)(L,{$visible:!!s,onClick:p,children:(0,C.jsx)(u,{})})]})})}function E({transparent:e,width:t,widthMax:n,height:r,heightMax:i,margin:a,container:o,children:s}){return(0,C.jsx)(I,{ref:o,$transparent:e,$width:t,$widthMax:n,$height:r,$heightMax:i,$margin:a,children:s})}function D(e){return(0,C.jsxs)(_,{visible:e.visible??!0,direction:`column`,width:e.width??`100%`,widthMax:e.widthMax??`256px`,height:`100%`,align:`start`,selected:1,margin:e.widthMax==`100%`?`0px`:`0px 32px 0px 0px`,onClick:t=>{e.content&&e.content[1](t)},children:[(0,C.jsx)(_.Heading,{text:`คอนโซล`}),(0,C.jsx)(_.Item,{value:N,text:`สต็อกสินค้า`,icon:(0,C.jsx)(b,{})}),(0,C.jsx)(_.Item,{value:P,text:`คำสั่งซื้อ`,icon:(0,C.jsx)(x,{})}),(0,C.jsx)(_.Item,{value:F,text:`ผู้ใช้`,icon:(0,C.jsx)(l,{})})]})}function O(e){let t=e.visible??!0,n=e.content??0,r=t&&n===N,i=t&&n===P,a=t&&n===F,o=e.onBack;return(0,C.jsxs)(R,{children:[(0,C.jsx)(k,{visible:r,onBack:o}),(0,C.jsx)(A,{visible:i,onBack:o}),(0,C.jsx)(j,{visible:a,onBack:o})]})}function k(e){return(0,C.jsxs)(S.Activity,{mode:e.visible?`visible`:`hidden`,children:[(0,C.jsx)(M,{visible:e.onBack!=null,onClick:e.onBack}),(0,C.jsx)(v,{})]})}function A(e){return(0,C.jsxs)(S.Activity,{mode:e.visible?`visible`:`hidden`,children:[(0,C.jsx)(M,{visible:e.onBack!=null,onClick:e.onBack}),(0,C.jsx)(y,{})]})}function j(e){return(0,C.jsxs)(S.Activity,{mode:e.visible?`visible`:`hidden`,children:[(0,C.jsx)(M,{visible:e.onBack!=null,onClick:e.onBack}),(0,C.jsx)(j,{})]})}function M(e){return(0,C.jsxs)(z,{onClick:t=>{t.preventDefault(),t.stopPropagation(),e.onClick&&e.onClick()},$visible:e.visible??!1,children:[(0,C.jsx)(o,{}),`ย้อนกลับ`]})}var N=1,P=2,F=3,I=r.div`
  background-color: ${e=>e.$transparent?`transparent`:`var(--bg-primary)`};
  border-radius: 8px;
  width: ${e=>e.$width};
  height: ${e=>e.$height};
  max-width: ${e=>e.$widthMax};
  max-height: ${e=>e.$heightMax};
  margin: ${e=>e.$margin};
  
  padding: 16px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
`,L=r.button`
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
`,R=r.div`
  flex-grow: 1;
`,z=r.button`
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
`;export{w as default};