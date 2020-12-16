import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as ValidateOtp } from "./validate-otp";
import {
  sendOtp,
  setOtp,
  validateOtp,
  clearLogin
} from "../../../../../store";

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  number: state.auth.number,
  otp: state.auth.otp,
  error: state.auth.error,
  otpSuccess: state.auth.otpSuccess
});

const mapDispatchToProps = dispatch => ({
  sendOtp: () => dispatch(sendOtp()),
  setOtp: otp => dispatch(setOtp(otp)),
  validateOtp: () => dispatch(validateOtp()),
  clearLogin: () => dispatch(clearLogin())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ValidateOtp)
);
