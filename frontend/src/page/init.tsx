import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Splash from "./index.tsx"

/**
 * หน้าต่างที่ไม่มีการแสดงผลเป็นของตัวเอง
 * แต่ใช้สำหรับการโหลดโค็ดและเริ่มการทำงานระบบส่วนต่าง ๆ
*/
export default function Init ()
{
  const [completed, setCompleted] = useState (false);

  useEffect (() =>
  {
    void new Promise (() =>
    {
      const initAuth = () => { return; }
      const initAccount = () => { return; }

      try
      {
          initAuth ();
          initAccount ();
          setCompleted (true);
      }
      catch (except)
      {
        console.error (except);
      }
    });
  },
  []);

  return <>
    {completed ? <Outlet/> : <Splash/> }
  </>;
}