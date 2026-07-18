import error        from "#util/common.error.ts";
import objectReader from "#util/common.objectReader.ts";
import common       from "#util/api.common.ts";

import { type BasicId as AccountId } from "#util/api.account";
import { type ObjectReader } from "#util/common.objectReader.ts";

/**
 * รหัสของชุดรหัสข้อมูล (หรือเรียกอีกอย่างว่า PRIMARY KEY)
*/
export type BasicId = number;
/**
 * รหัสของชุดรหัสข้อมูลสำหรับหมวดหมู่ (หรือเรียกอีกอย่างว่า PRIMARY KEY)
*/
export type CategoryId = number;
/**
 * รหัสของชุดรหัสข้อมูลสำหรับความคิดเห็น (หรือเรียกอีกอย่างว่า PRIMARY KEY)
*/
export type CommentId = number;
/**
 * รหัสของชุดรหัสข้อมูลสำหรับตัวอย่าง (หรือเรียกอีกอย่างว่า PRIMARY KEY)
*/
export type ReviewId = number;
/**
 * โครงสร้างข้อมูลที่ได้รับจากการดึงข้อมูลพื้นฐานจากระบบฐานข้อมูล
*/
export interface BasicFetch
{
    /**
     * รหัสสินค้า
    */
    id: BasicId;
    /**
     * ชื่อสินค้า
    */
    name: string;
    /**
     * ข้อความอธิบาย
    */
    description: string;
    /**
     * ราคา
    */
    price: number;
    /**
     * สกุลเงิน
    */
    priceCode: number;
    /**
     * แพลตฟอร์ม
    */
    platform: number;
    /**
     * รูปปกเกม
    */
    artwork: string;
}
/**
 * โครงสร้างข้อมูลที่ใช้ในการเปลี่ยนแปลงข้อมูลพื้นฐานในฐานข้อมูล
*/
export interface BasicUpdate
{
    /**
     * รหัสสินค้า
    */
    id: BasicId;
    /**
     * ชื่อสินค้า
    */
    name ?: string | undefined;
    /**
     * ข้อความอธิบาย
    */
    description ?: string | undefined;
    /**
     * ราคา
    */
    price ?: number | undefined;
    /**
     * สกุลเงิน
    */
    priceCode ?: number | undefined;
    /**
     * แพลตฟอร์ม
    */
    platform ?: number | undefined;
}
/**
 * โครงสร้างข้อมูลที่ใช้ในการสร้างข้อมูลพื้นฐานในฐานข้อมูล
*/
export interface BasicCreate
{
    /**
     * ชื่อสินค้า
    */
    name: string;
    /**
     * ข้อความอธิบาย
    */
    description: string;
    /**
     * ราคา
    */
    price: number;
    /**
     * สกุลเงิน
    */
    priceCode: number;
    /**
     * แพลตฟอร์ม
    */
    platform: number;
}
/**
 * โครงสร้างประกอบที่ได้รับหลังจากสร้างสินค้าแล้ว
*/
export interface BasicCreateResult
{
    /**
     * รหัสสินค้า
    */
    id: number;
    /**
     * วันที่สร้าง
    */
    created: Date;
}

/**
 * โครงสร้างข้อมูลเมื่อทำการดึงข้อมูลความคิดเห็น
*/
export interface CommentFetch
{
    /**
     * รหัสความคิดเห็น
    */
    commentId: CommentId;
    /**
     * รหัสสินค้าที่เกี่ยวข้อง
    */
    productId: BasicId;
    /**
     * รหัสบัญชีของผู้เขียน
    */
    author: AccountId;
    /**
     * หัวเรื่อง
    */
    title: string;
    /**
     * ข้อความ
    */
    text: string;
}
export interface CommentUpdate
{
    /**
     * รหัสสินค้าที่เกี่ยวข้อง
    */
    productId: BasicId;
    /**
     * หัวเรื่อง
    */
    title: string;
    /**
     * ข้อความ
    */
    text: string;
}
export interface CommentCreate
{
    /**
     * รหัสสินค้าที่เกี่ยวข้อง
    */
    productId: BasicId;
    /**
     * หัวเรื่อง
    */
    title: string;
    /**
     * ข้อความ
    */
    text: string;
}


