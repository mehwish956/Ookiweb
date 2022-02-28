import { Button, Row } from "antd";
import "./style.css";
const Email = () => {
  return (
    <>
      <Row>
        <form id="input__from">
          <input type="text" placeholder="INTER YOUR EMAIL" id="enter_input" />
          <button id="subscribe__btn">SUBSCRIBE</button>
        </form>
      </Row>
      <div className="email__div"></div>
    </>
  );
};
export default Email;
