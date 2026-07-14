import { Outlet } from "react-router";
import NavBar from "#component/navbar.tsx";
import navigation from "#util/common.navigation.ts";
import ctx from "#context/common.ts";

/**
 * ส่วนประกอบแสดงผลเส้นทางของลูกค้า
*/
const content = function ()
{
  return (
  <>
    <Outlet/>
    <content.NavBar/>
  </>
  );
}
content.NavBar = function PresetNavBar ()
{
  const toHome = () => { void navigation.toIndex (); }
  const toProductBrowser = () => { void navigation.toProductBrowser (); }
  const toDoc = () => { navigation.toDoc (); }
  const toSignIn = () => { void navigation.toAuth (); }
  const auth = ctx.useAuth ();
  const authSigned = ctx.authSigned (auth);

  console.log (auth);

  return <>
  <NavBar>
    <NavBar.Branding text="ร้านขายแผ่นและตลับเกม" onClick={toHome}/>
    <NavBar.Spacing/>
    <NavBar.Search/>
    <NavBar.Menu>
      <NavBar.MenuItem text="สินค้า" onClick={toProductBrowser}/>
      <NavBar.MenuItem text="ช่วยเหลือ" onClick={toDoc}/>
      <NavBar.MenuItem text="เกี่ยวกับ"/>
    </NavBar.Menu>
    {authSigned ? <NavBar.Profile/> : <NavBar.SignIn onClick={toSignIn}/> }
  </NavBar>
  </>;
}
/**
 * แข็งวัตถุ (ความปลอดภัย)
*/
Object.freeze (content);
/**
 * ส่งออกตัวแปร
*/
export default content;