const content = () => 
{
    //
    // ไม่มีคุณสมบัติดังนั้นอย่าเรียกใช้งาน
    //
    return;
};
/**
 * โปรโตอลที่ใช้ในการสื่อสารระหว่างเซิร์ฟเวอร์
*/
content.NET_PROTOCOL = "http";
/**
 * ที่อยู่ของเซิร์ฟเวอร์
*/
content.NET_ADDRESS = location.hostname;
/**
 * พอร์ตการเชื่อมต่อกับเซิร์ฟเวอร์
*/
content.NET_PORT = 51000;
/**
 * เส้นทางนำหน้าหลังจากที่อยู่ของเซิร์ฟเวอร์
*/
content.NET_PREFIX = "/product";
/**
 * เส้นทางนำหน้าหลังจากที่อยู่ของเซิร์ฟเวอร์ สำหรับระบบความคิดเห็น
*/
content.NET_PREFIX_COMMENT = "/product-comment";
/**
 * ระหว่างเวลาการเชื่อมต่อกับเซิร์ฟเวอร์ก่อนที่จะตัดขาด
*/
content.NET_TIMEOUT = 30000;
/**
 * ลิงค์เต็มของที่อยู่เซิร์ฟเวอร์
*/
content.NET_URL = `${content.NET_PROTOCOL}://${content.NET_ADDRESS}:${String (content.NET_PORT)}${content.NET_PREFIX}`;
/**
 * ลิงค์เต็มของที่อยู่เซิร์ฟเวอร์ สำหรับระบบความคิดเห็น
*/
content.NET_URL_COMMENT = `${content.NET_PROTOCOL}://${content.NET_ADDRESS}:${String (content.NET_PORT)}${content.NET_PREFIX_COMMENT}`;
/**
 * ไม่มีแพลตฟอร์ม
*/
content.PLATFORM_NONE = 0;
/**
 * แพลตฟอร์ม: Windows
 */
content.PLATFORM_WINDOWS = 1;
/**
 * แพลตฟอร์ม: Android
 */
content.PLATFORM_ANDROID = 2;
/**
 * แพลตฟอร์ม: Linux
 */
content.PLATFORM_LINUX = 3;
/**
 * แพลตฟอร์ม: MacOS
 */
content.PLATFORM_MACOS = 4;
/**
 * แพลตฟอร์ม: iOS
 */
content.PLATFORM_IOS = 5;
/**
 * แพลตฟอร์ม: PlayStation 1
 */
content.PLATFORM_PLAYSTATION_1 = 6;
/**
 * แพลตฟอร์ม: PlayStation 2
 */
content.PLATFORM_PLAYSTATION_2 = 7;
/**
 * แพลตฟอร์ม: PlayStation 3
 */
content.PLATFORM_PLAYSTATION_3 = 8;
/**
 * แพลตฟอร์ม: PlayStation 4
 */
content.PLATFORM_PLAYSTATION_4 = 9;
/**
 * แพลตฟอร์ม: PlayStation 5
 */
content.PLATFORM_PLAYSTATION_5 = 10;
/**
 * แพลตฟอร์ม: XBOX
 */
content.PLATFORM_XBOX = 11;
/**
 * แพลตฟอร์ม: XBOX 360
 */
content.PLATFORM_XBOX_360 = 12;
/**
 * แพลตฟอร์ม: XBOX One
 */
content.PLATFORM_XBOX_ONE = 13;
/**
 * แพลตฟอร์ม: XBOX One S
 */
content.PLATFORM_XBOX_ONE_S = 14;
/**
 * แพลตฟอร์ม: XBOX One X
 */
content.PLATFORM_XBOX_ONE_X = 15;
/**
 * แพลตฟอร์ม: XBOX Series X
 */
content.PLATFORM_XBOX_SERIES_X = 16;
/**
 * แพลตฟอร์ม: XBOX Series S
 */
content.PLATFORM_XBOX_SERIES_S = 17;

/**
 * ทำการดึงข้อมูลพื้นฐานของสินค้าดังกล่าวที่ระบุด้วยรหัสสินค้า
 * 
 * @param session ชุดรหัสยืนยันตัวตน
 * @param key รหัสสินค้าที่ถูกต้อง
*/
content.getBasic = async (session: string, key: BasicId)
    : Promise<BasicFetch> =>
{
    const id = String (key);
    const endpoint = `${content.NET_URL}/${id}`;
    const data = await common.getJson (session, endpoint);
    const result = content.readBasic (data);

    return result;
}
/**
 * ทำการดึงรายการข้อมูลพื้นฐานของสินค้า
 * 
 * @param session ชุดรหัสยืนยันตัวตน
*/
content.getBasicList = async (session: string)
    : Promise<BasicFetch[]> =>
{
    const endpoint = `${content.NET_URL}/`;
    const data = await common.getJson (session, endpoint);
    const result = content.readBasicList (data);

    return result;
}
/**
 * ทำการดึงข้อมูลความคิดเห็นพื้นฐานของสินค้า
 * 
 * @param session ชุดรหัสยืนยันตัวตน
 * @param key รหัสความคิดเห็นที่ถูกต้อง
*/
content.getComment = async (session: string, key: CommentId) 
    : Promise<CommentFetch> =>
{
    const id = String (key);
    const endpoint = `${content.NET_URL_COMMENT}/${id}`;
    const data = await common.getJson (session, endpoint);
    const result = content.readComment (data);

    return result;
}

