import objectReader from "#util/common.objectReader.ts";
import common       from "#util/api.common.ts";

import { type ObjectReader } from "#util/common.objectReader.ts";
import { type BasicId as OrderId } from "#util/api.order.ts";

/**
 * ทำหน้าที่เป็นตัวกลางในการสื่อสารระหว่างส่วนติดต่อผู้ใช้และเซิร์ฟเวอร์
 * ที่เกี่ยวข้องกับข้อมูลการร้องเรียนและการสอบถามข้อมูล (Inquiry)
*/
const content = () => 
{
    //
    // ไม่มีคุณสมบัติดังนั้นอย่าเรียกใช้งาน
    //
    return;
};

/**
 * ดึงข้อมูลการร้องเรียนตามรหัส inquiry
 * 
 * @param session ชุดรหัสยืนยันตัวตน
 * @param id รหัสการร้องเรียน
*/
content.getBasic = async (session: string, id: BasicId) 
    : Promise<BasicFetch> =>
{
    const url = `${content.NET_URL}/${String (id)}`;
    const reader = await common.getJson (session, url);
    const result = content.outputGetBasic (objectReader (reader));

    return result;
};

/**
 * ดึงรายการข้อมูลการร้องเรียนทั้งหมด (สำหรับเจ้าหน้าที่/ผู้จัดการ)
 * 
 * @param session ชุดรหัสยืนยันตัวตน
*/
content.getBasicList = async (session: string) 
    : Promise<BasicFetch []> =>
{
    const url = content.NET_URL;
    const reader = await common.getJson (session, url);
    const result = reader.requireArrayRecord ("Item").map ((x) =>
    {
        return content.outputGetBasic (objectReader (x));
    });

    return result;
};

/**
 * ดึงรายการข้อมูลการร้องเรียนที่เกี่ยวข้องกับ Order ID นั้นๆ
 * 
 * @param session ชุดรหัสยืนยันตัวตน
 * @param orderId รหัสคำสั่งซื้อ
*/
content.getListByOrder = async (session: string, orderId: OrderId) 
    : Promise<BasicFetch []> =>
{
    const url = `${content.NET_URL}/order/${String (orderId)}`;
    const reader = await common.getJson (session, url);
    const result = reader.requireArrayRecord ("Item").map ((x) =>
    {
        return content.outputGetBasic (objectReader (x));
    });

    return result;
};

/**
 * สร้างรายการร้องเรียน / สอบถามใหม่
 * 
 * @param session ชุดรหัสยืนยันตัวตน
 * @param data ชุดข้อมูลสำหรับสร้างรายการร้องเรียน
*/
content.createBasic = async (session: string, data: BasicCreate) 
    : Promise<BasicCreateResult> =>
{
    const url = content.NET_URL;
    const response = await common.postJson (session, url, {
        "OrderId": data.orderId ?? null,
        "Type": data.type,
        "Title": data.title,
        "Text": data.text,
        "Status": data.status ?? content.STATUS_PENDING
    });
    const json = await common.toJson (response);
    const result = content.outputPostBasic (objectReader (json));

    return result;
};

/**
 * ปรับเปลี่ยนข้อมูลการร้องเรียน (เช่น เจ้าหน้าที่อัปเดตสถานะการดำเนินงาน)
 * 
 * @param session ชุดรหัสยืนยันตัวตน
 * @param data ชุดข้อมูลประกอบการอัปเดต
*/
content.updateBasic = async (session: string, data: BasicUpdate) 
    : Promise<void> =>
{
    const url = `${content.NET_URL}/${String (data.inquiryId)}`;

    await common.putJson (session, url, {
        "Status": data.status
    });
};

/**
 * ลบข้อมูลการร้องเรียนออกจากระบบ
 * 
 * @param session ชุดรหัสยืนยันตัวตน
 * @param id รหัสรายการร้องเรียนที่ต้องการลบ
*/
content.deleteBasic = async (session: string, id: BasicId) 
    : Promise<void> =>
{
    const url = `${content.NET_URL}/${String (id)}`;
    await common.delete (session, url);
};

/*
 * OUTPUT TRANSFORMERS (Internal Helper Methods)
 */
content.outputGetBasic = (reader: ObjectReader) : BasicFetch =>
{
    return {
        inquiryId: reader.requireInteger ("InquiryId"),
        orderId: reader.requireIntegerOrNull ("OrderId"),
        type: reader.requireInteger ("Type"),
        title: reader.requireString ("Title"),
        text: reader.requireString ("Text"),
        status: reader.requireInteger ("Status")
    };
};

