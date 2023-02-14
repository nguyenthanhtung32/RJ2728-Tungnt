import Styles from "./BlockUI5.module.css";
import { BiCalendar } from "react-icons/bi";
import { AiFillHeart,AiOutlineMail,AiOutlinePhone } from "react-icons/ai";
import { IoIosSchool } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
interface Ipros {
  img: any;
  title1: string;
  title2: string;
  bgEmail: string;
  bgPhone: string;
  title3: string;
  title4:string;
}
const BlockUI5: React.FC<Ipros> = (props) => {
  const { img, title1, title2, bgEmail, bgPhone , title3,title4} = props;
  return (
    <div className={Styles.m_left_20}>
      <div className={Styles.w_100}>
        <div className={Styles.m_bottom_20}>{img}</div>
        <div className={Styles.m_top_10}>{title1}</div>
        <div className={Styles.color_white}>{title2}</div>
        <div className={Styles.d_flex}>
          <div>
            <BiCalendar />
          </div>
          <div className={Styles.m_10}>DOB</div>
          <div className={Styles.m_left_auto}>23/05/2014</div>
        </div>
        <div className={Styles.d_flex}>
          <div>
            <AiFillHeart />
          </div>
          <div className={Styles.m_10}>BG</div>
          <div className={Styles.m_left_auto}>B+</div>
        </div>
        <div className={Styles.d_flex}>
          <div>
            <IoIosSchool />
          </div>
          <div className={Styles.m_10}>EDU</div>
          <div className={Styles.m_left_auto}>MCA</div>
        </div>
        <div className={Styles.d_flex}>
          <div>
            <MdLocationPin />
          </div>
          <div className={Styles.m_10}>RES</div>
          <div className={Styles.m_left_auto}>Bangaiore</div>
        </div>
        <div className={Styles.bg_Email} style={{ backgroundColor: bgEmail }}>
            <div className={Styles.color_w}>EMAIL ID</div>
            <div  className={Styles.flex}>
                <AiOutlineMail/>
                <div className={Styles.color_w}>{title3}</div>
            </div>
           
        </div>
        <div className={Styles.bg_Phone}  style={{ backgroundColor: bgPhone }}>
            <div className={Styles.color_w}>PHONE NO</div>
            <div className={Styles.flex}>
            <AiOutlinePhone />
            <div className={Styles.color_w} >{title4}</div>
        </div>
            </div>
            
      </div>
    </div>
  );
};
export default BlockUI5;
