import { call, takeEvery, select, put } from "redux-saga/effects";
import { get } from "lodash";
import { dynamicLinkInfo, getEncodedContentUrl } from "../../core";
import { SHARE, setShareLink, setContentShareLink, setShareLinkError } from "../actions";
import { apiShareLink } from "../../api";

const getActiveContent = (state) => state.content.activeContent;

function* handleShareLinkLoad() {
  try {
    const activeContent = yield select(getActiveContent);
    const data = dynamicLinkInfo(activeContent.id);
    const response = yield call(apiShareLink, data);
    yield put(setContentShareLink(get(response, "shortLink", "")));
    yield put(setShareLink(get(response, "shortLink", "")));
  } catch (error) {
    yield put(setShareLinkError(error.toString()));
  }
}

export function* watchSearchLoad() {
  yield takeEvery(SHARE.LOAD, handleShareLinkLoad);
}
