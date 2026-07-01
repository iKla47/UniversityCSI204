import styled from "styled-components";
import Markdown from 'react-markdown'
import { useEffect, useState } from "react";
import { Routes, Route, useParams, useSearchParams } from "react-router-dom";


const TABLE_LOC =
[
  {
    id: 0,
    entry: [
      { title: "หน้าแรก", id: 0 },
      { title: "ใบอนุญาต", id: 1 }
    ]
  }
];
const TABLE_CONTENT =
[
  { id: "0", src: "index.md", list: 0 },
  { id: "1", src: "license.md", list: 0 }
];

const content = function Doc ()
{
  const [search] = useSearchParams ();
  const [id, setId] = useState (search.get ("content") ?? 0);
  const [loc, setLoc] = useState ([<></>]);
  const [content, setContent] = useState ("");

  useEffect (() =>
  {
    const data = TABLE_CONTENT.find ((x) => x.id == id)!;
    const contentLoc = TABLE_LOC [data.list];
    const contentSrc = data.src;

    fetch (`/UniversityCSI204/doc/${contentSrc}`).then (async (x) =>
    {
      setContent (await x.text ());
    });
    setLoc (contentLoc.entry.map ((item, index) =>
    {
      return <li key={index} onClick={() => setId (item.id)}>{item.title}</li>
    }));
  },
  [id]);
  
  return <>
    <List>
      <ListSearch></ListSearch>
      <ListContent>{loc}</ListContent>
    </List>
    <Main>
      <MainView>
        <MainContainer>
          <MainContent>
            <Markdown>{content}</Markdown>
          </MainContent>
        </MainContainer>
      </MainView>
    </Main>
  </>;
}
content.View = function DocView ()
{

}
content.Body = function ()
{
  return <></>;
}

const List = styled.div`
  position: absolute;
  inset: 0px;
  right: auto;
  width: 25%;
  background-color: var(--bg-primary);
`;
const ListSearch = styled.div`
  width: 100%;
  padding: 0px 12px;

`;
const ListContent = styled.ul`

  display: flex;
  flex-direction: column;
  padding: 12px 12px;

  li 
  {
    display: block;
    border-radius: 4px;
    width: 100%;
    height: 40px;
    padding: 8px;
  }
  li:hover
  {
    background-color: #bed7d9;
  }
`;
const Main = styled.div`
  position: static;
  height: 100%;
`;
const MainContainer = styled.div`
  position: absolute;
  inset: 0px;
  left: 30%;
  height: 100%;
`;
const MainView = styled.div`
  margin: 0 auto;
  height: auto;
`;
const MainContent = styled.main`
  margin: 48px 0px;
  max-width: 210mm;
  width: 100%;
`

export default content;