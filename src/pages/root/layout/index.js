import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as Layout } from "./Layout";
import { closeModal, loadWebsite, areModalsOpenOnContentDetail, hideCommentBox, navlinkChange, contentClose } from "../../../store";

const mapStateToProps = (state) => ({
  sidebar: state.ui.sidebar,
  contentModal: state.ui.modal.content_detail || false,
  countryModal: state.ui.modal.country || false,
  languageModal: state.ui.modal.language || false,
  loginModal: state.ui.modal.login || false,
  moreOptionsModal: state.ui.modal.more_option || false,
  shareModal: state.ui.modal.share || false,
  copyLinkModal: state.ui.modal.copy_link || false,
  reportContentModal: state.ui.modal.report_content || false,
  editProfileModal: state.ui.modal.edit_profile || false,
  profileImageOptionModal: state.ui.modal.profile_image_option || false,
  showMoreDetail: state.ui.modal.show_more_detail || false,
  activeContent: state.content.activeContent,
  commentBox: state.ui.commentBox,
  darkTheme: state.setting.darkTheme,
  isOtherModalOpen: areModalsOpenOnContentDetail(state),
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: (modal) => dispatch(closeModal(modal)),
  loadWebsite: () => dispatch(loadWebsite()),
  hideCommentBox: () => dispatch(hideCommentBox()),
  contentClose: () => dispatch(contentClose()),
  navlinkChange: () => dispatch(navlinkChange()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
