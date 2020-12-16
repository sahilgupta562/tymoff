import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as Video } from "./video";
import { startScrollTimer, muteVideo, unMuteVideo, stopScrollTimer, changeVolumeLevel } from "../../../../store";

const mapStateToProps = (state) => ({
  activeContent: state.content.activeContent,
  commentBox: state.ui.commentBox,
  contentAlreadyVisited: state.content.contentAlreadyVisited,
  videoMuted: state.content.videoMuted,
  contentList: state.content.data,
  volumeLevel: state.content.volumeLevel,
  browserTab: state.ui.browserTab,
  showMoreDetailModal: state.ui.modal.show_more_detail || false,
});

const mapDispatchToProps = (dispatch) => ({
  startScrollTimer: () => dispatch(startScrollTimer()),
  muteVideo: () => dispatch(muteVideo()),
  unMuteVideo: () => dispatch(unMuteVideo()),
  stopScrollTimer: () => dispatch(stopScrollTimer()),
  changeVolumeLevel: (value) => dispatch(changeVolumeLevel(value)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Video));
