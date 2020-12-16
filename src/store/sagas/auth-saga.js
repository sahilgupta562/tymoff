import { call, takeEvery, put } from "redux-saga/effects";
import { get } from "lodash";
import { AUTH, setAuthError } from "../actions";
import { apiLogin } from "../../api";
import { setCookieItem } from "../../core";

function* handleLogin() {
  try {
    const data = { email: "dev@xion.ai", password: "admin" };
    const response = yield call(apiLogin, data);
    const token = get(response, "data.accessToken", "");
    setCookieItem("Bearer", token);
    yield "";
  } catch (error) {
    yield put(setAuthError(error.toString()));
  }
}

export function* watchLogin() {
  yield takeEvery(AUTH.LOAD, handleLogin);
}
