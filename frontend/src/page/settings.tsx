import Component from "#component/settings.tsx";

const content = () =>
{
  return (
    <Component 
      visible={true} 
      transparent={true}/>
  )
}
/**
 * แข็งวัตถุ (ความปลอดภัย)
*/
Object.freeze (content);
/**
 * ส่งออกตัวแปร
*/
export default content;