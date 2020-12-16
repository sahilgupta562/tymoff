import { call, put, select, takeEvery } from "redux-saga/effects";
import {
  SEARCH,
  setSearchResults,
  setSearchError,
  clearSearch
} from "../actions";
import { apiSearchHint } from "../../api";

const getSearchHint = state => state.search.searchHint;
const getToken = state => state.auth.token;

function* handleSearchHint() {
  try {
    const searchHint = yield select(getSearchHint);
    const token = yield select(getToken);
    if (searchHint) {
      const searchResults = yield call(apiSearchHint, searchHint, token);
      yield put(setSearchResults(searchResults.data));
    } else yield put(clearSearch());
  } catch (error) {
    yield put(setSearchError(error.toString()));
  }
}

export function* watchSearch() {
  yield takeEvery(SEARCH.LOAD, handleSearchHint);
}
