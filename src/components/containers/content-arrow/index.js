import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as ContentArrow } from "./content-arrow";
import { showNextArrow } from "../../../store";

const mapStateToProps = state => ({
  isScrollTimerEnable: state.content.isScrollTimerEnable,
  displayNextArrow: state.content.showNextArrow,
  currentScrollTime: state.setting.currentScrollTime
});

const mapDispatchToProps = dispatch => ({
  showNextArrow: () => dispatch(showNextArrow())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContentArrow));
