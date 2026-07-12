import{a as e,i as t,n,r,t as i}from"./index-CgijNJ2O.js";var a=e(t(),1),o=i(),s=a.createContext({width:0}),c=function(e){let[t,n]=a.useState(0),r=a.useRef(HTMLDivElement.prototype),i=()=>{n(r.current.clientWidth)};return a.useEffect(()=>(window.addEventListener(`resize`,i),i(),()=>{window.removeEventListener(`resize`,i)}),[]),(0,o.jsx)(l,{ref:r,children:(0,o.jsx)(s,{value:{width:t},children:e.children})})};c.Branding=function(e){let t=a.useContext(s).width>=768;return(0,o.jsxs)(u,{onClick:t=>{t.preventDefault(),t.stopPropagation(),e.onClick&&e.onClick()},children:[(0,o.jsx)(d,{src:e.icon}),(0,o.jsx)(f,{$show:t,children:e.text})]})},c.Search=function(){return(0,o.jsx)(p,{placeholder:`ค้นหา เกมสุดที่รัก ...`})},c.Profile=function(){return(0,o.jsx)(m,{children:(0,o.jsx)(h,{})})},c.Menu=function(e){return(0,o.jsx)(g,{children:e.children})},c.MenuItem=function(e){return(0,o.jsxs)(_,{onClick:t=>{t.preventDefault(),t.stopPropagation(),e.onClick&&e.onClick()},children:[e.icon?(0,o.jsx)(v,{src:e.icon}):(0,o.jsx)(o.Fragment,{}),e.text?(0,o.jsx)(y,{children:e.text}):(0,o.jsx)(o.Fragment,{})]})},c.Spacing=function(e){return(0,o.jsx)(b,{$level:e.level??1})};var l=n.div`
  position: fixed;
  inset: 0px 0px auto 0px;
  height: 48px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 8px;

  align-items: center;

  background-color: var(--bg-primary);
  border-color: var(--bg-primary-border);
  border-width: 0px 0px 2px 0px;
  border-style: solid;

  & > *:first-child { margin: 0px 0px 0px 32px; }
  & > *:last-child { margin: 0px 32px 0px 0px; }
`,u=n.button`
  min-width: 32px;
  max-height: 32px;
  background-color: transparent;
  border: transparent;
`,d=n.img`
  width: 32px;
  height: 32px;
`,f=n.label`
  width: auto;
  height: 32px;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0px 16px;
  visibility: ${e=>e.$show?`visible`:`hidden`};
  pointer-events: ${e=>e.$show?`all`:`none`};
`,p=n.input`
  display: block;
  width: 256px;
  min-height: 32px;

  font-size: 1rem;
  background-color: #418C94;
  border-radius: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 0px 16px;

  &::placeholder
  {
    color: #9ad3cb; 
  }
`,m=n.div`
  width: 32px;
  min-height: 32px;
`,h=n.img`
  display: block;
  width: 32px;
  height: 32px;
  border: 0px solid var(--bg-primary-border);
  border-radius: 100%;
  transition: border-width 66ms cubic-bezier(0.22, 1, 0.36, 1);

  &:hover
  {
    border-width: 2px;
  }
`,g=n.div`
  margin: 0px 8px;
  height: 32px;
`,_=n.button`
  width: 96px;
  height: 32px;
  background-color: transparent;
  border: transparent;
`,v=n.img`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`,y=n.span`
  color: var(--text-primary);
  font-size: 1rem;
  height: 32px;
  // margin: 0px 16px;
`,b=n.div`
  min-height: 32px;
  flex-grow: ${e=>e.$level}
`,x=function(){};x.NavBar=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(c,{children:[(0,o.jsx)(c.Branding,{text:`ร้านขายแผ่นและตลับเกม`,onClick:()=>{r.toIndex()}}),(0,o.jsx)(c.Spacing,{}),(0,o.jsx)(c.Search,{}),(0,o.jsxs)(c.Menu,{children:[(0,o.jsx)(c.MenuItem,{text:`สินค้า`,onClick:()=>{r.toProductBrowser()}}),(0,o.jsx)(c.MenuItem,{text:`ช่วยเหลือ`,onClick:()=>{r.toDoc()}}),(0,o.jsx)(c.MenuItem,{text:`เกี่ยวกับ`})]}),(0,o.jsx)(c.Profile,{})]})})};export{x as t};