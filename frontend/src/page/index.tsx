//
// จุดเริ่มต้นของเว็บแอป - ระบบส่วนหน้า
//
import react from "react";
import reactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const view = document.getElementById ("app") as HTMLDivElement;
const root = reactDom.createRoot (view);

function Main ()
{
  //
  // โหลดหน้าต่างเมื่อจำเป็นเท่านั้น
  //
  const Init = react.lazy (() => import ("./init.tsx"));
  const Auth = react.lazy (() => import ("./auth.tsx"));
  const Home = react.lazy (() => import ("./home.tsx"));
  const Settings = react.lazy (() => import ("./settings.tsx"));

  root.render (<>
    <react.StrictMode>
      <react.Suspense fallback={<Splash/>}>
        <BrowserRouter>
          <Routes>
            <Route Component={() => <Init/>}>
              <Route path="/" index element={<Home/>}/>
              <Route path="/auth" element={<Auth/>}/>
              <Route path="/settings" element={<Settings/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </react.Suspense>
    </react.StrictMode>
  </>);
}
export default function Splash ()
{
  return <>
  </>;
}

Main ();