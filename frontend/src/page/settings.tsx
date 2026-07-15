import MenuBar from "#component/menu.bar.tsx";
import
{
  UserIcon,
  UserLock,
  Container,
  Coins
}
from "lucide-react";

const content = () =>
{
  return <>
  <MenuBar direction="column" width="256px" align="start">
    <MenuBar.Item value={1} text="ทั่วไป" icon={<UserIcon/>}/>
    <MenuBar.Item value={2} text="ความปลอดภัย" icon={<UserLock/>}/>
    <MenuBar.Item value={3} text="การจัดส่ง" icon={<Container/>}/>
    <MenuBar.Item value={4} text="การชำระเงิน" icon={<Coins/>}/>
  </MenuBar>
  <h1>Hello There!</h1>
  </>;
}
/**
 * แข็งวัตถุ (ความปลอดภัย)
*/
Object.freeze (content);
/**
 * ส่งออกตัวแปร
*/
export default content;