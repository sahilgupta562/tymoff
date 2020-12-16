import { combineReducers } from "redux";
import dataReducer from "./data";
import errorReducer from "./error";
import loadingReducer from "./loading";
import totalCommentReducer from "./total-comment";
import commentTextReducer from "./comment-text";

const commentReducer = combineReducers({
  data: dataReducer,
  error: errorReducer,
  isLoading: loadingReducer,
  totalComment: totalCommentReducer,
  commentText: commentTextReducer
});

export { commentReducer };
