import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as FeedbackModal } from "./camera-modal";
import { closeModal, updateProfileImage } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.camera || false
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  updateProfileImage: image => dispatch(updateProfileImage(image))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedbackModal));
