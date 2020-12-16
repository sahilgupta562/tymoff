import { combineReducers } from "redux";
import dataReducer from "./data";
import errorReducer from "./error";
import loadingReducer from "./loading";
import shareTypeReducer from "./share-type";
import contentUrlReducer from "./content-url";

const shareReducer = combineReducers({
  data: dataReducer,
  contentUrl: contentUrlReducer,
  error: errorReducer,
  isLoading: loadingReducer,
  type: shareTypeReducer,
});

export { shareReducer };
