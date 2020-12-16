import { http } from "../core";
import { URL } from "./_urls.js";

const apiFetchCompany = async () => {
  const response = await http.get(URL.COMPANY_LIST_API());
  if (response && response.state >= 400) {
    throw new Error(response.statusText);
  }
  return response || null;
};

export { apiFetchCompany };
