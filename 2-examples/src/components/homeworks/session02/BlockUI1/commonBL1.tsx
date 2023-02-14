import React from "react";
import Styles from "./BlockUI1.module.css"

interface IProps {
  title: string;
  bgTitle: string;
  bgProcess: string;
  percent: number;
}

const Blockui1: React.FC<IProps> = (props) => {
  const { title, bgTitle, percent, bgProcess } = props;
  return (
    <div className={Styles.div_parrent}>
    <div className={"d-flex m-auto w-50"}>
      <div className={Styles.box} style={{ width:100, backgroundColor: bgTitle }}>{title}</div>
      <div style={{ width: 500 }}>
        <div className={Styles.percent} style={{ width: `${percent}%`, backgroundColor: bgProcess }}>
          {percent}%
        </div>
      </div>
    </div>
    </div>
  );
};
export default Blockui1;
