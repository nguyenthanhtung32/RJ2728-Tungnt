import { useState } from "react";

const Session03 = () => {
  const [numberState, setNumberState] = useState<number>(0);
  const tang = () => {
    console.log(tang);
    if (numberState < 10) {
      setNumberState(numberState + 1);
    }
  };
  const giam = () => {
    if (numberState > 0) {
      setNumberState(numberState - 1);
    }
    console.log(giam);
  };
  return (
    <>
      <div className="d-flex w-50 m-auto" style={{ justifyContent: "center" }}>
        <button style={{backgroundColor: 'orange'}} onClick={tang} disabled={numberState >= 10 ? true : false}>
          Tăng
        </button>
        <h1>{numberState}</h1>
        <button style={{backgroundColor: 'cyan'}} onClick={giam} disabled={numberState <= 0 ? true : false}>
          Giảm
        </button>
        {numberState === 10 && <h1>MAX</h1>}
      </div>
    </>
  );
};
export default Session03;
