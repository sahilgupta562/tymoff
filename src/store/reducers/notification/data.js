import { NOTIFICATION } from "../../actions";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case NOTIFICATION.CLEAR:
      return "";
    case NOTIFICATION.LOAD_SUCCESS:
      return action.notifications;
    default:
      return state;
  }
};

export default dataReducer;
