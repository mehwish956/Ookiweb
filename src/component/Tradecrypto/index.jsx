import React from "react";
import "./style.css";
import img1 from "../../assets/images/icn_no-kyc.d06226.svg";
import img2 from "../../assets/images/icn_minimum.113b5e.svg";
import img3 from "../../assets/images/icn_indefinite.e49128.svg";
import img5 from "../../assets/images/img9.svg";
import img4 from "../../assets/images/icn_fixed.3d4bd1.svg";
import widget2 from "../../assets/images/widget2.png";
const Tradecrypto = () => {
  return (
    <>
      <div className="Trade_crypto">
        <div className="Trade_div" data-aos="fade-up">
          <h1 className="Trade_heading">Trade Crypto</h1>
          <div className="Crypto_div">
            <div className="Custodial__div">
              <img src={img1} />
              <p>NO KYC</p>
            </div>
            <div className="Custodial__div">
              <img src={img4} />
              <p>Non-Custodial</p>
            </div>
            <div className="Custodial__div">
              <img src={img2} />
              <p>Minimum Liquidation Penalties</p>
            </div>
            <div className="Custodial__div">
              <img src={img3} />
              <p>Indefinite Term Positions</p>
            </div>
          </div>
          <p className="Ooki_text">
            Ooki is decentralized. We don’t need to know your identity.
            <br />
            Everything happens on a public ledger.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={img5} alt="" className="Crypto_img" />
          </div>
        </div>
        <div className="Trade_div1">
          <img src={widget2} alt="image" data-aos="fade-up" />
          <div data-aos="fade-up">
            <button className="Tradenow_btn">TRADE NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tradecrypto;
