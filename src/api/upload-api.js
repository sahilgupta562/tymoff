import { get } from "lodash";
import { http, headerOptions, fileHeaderOptions, metaHeaderOptions } from "../core";
import { URL } from "./_urls.js";

const apiUploadContentDataList = async (dataList, token) => {
  const response = await http.post(URL.UPLOAD_DATA_API(), { dataList }, headerOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

const apiUploadFiles = async (contentId, formData, token) => {
  const response = await http.post(URL.UPLOAD_FILES_API(contentId), formData, fileHeaderOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

const apiMetaDetail = async url => {
  const response = await http.post(URL.GET_WEB_METADATA(), JSON.stringify(url), metaHeaderOptions());
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

export { apiUploadContentDataList, apiUploadFiles, apiMetaDetail };
