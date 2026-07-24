const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/auth.signin-CRcWodqL.js","assets/react-C1VktWof.js","assets/index-Ck9etSGg.js","assets/hooks-svCkyKQa.js","assets/index-uHoOLuRT.css","assets/styled-components.browser.esm-BhrFqjok.js","assets/api.common-DwcjUolD.js","assets/api.auth-DxXV33kQ.js","assets/createLucideIcon-AHYuUPOs.js","assets/key-round-CuMhsKZc.js","assets/shield-user-D_1lttQr.js","assets/user-lock-Cisi-UFr.js","assets/auth.signup-wcZT5zfD.js","assets/mail-PFEykbor.js","assets/user-DE1zXFWB.js"])))=>i.map(i=>d[i]);
import{r as e,t}from"./react-C1VktWof.js";import{r as n,t as r}from"./index-Ck9etSGg.js";import{r as i,t as a}from"./styled-components.browser.esm-BhrFqjok.js";import{t as o}from"./api.auth-DxXV33kQ.js";import{t as s}from"./createLucideIcon-AHYuUPOs.js";import{t as c}from"./arrow-left-C8aUR7th.js";var l=`/UniversityCSI204/assets/auth.bg-DCaReTEc.jpg`,u=s(`shield-alert`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`M12 8v4`,key:`1got3b`}],[`path`,{d:`M12 16h.01`,key:`1drbdi`}]]),d=e(t(),1),f=r(),p=(0,d.lazy)(()=>n(()=>import(`./auth.signin-CRcWodqL.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))),m=(0,d.lazy)(()=>n(()=>import(`./auth.signup-wcZT5zfD.js`),__vite__mapDeps([12,1,2,3,4,7,6,9,8,13,14]))),h=function(e){let t=(0,d.useState)(h.PAGE_SIGN_IN_ID),n=(0,d.useState)(!1),r=(0,d.useState)(h.createEmptyFeedback()),i=(0,d.useRef)(h.createEmptySession()),a=(0,d.useRef)(``);return(0,d.useEffect)(()=>{o.saveSetPrefered(-1),o.saveWrite()},[]),(0,f.jsxs)(h.View,{children:[(0,f.jsx)(h.ViewBackground,{}),(0,f.jsxs)(h.ViewForm,{transparent:e.transparent??!1,children:[(0,f.jsx)(h.FormHome,{}),(0,f.jsx)(p,{staPage:t,staPending:n,staFeedback:r,refSession:i,refId:a,title:e.title,description:e.description,onComplete:e.onSignedIn}),(0,f.jsx)(m,{staPage:t,staPending:n,staFeedback:r,refSession:i,refId:a,title:e.title,description:e.description}),(0,f.jsx)(h.ViewPending,{visible:n[0]})]})]})};h.VISIBLE_UNDEFINED=0,h.VISIBLE_HIDDEN=1,h.VISIBLE_SHOWN=2,h.ANIM_NONE=0,h.ANIM_SCALE_UP=1,h.ANIM_SCALE_UP_DOWN=2,h.ANIM_SCALE_DOWN=3,h.ANIM_SCALE_DOWN_UP=4,h.ANIM_SLIDE_LEFT_TO_RIGHT=5,h.ANIM_SLIDE_RIGHT_TO_LEFT=6,h.PAGE_UNDEFINED=0,h.PAGE_SIGN_IN=1,h.PAGE_SIGN_IN_ID=2,h.PAGE_SIGN_IN_PWD=3,h.PAGE_SIGN_IN_TOTP=4,h.PAGE_SUSPENDED=11,h.PAGE_SIGN_UP=101,h.FEEDBACK_UNDEFINED=0,h.FEEDBACK_WARNING=1,h.FEEDBACK_ERROR=2,h.createEmptyFeedback=()=>({type:h.FEEDBACK_UNDEFINED,text:``}),h.createEmptySession=()=>({secret:``,issued:new Date,expire:new Date}),h.View=function(e){return(0,f.jsx)(g,{children:(0,f.jsx)(_,{children:e.children})})},h.ViewBackground=function(){return(0,f.jsx)(v,{src:l})},h.ViewForm=function(e){return(0,f.jsx)(x,{$transparent:e.transparent,children:e.children})},h.ViewPending=function(e){return(0,f.jsx)(S,{$visible:e.visible??!1})},h.FormHome=function(){return(0,f.jsx)(f.Fragment,{})},h.TemplateDiv=function(e){return(0,f.jsx)(C,{$visible:e.visible??!0,children:e.children})},h.TemplateHeader=function(e){return(0,f.jsxs)(w,{children:[(0,f.jsx)(E,{children:e.title??``}),(0,f.jsx)(D,{children:e.description??``}),e.onBack?(0,f.jsxs)(T,{onClick:t=>{t.preventDefault(),t.stopPropagation(),e.onBack&&e.onBack()},children:[(0,f.jsx)(c,{}),(0,f.jsx)(`span`,{children:`ย้อนกลับ`})]}):(0,f.jsx)(f.Fragment,{})]})},h.TemplateMain=function(e){return(0,f.jsx)(O,{children:e.children})},h.TemplateFooter=function(e){return(0,f.jsx)(k,{children:e.children})},h.TemplateOption=function(e){return(0,f.jsxs)(j,{disabled:e.disabled??!1,onClick:t=>{t.preventDefault(),t.stopPropagation(),e.onClick&&e.onClick()},children:[typeof e.icon==`string`?(0,f.jsx)(`img`,{src:e.icon,alt:`Option Icon`}):e.icon,(0,f.jsx)(`span`,{children:e.text})]})},h.TemplateFeedback=function(e){return(0,f.jsx)(M,{$color:e.type??h.FEEDBACK_UNDEFINED,children:e.text})},h.TemplatePrivacyNotice=function(){return(0,f.jsxs)(A,{children:[(0,f.jsx)(u,{size:24}),`หากนี้ไม่ใช่อุปกรณ์ของคุณ`,(0,f.jsx)(`span`,{children:`ให้ใช้งานโหมดไม่ระบุตัวตนของเบราว์เซอร์`}),(0,f.jsx)(`span`,{children:`เพื่อเลี่ยงความเสี่ยงการรั่วไหลของข้อมูลของคุณ`})]})};var g=i.div`
  position: fixed;
  inset: 0px;
`,_=i.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`,v=i.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: opacity 250ms cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 512px) {
    opacity: 0.0;
  }
`,y=a`
  from { scale: 1.25; }
  to { scale: 1.0; }
`,b=a`
  0% { background-position: 100% 100%; }
  100% { background-position: 0% 100%; }
`,x=i.form`
  width: 512px;
  height: 572px;
  background-color: ${e=>e.$transparent?`transparent`:`var(--bg-primary)`};
  outline: 2px solid ${e=>e.$transparent?`transparent`:`var(--bg-primary-border)`};
  border-radius: 8px;
  transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1);
  animation-name: ${y};
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  animation-duration: 500ms;
  display: block;
  position: relative;
  overflow: hidden;

  @media (max-width: 512px) {
    outline-width: 0px;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 0px;
  }
`,S=i.div`
  pointer-events: none;
  position: absolute;
  inset: 0px 0px auto 0px;
  width: 100%;
  height: 8px;
  opacity: ${e=>e.$visible?`1.0`:`0.0`};
  border-radius: 4px;
  background: linear-gradient(
    90deg, 
    var(--bg-primary),
    var(--bg-primary),
    var(--bg-primary),
    var(--bg-primary-border),
    var(--bg-primary-border),
    var(--bg-primary-border),
    var(--bg-primary),
    var(--bg-primary),
    var(--bg-primary)
  );
  background-size: 400% 400%;
  transition: opacity 250ms cubic-bezier(0.16, 1, 0.3, 1);

  animation: ${b} 1000ms cubic-bezier(0.85, 0, 0.15, 1) infinite;
`,C=i.div`
  pointer-events: ${e=>e.$visible?`all`:`none`};
  position: absolute;
  inset: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 16px;
  opacity: ${e=>e.$visible?`1.0`:`0.0`};
  transition: opacity 500ms cubic-bezier(0.16, 1, 0.3, 1);
`,w=i.header`
  width: 100%;
  height: 128px;
  padding: 16px 16px 0px 16px;
`,T=i.button`
  width: 144px;
  font-size: 1rem;
  font-weight: normal;
  text-align: start;
  background-color: transparent;
  margin: 16px 0px;

  & > img,
  & > svg {
    display: inline-block;
    margin-right: 16px;
    vertical-align: middle;
  }
`,E=i.h1`
  width: 100%;
  font-size: 2rem;
  font-weight: normal;
`,D=i.p`
  width: 100%;
  font-size: 1rem;
  font-weight: normal;
`,O=i.main`
  width: 100%;
  height: 100%;
  padding: 0px 16px 0px 16px;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 8px;
`,k=i.footer`
  width: 100%;
  height: 128px;
  padding: 0px 16px 16px 16px;
`,A=i.p`
  font-size: 1rem;
  margin: 0px 16px 16px 16px;

  @media (max-width: 512px) {
    background-color: var(--bg-primary);
    border-radius: 4px;
    padding: 8px;
  }
  & > img,
  & > svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
  }
`,j=i.button`
  background-color: transparent;
  border: transparent;
  outline: transparent;
  width: 100%;
  text-align: start;

  & > img,
  & > svg {
    display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-right: 16px;
  }
`,M=i.p`
  font-size: 1rem;
  font-weight: normal;
  width: 100%;
  height: 48px;
  color: ${e=>e.$color===h.FEEDBACK_WARNING?`var(--text-warning)`:e.$color===h.FEEDBACK_ERROR?`var(--text-error)`:`var(--text-primary)`};
`;export{h as t};