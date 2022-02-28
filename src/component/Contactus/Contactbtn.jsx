import illustration from "../../assets/images/illustration_07b.19c31f.svg";
const Contactbtn = () => {
  return (
    <>
      <div className="Contactbtn">
        <div className="Contactbtn__div">
          <div style={{ display: "flex" }}>
            <img src={illustration} alt="" height={100} />
            <div className="Contactbtn_heading">
              <h6>Need help?</h6>
              <p>
                “No Centralization” doesn’t mean “no customer support.” We’re
                here to help!
              </p>
            </div>
          </div>
          <button className="contactus_btn"> CONTACT US</button>
        </div>
      </div>
    </>
  );
};
export default Contactbtn;
