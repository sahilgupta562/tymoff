import { COMMENT } from "../../actions";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case COMMENT.LOAD:
      return true;
    case COMMENT.NEW_COMMENT_LOAD:
      return true;
    case COMMENT.LOAD_SUCCESS:
      return false;
    case COMMENT.LOAD_FAILED:
      return false;
      case COMMENT.CLEAR:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
