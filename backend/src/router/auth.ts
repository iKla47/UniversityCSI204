import http     from "#core/http.ts";
import control  from "#controller/auth.ts";
import model    from "#model/auth.ts";

const content = function ()
{
    return;
}
content.getController = function ()
{
    return control;
}
content.getModel = function ()
{
    return model;
}
content.getRouter = function ()
{
    const route = http.router ();

    return route;
}
/**
 * แข็งวัตถุ (ความปลอดภัย)
*/
Object.freeze (content);
/**
 * ส่งออกตัวแปร
*/
export default content;