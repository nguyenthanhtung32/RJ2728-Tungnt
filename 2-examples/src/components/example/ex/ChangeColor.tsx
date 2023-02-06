import React, { useState } from "react";

type Props = {};

function ChangeColor(props: Props) {
  const [colorState, setColorSate] = useState<string>("red");
  const handleChangeRed = () => {
    console.log("red");
    setColorSate("red");
  };
  const handleChangeBlue = () => {
    console.log("blue");
    setColorSate("blue");
  };
  return (
    <>
      <div style={{ color: colorState }}>ChangeColor</div>
      <button onClick={handleChangeRed} disabled={colorState === "red"}>
        Red
      </button>
      <button onClick={handleChangeBlue} disabled={colorState === "blue"}>
        Blue
      </button>
    </>
  );
}

export default ChangeColor;
