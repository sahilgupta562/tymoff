import { FOLDER } from "../../actions";

const errorReducer = (state = "", action) => {
  switch (action.type) {
    case FOLDER.CLEAR:
      return "";
    case FOLDER.LOAD_FAILED:
      return action.error;
    default:
      return state;
  }
};

export default errorReducer;
