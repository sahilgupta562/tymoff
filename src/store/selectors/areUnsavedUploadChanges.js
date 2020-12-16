import { createSelector } from "reselect";

const getImages = state => state.upload.images;
const getVideos = state => state.upload.videos;
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

const areUnsavedUploadChanges = createSelector(
  [
    getImages,
    getVideos,
    getStoryDescription,
    getImageDescription,
    getVideoDescription,
    getStoryTitle,
    getWeblink,
    getImageLanguage,
    getVideoLanguage,
    getStoryLanguage,
    getWeblinkLanguage,
    getUploadLanguage,
    getGenres
  ],
  (images, videos, storyDescription, imageDescription, videoDescription, storyTitle, weblink, imageLanguage, videoLanguage, storyLanguage, weblinkLanguage, uploadLanguage, genres) => {
    return (
      !!images.length ||
      !!videos.length ||
      !!storyDescription ||
      !!imageDescription ||
      !!videoDescription ||
      !!storyTitle ||
      !!weblink ||
      !!imageLanguage.length ||
      !!videoLanguage.length ||
      !!storyLanguage.length ||
      !!weblinkLanguage.length ||
      !!uploadLanguage.length ||
      !!genres.length
    );
  }
);

export default areUnsavedUploadChanges;
