import { DISCOVER } from "../../actions";

const discoverContentListReducer = (state = [], action) => {
  switch (action.type) {
    case DISCOVER.CLEAR_DISCOVER_CONTENT_LIST:
      return [];
    case DISCOVER.LOAD_DISCOVER_CONTENT_LIST_SUCCESS:
      return action.discoverContentList;
    default:
      return state;
  }
};

export default discoverContentListReducer;
