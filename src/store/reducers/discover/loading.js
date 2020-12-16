import { DISCOVER } from "../../actions";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case DISCOVER.LOAD_DISCOVER_LIST:
    case DISCOVER.LOAD_USER_DISCOVER_LIST:
      return true;
    case DISCOVER.LOAD_FAILED:
      return false;
    case DISCOVER.LOAD_DISCOVER_LIST_SUCCESS:
    case DISCOVER.LOAD_USER_DISCOVER_LIST_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
