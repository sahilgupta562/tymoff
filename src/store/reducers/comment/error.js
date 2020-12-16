import { COMMENT } from "../../actions";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case COMMENT.LOAD:
    case COMMENT.LOAD_SUCCESS:
      return null;
    case COMMENT.LOAD_FAILED:
      return action.error;
    case COMMENT.CLEAR:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
