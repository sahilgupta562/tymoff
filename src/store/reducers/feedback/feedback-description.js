import { FEEDBACK } from "../../actions";

const feedbackDescriptionReducer = (state = "", action) => {
  switch (action.type) {
    case FEEDBACK.CLEAR:
      return "";
    case FEEDBACK.SET_FEEDBACK_DESCRIPTION:
      return action.description;
    default:
      return state;
  }
};

export default feedbackDescriptionReducer;
