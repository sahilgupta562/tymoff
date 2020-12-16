import { DELETE_FOLDER } from "../../../actions";

const errorReducer = (state = "", action) => {
  switch (action.type) {
    case DELETE_FOLDER.CLEAR:
    case DELETE_FOLDER.SET_FOLDER_NAME:
      return "";
    case DELETE_FOLDER.LOAD_FAILED:
      return action.error;
    default:
      return state;
  }
};

export default errorReducer;
