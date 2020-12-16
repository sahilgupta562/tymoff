import { FEEDBACK } from "../../actions";

const feedbackTitleReducer = (state = "", action) => {
  switch (action.type) {
    case FEEDBACK.CLEAR:
      return "";
    case FEEDBACK.SET_FEEDBACK_TITLE:
      return action.title;
    default:
      return state;
  }
};

export default feedbackTitleReducer;
