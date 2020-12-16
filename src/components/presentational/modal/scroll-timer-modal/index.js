import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as ScrollTimerModal } from "./scroll-timer-modal";
import { closeModal, changeContentScrollTime } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.scroll_timer || false,
  contentScrollTime: state.setting.contentScrollTime
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  changeContentScrollTime: scrollTime => dispatch(changeContentScrollTime(scrollTime))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ScrollTimerModal));
