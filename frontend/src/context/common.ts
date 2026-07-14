import react from "react";

interface ContextAuth
{
    name: string;
    session: string;
    sessionIssued: Date;
    sessionExpire: Date;
}
const initAuth = () : ContextAuth =>
{
    return {
        name: "",
        session: "",
        sessionIssued: new Date (NaN),
        sessionExpire: new Date (NaN),
    };
}
const useAuth = () =>
{
    return react.useContext (ContextAuth);
}

const Content = () => { return; }
const ContextAuth = react.createContext (initAuth ());

Content.ProviderAuth = ContextAuth.Provider;
Content.useAuth = useAuth;
Content.initAuth = initAuth;

Content.authSigned = (auth: ContextAuth) =>
{
    return (
        auth.name != "" &&
        auth.session != "" &&
        Date.now () >= auth.sessionIssued.getTime () &&
        Date.now () <= auth.sessionExpire.getTime ()
    );
}
Content.authExpired = (auth: ContextAuth) =>
{
    return (
        Date.now () < auth.sessionIssued.getTime () ||
        Date.now () > auth.sessionExpire.getTime ()
    );
}

export default Content;