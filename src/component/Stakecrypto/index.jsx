import "./style.css";
import { Row } from "antd";
import img5 from "../../assets/images/img5.svg";
import icon from "../../assets/images/icon-1.83cd4b.svg";
import icon1 from "../../assets/images/icon.abd2bc.svg";
import img10 from "../../assets/images/img10.svg";

const Stakecrypto = () => {
  return (
    <>
      <div className="At__stakesection">
        <div className="stakediv__color"></div>
        <div className="At__stake" data-aos="fade-up">
          <img src={img5} alt="" />
        </div>
        <div className="At__stake1" data-aos="fade-up">
          <h1 className="Trade_heading">Stake Crypto</h1>
          <Row>
            <div className="stake__img">
              <img src={icon} alt="icon" />
              <p>USE OOKI, EARN OOKI TOKENS</p>
            </div>
            <div className="stake__img">
              <img src={icon1} alt="icon" />
              <p>STAKE OOKI TOKENS, EARN FEES</p>
            </div>
          </Row>
          <div className="staking__div">
            <h6>How much can I earn staking?</h6>
            <p>
              Staking rewards depend on protocol revenue, the more Ooki grows,
              the more you earn.
            </p>
          </div>
          <button className="stake__btn">STAKE NOW</button>
          <div className="img10" data-aos="fade-up" data-aos-duration="3000">
            <img src={img10} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Stakecrypto;
