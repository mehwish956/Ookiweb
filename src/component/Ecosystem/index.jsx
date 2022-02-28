import "./style.css";
import * as React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img7 from "../../assets/images/img7.svg";
import img4 from "../../assets/images/img4.svg";
import img6 from "../../assets/images/img6.svg";
import swapimg from "../../assets/images/swap-ethereum.1fc0a8.svg";
import swapimg1 from "../../assets/images/swap-binance.7d0173.svg";
import swapimg2 from "../../assets/images/swap-polygon.7ffc10.svg";
import heart from "../../assets/images/icn_development.e695dd.svg";
import heart1 from "../../assets/images/icn_vote.f3b308.svg";
import heart2 from "../../assets/images/icn_low-fees.823032.svg";
import heart3 from "../../assets/images/Ooki-products-icon.4131ed.svg";
import shirt from "../../assets/images/shirt1.svg";
import shirt1 from "../../assets/images/tab-nft-icon.41cd1a.svg";
import shirt2 from "../../assets/images/gear.735460.svg";

const Ecosystem = () => {
  return (
    <>
      <div className="At__Ecosystem">
        <h1 className="Trade_heading" data-aos="fade-right">
          Ooki Ecosystem
        </h1>
        <Tabs className="tab___div">
          <div className="MULTICHAIN__div">
            <TabList className="MULTICHAIN_tab">
              <Tab id="MULTICHAIN__btn">MULTICHAIN</Tab>
              <Tab>DAO</Tab>
              <Tab>LEARN</Tab>
              <Tab>NFT</Tab>
            </TabList>
          </div>
          <TabPanel>
            <div className="At__Blockchain">
              <div className="blockchain__div" data-aos="fade-up">
                <img src={img7} alt="" />
              </div>
              <div className="blockchain__div1" data-aos="fade-up">
                <h1>MULTIPLE BLOCKCHAINS</h1>
                <p>Use OOKI on your favorite blockchains</p>
                <ul>
                  <li>
                    <img src={swapimg} alt="" />
                    <p>ETHEREUM</p>
                  </li>
                  <li>
                    <img src={swapimg1} alt="" />
                    <p>BINANCE</p>
                  </li>
                  <li>
                    <img src={swapimg2} alt="" />
                    <p>POLYGON</p>
                  </li>
                </ul>
                <button className="useooki__btn">USE OOKI</button>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="At__Blockchain">
              <div className="blockchain__div" data-aos="fade-up">
                <img src={img4} alt="" />
              </div>
              <div className="blockchain__div1" data-aos="fade-up">
                <h1>DAO</h1>
                <p>
                  Ooki is governed by its users. You shape the future of Ooki.
                </p>
                <div className="dao__div">
                  <ul>
                    <li>
                      <img src={heart1} alt="" />
                      <p>
                        VOTE FOR
                        <br /> REPRESENTATIVES
                      </p>
                    </li>
                    <li>
                      <img src={heart} alt="" />
                      <p>SHAPE DEVELOPMENT</p>
                    </li>
                  </ul>
                </div>
                <button className="useooki__btn">LEARN MORE</button>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="At__Blockchain" data-aos="fade-up">
              <div className="blockchain__div">
                <img src={img6} alt="" />
              </div>
              <div className="blockchain__div1" data-aos="fade-up">
                <h1>OOKIVERSITY</h1>
                <p>For beginners to learn the fundamentals</p>
                <div className="dao__div">
                  <ul>
                    <li>
                      <img src={heart3} alt="" />
                      <p>OOKI PRODUCTS</p>
                    </li>
                    <li>
                      <img src={heart2} alt="" />
                      <p>
                        INTRO TO DEFI <br />
                        CRYPTO BASICS
                      </p>
                    </li>
                  </ul>
                </div>
                <button className="useooki__btn">LEARN MORE</button>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="At__Blockchain">
              <div className="blockchain__div" data-aos="fade-up">
                <img src={img7} alt="" />
              </div>
              <div className="blockchain__div1" data-aos="fade-up">
                <h1>NFT</h1>
                <p>
                  Get the Gear! Shop for limited edition OOKI items and NFT’s
                </p>
                <ul>
                  <li>
                    <img src={shirt} alt="" />
                    <p>T-SHIRTS</p>
                  </li>
                  <li>
                    <img src={shirt1} alt="" />
                    <p>NFT’S</p>
                  </li>
                  <li>
                    <img src={shirt2} alt="" />
                    <p>GEAR</p>
                  </li>
                </ul>
                <button className="useooki__btn">SHOP</button>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};
export default Ecosystem;
