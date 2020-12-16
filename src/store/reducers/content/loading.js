import { CONTENT } from "../../actions";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case CONTENT.LOAD:
    case CONTENT.ACTION_CHANGE:
    case CONTENT.LOAD_CONTENT_FROM_CACHE:
      return true;
    case CONTENT.LOAD_SUCCESS:
      return false;
    case CONTENT.LOAD_FAILED:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
