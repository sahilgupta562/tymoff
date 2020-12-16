import { CONTENT } from "../../actions";

const activeContentIdReducer = (state = 0, action) => {
  switch (action.type) {
    case CONTENT.CLEAR:
      return 0;
    case CONTENT.LOAD_CONTENT_DETAIL:
      return action.contentId;
    default:
      return state;
  }
};

export default activeContentIdReducer;
