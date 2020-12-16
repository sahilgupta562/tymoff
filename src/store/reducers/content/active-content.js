import { CONTENT } from "../../actions";
import { ContentUserAction } from "../../../constant";

const activeContentReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTENT.RESET_ACTIVE_CONTENT:
      return {};
    case CONTENT.ACTIVE_CONTENT:
      return { ...action.activeContent };
    case CONTENT.USER_ACTION_CHANGE: {
      const activeContent = { ...state };
      const contentUserAction = action.contentUserAction;
      if (contentUserAction === ContentUserAction.LIKE) return { ...activeContent, isLike: true, likeCount: activeContent.likeCount + 1 };
      else if (contentUserAction === ContentUserAction.UNLIKE) return { ...activeContent, isLike: false, likeCount: activeContent.likeCount - 1 };
      return state;
    }
    default:
      return state;
  }
};

export default activeContentReducer;
