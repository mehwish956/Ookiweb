import { Row, Button } from "antd";
import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/images/logo.ed94e9.svg";
import flag from "../../assets/images/united.png";
import { AlignRightOutlined, CloseOutlined } from "@ant-design/icons";
import insta from "../../assets/images/instagram.png";
import {
  TwitterOutlined,
  YoutubeOutlined,
  MediumOutlined,
} from "@ant-design/icons";

const Okiheader = () => {
  const [isOpen, setIsopen] = useState(false);
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      <div id="At-header">
        <div>
          <div className="logo_header">
            <a href="">
              <div id="logo">
                <img src={logo} />
              </div>
            </a>

            <ul>
              <li>
                <a href=""> About </a>
              </li>

              <li>
                <a href="">Security</a>
              </li>

              <li>
                <a href="">Helpcenter</a>
              </li>

              <li>
                <div className="flag_img">
                  <img src={flag} alt="" className="flag" />
                </div>
              </li>
              <li>
                <Button className="use_btn">USE OOKi</Button>
              </li>
              <li>
                <div className="icon" onClick={ToggleSidebar}>
                  <AlignRightOutlined />
                </div>
              </li>
            </ul>
          </div>
          <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
            <Row style={{ justifyContent: "space-between" }}>
              <a href="">
                <img src={logo} alt="logo" className="barlogo" />
              </a>
              <div
                className="btn CloseOutlined btn-primary"
                onClick={ToggleSidebar}
              >
                <CloseOutlined className="Close_btn" />
              </div>
            </Row>
            <div className="Trade">
              <ul>
                <li>
                  <div className="div1"></div>
                  <a href="">Trade</a>
                </li>
                <li>
                  <div className="div2"></div>
                  <a href=""> Lend</a>
                </li>
                <li>
                  <div className="div3"></div>
                  <a href="">Borrow</a>
                </li>
                <li>
                  <div className="div4"></div>
                  <a href="">Stake</a>
                </li>
                <li>
                  <div className="div5"></div> <a href="">Swap</a>
                </li>
              </ul>
            </div>
            <div className="about_div">
              <ul>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Security</a>
                </li>
                <li>
                  <a href="">Helpcenter</a>
                </li>
                <li>
                  <a href="">Stats</a>
                </li>
                <li>
                  <a href="">Our Tokens</a>
                </li>
                <li>
                  <a href="">OOKI Token</a>
                </li>
                <li>
                  <a href="">Developers</a>
                </li>
                <li>
                  <a href=""> Blog</a>
                </li>
                <li>
                  <a href=""> DAO</a>
                </li>
                <li>
                  <a href="">Donate</a>
                </li>
                <li>
                  <a href="">Shop</a>
                </li>
              </ul>
            </div>
            <div className="contact_div">
              <h5>Contact us</h5>
              <ul>
                <a href="">
                  <li>
                    <i className="fab fa-facebook facebook1"></i>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <TwitterOutlined className="facebook" />
                  </li>
                </a>
                <a href="#">
                  <li>
                    {/* <InstagramOutlined className="Social_icon" /> */}
                    <img src={insta} alt="insta" className="insta" />
                  </li>
                </a>
                <a href="#">
                  <li>
                    <YoutubeOutlined className="facebook" id="facebook" />
                  </li>
                </a>
                <a href="#">
                  <li>
                    <MediumOutlined className="facebook" />
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div
            className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
            onClick={ToggleSidebar}
          ></div>
        </div>
      </div>
    </>
  );
};
export default Okiheader;
