import { CONTENT } from "../../actions";

const showNextArrowReducer = (state = false, action) => {
  switch (action.type) {
    case CONTENT.CLEAR:
      return false;
    case CONTENT.SHOW_NEXT_ARROW:
      return true;
    case CONTENT.HIDE_NEXT_ARROW:
      return false;
    default:
      return state;
  }
};

export default showNextArrowReducer;
