import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as Sidebar } from "./sidebar";
import { openModal, openSidebar, getActiveFilterCountries, getActiveFilterLanguages, navlinkChange, showSelectedText } from "../../../store";

const mapStateToProps = state => ({
  sidebar: state.ui.sidebar,
  isDiscoverRoute: state.ui.isDiscoverRoute,
  discoverList: state.discover.discoverList,
  userDiscoverList: state.discover.userDiscoverList,
  isLoggedIn: state.auth.isLoggedIn,
  selectedCountries: getActiveFilterCountries(state),
  selectedLanguages: getActiveFilterLanguages(state)
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  openSidebar: () => dispatch(openSidebar()),
  navlinkChange: () => dispatch(navlinkChange()),
  showSelectedText: text => dispatch(showSelectedText(text))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
