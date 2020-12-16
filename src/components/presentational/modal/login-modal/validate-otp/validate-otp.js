import React, { PureComponent, Fragment } from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import "./validate-otp.scss";

class ValidateOtp extends PureComponent {
  componentDidMount() {
    this.selectText();
  }

  selectText = () => {
    const input = document.getElementById('text-otp');
    input.focus();
    input.select();
  }

  handleOtpChange = event => {
    const { target } = event;
    if (target.validity.valid) {
      const { setOtp } = this.props;
      setOtp(target.value);
    }
  };
  handleProceed = () => {
    const { validateOtp } = this.props;
    validateOtp();
  };

  pressEnter = (e) => {
    const { otp, isLoading } = this.props;
    if (!(otp.length < 4 || isLoading)) {
      if (e.keyCode === 13 && e.shiftKey === false) {
        e.preventDefault();
        this.handleProceed();
      }
    }
  }

  render() {
    const { sendOtp, otp, isLoading, clearLogin, number, error } = this.props;

    return (
      <Fragment>
        <div className={"afterOtp"}>
          <div className={"enterOtp"}>Enter OTP</div>
          <input
            type="text"
            className={"inputOtp"}
            pattern="[0-9]*"
            maxLength={4}
            value={otp}
            onChange={this.handleOtpChange}
            id="text-otp"
            onKeyDown={this.pressEnter}
          />
          <div style={{ textAlign: "right" }}>
            <ButtonBase onClick={sendOtp}>
              <div className={"resendOtp"}>Resend OTP</div>
            </ButtonBase>
          </div>
          <div className={"error"}>{error}</div>
          <p className={"noAccountLinkMobile"}>
            An OTP has been sent to your ******
            {number.substr(number.length - 4)}, please enter the same to proceed
            or &nbsp;
            <ButtonBase onClick={clearLogin} className="change-mobile">
              <span> change mobile number</span>
            </ButtonBase>
          </p>
        </div>
        <button
          className={"submitButton"}
          onClick={this.handleProceed}
          disabled={otp.length < 4 || isLoading}
        >
          Proceed
        </button>
      </Fragment>
    );
  }
}

export default ValidateOtp;
