import { http, headerOptions } from "../core";
import { URL } from "./_urls.js";
import { get } from "lodash";

const apiFetchNotification = async token => {
  const response = await http.get(URL.NOTIFICATION_API(), headerOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

export { apiFetchNotification };
