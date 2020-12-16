import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as EditProfileModal } from "./edit-profile-modal";
import { openModal, closeModal, editUserInfo, updateProfile } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.edit_profile || false,
  isModalRoute: state.ui.isModalRoute,
  languages: state.master.languages,
  countries: state.master.countries,
  user: state.auth.editUser,
  error: state.auth.error,
  isLoading: state.auth.isLoading
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: modal => dispatch(closeModal(modal)),
  editUserInfo: user => dispatch(editUserInfo(user)),
  updateProfile: () => dispatch(updateProfile())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfileModal));
