import logging          from "#core/log.ts";
import modelAuth        from "#model/auth.ts";
import modelAuthSignUp  from "#model/auth.signup.ts";
import modelAccount     from "#model/account.ts";

import { type DataId as DataAuthId } from "#model/auth.ts";
import { type DataId as DataAccountId } from "#model/account.ts";
import { type DataFetch as DataAuth } from "#model/auth.signup.ts";

/**
 * ระบบบันทึกกิจกรรมเริ่มต้น
*/
const log = logging.scoped ("TestMode");
/**
 * ระบบจัดการระบบทดสอบ
*/
const content = () =>
{
    return;
}
content.setupAccount = async () =>
{
    log.info ("Setting up test accounts ...");

    await content.setupAccountFor (
        "Admin", "12345678", 
        "Administrator", modelAccount.ROLE_MANAGER
    );
    await content.setupAccountFor (
        "Staff", "12345678", 
        "Staff", modelAccount.ROLE_STAFF
    );
    await content.setupAccountFor (
        "User", "12345678", 
        "User", modelAccount.ROLE_USER
    );
    await content.setupAccountFor (
        "ItsJeremie", "12345678", 
        "ItsJeremie", modelAccount.ROLE_USER
    );
    await content.setupAccountFor (
        "Tess", "12345678", 
        "Tess Tester", modelAccount.ROLE_DEVELOPER
    );

    log.info ("Setting up test accounts completed");
    return;
}
content.setupAccountFor = async (
    authId: DataAuthId,
    authPwd: string,
    accountName: string,
    accountRole: number
) =>
{
    let auth: DataAuth;
    let link: DataAccountId;

    try
    {
        auth = await modelAuthSignUp.get (authId);
        link = auth.link;
    }
    catch
    {
        try
        {
            link = await modelAccount.create ({
                name: accountName,
                role: accountRole
            });
            await modelAuthSignUp.create (authId, authPwd, link);
        }
        catch (e: unknown)
        {
            log.error (`Account cannot be created, ignored: ${accountName}`);
            log.error (e);
            return;
        }
    }
    const session = await modelAuth.create (
        new Date (), undefined,
        link, accountRole,
        modelAccount.RESTRICTION_NONE
    );

    log.info (`Name: ${accountName}`);
    log.info (`Session: ${session.session}`);
}
/**
 * แข็งวัตถุ (ความปลอดภัย)
*/
Object.freeze (content);
/**
 * ส่งออกตัวแปร
*/
export default content;