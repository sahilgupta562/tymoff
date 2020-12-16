import { http } from "../core";
import { URL } from "./_urls.js";

const apiFetchFolder = async legalName => {
  const response = await http.post(URL.FILETREE_API(), { legalName });
  if (response && response.state >= 400) {
    throw new Error(response.statusText);
  }
  return response || null;
};

const apiAddFolder = async path => {
  const response = await http.post(URL.ADD_FOLDER_API(), { path });
  if (response && response.state >= 400) {
    throw new Error(response.statusText);
  }
  return response || null;
};

const apiRenameFolder = async (path, newName) => {
  const response = await http.post(URL.RENAME_FOLDER_API(), { path, newName });
  if (response && response.state >= 400) {
    throw new Error(response.statusText);
  }
  return response || null;
};

const apiMoveFolder = async (path, newPath) => {
  const response = await http.post(URL.MOVE_FOLDER_API(), { path, newPath });
  if (response && response.state >= 400) {
    throw new Error(response.statusText);
  }
  return response || null;
};

const apiDeleteFolder = async path => {
  const response = await http.post(URL.DELETE_FOLDER_API(), { path });
  if (response && response.state >= 400) {
    throw new Error(response.statusText);
  }
  return response || null;
};

export { apiFetchFolder, apiAddFolder, apiRenameFolder, apiMoveFolder, apiDeleteFolder };
