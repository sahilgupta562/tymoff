import { http } from "../core";
import { URL } from "./_urls.js";
import { get } from "lodash";

const apiFetchMeta = async () => {
  const response = await http.get(URL.META_API());
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

export { apiFetchMeta };
