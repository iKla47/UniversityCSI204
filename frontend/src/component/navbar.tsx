import react from "react";
import styled from "styled-components";


interface ContentProperty
{
  children: react.ReactNode;
}
interface SpacingProperty
{
  level ?: number;
}

interface ContentContextProperty
{
  width: number;
}
const ContentContext = react.createContext<ContentContextProperty> ({
  width: 0
});
const content = function NavBar (prop: ContentProperty)
{
  const [width, setWidth] = react.useState (0);
  const reference = react.useRef (HTMLDivElement.prototype);
  const resize = () =>
  {
    setWidth (reference.current.clientWidth);
  }
  react.useEffect (() =>
  {
    window.addEventListener ("resize", resize);
    resize ();

    return () =>
    {
      window.removeEventListener ("resize", resize);
    }
  },
  []);
  react.useEffect (() =>
  {
    console.log (width);
  },
  [width]);

  return <Root ref={reference}>
    <ContentContext value={{ width: width }}>
      {prop.children}
    </ContentContext>
  </Root>;
}
content.Branding = function NavBarBranding ()
{
  const context = react.useContext (ContentContext);

  console.log (context.width);

  return <Branding>
    <BrandingImg src={undefined}/>
    <BrandingLabel>ร้านขายแผ่นและตลับเกม</BrandingLabel>
  </Branding>;
}
content.Search = function NavBarSearch ()
{
  return <Search/>
}
content.Profile = function NavBarProfile ()
{
  return <Profile>
    <ProfileImg/>
  </Profile>
}
content.Spacing = function NavBarSpacing (prop: SpacingProperty)
{
  return <Spacing $level={prop.level ?? 1}/>;
}

const Root = styled.div`
  position: absolute;
  inset: 0px 0px auto 0px;
  height: 48px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 8px;

  align-items: center;

  background-color: var(--bg-primary);
  border-color: var(--bg-primary-border);
  border-width: 0px 0px 2px 0px;
  border-style: solid;

  & > *:first-child { margin: 0px 0px 0px 32px; }
  & > *:last-child { margin: 0px 32px 0px 0px; }
`;
const Branding = styled.div`
  min-width: 32px;
  max-height: 32px;
`;
const BrandingImg = styled.img`
  width: 32px;
  height: 32px;
`;
const BrandingLabel = styled.label`
  width: auto;
  height: 32px;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0px 16px;
`;
const Search = styled.input`
  display: block;
  width: 256px;
  min-height: 32px;

  font-size: 1rem;
  background-color: #418C94;
  border-radius: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 0px 16px;
`;
const Profile = styled.div`
  width: 32px;
  min-height: 32px;
`;
const ProfileImg = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  border: 0px solid var(--bg-primary-border);
  border-radius: 100%;
  transition: border-width 66ms cubic-bezier(0.22, 1, 0.36, 1);

  &:hover
  {
    border-width: 2px;
  }
`;
const Spacing = styled.div<{ $level: number }>`
  min-height: 32px;
  flex-grow: ${prop => prop.$level}
`;
export default content;