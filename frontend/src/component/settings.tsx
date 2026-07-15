import react from "react";
import styled from "styled-components";
import MenuBar from "#component/menu.bar.tsx";
import
{
  UserIcon,
  UserLock,
  Container,
  Coins,
  ArrowLeftCircleIcon
}
from "lucide-react";

interface PropRoot
{
  transparent ?: boolean;
  width ?: string;
  widthMax ?: string;
  height ?: string;
  heightMax ?: string;
}
interface PropView
{
  transparent ?: boolean;
  width ?: string;
  widthMax ?: string;
  height ?: string;
  heightMax ?: string;

  container ?: react.RefObject<HTMLDivElement>;
  children ?: react.ReactNode;
}
interface PropMenu
{
  container ?: react.RefObject<HTMLDivElement>;
  content ?: [number, react.Dispatch<react.SetStateAction<number>>];
  visible ?: boolean;
  width ?: string;
  widthMax ?: string;
}
interface PropContent
{
  visible ?: boolean;
  content ?: number;
  onBack ?: () => void;
}
interface PropContentGeneral
{
  visible ?: boolean;
  onBack ?: () => void;
}
interface PropContentSecurity
{
  visible ?: boolean;
  onBack ?: () => void;
}
interface PropContentShipping
{
  visible ?: boolean;
  onBack ?: () => void;
}
interface PropContentPayment
{
  visible ?: boolean;
  onBack ?: () => void;
}
interface PropTemplateBackButton
{
  visible ?: boolean;
  onClick ?: () => void;
}

