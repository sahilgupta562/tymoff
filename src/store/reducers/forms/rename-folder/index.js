import { combineReducers } from "redux";
import loadingReducer from "./loading";
import errorReducer from "./error";
import renameFolderFormReducer from "./form";

const renameFolderReducers = combineReducers({
  isLoading: loadingReducer,
  error: errorReducer,
  form: renameFolderFormReducer
});

export { renameFolderReducers };
