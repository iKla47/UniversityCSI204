import react from "react";

export interface IrMenuBar
{
  direction: "row" | "column";
  align: "start" | "center" | "end";
  selected: unknown;

  onClick: (value: unknown, handled: boolean) => void;
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
const useIrMenuBar = () =>
{
    return react.useContext (ContextIrMenuBar);
}

const Content = () => { return; }
const ContextIrMenuBar = react.createContext (defIrMenuBar ());

Content.ProviderIrMenuBar = ContextIrMenuBar.Provider;
Content.defIrMenuBar = defIrMenuBar;
Content.useIrMenuBar = useIrMenuBar;

export default Content;