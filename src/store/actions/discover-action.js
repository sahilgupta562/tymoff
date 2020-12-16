import { DISCOVER } from "./action-types";

const loadDiscoverList = () => ({
  type: DISCOVER.LOAD_DISCOVER_LIST
});

const clearDiscoverList = () => ({
  type: DISCOVER.CLEAR_DISCOVER_LIST
});

const setDiscoverList = discoverList => ({
  type: DISCOVER.LOAD_DISCOVER_LIST_SUCCESS,
  discoverList
});

const loadUserDiscoverList = () => ({
  type: DISCOVER.LOAD_USER_DISCOVER_LIST
});

const clearUserDiscoverList = () => ({
  type: DISCOVER.CLEAR_USER_DISCOVER_LIST
});

const setUserDiscoverList = userDiscoverList => ({
  type: DISCOVER.LOAD_USER_DISCOVER_LIST_SUCCESS,
  userDiscoverList
});

const setDiscoverError = error => ({
  type: DISCOVER.LOAD_FAILED,
  error
});

const setDiscoverContentList = discoverContentList => ({
  type: DISCOVER.LOAD_DISCOVER_CONTENT_LIST_SUCCESS,
  discoverContentList
});

const setUserDiscoverContentList = userDiscoverContentList => ({
  type: DISCOVER.LOAD_USER_DISCOVER_CONTENT_LIST_SUCCESS,
  userDiscoverContentList
});

export { loadDiscoverList, clearDiscoverList, setDiscoverList, loadUserDiscoverList, clearUserDiscoverList, setUserDiscoverList, setDiscoverError, setDiscoverContentList, setUserDiscoverContentList };
