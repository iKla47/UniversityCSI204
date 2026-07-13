import http from "#core/http.ts";
import control from "#controller/product.ts"

const content = function ()
{
    return;
}
content.getController = function ()
{
    return control;
}
content.getRouter = function ()
{
    const router = http.router ();
    return router;
}

Object.freeze (content);
export default content;