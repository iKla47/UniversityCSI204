import http     from "#core/http.ts";
import control  from "#controller/account.ts";
import controlAuth from "#controller/auth.ts";
import modelAct from "#model/account.ts";

/**
 *  
*/
const content = () =>
{
    return;
}
/**
 * 
*/
content.getController = () =>
{
    return control;
}
/**
 * 
*/
content.getRouter = () =>
{
    const router = http.router ();
    const authUser = controlAuth.validate ({
        allowedRole: [
            modelAct.ROLE_USER,
            modelAct.ROLE_MANAGER
        ],
        allowedRestriction: 0,
    });
    const authManager = controlAuth.validateOnlyManager ();

    router.get ("/:id", control.get);
    router.put ("/:id", authUser, control.put);
    router.post ("/", authManager, control.post);
    router.delete ("/:id", authManager, control.delete);

    return router;
}
/**
 * แข็งวัตถุ (ความปลอดภัย)
*/
Object.freeze (content);
/**
 * ส่งออกตัวแปร
*/
export default content;