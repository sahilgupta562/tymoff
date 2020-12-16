import { FOLDER, ADD_FOLDER, RENAME_FOLDER, MOVE_FOLDER, DELETE_FOLDER } from "./action-types";

const loadFolder = () => ({
  type: FOLDER.LOAD
});

const clearFolder = () => ({
  type: FOLDER.CLEAR
});

const setFolder = folder => ({
  type: FOLDER.LOAD_SUCCESS,
  folder
});

const setFolderError = error => ({
  type: FOLDER.LOAD_FAILED,
  error
});

const setSelectedFolder = selectedFolder => ({
  type: FOLDER.SELECTED_FOLDER,
  selectedFolder
});

const setSelectedNodes = selectedNodes => ({
  type: FOLDER.SELECTED_NODES,
  selectedNodes
});

const setMoveFolder = selectedFolder => ({
  type: MOVE_FOLDER.SET_FOLDER_PATH,
  selectedFolder
});

const setMoveNodes = selectedNodes => ({
  type: MOVE_FOLDER.SET_FOLDER_NODES,
  selectedNodes
});

const addFolder = () => ({
  type: ADD_FOLDER.LOAD
});

const renameFolder = () => ({
  type: RENAME_FOLDER.LOAD
});

const moveFolder = () => ({
  type: MOVE_FOLDER.LOAD
});

const deleteFolder = () => ({
  type: DELETE_FOLDER.LOAD
});

const clearAddFolder = () => ({
  type: ADD_FOLDER.CLEAR
});

const clearRenameFolder = () => ({
  type: RENAME_FOLDER.CLEAR
});

const clearMoveFolder = () => ({
  type: MOVE_FOLDER.CLEAR
});

const clearDeleteFolder = () => ({
  type: DELETE_FOLDER.CLEAR
});

const setAddFolderError = error => ({
  type: ADD_FOLDER.LOAD_FAILED,
  error
});

const setRenameFolderError = error => ({
  type: RENAME_FOLDER.LOAD_FAILED,
  error
});

const setMoveFolderError = error => ({
  type: MOVE_FOLDER.LOAD_FAILED,
  error
});

const setDeleteFolderError = error => ({
  type: DELETE_FOLDER.LOAD_FAILED,
  error
});

const setSelectedFiles = selectedFiles => ({
  type: FOLDER.SET_FILES_PATH,
  selectedFiles
});

const deleteFiles = () => ({
  type: DELETE_FOLDER.DELETE_FILE
});

const moveFiles = () => ({
  type: MOVE_FOLDER.MOVE_FILE
});

export {
  loadFolder,
  clearFolder,
  setFolder,
  setFolderError,
  setSelectedFolder,
  setSelectedNodes,
  addFolder,
  renameFolder,
  clearAddFolder,
  clearRenameFolder,
  setAddFolderError,
  setRenameFolderError,
  setMoveFolder,
  setMoveNodes,
  moveFolder,
  clearMoveFolder,
  setMoveFolderError,
  setDeleteFolderError,
  deleteFolder,
  clearDeleteFolder,
  setSelectedFiles,
  deleteFiles,
  moveFiles
};
