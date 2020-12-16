import { connect } from "react-redux";
import { default as SelectedImages } from "./selected-images";
import { updateUploadImage } from "../../../store";

const mapStateToProps = state => ({
  images: state.upload.images
});

const mapDispatchToProps = dispatch => ({
  updateUploadImage: images => dispatch(updateUploadImage(images))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedImages);
