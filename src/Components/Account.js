import { Row, Col } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import ATMDeposit from "./ATMDeposit";

const Account = () => {
  const [deposit, setDeposit] = useState(0);
  const [totalState, setTotalState] = useState(0);
  const [isDeposit, setIsDeposit] = useState(true);
  const [atmMode, setAtmMode] = useState("");
  const [validTransaction, setValidTransaction] = useState(false);
  const [alert, setAlert] = useState(false);

  let status = ` $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  const handleChange = (event) => {
    console.log(Number(event.target.value));
    if (Number(event.target.value) <= 0) {
      return setValidTransaction(false);
    }
    if (atmMode === "Withdraw" && Number(event.target.value) > totalState) {
      setValidTransaction(false);
      setAlert(true);
    } else {
      setValidTransaction(true);
      setAlert(false);
    }
    setDeposit(Number(event.target.value));
  };
  const handleSubmit = (event) => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    setValidTransaction(false);
    event.preventDefault();
  };

  const handleModeSelect = (event) => {
    console.log(event.target.value);
    setAtmMode(event.target.value);
    setValidTransaction(false);
    if (event.target.value === "Deposit") {
      setIsDeposit(true);
    } else {
      setIsDeposit(false);
    }
  };

  return (
    <div className="header-form">
      <form onSubmit={handleSubmit}>
        <Row>
          <Col md={12}>
            <h2>Account Balance</h2>
          </Col>
          <Col md={12}>
            <h2>{status}</h2>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <label>Select an action below to continue</label>
          </Col>
          <Col md={12} className="mt-1">
            <select
              onChange={(e) => handleModeSelect(e)}
              name="mode"
              id="mode-select"
            >
              <option id="no-selection" value=""></option>
              <option id="deposit-selection" value="Deposit">
                Deposit
              </option>
              <option id="cashback-selection" value="Withdraw">
                Withdraw
              </option>
            </select>
          </Col>
        </Row>
        {atmMode && (
          <ATMDeposit
            onChange={handleChange}
            isDeposit={isDeposit}
            isValid={validTransaction}
            alert={alert}
          ></ATMDeposit>
        )}
      </form>
    </div>
  );
};

export default Account;
