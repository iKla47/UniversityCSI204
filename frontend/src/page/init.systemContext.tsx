import apiAuth from "#util/api.auth.ts";

import { useEffect, useRef, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode } from "react";

import 
{ 
  CtxAuth, CtxLanguage, 
  defaultAuth, defaultLanguage 
} 
from "#context/common.ts";

import 
{ 
  CtxDialog,
  CtxMenuContext, CtxSettings, CtxToast, 
  defaultDialog, 
  defaultMenuContext, defaultSettings, defaultToast 
} 
from "#context/common.ui.ts";

/**
 * ระบบของ React Query
*/
const query = new QueryClient ();
/**
 * ส่วนประกอบการทำงานของระบบ
*/
const content = function InitSystemContext (prop: ComponentProperty)
{
  const auth = useRef (defaultAuth ());
  const language = useRef (defaultLanguage ());
  const menuContext = useRef (defaultMenuContext ());
  const settings = useRef (defaultSettings ());
  const toast = useRef (defaultToast ());
  const dialog = useRef (defaultDialog ());


  const onInitAuth = useCallback (() =>
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
  }, 
  []);
  const onTerminateAuth = useCallback (() =>
  {
    return;
  },
  []);

  useEffect (() =>
  {
    const onMounted = prop.onMounted;
    const onUnmounted = prop.onUnmounted;

    onInitAuth ();
    onMounted ();

    return () =>
    {
      onTerminateAuth ();
      onUnmounted ();
    }
  },
  [
    prop.onMounted, prop.onUnmounted,
    onInitAuth,
    onTerminateAuth
  ]);

  return (
    <CtxAuth.Provider value={auth.current}>
      <CtxLanguage.Provider value={language.current}>
        <CtxDialog.Provider value={[
            dialog.current,
            (v) => { dialog.current = v; }
          ]}>
          <CtxMenuContext.Provider value={menuContext.current}>
            <CtxToast value={toast.current}>
              <CtxSettings value={settings.current}>
                <QueryClientProvider client={query}>
                  {prop.children}
                </QueryClientProvider>
              </CtxSettings>
            </CtxToast>
          </CtxMenuContext.Provider>
        </CtxDialog.Provider>
      </CtxLanguage.Provider>
    </CtxAuth.Provider>
  );
}

interface ComponentProperty
{
  onMounted: () => void;
  onUnmounted: () => void;
  children: ReactNode;
}

/**
 * ส่งออกตัวแปร
*/
export default content;