import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as Content } from "./Content";
import {
  clearFilter,
  setActiveContentIndex,
  stopScrollTimer,
  startScrollTimer,
  loadContentDetail,
  hideCommentBox,
  routeFromLightbox,
  areModalsOpenOnContentDetail,
  openModal,
  hideNextArrow,
  showNextArrow,
  contentOpen,
  contentClose
} from "../../store";

const mapStateToProps = state => ({
  contentList: state.content.data,
  activeContentIndex: state.content.activeContentIndex,
  commentBox: state.ui.commentBox,
  totalContent: state.content.totalContent,
  isScrollTimerEnable: state.content.isScrollTimerEnable,
  loadFromGrid: state.content.loadFromGrid,
  activeContent: state.content.activeContent,
  loadFromSession: state.content.loadFromSession,
  darkTheme: state.setting.darkTheme,
  isOtherModalOpen: areModalsOpenOnContentDetail(state),
  currentScrollTime: state.setting.currentScrollTime
});

const mapDispatchToProps = dispatch => ({
  clearFilter: () => dispatch(clearFilter()),
  contentOpen: () => dispatch(contentOpen()),
  contentClose: () => dispatch(contentClose()),
  stopScrollTimer: () => dispatch(stopScrollTimer()),
  startScrollTimer: () => dispatch(startScrollTimer()),
  hideCommentBox: () => dispatch(hideCommentBox()),
  routeFromLightbox: () => dispatch(routeFromLightbox()),
  hideNextArrow: () => dispatch(hideNextArrow()),
  showNextArrow: () => dispatch(showNextArrow()),
  setActiveContentIndex: index => dispatch(setActiveContentIndex(index)),
  loadContentDetail: contentId => dispatch(loadContentDetail(contentId)),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));
