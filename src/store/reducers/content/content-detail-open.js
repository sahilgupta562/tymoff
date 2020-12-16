import { CONTENT } from "../../actions";

const contentDetailOpenReducer = (state = false, action) => {
  switch (action.type) {
    case CONTENT.CONTENT_DETAIL_OPEN:
      return true;
    case CONTENT.CONTENT_DETAIL_CLOSE:
      return false;
    default:
      return state;
  }
};

export default contentDetailOpenReducer;
