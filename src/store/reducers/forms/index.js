import { combineReducers } from "redux";
import { addFolderReducers } from "./add-folder";
import { renameFolderReducers } from "./rename-folder";
import { moveFolderReducers } from "./move-folder";
import { deleteFolderReducers } from "./delete-folder";

const formReducers = combineReducers({
  addFolder: addFolderReducers,
  renameFolder: renameFolderReducers,
  moveFolder: moveFolderReducers,
  deleteFolder: deleteFolderReducers,
});

export { formReducers };
