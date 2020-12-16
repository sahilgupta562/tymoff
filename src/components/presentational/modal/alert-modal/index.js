import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as AlertModal } from "./alert-modal";
import { openModal, closeModal, clearUploadContent, clearHistory, logout, removeProfileImage,deleteContent } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.alert || false,
  alertAction: state.ui.alertAction
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: modal => dispatch(closeModal(modal)),
  clearUploadContent: () => dispatch(clearUploadContent()),
  clearHistory: () => dispatch(clearHistory()),
  removeProfileImage: () => dispatch(removeProfileImage()),
  logout: () => dispatch(logout()),
  deleteContent: () => dispatch(deleteContent()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlertModal));
