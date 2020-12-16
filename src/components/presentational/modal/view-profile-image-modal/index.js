import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as ViewProfileImageModal } from "./view-profile-image-modal";
import { closeModal } from "../../../../store";
import "./view-profile-image-modal.scss";

const mapStateToProps = state => ({
  modal: state.ui.modal.view_profile_image || false,
  picUrl: state.auth.data.picUrl || ""
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewProfileImageModal));
