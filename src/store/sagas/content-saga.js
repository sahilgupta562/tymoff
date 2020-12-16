import { call, put, select, takeEvery } from "redux-saga/effects";
import { indexOf, isEmpty, findIndex } from "lodash";
import { isServer } from "../";
import {
  CONTENT,
  setContent,
  setContentError,
  resetContentPage,
  loadContent,
  clearContent,
  setTotalPageChange,
  setContentPageChange,
  setContentAction,
  setActiveContent,
  setTotalContent,
  startScrollTimer,
  stopScrollTimer,
  setLoadFromGrid,
  closeModal,
  setActiveContentIndex,
  refreshContent,
  setActiveContentUrl,
  clearActiveContentUrl,
  setCurrentContentScrollTime,
  alreadyVisitedContent,
  newContentVisited,
  setAlreadyVisitedContentIds,
  loadContentFromCache,
  loadContentFromApi,
  loadSsr,
  loadSession,
  loadWebsite,
  setMessage,
  setErrorMessage,
} from "../actions";
import { ContentTypeId, ModalType, ContentUserAction, ContentAction, SuccessMessage, ErrorMessage } from "../../constant";
import { getFileExtension, getFileNameFromUrl, loadCacheData, setCacheData, clearCache } from "../../core";
import { apiFetchContent, apiFetchActionContent, apiContentUserAction, apiFetchContentDetail, apiReportHideContent, apiDownloadFile, apiDeleteContent, URL } from "../../api";

const getPage = (state) => state.content.currentPage;
const getTotalPage = (state) => state.content.totalPage;
const getPerPage = (state) => state.content.itemsPerPage;
const getTotalContentCount = (state) => state.content.totalContent;
const getFilterObject = (state) => state.content.filter;
const getToken = (state) => state.auth.token;
const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUser = (state) => state.auth.data;
const getContentAction = (state) => state.content.contentAction;
const getContentUserAction = (state) => state.content.contentUserAction;
const getActiveContentIndex = (state) => state.content.activeContentIndex;
const getActiveContent = (state) => state.content.activeContent;
const getActiveContentUrl = (state) => state.content.activeContentUrl;
const getActiveContentId = (state) => state.content.activeContentId;
const getContents = (state) => state.content.data;
const getReportId = (state) => state.content.reportId;
const getLoading = (state) => state.content.isLoading;
const getIsContentDetailOpen = (state) => state.content.isContentDetailOpen;
const getContentScrollTime = (state) => state.setting.contentScrollTime;
const getAlreadyVisitedContentIds = (state) => state.content.alreadyVisitedContentIds;
const getContentAlreadyVisited = (state) => state.content.contentAlreadyVisited;
const getLoadFromSession = (state) => state.content.loadFromSession;

function* handleContentLoad() {
  try {
    const perPage = yield select(getPerPage);
    const initialState = !isServer ? window.__PRELOADED_STATE__ : {};
    const content = !isEmpty(initialState) ? initialState.content : null;
    let loadFromServer = false;
    if (content) {
      const totalContent = content.loadFromSession ? 12 : perPage;
      loadFromServer = !!(content.data.length === totalContent);
    }
    if (loadFromServer) {
      yield put(loadSsr());
      clearCache();
      yield put(resetContentPage());
      yield put(clearContent());
      yield put(setContent(content.data));
      yield put(setTotalContent(content.data.length));
      yield put(setTotalPageChange(content.loadFromSession ? content.currentPage : content.currentPage + 1));
      content.loadFromSession ? yield put(loadSession()) : yield put(loadWebsite());
      if (!content.loadFromSession) yield put(loadContent());
      delete window.__PRELOADED_STATE__;
    } else {
      const loadFromSession = yield select(getLoadFromSession);
      const currentPage = yield select(getPage);
      const filter = yield select(getFilterObject);
      const token = yield select(getToken);
      const isLoggedIn = yield select(getIsLoggedIn);
      const url = URL.CONTENT_CACHE_URL(currentPage, perPage);
      let userId = "";
      if (isLoggedIn) {
        const user = yield select(getUser);
        userId = user.id;
      }
      const cacheData = !filter.discoverId ? loadCacheData(url, filter, userId) : null;
      if (!isEmpty(cacheData) && !loadFromSession) {
        yield put(loadContentFromCache());
        yield put(setTotalContent(cacheData.totalElements));
        yield put(setTotalPageChange(cacheData.totalPage));
        yield put(setContent(cacheData.data));
      } else {
        const loadedContents = yield select(getContents);
        yield put(loadContentFromApi());
        const contents = yield call(apiFetchContent, filter, currentPage, loadFromSession ? 12 : perPage, token);
        !filter.discoverId &&
          !loadFromSession &&
          setCacheData(url, filter, userId, contents.data, loadedContents.length + contents.data.length, contents.data.length < perPage ? currentPage : currentPage + 1);
        yield put(setTotalContent(loadedContents.length + contents.data.length));
        yield put(setTotalPageChange(loadFromSession || contents.data.length < perPage ? currentPage : currentPage + 1));
        yield put(setContent(contents.data));
      }
    }
  } catch (error) {
    yield put(setContentError(error.toString()));
  }
}

