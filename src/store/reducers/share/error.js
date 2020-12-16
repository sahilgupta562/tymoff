import { SHARE } from "../../actions";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case SHARE.LOAD:
    case SHARE.LOAD_SUCCESS:
      return null;
    case SHARE.LOAD_FAILED:
      return action.error;
    case SHARE.CLEAR:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
