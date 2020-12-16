import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as InstallAppModal } from "./install-app-modal";
import { closeModal } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.install_app || false
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InstallAppModal));
