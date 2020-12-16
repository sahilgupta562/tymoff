import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as UploadFileModal } from "./upload-file-modal";
import { closeModal } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.upload_folder || false
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal))
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadFileModal));
