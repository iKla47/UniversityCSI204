import { useState, useEffect, lazy } from "react";
import { HashRouter, Routes, Route, Outlet, useNavigate } from "react-router";
import log from "#util/common.log.ts";
import navigation from "#util/common.navigation.ts";
import InitDebug from "#page/initDebug.tsx";

//
// โหลดหน้าต่างเมื่อจำเป็นเท่านั้น
//
const Home = lazy (() => import ("./home.tsx"));
const Auth = lazy (() => import ("./auth.tsx"));
const Product = lazy (() => import ("./product.tsx"));
const ProductBrowser = lazy (() => import ("./productBrowser.tsx"));
const Settings = lazy (() => import ("./settings.tsx"));

/**
 * หน้าต่างที่ไม่มีการแสดงผลเป็นของตัวเอง
 * แต่ใช้สำหรับการโหลดโค็ดและเริ่มการทำงานระบบส่วนต่าง ๆ
*/
export default function Init ()
{
  return <>
    <HashRouter>
      <Loader/>
    </HashRouter>
  </>;
}
function Loader ()
{
  const navigator = useNavigate ();
  const [completed, setCompleted] = useState (false);

  const onInit = () =>
  {
    log.init ();
    navigation.init (navigator);
  }
  const onTerminate = () =>
  {
    navigation.terminate ();
    log.terminate ();
  }

  useEffect (() =>
  {
    try
    {
      onInit ();
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCompleted (true);
    }
    catch (except)
    {
      console.error (except);
      setCompleted (false);
      onTerminate ();
      return;
    }
    return () =>
    {
      setCompleted (false);
      onTerminate ();
    }
  },
  []);
  useEffect (() =>
  {
    const element = document.getElementById ("app-splash");

    if (element)
    {
      element.style.opacity = (completed ? "0.0" : "1.0");
      element.style.pointerEvents = (completed ? "none" : "all");
    }
  },
  [completed]);

  const View = () =>
  {
    if (completed && import.meta.env.DEV)
    {
      return <>
        <Outlet/>
        <InitDebug/>
      </>;
    }
    if (completed && import.meta.env.PROD)
    {
      return <>
        <Outlet/>
      </>
    }
    return <></>;
  };

  return <Routes>
    <Route Component={() => <View/>}>
      <Route path="/" index element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/product-browser" element={<ProductBrowser/>}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/settings" element={<Settings/>}/>
    </Route>
  </Routes>
}