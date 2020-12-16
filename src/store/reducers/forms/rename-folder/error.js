import { RENAME_FOLDER } from "../../../actions";

const errorReducer = (state = "", action) => {
  switch (action.type) {
    case RENAME_FOLDER.CLEAR:
    case RENAME_FOLDER.SET_FOLDER_NAME:
      return "";
    case RENAME_FOLDER.LOAD_FAILED:
      return action.error;
    default:
      return state;
  }
};

export default errorReducer;
