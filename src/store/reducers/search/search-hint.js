import { SEARCH } from "../../actions";

const searchHintReducer = (state = "", action) => {
  switch (action.type) {
    case SEARCH.CLEAR:
      return "";
    case SEARCH.LOAD:
      return action.searchHint;
    default:
      return state;
  }
};

export default searchHintReducer;
