import react from "react";
import styled from "styled-components";

interface PropRoot
{
  posX ?: string;
  posY ?: string;
  width ?: string;
  height ?: string;
  heightMax ?: string;
  children ?: react.ReactNode;
}
interface PropItem
{
  icon ?: string | react.JSX.Element;
  text ?: string;
  onClick ?: () => boolean | undefined;
}

const content = function MenuContext ()
{
  return <content.Root/>
}
content.Root = function MenuContextRoot (prop: PropRoot)
{
  const autoPosition = react.useRef ([ 0, 0 ]);
  
  prop.posX = prop.posX ?? `${String (autoPosition.current [0])}px`;
  prop.posY = prop.posY ?? `${String (autoPosition.current [1])}px`;
  prop.width = prop.width ?? "192px";
  prop.height = prop.height ?? "auto";
  prop.heightMax = prop.heightMax ?? "384px";

  const onTrackPosition = (event: MouseEvent) =>
  {
    autoPosition.current = [event.clientX, event.clientY];
  }

  return (
    <>
    </>
  );
}
content.Item = function MenuContextItem (prop: PropItem)
{
  return (
    <>
    </>
  );
}

const StyleRoot = styled.div`
  pointer-events: none;
  position: fixed;
  inset: 0px;
`;
const StyleRootInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const StyleRootContainer = styled.div<{
  $posX: string;
  $poxY: string;
  $width: string;
  $height: string;
  $heightMax: string;
}>`
  position: absolute;
  inset: ${prop => `${prop.$posX} ${prop.$poxY}`};
  width: ${prop => prop.$width};
  height: ${prop => prop.$height};
  max-height: ${prop => prop.$heightMax};
`;

export default content;
