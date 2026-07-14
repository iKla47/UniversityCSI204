//
// จุดเริ่มต้นของเว็บแอป - ระบบส่วนหน้า
//
import React from "react";
import ReactDOM from "react-dom/client";

const DomElement = document.getElementById ("app") as HTMLDivElement;
const DomReact = ReactDOM.createRoot (DomElement);
const Component = React.lazy (() => import ("./initV2.tsx"));

DomReact.render (
  <React.StrictMode>
    <Component/>
  </React.StrictMode>
);