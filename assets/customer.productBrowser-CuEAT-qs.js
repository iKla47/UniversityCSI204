import{r as e,t}from"./react-C1VktWof.js";import{n,t as r}from"./index-Ck9etSGg.js";import{n as i,r as a}from"./styled-components.browser.esm-BhrFqjok.js";import{t as o}from"./createLucideIcon-AHYuUPOs.js";import{t as s}from"./shopping-basket-C4Thn0t1.js";import{t as c}from"./shopping-cart-B0OfAdL7.js";import{i as l,n as u}from"./api.order-Ja0LpCHB.js";import{a as d}from"./common-CcV5LtAo.js";import{f,g as ee,o as p,r as m,s as h}from"./customer-Dw5Nd6pM.js";import{t as g}from"./common.navigation-A3RdcBvm.js";var te=o(`refresh-cw-off`,[[`path`,{d:`M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47`,key:`1krf6h`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}],[`path`,{d:`M3 12C3 9.51 4 7.26 5.64 5.64`,key:`ruvoct`}],[`path`,{d:`m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64`,key:`19q130`}],[`path`,{d:`M21 12c0 1-.16 1.97-.47 2.87`,key:`4w8emr`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M22 22 2 2`,key:`1r8tn9`}]]),_=e(t(),1),v=r(),y=[{key:`ps5`,label:`PlayStation 5`},{key:`ps4`,label:`PlayStation 4`},{key:`xbox-xs`,label:`Xbox Series X|S`},{key:`xbox-one`,label:`Xbox One`},{key:`switch`,label:`Nintendo Switch`},{key:`pc`,label:`PC`}],b=[{key:`action`,label:`Action`},{key:`adventure`,label:`Adventure`},{key:`rpg`,label:`RPG`},{key:`sports`,label:`Sports`},{key:`racing`,label:`Racing`},{key:`simulation`,label:`Simulation`},{key:`strategy`,label:`Strategy`},{key:`fighting`,label:`Fighting`},{key:`horror`,label:`Horror`}],x={platforms:[],gameTypes:[],price:{min:0,max:5e3},onlyFavorites:!1},S=function(e){let[t,n]=_.useState({...x,...e.value});function r(t){n(t),e.onChange&&e.onChange(t)}function i(e,n){let i=t[e],a=i.includes(n)?i.filter(e=>e!==n):[...i,n];r({...t,[e]:a})}function a(){r({...t,onlyFavorites:!t.onlyFavorites})}function o(e,n){let i=Math.max(0,Number(n.replace(/[^0-9]/g,``))||0);r({...t,price:{...t.price,[e]:i}})}function s(t){t.preventDefault(),t.stopPropagation(),r({...x}),e.onReset&&e.onReset()}let c=t.platforms.length+t.gameTypes.length+ +(t.price.min!==x.price.min||t.price.max!==x.price.max)+ +!!t.onlyFavorites;return(0,v.jsxs)(C,{"aria-label":`ตัวกรองสินค้า`,children:[(0,v.jsxs)(w,{children:[(0,v.jsx)(T,{children:`ตัวกรอง`}),(0,v.jsxs)(E,{children:[(0,v.jsx)(D,{$on:c>0}),(0,v.jsx)(O,{children:c>0?`เลือกไว้ ${c} รายการ`:`ยังไม่ได้เลือก`}),(0,v.jsx)(k,{onClick:s,disabled:c===0,children:`ล้างทั้งหมด`})]})]}),(0,v.jsxs)(A,{children:[(0,v.jsx)(j,{children:`รายการโปรด`}),(0,v.jsx)(M,{children:(0,v.jsxs)(N,{onClick:a,$on:t.onlyFavorites,children:[(0,v.jsx)(P,{$on:t.onlyFavorites,children:(0,v.jsx)(F,{$on:t.onlyFavorites,children:`✓`})}),(0,v.jsxs)(I,{style:{display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,v.jsx)(`span`,{style:{color:t.onlyFavorites?`#ff4d4f`:`currentColor`}}),`รายการโปรด`]})]})})]}),(0,v.jsxs)(A,{children:[(0,v.jsx)(j,{children:`แพลตฟอร์ม`}),(0,v.jsx)(M,{children:y.map(e=>{let n=t.platforms.includes(e.key);return(0,v.jsxs)(N,{onClick:()=>i(`platforms`,e.key),$on:n,children:[(0,v.jsx)(P,{$on:n,children:(0,v.jsx)(F,{$on:n,children:`✓`})}),(0,v.jsx)(I,{children:e.label})]},e.key)})})]}),(0,v.jsxs)(A,{children:[(0,v.jsx)(j,{children:`ประเภทเกม`}),(0,v.jsx)(M,{children:b.map(e=>{let n=t.gameTypes.includes(e.key);return(0,v.jsxs)(N,{onClick:()=>i(`gameTypes`,e.key),$on:n,children:[(0,v.jsx)(P,{$on:n,children:(0,v.jsx)(F,{$on:n,children:`✓`})}),(0,v.jsx)(I,{children:e.label})]},e.key)})})]}),(0,v.jsxs)(A,{children:[(0,v.jsx)(j,{children:`ช่วงราคา`}),(0,v.jsxs)(L,{children:[(0,v.jsxs)(R,{children:[(0,v.jsx)(z,{children:`ต่ำสุด`}),(0,v.jsxs)(B,{children:[(0,v.jsx)(V,{children:`฿`}),(0,v.jsx)(H,{inputMode:`numeric`,value:String(t.price.min),onChange:e=>{if(Number(e.target.value)>t.price.max){e.preventDefault(),e.stopPropagation();return}o(`min`,e.target.value)}})]})]}),(0,v.jsx)(U,{children:`—`}),(0,v.jsxs)(R,{children:[(0,v.jsx)(z,{children:`สูงสุด`}),(0,v.jsxs)(B,{children:[(0,v.jsx)(V,{children:`฿`}),(0,v.jsx)(H,{inputMode:`numeric`,value:String(t.price.max),onChange:e=>{if(Number(e.target.value)<t.price.min){e.preventDefault(),e.stopPropagation();return}o(`max`,e.target.value)}})]})]})]})]}),(0,v.jsx)(W,{children:(0,v.jsx)(G,{children:typeof e.total==`number`?`แสดง ${e.total} รายการ`:`อัปเดตผลลัพธ์อัตโนมัติ`})})]})},C=a.aside`
    /* Local accent — cool cyan */
    --text-accent: #61c4c8;
    --accent: #61c4c8;
    --accent-contrast: #05191a;

    padding: 16px 0px;
    background: var(--bg-primary);
    border: 1px solid var(--bg-hairline);
    border-radius: 4px;
    box-shadow: var(--shadow-card);
    color: #FFF;

`,w=a.header`
    display: block;
`,T=a.h3`
    font-size: 1.5rem;
    line-height: 1.1;
    color: #fff;
    margin: 0;
`,E=a.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 8px;
`,D=a.span`
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: ${e=>e.$on?`var(--accent)`:`var(--text-muted)`};
    opacity: ${e=>e.$on?1:.5};
    box-shadow: ${e=>e.$on?`0 0 0 3px rgba(97, 196, 200, 0.18)`:`none`};
`,O=a.span`
    flex: 1;
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--text-muted);
`,k=a.button`
    display: block; 
    font-size: 1rem;
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    padding: 8px;

    &:hover { text-decoration: underline; text-underline-offset: 3px; }
    &:disabled { color: var(--text-muted); opacity: 0.5; cursor: default; text-decoration: none; }
`,A=a.section`
    display: block;
    padding: 16px 0;
    border-bottom: 1px solid var(--bg-hairline);

    &:last-of-type { border-bottom: none; }
`,j=a.h4`
    font-size: 1rem;
    font-weight: normal;
    color: #fff;
    margin: 0 0 12px 0;
    letter-spacing: 0.02em;

    &::before {
        content: "";
        display: inline-block;
        width: 14px;
        height: 1px;
        background: var(--accent);
        vertical-align: middle;
        margin-right: 10px;
        opacity: 0.7;
    }
`,M=a.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    & > *
    {
      margin-bottom: 2px;
    }
`,N=a.li`
    display: grid;
    grid-template-columns: 18px 1fr;
    align-items: center;
    gap: 10px;
    padding: 7px 6px;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 160ms ease, color 160ms ease;
    color: ${e=>e.$on?`#fff`:`var(--text-muted)`};

    &:hover { background: var(--menu-primary-hover); color: #fff; }
    ${e=>e.$on&&i`background: var(--menu-primary-active);`}
`,P=a.span`
    width: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${e=>e.$on?`var(--accent)`:`var(--btn-ghost-border)`};
    background: ${e=>e.$on?`var(--accent)`:`transparent`};
    border-radius: 2px;
    transition: all 160ms ease;
`,F=a.span`
    font-size: 0.7rem;
    line-height: 1;
    color: var(--accent-contrast);
    opacity: ${e=>+!!e.$on};
`,I=a.span`
    font-size: 1rem;
    letter-spacing: 0.01em;
`,L=a.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: end;
    gap: 8px;
`,R=a.label`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,z=a.span`
    font-size: 0.62rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-muted);
`,B=a.div`
    position: relative;
    display: flex;
    align-items: center;
`,V=a.span`
    position: absolute;
    left: 10px;
    font-size: 0.95rem;
    color: var(--text-accent);
    pointer-events: none;
`,H=a.input`
    width: 100%;
    padding-left: 24px;
    min-height: 38px;
`,U=a.span`
    padding-bottom: 8px;
    color: #fff;
`,W=a.footer`
    margin-top: 8px;
    padding-top: 14px;
    border-top: 1px solid var(--bg-hairline);
`,G=a.span`
    display: block;
    text-align: center;
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--text-muted);
`;Object.freeze(S);var K=function(){let[e,t]=(0,_.useState)(void 0);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(K.List,{filter:e}),(0,v.jsx)(K.Filter,{filter:[e,t]}),(0,v.jsx)(K.Cart,{})]})};K.List=function({filter:e}){let t=d(),[r]=n(),i=r.get(`search`),[a,o]=(0,_.useState)([]),s=f({search:i??``,category:e?[]:void 0,minPrice:e?e.price.min:void 0,maxPrice:e?e.price.max:void 0}),c=s,l=!c.isError,p=c.isLoadingError||c.isFetching,m=c.isLoading,h=c.isLoadingError;_.useEffect(()=>{e?.onlyFavorites&&t.session&&u.getFavorite(t.session).then(e=>{o(e.map(e=>e.productId))}).catch(()=>{o([])})},[e?.onlyFavorites,t.session]),_.useEffect(()=>{s.refetch()},[i]);let y=e=>{g.toProduct(e)};return(0,v.jsxs)(q,{children:[(0,v.jsx)(J,{$visible:l,children:(()=>{let t=s;if(!t.data)return(0,v.jsx)(v.Fragment,{});let n=t.data.filter(t=>e?.onlyFavorites?a.includes(t.id):!0);return n.length===0&&e?.onlyFavorites?(0,v.jsx)(`p`,{style:{color:`var(--text-muted)`,padding:`16px`},children:`ไม่พบรายการสินค้าโปรดของคุณ`}):n.map(e=>{let t=String(e.id),n=e.id,r=e.name,i=e.cover.length>0?ee.getUrlStream(e.cover):void 0,a=e.price,o=e.status;return(0,v.jsx)(K.ListItem,{id:n,name:r,artwork:i,price:a,status:o,onClick:y},t)})})()}),(0,v.jsx)(ne,{$visible:p,children:h?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(te,{size:64}),(0,v.jsx)(`p`,{children:`เกิดข้อผิดพลาดการโหลดรายการสินค้า`})]}):m?(0,v.jsx)(`p`,{children:`กำลังโหลดรายการสินค้า`}):(0,v.jsx)(v.Fragment,{})})]})},K.ListItem=function(e){let t=t=>{t.preventDefault(),t.stopPropagation(),e.onClick(e.id)};return(0,v.jsxs)(Q,{"aria-label":`ดูรายละเอียด ${e.name}`,onClick:t,children:[(0,v.jsxs)(ie,{children:[e.artwork?(0,v.jsx)(ae,{src:e.artwork,alt:e.name}):(0,v.jsxs)(oe,{children:[(0,v.jsx)(se,{children:`✦`}),(0,v.jsx)(ce,{children:`รูปเกม`})]}),(0,v.jsx)(le,{})]}),(0,v.jsxs)(ue,{children:[(0,v.jsx)(de,{children:e.name}),(0,v.jsxs)(fe,{children:[(0,v.jsx)(pe,{children:e.status===l.STATUS_OUT_OF_STOCK?(0,v.jsx)(v.Fragment,{children:(0,v.jsx)($,{children:`สินค้าหมด`})}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)($,{children:`ราคา`}),(0,v.jsxs)(me,{children:[e.price.toFixed(2),` `,(0,v.jsx)(`span`,{style:{color:`white`},children:`฿`})]})]})}),(0,v.jsx)(he,{onClick:t,"aria-label":`เพิ่มลงตะกร้า`,children:(0,v.jsx)(c,{size:16})})]})]})]})},K.Filter=function({filter:e}){return(0,v.jsx)(Y,{children:(0,v.jsx)(X,{children:(0,v.jsx)(S,{onChange:t=>{e[1](t)}})})})},K.Cart=function(){let e=p(),t=h(),n=m(),r=t=>{t.preventDefault(),t.stopPropagation(),e.setVisible(!0),e.setClose(()=>{e.setVisible(!1)})},i=t.data,a=i?i.reduce((e,t)=>e+=t.quantity,0):0;return(0,v.jsxs)(Z,{onClick:r,$visible:n.data!==void 0,children:[(0,v.jsx)(re,{children:a}),(0,v.jsx)(s,{})]})};var q=a.div`

  position: relative;
  gap: 8px;
  overflow: hidden auto;
  margin: 48px 510px 0px 254px;
  padding: 16px 2px 16px 2px;

  @media (max-width: 1600px)
  {
    margin: 48px 510px 16px 126px;
  }
  @media (max-width: 1440px)
  {
    margin: 48px 382px 16px 30px;
  }
  @media (max-width: 1200px)
  {
    margin: 48px 382px 16px 14px;
  }
  @media (max-width: 1024px)
  {
    margin: 48px 62px 16px 62px;
  }
  @media (max-width: 768px)
  {
    margin: 48px 14px 16px 14px;
  }
`,ne=a.div`
  display: ${e=>e.$visible?`flex`:`none`};
  flex-direction: column;
  gap: 16px;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
`,J=a.div`
  display: ${e=>e.$visible?`flex`:`none`};
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`,Y=a.div`
  position: fixed;
  inset: 64px 144px 16px auto;
  width: 324px;
  background-color: var(--bg-primary);
  border-radius: 4px;

  @media (max-width: 1920px)
  {
    inset: 64px 192px 16px auto;
  }
  @media (max-width: 1440px)
  {
    inset: 64px 64px 16px auto;
  }
  @media (max-width: 1024px)
  {
    display: none;
    inset: 0px 0px 0px 0px;
  }
`,X=a.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  overflow-y: scroll;
`,Z=a.button`
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
`,re=a.label`
  position: absolute;
  inset: auto -16px 0px auto;
  font-size: 1rem;

  min-width: 24px;
  min-height: 24px;
  padding: 0px 4px;
  text-align: center;

  background-color: #FF7373;
  border-radius: 4px;
`,Q=a.article`
    --text-accent: #61c4c8;
    --accent: #61c4c8;

    background: var(--bg-primary);
    border: 1px solid var(--bg-hairline);
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 220ms ease, border-color 220ms ease,
                box-shadow 220ms ease;
    box-shadow: var(--shadow-card);
    display: flex;
    flex-direction: column;
    color: #fff;

    &:hover {
        transform: translateY(-3px);
        border-color: rgba(198,161,91,0.35);
        box-shadow: var(--shadow-hover);
    }
`,ie=a.div`
    position: relative;
    width: 100%;
    max-height: 324px;
    min-width: 100px;
    min-height: 300px;
    aspect-ratio: 3 / 4;
    background: linear-gradient(160deg, #223148 0%, #0F1A2A 100%);
    overflow: hidden;
`,ae=a.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease;
    ${Q}:hover & { transform: scale(1.04); }
`,oe=a.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
`,se=a.span`
    font-size: 2rem;
    color: var(--text-accent);
    opacity: 0.6;
`,ce=a.span`
    font-size: 0.7rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
`,le=a.div`
    position: absolute;
    inset: 8px;
    border: 1px solid rgba(198,161,91,0.14);
    border-radius: 2px;
    pointer-events: none;
`,ue=a.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 14px 14px 14px 14px;
    border-top: 1px solid var(--bg-hairline);
`,de=a.h4`
    color: var(--text-primary);
    font-size: 1rem;
    line-height: 1.35;
    font-weight: 500;
    min-height: 2.7em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`,fe=a.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`,pe=a.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,$=a.span`
    font-size: 1.0rem;
    text-transform: uppercase;
    color: var(--text-muted);
`,me=a.span`
    font-size: 1.25rem;
    color: var(--text-accent);
`,he=a.button`
    all: unset;
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    border: 1px solid var(--btn-ghost-border);
    color: var(--text-primary);
    cursor: pointer;
    transition: background-color 160ms ease, color 160ms ease,
                border-color 160ms ease;

    &:hover {
        background: var(--accent);
        color: var(--accent-contrast);
        border-color: var(--accent);
    }
`;export{K as default};