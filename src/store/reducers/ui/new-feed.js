import { UI } from "../../actions";

const newFeedReducer = (state = false, action) => {
  switch (action.type) {
    case UI.SHOW_NEWFEED:
      return true;
    case UI.HIDE_NEWFEED:
      return false;
    default:
      return state;
  }
};

export default newFeedReducer;
