import { http, headerOptions } from "../core";
import { URL } from "./_urls.js";
import { setDiscoverList, setDiscoverContentList } from "../store";
import { get, map, pick, isEmpty } from "lodash";

const apiFetchDiscoverList = async () => {
  const response = await http.get(URL.DISCOVER_OPTION_API());
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

const apiFetchDiscoverListOnServer = store => {
  return http
    .get(URL.DISCOVER_OPTION_API())
    .then(function(response) {
      if (response.success) {
        const discover = get(response, "data.discover", []);
        const discoverList = map(discover, item => pick(item, ["id", "name"]));
        const discoverContentList = map(discover, item => pick(item, ["id", "name", "contentList"]));
        store.dispatch(setDiscoverList(discoverList));
        store.dispatch(setDiscoverContentList(discoverContentList));
        return !isEmpty(response.data) ? true : false;
      }
      return false;
    })
    .catch(error => {
      store.dispatch(setDiscoverList([]));
      store.dispatch(setDiscoverContentList([]));
      return false;
    });
};

const apiFetchUserDiscoverList = async token => {
  const response = await http.get(URL.USER_DISCOVER_API(), headerOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

export { apiFetchDiscoverList, apiFetchUserDiscoverList, apiFetchDiscoverListOnServer };
