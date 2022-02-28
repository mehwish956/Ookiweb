import { Row } from "antd";
import ooki1 from "../../assets/images/logo.ed94e9.svg";
import ooki2 from "../../assets/images/icn_TD.7c3767.svg";
import ooki3 from "../../assets/images/icn_betterment.d0e7d2.svg";
import ooki4 from "../../assets/images/icn_museum.750cc4.svg";
import img1 from "../../assets/images/img1.svg";
import "./style.css";
import Cloud from "./Cloud";
const Finance = () => {
  return (
    <>
      <div className="At__finance">
        <p>Compare vs Traditional finance</p>
        <Row>
          <div className="ooki__div" data-aos="fade-up">
            <img src={ooki1} alt="" />
            <p>Lending with Ooki</p>
            <h5>$26.63</h5>
            <span>3.19%</span>
          </div>
          <div className="ooki__div1" data-aos="fade-up">
            <img src={ooki2} alt="" />
            <p>TD Bank</p>
            <h5>$18.33</h5>
            <span>2.20%</span>
          </div>
          <div className="ooki__div1" data-aos="fade-up">
            <img src={ooki3} alt="" />
            <p>Betterment</p>
            <h5>$0.41</h5>
            <span>0.05%</span>
          </div>
          <div className="ooki__div1" data-aos="fade-up">
            <img src={ooki4} alt="" />
            <p>Industry Average</p>
            <h5>$0.33</h5>
            <span>0.04%</span>
          </div>
        </Row>
      </div>
      <div className="At__finance1" data-aos="fade-up">
        <img src={img1} alt="" />
      </div>
      <div>
        <Cloud />
      </div>
    </>
  );
};
export default Finance;
