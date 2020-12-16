import { SEARCH } from "../../actions";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH.CLEAR:
    case SEARCH.CLEAR_RESULT:
      return [];
    case SEARCH.LOAD_SUCCESS:
      return action.searchResults;
    default:
      return state;
  }
};

export default dataReducer;
