import { CONTENT } from "../../actions";
import { uniq } from "lodash";

const alreadyVisitedContentIdsReducer = (state = [], action) => {
  switch (action.type) {
    case CONTENT.RESET_ALREADY_VISITED_CONTENT:
      return [];
    case CONTENT.SET_ALREADY_VISITED_CONTENT: {
      const contentIds = uniq([...state, action.contentId]);
      return [...contentIds];
    }
    default:
      return state;
  }
};

export default alreadyVisitedContentIdsReducer;
