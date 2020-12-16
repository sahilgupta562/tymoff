/* eslint-disable */
import { takeEvery, takeLatest, put, select, call } from "redux-saga/effects";
import { map, pick, get, isEmpty } from "lodash";
import {
  UPLOAD,
  setUploadError,
  setUploadStep,
  setUploadImageLanguage,
  setUploadVideoLanguage,
  setUploadStoryLanguage,
  setUploadWeblinkLanguage,
  updateUploadLanguage,
  clearUploadGenre,
  setContentDataList,
  setContentFiles,
  setPreviewContent,
  uploadContentDataList,
  uploadUploadFiles,
  updateContentDataList,
  clearUpload,
  closeModal,
  clearUploadPreviewFiles,
  setUploadinFiles,
  clearUploadContent,
  removeUploadedFile,
  setMessage,
  clearUploadingFiles,
  setMetaDetail,
  setErrorMessage
} from "../actions";
import { apiUploadContentDataList, apiUploadFiles, apiMetaDetail } from "../../api";
import { UploadTab, UploadStep, ModalType, SuccessMessage, ErrorMessage, ContentTypeId } from "../../constant";
import { getContentData, fileFormData, storyFormData } from "../../core";
const randomstring = require("randomstring");

const getImages = state => state.upload.images;
const getVideos = state => state.upload.videos;
const getActiveTab = state => state.upload.activeTab;
const getStoryDescription = state => state.upload.storyDescription;
const getImageDescription = state => state.upload.imageDescription;
const getVideoDescription = state => state.upload.videoDescription;
const getStoryTitle = state => state.upload.storyTitle;
const getWeblink = state => state.upload.weblink;
const getImageLanguage = state => state.upload.imageLanguage;
const getVideoLanguage = state => state.upload.videoLanguage;
const getStoryLanguage = state => state.upload.storyLanguage;
const getWeblinkLanguage = state => state.upload.weblinkLanguage;
const getUploadLanguage = state => state.language.uploadLanguage;
const getGenres = state => state.upload.uploadGenre;
const getToken = state => state.auth.token;
const getContentDataList = state => state.upload.contentDataList;
const getContentFiles = state => state.upload.contentFiles;
const getAddMoreSelected = state => state.upload.addMoreSelected;

function* validateUpload() {
  try {
    const activeTab = yield select(getActiveTab);
    const images = yield select(getImages);
    const videos = yield select(getVideos);
    const storyDescription = yield select(getStoryDescription);
    const weblink = yield select(getWeblink);
    const imageLanguage = yield select(getImageLanguage);
    const videoLanguage = yield select(getVideoLanguage);
    const storyLanguage = yield select(getStoryLanguage);
    const weblinkLanguage = yield select(getWeblinkLanguage);
    let isValid = false;
    if (UploadTab.IMAGE === activeTab) {
      if (!!!images.length) yield put(setUploadError("Please select images"));
      else {
        isValid = true;
        yield put(updateUploadLanguage(imageLanguage));
      }
    } else if (UploadTab.VIDEO === activeTab) {
      if (!!!videos.length) yield put(setUploadError("Please select videos"));
      else {
        isValid = true;
        yield put(updateUploadLanguage(videoLanguage));
      }
    } else if (UploadTab.STORY === activeTab) {
      if (!storyDescription) yield put(setUploadError("Please enter description"));
      else {
        isValid = true;
        yield put(updateUploadLanguage(storyLanguage));
      }
    } else if (UploadTab.WEB === activeTab) {
      const regexWebLink = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
      if (!weblink) yield put(setUploadError("Please enter weblink"));
      else if (!!weblink && !regexWebLink.test(weblink.toLowerCase())) {
        yield put(setUploadError("Please enter a valid weblink"));
      } else {
        isValid = true;
        yield put(updateUploadLanguage(weblinkLanguage));
      }
    }
    if (isValid) yield put(setUploadStep(UploadStep.LANGUAGE));
  } catch (error) {
    yield put(setUploadError(error.toString()));
  }
}

