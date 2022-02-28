import { Row } from "antd";
import borimg from "../../assets/images/icn_earn.8b6865.svg";
import borimg1 from "../../assets/images/icn_fixed.3d4bd1.svg";
import borimg2 from "../../assets/images/icn_no.8754ec.svg";
import borimg3 from "../../assets/images/icn_partial.2248c4.svg";
import widget1 from "../../assets/images/testwidget.png";
import "./style.css";
const Borrowcrypto = () => {
  return (
    <>
      <div className="Borrowcrypto__color"></div>
      <div className="At__Borrowcrypto">
        <div className="Borrowcrypto__div" data-aos="fade-up">
          <h1 className="Trade_heading">Borrow Crypto</h1>
          <Row>
            <div className="borrow__div">
              <div style={{ display: "flex" }}>
                <img src={borimg1} alt="" />
                <div className="INTERESTS__div">
                  <h5>FIXED INTERESTS</h5>
                  <p>
                    When taking a loan on Ooki the interest rate is fixed and
                    transparent. No interest rate spikes.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "25px" }}>
                <img src={borimg2} alt="" />
                <div className="INTERESTS__div">
                  <h5>NO KYC, CREDIT CHECKS</h5>
                  <p>
                    Ooki doesn’t ask for your identity nor does it run credit
                    checks on your financial history. Ooki is designed to
                    function without invasive assessments.
                  </p>
                </div>
              </div>
            </div>
            <div className="borrow__div1">
              <div style={{ display: "flex" }}>
                <img src={borimg} alt="" />
                <div className="INTERESTS__div">
                  <h5>EARN OOKI</h5>
                  <p>
                    As a borrower you’re automatically receiving Ooki tokens for
                    helping the platform grow.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "25px" }}>
                <img src={borimg3} alt="" />
                <div className="INTERESTS__div">
                  <h5>PARTIAL LIQUIDATIONS</h5>
                  <p>
                    We have your best interest in mind. When the value of your
                    collateral tumbles we only sell enough to bring your
                    loan-to-value ratio back to healthy levels.
                  </p>
                </div>
              </div>
            </div>
          </Row>
          <button className=" Borrownow__btn">Borrow now</button>
        </div>
        <div className="Borrowcrypto__div1" data-aos="fade-up">
          <img src={widget1} alt="" />
        </div>
      </div>
    </>
  );
};
export default Borrowcrypto;
