import{a as e,i as t,n,t as r}from"./index-CgijNJ2O.js";import{t as i}from"./common.preset-CN6tzlqp.js";var a=`/UniversityCSI204/assets/home.testImage-Biv9CYx4.jpg`,o=e(t(),1),s=r(),c=function(){};c.Infinite=function(e){let t=o.useRef(HTMLDivElement.prototype),n=o.useRef(!1),r=e=>{let t=e.style.translate.split(` `),n=t.length>=1&&t[0].endsWith(`px`),r=t.length>=2&&t[1].endsWith(`px`),i=n?t[0].substring(0,t[0].length-2):`0`,a=r?t[1].substring(0,t[1].length-2):`0`;return{x:Number(i),y:Number(a)}},i=(e,t)=>{let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();return n.right>r.left&&n.left<r.right&&n.bottom>r.top&&n.top<r.bottom&&n.right>r.right},a=()=>{if(!t.current)return;let n=t.current,a=n.children;for(let t of a){if(!(t instanceof HTMLElement))continue;let a=r(t),o=a.x,s=a.y,c=i(t,n),l=-(t.offsetLeft+t.clientWidth),u=c?l:o+(e.translateX??0),d=c?0:s+(e.translateY??0);t.style.translate=`${String(u)}px ${String(d)}px`}},c=()=>{n.current&&(a(),requestAnimationFrame(c))};return o.useEffect(()=>(n.current=!0,requestAnimationFrame(c),()=>{n.current=!1}),[]),(0,s.jsx)(l,{ref:t,$width:e.width??`auto`,$height:e.height??`auto`,$margin:e.margin??`0px`,$display:e.display,$displayDirection:e.displayDirection??`row`,$displayGap:e.displayGap??`8px`,children:e.children})};var l=n.div`
  width: ${e=>e.$width};
  height: ${e=>e.$height};
  margin: ${e=>e.$margin};
  display: ${e=>e.$display};
  flex-direction: ${e=>e.$displayDirection};
  align-items: start;
  gap: ${e=>e.$displayGap};
  overflow: hidden;
`,u=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.Intro,{}),(0,s.jsx)(u.Recommendation,{})]})};u.Intro=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(d,{children:(0,s.jsx)(f,{children:(0,s.jsxs)(p,{children:[(0,s.jsx)(m,{src:a}),(0,s.jsxs)(h,{children:[(0,s.jsx)(`h1`,{children:`สวัสดีชาวออกซิเจน`}),(0,s.jsx)(`p`,{children:`เวอร์เซิร์ฟเวอร์ 00:00:00`})]})]})})})})},u.Recommendation=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(g,{children:[(0,s.jsx)(_,{src:void 0}),(0,s.jsxs)(v,{children:[(0,s.jsx)(`h2`,{children:`ที่เราแนะนำในวันนี้: ชื่อเกม`}),(0,s.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget lacus ultricies, finibus libero nec, mattis lorem. Nunc nec felis consectetur, lacinia risus vulputate, fringilla est. In hac habitasse platea dictumst. Sed a lectus non magna scelerisque mattis. Etiam laoreet id nulla et tristique. Nunc vehicula justo maximus erat lacinia, in pharetra massa sagittis. Phasellus id posuere velit, non vehicula odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at elit lacinia, tincidunt quam a, faucibus nibh. Cras lacus felis, ultrices ac bibendum a, semper in dui. Proin porttitor metus eu quam tempus blandit. Sed sit amet volutpat leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed erat lectus, ullamcorper at lectus eget, dictum imperdiet neque. Nullam a egestas eros. Pellentesque eu ipsum sed libero hendrerit gravida varius ut nulla. Cras vulputate ligula id urna maximus gravida. Fusce lectus nunc, blandit lacinia mauris ac, ultricies porta mi. Aenean dictum massa id mattis interdum. Vivamus molestie ac nulla ac commodo. Aliquam erat volutpat. Morbi vitae malesuada elit. Nulla non dolor dolor. Aliquam suscipit metus quis ligula varius, in molestie felis sollicitudin.`})]})]})})},u.Favorite=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(y,{children:[(0,s.jsx)(b,{src:void 0}),(0,s.jsxs)(x,{children:[(0,s.jsx)(`h2`,{children:`สุดโปรด สุดหัวใจ: ชื่อเกม`}),(0,s.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget lacus ultricies, finibus libero nec, mattis lorem. Nunc nec felis consectetur, lacinia risus vulputate, fringilla est. In hac habitasse platea dictumst. Sed a lectus non magna scelerisque mattis. Etiam laoreet id nulla et tristique. Nunc vehicula justo maximus erat lacinia, in pharetra massa sagittis. Phasellus id posuere velit, non vehicula odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at elit lacinia, tincidunt quam a, faucibus nibh. Cras lacus felis, ultrices ac bibendum a, semper in dui. Proin porttitor metus eu quam tempus blandit. Sed sit amet volutpat leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed erat lectus, ullamcorper at lectus eget, dictum imperdiet neque. Nullam a egestas eros. Pellentesque eu ipsum sed libero hendrerit gravida varius ut nulla. Cras vulputate ligula id urna maximus gravida. Fusce lectus nunc, blandit lacinia mauris ac, ultricies porta mi. Aenean dictum massa id mattis interdum. Vivamus molestie ac nulla ac commodo. Aliquam erat volutpat. Morbi vitae malesuada elit. Nulla non dolor dolor. Aliquam suscipit metus quis ligula varius, in molestie felis sollicitudin.`})]})]})})},u.Ending=function(){return(0,s.jsxs)(S,{children:[(0,s.jsxs)(c.Infinite,{display:`flex`,displayDirection:`row`,displayGap:`16px`,translateX:2,width:`100%`,margin:`0px 0px 32px 0px`,children:[(0,s.jsx)(C,{}),(0,s.jsx)(C,{}),(0,s.jsx)(C,{}),(0,s.jsx)(C,{}),(0,s.jsx)(C,{}),(0,s.jsx)(C,{}),(0,s.jsx)(C,{}),(0,s.jsx)(C,{}),(0,s.jsx)(C,{}),(0,s.jsx)(C,{}),(0,s.jsx)(C,{}),(0,s.jsx)(C,{}),(0,s.jsx)(C,{}),(0,s.jsx)(C,{})]}),(0,s.jsx)(`h2`,{children:`และยังไม่จบเพียงแค่เท่านี้`}),(0,s.jsx)(`p`,{children:`ยังมีเกมอีก 280 กำลังรอคุณอยู่ให้คุณสัมผัส`})]})};var d=n.div`
  height: 95dvh;
`,f=n.div`
  width: 100%;
  height: 100%;
  padding: 64px 128px 0px 128px;
`,p=n.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: yellow;
  position: relative;
