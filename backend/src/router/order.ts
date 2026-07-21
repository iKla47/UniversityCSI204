import http             from "#core/http.ts";
import control          from "#controller/order.ts";
import controlAuth      from "#controller/auth.ts";

const content = () =>
{
    //
    // ไม่มีคุณสมบัติในตอนนี้
    //
    return;
}
content.getRoute = () =>
{
    const router = http.router ();
    const authUser = controlAuth.validateLeastUser ();
    const authStaff = controlAuth.validateLeastStaff ();

    router.get ("/", authStaff, control.getList);
    router.get ("/:id", authUser, control.get);

    return router;
}
/**
 * ส่งออกตัวแปร
*/
export default content;