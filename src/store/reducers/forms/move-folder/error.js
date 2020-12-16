import { MOVE_FOLDER } from "../../../actions";

const errorReducer = (state = "", action) => {
  switch (action.type) {
    case MOVE_FOLDER.CLEAR:
    case MOVE_FOLDER.SET_FOLDER_PATH:
    case MOVE_FOLDER.SET_FOLDER_NODES:
    case MOVE_FOLDER.MOVE_FILE:
      return "";
    case MOVE_FOLDER.LOAD_FAILED:
      return action.error;
    default:
      return state;
  }
};

export default errorReducer;
