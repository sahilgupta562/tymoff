import { call, put, select, takeEvery } from "redux-saga/effects";
import { get } from "lodash";
import { COMMENT, setComment, setCommentError, setTotalComment, clearComment, clearCommentText ,newCommentLoad} from "../actions";
import { apiFetchComment, apiAddComment } from "../../api";

const getActiveContent = state => state.content.activeContent;
const getUser = state => state.auth.data;
const getToken = state => state.auth.token;
const getCommentText = state => state.comment.commentText;
const getComments = state => state.comment.data;
const getTotalComment = state => state.comment.totalComment;
const getLoading=state=>state.comment.isLoading;

function* handleLoadComments() {
  try {
    const activeContent = yield select(getActiveContent);
    const token = yield select(getToken);
    const response = yield call(apiFetchComment, activeContent.id, token);
    if (response.success) {
      yield put(setComment(get(response, "data.dataList", [])));
      yield put(setTotalComment(response.totalElements));
    } else {
      yield put(clearComment());
    }
  } catch (error) {
    yield put(setCommentError(error.toString()));
  }
}

function* handleAddComment() {
  try {
    const commentText = yield select(getCommentText);
    const isLoading = yield select(getLoading);
    if (commentText) {
      const activeContent = yield select(getActiveContent);
      const token = yield select(getToken);
      const user = yield select(getUser);
      const data = { parentId: 1, contentId: activeContent.id, userId: user.id, comments: commentText };
      if(!isLoading){
      yield put(newCommentLoad());
      const response = yield call(apiAddComment, data, token)
      if (response.success) {
        const comments = yield select(getComments);
        const totalComment = yield select(getTotalComment);
        comments.push(response.data);
        yield put(clearCommentText());
        yield put(setComment(comments));
        yield put(setTotalComment(totalComment + 1));
      }}
    } else {
      yield put(setCommentError("enter comment"));
    }
  } catch (error) {
    yield put(setCommentError(error.toString()));
  }
}

export function* watchLoadComments() {
  yield takeEvery(COMMENT.LOAD, handleLoadComments);
}

export function* watchAddComments() {
  yield takeEvery(COMMENT.ADD, handleAddComment);
}
