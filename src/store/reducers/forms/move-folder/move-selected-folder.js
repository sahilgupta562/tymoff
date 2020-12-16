import { MOVE_FOLDER } from "../../../actions";

const selectedFolderReducer = (state = "", action) => {
  switch (action.type) {
    case MOVE_FOLDER.CLEAR:
      return "";
    case MOVE_FOLDER.SET_FOLDER_PATH:
      return action.selectedFolder;
    default:
      return state;
  }
};

export default selectedFolderReducer;
