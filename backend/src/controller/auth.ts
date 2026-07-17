import http         from "#core/http.ts";
import logging      from "#core/log.ts"
import model        from "#model/auth.ts";
import modelAct     from "#model/account.ts";
import
{ 
    type Request, 
    type Response,
    type NextFunction
} 
from "#core/http.ts";

import { type DataId, type Session } from "#model/auth.ts";
import { type DataId as DataAccountId } from "#model/account.ts";

/**
 * ตั้งค่าการยืนยันตัวตน
*/
export interface ValidationSettings
{
    allowedRole ?: number [];
    allowedRestriction ?: number;
}
/**
 * ผลลัพธ์การยืนยันตัวตนเมื่อสำเร็จ
*/
export type ValidationResult = Session; 

/**
 * ระบบบันทึกกิจกรรมเริ่มต้น
*/
const log = logging.scoped ("Auth");
/**
 * ระบบประมวลคำสั่งยืนยันตัวตนจากเครือข่าย
*/
const content = function ()
{
    return;
}
/**
 * ตรวจสอบการเข้าถึงระบบก่อนที่จะส่งกระบวนการต่อไป
*/
content.validate = function (config: ValidationSettings)
{
    const allowRole = config.allowedRole ?? [
        modelAct.ROLE_USER,
        modelAct.ROLE_STAFF,
        modelAct.ROLE_MANAGER,
        modelAct.ROLE_DEVELOPER
    ];
    const allowRestriction = 
        config.allowedRestriction ?? model.RESTRICTION_NONE;

    return (
        request: Request,
        response: Response,
        next: NextFunction
    ) =>
    {
        const addr = request.socket.remoteAddress ?? "(unknown)";
        const port = request.socket.remotePort ?? 0;
        const ip = `${addr}:${port ? String (port) : "(??)"}`;

        if (!request.headers.authorization)
        {
            //
            // ขาดข้อมูลการเข้าถึงระบบ
            //
            log.warn (`${ip} no authentication data`);

            response.status (http.STATUS_UNAUTHORIZED);
            response.end ();
            return;
        }

        const header = request.headers.authorization;
        const headerMap = header.split (" ");

        if (headerMap.length != 2)
        {
            log.warn (`${ip} invalid authentication format`);

            response.status (http.STATUS_UNAUTHORIZED);
            response.end ();
            return;
        }
        const key = String (headerMap [0]);
        const value = String (headerMap [1]);

        //
        // ตรวจสอบว่าเป็นประเภท Bearer
        // ตัวเล็ก-ตัวใหญ่สำคัญ ระบบไม่รับ: bearer, BeArEr, หรืออื่น ๆ
        //
        if (key !== "Bearer")
        {
            log.warn (`${ip} invalid authentication type: ${key}`);

            response.status (http.STATUS_UNAUTHORIZED);
            response.end ();
            return;
        }

        void model.jwtVerify (value).then ((x) =>
        {
            const result: ValidationResult = {
                session: value,
                sessionIssued: new Date (Number (x.data.iat)),
                sessionExpire: new Date (Number (x.data.exp)),
                id: x.data ["Id"] as DataAccountId,
                role: x.data ["Role"] as number,
                restriction: x.data ["Restriction"] as number,

                authId: x.data ["AuthId"] as DataId,
                authStep: x.data ["AuthStep"] as number
            };

            const passRole = allowRole.includes (result.role);
            const passRestriction = 
                (result.restriction & allowRestriction) === allowRestriction;

            if (!passRole || !passRestriction)
            {
                const role = String (result.role);
                const restr = String (result.restriction);

                log.warn (`${ip} violated authorization: ${role}, ${restr}`);

                response.status (http.STATUS_FORBIDDEN);
                response.end ();
                return;
            }

            response.locals ["AuthValidation"] = result;

            next ();
        })
        .catch ((e: unknown) =>
        {
            log.warn (`${ip} failed authorization`);
            log.warn (e);

            response.status (http.STATUS_UNAUTHORIZED);
            response.end ();
            return;
        })
    }
}
content.validateResult = (response: Response) : ValidationResult =>
{
    return response.locals ["AuthValidation"] as ValidationResult;
}
content.validateOnlyAuth = () =>
{
    return content.validate ({
        allowedRole: [modelAct.ROLE_AUTH],
        allowedRestriction: model.RESTRICTION_CHALLENGE
    });
}
content.validateOnlyUser = () =>
{
    return content.validate ({
        allowedRole: [modelAct.ROLE_USER],
        allowedRestriction: model.RESTRICTION_NONE
    });
}
content.validateOnlyStaff = () =>
{
    return content.validate ({
        allowedRole: [modelAct.ROLE_STAFF],
        allowedRestriction: model.RESTRICTION_NONE
    });
}
content.validateOnlyManager = () =>
{
    return content.validate ({
        allowedRole: [modelAct.ROLE_MANAGER],
        allowedRestriction: model.RESTRICTION_NONE
    });
}
content.validateLeastUser = () =>
{
    return content.validate ({
        allowedRole: [
            modelAct.ROLE_USER, 
            modelAct.ROLE_STAFF, 
            modelAct.ROLE_MANAGER
        ],
        allowedRestriction: model.RESTRICTION_NONE
    });
}
content.validateLeastStaff = () =>
{
    return content.validate ({
        allowedRole: [
            modelAct.ROLE_STAFF, 
            modelAct.ROLE_MANAGER
        ],
        allowedRestriction: model.RESTRICTION_NONE
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