import { combineReducers } from "redux";
import { authReducers } from "./auth";
import { contentReducers } from "./content";
import { uiReducers } from "./ui";
import { searchReducer } from "./search";
import { discoverReducer } from "./discover";
import { shareReducer } from "./share";
import { masterReducer } from "./master";
import { countryReducer } from "./country";
import { languageReducer } from "./language";
import { uploadReducer } from "./upload";
import { settingReducer } from "./setting";
import { feedbackReducer } from "./feedback";
import { notificationReducer } from "./notification";
import { commentReducer } from "./comment";
import { contactReducer } from "./contact"

const rootReducer = combineReducers({
  auth: authReducers,
  content: contentReducers,
  ui: uiReducers,
  search: searchReducer,
  discover: discoverReducer,
  share: shareReducer,
  master: masterReducer,
  country: countryReducer,
  language: languageReducer,
  upload: uploadReducer,
  setting: settingReducer,
  feedback: feedbackReducer,
  notification: notificationReducer,
  comment: commentReducer,
  contact: contactReducer,
});
const rootReducerServer = {
  auth: authReducers,
  content: contentReducers,
  ui: uiReducers,
  search: searchReducer,
  discover: discoverReducer,
  share: shareReducer,
  master: masterReducer,
  country: countryReducer,
  language: languageReducer,
  upload: uploadReducer,
  setting: settingReducer,
  feedback: feedbackReducer,
  notification: notificationReducer,
  comment: commentReducer,
  contact: contactReducer,
};

export { rootReducer, rootReducerServer };
