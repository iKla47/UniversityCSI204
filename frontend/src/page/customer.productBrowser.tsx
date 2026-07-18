import react      from "react";
import styled     from "styled-components";

import ctx from "#context/common.ts";
import cmmNavigation from "#util/common.navigation.ts";
import apiProduct from "#util/api.product.ts";

import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import type { ReactNode } from "react";
import type { UseQueryResult } from "@tanstack/react-query";
import type { FetchBasic } from "#util/api.product.ts";

import testArtwork from "#asset/image/test.artwork.jpg";

interface PropList
{
  queryList: UseQueryResult<FetchBasic []>;
}
interface PropItem
{
  id: number;
  name: string;
  artwork: string | undefined;

  onClick: (id: number) => void;
}

const content = function ProductBrowser ()
{
  const [serachParam] = useSearchParams ();
  const search = serachParam.get ("search");
  const auth = ctx.useAuth ();

  const queryList = useQuery ({
    queryKey: ["Product", "GetBasicByList"],
    queryFn: () => apiProduct.getBasicByList (auth.session),
  });

  react.useEffect (() =>
  {
    console.log ("SEARCH");
  },
  [search]);

  return (<>
    <content.List queryList={queryList}/>
    <content.Filter/>
  </>);
}
content.List = function ProductBrowserList (prop: PropList)
{
  const [children, setChildren] = react.useState<ReactNode> ([]);

  const onClick = (id: number) =>
  {
    void cmmNavigation.toProduct (id);
    return;
  }
  const onRender = () =>
  {
    const query = prop.queryList;

    if (!query.data) {
      return <></>;
    }
    setChildren (query.data.map ((x) =>
    {
      const key = String (x.id);
      const id = x.id;
      const name = x.name;
      const artwork = (x.artwork.length > 0) ? x.artwork : undefined;

      return <content.ListItem 
        key={key}
        id={id}
        name={name}
        artwork={artwork}
        onClick={onClick}/>
    }));
  }
  react.useEffect (() =>
  {
    onRender ();
    return;
  },
  [prop.queryList]);

  return (
    <SyledList>
      {children}
    </SyledList>
  );
}
content.ListItem = function ProductBrowserListItem (prop: PropItem)
{
  const onClick = (event: react.MouseEvent) =>
  {
    event.preventDefault ();
    event.stopPropagation ();

    prop.onClick (prop.id);
  }

  return (
    <StyledListItemContainer onClick={onClick}>
      <StyledListItem src={prop.artwork}/>
      <StyledListItemText>{prop.name}</StyledListItemText>
    </StyledListItemContainer>
  )
}
content.Filter = function ProductBrowserFilter ()
{
  return (
    <StyledFilter>
      <StyledFilterLabel>ตัวเลือก</StyledFilterLabel>
    </StyledFilter>
  );
}

const SyledList = styled.div`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  overflow: hidden auto;
  margin: 48px 510px 0px 254px;
  padding: 16px 2px 16px 2px;

  @media (max-width: 1600px)
  {
    margin: 48px 510px 16px 126px;
  }
  @media (max-width: 1440px)
  {
    margin: 48px 382px 16px 30px;
  }
  @media (max-width: 1200px)
  {
    margin: 48px 382px 16px 14px;
  }
  @media (max-width: 1024px)
  {
    margin: 48px 62px 16px 62px;
  }
  @media (max-width: 768px)
  {
    margin: 48px 14px 16px 14px;
  }
`;
const StyledListItemContainer = styled.button`
  width: 200px;
  height: 300px;
  display: block;
  margin: 0px;
  padding: 0px 0px 40px 0px;

  outline: var(--bg-primary-border) solid 0px;
  background-color: transparent;
  transition: outline 66ms cubic-bezier(0.16, 1, 0.3, 1);
  transition: width 500ms cubic-bezier(0.16, 1, 0.3, 1);
  transition: height 500ms cubic-bezier(0.16, 1, 0.3, 1);

  &:hover, &:focus
  {
    outline-width: 0px;
  }
  &:active
  {
    outline-width: 2px;
  }

  @media (max-width: 960px)
  {
    width: 150px;
    height: 200px;
  }
  @media (max-width: 640px)
  {
    width: 125px;
    height: 175px;
  }
  @media (max-width: 512px)
  {
    width: 100px;
    height: 150px;
  }
`;
const StyledListItemText = styled.label`
  display: block;
  margin-top: 8px;
`;
const StyledListItem = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  -ms-user-select: none;
`;
const StyledFilter = styled.div`
  position: fixed;
  inset: 64px 144px auto auto;
  width: 324px;
  background-color: var(--bg-primary);
  border-radius: 4px;
  padding: 8px 16px;

  @media (max-width: 1920px)
  {
    inset: 64px 192px auto auto;
  }
  @media (max-width: 1440px)
  {
    inset: 64px 64px auto auto;
  }
  @media (max-width: 1024px)
  {
    display: none;
    inset: 0px 0px 0px 0px;
  }
`;
const StyledFilterLabel = styled.label`
  width: 100%;
  height: 32px;
  display: block;
  font-size: 1.25rem;
  font-weight: normal;
`;

/**
 * แข็งวัตถุ (ความปลอดภัย)
*/
Object.freeze (content);
/**
 * ส่งออกตัวแปร
*/
export default content;