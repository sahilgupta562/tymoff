import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as ProfileImageOptionModal } from "./profile-image-option-modal";
import { closeModal, openModal, updateProfileImage, setAlertAction } from "../../../../store";
import "./profile-image-option-modal.scss";

const mapStateToProps = state => ({
  modal: state.ui.modal.profile_image_option || false,
  picUrl: state.auth.data.picUrl || ""
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  openModal: modal => dispatch(openModal(modal)),
  updateProfileImage: image => dispatch(updateProfileImage(image)),
  setAlertAction: alert => dispatch(setAlertAction(alert))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileImageOptionModal));
