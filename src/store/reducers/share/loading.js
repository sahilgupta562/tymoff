import { SHARE } from "../../actions";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case SHARE.LOAD:
      return true;
    case SHARE.LOAD_SUCCESS:
      return false;
    case SHARE.LOAD_FAILED:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
