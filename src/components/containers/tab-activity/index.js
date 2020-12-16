import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as TabActivity } from "./tab-activity";
import { startScrollTimer, stopScrollTimer, activeTab, inactiveTab } from "../../../store";

const mapStateToProps = (state) => ({
  activeContent: state.content.activeContent,
});

const mapDispatchToProps = (dispatch) => ({
  startScrollTimer: () => dispatch(startScrollTimer()),
  stopScrollTimer: () => dispatch(stopScrollTimer()),
  activeTab: () => dispatch(activeTab()),
  inactiveTab: () => dispatch(inactiveTab()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TabActivity));
