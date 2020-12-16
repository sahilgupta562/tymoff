import { SHARE } from "./action-types";

const loadShareLink = () => ({
  type: SHARE.LOAD,
});

const clearShareLink = () => ({
  type: SHARE.CLEAR,
});

const setShareLink = (link) => ({
  type: SHARE.LOAD_SUCCESS,
  link,
});

const setContentShareLink = (contentUrl) => ({
  type: SHARE.SET_CONTENT_URL,
  contentUrl,
});

const setShareLinkError = (error) => ({
  type: SHARE.LOAD_FAILED,
  error,
});

const setShareType = (shareType) => ({
  type: SHARE.SHARE_TYPE,
  shareType,
});

export { loadShareLink, clearShareLink, setShareLink, setShareLinkError, setShareType, setContentShareLink };
