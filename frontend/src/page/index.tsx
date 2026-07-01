//
// จุดเริ่มต้นของเว็บแอป - ระบบส่วนหน้า
//
import react from "react";
import reactDom from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";

import Splash from "#page/splash.tsx";

//
// โหลดหน้าต่างเมื่อจำเป็นเท่านั้น
//
const Init = react.lazy (() => import ("./init.tsx"));
const Home = react.lazy (() => import ("./home.tsx"));
const Doc = react.lazy (() => import ("./doc.tsx"));
const Auth = react.lazy (() => import ("./auth.tsx"));
const Product = react.lazy (() => import ("./product.tsx"));
const Settings = react.lazy (() => import ("./settings.tsx"));

const Element = document.getElementById ("app")!;
const DOM = reactDom.createRoot (Element);


DOM.render (
  <react.StrictMode>
    <react.Suspense fallback={<Splash/>}>
      <HashRouter>
        <Routes>
          <Route Component={() => <Init/>}>
            <Route path="/" index element={<Home/>}/>
            <Route path="/doc/*" element={<Doc/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </react.Suspense>
  </react.StrictMode>
);