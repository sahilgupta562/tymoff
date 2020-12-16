import { CONTENT } from "../../actions";

const contentUserActionReducer = (state = "", action) => {
  switch (action.type) {
    case CONTENT.CLEAR:
      return "";
    case CONTENT.USER_ACTION_CHANGE:
      return action.contentUserAction;
    default:
      return state;
  }
};

export default contentUserActionReducer;
