import { COMMENT } from "../../actions";

const totalCommentReducer = (state = 0, action) => {
  switch (action.type) {
    case COMMENT.CLEAR:
      return 0;
    case COMMENT.TOTAL_COMMENT:
      return action.totalComment;
    default:
      return state;
  }
};

export default totalCommentReducer;
