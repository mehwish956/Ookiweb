import { Row } from "antd";
import "./style.css";
import usdtimg from "../../assets/images/icn_USDT.4da98b.svg";
import usdtimg1 from "../../assets/images/icn_USDC.7381d4.svg";
import usdtimg2 from "../../assets/images/icn_DAI.6590a5.svg";
import usdtimg3 from "../../assets/images/icn_ETH.182225.svg";
import usdtimg4 from "../../assets/images/crypto1.b7dc97.svg";
import usdtimg5 from "../../assets/images/icn_UNI.2d9003.svg";
const Asset = () => {
  return (
    <>
      <div className="asset__div">
        <p className="Asset_text">Asset</p>
        <div className="usdt__div">
          <Row>
            <img src={usdtimg} alt="" />
            <div className="USDT__TEXT">
              <p>USDT</p>
              <h6>
                13.0%<sup>APR</sup>
              </h6>
            </div>
          </Row>
        </div>
        <div className="usdt__div1">
          <Row>
            <img src={usdtimg1} alt="" />
            <div className="USDT__TEXT">
              <p>USDC</p>
              <h6>
                12.3%<sup>APR</sup>
              </h6>
            </div>
          </Row>
        </div>
        <div className="usdt__div1">
          <Row>
            <img src={usdtimg2} alt="" />
            <div className="USDT__TEXT">
              <p>DAI</p>
              <h6>
                13.0%<sup>APR</sup>
              </h6>
            </div>
          </Row>
        </div>
        <div className="usdt__div1">
          <Row>
            <img src={usdtimg3} alt="" />
            <div className="USDT__TEXT">
              <p>ETH</p>
              <h6>
                0.3%<sup>APR</sup>
              </h6>
            </div>
          </Row>
        </div>
        <div className="usdt__div1">
          <Row>
            <img src={usdtimg4} alt="" />
            <div className="USDT__TEXT">
              <p>WBTC</p>
              <h6>
                1.2%<sup>APR</sup>
              </h6>
            </div>
          </Row>
        </div>
        <div className="usdt__div1">
          <Row>
            <img src={usdtimg5} alt="" />
            <div className="USDT__TEXT">
              <p>UNI</p>
              <h6>
                0.4%<sup>APR</sup>
              </h6>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};
export default Asset;
