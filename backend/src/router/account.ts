import http from "#core/http.ts";
import control from "#controller/account.ts";

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

    router.get ("/:id", control.routeBasic);

    return router;
}

Object.freeze (content);
export default content;
