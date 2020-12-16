import { connect } from "react-redux";
import { default as StoryUpload } from "./story-upload";
import { setUploadStoryTitle } from "../../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.upload || false,
  title: state.upload.storyTitle,
  error: state.upload.error
});

const mapDispatchToProps = dispatch => ({
  setUploadStoryTitle: title => dispatch(setUploadStoryTitle(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryUpload);
