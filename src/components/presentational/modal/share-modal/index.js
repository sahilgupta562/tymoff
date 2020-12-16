import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as ShareModal } from "./share-modal";
import { openModal, closeModal, loadShareLink, startScrollTimer } from "../../../../store";

const mapStateToProps = (state) => ({
  modal: state.ui.modal.share || false,
  isContentDetailOpen: state.content.isContentDetailOpen,
  contentAlreadyVisited: state.content.contentAlreadyVisited,
  activeContent: state.content.activeContent,
  shareLink: state.share.data,
  commentBox: state.ui.commentBox,
  shareType: state.share.type,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: (modal) => dispatch(closeModal(modal)),
  loadShareLink: () => dispatch(loadShareLink()),
  startScrollTimer: () => dispatch(startScrollTimer()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShareModal));
