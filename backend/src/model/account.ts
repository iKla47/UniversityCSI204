import sql from "#core/sql.ts";
import error from "#core/error.ts";
import objectReader from "#core/object.reader.ts";

/**
 * รหัสของชุดรหัสข้อมูล (หรือเรียกอีกอย่างว่า PRIMARY KEY)
*/
export type DataId = number;
/**
 * โครงสร้างข้อมูลที่ได้รับจากการดึงข้อมูลในฐานข้อมูล
*/
export interface DataFetch
{
    /**
     * รหัสบัญชี
    */
    id: DataId;
    /**
     * ชื่อผู้ใช้
    */
    name: string;
    /**
     * บทบาทของผู้ใช้
    */
    role: number;
    /**
     * วันที่สร้างบัญชี
    */
    created: Date;
    /**
     * วันที่ปรับเปลี่ยนข้อมูลบัญชี
    */
    modified: Date | null; 
}
/**
 * โครงสร้างข้อมูลที่ใช้ในการเปลี่ยนแปลงข้อมูลในฐานข้อมูล
*/
export interface DataUpdate
{
    /**
     * รหัสบัญชี
    */
    id: DataId;
    /**
     * ชื่อผู้ใช้
    */
    name ?: string | undefined;
    /**
     * บทบาทของผู้ใช้
    */
    role ?: number | undefined;
}
/**
 * โครงสร้างข้อมูลที่ใช้ในการสร้างข้อมูลลงในฐานข้อมูล
*/
export interface DataCreate
{
    /**
     * ชื่อผู้ใช้
    */
    name: string;
    /**
     * บทบาทของผู้ใช้
    */
    role: number;
}
/**
 * ส่วนเชื่อมต่อกับฐานข้อมูล
*/
const content = function ()
{
    return;
}
/**
 * บทบาทบัญชี: ลงชื่อเข้าใช้
*/
content.ROLE_AUTH = 0;
/**
 * บทบาทบัญชี: ผู้ใช้
*/
content.ROLE_USER = 1;
/**
 * บทบาทบัญชี: ผู้ดูแล
*/
content.ROLE_STAFF = 2;
/**
 * บทบาทบัญชี:ผู้ดูแลระบบ
*/
content.ROLE_MANAGER = 3;
/**
 * บทบาทบัญชี:ผู้พัฒนาระบบ
*/
content.ROLE_DEVELOPER = 4;
/**
 * รายการบทบาทบัญชีทั้งหมดในระบบ
*/
content.ROLE_LIST = 
[
    content.ROLE_USER,
    content.ROLE_STAFF,
    content.ROLE_MANAGER,
    content.ROLE_DEVELOPER
];
/**
 * การจำกัดเข้าบัญชี: ไม่มีการจำกัดการเข้าถึงใด ๆ
*/
content.RESTRICTION_NONE = 0;
/**
 * การจำกัดเข้าบัญชี: บัญชีถูกระงับโดยระบบหรือผู้ดูแลระบบ
*/
content.RESTRICTION_SUSPENDED = 1;
/**
 * รากยารการจำกัดวิธีการเข้าถึงบัญชี
*/
content.RESTRICTION_LIST = 
[
    content.RESTRICTION_NONE,
    content.RESTRICTION_SUSPENDED
];
/**
 * เริ่มต้นการทำงานของระบบ
*/
content.init = async () =>
{
    return Promise.resolve ();
}
/**
 * ยุติการทำงานของระบบ
*/
content.terminate = async () =>
{
    return Promise.resolve ();
}
/**
 * ดึงข้อมูลบัญชีดังกล่าว
 * 
 * @param key รหัสบัญชีผู้ใช้งาน
*/
content.get = (key: DataId) =>
{
    const cmd = `SELECT * FROM Account WHERE Id = ?`;
    const param = [key];
    
    return sql.select (cmd, param).then ((x) =>
    {
        if (x.length == 0) {
            throw new error.NotFound ();
        }
        if (x.length >= 2) {
            throw new error.Conflict ();
        }

        const reader = objectReader (x.at (0));
        const result: DataFetch =
        {
            id: reader.requireInteger ("Id"),
            name: reader.requireString ("Name"),
            role: reader.requireInteger ("Role"),
            created: reader.requireDate ("Created"),
            modified: reader.requireDateOrNull ("Modified")
        };
        return result;
    });
}
/**
 * แก้ไขข้อมูลบัญชีดังกล่าว
 * 
 * @param info ข้อมูลที่ต้องการแก้ไข
 */
content.update = (info: DataUpdate) =>
{
    const key = [
        info.name ? "Name" : undefined,
        info.role ? "Role" : undefined,
    ]
    .filter (x => x !== undefined)
    .join (" = ?, ")
    .concat (" = ? ")
    .concat ("WHERE CategoryId = ?");

    const value = [
        info.name,
        info.role,
        info.id
    ]
    .filter (x => x !== undefined);

    return sql.update (`UPDATE Account SET ${key}`, value).then ((x) =>
    {
        if (x === 0)
        {
            throw new error.NotFound (`No entry of account`);
        }
    });
}
/**
 * สร้างบัญชีใหม่ขึ้นมาในระบบ 
 * คำสั่งนี้จะไม่สร้างวิธีลงชื่อเข้าใช้งานระบบคุณจะต้องสร้างมันโดยตนเอง
*/
content.create = async (info: DataCreate) : Promise<DataId> =>
{
    const ctx = await sql.transaction ();

    try
    {
        const id = await ctx.insert (`
            INSERT INTO Account (Name, Role)
            VALUES (?, ?)`,
            [info.name, info.role]
        ) as DataId;
        await ctx.insert (`
            INSERT INTO AccountContact (Id)
            VALUES (?)`,
            [id]
        );
        await ctx.commit ();
        return id;
    }
    catch (e)
    {
        await ctx.rollback ();
        throw e;
    }
    finally
    {
        ctx.release ();
    }
}
/**
 * ลบบัญชีดังกล่าวออกจากระบบ 
 * กระบวนการนี้จะไม่สามารถทำงานได้ถ้าข้อมูลที่กล่าวถึงบัญชี
*/
content.delete = (key: DataId) =>
{
    return sql.delete (`
        DELETE FROM Account 
        WHERE Id = ?`,
        [key]
    )
    .then ((x) =>
    {
        if (x === 0)
        {
            throw new error.NotFound (`No entry of account`);
        }
    });
}

/**
 * แข็งวัตถุ (ความปลอดภัย)
*/
Object.freeze (content);
/**
 * ส่งออกตัวแปร
*/
export default content;