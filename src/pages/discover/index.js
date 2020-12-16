import { connect } from "react-redux";
import { default as Discover } from "./Discover";
import { clearFilter, onRenderDiscover, onLeaveDiscover } from "../../store";

const mapStateToProps = state => ({
  discoverList: state.discover.discoverList,
  userDiscoverList: state.discover.userDiscoverList
});

const mapDispatchToProps = dispatch => ({
  clearFilter: () => dispatch(clearFilter()),
  onRenderDiscover: () => dispatch(onRenderDiscover()),
  onLeaveDiscover: () => dispatch(onLeaveDiscover())
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
