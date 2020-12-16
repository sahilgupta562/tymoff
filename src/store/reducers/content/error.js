import { CONTENT } from "../../actions";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case CONTENT.LOAD:
    case CONTENT.LOAD_SUCCESS:
    case CONTENT.SET_REPORT_CONTENT_ID:
      return null;
    case CONTENT.LOAD_FAILED:
      return action.error;
    case CONTENT.CLEAR:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
