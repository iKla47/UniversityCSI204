import Self from "#component/home.tsx";
import Preset from "#component/common.preset.tsx";

const content = function Home ()
{
  return <>
    <Self.Intro/>
    <Self.Recommendation/>
    <Self.Favorite/>
    <Self.Ending/>
    <Preset.NavBar/>
  </>;
}
export default content;