import { AUTH } from "../../actions";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case AUTH.CLEAR:
    case AUTH.LOAD_SUCCESS:
      return false;
    case AUTH.LOAD:
      return true;
    case AUTH.LOAD_FAILED:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
