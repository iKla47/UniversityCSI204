import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import http from "http";

const processor = express ();
const server = http.createServer (processor);
const start = Date.now ();

processor.use (helmet ({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
    crossOriginResourcePolicy: false,
    originAgentCluster: false,
    referrerPolicy: false,
    xContentTypeOptions: false,
    xDnsPrefetchControl: false,
    xDownloadOptions: false,
    xFrameOptions: false,
    xPermittedCrossDomainPolicies: false,
    xXssProtection: false,

    hidePoweredBy: true,
}))
processor.use (cors ());
processor.use (compression ());
processor.use (express.json ());

processor.get ("/uptime", (request, response) =>
{
    return response.json ({
        value: Date.now () - start
    });
});
server.listen (51000, "0.0.0.0");