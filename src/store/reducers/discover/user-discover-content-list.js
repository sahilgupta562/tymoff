import { DISCOVER } from "../../actions";

const userDiscoverContentListReducer = (state = [], action) => {
  switch (action.type) {
    case DISCOVER.CLEAR_USER_DISCOVER_CONTENT_LIST:
      return [];
    case DISCOVER.LOAD_USER_DISCOVER_CONTENT_LIST_SUCCESS:
      return action.userDiscoverContentList;
    default:
      return state;
  }
};

export default userDiscoverContentListReducer;
