import http from "#core/http.ts";
import type 
{ 
    Request, 
    Response 
} 
from "#core/http.ts";

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

content.routeBasic = function (request: Request, response: Response)
{
    response.status (http.STATUS_NOT_IMPLEMENTED);
    response.end ();
}

Object.freeze (content);
export default content;