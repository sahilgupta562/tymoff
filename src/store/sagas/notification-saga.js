import { call, put, select, takeEvery } from "redux-saga/effects";
import { get } from "lodash";
import { NOTIFICATION, setNotifications, setNotificationError, setNotificationsCount } from "../actions";
import { apiFetchNotification } from "../../api";

const getToken = state => state.auth.token;

function* handleLoadNotifications() {
  try {
    const token = yield select(getToken);
    const response = yield call(apiFetchNotification, token);
    yield put(setNotifications(get(response, "data.dataList", [])));
    const notificCount="notificationCount";
    const notificationCount=JSON.parse(localStorage.getItem(notificCount));
    if(notificationCount === null){
      localStorage.setItem(notificCount,JSON.stringify(get(response, "data.dataList.length")));
      yield put(setNotificationsCount(get(response, "data.dataList.length")));
    }
    else {
      yield put(setNotificationsCount(notificationCount));
    }
  } catch (error) {
    yield put(setNotificationError(error.toString()));
  }
}

export function* watchLoadNotifications() {
  yield takeEvery(NOTIFICATION.LOAD, handleLoadNotifications);
}
