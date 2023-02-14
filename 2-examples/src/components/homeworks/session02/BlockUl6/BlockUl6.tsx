import Styles from "./BlockUI6.module.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
interface Ipros {
  img: any;
  title1: string;
  bgButton: string;
}
const BlockUI3: React.FC<Ipros> = (props) => {
  const { img, title1,  bgButton } = props;
  return (
      <div className={Styles.d_flex} >
        <div className={Styles.w_100} >
          <div className={Styles.m_bottom_50}>{img}</div>
          <h4 className={Styles.m_top_40}>{title1}</h4>
          <div className={Styles.felx_ceter}>Lorem ipsum dolor sit amet,</div>
          <div className={Styles.felx_ceter}>consectetur adipiscing elit.</div>
          <div className={Styles.felx_ceter}>XL/XXL/S</div>
          <h4 className={Styles.felx_ceter}>$25</h4>
          <button  className={Styles.m_left_30} style ={{backgroundColor : bgButton}}>
            <AiOutlineShoppingCart/>
            Add to cart
            </button>
        </div>
      </div>
  );
};
export default BlockUI3;
