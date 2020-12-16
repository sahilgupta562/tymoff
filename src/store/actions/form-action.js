import { ADD_FOLDER, RENAME_FOLDER } from "./action-types";

const setAddFolderName = name => ({
  type: ADD_FOLDER.SET_FOLDER_NAME,
  name
});

const setRenameFolderName = name => ({
  type: RENAME_FOLDER.SET_FOLDER_NAME,
  name
});

export { setAddFolderName, setRenameFolderName };
