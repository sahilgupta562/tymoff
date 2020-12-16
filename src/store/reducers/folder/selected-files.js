import { FOLDER, MOVE_FOLDER } from "../../actions";

const selectedFilesReducer = (state = [], action) => {
  switch (action.type) {
    case MOVE_FOLDER.CLEAR:
      return [];
    case FOLDER.SET_FILES_PATH:
      return [...(action.selectedFiles || [])];
    default:
      return state;
  }
};

export default selectedFilesReducer;
