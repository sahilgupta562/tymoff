import { DELETE_FOLDER } from "../../../actions";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case DELETE_FOLDER.CLEAR:
    case DELETE_FOLDER.LOAD_SUCCESS:
      return false;
    case DELETE_FOLDER.LOAD:
      return true;
    case DELETE_FOLDER.LOAD_FAILED:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
