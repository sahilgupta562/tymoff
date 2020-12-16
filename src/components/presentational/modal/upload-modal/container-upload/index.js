import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as ContainerUpload } from "./container-upload";
import { setActiveTab, validateUpload } from "../../../../../store";

const mapStateToProps = state => ({
  activeTab: state.upload.activeTab,
  previewContents: state.upload.contentPreview
});

const mapDispatchToProps = dispatch => ({
  setActiveTab: tab => dispatch(setActiveTab(tab)),
  validateUpload: () => dispatch(validateUpload())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContainerUpload));
