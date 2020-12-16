import { combineReducers } from "redux";
import loadingReducer from "./loading";
import errorReducer from "./error";
import addFolderFormReducer from "./form";

const addFolderReducers = combineReducers({
  isLoading: loadingReducer,
  error: errorReducer,
  form: addFolderFormReducer
});

export { addFolderReducers };
