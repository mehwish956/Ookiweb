import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Okiheader from "./component/Okiheader";
import Footer from "./component/Footer";
import Tradecrypto from "./component/Tradecrypto";
import Borrowcrypto from "./component/Borrowcrypto";
import Lendcrypto from "./component/Lendcrypto";
import Stakecrypto from "./component/Stakecrypto";
import Ecosystem from "./component/Ecosystem";
import Contactus from "./component/Contactus";
import Homepage from "./component/Homepage";

function App() {
  return (
    <>
      <div className="At_ookisection">
        <div className="At_Okiheader">
          <Okiheader />
        </div>
        <div className="At_Loyout">
          <Homepage />
          <Tradecrypto />
          <Borrowcrypto />
          <Lendcrypto />
          <Stakecrypto />
          <Ecosystem />
          <Contactus />
        </div>
      </div>
      <div className="Footer_div">
        <Footer />
      </div>
    </>
  );
}

export default App;
