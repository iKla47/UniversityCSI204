import objectReader from "#util/common.objectReader.ts";
import common       from "#util/api.common.ts";
import { type ObjectReader } from "#util/common.objectReader.ts";

const content = () => 
{
    return;
};

content.getBasic = async (session: string, key: BasicId): Promise<BasicFetch> =>
{
    const id = String(key);
    const endpoint = `${content.NET_URL}/${id}`;
    const data = await common.getJson(session, endpoint);
    return content.readBasic(data);
}

content.getBasicList = async (session: string): Promise<BasicFetch[]> =>
{
    const endpoint = content.NET_URL;
    const data = await common.getJson(session, endpoint);
    return content.readBasicList(data);
}

content.updateBasic = async (session: string, data: BasicUpdate) =>
{
    const id = data.id;
    const url = content.NET_URL + (id ? `/${String(id)}` : "");

    let expireFormatted: any = data.expire;
    if (data.expire instanceof Date) {
        expireFormatted = data.expire.toISOString();
    }

    await common.putJson(session, url, {
        "Expire": expireFormatted,
        "Type": Number(data.type),
        "Discount": Number(data.discount),
        "MinPrice": Number(data.minPrice),
        "MaxDiscount": Number(data.maxDiscount)
    });
}

content.createBasic = async (session: string, data: BasicCreate) =>
{
    let expireFormatted: any = data.expire;
    if (data.expire instanceof Date) {
        expireFormatted = data.expire.toISOString();
    }

    const response = await common.postJson(session, content.NET_URL, {
        "Id": String(data.id),
        "Expire": expireFormatted,
        "Type": Number(data.type),
        "Discount": Number(data.discount),
        "MinPrice": Number(data.minPrice),
        "MaxDiscount": Number(data.maxDiscount)
    });

    const json = await common.toJson(response);
    const result: BasicCreateResult =
    {
        id: json.requireString("Id"),
        created: json.requireDate("Created")
    };
    return result;
}

content.readBasic = (reader: ObjectReader) =>
{
    const result: BasicFetch =
    {
        id: reader.requireString("Id"),
        created: reader.requireDate("Created"),
        expire: reader.requireDate("Expire"),
        type: reader.requireInteger("Type"),
        discount: reader.requireInteger("Discount"),
        minPrice: reader.requireFloat("MinPrice"),
        maxDiscount: reader.requireFloat("MaxDiscount"),
        used: reader.requireBoolean("Used"),
    };
    return result;
}

content.readBasicList = (reader: ObjectReader) =>
{
    const result: BasicFetch[] = reader.requireArrayRecord("List")
    .map(item => content.readBasic(objectReader.create(item)));
    return result;
}

content.NET_PROTOCOL = "http";
content.NET_ADDRESS = location.hostname;
content.NET_PORT = 51000;
content.NET_PREFIX = "/promotion";
content.NET_TIMEOUT = 10000;
content.NET_URL = `${content.NET_PROTOCOL}://${content.NET_ADDRESS}:${String(content.NET_PORT)}${content.NET_PREFIX}`;

export interface BasicFetch
{
    id: BasicId;
    created: Date;
    expire: Date;
    type: number;
    discount: number;
    minPrice: number;
    maxDiscount: number;
    used: boolean;
}

export interface BasicUpdate
{
    id: BasicId;
    expire?: Date | string | undefined;
    type?: number | undefined;
    discount?: number | undefined;
    minPrice?: number | undefined;
    maxDiscount?: number | undefined;
}

export interface BasicCreate
{
    id: BasicId;
    expire: Date | string;
    type: number;
    discount: number;
    minPrice: number;
    maxDiscount: number;
}

export interface BasicCreateResult
{
    id: string;
    created: Date;
}

export type BasicId = string;

export default content;