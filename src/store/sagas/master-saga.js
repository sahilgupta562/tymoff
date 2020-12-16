import { call, takeEvery, put } from "redux-saga/effects";
import { get } from "lodash";
import {
  MASTER,
  setFormat,
  setLanguage,
  setCountries,
  setGenre,
  setReport,
  setVideoFormat,
  setError
} from "../actions";
import { apiFetchMeta } from "../../api";

function* handleLoadMasterData() {
  try {
    const response = yield call(apiFetchMeta);
    yield put(setFormat(get(response, "data.formats", [])));
    yield put(setLanguage(get(response, "data.languages", [])));
    yield put(setCountries(get(response, "data.countries", [])));
    yield put(setGenre(get(response, "data.genres", [])));
    yield put(setReport(get(response, "data.report", [])));
    yield put(setVideoFormat(get(response, "data.videoFormats", [])));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export function* watchMasterLoad() {
  yield takeEvery(MASTER.LOAD, handleLoadMasterData);
}
