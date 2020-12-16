import { combineReducers } from "redux";
import dataReducer from "./data";
import errorReducer from "./error";
import loadingReducer from "./loading";
import countReducer from "./count";

const notificationReducer = combineReducers({
  data: dataReducer,
  error: errorReducer,
  isLoading: loadingReducer,
  count: countReducer,
});

export { notificationReducer };
