import Styles from "./BlockUI3.module.css";
interface Ipros {
  icon: any;
  title1: string;
  title2: string;
  bgProcess: string;
}
const BlockUI3: React.FC<Ipros> = (props) => {
  const { icon, title1, title2, bgProcess } = props;
  return (
      <div className={Styles.d_flex} >
        <div className={Styles.w_100} style={{ backgroundColor: bgProcess }}>
          <div className={Styles.m_bottom_50}>{icon}</div>
          <div className={Styles.m_top_40}>{title1}</div>
          <div className={Styles.color_white}>{title2}</div>
        </div>
      </div>
  );
};
export default BlockUI3;
