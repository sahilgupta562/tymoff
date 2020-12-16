import { combineReducers } from "redux";
import modalReducer from "./modal";
import sidebarReducer from "./sidebar";
import actionTypeReducer from "./action-type";
import fileContextMenuPositionReducer from "./file-context-menu-position";
import folderContextMenuPositionReducer from "./folder-context-menu-position";
import companyListingMenuPositionReducer from "./company-listing-menu-position";

const uiReducers = combineReducers({
  modal: modalReducer,
  sidebar: sidebarReducer,
  actionType: actionTypeReducer,
  fileContextMenuPosition: fileContextMenuPositionReducer,
  folderContextMenuPosition: folderContextMenuPositionReducer,
  companyListingMenuPosition: companyListingMenuPositionReducer
});

export { uiReducers };
