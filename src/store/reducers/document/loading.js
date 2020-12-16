import { DOCUMENT } from "../../actions";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case DOCUMENT.CLEAR:
    case DOCUMENT.LOAD_SUCCESS:
      return false;
    case DOCUMENT.LOAD:
      return true;
    case DOCUMENT.LOAD_FAILED:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
