import { DISCOVER } from "../../actions";

const userDiscoverListReducer = (state = [], action) => {
  switch (action.type) {
    case DISCOVER.CLEAR_USER_DISCOVER_LIST:
      return [];
    case DISCOVER.LOAD_USER_DISCOVER_LIST_SUCCESS:
      return action.userDiscoverList;
    default:
      return state;
  }
};

export default userDiscoverListReducer;
