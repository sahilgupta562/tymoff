import { combineReducers } from "redux";
import dataReducer from "./data";
import errorReducer from "./error";
import loadingReducer from "./loading";
import searchHintReducer from "./search-hint";

const searchReducer = combineReducers({
  data: dataReducer,
  error: errorReducer,
  isLoading: loadingReducer,
  searchHint: searchHintReducer
});

export { searchReducer };
