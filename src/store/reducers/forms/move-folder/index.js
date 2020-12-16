import { combineReducers } from "redux";
import loadingReducer from "./loading";
import errorReducer from "./error";
import selectedFolderReducer from "./move-selected-folder";
import selectedNodesReducer from "./move-selected-nodes";

const moveFolderReducers = combineReducers({
  isLoading: loadingReducer,
  error: errorReducer,
  moveSelectedFolder: selectedFolderReducer,
  moveSelectedNodes: selectedNodesReducer
});

export { moveFolderReducers };
