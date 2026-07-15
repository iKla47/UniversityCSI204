import react from "react";

export interface IrMenuBar
{
  direction: "row" | "column";
  align: "start" | "center" | "end";
  selected: unknown;

  onClick: (value: unknown, handled: boolean) => void;
}
/**
 * โครงสร้างข้อมูลบริบทของเมนูนำทาง
*/
export interface IrNavBar
{
    /**
    * ความกว้างของหน้าจอ ณ ปัจจุบัน
    */
    width: number;
}

const defIrMenuBar = () : IrMenuBar =>
{
    return {
        direction: "row",
        align: "center",
        selected: undefined,

        onClick: () => { return; }
    }
}
const defIrNavBar = () : IrNavBar =>
{
    return {
        width: 0
    }
}
const useIrMenuBar = () =>
{
    return react.useContext (ContextIrMenuBar);
}
const useIrNavBar = () =>
{
    return react.useContext (ContextIrNavBar)
}

const Content = () => { return; }
const ContextIrMenuBar = react.createContext (defIrMenuBar ());
const ContextIrNavBar = react.createContext (defIrNavBar ());

Content.ProviderIrMenuBar = ContextIrMenuBar.Provider;
Content.ProviderIrNavBar = ContextIrNavBar.Provider;
Content.defIrMenuBar = defIrMenuBar;
Content.defIrNavBar = defIrNavBar;
Content.useIrMenuBar = useIrMenuBar;
Content.useIrNavBar = useIrNavBar;

export default Content;