import { call, put, select, takeEvery } from "redux-saga/effects";
import { DISCOVER, setDiscoverList, setDiscoverError, setUserDiscoverList, setDiscoverContentList, setUserDiscoverContentList } from "../actions";
import { apiFetchDiscoverList, apiFetchUserDiscoverList } from "../../api";
import { get, map, pick } from "lodash";

const getToken = state => state.auth.token;

function* handleDiscoverList() {
  try {
    const response = yield call(apiFetchDiscoverList);
    const discover = get(response, "data.discover", []);
    const discoverList = map(discover, item => pick(item, ["id", "name"]));
    const discoverContentList = map(discover, item => pick(item, ["id", "name", "contentList"]));
    yield put(setDiscoverList(discoverList));
    yield put(setDiscoverContentList(discoverContentList));
  } catch (error) {
    yield put(setDiscoverError(error.toString()));
  }
}

function* handleUserDiscoverList() {
  try {
    const token = yield select(getToken);
    const response = yield call(apiFetchUserDiscoverList, token);
    const discover = get(response, "data.discover", []);
    const discoverList = map(discover, item => pick(item, ["id", "name"]));
    const discoverContentList = map(discover, item => pick(item, ["id", "name", "contentList", "message"]));
    yield put(setUserDiscoverList(discoverList));
    yield put(setUserDiscoverContentList(discoverContentList));
  } catch (error) {
    yield put(setDiscoverError(error.toString()));
  }
}

export function* watchDiscoverList() {
  yield takeEvery(DISCOVER.LOAD_DISCOVER_LIST, handleDiscoverList);
}

export function* watchUserDiscoverList() {
  yield takeEvery(DISCOVER.LOAD_USER_DISCOVER_LIST, handleUserDiscoverList);
}
