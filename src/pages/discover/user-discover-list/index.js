import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as UserDiscoverList } from "./User-Discover-List";
import { clearFilter, setContentAction, clearContent, resetContentPage } from "../../../store";

const mapStateToProps = state => ({ routeFromLightbox: state.content.routeFromLightbox });

const mapDispatchToProps = dispatch => ({
  clearFilter: () => dispatch(clearFilter()),
  clearContent: () => dispatch(clearContent()),
  resetContentPage: () => dispatch(resetContentPage()),
  setContentAction: action => dispatch(setContentAction(action))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDiscoverList));
