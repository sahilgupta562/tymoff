import { UPLOAD } from "./action-types";

const clearUpload = () => ({
  type: UPLOAD.CLEAR
});

const clearUploadPreviewFiles = () => ({
  type: UPLOAD.CLEAR_PREVIEW_FILES
});

const setUploadImage = images => ({
  type: UPLOAD.SET_UPLOAD_IMAGE,
  images
});

const updateUploadImage = images => ({
  type: UPLOAD.UPDATE_UPLOAD_IMAGE,
  images
});

const setUploadImageDescription = description => ({
  type: UPLOAD.SET_UPLOAD_IMAGE_DESCRIPTION,
  description
});

const setUploadVideo = videos => ({
  type: UPLOAD.SET_UPLOAD_VIDEO,
  videos
});

const updateUploadVideo = videos => ({
  type: UPLOAD.UPDATE_UPLOAD_VIDEO,
  videos
});

const setUploadVideoDescription = description => ({
  type: UPLOAD.SET_UPLOAD_VIDEO_DESCRIPTION,
  description
});

const setUploadStoryTitle = title => ({
  type: UPLOAD.SET_UPLOAD_STORY_TITLE,
  title
});

const setUploadStoryDescription = description => ({
  type: UPLOAD.SET_UPLOAD_STORY_DESCRIPTION,
  description
});

const setUploadWeblink = weblink => ({
  type: UPLOAD.SET_UPLOAD_WEBLINK,
  weblink
});

const setActiveTab = tab => ({
  type: UPLOAD.SET_ACTIVE_TAB,
  tab
});

const setUploadError = error => ({
  type: UPLOAD.SET_UPLOAD_ERROR,
  error
});

const validateUpload = () => ({
  type: UPLOAD.VALIDATE_UPLOAD
});

const validateUploadLanguage = () => ({
  type: UPLOAD.VALIDATE_UPLOAD_LANGUAGE
});

const setUploadStep = step => ({
  type: UPLOAD.SET_UPLOAD_STEP,
  step
});

const setUploadImageLanguage = languages => ({
  type: UPLOAD.SET_UPLOAD_IMAGE_LANGUAGE,
  languages
});

const setUploadVideoLanguage = languages => ({
  type: UPLOAD.SET_UPLOAD_VIDEO_LANGUAGE,
  languages
});

const setUploadStoryLanguage = languages => ({
  type: UPLOAD.SET_UPLOAD_STORY_LANGUAGE,
  languages
});

const setUploadWeblinkLanguage = languages => ({
  type: UPLOAD.SET_UPLOAD_WEB_LANGUAGE,
  languages
});

const setUploadGenre = uploadGenre => ({
  type: UPLOAD.SET_UPLOAD_GENRE,
  uploadGenre
});

const clearUploadGenre = () => ({
  type: UPLOAD.CLEAR_UPLOAD_GENRE
});

const clearUploadError = () => ({
  type: UPLOAD.CLEAR_ERROR
});

const setContentDataList = contentData => ({
  type: UPLOAD.SET_CONTENT_DATA_LIST,
  contentData
});

const updateContentDataList = contentData => ({
  type: UPLOAD.UPDATE_CONTENT_DATA_LIST,
  contentData
});

const setContentFiles = contentFiles => ({
  type: UPLOAD.SET_CONTENT_FILES,
  contentFiles
});

const setUploadinFiles = uploadingFiles => ({
  type: UPLOAD.SET_UPLOADING_FILES,
  uploadingFiles
});

const setPreviewContent = prevContent => ({
  type: UPLOAD.SET_CONTENT_PREVIEW,
  prevContent
});

const publishContent = () => ({
  type: UPLOAD.PUBLISH_UPLOAD
});

const uploadContentDataList = () => ({
  type: UPLOAD.UPLOAD_DATALIST
});

const uploadUploadFiles = () => ({
  type: UPLOAD.UPLOAD_FILES
});

const addMoreContent = () => ({
  type: UPLOAD.ADD_MORE_CONTENT
});

const resetAddMoreContent = () => ({
  type: UPLOAD.RESET_ADD_MORE_CONTENT
});

const clearUploadContent = () => ({
  type: UPLOAD.CLEAR_CONTENT
});

const clearUploadingFiles = () => ({
  type: UPLOAD.CLEAR_UPLOADING_FILES
});

const removeUploadedFile = uploadedFile => ({
  type: UPLOAD.UPDATE_UPLOADING_FILES,
  uploadedFile
});

const loadMetadata = () => ({
  type: UPLOAD.LOAD_METADATA
});

const setMetaDetail = meta => ({
  type: UPLOAD.SET_META_DETAIL,
  meta
});

const clearSearchGenre = () => ({
  type: UPLOAD.CLEAR_SEARCH
});

const setSearchGenre = searchText => ({
  type: UPLOAD.SEARCH_GENRE,
  searchText
});

export {
  clearUpload,
  clearUploadError,
  setUploadImage,
  setUploadVideo,
  setUploadStoryTitle,
  setUploadStoryDescription,
  setUploadWeblink,
  setActiveTab,
  setUploadVideoDescription,
  setUploadImageDescription,
  updateUploadImage,
  updateUploadVideo,
  setUploadError,
  validateUpload,
  setUploadStep,
  setUploadImageLanguage,
  setUploadVideoLanguage,
  setUploadStoryLanguage,
  setUploadWeblinkLanguage,
  validateUploadLanguage,
  setUploadGenre,
  clearUploadGenre,
  setContentDataList,
  setContentFiles,
  publishContent,
  uploadContentDataList,
  uploadUploadFiles,
  updateContentDataList,
  setPreviewContent,
  addMoreContent,
  clearUploadContent,
  clearUploadPreviewFiles,
  resetAddMoreContent,
  setUploadinFiles,
  clearUploadingFiles,
  removeUploadedFile,
  setMetaDetail,
  loadMetadata,
  clearSearchGenre,
  setSearchGenre
};
