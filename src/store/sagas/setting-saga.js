import { call, put, select, takeEvery } from "redux-saga/effects";
import { SuccessMessage } from "../../constant";
import { SETTING, setSearchError, clearAuth, clearSetting, clearFilter, setMessage } from "../actions";
import { apiClearHistory, apiLogout, apiRestrictedMode } from "../../api";

const getToken = state => state.auth.token;
const getIsRestrictedMode = state => state.setting.restrictedMode;

function* handleClearHistory() {
  try {
    const token = yield select(getToken);
    yield put(setMessage(SuccessMessage.HISTORY_CLEARED));
    yield call(apiClearHistory, token);
  } catch (error) {
    yield put(setSearchError(error.toString()));
  }
}

function* handleLogout() {
  try {
    const token = yield select(getToken);
    yield call(apiLogout, token);
    yield put(clearSetting());
    yield put(clearAuth());
    yield put(clearFilter());
  } catch (error) {
    yield put(setSearchError(error.toString()));
  }
}

function* handleRestrictedMode() {
  try {
    const isRestricted = yield select(getIsRestrictedMode);
    const token = yield select(getToken);
    yield call(apiRestrictedMode, isRestricted, token);
  } catch (error) {
    yield put(setSearchError(error.toString()));
  }
}

export function* watchRestrictedMode() {
  yield takeEvery([SETTING.ENABLE_RESTRICTED_MODE, SETTING.DISABLE_RESTRICTED_MODE], handleRestrictedMode);
}

export function* watchClearHistory() {
  yield takeEvery(SETTING.CLEAR_HISTORY, handleClearHistory);
}

export function* watchLogout() {
  yield takeEvery(SETTING.LOG_OUT, handleLogout);
}
