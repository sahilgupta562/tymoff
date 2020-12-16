import { NOTIFICATION } from "../../actions";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case NOTIFICATION.LOAD:
    case NOTIFICATION.LOAD_SUCCESS:
      return null;
    case NOTIFICATION.LOAD_FAILED:
      return action.error;
    case NOTIFICATION.CLEAR:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
