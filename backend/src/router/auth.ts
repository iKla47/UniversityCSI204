import http     from "#core/http.ts";
import control  from "#controller/auth.ts";
import model    from "#model/auth.ts";
import modelAct from "#model/account.ts"

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
    const limitSignIn = http.useRateLimit ({
        window: 60000,
        limit: 3
    });
    const limitSignUp = http.useRateLimit ({
        window: 60000,
        limit: 3
    });
    const limitSignUp2 = http.useRateLimit ({
        window: 5000,
        limit: 1
    });
    const authChallenge = control.validate ({
        allowedRole: modelAct.getRole (),
        allowedRestriction: model.RESTRICTION_CHALLENGE
    });

    route.post ("/sign-in", 
        limitSignIn, 
        control.signIn
    );
    route.post ("/sign-in-password", 
        limitSignIn, authChallenge, 
        control.routeSignInPwd
    );
    route.post ("/sign-in-totp",
        limitSignIn, authChallenge, 
        control.routeSignInTotp
    );
    route.post ("/sign-out", 
        limitSignIn, authChallenge,
        control.routeSignOut
    );
    
    route.post ("/sign-up", 
        limitSignUp,
        control.signUp
    );
    route.post ("/sign-up-password", 
        limitSignUp2,
        control.signUp
    );
    route.post ("/sign-up-email", 
        limitSignUp2,
        control.signUp
    );

    route.post ("/deactivate", 
        control.deactivate
    );
    route.post ("/delete", 
        control.delete
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