/**
 * องค์ประกอบแสดงผลหน้าการตั้งค่า
*/
const content = function Settings (prop: PropRoot)
{
  const containerRef = react.useRef (HTMLDivElement.prototype);
  const [ctn, setCtn] = react.useState ( content.CONTENT_GENERAL);

  const SIZE_SMALL = "256px";
  const SIZE_THEREHOLD = 768;

  /**
   * ทำงานเมื่อผู้ใช้กดปุ่มย้อนกลับ
  */
  const onBack = () =>
  {
    setMenuSelected (false);
  }
  /**
   * ทำงานเมื่อขนาดหน้าต่างมีการเปลี่ยนแปลง
  */
  const onResize = () =>
  {
    setMenuWidth (resizeValue ());
  }
  /**
   * รับค่าความกว้างของรายการเมนู
  */
  const resizeValue = () =>
  {
    if (containerRef.current != HTMLDivElement.prototype)
    {
      return (containerRef.current.clientWidth) >= 
        SIZE_THEREHOLD ? SIZE_SMALL : "100%";
    }
    return SIZE_SMALL;
  }
  const [menuWidth, setMenuWidth] = react.useState (resizeValue ());
  const [menuSelected, setMenuSelected] = react.useState (false);

  /**
   * ทำงานเมื่อส่วนประกอบนี้เริ่มทำงาน
  */
  react.useEffect (() =>
  {
    window.addEventListener ("resize", onResize);

    return () =>
    {
      window.removeEventListener ("resize", onResize);
    }
  },
  []);

  return (
    <content.View 
        transparent={prop.transparent} 
        width={prop.width}
        widthMax={prop.widthMax}
        height={prop.height}
        heightMax={prop.heightMax}
        container={containerRef}>
      <content.Menu 
        visible={menuWidth === SIZE_SMALL ? true : !menuSelected}
        width={"100%"}
        widthMax={menuWidth}
        container={containerRef} 
        content={[ctn, (x) => { 
          setCtn (x);
          setMenuSelected (true);
        }]}/>
      <content.Content 
        visible={menuWidth === SIZE_SMALL ? true : menuSelected}
        content={ctn}
        onBack={menuWidth === SIZE_SMALL ? undefined : onBack}
      />
    </content.View>
  );
}
content.View = function SettingsView (prop: PropView)
{
  const transparent = prop.transparent ?? true;
  const width = prop.width ?? "100%";
  const widthMax = prop.widthMax ?? "1024px";
  const height = prop.height ?? "100%";
  const heightMax = prop.heightMax ?? "512px";

  return (
    <StyleRoot ref={prop.container}
      $transparent={transparent}
      $width={width}
      $widthMax={widthMax}
      $height={height}
      $heightMax={heightMax}>
      {prop.children}
    </StyleRoot>
  );
}
/**
 * องค์ประกอบแสดงรายการเมนูนำทาง
*/
content.Menu = function SettingsMenu (prop: PropMenu)
{
  const selectEvent = (value: unknown) =>
  {
    if (prop.content)
    {
      prop.content[1] (value as number);
    }
  }
  const visible = prop.visible ?? true;
  const width = prop.width ?? "100%";
  const widthMax = prop.widthMax ?? "256px";
  
  return (
    <MenuBar 
        visible={visible}
        direction="column" 
        width={width} widthMax={widthMax} height="100%" 
        align="start" selected={1}
        margin={prop.widthMax != "100%" ? "0px 32px 0px 0px" : "0px"}
        onClick={selectEvent}>
      <MenuBar.Heading text="การตั้งค่า"/>
      <MenuBar.Item value={content.CONTENT_GENERAL} 
        text="ทั่วไป" icon={<UserIcon/>}/>
      <MenuBar.Item value={content.CONTENT_SECURITY} 
        text="ความปลอดภัย" icon={<UserLock/>}/>
      <MenuBar.Item value={content.CONTENT_SHIPPING} 
        text="การจัดส่ง" icon={<Container/>}/>
      <MenuBar.Item value={content.CONTENT_PAYMENT} 
        text="การชำระเงิน" icon={<Coins/>}/>
    </MenuBar>
  );
}
content.Content = function SettingsContent (prop: PropContent)
{
  const visible = prop.visible ?? true;
  const current = prop.content ?? 0;
  const isGeneral = visible && current === content.CONTENT_GENERAL;
  const isSecurity = visible && current === content.CONTENT_SECURITY;
  const isShipping = visible && current === content.CONTENT_SHIPPING;
  const isPayment = visible && current === content.CONTENT_PAYMENT;
  const onBack = prop.onBack;


  return (
    <StyleContent>
      <content.ContentGeneral visible={isGeneral} onBack={onBack}/>
      <content.ContentSecurity visible={isSecurity} onBack={onBack}/>
      <content.ContentShipping visible={isShipping} onBack={onBack}/>
      <content.ContentPayment visible={isPayment} onBack={onBack}/>
    </StyleContent>
  );
}
content.ContentGeneral = function SettingsContentGeneral
  (prop: PropContentGeneral) : react.ReactElement
{
  return (
    <react.Activity mode={prop.visible ? "visible" : "hidden"}>
      <content.TemplateBackButton 
        visible={prop.onBack != undefined} 
        onClick={prop.onBack}/>
      <StyleTemplateHeader>ข้อมูลบัญชี</StyleTemplateHeader>
      <StyleTemplateField>
        <div>
          <label>ชื่อผู้ใช้</label>
        </div>
        <div>
          <label>iKla47</label>
          <button>เปลี่ยนชื่อ</button>
        </div>
      </StyleTemplateField>
      <StyleTemplateField>
        <div>
          <label>อีเมล</label>
        </div>
        <div>
          <label>con****@***.net</label>
          <button>เปลี่ยนอีเมล</button>
        </div>
      </StyleTemplateField>
      <StyleTemplateField>
        <div>
          <button>ลงชื่อออก</button>
        </div>
      </StyleTemplateField>
    </react.Activity>
  );
}
content.ContentSecurity = function SettingsContentSecurity
  (prop: PropContentSecurity) : react.ReactElement
{
  return (
    <react.Activity mode={prop.visible ? "visible" : "hidden"}>
      <content.TemplateBackButton 
        visible={prop.onBack != undefined} 
        onClick={prop.onBack}/>
      <StyleTemplateHeader>ความปลอดภัย</StyleTemplateHeader>
      <StyleTemplateField>
        <div>
          <label>รหัสผ่าน</label>
        </div>
        <div>
          <button>เปลี่ยน</button>
        </div>
      </StyleTemplateField>
      <StyleTemplateField>
        <div>
          <label>ยืนยันสองชั้นด้วย รหัสผ่านใช้ครั้งเดียวแบบกำหนดเวลา</label>
        </div>
        <div>
          <button>เปิด</button>
        </div>
      </StyleTemplateField>
      <StyleTemplateField>
        <div>
          <label>ยืนยันสองชั้นด้วย อีเมล</label>
        </div>
        <div>
          <button>เปิด</button>
        </div>
      </StyleTemplateField>
    </react.Activity>
  );
}
content.ContentShipping = function SettingsContentShipping
  (prop: PropContentShipping) : react.ReactElement
{
  return (
    <react.Activity mode={prop.visible ? "visible" : "hidden"}>
      <content.TemplateBackButton 
        visible={prop.onBack != undefined} 
        onClick={prop.onBack}/>
      <StyleTemplateHeader>การจัดส่ง</StyleTemplateHeader>
      <StyleTemplateField>
        <div>
          <label>ที่อยู่เริ่มต้น</label>
          <br/>
          <label>999/999 ดาวเคราะห์โลก</label>
        </div>
        <div>
          <button>เลือก</button>
        </div>
      </StyleTemplateField>
      <StyleTemplateHeader2>รายการบันทึกที่อยู่</StyleTemplateHeader2>
      <StyleTemplateField>
        <div>
          <button>เพิ่มที่อยู่</button>
        </div>
      </StyleTemplateField>
    </react.Activity>
  );
}
content.ContentPayment = function SettingsContentPayment 
  (prop: PropContentPayment) : react.ReactElement
{
  return (
    <react.Activity mode={prop.visible ? "visible" : "hidden"}>
      <content.TemplateBackButton 
        visible={prop.onBack != undefined} 
        onClick={prop.onBack}/>
      <StyleTemplateHeader>การชำระเงิน</StyleTemplateHeader>
      <StyleTemplateField>
        <div>
          <label>วิธีเริ่มต้น</label>
          <br/>
          <label>0000-0000-0000-0000</label>
        </div>
        <div>
          <button>เลือก</button>
        </div>
      </StyleTemplateField>
      <StyleTemplateHeader2>รายการบันทึกที่อยู่</StyleTemplateHeader2>
      <StyleTemplateField>
        <div>
          <button>เพิ่ม</button>
        </div>
      </StyleTemplateField>
    </react.Activity>
  );
}

