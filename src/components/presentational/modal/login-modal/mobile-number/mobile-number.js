import React, { PureComponent, Fragment } from "react";
import { ButtonBase } from "@material-ui/core";
import { ModalType } from "../../../../../constant";
import "./mobile-number.scss";

class MobileNumber extends PureComponent {
  handleInputChange = event => {
    const { target } = event;
    if (target.validity.valid) {
      const { setLoginNumber } = this.props;
      setLoginNumber(target.value);
    }
  };
  handleNextClick = () => {
    const { sendOtp } = this.props;
    sendOtp();
  };

  pressEnter = (e) => {
    const { number, isLoading } = this.props;
    if (!(number.length < 6 || isLoading)) {
      if (e.keyCode === 13 && e.shiftKey === false) {
        e.preventDefault();
        this.handleNextClick();
      }
    }
  }


  render() {
    const { isLoading, number, activeCountry, openModal, error } = this.props;
    return (
      <Fragment>
        <div>
          <div className={"noAccountLinkMobile"}>Enter your phone number to receive the 4 digit verification code on your mobile.</div>
          <div className={"inputNumberWrapper"} onKeyDown={this.pressEnter}>
            <ButtonBase className="countryCode" onClick={() => openModal(ModalType.COUNTRY)}>
              {activeCountry.callingCode}
            </ButtonBase>
            <input
              name="username"
              placeholder="Enter your number"
              className={"inputField"}
              // maxLength={10}
              value={number}
              onChange={this.handleInputChange}
              pattern="[0-9]*"
              style={{ width: "calc(100% - 55px" }}
              autoComplete="off"
            />
          </div>
          <span className="error">{error}</span>
          <p className={"para"}>Your number is safe and won't be shared anywhere. It is only used to verify your account.</p>
        </div>
        <button className={"submitButton"} disabled={number.length < 6 || isLoading} onClick={this.handleNextClick}>
          Next
        </button>
      </Fragment>
    );
  }
}

export default MobileNumber;
