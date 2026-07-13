import jwt from "jsonwebtoken";
import sql from "#core/sqlLegacy.ts";
import objreader from "#core/objectReader.ts";
import
{
    type Jwt
}
from "jsonwebtoken"
import
{
    ErrorNotFound,
    ErrorConflict,
    ErrorNotAvailable
}
from "#core/error.ts"

interface SignInChallenge
{
    id: string;
    pwd: string;
    link: number;
    session: string;
    sessionIssued: Date;
    sessionExpire: Date;
}

const content = function ()
{
    return;
}
content.init = async function ()
{
    return Promise.resolve ();
}
content.terminate = async function ()
{
    return Promise.resolve ();
}
content.jwtSecret = "WebProject";
content.jwtSign = async function (data: object, exp: number) : Promise<string>
{
    return new Promise ((resolve, reject) =>
    {
        jwt.sign (data, content.jwtSecret,
        {
            allowInsecureKeySizes: false,
            allowInvalidAsymmetricKeyTypes: false,
            expiresIn: exp
        },
        (error, encoded) =>
        {
            if (error)
            {
                reject (new ErrorNotAvailable ("JWT Signing Error (1)", {
                    cause: error
                }));
                return;
            }
            if (!encoded)
            {
                reject (new ErrorNotAvailable ("JWT Signing Error (2)", {
                    cause: error
                }));
                return;
            }
            resolve (encoded);
        });
    });
}
content.jwtVerify = async function (input: string) : Promise<Jwt>
{
    return new Promise ((resolve, reject) =>
    {
        jwt.verify (input, content.jwtSecret, {
            allowInvalidAsymmetricKeyTypes: false,
            complete: true,
            ignoreNotBefore: true,
            ignoreExpiration: true,
        },
        (error, decoded) =>
        {
            if (error)
            {
                reject (new ErrorNotAvailable ("JWT Verification Error (1)", {
                    cause: error
                }));
                return;
            }
            if (!decoded)
            {
                reject (new ErrorNotAvailable ("JWT Verificaiton Error (2)", {
                    cause: error
                }));
                return;
            }
            resolve (decoded);
        });
    });
}
content.signIn = async function (identifier: string) : Promise<SignInChallenge>
{
    const cmd = `
        SELECT password, link 
        FROM identifier 
        WHERE username = ? AND password = ?
    `;
    const param = [identifier];
    const result = await sql.select (cmd, param);

    if (result.length == 0)
    {
        throw new ErrorNotFound ();
    }
    if (result.length >= 2)
    {
        throw new ErrorConflict ();
    }
    const session = await content.jwtSign ({}, 300000);
    const sessionIssued = new Date (Date.now ());
    const sessionExpire = new Date (Date.now () + 300000);
    const reader = objreader (result.at (0));
    const output: SignInChallenge =
    {
        id: identifier,
        pwd: reader.requireString ("password"),
        link: reader.requireInteger ("link"),
        session: session,
        sessionIssued: sessionIssued,
        sessionExpire: sessionExpire,
    };
    return output;
}
content.getLink = async function (username: string, password: string)
{
    const cmd = 
        "SELECT link FROM identifier WHERE username = ? AND password = ?";
    const param = [username, password];
    const result = await sql.select (cmd, param);

    if (result.length == 0)
    {
        return;
    }
}


Object.freeze (content);
export default content;