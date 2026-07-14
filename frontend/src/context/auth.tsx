import react from "react";

interface Context
{
  session: string;
  sessionIssued: Date;
  sessionExpire: Date;
}
const initial = () : Context =>
{
  return {
    session: "",
    sessionIssued: Date.prototype,
    sessionExpire: Date.prototype
  };
}
const useAuth = () =>
{
  return react.useContext (Context);
}

const Content = () => { return; }
const Context = react.createContext<Context> (initial ());

Content.Provider = Context.Provider;
Content.Consumer = Context.Consumer;
Content.useAuth = useAuth;
Content.initial = initial;

export default Content;