import type { NavigateFunction } from "react-router";

let router: NavigateFunction = function ()
{
    return;
}
const content = function ()
{
    return;
}
content.PATH_INDEX = "/";
content.PATH_ABOUT = "/about";
content.PATH_AUTH = "/auth";
content.PATH_DOC = "/doc";
content.PATH_PRODUCT = "/product";
content.PATH_PRODUCT_BROWSER = "/product-browser";
content.PATH_SHIPPING = "/shipping";
content.PATH_SETTINGS = "/settings";

content.init = function (navigator: NavigateFunction)
{
    router = navigator;
    return;
}
content.terminate = function ()
{
    router = function () { return; };
    return;
}
content.toIndex = () =>
{
    return router (content.PATH_INDEX);
}
content.toAbout = () =>
{
    return router (content.PATH_ABOUT);
}
content.toAuth = () =>
{
    return router (content.PATH_AUTH);
}
content.toDoc = () =>
{
    location.href = content.PATH_DOC;
}
content.toProduct = (id: number) =>
{
    return router (content.PATH_PRODUCT + `?id=${String (id)}`);
}
content.toProductBrowser = () =>
{
    return router (content.PATH_PRODUCT_BROWSER);
}
content.toShipping = () =>
{
    return router (content.PATH_SHIPPING);
}
content.toSettings = () =>
{
    return router (content.PATH_SETTINGS);
}
export default content;