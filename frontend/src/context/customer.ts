import react from "react";

interface ContextCart
{
  item: ContextCartItem [];
}
interface ContextCartItem
{
  product: number;
}
const initCart = () : ContextCart =>
{
    return {
      item: []
    };
}
const useCart = () =>
{
    return react.useContext (ContextCart);
}

const Content = () => { return; }
const ContextCart = react.createContext<ContextCart> (initCart ());

Content.Provider = ContextCart.Provider;
Content.Consumer = ContextCart.Consumer;
Content.useCart = useCart;
Content.initCart = initCart;

export default Content;