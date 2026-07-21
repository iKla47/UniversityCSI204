import error from "#core/error.ts";

/**
 * 
 * ทำหน้าที่เป็นตัวแทนในการอ่านข้อมูลจากวัตถุซึ่งได้จากการสร้างด้วยตัวเอง, 
 * หรือใช้ `JSON.parse(...)`, 
 * ระบบนี้เน้นเรื่องความปลอดภัยในการอ่านข้อมูลที่ได้รับเป็นหลักโดยผู้ใช้งาน
 * ต้องระบุคำสั่งที่ชัดเจนเพื่อระบุข้อมูลที่ต้องการให้แน่ชัด
 * 
*/
export interface ObjectReader 
{
    /**
     * อ่านข้อมูลชุดตัวอักษรจำนวนจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้
     * 
     * @param name ชื่อคุณสมบัติ
     * @returns {string} ชุดข้อมูลตัวอักษร
    */
    readonly requireString: (name: string) => string;
    /**
     * อ่านข้อมูลตัวเลขจำนวนเต็มจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้
     * 
     * @param name ชื่อคุณสมบัติ
     * @returns {number} ตัวเลขจำนวนเต็ม
    */
    readonly requireInteger: (name: string) => number;
    /**
     * อ่านข้อมูลตัวทศนิยมจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้
     * 
     * @param name ชื่อคุณสมบัติ
     * @returns {number} ตัวเลขทศนิยม
    */
    readonly requireFloat: (name: string) => number;
    /**
     * อ่านข้อมูลตัวเลือกตรรกะจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้
     *
     * @param name ชื่อคุณสมบัติ 
     * @returns {boolean} ตัวเลือกตรรกะ
    */
    readonly requireBoolean: (name: string) => boolean;
    /**
     * อ่านข้อมูลวันที่เวลาจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้
     * 
     * @param name ชื่อคุณสมบัติ
     * @returns {Date} วันที่และเวลา
    */
    readonly requireDate: (name: string) => Date;
    /**
     * อ่านข้อมูลวัตถุจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้
     * 
     * @param name ชื่อคุณสมบัติ
     * @returns {unknown} วัตถุไม่ทราบโครงสร้าง
    */
    readonly requireUnknown: (name: string) => unknown;
    /**
     * อ่านข้อมูลบันทึกจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้
     * 
     * @param name ชื่อคุณสมบัติ
     * @returns {Record<string, unknown>} วัตถุไม่ทราบโครงสร้าง
    */
    readonly requireRecord: (name: string) => Record<string, unknown>;
    /**
     * อ่านข้อมูลอาร์เรย์ตัวอักษรจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้
     * 
     * @param name ชื่อคุณสมบัติ
     * @returns {string[]} อาร์เรย์ของชุดตัวอักษร
    */
    readonly requireArrayString: (name: string) => string [];
    /**
     * อ่านข้อมูลอาร์เรย์ตัวเลขจำนวนเต็มจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้
     * 
     * @param name ชื่อคุณสมบัติ
     * @returns {number[]} อาร์เรย์ของตัวเลขจำนวนเต็ม
    */
    readonly requireArrayInteger: (name: string) => number [];
    /**
     * อ่านข้อมูลอาร์เรย์ตัวเลขทศนิยมจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้
     * 
     * @param name ชื่อคุณสมบัติ
     * @returns {number[]} อาร์เรย์ของตัวเลขทศนิยม
    */
    readonly requireArrayFloat: (name: string) => number [];
    /**
     * อ่านข้อมูลอาร์เรย์ตัวเลือกตรรกะจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้
     * 
     * @param name ชื่อคุณสมบัติ
     * @returns {boolean[]} อาร์เรย์ของตัวเลือกตรรกะ
    */
    readonly requireArrayBoolean: (name: string) => boolean [];
    /**
     * อ่านข้อมูลอาร์เรย์วันที่เวลาจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้
     * 
     * @param name ชื่อคุณสมบัติ
     * @returns {boolean[]} อาร์เรย์ของวันที่เวลา
    */
    readonly requireArrayDate: (name: string) => Date [];
    /**
     * อ่านข้อมูลอาร์เรย์วัตถุจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้
     * 
     * @param name ชื่อคุณสมบัติ
     * @returns {unknown[]} อาร์เรย์ของวัตถุที่ไม่ทราบโครงสร้าง
    */
    readonly requireArrayUnknown: (name: string) => unknown [];
    /**
     * อ่านข้อมูลอาร์เรย์วัตถุจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้
     * 
     * @param name ชื่อคุณสมบัติ
     * @returns {unknown[]} อาร์เรย์ของวัตถุที่ไม่ทราบโครงสร้าง
    */
    readonly requireArrayRecord: (name: string) => Record<string, unknown> [];
    /**
     * อ่านข้อมูลตัวอักษรจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้ 
     * แต่คุณสมบัติสามารถเป็น `null` ได้
     * 
     * @param name ชื่อคุณสมบัติ
     * @returns {string} ชุดตัวอักษรในกรณีที่พบข้อมูล
     * @returns {null} ว่างเปล่าในกรณีที่ไม่พบข้อมูล
    */
    readonly requireStringOrNull: (name: string) => string | null;
    /**
     * อ่านข้อมูลตัวเลขจำนวนเต็มจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้ 
     * แต่คุณสมบัติสามารถเป็น `null` ได้
     * 
     * @param name ชื่อคุณสมบัติ
     * @returns {number} ตัวเลขจำนวนเต็มในกรณีที่พบข้อมูล
     * @returns {null} ว่างเปล่าในกรณีที่ไม่พบข้อมูล
    */
    readonly requireIntegerOrNull: (name: string) => number | null;
    /**
     * อ่านข้อมูลตัวเลขทศนิยมจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้ 
     * แต่คุณสมบัติสามารถเป็น `null` ได้
     * 
     * @param name ชื่อคุณสมบัติ
     * @returns {number} ตัวเลขทศนิยมในกรณีที่พบข้อมูล
     * @returns {null} ว่างเปล่าในกรณีที่ไม่พบข้อมูล
    */
    readonly requireFloatOrNull: (name: string) => number | null;
    /**
     * อ่านข้อมูลตัวเลือกตรรกะจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้ 
     * แต่คุณสมบัติสามารถเป็น `null` ได้
     * 
     * @param name ชื่อคุณสมบัติ
     * @returns {boolean} ตัวเลือกตรรกะในกรณีที่พบข้อมูล
     * @returns {null} ว่างเปล่าในกรณีที่ไม่พบข้อมูล
    */
    readonly requireBooleanOrNull: (name: string) => boolean | null;
    /**
     * อ่านข้อมูลวันที่เวลาจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้ 
     * แต่คุณสมบัติสามารถเป็น `null` ได้
     * 
     * @param name ชื่อคุณสมบัติ
     * @returns {boolean} วันที่เวลาในกรณีที่พบข้อมูล
     * @returns {null} ว่างเปล่าในกรณีที่ไม่พบข้อมูล
    */
    readonly requireDateOrNull: (name: string) => Date | null;
    /**
     * อ่านข้อมูลวัตถุจากชื่อที่กำหนดไว้
     * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้ 
     * แต่คุณสมบัติสามารถเป็น `null` ได้
     * 
     * @param name ชื่อคุณสมบัติ
     * @returns {boolean} วัตถุที่ไม่มีรูปแบบโครงสร้างในกรณีที่พบข้อมูล
     * @returns {null} ว่างเปล่าในกรณีที่ไม่พบข้อมูล
    */
    readonly requireRecordOrNull: (name: string) 
        => Record<string, unknown> | null;
    
