import { MOVE_FOLDER } from "../../../actions";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case MOVE_FOLDER.CLEAR:
    case MOVE_FOLDER.LOAD_SUCCESS:
      return false;
    case MOVE_FOLDER.LOAD:
    case MOVE_FOLDER.MOVE_FILE:
      return true;
    case MOVE_FOLDER.LOAD_FAILED:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
