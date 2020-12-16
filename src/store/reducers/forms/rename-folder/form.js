import { RENAME_FOLDER } from "../../../actions";

const renameFolderFormReducer = (state = "", action) => {
  switch (action.type) {
    case RENAME_FOLDER.CLEAR:
      return "";
    case RENAME_FOLDER.SET_FOLDER_NAME:
      return action.name;
    default:
      return state;
  }
};

export default renameFolderFormReducer;
