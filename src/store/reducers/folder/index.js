import { combineReducers } from "redux";
import loadingReducer from "./loading";
import errorReducer from "./error";
import dataReducer from "./data";
import selectedFolderReducer from "./selected-folder";
import selectedNodesReducer from "./selected-nodes";
import selectedFilesReducer from "./selected-files";

const folderReducers = combineReducers({
  isLoading: loadingReducer,
  error: errorReducer,
  data: dataReducer,
  selectedFolder: selectedFolderReducer,
  selectedNodes: selectedNodesReducer,
  selectedFiles: selectedFilesReducer
});

export { folderReducers };
