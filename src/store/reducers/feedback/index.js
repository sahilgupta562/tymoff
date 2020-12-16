import { combineReducers } from "redux";
import feedbackTitleReducer from "./feedback-title";
import feedbackDescriptionReducer from "./feedback-description";
import errorReducer from "./error";

const feedbackReducer = combineReducers({
  title: feedbackTitleReducer,
  description: feedbackDescriptionReducer,
  error: errorReducer
});

export { feedbackReducer };
