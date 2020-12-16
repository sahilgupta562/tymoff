import { connect } from "react-redux";
import { default as SelectedVideos } from "./selected-videos";
import { updateUploadVideo } from "../../../store";

const mapStateToProps = state => ({
  videos: state.upload.videos
});

const mapDispatchToProps = dispatch => ({
  updateUploadVideo: videos => dispatch(updateUploadVideo(videos))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedVideos);
