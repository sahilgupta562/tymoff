import { SEARCH } from "./action-types";

const loadSearch = searchHint => ({
  type: SEARCH.LOAD,
  searchHint
});

const clearSearch = () => ({
  type: SEARCH.CLEAR
});

const clearSearchResult = () => ({
  type: SEARCH.CLEAR_RESULT
});

const setSearchResults = searchResults => ({
  type: SEARCH.LOAD_SUCCESS,
  searchResults
});

const setSearchError = error => ({
  type: SEARCH.LOAD_FAILED,
  error
});

export { loadSearch, clearSearch, setSearchResults, setSearchError, clearSearchResult };
