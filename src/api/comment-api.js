import { get } from "lodash";
import { http, headerOptions } from "../core";
import { URL } from "./_urls.js";

const apiFetchComment = async (contentId, token) => {
  const response = await http.get(URL.COMMENT_LIST_API(contentId), headerOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

const apiAddComment = async (comment, token) => {
  const response = await http.put(URL.COMMENT_PUT_API(), comment, headerOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

export { apiFetchComment, apiAddComment };
