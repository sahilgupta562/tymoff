import { connect } from "react-redux";
import { default as StoryEditor } from "./story-editor";
import { setUploadStoryDescription } from "../../../store";

const mapStateToProps = state => ({
  description: state.upload.storyDescription
});

const mapDispatchToProps = dispatch => ({
  setUploadStoryDescription: description =>
    dispatch(setUploadStoryDescription(description))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryEditor);
