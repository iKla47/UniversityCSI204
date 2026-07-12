import NavBar from "#component/navbar.tsx";
import navigation from "#util/common.navigation.ts";

const content = function ()
{
  return;
}
content.NavBar = function PresetNavBar ()
{
  const toHome = () => { void navigation.toIndex (); }
  const toProductBrowser = () => { void navigation.toProductBrowser (); }
  const toDoc = () => { navigation.toDoc (); }

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
    <NavBar.Profile/>
  </NavBar>
  </>;
}
export default content;