import { Row } from "antd";
import logoimg2 from "../../assets/images/logo_chainlink.cf3633.svg";
import logoimg3 from "../../assets/images/logo_ethereum.9ec358.svg";
import logoimg1 from "../../assets/images/sushi-logo.6ec633.svg";
import { DownOutlined } from "@ant-design/icons";
const Logo = () => {
  return (
    <>
      <div className="At__Liquidity">
        <div className="Liquidity__div">
          <p>Liquidity by:</p>
          <img src={logoimg1} alt="" />
        </div>
        <div className="At__scrolldiv">
          <p>SCROLL DOWN</p>
          <DownOutlined id="DownOutlined" />
        </div>
        <Row>
          <img src={logoimg2} alt="" className="logoimg2" />
          <img src={logoimg3} alt="" />
        </Row>
      </div>
    </>
  );
};
export default Logo;
