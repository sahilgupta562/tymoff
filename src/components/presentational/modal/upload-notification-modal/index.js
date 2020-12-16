import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as UploadNotificationModal } from "./upload-notification-modal";
import { closeModal } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.upload_notification || false,
  uploadingFiles: state.upload.uploadingFiles
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadNotificationModal));
