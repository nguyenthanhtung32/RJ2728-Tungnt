import React from "react";
import Style from "./BlockUI1.module.css"

interface IProps {
  title: string;
  bgTitle: string;
  bgProcess: string;
  percent: number;
}

const Blockui1: React.FC<IProps> = (props) => {
  const { title, bgTitle, percent, bgProcess } = props;
  return (
    <div className={`${Style.div_parrent}`}>
    <div className="d-flex m-auto w-50 bg-light">
      <div style={{ width: 100, backgroundColor: bgTitle }}>{title}</div>
      <div style={{ width: 500 }}>
        <div style={{ width: `${percent}%`, backgroundColor: bgProcess }}>
          {percent}%
        </div>
      </div>
    </div>
    </div>
  );
};
export default Blockui1;