// function* handleSessionLoad() {
//   try {
//     const initialState = !isServer ? window.__PRELOADED_STATE__ : {};
//     if (!isEmpty(initialState)) {
//       const { content } = initialState;
//       yield put(setContent(content.data));
//       delete window.__PRELOADED_STATE__;
//     } else {
//       const filter = yield select(getFilterObject);
//       yield put(loadContentFromApi());
//       const contents = yield call(apiFetchContent, filter, 0, 12, "");
//       yield put(setContent(contents.data));
//     }
//     yield put(setTotalContent(12));
//     yield put(setTotalPageChange(0));
//   } catch (error) {
//     yield put(setContentError(error.toString()));
//   }
// }

function* handleFilterChange() {
  try {
    const contentAction = yield select(getContentAction);
    if (!contentAction) {
      yield put(resetContentPage());
      yield put(clearContent());
      yield put(loadContent());
    }
  } catch (error) {
    yield put(setContentError(error.toString()));
  }
}

function* handleDeleteContent() {
  try {
    const token = yield select(getToken);
    const activeContent = yield select(getActiveContent);
    const response = yield call(apiDeleteContent, activeContent.id, token);
    if (response.success) {
      const contents = yield select(getContents);
      const activeContentIndex = findIndex(contents, { id: activeContent.id });
      contents.splice(activeContentIndex, 1);
      yield put(refreshContent(contents));
      yield put(setMessage(SuccessMessage.DELETE_POST));
    }
  } catch (error) {
    yield put(setContentError(error.toString()));
    yield put(setErrorMessage(ErrorMessage.API_RESPONSE_ERROR));
  }
}

function* handleContentActionChange() {
  try {
    const currentPage = yield select(getPage);
    const perPage = yield select(getPerPage);
    const token = yield select(getToken);
    const contentAction = yield select(getContentAction);
    const loadedContents = yield select(getContents);
    const sort = contentAction === ContentAction.upload ? "viewCount" : "likeCount";
    const contents = yield call(apiFetchActionContent, contentAction, currentPage, perPage, token, sort);
    yield put(setTotalContent(loadedContents.length + contents.data.length));
    yield put(setTotalPageChange(contents.data.length < perPage ? currentPage : currentPage + 1));
    yield put(setContent(contents.data || 0));
  } catch (error) {
    yield put(setContentError(error.toString()));
  }
}

