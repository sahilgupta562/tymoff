import { combineReducers } from "redux";
import loadingReducer from "./loading";
import errorReducer from "./error";
import dataReducer from "./data";

const authReducers = combineReducers({
  isLoading: loadingReducer,
  error: errorReducer,
  data: dataReducer
});

export { authReducers };
