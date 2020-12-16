import { http, headerOptions } from "../core";
import { URL } from "./_urls.js";
import { get } from "lodash";

const apiSendFeedback = async (feedbackData, token) => {
  const response = await http.put(URL.FEEDBACK_API(), feedbackData, headerOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

export { apiSendFeedback };
