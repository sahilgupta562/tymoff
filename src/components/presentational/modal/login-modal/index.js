import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as LoginModal } from "./login-modal";
import { openModal, closeModal } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.login || false,
  isModalRoute: state.ui.isModalRoute,
  otpSent: state.auth.otpSent,
  selectedText: state.auth.selectedText,
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: modal => dispatch(closeModal(modal))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginModal)
);
