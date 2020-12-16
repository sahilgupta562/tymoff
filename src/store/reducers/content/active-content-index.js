import { CONTENT } from "../../actions";

const activeContentIndexReducer = (state = -1, action) => {
  switch (action.type) {
    case CONTENT.RESET_ACTIVE_CONTENT:
      return -1;
    case CONTENT.LOAD_CONTENT_DETAIL:
      return 0;
    case CONTENT.ACTIVE_CONTENT_INDEX:
      return action.index;
    default:
      return state;
  }
};

export default activeContentIndexReducer;
