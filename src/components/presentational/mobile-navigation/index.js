import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as MobileNavigation } from "./mobile-navigation";
import { openModal, openSidebar, getActiveFilterCountries, getActiveFilterLanguages } from "../../../store";

const mapStateToProps = state => ({
  sidebar: state.ui.sidebar,
  discoverList: state.discover.discoverList,
  userDiscoverList: state.discover.userDiscoverList,
  isLoggedIn: state.auth.isLoggedIn,
  selectedCountries: getActiveFilterCountries(state),
  selectedLanguages: getActiveFilterLanguages(state)
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  openSidebar: () => dispatch(openSidebar())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MobileNavigation));