function* handleContentUserActionChange() {
  try {
    const contentUserAction = yield select(getContentUserAction);
    const activeContent = yield select(getActiveContent);
    const token = yield select(getToken);
    // const contentAction = yield select(getContentAction);
    // if (contentAction !== ContentAction.upload && contentUserAction === ContentUserAction.UNLIKE) {
    //   const totalContent = yield select(getTotalContentCount);
    //   const contents = yield select(getContents);
    //   const activeContentIndex = yield select(getActiveContentIndex);
    //   contents.splice(activeContentIndex, 1);
    //   yield put(refreshContent(contents));
    //   yield put(setTotalContent(totalContent - 1));
    //   yield put(setActiveContentIndex(activeContentIndex));
    // }
    const response = yield call(apiContentUserAction, contentUserAction, activeContent.id, token);
    if (response.success) yield put(setActiveContent(response.data));
  } catch (error) {
    yield put(setContentError(error.toString()));
  }
}

function* handleContentIndexChange() {
  yield put(closeModal(ModalType.MORE_OPTION));
  const alreadyVisitedContentIds = yield select(getAlreadyVisitedContentIds);
  const contentScrollTime = yield select(getContentScrollTime);
  const currentPage = yield select(getPage);
  const totalPage = yield select(getTotalPage);
  const activeContentIndex = yield select(getActiveContentIndex);
  const contents = yield select(getContents);
  const isLoading = yield select(getLoading);
  const contentAction = yield select(getContentAction);
  const content = contents[activeContentIndex];
  yield put(setLoadFromGrid());
  yield put(setActiveContent(content));
  if (content.typeId === ContentTypeId.Videos) {
    if (contentScrollTime > 0) yield put(setCurrentContentScrollTime(7000));
    else {
      yield put(stopScrollTimer());
      yield put(setCurrentContentScrollTime(0));
    }
  } else {
    if (contentScrollTime > 0) yield put(setCurrentContentScrollTime(contentScrollTime * 1000));
    else {
      yield put(stopScrollTimer());
      yield put(setCurrentContentScrollTime(0));
    }
  }
  if (indexOf(alreadyVisitedContentIds, content.id) === -1) {
    yield put(newContentVisited());
    yield put(setAlreadyVisitedContentIds(content.id));
    content.typeId === ContentTypeId.Videos ? yield put(stopScrollTimer()) : yield put(startScrollTimer());
  } else {
    yield put(alreadyVisitedContent());
    yield put(stopScrollTimer());
  }
  if (content.typeId === ContentTypeId.Images || content.typeId === ContentTypeId.Videos) {
    const contentUrl = content.contentUrl[0];
    yield put(setActiveContentUrl(contentUrl));
  } else yield put(clearActiveContentUrl());
  const length = contents.length;
  if (activeContentIndex === length - 5) {
    if (!isLoading && currentPage < totalPage) {
      yield put(setContentPageChange(currentPage + 1));
      contentAction ? yield put(setContentAction(contentAction)) : yield put(loadContent());
    }
  }
}

function* handleLoadContentDetail() {
  try {
    const initialState = !isServer ? window.__PRELOADED_STATE__ : {};
    if (!isEmpty(initialState)) {
      const { content } = initialState;
      yield put(setActiveContent(content.activeContent));
      if (content.loadFromSession) yield put(loadSession());
      else {
        yield put(loadContent());
        yield put(loadWebsite());
      }
      delete window.__PRELOADED_STATE__;
    } else {
      const activeContentId = yield select(getActiveContentId);
      const loadFromSession = yield select(getLoadFromSession);
      const token = yield select(getToken);
      const response = yield call(apiFetchContentDetail, activeContentId, token);
      yield put(setActiveContent(response.data));
      if (!loadFromSession) yield put(loadContent());
    }
    yield put(setActiveContentIndex(0));
  } catch (error) {
    yield put(setContentError(error ? error.toString() : "Something went wrong!"));
  }
}

function* handleHideContent() {
  try {
    const totalContent = yield select(getTotalContentCount);
    const contents = yield select(getContents);
    const activeContent = yield select(getActiveContent);
    const activeContentIndex = yield select(getActiveContentIndex);
    const token = yield select(getToken);
    const data = { contentId: activeContent.id, reportId: 10, reportText: "" };
    const response = yield call(apiReportHideContent, data, token);
    if (response.success) {
      contents.splice(activeContentIndex, 1);
      yield put(refreshContent(contents));
      yield put(setTotalContent(totalContent - 1));
      yield put(setActiveContentIndex(activeContentIndex));
      yield put(setMessage(SuccessMessage.HIDE_POST));
    }
  } catch (error) {
    yield put(setContentError(error.toString()));
    yield put(setErrorMessage(error.message));
  }
}

