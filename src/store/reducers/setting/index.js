import { combineReducers } from "redux";
import darkThemeReducer from "./dark-theme";
import restrictedModeReducer from "./restrict-mode";
import contentScrollTimeReducer from "./content-scroll-time";
import currentScrollTimeReducer from "./current-scroll-time";

const settingReducer = combineReducers({
  darkTheme: darkThemeReducer,
  restrictedMode: restrictedModeReducer,
  contentScrollTime: contentScrollTimeReducer,
  currentScrollTime: currentScrollTimeReducer
});

export { settingReducer };