`,m=n.img`
  display: block;
  position: absolute;
  inset: 0px;
  border-radius: 8px;
  object-fit: cover;
  width: 100%;
  height: 100%;
`,h=n.div`
  width: 100%;
  height: 100%;
  inset: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: start;
  justify-content: center;
  padding: 64px;

  h1
  {
    color: #9ad3cb;
    font-size: 2.5rem;
    text-shadow: 2px 2px 0px #000000;
  }
  p
  {
    color: #ffffff;
    font-size: 1.5rem;
    text-shadow: 2px 2px 0px #000000;
  }
`,g=n.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 64px;
  width: 100%;
  padding: 32px 256px;
  overflow: hidden;
`,_=n.img`
  min-width: 130mm;
  min-height: 184mm;
  max-width: 130mm;
  max-height: 184mm;
`,v=n.div`
  background-color: var(--bg-primary);
  border-radius: 8px;
  padding: 16px;
  flex-grow: 1;
`,y=n.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  gap: 64px;
  width: 100%;
  padding: 0px 256px;
`,b=n.img`
  min-width: 130mm;
  min-height: 184mm;
  max-width: 130mm;
  max-height: 184mm;
`,x=n.div`
  background-color: var(--bg-primary);
  border-radius: 8px;
  padding: 16px;
  flex-grow: 1;
`,S=n.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`,C=n.img`
  display: block;
  min-width: 65mm;
  min-height: 92mm;
  max-width: 65mm;
  max-height: 92mm;
`,w=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.Intro,{}),(0,s.jsx)(u.Recommendation,{}),(0,s.jsx)(u.Favorite,{}),(0,s.jsx)(u.Ending,{}),(0,s.jsx)(i.NavBar,{})]})};export{w as default};