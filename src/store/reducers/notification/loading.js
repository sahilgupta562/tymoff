import { NOTIFICATION } from "../../actions";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case NOTIFICATION.LOAD:
      return true;
    case NOTIFICATION.LOAD_SUCCESS:
      return false;
    case NOTIFICATION.LOAD_FAILED:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
