import { FOLDER } from "../../actions";

const selectedFolderReducer = (state = "", action) => {
  switch (action.type) {
    case FOLDER.CLEAR:
      return "";
    case FOLDER.SELECTED_FOLDER:
      return action.selectedFolder;
    default:
      return state;
  }
};

export default selectedFolderReducer;
