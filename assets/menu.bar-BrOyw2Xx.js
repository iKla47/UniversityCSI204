import{r as e,t}from"./react-C1VktWof.js";import{t as n}from"./index-CdWMyIIp.js";import{r}from"./styled-components.browser.esm-BhrFqjok.js";import{t as i}from"./createLucideIcon-AHYuUPOs.js";import{h as a,r as o}from"./common.ui-xMs2_JMV.js";var s=i(`circle-user`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}],[`path`,{d:`M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662`,key:`154egf`}]]),c=e(t(),1),l=n(),u=function(e){return(0,l.jsx)(u.Root,{visible:e.visible,direction:e.direction,align:e.align,width:e.width,widthMax:e.widthMax,height:e.height,heightMax:e.heightMax,margin:e.margin,gap:e.gap,selected:e.selected,onClick:e.onClick,children:e.children})};u.Root=function(e){let t=e.visible??!0,n=e.direction??`row`,r=e.align??`center`,i=e.width??`auto`,a=e.widthMax??`auto`,s=e.height??`auto`,u=e.heightMax??`auto`,f=e.margin??`0px`,p=e.gap??`4px`,m=e.onClick??function(){},h=(e,t)=>{m(e,t),t&&(_.current=e,y(g()))},g=()=>({direction:n,align:r,selected:_.current,onClick:h}),_=c.useRef(e.selected),[v,y]=c.useState(g());return c.useEffect(()=>{y(g())},[e]),(0,l.jsx)(d,{$visible:t,$direction:n,$width:i,$widthMax:a,$height:s,$heightMax:u,$margin:f,$gap:p,children:(0,l.jsx)(o,{value:v,children:e.children})})},u.Heading=function(e){return(0,l.jsx)(f,{$size:e.size??`1.5rem`,children:e.text})},u.Item=function(e){let t=a(),n=t.direction,r=n===`row`,i=t.align,o=e.value,s=e.width??(r?`96px`:`100%`),u=e.height??(r?`auto`:`40px`),d=Object.is(e.value,t.selected),f=e.onClick??function(){};return(0,l.jsxs)(p,{onClick:e=>{e.preventDefault(),e.stopPropagation(),t.onClick(o,f()??!0)},$direction:n,$align:i,$width:s,$height:u,$selected:d,children:[(0,l.jsx)(()=>{let t=e.icon;return typeof t==`string`?(0,l.jsx)(`img`,{src:t,alt:``}):c.isValidElement(t)?t:typeof t==`function`||typeof t==`object`?(0,l.jsx)(t,{}):null},{}),e.text]})};var d=r.div`
  display: ${e=>e.$visible?`flex`:`none`};
  flex-wrap: nowrap;
  flex-direction: ${e=>e.$direction};
  width: ${e=>e.$width};
  height: ${e=>e.$height};
  max-width: ${e=>e.$widthMax};
  max-height: ${e=>e.$heightMax};
  margin: ${e=>e.$margin};
  gap: ${e=>e.$gap};

  background-color: "var(--bg-primary);";
  border-radius: 8px;
  border: none;
  outline: none;
`,f=r.p`
  font-size: ${e=>e.$size};
  font-weight: normal;
`,p=r.button`
  width: ${e=>e.$width};
  height: ${e=>e.$height};
  text-align: ${e=>e.$align};

  background-color: ${e=>e.$selected?`var(--menu-primary-selected)`:`var(--menu-primary)`};
  border-color: transparent;
  outline-color: transparent;

  &:hover, &:focus
  {
    background-color: ${e=>e.$selected?`var(--menu-primary-selected-hover)`:`var(--menu-primary-hover)`};
  }
  &:active
  {
    background-color: ${e=>e.$selected?`var(--menu-primary-selected-active)`:`var(--menu-primary-active)`};
  }

  & > img,
  & > svg
  {
    display: inline-block;
    vertical-align: middle;
    margin-right: 16px;
    width: 24px;
    height: 24px;
  }
`;Object.freeze(u);export{s as n,u as t};