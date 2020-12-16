import { DISCOVER } from "../../actions";

const discoverListReducer = (state = [], action) => {
  switch (action.type) {
    case DISCOVER.CLEAR_DISCOVER_LIST:
      return [];
    case DISCOVER.LOAD_DISCOVER_LIST_SUCCESS:
      return action.discoverList;
    default:
      return state;
  }
};

export default discoverListReducer;
