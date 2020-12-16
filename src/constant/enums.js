const ContentTypeId = {
  Text: 1,
  Videos: 2,
  Weblink: 3,
  Images: 4
};

const ModalType = {
  LOGIN: "login",
  SHARE: "share",
  NOTIFICATION: "notification",
  UPLOAD_NOTIFICATION: "upload_notification",
  DARK_THEME: "dark_theme",
  COUNTRY: "country",
  LANGUAGE: "language",
  UPLOAD: "upload",
  MENU: "menu",
  SETTING: "setting",
  EDIT_PROFILE: "edit_profile",
  ALERT: "alert",
  FEEDBACK: "feedback",
  SCROLL_TIMER: "scroll_timer",
  MORE_OPTION: "more_option",
  CONTENT_DETAIL: "content_detail",
  COPY_LINK: "copy_link",
  REPORT_CONTENT: "report_content",
  SHOW_MORE_DETAIL: "show_more_detail",
  PROFILE_IMAGE_OPTION: "profile_image_option",
  VIEW_PROFILE_IMAGE: "view_profile_image",
  MESSAGE_SNACKBAR: "message_snackbar",
  INSTALL_APP: "install_app",
  CAMERA: "camera"
};

const ModalAction = {
  FILTER: "filter",
  LOGIN: "login",
  UPLOAD: "upload"
};

const AlertAction = {
  UPLOAD: "upload",
  CLEAR_HISTORY: "clear_history",
  LOGOUT: "logout",
  FEEDBACK_RESPONSE: "feedback_response",
  REMOVE_PROFILE_IMAGE: "remove_profile_image",
  Delete_Post: "delete_post"
};

const UploadTab = {
  IMAGE: "image",
  VIDEO: "video",
  STORY: "story",
  WEB: "web"
};

const UploadStep = {
  DATA: "upload_step",
  LANGUAGE: "language_step",
  GENRE: "genre_step"
};

const UploadModalRootClass = {
  upload_step: "upload-modal",
  language_step: "language-modal",
  genre_step: "genre-modal"
};

const SettingMenu = {
  PROFILE: "profile",
  DARK_THEME: "dark_theme",
  RESTRICTED_MODE: "restricted_mode",
  CONTENT_SCROLL_TIMER: "content_scroll_timer",
  FEEDBACK: "feedback",
  CLEAR_HISTORY: "clear_history",
  LOG_OUT: "log_out"
};

const ContentAction = {
  "my-likes": "like",
  downloads: "download",
  upload: "upload"
};

const ContentUserAction = {
  LIKE: "like",
  UNLIKE: "unLike",
  DOWNLOAD: "download"
};

const ShareType = {
  CONTENT: "content",
  PROFILE_IMAGE: "profile_image"
};

const NotificationType = {
  CONTENT: "CONTENT_TRENDING",
  DISCOVER: "DISCOVER"
};

export { ContentTypeId, ModalType, ModalAction, UploadTab, UploadStep, UploadModalRootClass, AlertAction, SettingMenu, ContentAction, ContentUserAction, ShareType, NotificationType };
