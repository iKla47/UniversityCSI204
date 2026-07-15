import react from "react";
import styled from "styled-components";
import context from "#context/common.ui.ts";
import
{
  type IrMenuBar
}
from "#context/common.ui.ts";

interface PropRoot
{
  visible ?: boolean;
  direction ?: "row" | "column";
  align ?: "start" | "center" | "end";
  width ?: string;
  widthMax ?: string;
  height ?: string;
  heightMax ?: string;
  margin ?: string;
  gap ?: string;
  children ?: react.ReactNode;
  selected ?: unknown;

  onClick ?: (value: unknown, handled: boolean) => void;
}
interface PropHeading
{
  size ?: string;
  text ?: string;
}
interface PropItem
{
  width ?: string;
  height ?: string;
  icon ?: string | React.ComponentType<unknown> | React.ReactElement;
  text ?: string;
  value ?: unknown;

  onClick ?: () => boolean | undefined;
}


const content = function MenuBar (prop: PropRoot)
{
  return (
    <content.Root 
      visible={prop.visible}
      direction={prop.direction}
      align={prop.align}
      width={prop.width}
      widthMax={prop.widthMax}
      height={prop.height}
      heightMax={prop.heightMax}
      margin={prop.margin}
      gap={prop.gap}
      selected={prop.selected}
      onClick={prop.onClick}>
      {prop.children}
    </content.Root>
  );
}
content.Root = function MenuBarRoot (prop: PropRoot)
{
  const visible = prop.visible ?? true;
  const direction = prop.direction ?? "row";
  const align = prop.align ?? "center";
  const width = prop.width ?? "auto";
  const widthMax = prop.widthMax ?? "auto";
  const height = prop.height ?? "auto";
  const heightMax = prop.heightMax ?? "auto";
  const margin = prop.margin ?? "0px";
  const gap = prop.gap ?? "4px";
  const click = prop.onClick ?? function () { return; };

  const onClick = (value: unknown, handled: boolean) =>
  {
    click (value, handled);

    if (handled)
    {
      selected.current = value;
      setMemory (initMemory ());
    }
  }
  const initMemory = () : IrMenuBar =>
  {
    return {
      direction: direction,
      align: align,
      selected: selected.current,
      onClick: onClick
    }
  }
  const selected = react.useRef (prop.selected);
  const [memory, setMemory] = react.useState<IrMenuBar> (initMemory ());

  react.useEffect (() =>
  {
    setMemory (initMemory ());
  },
  [prop]);

  return (
    <StyleRoot 
      $visible={visible}
      $direction={direction}
      $width={width}
      $widthMax={widthMax}
      $height={height}
      $heightMax={heightMax}
      $margin={margin}
      $gap={gap}
      >
      <context.ProviderIrMenuBar value={memory}>
        {prop.children}
      </context.ProviderIrMenuBar>
    </StyleRoot>
  );
}
content.Heading = function MenuBarHeading (prop: PropHeading)
{
  return (
    <StyleHeading $size={prop.size ?? "1.5rem"}>{prop.text}</StyleHeading>
  );
}
content.Item = function MenuBarItem (prop: PropItem)
{
  const ctx = context.useIrMenuBar ();
  const dir = ctx.direction;
  const row = dir === "row";
  const align = ctx.align;
  const value = prop.value;
  const width = prop.width ?? (row ? "96px" : "100%");
  const height = prop.height ?? (!row ? "40px" : "auto");
  const selected = Object.is (prop.value, ctx.selected); 
  const click = prop.onClick ?? function () { return; };


  const onClick = (event: react.MouseEvent) =>
  {
    event.preventDefault ();
    event.stopPropagation ();

    ctx.onClick (value, click () ?? true);
  }
  const Image = () =>
  {
    const source = prop.icon;

    if (typeof source === 'string') 
    {
      return <img src={source} alt={""}/>;
    }
    if (react.isValidElement(source)) 
    {
      return source;
    }

    if (typeof source === 'function' || typeof source === 'object') 
    {
      const Component = source as React.ComponentType;
      return <Component />;
    }
    return null;
  }

  return (
    <StyleItem 
      onClick={onClick}
      $direction={dir}
      $align={align} 
      $width={width} 
      $height={height}
      $selected={selected}>
        <Image/>
      {prop.text}
    </StyleItem>
  );
}

const StyleRoot = styled.div<{
  $visible: boolean;
  $width: string;
  $widthMax: string;
  $height: string;
  $heightMax: string;
  $margin: string;
  $direction: string;
  $gap: string;
}>`
  display: ${prop => prop.$visible ? "flex" : "none"};
  flex-wrap: nowrap;
  flex-direction: ${prop => prop.$direction};
  width: ${prop => prop.$width};
  height: ${prop => prop.$height};
  max-width: ${prop => prop.$widthMax};
  max-height: ${prop => prop.$heightMax};
  margin: ${prop => prop.$margin};
  gap: ${prop => prop.$gap};

  background-color: "var(--bg-primary);";
  border-radius: 8px;
  border: none;
  outline: none;
`;
const StyleHeading = styled.p<{ $size: string; }>`
  font-size: ${prop => prop.$size};
  font-weight: normal;
`;
const StyleItem = styled.button<{
  $direction: string;
  $align: string;
  $width: string;
  $height: string;
  $selected: boolean;
}>`
  width: ${prop => prop.$width};
  height: ${prop => prop.$height};
  text-align: ${prop => prop.$align};

  background-color: ${prop => prop.$selected ? 
    "var(--menu-primary-selected)" :  "var(--menu-primary)"};
  border-color: transparent;
  outline-color: transparent;

  &:hover, &:focus
  {
    background-color: ${prop => prop.$selected ? 
      "var(--menu-primary-selected-hover)" :  "var(--menu-primary-hover)"};
  }
  &:active
  {
    background-color: ${prop => prop.$selected ? 
      "var(--menu-primary-selected-active)" :  "var(--menu-primary-active)"};
  }

  & > img,
  & > svg
  {
    display: inline-block;
    vertical-align: middle;
    margin-right: 16px;
    width: 24px;
    height: 24px;
  }
`;

/**
 * แข็งวัตถุ (ความปลอดภัย)
*/
Object.freeze (content);
/**
 * ส่งออกตัวแปร
*/
export default content;