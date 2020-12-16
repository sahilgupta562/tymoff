import { connect } from "react-redux";
import { default as Modal } from "./Modal";
import { openModal } from "../../store";

const mapStateToProps = state => ({
  shareModal: state.ui.modal.share || false,
  countryModal: state.ui.modal.country || false,
  languageModal: state.ui.modal.language || false,
  loginModal: state.ui.modal.login || false,
  uploadModal: state.ui.modal.upload || false,
  settingModal: state.ui.modal.setting || false,
  editProfileModal: state.ui.modal.edit_profile || false,
  alertModal: state.ui.modal.alert || false,
  notificationModal: state.ui.modal.notification || false,
  uploadNotificationModal: state.ui.modal.upload_notification || false,
  feedbackModal: state.ui.modal.feedback || false,
  moreOptionsModal: state.ui.modal.more_option || false,
  scrollTimerModal: state.ui.modal.scroll_timer || false,
  contentModal: state.ui.modal.content_detail || false,
  copyLinkModal: state.ui.modal.copy_link || false,
  reportContentModal: state.ui.modal.report_content || false,
  showMoreDetailModal: state.ui.modal.show_more_detail || false,
  viewProfileImageModal: state.ui.modal.view_profile_image || false,
  profileImageOptionModal: state.ui.modal.profile_image_option || false,
  installAppModal: state.ui.modal.install_app || false,
  cameraModal: state.ui.modal.camera || false,
  isModalRoute: state.ui.isModalRoute,
  snackbar: state.ui.snackbar,
  errorSnackbar: state.ui.errorSnackbar
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
