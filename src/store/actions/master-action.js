import { MASTER } from "./action-types";

const loadMasterData = () => ({
  type: MASTER.LOAD
});

const clearMasterData = () => ({
  type: MASTER.CLEAR
});

const setGenre = genres => ({
  type: MASTER.LOAD_GENRE,
  genres
});

const setFormat = formats => ({
  type: MASTER.LOAD_FORMAT,
  formats
});

const setCountries = countries => ({
  type: MASTER.LOAD_COUNTRY,
  countries
});

const setLanguage = languages => ({
  type: MASTER.LOAD_LANGUAGE,
  languages
});

const setReport = report => ({
  type: MASTER.LOAD_REPORT,
  report
});

const setVideoFormat = videoFormats => ({
  type: MASTER.LOAD_VIDEO_FORMAT,
  videoFormats
});

const setError = error => ({
  type: MASTER.LOAD_FAILED,
  error
});

export {
  loadMasterData,
  clearMasterData,
  setGenre,
  setFormat,
  setCountries,
  setLanguage,
  setReport,
  setVideoFormat,
  setError
};
