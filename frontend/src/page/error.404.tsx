import cmmNavi from "#util/common.navigation.ts";
import { styled } from "styled-components";
import { HeartCrack } from "lucide-react";
import { type MouseEvent } from "react";

export default function Error404 ()
{
  function onPressBack (event: MouseEvent)
  {
    event.preventDefault ();
    event.stopPropagation ();

    history.back ();
  }
  function onPressHome (event: MouseEvent)
  {
    event.preventDefault ();
    event.stopPropagation ();

    void cmmNavi.toIndex ();
  }

  return (
    <StlRoot>
      <StlView>
        <HeartCrack size={128}/>
        <StlContent>
          <StlHeading>ดูเห็นคุณจะหลงทางนะ</StlHeading>
          <StlText>
            ลิงค์ที่นำทางคุณมาอาจไม่ถูกต้อง, ถูกย้าย, หรือถูกลบออกจากระบบไปแล้ว
            นั้นคือสิ่งที่เรารู้ในตอนนี้ (รหัสความผิดพลาด 404)
          </StlText>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              onClick={onPressBack}
              style={{ width: '100%' }}>ย้อนกลับ</button>
            <button 
              onClick={onPressHome}
              style={{ width: '100%' }}>นำฉันไปยังหน้าแรก</button>
          </div>
        </StlContent>
      </StlView>
    </StlRoot>
  );
}

const StlRoot = styled.div`
  position: static;
  width: 100dvw;
  height: 100dvh;
`;
const StlView = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  gap: 32px;
`;
const StlContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 16px;
`;
const StlHeading = styled.h1`
  display: block;
  font-size: 2rem;
  font-weight: normal;
`;
const StlText = styled.p`
  display: block;
  font-size: 1rem;
  font-weight: normal;
  max-width: 512px;
`;