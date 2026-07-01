import{r as e,t}from"./jsx-runtime-DGeXAQPT.js";import{o as n}from"./index-D-ZP0JHA.js";import{t as r}from"./styled-components.browser.esm-BSf9XXZC.js";var i=e(n(),1),a=`/UniversityCSI204/assets/home.testImage-Biv9CYx4.jpg`,o=t();function s(){let[e,t]=(0,i.useState)(`00:00:00`);return i.useEffect(()=>{let e=setInterval(()=>{let e=`http://${location.hostname}:51000/uptime`;fetch(e).then(e=>e.json()).then(e=>{let n=Number(e.value);t(`${Math.floor(n/36e5).toString().padStart(2,`0`)}:${Math.floor(n/6e4%60).toString().padStart(2,`0`)}:${Math.floor(n/1e3%60).toString().padStart(2,`0`)}`)})},1e3);return()=>{clearInterval(e)}}),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(c,{children:[(0,o.jsx)(`img`,{src:a,height:384}),(0,o.jsx)(`h1`,{children:`สวัสดีชาวออกซิเจน`}),(0,o.jsxs)(`p`,{children:[`เวลาของเซิร์ฟเวอร์: `,e]})]})})}var c=r.div`
    position: absolute;
    inset: 0px;
    width: 100%;
    height: 100%;

    display: flex; 
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
`;export{s as default};