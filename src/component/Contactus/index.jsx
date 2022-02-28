import "./style.css";
import img12 from "../../assets/images/img12.svg";
import Email from "./Email";
import Contactbtn from "./Contactbtn";
const Contactus = () => {
  return (
    <>
      <div className="At__contactus">
        <div className="img12">
          <img src={img12} alt="img" />
        </div>
        <h1 data-aos="fade-right">Stay in touch!</h1>
        <Email />
        <Contactbtn />
      </div>
    </>
  );
};
export default Contactus;
