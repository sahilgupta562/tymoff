import { connect } from "react-redux";
import { default as Dashboard } from "./Dashboard";
import { clearFilter, clearAction, clearContent,setFilter } from "../../store";

const mapStateToProps = state => ({
  routeFromLightbox: state.content.routeFromLightbox,
  contentAction: state.content.contentAction,
  loadFromSession: state.content.loadFromSession,
  selectedCountries: state.content.filter.countriesList,
  selectedLanguages: state.content.filter.languagesList,
  filter: state.content.filter
});

const mapDispatchToProps = dispatch => ({
  clearFilter: () => dispatch(clearFilter()),
  clearAction: () => dispatch(clearAction()),
  clearContent: () => dispatch(clearContent()),
  setFilter: (filter) => dispatch(setFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
