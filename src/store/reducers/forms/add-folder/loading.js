import { ADD_FOLDER } from "../../../actions";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case ADD_FOLDER.CLEAR:
    case ADD_FOLDER.LOAD_SUCCESS:
      return false;
    case ADD_FOLDER.LOAD:
      return true;
    case ADD_FOLDER.LOAD_FAILED:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
