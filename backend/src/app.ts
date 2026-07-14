import env          from "#core/env.ts";
import log          from "#core/log.ts";
import logConsole   from "#core/logConsole.ts";
import logFile      from "#core/logFile.ts";
import logInject    from "#core/logInject.ts";
import logRemote    from "#core/logRemote.ts";
import http         from "#core/http.ts";
import webSocket    from "#core/webSocket.ts";
import sql          from "#core/sql.ts";

import routerAuth       from "#router/auth.ts";
import routerProduct    from "#router/product.ts";
import modelAuth        from "#model/auth.ts";
import modelAccount     from "#model/account.ts";


const content = () =>
{
    return;
}
content.start = async () =>
{
    //
    // Core Subsystem
    //
    await env.init ();
    await log.init ();
    await logConsole.init ();
    await logFile.init ();
    await logInject.init ();
    await logRemote.init ();
    await sql.init ();
    await http.init (() =>
    {
        http.routeTo ("/auth", routerAuth.getRouter ());
        http.routeTo ("/product", routerProduct.getRouter ());
        return;
    });
    await webSocket.init ();
    //
    // Service Subsystem
    //
    await modelAuth.init ();
    await modelAccount.init ();
}
content.seed = async () =>
{
    await modelAuth.create ("ItsJeremie", "12345678",
    await modelAccount.create ({ 
        name: "ItsJeremie", 
        role: modelAccount.ROLE_USER 
    }));
    await modelAuth.create ("Admin", "12345678",
    await modelAccount.create ({ 
        name: "Administrator", 
        role: modelAccount.ROLE_MANAGER 
    }));


    return;
}
await content.start ();