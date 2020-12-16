import { combineReducers } from "redux";
import discoverListReducer from "./discover-list";
import userDiscoverListReducer from "./user-discover-list";
import errorReducer from "./error";
import loadingReducer from "./loading";
import discoverContentListReducer from "./discover-content-list";
import userDiscoverContentListReducer from "./user-discover-content-list";

const discoverReducer = combineReducers({
  discoverList: discoverListReducer,
  userDiscoverList: userDiscoverListReducer,
  error: errorReducer,
  isLoading: loadingReducer,
  discoverContentList: discoverContentListReducer,
  userDiscoverContentList: userDiscoverContentListReducer
});

export { discoverReducer };
