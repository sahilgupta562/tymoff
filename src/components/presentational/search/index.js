import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as Search } from "./search";
import { loadSearch, setFilter, setCustomFilter, clearSearchResult , clearSearch} from "../../../store";

const mapStateToProps = state => ({
  searchResults: state.search.data,
  searchHint: state.search.searchHint,
  isLoading: state.search.isLoading,
  filter: state.content.filter
});

const mapDispatchToProps = dispatch => ({
  loadSearch: searchHint => dispatch(loadSearch(searchHint)),
  setFilter: filter => dispatch(setFilter(filter)),
  setCustomFilter: filter => dispatch(setCustomFilter(filter)),
  clearSearchResult: () => dispatch(clearSearchResult()),
  clearSearch: () => dispatch(clearSearch())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
