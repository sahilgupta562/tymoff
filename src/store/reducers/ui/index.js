import { combineReducers } from "redux";
import sidebarReducer from "./sidebar";
import snackbarReducer from "./snackbar";
import errorSnackbarReducer from "./error-snackbar";
import messageReducer from "./message";
import modalReducer from "./modal";
import modalRouteReducer from "./modal-route";
import modalActionReducer from "./modal-action";
import alertActionReducer from "./alert-action";
import commentBoxReducer from "./comment-box";
import discoverRouteReducer from "./discover-route";
import newFeedReducer from "./new-feed";
import navlinkChangeReducer from "./navlink-change";
import installAppReducer from "./install-app";
import errorMessageReducer from "./error-message";
import activeBrowserTabReducer from "./active-browser-tab";

const uiReducers = combineReducers({
  sidebar: sidebarReducer,
  snackbar: snackbarReducer,
  errorSnackbar: errorSnackbarReducer,
  modal: modalReducer,
  isModalRoute: modalRouteReducer,
  modalAction: modalActionReducer,
  alertAction: alertActionReducer,
  commentBox: commentBoxReducer,
  isDiscoverRoute: discoverRouteReducer,
  message: messageReducer,
  errorMessage: errorMessageReducer,
  newFeed: newFeedReducer,
  navlinkChange: navlinkChangeReducer,
  installApp: installAppReducer,
  browserTab: activeBrowserTabReducer,
});

export { uiReducers };
