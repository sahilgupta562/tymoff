import { call, takeEvery, put, select } from "redux-saga/effects";
import {
  FOLDER,
  ADD_FOLDER,
  RENAME_FOLDER,
  MOVE_FOLDER,
  DELETE_FOLDER,
  setFolder,
  setFolderError,
  setSelectedNodes,
  loadDocument,
  setAddFolderError,
  loadFolder,
  closeModal,
  clearAddFolder,
  setSelectedFolder,
  clearRenameFolder,
  setRenameFolderError,
  setMoveNodes,
  clearMoveFolder,
  clearDeleteFolder,
  setMoveFolderError,
  setDeleteFolderError
} from "../actions";
import { apiFetchFolder, apiAddFolder, apiRenameFolder, apiMoveFolder, apiDeleteFolder, apiMoveFiles, apiDeleteFiles } from "../../api";
import { getAllActiveNodes } from "../../core";
import { ModalType } from "../../constant";

const getSelectedCompany = state => state.company.selectedCompany;
const getSelectedFolder = state => state.folder.selectedFolder;
const getSelectedFiles = state => state.folder.selectedFiles;
const getAddFolderForm = state => state.forms.addFolder.form;
const getRenameFolderForm = state => state.forms.renameFolder.form;
const getSelectedMoveFolder = state => state.forms.moveFolder.moveSelectedFolder;

function* handleFolderLoad() {
  try {
    const selectedCompany = yield select(getSelectedCompany);
    const response = yield call(apiFetchFolder, selectedCompany.companyID);
    yield put(setFolder(response));
  } catch (error) {
    yield put(setFolderError(error.toString()));
  }
}

function* handleFolderChange() {
  const selectedFolder = yield select(getSelectedFolder);
  const activeNodes = getAllActiveNodes(selectedFolder);
  yield put(setSelectedNodes(activeNodes));
  yield put(loadDocument());
}

function* handleMoveFolderChange() {
  const selectedFolder = yield select(getSelectedMoveFolder);
  const activeNodes = getAllActiveNodes(selectedFolder);
  yield put(setMoveNodes(activeNodes));
}

function* handleAddFolder() {
  try {
    const form = yield select(getAddFolderForm);
    if (form) {
      const selectedFolder = yield select(getSelectedFolder);
      const path = `${selectedFolder}/${form}`;
      yield call(apiAddFolder, path);
      yield put(loadFolder());
      yield put(closeModal(ModalType.ADD_FOLDER));
      yield put(clearAddFolder());
    } else yield put(setAddFolderError("Enter folder name"));
  } catch (error) {
    yield put(setAddFolderError(error.toString()));
  }
}

function* handleRenameFolder() {
  try {
    const form = yield select(getRenameFolderForm);
    if (form) {
      const selectedFolder = yield select(getSelectedFolder);
      yield call(apiRenameFolder, selectedFolder, form);
      yield put(loadFolder());
      const currentFolder = selectedFolder.split("/").pop();
      const pattern = new RegExp("(\\b" + currentFolder + "\\b)(?!.*\\b\\1\\b)", "i");
      const newPath = selectedFolder.replace(pattern, form);
      yield put(setSelectedFolder(newPath));
      yield put(closeModal(ModalType.RENAME_FOLDER));
      yield put(clearRenameFolder());
    } else yield put(setRenameFolderError("Enter folder name"));
  } catch (error) {
    yield put(setRenameFolderError(error.toString()));
  }
}

function* handleMoveFolder() {
  try {
    const selectedMoveFolder = yield select(getSelectedMoveFolder);
    if (selectedMoveFolder) {
      const selectedFolder = yield select(getSelectedFolder);
      yield call(apiMoveFolder, selectedFolder, selectedMoveFolder);
      yield put(loadFolder());
      yield put(setSelectedFolder(selectedMoveFolder));
      yield put(closeModal(ModalType.MOVE_FILE_FOLDER));
      yield put(clearMoveFolder());
    } else yield put(setMoveFolderError("Select folder"));
  } catch (error) {
    yield put(setMoveFolderError(error.toString()));
  }
}

function* handleDeleteFolder() {
  try {
    const selectedFolder = yield select(getSelectedFolder);
    const selectedCompany = yield select(getSelectedCompany);
    yield call(apiDeleteFolder, selectedFolder);
    yield put(loadFolder());
    yield put(setSelectedFolder(selectedCompany.companyID));
    yield put(closeModal(ModalType.DELETE_FILE_FOLDER));
    yield put(clearDeleteFolder());
  } catch (error) {
    yield put(setDeleteFolderError(error.toString()));
  }
}

function* handleMoveFiles() {
  try {
    const selectedFiles = yield select(getSelectedFiles);
    const selectedMoveFolder = yield select(getSelectedMoveFolder);
    if (selectedMoveFolder && !!selectedFiles.length) {
      yield call(apiMoveFiles, selectedFiles, selectedMoveFolder);
      yield put(loadDocument());
      yield put(closeModal(ModalType.MOVE_FILE_FOLDER));
      yield put(clearMoveFolder());
    } else {
      if (!selectedMoveFolder) {
        yield put(setMoveFolderError("Select folder"));
      } else if (!!!selectedFiles.length) {
        yield put(setMoveFolderError("Select files"));
      }
    }
  } catch (error) {
    yield put(setMoveFolderError(error.toString()));
  }
}

function* handleDeleteFiles() {
  try {
    const selectedFiles = yield select(getSelectedFiles);
    if (!!selectedFiles.length) {
      yield call(apiDeleteFiles, selectedFiles);
      yield put(loadDocument());
      yield put(closeModal(ModalType.DELETE_FILE_FOLDER));
    } else {
      yield put(setDeleteFolderError("Select files"));
    }
  } catch (error) {
    yield put(setDeleteFolderError(error.toString()));
  }
}

export function* watchFolderLoad() {
  yield takeEvery(FOLDER.LOAD, handleFolderLoad);
}

export function* watchFolderChange() {
  yield takeEvery(FOLDER.SELECTED_FOLDER, handleFolderChange);
}

export function* watchMoveFolderChange() {
  yield takeEvery(MOVE_FOLDER.SET_FOLDER_PATH, handleMoveFolderChange);
}

export function* watchAddFolder() {
  yield takeEvery(ADD_FOLDER.LOAD, handleAddFolder);
}

export function* watchRenameFolder() {
  yield takeEvery(RENAME_FOLDER.LOAD, handleRenameFolder);
}

export function* watchMoveFolder() {
  yield takeEvery(MOVE_FOLDER.LOAD, handleMoveFolder);
}

export function* watchDeleteFolder() {
  yield takeEvery(DELETE_FOLDER.LOAD, handleDeleteFolder);
}

export function* watchMoveFiles() {
  yield takeEvery(MOVE_FOLDER.MOVE_FILE, handleMoveFiles);
}

export function* watchDeleteFiles() {
  yield takeEvery(DELETE_FOLDER.DELETE_FILE, handleDeleteFiles);
}
