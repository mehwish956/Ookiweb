import "./style.css";
import cryptoimg from "../../assets/images/crypto1.b7dc97.svg";
import cryptoimg1 from "../../assets/images/crypto2.17f12e.svg";
import cryptoimg2 from "../../assets/images/crypto3.11bfc3.svg";
import cryptoimg3 from "../../assets/images/crypto6.79b0f3.svg";
import cryptoimg4 from "../../assets/images/crypto4.7ec09a.svg";
import cryptoimg5 from "../../assets/images/crypto5.25e35c.svg";
import cryptoimg6 from "../../assets/images/icn_stake.c8543a.svg";
import cryptoimg7 from "../../assets/images/img11.svg";
import Logo from "./Logo";

const Homepage = () => {
  return (
    <>
      <div className="At__homepage">
        <div className="img__div">
          <img src={cryptoimg} alt="" className="one" />
          <img src={cryptoimg1} alt="" className="two" />
          <img src={cryptoimg2} alt="" className="three" />
        </div>
        <div className="At__homediv">
          <div style={{ display: "flex" }}>
            <div className="At__GATEWAY">
              <p data-aos="fade-up">YOUR GATEWAY TO DEFI</p>
              <h1 data-aos="fade-up">Trade, Borrow,</h1>
              <div
                data-aos="fade-up"
                style={{
                  display: "flex",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <div className="Lend___div"></div>
                <h1>Lend & Stake</h1>
              </div>
              <h4 data-aos="fade-up"> TVL: $16,923,560</h4>
            </div>
            <div className="img11">
              <img src={cryptoimg7} alt="" className="cryptoimg7" />
            </div>
          </div>
          <div className="trade__div" data-aos="fade-up">
            <a href="Tradecrypto">
              <div className="trade">
                <div className="black__div">
                  <div className="trade__divcolor Trade"></div>
                </div>
                <p>Trade</p>
              </div>
            </a>
            <a href="">
              <div className="trade">
                <div className="black__div">
                  <div className="Borrow__divcolor"></div>
                </div>
                <p>Borrow</p>
              </div>
            </a>
            <a href="">
              <div className="trade">
                <div className="black__div">
                  <div className="Lend__divcolor"></div>
                </div>
                <p>Lend</p>
              </div>
            </a>
            <a href="">
              <div className="trade">
                <div className="black__div">
                  <img src={cryptoimg6} alt="" className="cryptoimg6" />
                </div>
                <p>Stake</p>
              </div>
            </a>
          </div>
        </div>
        <div className="img__div1">
          <img src={cryptoimg3} alt="" className="one" />
          <img src={cryptoimg4} alt="" className="two" />
          <img src={cryptoimg5} alt="" className="three" />
        </div>
      </div>
      <Logo />
    </>
  );
};
export default Homepage;
