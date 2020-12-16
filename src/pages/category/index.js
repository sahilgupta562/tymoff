import { connect } from "react-redux";
import { default as Category } from "./Category";
import { clearFilter, clearAction, setFilter, loadSearch } from "../../store";

const mapStateToProps = state => ({
  routeFromLightbox: state.content.routeFromLightbox,
  contentAction: state.content.contentAction,
  selectedCountries: state.content.filter.countriesList,
  selectedLanguages: state.content.filter.languagesList,
  filter: state.content.filter
});

const mapDispatchToProps = dispatch => ({
  clearFilter: () => dispatch(clearFilter()),
  clearAction: () => dispatch(clearAction()),
  setFilter: filter => dispatch(setFilter(filter)),
  loadSearch: searchHint => dispatch(loadSearch(searchHint))
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
