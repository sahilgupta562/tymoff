import { SETTING } from "./action-types";

const enableDarkMode = () => ({
  type: SETTING.ENABLE_DARK_THEME
});

const disableDarkMode = () => ({
  type: SETTING.DISABLE_DARK_THEME
});

const enableRestrictedMode = () => ({
  type: SETTING.ENABLE_RESTRICTED_MODE
});

const disableRestrictedMode = () => ({
  type: SETTING.DISABLE_RESTRICTED_MODE
});

const clearHistory = () => ({
  type: SETTING.CLEAR_HISTORY
});

const clearSetting = () => ({
  type: SETTING.CLEAR
});

const logout = () => ({
  type: SETTING.LOG_OUT
});

const changeContentScrollTime = contentScrollTime => ({
  type: SETTING.CHANGE_SCROLL_TIME,
  contentScrollTime
});

const setCurrentContentScrollTime = currentScrollTime => ({
  type: SETTING.SET_SCROLL_TIME,
  currentScrollTime
});

export { enableDarkMode, disableDarkMode, enableRestrictedMode, disableRestrictedMode, clearHistory, logout, clearSetting, changeContentScrollTime, setCurrentContentScrollTime };
