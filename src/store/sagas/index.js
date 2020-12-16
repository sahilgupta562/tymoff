import { all, fork } from "redux-saga/effects";
import { watchAuthSuccess, watchSendOtp, watchValidateOtp, watchUpdateProfile, watchChangeProfileImage, watchRemoveProfile, watchRefreshProfile } from "./auth-saga";
import {
  watchContent,
  watchFilterChange,
  watchContentActionChange,
  watchContentIndexChange,
  watchContentUserActionChange,
  watchLoadContentDetail,
  watchHideContent,
  watchReportContent,
  watchContentDownload,
  watchClearFilter,
  watchDeleteContent
} from "./content-saga";
import { watchSearch } from "./search-saga";
import { watchDiscoverList, watchUserDiscoverList } from "./discover-saga";
import { watchSearchLoad } from "./share-saga";
import { watchMasterLoad } from "./master-saga";
import {
  watchUILoad,
  watchOpenModal,
  watchCloseModal,
  watchAlertAction,
  watchShowComment,
  watchHideComment,
  watchSetMessage,
  watchCloseSnackbar,
  watchShowInstallApp,
  watchSetErrorMessage
} from "./ui-saga";
import { watchClearHistory, watchLogout, watchRestrictedMode } from "./setting-saga";
import { watchSendFeedback } from "./feedback-saga";
import { watchLoadNotifications } from "./notification-saga";
import { watchLoadComments, watchAddComments } from "./comment-saga";
import { watchValidateUpload, watchValidateLanguage, watchPublishUpload, watchUploadContentList, watchUploadFiles, watchClearContent, watchLoadMetaDetail } from "./upload-saga";
import { watchSendContact } from "./contact-saga";
export default function* rootSaga() {
  yield all([
    fork(watchAuthSuccess),
    fork(watchContent),
    fork(watchSearch),
    fork(watchFilterChange),
    fork(watchDiscoverList),
    fork(watchUserDiscoverList),
    fork(watchSearchLoad),
    fork(watchSendOtp),
    fork(watchValidateOtp),
    fork(watchMasterLoad),
    fork(watchUILoad),
    fork(watchContentActionChange),
    fork(watchValidateUpload),
    fork(watchValidateLanguage),
    fork(watchOpenModal),
    fork(watchCloseModal),
    fork(watchPublishUpload),
    fork(watchUploadContentList),
    fork(watchUploadFiles),
    fork(watchContentIndexChange),
    fork(watchAlertAction),
    fork(watchClearContent),
    fork(watchClearHistory),
    fork(watchLogout),
    fork(watchSendFeedback),
    fork(watchLoadNotifications),
    fork(watchShowComment),
    fork(watchHideComment),
    fork(watchLoadComments),
    fork(watchContentUserActionChange),
    fork(watchAddComments),
    fork(watchLoadContentDetail),
    fork(watchHideContent),
    fork(watchReportContent),
    fork(watchContentDownload),
    fork(watchUpdateProfile),
    fork(watchChangeProfileImage),
    fork(watchRemoveProfile),
    fork(watchRestrictedMode),
    fork(watchSetMessage),
    fork(watchCloseSnackbar),
    fork(watchClearFilter),
    fork(watchDeleteContent),
    fork(watchShowInstallApp),
    fork(watchLoadMetaDetail),
    fork(watchRefreshProfile),
    fork(watchSetErrorMessage),
    fork(watchSendContact),
  ]);
}