content.outputPostBasic = (reader: ObjectReader) : BasicCreateResult =>
{
    return {
        inquiryId: reader.requireInteger ("InquiryId"),
        created: reader.requireDate ("Created")
    };
};

/**
 * โปรโตคอลที่ใช้ในการสื่อสารระหว่างเซิร์ฟเวอร์
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
 * เส้นทางนำหน้าหลังจากที่อยู่ของเซิร์ฟเวอร์ สำหรับระบบร้องเรียน
*/
content.NET_PREFIX = "/inquiry";
/**
 * ระยะเวลาการเชื่อมต่อกับเซิร์ฟเวอร์ก่อนที่จะตัดขาด
*/
content.NET_TIMEOUT = 10000;
/**
 * ลิงค์เต็มของที่อยู่เซิร์ฟเวอร์
*/
content.NET_URL = `${content.NET_PROTOCOL}://${content.NET_ADDRESS}:${String (content.NET_PORT)}${content.NET_PREFIX}`;

/**
 * ประเภทข้อร้องเรียน: สอบถามทั่วไป
*/
content.TYPE_GENERAL = 1;
/**
 * ประเภทข้อร้องเรียน: ปัญหาเกี่ยวกับคำสั่งซื้อ
*/
content.TYPE_ORDER = 2;
/**
 * ประเภทข้อร้องเรียน: ปัญหาเกี่ยวกับชำระเงิน
*/
content.TYPE_PAYMENT = 3;

/**
 * สถานะการร้องเรียน: รอดำเนินการ
*/
content.STATUS_PENDING = 0;
/**
 * สถานะการร้องเรียน: กำลังดำเนินการ
*/
content.STATUS_IN_PROGRESS = 1;
/**
 * สถานะการร้องเรียน: ดำเนินการเสร็จสิ้น
*/
content.STATUS_RESOLVED = 2;
/**
 * สถานะการร้องเรียน: ปฏิเสธ / ยกเลิก
*/
content.STATUS_REJECTED = 3;

/**
 * โครงสร้างข้อมูลที่ได้รับจากการดึงข้อมูลการร้องเรียน
*/
export interface BasicFetch
{
    /**
     * รหัสรายการร้องเรียน
    */
    readonly inquiryId: BasicId;
    /**
     * รหัสคำสั่งซื้อที่เกี่ยวข้อง (ถ้ามี)
    */
    readonly orderId: OrderId | null;
    /**
     * ประเภทคำร้องเรียน
    */
    readonly type: number;
    /**
     * หัวข้อการร้องเรียน
    */
    readonly title: string;
    /**
     * ข้อความรายละเอียด
    */
    readonly text: string;
    /**
     * สถานะการดำเนินงาน
    */
    readonly status: number;
}

/**
 * โครงสร้างข้อมูลสำหรับสร้างรายการร้องเรียนใหม่
*/
export interface BasicCreate
{
    /**
     * รหัสคำสั่งซื้อที่เกี่ยวข้อง (ใส่ undefined หากเป็นการสอบถามทั่วไป)
    */
    orderId ?: OrderId | undefined;
    /**
     * ประเภทคำร้องเรียน
    */
    type: number;
    /**
     * หัวข้อการร้องเรียน
    */
    title: string;
    /**
     * ข้อความรายละเอียด
    */
    text: string;
    /**
     * สถานะตั้งต้น (ไม่จำเป็นต้องใส่ ระบบจะตั้งค่าเป็น STATUS_PENDING ให้)
    */
    status ?: number | undefined;
}

/**
 * ผลลัพธ์ที่ได้รับหลังจากสร้างรายการร้องเรียนสำเร็จ
*/
export interface BasicCreateResult
{
    /**
     * รหัสรายการร้องเรียนที่เพิ่งสร้างขึ้น
    */
    inquiryId: BasicId;
    /**
     * วันเวลาที่บันทึกคำร้องเรียน
    */
    created: Date;
}

/**
 * โครงสร้างข้อมูลสำหรับการปรับเปลี่ยนสถานะข้อร้องเรียน
*/
export interface BasicUpdate
{
    /**
     * รหัสรายการร้องเรียนที่ต้องการปรับเปลี่ยน
    */
    inquiryId: BasicId;
    /**
     * สถานะการดำเนินงานใหม่
    */
    status ?: number | undefined;
}

/**
 * รหัสเอกลักษณ์หลัก (PRIMARY KEY) ของการร้องเรียน
*/
export type BasicId = number;

/**
 * ส่งออกตัวแปร
*/
export default content;