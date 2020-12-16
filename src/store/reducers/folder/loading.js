import { FOLDER } from "../../actions";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case FOLDER.CLEAR:
    case FOLDER.LOAD_SUCCESS:
      return false;
    case FOLDER.LOAD:
      return true;
    case FOLDER.LOAD_FAILED:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
