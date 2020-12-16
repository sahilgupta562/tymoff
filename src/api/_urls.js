import { CONFIG } from "./../config";

export const URL = {
  GET_WEB_METADATA: () => `https://api.algorithmia.com/v1/web/algo/outofstep/MegaAnalyzeURL/0.1.6`,
  COUNTRY_API: () => `https://forapp.live/IpPoolAPI/Request`,
  FIREBASE_API: () => `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyAsvvbXCNt1rRX-UwkW4zmhG9EJFtkSH2Q`,
  QRCODE_API: () => `${CONFIG.API_URL}/user/QR/code`,
  SEND_OTP_API: () => `${CONFIG.API_URL}/user/otp`,
  VEALIDATE_OTP_API: () => `${CONFIG.API_URL}/user/otp/validate`,
  SETTING_API: () => `${CONFIG.API_URL}/user/settings`,
  LOGOUT_API: () => `${CONFIG.API_URL}/user/logout`,
  PROFILE_API: () => `${CONFIG.API_URL}/user/profile?timestamp=${new Date().getTime()}`,
  PROFILE_IMAGE_API: () => `${CONFIG.API_URL}/user/profile/image`,
  META_API: () => `${CONFIG.API_URL}/data?timestamp=${new Date().getTime()}`,
  COMMENT_PUT_API: () => `${CONFIG.API_URL}/data/comment`,
  ACTION_PUT_API: () => `${CONFIG.API_URL}/data/action`,
  UPLOAD_DATA_API: () => `${CONFIG.API_URL}/data/content/upload`,
  FEEDBACK_API: () => `${CONFIG.API_URL}/data/feedback`,
  DISCOVER_OPTION_API: () => `${CONFIG.API_URL}/data/discover/size/3?timestamp=${new Date().getTime()}`,
  USER_DISCOVER_API: () => `${CONFIG.API_URL}/data/user/discover/size/2?timestamp=${new Date().getTime()}`,
  REPORT_HIDE_API: () => `${CONFIG.API_URL}/data/content/report/hide`,
  NOTIFICATION_API: () => `${CONFIG.API_URL}/data/content/notifications/all`,
  SEARCH_HINT_API: (searchHint, page, perPage) => `${CONFIG.API_URL}/data/content/search/hint/${searchHint}?page=${page || 0}&size=${perPage || 10}`,
  CONTENT_API: (nextPage, perPage) => `${CONFIG.API_URL}/data/content?page=${nextPage || 0}&size=${perPage || 10}&timestamp=${new Date().getTime()}`,
  CONTENT_CACHE_URL: (nextPage, perPage) => `${CONFIG.API_URL}/data/content?page=${nextPage || 0}&size=${perPage || 10}`,
  CONTENT_ACTION_API: (action, contentId) => `${CONFIG.API_URL}/data/action/${action}/content/${contentId}`,
  CONTENT_DOWNLOAD_API: (contentId, urlId) => `${CONFIG.API_URL}/data/action/download/content/${contentId}/url/${urlId}`,
  CONTENT_USER_ACTION_API: (action, page, perPage, sort) =>
    `${CONFIG.API_URL}/data/action/${action}/user/content?page=${page}&size=${perPage}&sort=${sort || "likeCount"}&timestamp=${new Date().getTime()}`,
  UPLOAD_FILES_API: contentId => `${CONFIG.API_URL}/data/content/${contentId}/upload`,
  COMMENT_LIST_API: contentId => `${CONFIG.API_URL}/data/comment/content/${contentId}?timestamp=${new Date().getTime()}`,
  DELETE_CONTENT_API: contentId => `${CONFIG.API_URL}/data/content/${contentId}`,
  CONTENT_DETAIL_API: contentId => `${CONFIG.API_URL}/data/content/${contentId}`,
  CLEAR_HISTORY_API: () => `${CONFIG.API_URL}/data/content/history/clean?isVerified=true`,
  CONTACT_API: () => `${CONFIG.API_URL}/user/contact`,
};
