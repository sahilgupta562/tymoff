import { combineReducers } from "redux";
import filterLanguageReducer from "./filter-language";
import uploadLanguageReducer from "./upload-language";
import searchLanguageReducer from "./search-language";

const languageReducer = combineReducers({
  filterLanguage: filterLanguageReducer,
  uploadLanguage: uploadLanguageReducer,
  searchLanguage: searchLanguageReducer
});

export { languageReducer };
