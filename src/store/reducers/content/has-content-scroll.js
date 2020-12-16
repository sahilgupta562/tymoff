import { CONTENT } from "../../actions";

const hasContentScrollReducer = (state = false, action) => {
  switch (action.type) {
    case CONTENT.CLEAR:
      return false;
    case CONTENT.START_CONTENT_SCROLL_TIMER:
      return true;
    case CONTENT.STOP_CONTENT_SCROLL_TIMER:
      return false;
    default:
      return state;
  }
};

export default hasContentScrollReducer;