/**
 * ทำการเปลี่ยนข้อมูลพื้นฐานของสินค้า
 * 
 * @param session ชุดรหัสยืนยันตัวตน
 * @param data ชุดข้อมูลประกอบการเปลี่ยนแปลง
*/
content.updateBasic = async (session: string, data: BasicUpdate) 
    : Promise<void> =>
{
    const header = new Headers ();

    if (session.length > 0)
    {
        header.append ("Authorization", session);
    }

    const endpoint = `${content.NET_URL}/`;
    const init: RequestInit =
    {
        method: "PUT",
        mode: "cors",
        referrerPolicy: "strict-origin",
        cache: "default",
        signal: AbortSignal.timeout (content.NET_TIMEOUT),
        headers: header,
        body: JSON.stringify ({
            "Name": data.name,
            "Description": data.description,
            "Price": data.price,
            "PriceCode": data.priceCode,
        })
    }
    const response = await fetch (endpoint, init).catch ((e: unknown) =>
    {
        throw new error.Network (e);
    });
    switch (response.status)
    {
        case 204: break;
        case 401: throw new error.NotAuthorized ();
        case 403: throw new error.Forbidden ();
        case 404: throw new error.NotFound ();
        case 429: throw new error.NetworkLimit ();
        case 500: throw new error.NotAvailable ();
        case 503: throw new error.NotAvailable ();
        default: throw new error.Unknown ();
    }
    return;
}
/**
 * ทำการสร้างข้อมูลพื้นฐานของสินค้า
 * 
 * @param session ชุดรหัสยืนยันตัวตน
 * @param data ชุดข้อมูลประกอบการสร้าง
*/
content.create = async (session: string, data: BasicCreate) :
    Promise<BasicCreateResult> =>
{
    const header = new Headers ();

    header.append ("Content-Type", "application/json");
    header.append ("Accept", "application/json");
    header.append ("Accept-Encoding", "*");

    if (session.length > 0)
    {
        header.append ("Authorization", session);
    }

    const endpoint = `${content.NET_URL}/`;
    const init: RequestInit =
    {
        method: "POST",
        mode: "cors",
        referrerPolicy: "strict-origin",
        cache: "default",
        signal: AbortSignal.timeout (content.NET_TIMEOUT),
        headers: header,
        body: JSON.stringify ({
            "Name": data.name,
            "Description": data.description,
            "Price": data.price,
            "PriceCode": data.priceCode,
        })
    }
    const response = await fetch (endpoint, init).catch ((e: unknown) =>
    {
        throw new error.Network (e);
    });
    switch (response.status)
    {
        case 201: break;
        case 401: throw new error.NotAuthorized ();
        case 403: throw new error.Forbidden ();
        case 429: throw new error.NetworkLimit ();
        case 500: throw new error.NotAvailable ();
        case 503: throw new error.NotAvailable ();
        default: throw new error.Unknown ();
    }
    const reader = await response.json ()
        .then (x => objectReader (x))
        .catch ((x: unknown) => 
    {
        throw new error.BadFormat (x);
    });
    return {
        id: reader.requireInteger ("Id"),
        created: reader.requireDate ("Created") 
    };
}
/**
 * ทำการลบข้อมูลพื้นฐานของสินค้า
 * 
 * @param session ชุดรหัสยืนยันตัวตน
 * @param key รหัสสินค้า
*/
content.delete = async (session: string, key: BasicId) 
    : Promise<void> =>
{
    const header = new Headers ();
    const id = String (key);

    if (session.length > 0)
    {
        header.append ("Authorization", session);
    }

    const endpoint = `${content.NET_URL}/${id}`;
    const init: RequestInit =
    {
        method: "DELETE",
        mode: "cors",
        referrerPolicy: "strict-origin",
        cache: "default",
        signal: AbortSignal.timeout (content.NET_TIMEOUT),
        headers: header,
        body: undefined
    }
    const response = await fetch (endpoint, init).catch ((e: unknown) =>
    {
        throw new error.Network (e);
    });
    switch (response.status)
    {
        case 204: break;
        case 401: throw new error.NotAuthorized ();
        case 403: throw new error.Forbidden ();
        case 404: throw new error.NotFound ();
        case 429: throw new error.NetworkLimit ();
        case 500: throw new error.NotAvailable ();
        case 503: throw new error.NotAvailable ();
        default: throw new error.Unknown ();
    }
    return;
}
content.readBasic = (reader: ObjectReader) : BasicFetch =>
{
    return {
        id: reader.requireInteger ("Id"),
        name: reader.requireString ("Name"),
        description: reader.requireString ("Description"),
        price: reader.requireFloat ("Price"),
        priceCode: reader.requireInteger ("PriceCode"),
        platform: reader.requireInteger ("Platform"),
        artwork: reader.requireString ("Artwork"),
    };
}
content.readBasicList = (reader: ObjectReader) : BasicFetch [] =>
{
    return reader.requireArrayRecord ("Item").map ((x) =>
    {
        return content.readBasic (objectReader (x));
    });
}
content.readComment = (reader: ObjectReader) : CommentFetch =>
{
    return {
        commentId: reader.requireInteger ("CommentId"),
        productId: reader.requireInteger ("ProductId"),
        author: reader.requireInteger ("Author"),
        title: reader.requireString ("Title"),
        text: reader.requireString ("Text"),
    }
}

/**
 * แข็งวัตถุ (ความปลอดภัย)
*/
Object.freeze (content);
/**
 * ส่งออกตัวแปร
*/
export default content;