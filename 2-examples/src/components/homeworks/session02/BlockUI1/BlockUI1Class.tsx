 import React from "react";
import Component from "../../../example/2-Component";
import Style from "./BlockUI1.module.css"

interface IProps {
  title: string;
  bgTitle: string;
  bgProcess: string;
  percent: number;
}

/* class Blockui1Class extends Component<IProps> {
  render (
    <div className={`${Style.div_parrent}`}>
    <div className="d-flex m-auto w-50 bg-light">
      <div style={{ width: 100, backgroundColor: this.props.bgTitle }}>{title}</div>
      <div style={{ width: 500 }}>
        <div style={{ width: `${percent}%`, backgroundColor: bgProcess }}>
          {percent}%
        </div>
      </div>
    </div>
    </div>
  );
};
export default Blockui1Class;
  */