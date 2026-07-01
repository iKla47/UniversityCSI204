import react from "react";

export default function Splash ()
{
  const root: react.CSSProperties =
  {
    position: "absolute", inset: "0px",
    width: "100%", height: "100%",
    backgroundColor: "rgb(16, 16, 24)"
  };
  const center: react.CSSProperties =
  {
    position: "absolute", inset: "0px",
    display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center"
  };

  return <>
    <div style={root}/>
    <div style={center}>
      <h1>The Web Project</h1>
    </div>
  </>;
}
