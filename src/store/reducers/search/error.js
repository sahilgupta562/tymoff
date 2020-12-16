import { SEARCH } from "../../actions";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case SEARCH.LOAD:
    case SEARCH.LOAD_SUCCESS:
      return null;
    case SEARCH.LOAD_FAILED:
      return action.error;
    case SEARCH.CLEAR:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
