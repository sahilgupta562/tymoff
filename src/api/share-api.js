import { http } from "../core";
import { URL } from "./_urls.js";
import { get } from "lodash";

const apiShareLink = async data => {
  const response = await http.post(URL.FIREBASE_API(), data);
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

export { apiShareLink };
