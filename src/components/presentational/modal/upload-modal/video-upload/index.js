import { connect } from "react-redux";
import { default as VideoUpload } from "./video-upload";
import { setUploadVideoDescription } from "../../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.upload || false,
  description: state.upload.videoDescription,
  error: state.upload.error
});

const mapDispatchToProps = dispatch => ({
  setUploadVideoDescription: description =>
    dispatch(setUploadVideoDescription(description))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoUpload);
