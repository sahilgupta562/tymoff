import React, { PureComponent, Fragment } from "react";
import {
  CountryModal,
  LanguageModal,
  ShareModal,
  LoginModal,
  UploadModal,
  SettingModal,
  EditProfileModal,
  AlertModal,
  NotificationModal,
  UploadNotificationModal,
  FeedbackModal,
  ScrollTimerModal,
  ContentMoreOptions,
  ContentModal,
  CopyLinkModal,
  ReportContentModal,
  ProfileImageOptionModal,
  ViewProfileImageModal,
  ShowMoreDetailModal,
  MessageSnackbar,
  ErrorMessageSnackbar,
  InstallAppModal,
  CameraModal
} from "../../components";
class Modal extends PureComponent {
  render() {
    const {
      shareModal,
      countryModal,
      languageModal,
      loginModal,
      uploadModal,
      settingModal,
      editProfileModal,
      alertModal,
      notificationModal,
      uploadNotificationModal,
      feedbackModal,
      scrollTimerModal,
      moreOptionsModal,
      contentModal,
      copyLinkModal,
      reportContentModal,
      showMoreDetailModal,
      viewProfileImageModal,
      profileImageOptionModal,
      snackbar,
      installAppModal,
      cameraModal,
      errorSnackbar
    } = this.props;
    return (
      <Fragment>
        {countryModal && <CountryModal />}
        {languageModal && <LanguageModal />}
        {shareModal && <ShareModal />}
        {uploadModal && <UploadModal />}
        {settingModal && <SettingModal />}
        {editProfileModal && <EditProfileModal />}
        {alertModal && <AlertModal />}
        {notificationModal && <NotificationModal />}
        {uploadNotificationModal && <UploadNotificationModal />}
        {feedbackModal && <FeedbackModal />}
        {scrollTimerModal && <ScrollTimerModal />}
        {moreOptionsModal && <ContentMoreOptions />}
        {contentModal && <ContentModal />}
        {copyLinkModal && <CopyLinkModal />}
        {reportContentModal && <ReportContentModal />}
        {showMoreDetailModal && <ShowMoreDetailModal />}
        {viewProfileImageModal && <ViewProfileImageModal />}
        {profileImageOptionModal && <ProfileImageOptionModal />}
        {snackbar && <MessageSnackbar />}
        {errorSnackbar && <ErrorMessageSnackbar />}
        {loginModal && <LoginModal />}
        {installAppModal && <InstallAppModal />}
        {cameraModal && <CameraModal />}
      </Fragment>
    );
  }
}

export default Modal;
