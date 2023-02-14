import Styles from "./BlockUI2.module.css";

interface Ipros {
  img: any;
  bgimg: string;
  title: string;
  percent: number;
  bgProcess: string;
}
const BlockUI2: React.FC<Ipros> = (props) => {
  const { img, bgimg, title, percent, bgProcess } = props;
  return (
    <div className="d-flex w-50 m-auto border">
      <div className="col-4 d-flex">
        <div className={Styles.w_100} style={{ backgroundColor: bgimg }}>
          {img}
        </div>
        <div className={Styles.m_30}>{title}</div>
      </div>

      <div className={`col-8 ${Styles.w__500}`}>
        <div
          className={Styles.m_35}
          style={{ width: `${percent}%`, backgroundColor: bgProcess }}
        >
          {percent}
        </div>
      </div>
    </div>
  );
};
export default BlockUI2;
