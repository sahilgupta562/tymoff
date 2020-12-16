import { combineReducers } from "redux";
import loadingReducer from "./loading";
import errorReducer from "./error";

const deleteFolderReducers = combineReducers({
  isLoading: loadingReducer,
  error: errorReducer
});

export { deleteFolderReducers };