    /**
     * อ่านข้อมูลชุดตัวอักษรจากชื่อที่กำหนดไว้
     * คำสั่งนี้ไม่บังคับว่าในชุดข้อมูลดังกล่าวอาจมีตัวแปรนี้หรือไม่มีก็ได้
     * 
     * @returns {string} ชุดตัวอักษรในกรณีที่พบข้อมูล
     * @returns {undefined} ไม่ระบุในกรณีที่ไม่มีข้อมูล
    */
    readonly optionalString: (name: string) => string | undefined;
    /**
     * อ่านข้อมูลตัวเลขจำนวนเต็มจากชื่อที่กำหนดไว้
     * คำสั่งนี้ไม่บังคับว่าในชุดข้อมูลดังกล่าวอาจมีตัวแปรนี้หรือไม่มีก็ได้
     * 
     * @returns {number} ตัวเลขจำนวนเต็มในกรณีที่พบข้อมูล
     * @returns {undefined} ไม่ระบุในกรณีที่ไม่มีข้อมูล
    */
    readonly optionalInteger: (name: string) => number | undefined;
    /**
     * อ่านข้อมูลตัวเลขทศนิยมจากชื่อที่กำหนดไว้
     * คำสั่งนี้ไม่บังคับว่าในชุดข้อมูลดังกล่าวอาจมีตัวแปรนี้หรือไม่มีก็ได้
     * 
     * @returns {number} ตัวเลขทศนิยมในกรณีที่พบข้อมูล
     * @returns {undefined} ไม่ระบุในกรณีที่ไม่มีข้อมูล
    */
    readonly optionalFloat: (name: string) => number | undefined;
    /**
     * อ่านข้อมูลตัวเลือกตรรกะจากชื่อที่กำหนดไว้
     * คำสั่งนี้ไม่บังคับว่าในชุดข้อมูลดังกล่าวอาจมีตัวแปรนี้หรือไม่มีก็ได้
     * 
     * @returns {boolean} ตัวเลือกตรรกะในกรณีที่พบข้อมูล
     * @returns {undefined} ไม่ระบุในกรณีที่ไม่มีข้อมูล
    */
    readonly optionalBoolean: (name: string) => boolean | undefined;
    /**
     * อ่านข้อมูลวันที่เวลาจากชื่อที่กำหนดไว้
     * คำสั่งนี้ไม่บังคับว่าในชุดข้อมูลดังกล่าวอาจมีตัวแปรนี้หรือไม่มีก็ได้
     * 
     * @returns {Date} วันที่เวลาในกรณีที่พบข้อมูล
     * @returns {undefined} ไม่ระบุในกรณีที่ไม่มีข้อมูล
    */
    readonly optionalDate: (name: string) => Date | undefined;
};
/**
 * ระบบอ่านข้อมูลวัตถุ (JavaScript Object)
*/
const content = (data: unknown) =>
{
    return content.create (data);
}
content.catchUndefined = (name: string, value: unknown) =>
{
    if (typeof value !== "undefined")
    {
        return;
    }
    throw new error.BadData (
        `${name} คุณสมบัติไม่ถูกต้อง (ต้องไม่ใช่ undefined)`
    );
}
content.catchNull = (name: string, value: unknown) =>
{
    if (typeof value !== "object" || value !== null)
    {
        return;
    }
    throw new error.BadData (
        `${name} คุณสมบัติไม่ถูกต้อง (ต้องไม่ใช่ null)`
    );
}
content.catchNonString = (name: string, value: unknown) =>
{
    if (typeof value === "string")
    {
        return;
    }
    throw new error.BadType (
        `${name} ประเภทไม่ถูกต้อง (ต้องเป็น string)`
    );
}
content.catchNonBoolean = (name: string, value: unknown) =>
{
    if (typeof value === "boolean")
    {
        return;
    }
    throw new error.BadType (
        `${name} ประเภทไม่ถูกต้อง (ต้องเป็น boolean)`
    );

}
content.catchNonInteger = (name: string, value: unknown) =>
{
    if (typeof value !== "number")
    {
        throw new error.BadType (
            `${name} ประเภทไม่ถูกต้อง (ต้องเป็น integer)`
        );
    }
    if (!Number.isSafeInteger (value))
    {
        throw new error.BadData (
            `${name} คุณสมบัติไม่ถูกต้อง (ต้องเป็นจำนวนเต็ม)`
        );
    }
}
content.catchNonFloat = (name: string, value: unknown) =>
{
    if (typeof value !== "number")
    {
        throw new error.BadType (
            `${name} ประเภทไม่ถูกต้อง (ต้องเป็น float)`
        );
    }
    if (!Number.isFinite (value))
    {
        throw new error.BadData (
            `${name} คุณสมบัติไม่ถูกต้อง (ต้องเป็นทศนิยมที่ใช้งานได้)`
        );
    }
}
content.catchNonObject = (name: string, value: unknown) =>
{
    if (typeof value === "object" && !Array.isArray (value))
    {
        return;
    }
    throw new error.BadType (
        `${name} ประเภทไม่ถูกต้อง (ต้องเป็นวัตถุ)`
    );
}
content.catchNonArray = (name: string, value: unknown) =>
{
    if (typeof value === "object" && Array.isArray (value))
    {
        return;
    }
    throw new error.BadType (
        `${name} ประเภทไม่ถูกต้อง (ต้องเป็นวัตถุอาร์เรย์)`
    );
}
content.cast = (data: ObjectReader) =>
{
    return data;
}
content.create = (data: unknown) : ObjectReader =>
{
    content.catchUndefined ("<root>", data);
    content.catchNull ("<root>", data);
    content.catchNonObject ("<root>", data);

    const instance = data as Record<string, unknown>;
    const init: ObjectReader =
    {
        requireString: (name) =>
        {
            const value = instance [name];

            content.catchUndefined (name, value);
            content.catchNull (name, value);
            content.catchNonString (name, value);
            
            return value as string;
        },
        requireInteger: (name) =>
        {
            const value = instance [name];

            content.catchUndefined (name, value);
            content.catchNull (name, value);
            content.catchNonInteger (name, value);

            return value as number;
        },
        requireFloat: (name) =>
        {
            const value = instance [name];

            content.catchUndefined (name, value);
            content.catchNull (name, value);
            content.catchNonFloat (name, value);

            return value as number;
        },
        requireBoolean: (name) =>
        {
            const value = instance [name];

            content.catchUndefined (name, value);
            content.catchNull (name, value);
            content.catchNonBoolean (name, value);

            return value as boolean;
        },
        requireDate: (name) =>
        {
            const value = instance [name];

            if (value instanceof Date)
            {
                return value;
            }
            content.catchUndefined (name, value);
            content.catchNull (name, value);
            content.catchNonInteger (name, value);

            return new Date (value as number);
        },
        requireUnknown: (name) =>
        {
            const value = instance [name];

            content.catchUndefined (name, value);
            content.catchNull (name, value);
            content.catchNonObject (name, value);

            return value;
        },
        requireRecord: (name) =>
        {
            const value = instance [name];

            content.catchUndefined (name, value);
            content.catchNull (name, value);
            content.catchNonObject (name, value);

            return value as Record<string, unknown>;
        },
        requireArrayString: (name) =>
        {
            const value = instance [name];
    
            content.catchUndefined (name, value);
            content.catchNull (name, value);
            content.catchNonArray (name, value);
    
            const typed = value as string [];
    
            typed.forEach ((v, i) =>
            {
                content.catchUndefined (`${name}[${String (i)}]`, v);
                content.catchNull (`${name}[${String (i)}]`, v);
                content.catchNonString (`${name}[${String (i)}]`, v);
            });
            return typed;
        },
        requireArrayInteger: (name) =>
        {
            const value = instance [name];
    
            content.catchUndefined (name, value);
            content.catchNull (name, value);
            content.catchNonArray (name, value);
    
            const typed = value as number [];
    
            typed.forEach ((v, i) =>
            {
                content.catchUndefined (`${name}[${String (i)}]`, v);
                content.catchNull (`${name}[${String (i)}]`, v);
                content.catchNonInteger (`${name}[${String (i)}]`, v);
            });
            return typed;
        },
        requireArrayFloat: (name) =>
        {
            const value = instance [name];
    
            content.catchUndefined (name, value);
            content.catchNull (name, value);
            content.catchNonArray (name, value);
    
            const typed = value as number [];
    
            typed.forEach ((v, i) =>
            {
                content.catchUndefined (`${name}[${String (i)}]`, v);
                content.catchNull (`${name}[${String (i)}]`, v);
                content.catchNonFloat (`${name}[${String (i)}]`, v);
            });
            return typed;
        },
        requireArrayBoolean: (name) =>
        {
            const value = instance [name];
    
            content.catchUndefined (name, value);
            content.catchNull (name, value);
            content.catchNonArray (name, value);
    
            const typed = value as boolean [];
    
            typed.forEach ((v, i) =>
            {
                content.catchUndefined (`${name}[${String (i)}]`, v);
                content.catchNull (`${name}[${String (i)}]`, v);
                content.catchNonBoolean (`${name}[${String (i)}]`, v);
            });
            return typed;
        },
        requireArrayDate: (name) =>
        {
            const value = instance [name];
    
            content.catchUndefined (name, value);
            content.catchNull (name, value);
            content.catchNonArray (name, value);
    
            const typed = value as Date [];
            const result = typed.map ((v, i) =>
            {
                content.catchUndefined (`${name}[${String (i)}]`, v);
                content.catchNull (`${name}[${String (i)}]`, v);
                content.catchNonInteger (`${name}[${String (i)}]`, v);
    
                return new Date (v);
            });
            return result;
        },
        requireArrayUnknown: (name) =>
        {
            const value = instance [name];
    
            content.catchUndefined (name, value);
            content.catchNull (name, value);
            content.catchNonArray (name, value);
    
            const typed = value as unknown [];
    
            typed.forEach ((v, i) =>
            {
                content.catchUndefined (`${name}[${String (i)}]`, v);
                content.catchNull (`${name}[${String (i)}]`, v);
                content.catchNonObject (`${name}[${String (i)}]`, v);
            });
            return typed;
        },
        requireArrayRecord: (name) =>
        {
            const value = instance [name];
    
            content.catchUndefined (name, value);
            content.catchNull (name, value);
            content.catchNonArray (name, value);
    
            const typed = value as Record<string, unknown> [];
    
            typed.forEach ((v, i) =>
            {
                content.catchUndefined (`${name}[${String (i)}]`, v);
                content.catchNull (`${name}[${String (i)}]`, v);
                content.catchNonObject (`${name}[${String (i)}]`, v);
            });
            return typed;
        },
        requireStringOrNull: (name) =>
        {
            const value = instance [name];
    
            if (typeof value === "object" && value === null)
            {
                return null;
            }
            content.catchUndefined (name, value);
            content.catchNonString (name, value);
    
            return value as string;
        },
        requireIntegerOrNull: (name) =>
        {
            const value = instance [name];

            if (typeof value === "object" && value === null)
            {
                return null;
            }
            content.catchUndefined (name, value);
            content.catchNonInteger (name, value);

            return value as number;
        },
        requireFloatOrNull: (name) =>
        {
            const value = instance [name];

            if (typeof value === "object" && value === null)
            {
                return null;
            }
            content.catchUndefined (name, value);
            content.catchNonFloat (name, value);

            return value as number;
        },
        requireBooleanOrNull: (name) =>
        {
            const value = instance [name];
    
            if (typeof value === "object" && value === null)
            {
                return null;
            }
            content.catchUndefined (name, value);
            content.catchNonBoolean (name, value);
    
            return value as boolean;
        },
        requireDateOrNull: (name: string) =>
        {
            const value = instance [name];
    
            if (typeof value === "object" && value === null)
            {
                return null;
            }
            if (value instanceof Date)
            {
                return value;
            }
            content.catchUndefined (name, value);
            content.catchNonInteger (name, value);
    
            return new Date (value as number);
        },
        requireRecordOrNull: (name) =>
        {
            const value = instance [name];
    
            if (typeof value === "object" && value === null)
            {
                return null;
            }
            content.catchUndefined (name, value);
            content.catchNonObject (name, value);
    
            return value as Record<string, unknown>;
        },
        optionalString: (name) =>
        {
            const value = instance [name];

            if (typeof value === "undefined")
            {
                return undefined;
            }
            content.catchNull (name, value);
            content.catchNonString (name, value);
            
            return value as string;
        },
        optionalInteger: (name) =>
        {
            const value = instance [name];

            if (typeof value === "undefined")
            {
                return undefined;
            }
            content.catchNull (name, value);
            content.catchNonInteger (name, value);

            return value as number;
        },
        optionalFloat: (name) =>
        {
            const value = instance [name];

            if (typeof value === "undefined")
            {
                return undefined;
            }
            content.catchNull (name, value);
            content.catchNonFloat (name, value);

            return value as number;
        },
        optionalBoolean: (name) =>
        {
            const value = instance [name];

            if (typeof value === "undefined")
            {
                return undefined;
            }
            content.catchNull (name, value);
            content.catchNonBoolean (name, value);
            
            return value as boolean;
        },
        optionalDate: (name) =>
        {
            const value = instance [name];

            if (typeof value === "undefined")
            {
                return undefined;
            }
            content.catchNull (name, value);
            content.catchNonInteger (name, value);

            return new Date (value as number);
        }
    };

    // /**
    //  * อ่านข้อมูลอาร์เรย์ตัวอักษร จากชื่อที่กำหนดไว้
    //  * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้ แต่อาจเป็น null ได้
    //  * 
    //  * @returns {string[]}
    //  * @returns {null}
    // */
    // init.requireArrayStringOrNull = (name: string, initial: string [] | null = null) : string [] | null =>
    // {
    //     const value = instance [name];

    //     if (typeof value === "object" && value === null)
    //     {
    //         return initial;
    //     }
    //     catchUndefined (name, value);
    //     catchNonArray (name, value);

    //     const typed = value as string [];

    //     typed.forEach ((v, i) =>
    //     {
    //         catchUndefined (`${name}[${String (i)}]`, v);
    //         catchNull (`${name}[${String (i)}]`, v);
    //         catchNonString (`${name}[${String (i)}]`, v);
    //     });
    //     return typed;
    // }
    // /**
    //  * อ่านข้อมูลอาร์เรย์ตัวเลขจากชื่อที่กำหนดไว้
    //  * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้ แต่อาจเป็น null ได้
    //  * 
    //  * @returns {number[]}
    //  * @returns {null}
    // */
    // init.requireArrayIntegerOrNull = (name: string, initial: number [] | null = null) : number [] | null =>
    // {
    //     const value = instance [name];

    //     if (typeof value === "object" && value === null)
    //     {
    //         return initial;
    //     }
    //     catchUndefined (name, value);
    //     catchNonArray (name, value);

    //     const typed = value as number [];

    //     typed.forEach ((v, i) =>
    //     {
    //         catchUndefined (`${name}[${String (i)}]`, v);
    //         catchNull (`${name}[${String (i)}]`, v);
    //         catchNonInteger (`${name}[${String (i)}]`, v);
    //     });
    //     return typed;
    // }
    // /**
    //  * อ่านข้อมูลอาร์เรย์ตัวเลขทศนิยมจากชื่อที่กำหนดไว้
    //  * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้ แต่อาจเป็น null ได้
    //  * 
    //  * @returns {number[]}
    //  * @returns {null}
    // */
    // init.requireArrayFloatOrNull = (name: string, initial: number [] | null = null) : number [] | null =>
    // {
    //     const value = instance [name];

    //     if (typeof value === "object" && value === null)
    //     {
    //         return initial;
    //     }
    //     catchUndefined (name, value);
    //     catchNonArray (name, value);

    //     const typed = value as number [];

    //     typed.forEach ((v, i) =>
    //     {
    //         catchUndefined (`${name}[${String (i)}]`, v);
    //         catchNull (`${name}[${String (i)}]`, v);
    //         catchNonFloat (`${name}[${String (i)}]`, v);
    //     });
    //     return typed;
    // }
    // /**
    //  * อ่านข้อมูลอาร์เรย์วันที่จากชื่อที่กำหนดไว้
    //  * คำสั่งนี้บังคับว่าในชุดข้อมูลดังกล่าวต้องมีตัวแปรนี้ แต่อาจเป็น null ได้
    //  * 
    //  * @returns {Date[]}
    //  * @returns {null}
    // */
    // init.requireArrayDateOrNull = (name: string, initial: Date [] | null = null) : Date [] | null =>
    // {
    //     const value = instance [name];

    //     if (typeof value === "object" && value === null)
    //     {
    //         return initial;
    //     }
    //     catchUndefined (name, value);
    //     catchNonArray (name, value);

    //     const typed = value as Date [];
    //     const result = typed.map ((v, i) =>
    //     {
    //         catchUndefined (`${name}[${String (i)}]`, v);
    //         catchNull (`${name}[${String (i)}]`, v);
    //         catchNonInteger (`${name}[${String (i)}]`, v);

    //         return new Date (v);
    //     });
    //     return result;
    // }
    
    // /**
    //  * อ่านข้อมูลวัตถุ จากชื่อที่กำหนดไว้
    //  * คำสั่งนี้ไม่บังคับว่าในชุดข้อมูลดังกล่าวอาจมีตัวแปรนี้ หรือไม่มีก็ได้
    //  * 
    //  * @returns {Record<string, unknown>}
    //  * @returns {undefined}
    // */
    // init.optionalObject = (name: string, undefinedValue ?: Record<string, unknown>) : Record<string, unknown> | undefined =>
    // {
    //     const value = instance [name];

    //     if (typeof value === "undefined")
    //     {
    //         return undefinedValue;
    //     }
    //     catchNull (name, value);
    //     catchNonObject (name, value);

    //     return value as Record<string, unknown>;
    // }
    // /**
    //  * อ่านข้อมูลอาร์เรย์ตัวอักษร จากชื่อที่กำหนดไว้
    //  * คำสั่งนี้ไม่บังคับว่าในชุดข้อมูลดังกล่าวอาจมีตัวแปรนี้ หรือไม่มีก็ได้
    //  * 
    //  * @returns {string[]}
    //  * @returns {undefined}
    // */
    // init.optionalArrayString = (name: string, undefinedValue ?: string []) : string [] | undefined =>
    // {
    //     const value = instance [name];

    //     if (typeof value === "undefined")
    //     {
    //         return undefinedValue;
    //     }
    //     catchNull (name, value);
    //     catchNonArray (name, value);

    //     const typed = value as string [];

    //     typed.forEach ((v, i) =>
    //     {
    //         catchUndefined (`${name}[${String (i)}]`, v);
    //         catchNull (`${name}[${String (i)}]`, v);
    //         catchNonString (`${name}[${String (i)}]`, v);
    //     });
    //     return typed;
    // }
    // /**
    //  * อ่านข้อมูลอาร์เรย์ตัวเลขจำนวนเต็ม จากชื่อที่กำหนดไว้
    //  * คำสั่งนี้ไม่บังคับว่าในชุดข้อมูลดังกล่าวอาจมีตัวแปรนี้ หรือไม่มีก็ได้
    //  * 
    //  * @returns {number[]}
    //  * @returns {undefined}
    // */
    // init.optionalArrayInteger = (name: string, undefinedValue ?: number []) : number [] | undefined =>
    // {
    //     const value = instance [name];

    //     if (typeof value === "undefined")
    //     {
    //         return undefinedValue;
    //     }
    //     catchNull (name, value);
    //     catchNonArray (name, value);

    //     const typed = value as number [];

    //     typed.forEach ((v, i) =>
    //     {
    //         catchUndefined (`${name}[${String (i)}]`, v);
    //         catchNull (`${name}[${String (i)}]`, v);
    //         catchNonInteger (`${name}[${String (i)}]`, v);
    //     });
    //     return typed;
    // }
    // /**
    //  * อ่านข้อมูลอาร์เรย์ตัวเลขทศนิยม จากชื่อที่กำหนดไว้
    //  * คำสั่งนี้ไม่บังคับว่าในชุดข้อมูลดังกล่าวอาจมีตัวแปรนี้ หรือไม่มีก็ได้
    //  * 
    //  * @returns {number[]}
    //  * @returns {undefined}
    // */
    // init.optionalArrayFloat = (name: string, undefinedValue ?: number []) : number [] | undefined =>
    // {
    //     const value = instance [name];

    //     if (typeof value === "undefined")
    //     {
    //         return undefinedValue;
    //     }
    //     catchNull (name, value);
    //     catchNonArray (name, value);

    //     const typed = value as number [];

    //     typed.forEach ((v, i) =>
    //     {
    //         catchUndefined (`${name}[${String (i)}]`, v);
    //         catchNull (`${name}[${String (i)}]`, v);
    //         catchNonFloat (`${name}[${String (i)}]`, v);
    //     });
    //     return typed;
    // }
    // /**
    //  * อ่านข้อมูลอาร์เรย์วันที่ จากชื่อที่กำหนดไว้
    //  * คำสั่งนี้ไม่บังคับว่าในชุดข้อมูลดังกล่าวอาจมีตัวแปรนี้ หรือไม่มีก็ได้
    //  * 
    //  * @returns {Date[]}
    //  * @returns {undefined}
    // */
    // init.optionalArrayDate = (name: string, undefinedValue ?: Date []) : Date [] | undefined =>
    // {
    //     const value = instance [name];

    //     if (typeof value === "undefined")
    //     {
    //         return undefinedValue;
    //     }
    //     catchNull (name, value);
    //     catchNonArray (name, value);

    //     const typed = value as Date [];
    //     const result = typed.map ((v, i) =>
    //     {
    //         catchUndefined (`${name}[${String (i)}]`, v);
    //         catchNull (`${name}[${String (i)}]`, v);
    //         catchNonInteger (`${name}[${String (i)}]`, v);

    //         return new Date (v);
    //     });
    //     return result;
    // }
    // /**
    //  * อ่านข้อมูลอาร์เรย์วัตถุ จากชื่อที่กำหนดไว้
    //  * คำสั่งนี้ไม่บังคับว่าในชุดข้อมูลดังกล่าวอาจมีตัวแปรนี้ หรือไม่มีก็ได้
    //  * 
    //  * @returns {Record<string, unknown>[]}
    //  * @returns {undefined}
    // */
    // init.optionalArrayObject = (name: string, undefinedValue ?: Record<string, unknown> []) : Record<string, unknown> [] | undefined =>
    // {
    //     const value = instance [name];

    //     if (typeof value === "undefined")
    //     {
    //         return undefinedValue;
    //     }
    //     catchNull (name, value);
    //     catchNonArray (name, value);

    //     const typed = value as Record<string, unknown> [];

    //     typed.forEach ((v, i) =>
    //     {
    //         catchUndefined (`${name}[${String (i)}]`, v);
    //         catchNull (`${name}[${String (i)}]`, v);
    //         catchNonObject (`${name}[${String (i)}]`, v);
    //     });
    //     return typed;
    // }
    // /**
    //  * อ่านข้อมูลตัวอักษร จากชื่อที่กำหนดไว้
    //  * คำสั่งนี้ไม่บังคับว่าในชุดข้อมูลดังกล่าวอาจมีตัวแปรนี้ หรือไม่มีก็ได้ แต่อาจเป็น null ได้เช่นกัน
    //  * 
    //  * @returns {string}
    //  * @returns {undefined}
    //  * @returns {null}
    // */
    // init.optionalStringOrNull = (name: string, undefinedValue ?: string, nullValue ?: string) : string | undefined | null =>
    // {
    //     const value = instance [name];

    //     if (typeof value === "undefined")
    //     {
    //         return undefinedValue;
    //     }
    //     if (typeof value === "object" && value === null)
    //     {
    //         return nullValue;
    //     }
    //     catchNonString (name, value);
        
    //     return value as string;
    // }
    // /**
    //  * อ่านข้อมูลตัวเลขจำนวนเต็ม จากชื่อที่กำหนดไว้
    //  * คำสั่งนี้ไม่บังคับว่าในชุดข้อมูลดังกล่าวอาจมีตัวแปรนี้ หรือไม่มีก็ได้ แต่อาจเป็น null ได้เช่นกัน
    //  * 
    //  * @returns {number}
    //  * @returns {undefined}
    //  * @returns {null}
    // */
    // init.optionalIntegerOrNull = (name: string, undefinedValue ?: number, nullValue ?: number) : number | undefined | null =>
    // {
    //     const value = instance [name];

    //     if (typeof value === "undefined")
    //     {
    //         return undefinedValue;
    //     }
    //     if (typeof value === "object" && value === null)
    //     {
    //         return nullValue;
    //     }
    //     catchNonInteger (name, value);

    //     return value as number;
    // }
    // /**
    //  * อ่านข้อมูลตัวเลขทศนิยม จากชื่อที่กำหนดไว้
    //  * คำสั่งนี้ไม่บังคับว่าในชุดข้อมูลดังกล่าวอาจมีตัวแปรนี้ หรือไม่มีก็ได้ แต่อาจเป็น null ได้เช่นกัน
    //  * 
    //  * @returns {number}
    //  * @returns {undefined}
    //  * @returns {null}
    // */
    // init.optionalFloatOrNull = (name: string, undefinedValue ?: number, nullValue ?: number) : number | undefined | null =>
    // {
    //     const value = instance [name];

    //     if (typeof value === "undefined")
    //     {
    //         return undefinedValue;
    //     }
    //     if (typeof value === "object" && value === null)
    //     {
    //         return nullValue;
    //     }
    //     catchNonFloat (name, value);

    //     return value as number;
    // }
    // /**
    //  * อ่านข้อมูลวันที่เวลา จากชื่อที่กำหนดไว้
    //  * คำสั่งนี้ไม่บังคับว่าในชุดข้อมูลดังกล่าวอาจมีตัวแปรนี้ หรือไม่มีก็ได้ แต่อาจเป็น null ได้เช่นกัน
    //  * 
    //  * @returns {Date}
    //  * @returns {undefined}
    //  * @returns {null}
    // */
    // init.optionalDateOrNull = (name: string, undefinedValue ?: Date, nullValue ?: Date) : Date | undefined | null =>
    // {
    //     const value = instance [name];

    //     if (typeof value === "undefined")
    //     {
    //         return undefinedValue;
    //     }
    //     if (typeof value === "object" && value === null)
    //     {
    //         return nullValue;
    //     }
    //     catchNonInteger (name, value);

    //     return new Date (value as number);
    // }
    // /**
    //  * อ่านข้อมูลวัตถุ จากชื่อที่กำหนดไว้
    //  * คำสั่งนี้ไม่บังคับว่าในชุดข้อมูลดังกล่าวอาจมีตัวแปรนี้ หรือไม่มีก็ได้ แต่อาจเป็น null ได้เช่นกัน
    //  * 
    //  * @returns {Record<string, unknown>}
    //  * @returns {undefined}
    //  * @returns {null}
    // */
    // init.optionalObjectOrNull = (name: string, undefinedValue ?: Record<string, unknown>, nullValue ?: Record<string, unknown>) : Record<string, unknown> | undefined | null =>
    // {
    //     const value = instance [name];

    //     if (typeof value === "undefined")
    //     {
    //         return undefinedValue;
    //     }
    //     if (typeof value === "object" && value === null)
    //     {
    //         return nullValue;
    //     }
    //     catchNonObject (name, value);

    //     return value as Record<string, unknown>;
    // }
    /**
     * แข็งวัตถุ (ความปลอดภัย)
    */
    Object.freeze (init);
    /**
     * ส่งออกตัวแปร
    */
    return init;
}

/**
 * แข็งวัตถุ (ความปลอดภัย)
*/
Object.freeze (content);
/**
 * ส่งออกตัวแปร
*/
export default content;