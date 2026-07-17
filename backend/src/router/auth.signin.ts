import http             from "#core/http.ts";
import control          from "#controller/auth.ts";
import controlSignIn    from "#controller/auth.signin.ts";
import model            from "#model/auth.signin.ts";

const content = function ()
{
    return;
}
content.getController = function ()
{
    return controlSignIn;
}
content.getModel = function ()
{
    return model;
}
content.getRouter = function ()
{
    const route = http.router ();
    const limiterId = http.useRateLimit ({
        window: 60000 * 10,
        limit: 3,
        skipSuccess: true
    });
    const limiterPwd = http.useRateLimit ({
        window: 60000,
        limit: 3,
        skipSuccess: true
    });
    const validation = control.validateOnlyAuth ();

    route.post ("/challenge", 
        limiterId,
        controlSignIn.challenge, 
        validation, 
        limiterPwd,
        controlSignIn.challengeIdentified
    );

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