import { http } from "../core";
import { URL } from "./_urls.js";

const apiFetchDocument = async path => {
  const response = await http.post(URL.LOAD_DOCUMENT_API(), { path });
  if (response && response.state >= 400) {
    throw new Error(response.statusText);
  }
  return response || null;
};

const apiMoveFiles = async (files, newPath) => {
  const response = await http.post(URL.MOVE_FILES_API(), { files, newPath });
  if (response && response.state >= 400) {
    throw new Error(response.statusText);
  }
  return response || null;
};

const apiDeleteFiles = async files => {
  const response = await http.post(URL.DELETE_FILES_API(), { files });
  if (response && response.state >= 400) {
    throw new Error(response.statusText);
  }
  return response || null;
};

export { apiFetchDocument, apiMoveFiles, apiDeleteFiles };
