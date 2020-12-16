import { CONTENT } from "../../actions";

const contentActionReducer = (state = "", action) => {
  switch (action.type) {
    case CONTENT.CLEAR:
    case CONTENT.CLEAR_ACTION:
      return "";
    case CONTENT.ACTION_CHANGE:
      return action.contentAction;
    default:
      return state;
  }
};

export default contentActionReducer;
