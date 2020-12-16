import { takeEvery, put, select } from "redux-saga/effects";
import {
  UI,
  loadMasterData,
  loadDiscoverList,
  loadUserDiscoverList,
  setError,
  setModalAction,
  clearUpload,
  openModal,
  loadComment,
  clearComment,
  stopScrollTimer,
  startScrollTimer,
  editUserInfo,
  newContentVisited,
  clearAlreadyVisitedContentIds,
  // muteVideo,
  changeVolumeLevel,
  openSnackbar,
  openErrorSnackbar,
  clearMessage,
  clearSearchCountry,
  clearSearchLanguage,
  setLoginCountry,
  clearFeedback,
  clearUploadError,
} from "../actions";
import { ModalAction, ModalType } from "../../constant";

const getModal = (state) => state.ui.modal;
const getUserDetails = (state) => state.auth.data;
const getCommentBox = (state) => state.ui.commentBox;
const getActiveCountry = (state) => state.auth.activeCountry;
const getContentAlreadyVisited = (state) => state.auth.contentAlreadyVisited;
const getIsContentDetailOpen = (state) => state.content.isContentDetailOpen;

function* handleLoadUIData() {
  try {
    yield put(loadMasterData());
    yield put(loadDiscoverList());
    yield put(loadUserDiscoverList());
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

function* handleOpenModal() {
  const modal = yield select(getModal);
  const isContentDetailOpen = yield select(getIsContentDetailOpen);
  const uploadModal = modal.upload || false;
  const loginModal = modal.login || false;
  const editProfile = modal.edit_profile || false;
  const languageModal = modal.language || false;
  const countryModal = modal.country || false;
  const shareModal = modal.share || false;
  const copyLink = modal.copy_link || false;
  const showMoreModal = modal.show_more_detail || false;
  const reportModal = modal.report_content || false;
  if (uploadModal) {
    yield put(clearUploadError());
    yield put(setModalAction(ModalAction.UPLOAD));
  }
  if (loginModal) {
    if (isContentDetailOpen) yield put(stopScrollTimer());
    yield put(setModalAction(ModalAction.LOGIN));
  }
  if (editProfile) {
    const userDetail = yield select(getUserDetails);
    const editUserObject = {
      name: userDetail.name,
      phone: userDetail.phone,
      countryId: userDetail.countryId,
      languageId: userDetail.languageId,
      gender: userDetail.gender,
      email: userDetail.email,
      age: userDetail.age,
      address: userDetail.address,
    };
    yield put(editUserInfo(editUserObject));
    window.history.pushState(
      "My Account",
      "Discover photos, videos and articles | tymoff",
      `/account`
    );
  }
  if (isContentDetailOpen && (copyLink || shareModal || showMoreModal))
    yield put(stopScrollTimer());
  if (reportModal) yield put(stopScrollTimer());
  if (languageModal) yield put(setModalAction(ModalAction.FILTER));
  if (countryModal && !loginModal)
    yield put(setModalAction(ModalAction.FILTER));
  else {
    const activeCountry = yield select(getActiveCountry);
    yield put(setLoginCountry(activeCountry));
  }
}

function* handleCloseModal() {
  const modal = yield select(getModal);
  const contentAlreadyVisited = yield select(getContentAlreadyVisited);
  const isContentDetailOpen = yield select(getIsContentDetailOpen);
  const uploadModal = modal.upload || false;
  const loginModal = modal.login || false;
  const countryModal = modal.country || false;
  const languageModal = modal.language || false;
  const feedbackModal = modal.feedback || false;
  const commentBox = yield select(getCommentBox);
  if (!countryModal) yield put(clearSearchCountry());
  if (!languageModal) yield put(clearSearchLanguage());
  if (!uploadModal) yield put(clearUpload());
  if (!feedbackModal) yield put(clearFeedback());
  if (!loginModal) {
    if (isContentDetailOpen && !contentAlreadyVisited && !commentBox)
      yield put(startScrollTimer());
  }
  if (!isContentDetailOpen) {
    // yield put(muteVideo());
    yield put(changeVolumeLevel(0.2));
    yield put(newContentVisited());
    yield put(clearAlreadyVisitedContentIds());
  }
}

function* handleShowComment() {
  yield put(stopScrollTimer());
  yield put(loadComment());
}

function* handleHideComment() {
  const contentAlreadyVisited = yield select(getContentAlreadyVisited);
  if (!contentAlreadyVisited) yield put(startScrollTimer());
  yield put(clearComment());
}

function* handleAlertAction() {
  yield put(openModal(ModalType.ALERT));
}

function* handleSetMessage() {
  yield put(openSnackbar());
}

function* handleSetErrorMessage() {
  yield put(openErrorSnackbar());
}

function* handleCloseSnackbar() {
  yield put(clearMessage());
}

function* handleShowInstallApp() {
  yield put(openModal(ModalType.INSTALL_APP));
}

export function* watchUILoad() {
  yield takeEvery(UI.LOAD_UI_DATA, handleLoadUIData);
}

export function* watchOpenModal() {
  yield takeEvery(UI.OPEN_MODAL, handleOpenModal);
}

export function* watchCloseModal() {
  yield takeEvery(UI.CLOSE_MODAL, handleCloseModal);
}

export function* watchAlertAction() {
  yield takeEvery(UI.ALERT_ACTION, handleAlertAction);
}

export function* watchShowComment() {
  yield takeEvery(UI.SHOW_COMMENT, handleShowComment);
}

export function* watchHideComment() {
  yield takeEvery(UI.HIDE_COMMENT, handleHideComment);
}

export function* watchSetMessage() {
  yield takeEvery(UI.SET_MESSAGE, handleSetMessage);
}

export function* watchSetErrorMessage() {
  yield takeEvery(UI.SET_ERROR_MESSAGE, handleSetErrorMessage);
}

export function* watchCloseSnackbar() {
  yield takeEvery(
    [UI.CLOSE_SNACKBAR, UI.CLOSE_ERROR_SNACKBAR],
    handleCloseSnackbar
  );
}

export function* watchShowInstallApp() {
  yield takeEvery(UI.SHOW_INSTALL_APP, handleShowInstallApp);
}
