import { ADD_FOLDER } from "../../../actions";

const errorReducer = (state = "", action) => {
  switch (action.type) {
    case ADD_FOLDER.CLEAR:
    case ADD_FOLDER.SET_FOLDER_NAME:
      return "";
    case ADD_FOLDER.LOAD_FAILED:
      return action.error;
    default:
      return state;
  }
};

export default errorReducer;
