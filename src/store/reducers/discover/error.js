import { DISCOVER } from "../../actions";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case DISCOVER.LOAD_DISCOVER_LIST:
    case DISCOVER.LOAD_DISCOVER_LIST_SUCCESS:
    case DISCOVER.LOAD_USER_DISCOVER_LIST:
    case DISCOVER.LOAD_USER_DISCOVER_LIST_SUCCESS:
      return null;
    case DISCOVER.LOAD_FAILED:
      return action.error;
    case DISCOVER.CLEAR_DISCOVER_LIST:
    case DISCOVER.CLEAR_USER_DISCOVER_LIST:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
