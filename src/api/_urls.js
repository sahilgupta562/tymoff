import { CONFIG } from "./../config";

export const URL = {
  FILETREE_API: () => `${CONFIG.API_URL}/manage/getFileTree`,
  LOGIN_API: () => `${CONFIG.API_URL}/auth/login`,
  COMPANY_LIST_API: () => `${CONFIG.API_URL}/admin/getCompanyList`,
  LOAD_DOCUMENT_API: () => `${CONFIG.API_URL}/manage/loadResData`,
  ADD_FOLDER_API: () => `${CONFIG.API_URL}/manage/newFolder`,
  RENAME_FOLDER_API: () => `${CONFIG.API_URL}/manage/renameFolder`,
  DELETE_FOLDER_API: () => `${CONFIG.API_URL}/manage/deleteFolder`,
  MOVE_FOLDER_API: () => `${CONFIG.API_URL}/manage/moveFolder`,
  MOVE_FILES_API: () => `${CONFIG.API_URL}/manage/moveObjects`,
  DELETE_FILES_API: () => `${CONFIG.API_URL}/manage/deleteObjects`
};
