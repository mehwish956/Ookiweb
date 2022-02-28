import { Col, Row } from "antd";
import React from "react";
import "./style.css";
import {
  TwitterOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  MediumOutlined,
} from "@ant-design/icons";
import logo from "../../assets/images/logo.ed94e9.svg";
import insta from "../../assets/images/instagram.png";
const Footer = () => {
  return (
    <>
      <div>
        <Row>
          <Col md={{ span: 8 }}>
            <div className="Social_div">
              <p className="Social_heading">Social</p>
              <ul>
                <a href="">
                  <li className="TwitterOutlined">
                    <i className="fab fa-facebook Social_icon"></i>
                  </li>
                </a>
                <a href="#">
                  <li className="TwitterOutlined">
                    <TwitterOutlined className="Social_icon" />
                  </li>
                </a>
                <a href="#">
                  <li className="TwitterOutlined">
                    {/* <InstagramOutlined className="Social_icon" /> */}
                    <img src={insta} alt="insta" className="Social_icon2" />
                  </li>
                </a>
                <a href="#">
                  <li className="TwitterOutlined">
                    <YoutubeOutlined className="Social_icon1" />
                  </li>
                </a>
                <a href="#">
                  <li className="TwitterOutlined">
                    <MediumOutlined className="Social_icon" />
                  </li>
                </a>
              </ul>
            </div>
            <div className="footer_logo">
              <img src={logo} alt="footer logo" />
            </div>
            <a href="#" className="OOKI_text">
              © 2021 OOKI, LLC
            </a>
          </Col>
          <Col md={{ span: 5 }}>
            <div className="OOKI_Protocol">
              <p className="Social_heading">OOKI Protocol</p>
              <ul>
                <a href="">
                  <li>How it works</li>
                </a>
                <a href="">
                  <li>Documentation</li>
                </a>
                <a href="">
                  <li>Smart Contracts</li>
                </a>
                <a href="">
                  <li>API</li>
                </a>
                <a href="">
                  <li>Blog</li>
                </a>
                <a href="">
                  <li>Brand Assets</li>
                </a>
              </ul>
            </div>
          </Col>
          <Col md={{ span: 5 }}>
            <div className="OOKI_Protocol">
              <p className="Social_heading">Products</p>
              <ul>
                <a href="">
                  <li>Stats</li>
                </a>
                <a href="">
                  <li>Our Tokens</li>
                </a>
                <a href="">
                  <li>Ooki token</li>
                </a>
                <a href="">
                  <li>Ooki Stake</li>
                </a>
                <a href="">
                  <li>Ooki Trade</li>
                </a>
                <a href="">
                  <li>Ooki Lend</li>
                </a>
              </ul>
            </div>
          </Col>
          <Col md={{ span: 5 }}>
            <div className="OOKI_Protocol">
              <p className="Social_heading">Company</p>
              <ul>
                <a href="">
                  <li>History</li>
                </a>
                <a href="">
                  <li>Careers</li>
                </a>
                <a href="">
                  <li>Press</li>
                </a>
                <a href="">
                  <li>Contact us</li>
                </a>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Footer;
