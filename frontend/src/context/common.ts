import { createContext, useContext } from "react";

/**
 * โครงสร้างข้อมูลบริบทยืนยันตัวตน
*/
export interface CtxAuth
{
    name: string;
    session: string;
    sessionIssued: Date;
    sessionExpire: Date;
}
/**
 * โครงสร้างข้อมูลบริบทข้อมูลภาษา
*/
export interface CtxLanguage
{
    text: number;
    caption: number;
    voice: number;
}
/**
 * รับข้อมูลการยืนยันตัวตนแบบเริ่มต้น
*/
export function defaultAuth () : CtxAuth
{
    return {
        name: "",
        session: "",
        sessionIssued: new Date (NaN),
        sessionExpire: new Date (NaN),
    };
}
/**
 * รับข้อมูลภาษารูปแบบเเริ่มต้น
*/
export function defaultLanguage () : CtxLanguage
{
    return {
        text: 0,
        caption: 0,
        voice: 0
    }
}
/**
 * ใช้งานบริบทการยืนยันตัวตน
*/
export function useAuth ()
{
    return useContext (CtxAuth);
}
/**
 * ใช้งานบริบทข้อมูลภาษา
*/
export function useLanguage ()
{
    return useContext (CtxLanguage);
}

export const CtxAuth = createContext (defaultAuth ());
export const CtxLanguage = createContext (defaultLanguage ());