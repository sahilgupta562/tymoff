import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as MobileNumber } from "./mobile-number";
import { setLoginNumber, sendOtp, openModal } from "../../../../../store";

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  number: state.auth.number,
  activeCountry: state.auth.activeCountry,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  setLoginNumber: number => dispatch(setLoginNumber(number)),
  sendOtp: () => dispatch(sendOtp()),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MobileNumber));
