import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router";

import utilLog from "#util/common.log.ts";
import utilNav from "#util/common.navigation.ts";

import apiAuth from "#util/api.auth.ts";

const content = function InitSystem (prop: ComponentProperty)
{
  const navigate = useNavigate ();

  /**
   * ทำงานเมื่อระบบเริ่มโหลดข้อมูล
  */
  const onInit = useCallback (() =>
  {
    utilLog.init ();
    utilNav.init (navigate);

    apiAuth.saveLoad ();
  },
  [navigate]);

  /**
   * ทำงานเมื่อระบบเริ่มหยุดการทำงาน
  */
  const onTerminate = useCallback (() =>
  {
    utilNav.terminate ();
    utilLog.terminate ();

    apiAuth.saveReset ();
  },
  []);

  useEffect (() =>
  {
    const onMounted = prop.onMounted;
    const onUnmounted = prop.onUnmounted;

    onInit ();
    onMounted ();

    return () =>
    {
      onTerminate ();
      onUnmounted ();
    }
  },
  [
    prop.onMounted, prop.onUnmounted,
    onInit, onTerminate
  ]);

  return (<></>);
}
interface ComponentProperty
{
  onMounted: () => void;
  onUnmounted: () => void;
}
/**
 * ส่งออกตัวแปร
*/
export default content;