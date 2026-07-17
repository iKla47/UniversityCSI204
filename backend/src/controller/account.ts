import http         from "#core/http.ts";
import logging      from "#core/log.ts"
import error        from "#core/error.ts";
import objectReader from "#core/object.reader.ts";
import model        from "#model/account.ts";
import 
{ 
    type Request, 
    type Response 
} 
from "#core/http.ts";
import
{
    type DataUpdate,
    type DataCreate,
}
from "#model/account.ts";

/**
 * ระบบบันทึกกิจกรรมเริ่มต้น
*/
const log = logging.scoped ("User");
/**
 * ระบบจัดการข้อมูลบัญชี
*/
const content = function ()
{
    return;
}
/**
 * ดึงข้อมูลบัญชีดังกล่าว
 * 
 * @param request คำขอ
 * @param response คำตอบ
*/
content.get = (request: Request, response: Response) =>
{
    const accountId = Number (request.params ["id"]);
    
    if (!Number.isSafeInteger (accountId) ||
        !request.body)
    {
        response.status (http.STATUS_BAD_REQUEST);
        response.end ();
        return;
    }

    void model.get (accountId).then ((x) =>
    {
        response.status (http.STATUS_OK);
        response.json ({
            "Id": x.id,
            "Name": x.name,
            "Role": x.role,
            "Created": x.created,
            "Modified": x.modified
        });
        response.end ();
    })
    .catch ((e: unknown) =>
    {
        if (e instanceof error.NotFound)
        {
            response.status (http.STATUS_NOT_FOUND);
            response.end ();
            return;
        }
        log.error (e);
        response.status (http.STATUS_SERVICE_UNAVAILABLE);
        response.end ();
        return;
    });
}
/**
 * แก้ไขบัญชีดังกล่าว
 * 
 * @param request คำขอ
 * @param response คำตอบ
*/
content.put = (request: Request, response: Response) =>
{
    const accountId = Number (request.params ["id"]);
    let input: DataUpdate;

    if (!Number.isSafeInteger (accountId) ||
        !request.body)
    {
        response.status (http.STATUS_BAD_REQUEST);
        response.end ();
        return;
    }
    try
    {
        const reader = objectReader (request.body);
        input = 
        {
            id: accountId,
            name: reader.optionalString ("Name"),
            role: reader.optionalInteger ("Role"),
        };
    }
    catch
    {
        response.status (http.STATUS_BAD_REQUEST);
        response.end ();
        return;
    }

    void model.update (input).then (() =>
    {
        response.status (http.STATUS_NO_CONTENT);
        response.end ();
        return;
    })
    .catch ((e: unknown) =>
    {
        if (e instanceof error.NotFound)
        {
            response.status (http.STATUS_NOT_FOUND);
            response.end ();
            return;
        }
        log.error (e);
        response.status (http.STATUS_SERVICE_UNAVAILABLE);
        response.end ();
        return;
    });
}
content.post = (request: Request, response: Response) =>
{
    let input: DataCreate;

    try
    {
        const reader = objectReader (request.body);
        input = 
        {
            name: reader.requireString ("Name"),
            role: reader.requireInteger ("Role")
        };
    }
    catch
    {
        response.status (http.STATUS_BAD_REQUEST);
        response.end ();
        return;
    }

    void model.create (input).then ((x) =>
    {
        response.status (http.STATUS_CREATED);
        response.json ({
            "Id": x,
            "Created": new Date ().getTime ()
        });
        response.end ();
        return;
    })
    .catch ((e: unknown) =>
    {
        log.error (e);
        response.status (http.STATUS_SERVICE_UNAVAILABLE);
        response.end ();
        return;
    });
}
content.delete = (request: Request, response: Response) =>
{
    const accountId = Number (request.params ["id"]);
    
    if (!Number.isSafeInteger (accountId) ||
        !request.body)
    {
        response.status (http.STATUS_BAD_REQUEST);
        response.end ();
        return;
    }

    void model.delete (accountId).then (() =>
    {
        response.status (http.STATUS_NO_CONTENT);
        response.end ();
    })
    .catch ((e: unknown) =>
    {
        if (e instanceof error.NotFound)
        {
            response.status (http.STATUS_NOT_FOUND);
            response.end ();
            return;
        }
        log.error (e);
        response.status (http.STATUS_SERVICE_UNAVAILABLE);
        response.end ();
        return;
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