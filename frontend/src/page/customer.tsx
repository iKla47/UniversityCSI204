import { lazy } from "react";
import { Route, Routes } from "react-router";

//
// โหลดหน้าต่างเมื่อจำเป็นเท่านั้น
//
const CsHome = lazy (() => import ("./customer.home.tsx"));
const CsProduct = lazy (() => import ("./customer.product.tsx"));
const CsProductBrowser = lazy (() => import ("./customer.productBrowser.tsx"));

const content = function ()
{
  return <Routes>
    <Route>
      <Route path="/" index element={<CsHome/>}/>
      <Route path="/product" element={<CsProduct/>}/>
      <Route path="/product-browser" element={<CsProductBrowser/>}/>
    </Route>;
  </Routes> 
}
export default content;