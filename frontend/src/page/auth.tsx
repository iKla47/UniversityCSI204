import objReader from "#util/common.objectReader";
import Self from "#component/auth.tsx";
import { useEffect, useRef, useState } from "react";

/**
 * ส่วนประกอบแสดงผลสำหรับหน้าจอลงชื่อเข้าใช้งานบัญชี
*/
export default function Auth ()
{
  const url = `${location.origin}/`;
  const [title] = useState ("ร้านขายแผ่นและตลับเกม");
  const [desc, setDesc] = 
    useState ("ยินดีต้อนรับ โปรดป้อนรหัสบัญชีของคุณเพื่อลงชื่อเข้าใช้");

  const context = useRef ({
    redirectSignedIn: url,
    redirectSignedUp: url,
    reason: REASON_NONE,
  })

  function decodeContext (value: string) 
  {
    return decodeURIComponent(atob(value).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  function onSignedIn ()
  {
    location.replace (context.current.redirectSignedIn);
    return;
  }
  function onSignedUp ()
  {
    location.replace (context.current.redirectSignedUp);
    return;
  }

  useEffect (() =>
  {
    const search = new URLSearchParams (location.search);
    const raw = search.get ("context");

    if (!raw) {
      return;
    }
    const jsonRaw = decodeContext (raw);
    const json = JSON.parse (jsonRaw) as Record<string, unknown>;
    const read = objReader (json);

    const readSignIn = read.optionalString ("RedirectSignedIn");
    const readSignUp = read.optionalString ("RedirectSignedUp");
    const readReason = read.optionalInteger ("Reason");

    context.current = 
    {
      redirectSignedIn: readSignIn ?? url,
      redirectSignedUp: readSignUp ?? url,
      reason: readReason ?? REASON_NONE,
    }
    switch (context.current.reason)
    {
      case REASON_NONE: break;
      case REASON_ADDON:
        setDesc ("เพิ่มบัญชีใหม่ของคุณ");
        break;
      case REASON_EXPIRED:
        setDesc (
          "รหัสการเชื่อมต่อของคุณหมดอายุ กรุณาป้อนรหัสประจำตัวใหม่อีกครั้ง"
        );
        break;
      case REASON_IDENTITY:
        setDesc (
          "เพื่อให้แน่ใจว่าเป็นคุณ กรุณาป้อนรหัสผ่านของคุณ"
        );
        break;
      case REASON_VERIFICATION:
        setDesc (
          "เพื่อให้แน่ใจว่าเป็นคุณ กรุณาป้อนรหัสยืนยันตนของคุณ"
        );
        break;
    }
    history.replaceState (null, "", url);
  },
  [url]);

  return (
    <Self
      title={title}
      description={desc}
      transparent={false}
      onSignedIn={onSignedIn}
      onSignedUp={onSignedUp}
    />
  );
}

/**
 * เหตุผล: ไม่มี/ไม่ระบุ
*/
const REASON_NONE = 0;
/**
 * เหตุผล: จำเป็นต้องระบุตัวตน
*/
const REASON_IDENTITY = 1;
/**
 * เหตุผล: ต้องยืนยันสองชั้น
*/
const REASON_VERIFICATION = 2;
/**
 * เหตุผล: เพิ่มบัญชีใหม่
*/
const REASON_ADDON = 3;
/**
 * เหตุผล: รหัสยืนยันตัวตนหมดอายุ
*/
const REASON_EXPIRED = 4;
