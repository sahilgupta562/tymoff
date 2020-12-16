import { COMMENT } from "../../actions";

const commentTextReducer = (state = "", action) => {
  switch (action.type) {
    case COMMENT.CLEAR:
    case COMMENT.CLEAR_COMMENT_TEXT:
      return "";
    case COMMENT.COMMENT_TEXT_CHANGE:
      return action.commentText;
    default:
      return state;
  }
};

export default commentTextReducer;
