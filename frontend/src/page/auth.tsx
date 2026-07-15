import react from "react";
import objReader from "#util/common.objectReader";

import Self from "#component/auth.tsx";

/**
 * ส่วนประกอบแสดงผลสำหรับหน้าจอลงชื่อเข้าใช้งานบัญชี
*/
const content = function Auth ()
{
  const url = `${location.origin}/`;
  const context = react.useRef ({
    redirectSignedIn: url,
    redirectSignedUp: url,
    reason: content.REASON_NONE
  })

  const decodeContext = (value: string) => 
  {
    return decodeURIComponent(atob(value).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  const onLoadContext = () =>
  {
    const search = new URLSearchParams (location.search);
    const raw = search.get ("context");

    if (!raw) {
      return;
    }
    const jsonRaw = decodeContext (raw);
    const json = JSON.parse (jsonRaw) as Record<string, unknown>;
    const read = objReader (json);
    const ctx = context.current;

    const readSignIn = read.optionalString ("RedirectSignedIn");
    const readSignUp = read.optionalString ("RedirectSignedUp");
    const readReason = read.optionalInteger ("Reason");

    ctx.redirectSignedIn = readSignIn ?? url;
    ctx.redirectSignedUp = readSignUp ?? url;
    ctx.reason = readReason ?? content.REASON_NONE;

    history.replaceState (null, "", url);
  }
  const onSignedIn = () =>
  {
    location.replace (context.current.redirectSignedIn);
    return;
  }

  react.useEffect (() =>
  {
    onLoadContext ();
  },
  []);

  return (
    <Self
      title="ร้านขายแผ่นและตลับเกม"
      description="ยินดีต้อนรับ โปรดป้อนรหัสบัญชีของคุณเพื่อลงชื่อเข้าใช้"
      transparent={false}
      onSignedIn={onSignedIn}
    />
  );
}

/**
 * เหตุผล: ไม่มี/ไม่ระบุ
*/
content.REASON_NONE = 0;
/**
 * เหตุผล: จำเป็นต้องระบุตัวตน
*/
content.REASON_IDENTITY = 1;
/**
 * เหตุผล: ต้องยืนยันสองชั้น
*/
content.REASON_VERIFICATION = 2;
/**
 * เหตุผล: เพิ่มบัญชีใหม่
*/
content.REASON_ADDON = 3;
/**
 * เหตุผล: รหัสยืนยันตัวตนหมดอายุ
*/
content.REASON_EXPIRED = 4;

/**
 * แข็งวัตถุ (ความปลอดภัย)
*/
Object.freeze (content);
/**
 * ส่งออกตัวแปร
*/
export default content;