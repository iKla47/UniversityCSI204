import styled from "styled-components";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const content = function Doc ()
{
  const Index = lazy (() => import ("../component/doc/index"));
  return <>
   <Routes>
    <Route>
      <Route path="/" index element={<Index/>}/>
    </Route>
   </Routes>
  </>
}
content.View = function DocView ({ children }: { children: React.ReactNode })
{
  return <>
    <List>

    </List>
    <Main>
      <MainView>
        <MainContent>
         {children} 
        </MainContent>
      </MainView>
    </Main>
  </>;
}

const List = styled.div`

`;
const Main = styled.div`
  position: static;
  inset: 0px;
  width: 100%;
  height: 100%;
`;
const MainView = styled.div`
  margin: 0 auto;
  padding-left: 128px;
  width: 210mm;
  height: auto;
`;
const MainContent = styled.main`
`

export default content;