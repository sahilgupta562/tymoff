import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as ContentMoreOptions } from "./content-more-options";
import { openModal, closeModal, hideContent, startScrollTimer, areModalsOpenOnContentDetail, showCommentBox, hideCommentBox, setErrorMessage, setMessage, showSelectedText } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.more_option || false,
  loadFromGrid: state.content.loadFromGrid,
  isLoggedIn: state.auth.isLoggedIn,
  user: state.auth.data,
  shareLink: state.share.data,
  commentBox: state.ui.commentBox,
  activeContent: state.content.activeContent,
  isOtherModalOpen: areModalsOpenOnContentDetail(state)
});

const mapDispatchToProps = dispatch => ({
  showCommentBox: () => dispatch(showCommentBox()),
  hideCommentBox: () => dispatch(hideCommentBox()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: modal => dispatch(closeModal(modal)),
  hideContent: () => dispatch(hideContent()),
  startScrollTimer: () => dispatch(startScrollTimer()),
  setErrorMessage: errorMessage => dispatch(setErrorMessage(errorMessage)),
  setMessage: message => dispatch(setMessage(message)),
  showSelectedText: text => dispatch(showSelectedText(text))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContentMoreOptions));
