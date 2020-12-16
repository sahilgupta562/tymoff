import { call, put, select, takeEvery } from "redux-saga/effects";
import { FEEDBACK, setFeedbackError } from "../actions";
import { FeedbackResponseAlert } from "../../constant";
import { feedbackData } from "../../core";
import { setAlertAction } from "../../store";
import { apiSendFeedback } from "../../api";

const getFeedbackDescription = state => state.feedback.description;
const getFeedbackTitle = state => state.feedback.title;
const getToken = state => state.auth.token;

function* handleSendFeedback() {
  try {
    const description = yield select(getFeedbackDescription);
    const title = yield select(getFeedbackTitle);
    const token = yield select(getToken);
    if (title && description) {
      const data = feedbackData(description, title);
      yield call(apiSendFeedback, data, token);
      yield put(setAlertAction(FeedbackResponseAlert));
    } else {
      if (!title) yield put(setFeedbackError("Please enter title"));
      else if (!description) yield put(setFeedbackError("Please enter description"));
    }
  } catch (error) {
    yield put(setFeedbackError(error.toString()));
  }
}

export function* watchSendFeedback() {
  yield takeEvery(FEEDBACK.SEND_FEEDBACK, handleSendFeedback);
}
