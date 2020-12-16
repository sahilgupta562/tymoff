import { connect } from "react-redux";
import { default as FileSelector } from "./file-selector";
import { setUploadImage, setUploadVideo } from "../../../store";

const mapStateToProps = state => ({ activeTab: state.upload.activeTab, images: state.upload.images, videos: state.upload.videos });

const mapDispatchToProps = dispatch => ({
  setUploadImage: image => dispatch(setUploadImage(image)),
  setUploadVideo: video => dispatch(setUploadVideo(video))
});

export default connect(mapStateToProps, mapDispatchToProps)(FileSelector);
