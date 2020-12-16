import { connect } from "react-redux";
import { default as WebUpload } from "./web-upload";
import { setUploadWeblink, loadMetadata } from "../../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.upload || false,
  weblink: state.upload.weblink,
  metaData: state.upload.metaData,
  error: state.upload.error
});

const mapDispatchToProps = dispatch => ({
  setUploadWeblink: weblink => dispatch(setUploadWeblink(weblink)),
  loadMetadata: () => dispatch(loadMetadata())
});

export default connect(mapStateToProps, mapDispatchToProps)(WebUpload);
