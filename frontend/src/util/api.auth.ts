import config from "#util/api.config.ts";

const content = function ()
{
    return;
}

content.signIn = async function (input: string)
{
    void input;

    return Promise.resolve ();
}
content.signInPwd = async function (session: string, input: string)
{
    void session;
    void input;

    return Promise.resolve ();
}
content.signInVerifyTotp = async function (session: string, input: string)
{
    void session;
    void input;

    return Promise.resolve ();
}
content.signInFinish = async function (session: string)
{
    void session;

    return Promise.resolve ();
}

content.signUp = async function (id: string, pwd: string, email: string)
{
    void id;
    void pwd;
    void email;

    return Promise.resolve ();
}
content.signUpVerifyEmail = async function (session: string, code: string)
{
    void session;
    void code;

    return Promise.resolve ();
}
content.signUpFinish = async function ()
{
    return Promise.resolve ();
}
content.signOut = async function (session: string)
{
    void session;
    
    return Promise.resolve ();
}

content.checkCompliantId = function (input: string)
{
    const lengthEmpty = input.length != 0;
    const lengthMin = input.length >= 2;
    const lengthMax = input.length <= 32;
    const all = lengthMin && lengthMax;

    return {
        lengthEmpty,
        lengthMin,
        lengthMax,
        all
    }
}
content.checkCompliantPwd = function (input: string)
{
    const lengthEmpty = input.length != 0;
    const lengthMin = input.length >= 8;
    const lengthMax = input.length <= 32;
    const all = lengthMin && lengthMax;

    return {
        lengthEmpty,
        lengthMin,
        lengthMax,
        all
    }
}
export default content;