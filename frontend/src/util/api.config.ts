
const content = function ()
{
    return;
}
content.BASE_PROTOCOL = "http";
content.BASE_HOST = location.host;
content.BASE_URL = `${content.BASE_PROTOCOL}://${content.BASE_HOST}`;

content.AUTH_HOST = content.BASE_URL;
content.AUTH_PREFIX = "/auth";
content.AUTH_URL = `${content.AUTH_HOST}${content.AUTH_PREFIX}`;

export default content;