import Styles from "./BlockUI7.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
interface Ipros {
  discount: string;
  img: any;
  price1: string;
  price2: string;
  price3: string;
  title: string;
  evaluate: string;
  bgProcess: string;
  percent: number;
}
const BlockUI7: React.FC<Ipros> = (props) => {
  const {
    discount,
    img,
    title,
    price1,
    price2,
    price3,
    evaluate,
    bgProcess,
    percent,
  } = props;
  return (
    <div className={Styles.w_800}>
      <div className={Styles.d_flex_boder}>
        <div>Deal of the day</div>
        <button className={Styles.bg_red}>End in: 6:17:17:39</button>
        <div className={Styles.b_black}>View all</div>
      </div>
      <div>
        <button className={Styles.bg_redd}>{discount}</button>
        <div>{img}</div>
        <div className={Styles.b_ccc}>YOUNG SHOP</div>
        <div className={Styles.d_flex}>
          <div className={Styles.color_green}>{price1}</div>
          <div className={Styles.color_ccc}>{price2}</div>
          <div className={Styles.color_red}>{price3}</div>
        </div>
        <div className={Styles.color_blue}>{title}</div>
        <div className={Styles.d_flex}>
          <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
          <AiOutlineStar />
        </div>
        <div className={`col-8 ${Styles.w__500}`}>
          <div
            className={Styles.m_35}
            style={{ width: `${percent}%`, backgroundColor: bgProcess }}
          >
            {percent}
          </div>
          <div > Sold: {evaluate}</div>
        </div>
      </div>
    </div>
  );
};
export default BlockUI7;
