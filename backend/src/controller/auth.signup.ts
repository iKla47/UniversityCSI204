import error        from "#core/error.ts";
import http         from "#core/http.ts";
import logging      from "#core/log.ts";
import objectReader from "#core/object.reader.ts";
import model        from "#model/auth.signin.ts";
import
{
    type Request,
    type Response
}
from "#core/http.ts";

/**
 * ระบบบันทึกกิจกรรมเริ่มต้น
*/
const log = logging.scoped ("AuthSignup");
/**
 * ระบบจัดการสร้างบัญชีใหม่
*/
const content = function ()
{
    return;
}

/**
 * แข็งวัตถุ (ความปลอดภัย)
*/
Object.freeze (content);
/**
 * ส่งออกตัวแปร
*/
export default content;