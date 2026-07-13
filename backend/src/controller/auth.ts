import http from "#core/http.ts";
import logging from "#core/log.ts";
import objreader from "#core/objectReader.ts";
import model from "#model/auth.ts";
import
{
    ErrorNotFound,
    ErrorConflict,
}
from "#core/error.ts"
import type 
{ 
    Request, 
    Response 
} 
from "#core/http.ts";

const log = logging.scoped ("Auth");
const content = function ()
{
    return;
}
content.init = function ()
{
    return;
}
content.terminate = function ()
{
    return;
}
content.routeSignIn = async function (request: Request, response: Response)
{
    if (!request.body)
    {
        response.status (http.STATUS_BAD_REQUEST)
        response.end ();
        return;
    }
    const read = objreader (request.body);
    let id: string;


    try
    {
        id = read.requireString ("identifier");
    }
    catch
    {
        response.status (http.STATUS_BAD_REQUEST);
        response.end ();
        return;
    }
    try
    {
        await model.signIn (id);
    }
    catch (error: unknown)
    {
        if (error instanceof ErrorNotFound)
        {
            response.status (http.STATUS_NOT_FOUND);
            response.end ();
            return;
        }
        if (error instanceof ErrorConflict)
        {
            response.status (http.STATUS_CONFLICT);
            response.end ();
            return;
        }
        response.status (http.STATUS_BAD_REQUEST);
        response.end ();
        return;
    }
}
content.routeSignInPwd = function (request: Request, response: Response)
{
    try
    {
        response.status (http.STATUS_NOT_IMPLEMENTED);
        response.end ();
    }
    catch (error: unknown)
    {
        log.error ("Unhandled initiated exception: /sign-in");
        log.error (error);

        response.status (http.STATUS_SERVICE_UNAVAILABLE);
        response.end ();
    }
}
content.routeSignInTotp = function (request: Request, response: Response)
{
    response.status (200);
    response.end ();
}
content.routeSignOut = function (request: Request, response: Response)
{
    response.status (200);
    response.end ();
}

content.routeSignUp = function (request: Request, response: Response)
{
    response.status (200);
    response.end ();
}

content.routeResume = function (request: Request, response: Response)
{
    response.status (http.STATUS_NOT_IMPLEMENTED);
    response.end ();
}
content.routeRenewal = function (request: Request, response: Response)
{
    response.status (http.STATUS_NOT_IMPLEMENTED);
    response.end ();
}
content.routeDeactivate = function (request: Request, response: Response)
{
    response.status (http.STATUS_NOT_IMPLEMENTED);
    response.end ();
}
content.routeDelete = function (request: Request, response: Response)
{
    response.status (http.STATUS_NOT_IMPLEMENTED);
    response.end ();
}
Object.freeze (content);
export default content;
