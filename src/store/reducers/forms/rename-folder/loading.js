import { RENAME_FOLDER } from "../../../actions";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case RENAME_FOLDER.CLEAR:
    case RENAME_FOLDER.LOAD_SUCCESS:
      return false;
    case RENAME_FOLDER.LOAD:
      return true;
    case RENAME_FOLDER.LOAD_FAILED:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