function* handleReportContent() {
  try {
    const reportId = yield select(getReportId);
    if (!!reportId) {
      yield put(closeModal(ModalType.REPORT_CONTENT));
      const contentAlreadyVisited = yield select(getContentAlreadyVisited);
      const isContentDetailOpen = yield select(getIsContentDetailOpen);
      if (isContentDetailOpen && !contentAlreadyVisited) yield put(startScrollTimer());
      const totalContent = yield select(getTotalContentCount);
      const contents = yield select(getContents);
      const activeContent = yield select(getActiveContent);
      const activeContentIndex = yield select(getActiveContentIndex);
      const token = yield select(getToken);
      const data = { contentId: activeContent.id, reportId, reportText: "" };
      const response = yield call(apiReportHideContent, data, token);
      if (response.success) {
        contents.splice(activeContentIndex, 1);
        yield put(refreshContent(contents));
        yield put(setTotalContent(totalContent - 1));
        yield put(setActiveContentIndex(activeContentIndex));
        yield put(setMessage(SuccessMessage.REPORT_POST));
      }
    } else yield put(setContentError("Select a reason"));
  } catch (error) {
    yield put(setContentError(error.toString()));
    yield put(setErrorMessage(error.message));
  }
}

function* handleContentDownload() {
  try {
    const activeContent = yield select(getActiveContent);
    const activeContentUrl = yield select(getActiveContentUrl);
    const token = yield select(getToken);
    if (activeContent.typeId === ContentTypeId.Images || activeContent.typeId === ContentTypeId.Videos) {
      const url = activeContentUrl.url;
      const fileName = `${getFileNameFromUrl(url)}.${getFileExtension(url)}`;
      const response = yield call(apiDownloadFile, activeContent.id, activeContentUrl.id, fileName, token);
      if (response) yield call(apiContentUserAction, ContentUserAction.DOWNLOAD, activeContent.id, token);
    }
  } catch (error) {
    yield put(setContentError(error.toString()));
  }
}

export function* watchContent() {
  yield takeEvery(CONTENT.LOAD, handleContentLoad);
}

// export function* watchSessionLoad() {
//   yield takeEvery(CONTENT.LOAD_SESSION, handleSessionLoad);
// }

export function* watchFilterChange() {
  yield takeEvery(CONTENT.FILTER_CHANGE, handleFilterChange);
}

export function* watchClearFilter() {
  yield takeEvery(CONTENT.FILTER_RESET, handleFilterChange);
}

export function* watchContentActionChange() {
  yield takeEvery(CONTENT.ACTION_CHANGE, handleContentActionChange);
}

export function* watchContentUserActionChange() {
  yield takeEvery(CONTENT.USER_ACTION_CHANGE, handleContentUserActionChange);
}

export function* watchContentIndexChange() {
  yield takeEvery(CONTENT.ACTIVE_CONTENT_INDEX, handleContentIndexChange);
}

export function* watchLoadContentDetail() {
  yield takeEvery(CONTENT.LOAD_CONTENT_DETAIL, handleLoadContentDetail);
}

export function* watchHideContent() {
  yield takeEvery(CONTENT.HIDE_CONTENT, handleHideContent);
}

export function* watchReportContent() {
  yield takeEvery(CONTENT.REPORT_CONTENT, handleReportContent);
}

export function* watchContentDownload() {
  yield takeEvery(CONTENT.CONTENT_DOWNLOAD, handleContentDownload);
}

export function* watchDeleteContent() {
  yield takeEvery(CONTENT.DELETE_CONTENT, handleDeleteContent);
}
