import NavBar from "#component/navbar.tsx";
import Self from "#component/home.tsx";

const content = function Home ()
{
  return <>
    <NavBar>
      <NavBar.Branding/>
      <NavBar.Spacing/>
      <NavBar.Search/>
      <NavBar.Profile/>
    </NavBar>
    <Self.Intro/>
  </>;
}
export default content;