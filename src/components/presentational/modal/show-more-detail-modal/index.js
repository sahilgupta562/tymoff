import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as ShowMoreDetailModal } from "./show-more-detail-modal";
import { closeModal, areModalsOpenOnContentDetail, startScrollTimer } from "../../../../store";
import "./show-more-detail-modal.scss";

const mapStateToProps = state => ({
  modal: state.ui.modal.show_more_detail || false,
  isOtherModalOpen: areModalsOpenOnContentDetail(state),
  contentAlreadyVisited: state.content.contentAlreadyVisited,
  loadFromGrid: state.content.loadFromGrid,
  activeContent: state.content.activeContent
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  startScrollTimer: () => dispatch(startScrollTimer())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowMoreDetailModal));
