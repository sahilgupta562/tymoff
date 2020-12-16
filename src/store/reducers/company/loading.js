import { COMPANY } from "../../actions";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case COMPANY.CLEAR:
    case COMPANY.LOAD_SUCCESS:
      return false;
    case COMPANY.LOAD:
      return true;
    case COMPANY.LOAD_FAILED:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
