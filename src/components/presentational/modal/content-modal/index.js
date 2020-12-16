import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as ContentModal } from "./content-modal";
import {
  setActiveContentIndex,
  stopScrollTimer,
  loadContentDetail,
  hideCommentBox,
  routeFromLightbox,
  closeModal,
  openModal,
  clearFilter,
  areModalsOpenOnContentDetail,
  showNextArrow,
  hideNextArrow,
  contentClose
} from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.content_detail || false,
  contentList: state.content.data,
  activeContentIndex: state.content.activeContentIndex,
  initialSlide: state.content.initialSlide,
  commentBox: state.ui.commentBox,
  totalContent: state.content.totalContent,
  isScrollTimerEnable: state.content.isScrollTimerEnable,
  displayNextArrow: state.content.showNextArrow,
  loadFromGrid: state.content.loadFromGrid,
  loadFromSession: state.content.loadFromSession,
  activeContent: state.content.activeContent,
  isOtherModalOpen: areModalsOpenOnContentDetail(state),
  currentScrollTime: state.setting.currentScrollTime,
  genres: state.master.genres
});

const mapDispatchToProps = dispatch => ({
  clearFilter: () => dispatch(clearFilter()),
  contentClose: () => dispatch(contentClose()),
  stopScrollTimer: () => dispatch(stopScrollTimer()),
  hideCommentBox: () => dispatch(hideCommentBox()),
  routeFromLightbox: () => dispatch(routeFromLightbox()),
  showNextArrow: () => dispatch(showNextArrow()),
  hideNextArrow: () => dispatch(hideNextArrow()),
  setActiveContentIndex: index => dispatch(setActiveContentIndex(index)),
  loadContentDetail: contentId => dispatch(loadContentDetail(contentId)),
  closeModal: modal => dispatch(closeModal(modal)),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContentModal));
