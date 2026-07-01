import{r as e,t}from"./jsx-runtime-DGeXAQPT.js";import{i as n,r}from"./index-Bo1EM-Pz.js";import{t as i}from"./styled-components.browser.esm-B_WbpsU9.js";var a=e(n(),1),o=`/UniversityCSI204/assets/home.testImage-Biv9CYx4.jpg`,s=t();function c(){let e=r(),[t,n]=(0,a.useState)(`00:00:00`);return a.useEffect(()=>{let e=setInterval(()=>{let e=`http://${location.hostname}:51000/uptime`;fetch(e).then(e=>e.json()).then(e=>{let t=Number(e.value);n(`${Math.floor(t/36e5).toString().padStart(2,`0`)}:${Math.floor(t/6e4%60).toString().padStart(2,`0`)}:${Math.floor(t/1e3%60).toString().padStart(2,`0`)}`)})},1e3);return()=>{clearInterval(e)}}),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(l,{children:[(0,s.jsx)(`img`,{src:o,height:384}),(0,s.jsx)(`h1`,{children:`สวัสดีชาวออกซิเจน`}),(0,s.jsxs)(`p`,{children:[`เวลาของเซิร์ฟเวอร์: `,t]}),(0,s.jsx)(`button`,{onClick:()=>void e(`/doc   `),children:`ไปหน้าเอกสาร`}),(0,s.jsx)(`button`,{onClick:()=>void e(`/auth`),children:`ไปหน้าล็อคอิน`}),(0,s.jsx)(`button`,{onClick:()=>void e(`/product`),children:`ไปร้านค้า`}),(0,s.jsx)(`button`,{onClick:()=>void e(`/settings`),children:`ไปตั้งค่า`})]})})}var l=i.div`
    position: absolute;
    inset: 0px;
    width: 100%;
    height: 100%;

    display: flex; 
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
`;export{c as default};