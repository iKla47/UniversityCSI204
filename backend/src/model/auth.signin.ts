import bcrypt       from "bcrypt";
import sql          from "#core/sql.ts";
import error        from "#core/error.ts";
import objectReader from "#core/object.reader.ts";
import model from "#model/auth.ts";
import { type Session } from "#model/auth.ts";
import { type DataId as DataAuthId } from "#model/auth.ts";
import { type DataId as DataAccountId } from "#model/account.ts"

/**
 * ระบบจัดการวิธีการลงชื่อเข้าใช้งานระบบ
*/
const content = function ()
{
    return;
}
/**
 * ขั้นตอนการลงชื่อเข้าใช้: ไม่ทราบ
*/
content.STEP_UNKNOWN = 0;
/**
 * ขั้นตอนการลงชื่อเข้าใช้: ระบุรหัสประจำตัวและรหัสผ่าน
*/
content.STEP_SIMPLE = 1;
/**
 * ขั้นตอนการลงชื่อเข้าใช้: ระบุรหัสประจำตัว
*/
content.STEP_IDENTIFIER = 2;
/**
 * ขั้นตอนการลงชื่อเข้าใช้: ระบุรหัสผ่าน
*/
content.STEP_PASSWORD = 3;
/**
 * ขั้นตอนการลงชื่อเข้าใช้: ยืนยันตัวตนแบบสองชั้น
*/
content.STEP_MFA = 4;
/**
 * ขั้นตอนการลงชื่อเข้าใช้: เสร็จสิ้น
*/
content.STEP_COMPLETE = 5;
/**
 * เริ่มต้นการทำงานของระบบ
*/
content.init = () =>
{
    return Promise.resolve ();
}
/**
 * ยุติการทำงานของระบบ
 */
content.terminate = () =>
{
    return;
}
content.challengeSimple = async (key: DataAuthId, pwd: string) =>
{
    const cmd = `SELECT Password, Link FROM Auth WHERE Id = ?`;
    const param = [key];
    const query = await sql.select (cmd, param).then ((x) =>
    {
        if (x.length == 0) {
            throw new error.NotFound ();
        }
        if (x.length >= 2) {
            throw new error.Conflict ();
        }
        const reader = objectReader (x.at (0));
        const result =
        {
            password: reader.requireString ("Password"),
            link: reader.requireInteger ("Link"),
        }
        return result;
    });

    const match = await bcrypt.compare (pwd, query.password)
        .catch ((e: unknown) =>
    {
        throw new error.BadAuth (undefined, { cause: e });
    })

    if (!match)
    {
        throw new error.BadAuth ();
    }
    return content.challengeFinalize (query.link);
}
/**
 * ท้าทายระบบโดยการรหัสประจำตัว
*/
content.challengeId = async (key: DataAuthId) =>
{
    const cmd = `SELECT Link FROM Auth WHERE Id = ?`;
    const param = [key];
    const query = await sql.select (cmd, param).then ((x) =>
    {
        if (x.length == 0) {
            throw new error.NotFound ();
        }
        if (x.length >= 2) {
            throw new error.Conflict ();
        }
        return objectReader (x.at (0)).requireInteger ("Link");
    });
    const issued = new Date ();
    const expired = new Date (Date.now () + model.getExpireChallenge ());

    return model.createChallenge (
        issued, expired,
        query, key, 
        content.STEP_PASSWORD
    );
}
/**
 * ท้าทายระบบโดยการรหัสผ่าน
*/
content.challengePassword = async (key: Session, value: string) =>
{
    if (!key.authId)
    {
        throw new error.BadData ("Incomplete authentication data");
    }
    const cmd = `SELECT Password, Link FROM Auth WHERE Id = ?`;
    const param = [key.authId];
    const query = await sql.select (cmd, param).then ((x) =>
    {
        if (x.length == 0) {
            throw new error.NotFound ();
        }
        if (x.length >= 2) {
            throw new error.Conflict ();
        }
        const reader = objectReader (x.at (0));
        const result =
        {
            password: reader.requireString ("Password"),
            link: reader.requireInteger ("Link"),
        }
        return result;
    });

    const match = await bcrypt.compare (value, query.password)
        .catch ((e: unknown) =>
    {
        throw new error.BadAuth (undefined, { cause: e });
    })

    if (!match)
    {
        throw new error.BadAuth ();
    }
    return content.challengeFinalize (query.link);
}
/**
 * จบการท้าทาย
*/
content.challengeFinalize = async (authLink: DataAccountId) =>
{
    const cmd = `SELECT Id, Role FROM Account WHERE Id = ?`;
    const param = [authLink];
    const query = await sql.select (cmd, param).then ((x) =>
    {
        if (x.length == 0) {
            throw new error.NotFound ();
        }
        if (x.length >= 2) {
            throw new error.Conflict ();
        }
        const reader = objectReader (x.at (0));
        const result =
        {
            id: reader.requireInteger ("Id"),
            role: reader.requireInteger ("Role"),
        }
        return result;
    });

    const issued = new Date ();
    const expired = new Date (Date.now () + model.getExpireSession ());
    
    return model.create (
        issued, expired,
        query.id, query.role, 
        model.RESTRICTION_NONE
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