content.TemplateBackButton = function SettingsTemplateBackButton 
  (prop: PropTemplateBackButton) : react.ReactElement
{
  const onClick = (event: react.MouseEvent) =>
  {
    event.preventDefault ();
    event.stopPropagation ();

    if (prop.onClick) {
      prop.onClick ();
    }
  }

  return (
    <StyleTemplateBackButton onClick={onClick} $visible={prop.visible ?? false}>
      <ArrowLeftCircleIcon/>
      ย้อนกลับ
    </StyleTemplateBackButton>
  );
}

content.CONTENT_UNDEFINED = 0;
content.CONTENT_GENERAL = 1;
content.CONTENT_SECURITY = 2;
content.CONTENT_SHIPPING = 3;
content.CONTENT_PAYMENT = 4;

const StyleRoot = styled.div<{ 
  $transparent: boolean; 
  $width: string;
  $widthMax: string;
  $height: string;
  $heightMax: string;
}>`
  background-color: ${prop => prop.$transparent ? 
    "transparent" : "var(--bg-primary)"};
  border-radius: 8px;
  width: ${prop => prop.$width};
  height: ${prop => prop.$height};
  max-width: ${prop => prop.$widthMax};
  max-height: ${prop => prop.$heightMax};
  
  padding: 16px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
const StyleContent = styled.div`
  flex-grow: 1;
`;

const StyleTemplateHeader = styled.h1`
  font-size: 2rem;
  font-weight: normal;
  margin: 0px 0px 16px 0px;
`;
const StyleTemplateHeader2 = styled.h2`
  font-size: 1.25rem;
  font-weight: normal;
  margin: 16px 0px 16px 0px;
`;
const StyleTemplateField = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  height: 48px;

  & > div:nth-child(1)
  {
    flex-grow: 1;
    /* background-color: var(--bg-secondary); */
  }
  & > div:nth-child(2)
  {
    display: inline-flex;
    align-items: center;
    justify-content: end;
    width: 324px;
    max-width: 324px;
    gap: 16px;
  }
  & > div:nth-child(2) > button
  {
    width: 128px;
  }
`;
const StyleTemplateBackButton = styled.button<{ $visible: boolean; }>`
  display: ${prop => prop.$visible ? "block" : "none"};
  width: 192px;
  height: 40px;
  background-color: transparent;
  text-align: start;

  & > img,
  & > svg
  {
    width: 24px;
    height: 24px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 16px;
  }
`;

/**
 * แข็งวัตถุ (ความปลอดภัย)
*/
Object.freeze (content);
/**
 * ส่งออกตัวแปร
*/
export default content;