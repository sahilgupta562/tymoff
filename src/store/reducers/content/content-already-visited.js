import { CONTENT } from "../../actions";

const contentAlreadyVisitedReducer = (state = false, action) => {
  switch (action.type) {
    case CONTENT.CONTENT_ALREADY_VISITED:
      return true;
    case CONTENT.NEW_CONTENT_VISITED:
      return false;
    default:
      return state;
  }
};

export default contentAlreadyVisitedReducer;
