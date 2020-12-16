import { CONTENT } from "../../actions";

const activeContentUrlReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTENT.RESET_ACTIVE_CONTENT_URL:
      return {};
    case CONTENT.ACTIVE_CONTENT_URL:
      return action.activeContentUrl;
    default:
      return state;
  }
};

export default activeContentUrlReducer;
