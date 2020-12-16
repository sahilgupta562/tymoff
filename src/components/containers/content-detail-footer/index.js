import { connect } from "react-redux";
import { default as ContentDetailFooter } from "./content-detail-footer";
import {
  showCommentBox,
  hideCommentBox,
  openModal,
  setContentUserAction,
  closeModal,
  loadShareLink,
  stopScrollTimer,
  startScrollTimer,
  downloadFile,
  setShareType,
  setErrorMessage,
  showSelectedText,
} from "../../../store";

const mapStateToProps = (state) => ({
  activeContent: state.content.activeContent,
  commentBox: state.ui.commentBox,
  modal: state.ui.modal.more_option || false,
  loadFromGrid: state.content.loadFromGrid,
  isLoggedIn: state.auth.isLoggedIn,
  contentAlreadyVisited: state.content.contentAlreadyVisited,
  loadFromSession: state.content.loadFromSession,
  user: state.auth.data,
});

const mapDispatchToProps = (dispatch) => ({
  showCommentBox: () => dispatch(showCommentBox()),
  hideCommentBox: () => dispatch(hideCommentBox()),
  loadShareLink: () => dispatch(loadShareLink()),
  stopScrollTimer: () => dispatch(stopScrollTimer()),
  startScrollTimer: () => dispatch(startScrollTimer()),
  downloadFile: () => dispatch(downloadFile()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: (modal) => dispatch(closeModal(modal)),
  setShareType: (type) => dispatch(setShareType(type)),
  setContentUserAction: (userAction) => dispatch(setContentUserAction(userAction)),
  setErrorMessage: (message) => dispatch(setErrorMessage(message)),
  showSelectedText: text => dispatch(showSelectedText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentDetailFooter);
