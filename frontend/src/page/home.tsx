import react, { useState } from "react";
import styled from "styled-components";
import image from "#asset/image/home.testImage.jpg"

export default function Home ()
{
  const [uptime, setUptime] = useState ("00:00:00");

  react.useEffect (() =>
  {
      const interval = setInterval (() => 
      {
          const host = location.hostname;
          const url = `http://${host}:51000/uptime`;

          void fetch (url)
            .then ((x) => x.json ())
            .then ((x: Record<string, unknown>) => 
            { 
              const raw = Number (x.value);
              const hour = Math.floor (raw / 3600000).toString ().padStart (2, "0");
              const min = Math.floor ((raw / 60000) % 60).toString ().padStart (2, "0");
              const sec = Math.floor ((raw / 1000) % 60).toString ().padStart (2, "0");

              setUptime (`${hour}:${min}:${sec}`); 

            });
      }, 
      1000);

      return () =>
      {
          clearInterval (interval);
      }
  });

  return <>
    <View>
      <img src={image} height={384}/>
      <h1>สวัสดีชาวออกซิเจน</h1>
      <p>เวลาของเซิร์ฟเวอร์: {uptime}</p>
    </View>
  </>;
}

const View = styled.div `
    position: absolute;
    inset: 0px;
    width: 100%;
    height: 100%;

    display: flex; 
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
`;