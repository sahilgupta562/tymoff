import { http } from "../core";
import { URL } from "./_urls.js";

const apiLogin = async data => {
  const response = await http.post(URL.LOGIN_API(), data);
  if (response && response.state >= 400) {
    throw new Error(response.statusText);
  }
  return response || null;
};

export { apiLogin };
