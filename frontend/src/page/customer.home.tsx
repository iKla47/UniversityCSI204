import Self from "#component/home.tsx";

const content = function Home ()
{
  return <>
    <Self.Intro/>
    <Self.Recommendation/>
    <Self.Favorite/>
    <Self.Ending/>
  </>;
}
export default content;