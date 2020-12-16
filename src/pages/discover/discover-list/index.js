import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as DiscoverList } from "./Discover-List";
import { clearFilterOnDiscover, setFilter, resetContentPage, clearAction } from "../../../store";

const mapStateToProps = state => ({
  filter: state.content.filter,
  contentAction: state.content.contentAction,
  selectedCountries: state.content.filter.countriesList,
  selectedLanguages: state.content.filter.languagesList
});

const mapDispatchToProps = dispatch => ({
  clearFilterOnDiscover: () => dispatch(clearFilterOnDiscover()),
  resetContentPage: () => dispatch(resetContentPage()),
  setFilter: filter => dispatch(setFilter(filter)),
  clearAction: () => dispatch(clearAction())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DiscoverList));
