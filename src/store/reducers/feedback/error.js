import { FEEDBACK } from "../../actions";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case FEEDBACK.CLEAR:
      return null;
    case FEEDBACK.LOAD_FAILED:
      return action.error;
    case FEEDBACK.SEND_FEEDBACK:
    case FEEDBACK.SET_FEEDBACK_DESCRIPTION:
    case FEEDBACK.SET_FEEDBACK_TITLE:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
