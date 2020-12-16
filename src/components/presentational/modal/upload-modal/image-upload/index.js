import { connect } from "react-redux";
import { default as ImageUpload } from "./image-upload";
import { setUploadImageDescription } from "../../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.upload || false,
  description: state.upload.imageDescription,
  error: state.upload.error
});

const mapDispatchToProps = dispatch => ({
  setUploadImageDescription: description =>
    dispatch(setUploadImageDescription(description))
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);
