import react  from "react";
import ctx    from "#context/common.ts";
import ctxUI  from "#context/common.ui.ts";

import apiAuth from "#util/api.auth.ts";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/**
 * ระบบของ React Query
*/
const query = new QueryClient ();
/**
 * ส่วนประกอบการทำงานของระบบ
*/
const content = function InitSystemContext (
  { onComplete, children }: 
  {
    onComplete: () => void;
    children: react.ReactNode;
  })
{
  const auth = react.useRef (ctx.defAuth ());
  const language = react.useRef (ctx.defLanguage ());
  const menuContext = react.useRef (ctxUI.defMenuContext ());
  const settings = react.useRef (ctxUI.defSettings ());

  const onLoadAuth = () =>
  {
    const saved = apiAuth.saveGetItemPrefered ();
    const ctx = auth.current;

    if (saved)
    {
      ctx.name = saved.name;
      ctx.session = saved.secret;
      ctx.sessionIssued = saved.issued;
      ctx.sessionExpire = saved.expired;
    }
  }

  react.useEffect (() =>
  {
    onLoadAuth ();
    onComplete ();
  },
  []);



  return (
    <ctx.ProviderAuth value={auth.current}>
      <ctx.ProviderLanguage value={language.current}>
        <ctxUI.ProviderMenuContext value={menuContext.current}>
          <ctxUI.ProviderSettings value={settings.current}>
            <QueryClientProvider client={query}>
              {children}
            </QueryClientProvider>
          </ctxUI.ProviderSettings>
        </ctxUI.ProviderMenuContext>
      </ctx.ProviderLanguage>
    </ctx.ProviderAuth>
  );
}
/**
 * แข็งวัตถุ (ความปลอดภัย)
*/
Object.freeze (content);
/**
 * ส่งออกตัวแปร
*/
export default content;