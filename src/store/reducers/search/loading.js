import { SEARCH } from "../../actions";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case SEARCH.LOAD:
      return true;
    case SEARCH.LOAD_SUCCESS:
      return false;
    case SEARCH.LOAD_FAILED:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
