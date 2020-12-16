import { combineReducers } from "redux";
import imageReducer from "./image";
import videoReducer from "./video";
import activeTabReducer from "./active-tab";
import imageDescriptionReducer from "./image-description";
import videoDescriptionReducer from "./video-description";
import storyTitleReducer from "./story-title";
import storyDescriptionReducer from "./story-description";
import weblinkReducer from "./weblink";
import errorReducer from "./error";
import activeStepReducer from "./active-step";
import imageLanguageReducer from "./image-language";
import videoLanguageReducer from "./video-language";
import storyLanguageReducer from "./story-language";
import weblinkLanguageReducer from "./weblink-language";
import uploadGenreReducer from "./upload-genre";
import contentDatalistReducer from "./content-datalist";
import contentFileReducer from "./content-file";
import contentPreviewReducer from "./content-preview";
import addMoreContentReducer from "./add-more-content";
import uploadingFilesReducer from "./uploading-files";
import weblinkMetaDetailReducer from "./weblink-meta-detail";
import loadingReducer from "./loading";
import searchGenreReducer from "./search-genre";

const uploadReducer = combineReducers({
  images: imageReducer,
  videos: videoReducer,
  activeTab: activeTabReducer,
  imageDescription: imageDescriptionReducer,
  videoDescription: videoDescriptionReducer,
  storyTitle: storyTitleReducer,
  storyDescription: storyDescriptionReducer,
  weblink: weblinkReducer,
  error: errorReducer,
  activeStep: activeStepReducer,
  weblinkLanguage: weblinkLanguageReducer,
  imageLanguage: imageLanguageReducer,
  videoLanguage: videoLanguageReducer,
  storyLanguage: storyLanguageReducer,
  uploadGenre: uploadGenreReducer,
  contentDataList: contentDatalistReducer,
  contentFiles: contentFileReducer,
  contentPreview: contentPreviewReducer,
  addMoreSelected: addMoreContentReducer,
  uploadingFiles: uploadingFilesReducer,
  metaData: weblinkMetaDetailReducer,
  isLoading: loadingReducer,
  searchGenre: searchGenreReducer
});

export { uploadReducer };