function* validateLanguage() {
  try {
    const activeTab = yield select(getActiveTab);
    const uploadLanguage = yield select(getUploadLanguage);
    if (!!!uploadLanguage.length) yield put(setUploadError("Please select languages"));
    else {
      if (UploadTab.IMAGE === activeTab) yield put(setUploadImageLanguage(uploadLanguage));
      else if (UploadTab.VIDEO === activeTab) yield put(setUploadVideoLanguage(uploadLanguage));
      else if (UploadTab.STORY === activeTab) yield put(setUploadStoryLanguage(uploadLanguage));
      else if (UploadTab.WEB === activeTab) yield put(setUploadWeblinkLanguage(uploadLanguage));
      yield put(clearUploadGenre());
      yield put(setUploadStep(UploadStep.GENRE));
    }
  } catch (error) {
    yield put(setUploadError(error.toString()));
  }
}

function* handlePublishUpload() {
  try {
    const genres = yield select(getGenres);
    if (!!!genres.length) yield put(setUploadError("Please select genres"));
    else {
      const activeTab = yield select(getActiveTab);
      const images = yield select(getImages);
      const videos = yield select(getVideos);
      const storyDescription = yield select(getStoryDescription);
      const weblink = yield select(getWeblink);
      const imageLanguage = yield select(getImageLanguage);
      const videoLanguage = yield select(getVideoLanguage);
      const storyLanguage = yield select(getStoryLanguage);
      const weblinkLanguage = yield select(getWeblinkLanguage);
      const imageDescription = yield select(getImageDescription);
      const videoDescription = yield select(getVideoDescription);
      const storyTitle = yield select(getStoryTitle);
      const addMoreSelected = yield select(getAddMoreSelected);
      const localId = randomstring.generate();
      if (UploadTab.IMAGE === activeTab) {
        const contentData = getContentData(localId, "", imageDescription, ContentTypeId.Images, imageLanguage, genres, "");
        yield put(setContentDataList(contentData));
        const files = map(images, item => pick(item, "file"));
        yield put(setContentFiles({ localId, files, activeTab }));
        yield put(setPreviewContent({ localId, count: files.length, activeTab, prevFile: images[0].preview, des: "" }));
      } else if (UploadTab.VIDEO === activeTab) {
        const contentData = getContentData(localId, "", videoDescription, ContentTypeId.Videos, videoLanguage, genres, "");
        yield put(setContentDataList(contentData));
        const files = map(videos, item => pick(item, "file"));
        yield put(setContentFiles({ localId, files, activeTab }));
        yield put(setPreviewContent({ localId, count: files.length, activeTab, prevFile: videos[0].preview, des: "" }));
      } else if (UploadTab.STORY === activeTab) {
        const contentData = getContentData(localId, storyTitle, storyDescription, ContentTypeId.Text, storyLanguage, genres, "");
        yield put(setContentDataList(contentData));
        yield put(setPreviewContent({ localId, count: 0, activeTab, prevFile: "", des: storyDescription }));
      } else if (UploadTab.WEB === activeTab) {
        const contentData = getContentData(localId, "", "", ContentTypeId.Weblink, weblinkLanguage, genres, weblink);
        yield put(setContentDataList(contentData));
        yield put(setPreviewContent({ localId, count: 0, activeTab, prevFile: "", des: weblink }));
      }
      if (!addMoreSelected) {
        yield put(uploadContentDataList());
      } else {
        yield put(setUploadStep(UploadStep.DATA));
        yield put(clearUpload());
      }
    }
  } catch (error) {
    yield put(setUploadError(error.toString()));
  }
}

function* handleUploadDataList() {
  try {
    const token = yield select(getToken);
    const contentDataList = yield select(getContentDataList);
    const response = yield call(apiUploadContentDataList, contentDataList, token);
    yield put(closeModal(ModalType.UPLOAD));
    yield put(clearUpload());
    yield put(updateContentDataList(get(response, "data.dataList", [])));
    yield put(uploadUploadFiles());
    yield put(clearUploadPreviewFiles());
    if (response.success) {
      const contentId = response.data.dataList[0].typeId;
      if (contentId === ContentTypeId.Weblink || contentId === ContentTypeId.Text) yield put(setMessage(SuccessMessage.DATA_UPLOADED));
    }
  } catch (error) {
    yield put(setUploadError(error.toString()));
    yield put(setErrorMessage(ErrorMessage.API_RESPONSE_ERROR));
  }
}

