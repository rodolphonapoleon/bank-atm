import { Row, Col } from "react-bootstrap";
import React from "react";

const ATMDeposit = ({ onChange, isDeposit, isValid, alert }) => {
  const choice = ["Deposit", "Withdraw"];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="label huge, atm">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <Row>
        <Col md={12} className="mt-2">
          <input
            className="input-field"
            id="number-input"
            type="number"
            width="200"
            onChange={onChange}
          ></input>
        </Col>
        {alert && <div className="alert">* Amount not available</div>}
        <Col md={12} className="mt-3">
          <input
            className="submit-button"
            type="submit"
            disabled={!isValid}
            width="200"
            value="Submit"
            id="submit-input"
          ></input>
        </Col>
      </Row>
    </label>
  );
};

export default ATMDeposit;
