import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as CopyLinkModal } from "./copy-link-modal";
import { closeModal, startScrollTimer } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.copy_link || false,
  isContentDetailOpen: state.content.isContentDetailOpen,
  contentAlreadyVisited: state.content.contentAlreadyVisited,
  shareLink: state.share.data,
  commentBox: state.ui.commentBox
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  startScrollTimer: () => dispatch(startScrollTimer())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CopyLinkModal));
