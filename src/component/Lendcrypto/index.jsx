import { Row } from "antd";
import "./style.css";
import Asset from "./Asset";
import dollar from "../../assets/images/icn_deposit.31f0df.svg";
import dollar1 from "../../assets/images/icn_no_lockups.5e5f41.svg";
import img13 from "../../assets/images/img13.svg";
import { useState } from "react";
import Finance from "../Finance";

const Lendcrypto = () => {
  const [quantity, setQuantity] = useState(1000);

  return (
    <>
      <div className="img13" data-aos="fade-up">
        <img src={img13} />
      </div>
      <div className="lendcrypto__color"></div>
      <div className="At_lendcrypto">
        <div className="lendcrypto__div" data-aos="fade-up">
          <div className="lend__div">
            <Row>
              <Asset />
              <div className="lending__div">
                <h5>How much can I earn lending?</h5>
                <p className="Asset_text" style={{ marginTop: "15px" }}>
                  Quantity
                </p>
                {/* // CHANGED */}
                <input
                  type="number"
                  onChange={(event) => {
                    const newValue = event.target.value;
                    setQuantity(newValue);
                    console.log(quantity);
                  }}
                  value={quantity}
                  className="number__text"
                />

                <p className="Asset_text" style={{ marginTop: "15px" }}>
                  Eran up to:
                </p>
                <h4>
                  $ 108.72<sub>/MONTHLY</sub>
                </h4>
                <button className="leadnow_btn">LEAD NOW</button>
              </div>
            </Row>
          </div>
        </div>
        <div className="lendcrypto__div1" data-aos="fade-up">
          <div>
            <h1 className="Trade_heading">Lend Crypto</h1>
            <p className="earn__text">Earn crypto while you sleep.</p>
            <div className="dollar__div">
              <img src={dollar} alt="" />
              <p>
                Deposit and start earning
                <br /> immediately.
              </p>
            </div>
            <div className="dollar__div">
              <img src={dollar1} alt="" />
              <p>
                No lockups. Withdraw
                <br /> anytime.
              </p>
            </div>
          </div>
        </div>
        <Finance />
      </div>
    </>
  );
};
export default Lendcrypto;
