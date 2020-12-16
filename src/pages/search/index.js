import { connect } from "react-redux";
import { default as Search } from "./Search";
import { clearFilter, setFilter, resetContentPage, clearSearch, clearAction, loadSearch } from "../../store";

const mapStateToProps = state => ({
  filter: state.content.filter,
  routeFromLightbox: state.content.routeFromLightbox,
  contentAction: state.content.contentAction,
  selectedCountries: state.content.filter.countriesList,
  selectedLanguages: state.content.filter.languagesList
});

const mapDispatchToProps = dispatch => ({
  clearFilter: () => dispatch(clearFilter()),
  resetContentPage: () => dispatch(resetContentPage()),
  clearSearch: () => dispatch(clearSearch()),
  setFilter: filter => dispatch(setFilter(filter)),
  clearAction: () => dispatch(clearAction()),
  loadSearch: searchHint => dispatch(loadSearch(searchHint))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
