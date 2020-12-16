import { http, headerOptions } from "../core";
import { URL } from "./_urls.js";
import { get } from "lodash";

const apiClearHistory = async token => {
  const response = await http.get(URL.CLEAR_HISTORY_API(), headerOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

const apiLogout = async token => {
  const response = await http.get(URL.LOGOUT_API(), headerOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

const apiRestrictedMode = async (isAdultContentHide, token) => {
  const response = await http.put(URL.SETTING_API(), { isAdultContentHide }, headerOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

export { apiClearHistory, apiLogout, apiRestrictedMode };
