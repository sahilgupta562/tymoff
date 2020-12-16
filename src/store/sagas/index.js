import { all, fork } from "redux-saga/effects";
import { watchFolderLoad, watchFolderChange, watchAddFolder, watchRenameFolder, watchMoveFolderChange, watchMoveFolder, watchDeleteFolder, watchMoveFiles, watchDeleteFiles } from "./folder-saga";
import { watchLogin } from "./auth-saga";
import { watchCompanyLoad, watchCompanyChange } from "./company-saga";
import { watchDocumentLoad } from "./document-saga";
export default function* rootSaga() {
  yield all([
    fork(watchFolderLoad),
    fork(watchLogin),
    fork(watchCompanyLoad),
    fork(watchDocumentLoad),
    fork(watchFolderChange),
    fork(watchCompanyChange),
    fork(watchAddFolder),
    fork(watchRenameFolder),
    fork(watchMoveFolderChange),
    fork(watchMoveFolder),
    fork(watchDeleteFolder),
    fork(watchMoveFiles),
    fork(watchDeleteFiles)
  ]);
}
