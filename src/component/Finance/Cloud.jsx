import { Row } from "antd";
import "./style.css";
import cloudimg from "../../assets/images/cloud-type1.c593f0.svg";
import cloudimg1 from "../../assets/images/cloud-type2.3d6624.svg";
const Cloud = () => {
  return (
    <>
      <Row>
        <div className="At__clouddiv">
          <img src={cloudimg} alt="cloud" data-aos="zoom-in-up" />
          <img src={cloudimg1} alt="cloud" data-aos="zoom-in-up" />
          <img
            src={cloudimg}
            alt="cloud"
            style={{ marginTop: "5rem" }}
            data-aos="zoom-in-up"
          />
          <img src={cloudimg1} alt="cloud" data-aos="zoom-in-up" />
        </div>
      </Row>
    </>
  );
};
export default Cloud;
