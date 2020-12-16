import { connect } from "react-redux";
import { default as Grid } from "./grid";
import { loadContent, setContentPageChange, setContentAction, clearContent, loadContentFromApi, hideNewfeed, loadClient } from "../../../store";

const mapStateToProps = state => ({
  contentList: state.content.data,
  currentPage: state.content.currentPage,
  contentAction: state.content.contentAction,
  isLoading: state.content.isLoading,
  isCacheContent: state.content.isCacheContent,
  totalPage: state.content.totalPage,
  sidebar: state.ui.sidebar,
  newFeed: state.ui.newFeed,
  routeFromLightbox: state.content.routeFromLightbox,
  loadFromSession: state.content.loadFromSession,
  loadFromSsr: state.content.loadFromSsr,
});

const mapDispatchToProps = dispatch => ({
  loadContent: () => dispatch(loadContent()),
  clearContent: () => dispatch(clearContent()),
  setContentAction: action => dispatch(setContentAction(action)),
  setContentPageChange: currentPage => dispatch(setContentPageChange(currentPage)),
  loadContentFromApi: () => dispatch(loadContentFromApi()),
  hideNewfeed: () => dispatch(hideNewfeed()),
  loadClient: () => dispatch(loadClient())
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
