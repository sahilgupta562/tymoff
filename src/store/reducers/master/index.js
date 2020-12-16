import { combineReducers } from "redux";
import countryReducer from "./country";
import formatReducer from "./format";
import genreReducer from "./genre";
import languageReducer from "./language";
import reportReducer from "./report";
import videoFormatReducer from "./video-format";

const masterReducer = combineReducers({
  countries: countryReducer,
  formats: formatReducer,
  genres: genreReducer,
  languages: languageReducer,
  report: reportReducer,
  videoFormats: videoFormatReducer
});

export { masterReducer };