function* handleUploadFiles() {
  try {
    const token = yield select(getToken);
    const contentFiles = yield select(getContentFiles);
    let uploadingFiles = [];
    for (let index = 0; index < contentFiles.length; index++) {
      const element = contentFiles[index];
      uploadingFiles.push({ localId: element.localId, totalFiles: element.files.length, contentType: element.activeTab, isSuccess: false, isFailed: false });
    }
    yield put(setUploadinFiles(uploadingFiles));
    const contentDataList = yield select(getContentDataList);
    const contents = contentDataList.reduce((u, p) => {
      if (p.isCreated && (p.typeId === ContentTypeId.Images || p.typeId === ContentTypeId.Videos || p.typeId === ContentTypeId.Text)) {
        u.push({ localId: p.localId, contentId: p.contentId, typeId: p.typeId, description: p.description });
      }
      return u;
    }, []);
    yield put(clearUploadContent());
    for (let index = 0; index < contents.length; index++) {
      const contentData = contents[index];
      const formdata = contentData.typeId === ContentTypeId.Text ? storyFormData(contentData.description) : fileFormData(contentData.localId, contentFiles);
      if (formdata) {
        const response = yield call(apiUploadFiles, contentData.contentId, formdata, token);
        if (contentData.typeId !== ContentTypeId.Text) yield put(removeUploadedFile({ localId: contentData.localId, success: response.success }));
        if (response.success) {
          yield put(setMessage(SuccessMessage.DATA_UPLOADED));
          yield put(clearUploadingFiles());
        }
      }
    }
  } catch (error) {
    yield put(setUploadError(error.message));
    yield put(setErrorMessage(error.message || ErrorMessage.API_RESPONSE_ERROR));
    yield put(clearUploadingFiles());
  }
}

function* handleLoadMetaDetail() {
  try {
    const weblink = yield select(getWeblink);
    const response = yield call(apiMetaDetail, weblink);
    const images = get(response, "result.images", []);
    const summery = get(response, "result.summary", "");
    if (!isEmpty(images) || summery) {
      const summery = get(response, "result.summary", []);
      const title = get(response, "result.metadata.title", "");
      const thumbnail = get(response, "result.metadata.thumbnail", "");
      const metaData = { image: !!images.length ? images[0] : "", summery, title, thumbnail };
      yield put(setMetaDetail(metaData));
    } else {
      yield put(setMetaDetail({}));
    }
  } catch (error) {
    yield put(setMetaDetail({}));
    yield put(setUploadError(error.toString()));
  }
}

function* handleClearContent() {
  yield put(closeModal(ModalType.UPLOAD));
}

export function* watchValidateLanguage() {
  yield takeEvery(UPLOAD.VALIDATE_UPLOAD_LANGUAGE, validateLanguage);
}

export function* watchValidateUpload() {
  yield takeEvery(UPLOAD.VALIDATE_UPLOAD, validateUpload);
}

export function* watchPublishUpload() {
  yield takeEvery([UPLOAD.PUBLISH_UPLOAD, UPLOAD.ADD_MORE_CONTENT], handlePublishUpload);
}

export function* watchUploadContentList() {
  yield takeEvery(UPLOAD.UPLOAD_DATALIST, handleUploadDataList);
}

export function* watchUploadFiles() {
  yield takeEvery(UPLOAD.UPLOAD_FILES, handleUploadFiles);
}

export function* watchClearContent() {
  yield takeEvery(UPLOAD.CLEAR_CONTENT, handleClearContent);
}

export function* watchLoadMetaDetail() {
  yield takeLatest(UPLOAD.LOAD_METADATA, handleLoadMetaDetail);
}
