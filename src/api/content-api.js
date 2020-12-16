import { http, headerOptions, fileDownloadHeaderOptions } from "../core";
import { setTotalContent, setTotalPageChange, setContent, clearContent, setActiveContent, loadSession, loadWebsite, setActiveContentIndex } from "../store";
import { URL } from "./_urls.js";
import { saveAs } from "file-saver";
import { isEmpty,get } from "lodash";

const apiFetchContentOnServer = (filterObject, currentPage, perPage, token, store, url, sessionEnabled) => {
  return http
    .post(URL.CONTENT_API(currentPage, perPage), filterObject, headerOptions(token))
    .then(function(response) {
      if (response.success) {
        const totalPage = url.indexOf("/rm") > -1 ? 0 : Math.floor(response.totalElements / perPage) || 0;
        const totalElements = url.indexOf("/rm") > -1 ? 12 : response.totalElements || response.data.length;
        store.dispatch(clearContent());
        store.dispatch(setContent(response.data));
        store.dispatch(setTotalContent(totalElements));
        store.dispatch(setTotalPageChange(totalPage));
        sessionEnabled ? store.dispatch(loadSession()) : store.dispatch(loadWebsite());
        return true;
      }
      return false;
    })
    .catch(error => {
      sessionEnabled ? store.dispatch(loadSession()) : store.dispatch(loadWebsite());
      store.dispatch(setTotalContent(0));
      store.dispatch(setTotalPageChange(0));
      store.dispatch(setContent([]));
      return false;
    });
};

const apiFetchContentDetailOnServer = (contentId, token, store, sessionEnabled) => {
  return http
    .get(URL.CONTENT_DETAIL_API(contentId), headerOptions(token))
    .then(function(response) {
      if (response.success) {
        sessionEnabled ? store.dispatch(loadSession()) : store.dispatch(loadWebsite());
        store.dispatch(setContent([response.data]));
        store.dispatch(setActiveContentIndex(0));
        store.dispatch(setActiveContent(response.data));
        return !isEmpty(response.data) ? true : false;
      }
      return false;
    })
    .catch(error => {
      sessionEnabled ? store.dispatch(loadSession()) : store.dispatch(loadWebsite());
      store.dispatch(setActiveContent({}));
      return false;
    });
};

const apiFetchContent = async (filterObject, currentPage, perPage, token) => {
  const response = await http.post(URL.CONTENT_API(currentPage, perPage), filterObject, headerOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

const apiFetchActionContent = async (action, currentPage, perPage, token, sort) => {
  const response = await http.get(URL.CONTENT_USER_ACTION_API(action, currentPage, perPage, sort), headerOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

const apiContentUserAction = async (action, contentId, token) => {
  const response = await http.put(URL.CONTENT_ACTION_API(action, contentId), {}, headerOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

const apiFetchContentDetail = async (contentId, token) => {
  const response = await http.get(URL.CONTENT_DETAIL_API(contentId), headerOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

const apiReportHideContent = async (data, token) => {
  const response = await http.put(URL.REPORT_HIDE_API(), data, headerOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

const apiDownloadFile = async (contentId, urlId, fileName, token) => {
  const response = await http.get(URL.CONTENT_DOWNLOAD_API(contentId, urlId), fileDownloadHeaderOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  const blob = new Blob([response], { type: "application/octet-stream" });
  saveAs(blob, fileName);
  return true;
};

const apiDeleteContent = async (contentId, token) => {
  const response = await http.delete(URL.DELETE_CONTENT_API(contentId), headerOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

export {
  apiFetchContent,
  apiFetchActionContent,
  apiContentUserAction,
  apiFetchContentDetail,
  apiReportHideContent,
  apiDownloadFile,
  apiFetchContentOnServer,
  apiFetchContentDetailOnServer,
  apiDeleteContent
};
