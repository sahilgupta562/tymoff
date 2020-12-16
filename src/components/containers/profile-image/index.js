import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as ProfileImage } from "./profile-image";
import { openModal, updateProfileImage, setAlertAction } from "../../../store";

const mapStateToProps = state => ({ editProfileModal: state.ui.modal.edit_profile, picUrl: state.auth.data.picUrl || "", isImageLoading: state.auth.isImageLoading });

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  updateProfileImage: image => dispatch(updateProfileImage(image)),
  setAlertAction: alert => dispatch(setAlertAction(alert))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileImage));
