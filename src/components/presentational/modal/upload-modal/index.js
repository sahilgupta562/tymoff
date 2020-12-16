import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as UploadModal } from "./upload-modal";
import { closeModal, openModal, setActiveTab, validateUpload, setUploadStep, setAlertAction, areUnsavedUploadChanges } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.upload || false,
  activeStep: state.upload.activeStep,
  unsavedUploadChange: areUnsavedUploadChanges(state),
  contents: state.upload.contentPreview
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  openModal: modal => dispatch(openModal(modal)),
  setActiveTab: tab => dispatch(setActiveTab(tab)),
  validateUpload: () => dispatch(validateUpload()),
  setUploadStep: step => dispatch(setUploadStep(step)),
  setAlertAction: alert => dispatch(setAlertAction(alert))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadModal));
