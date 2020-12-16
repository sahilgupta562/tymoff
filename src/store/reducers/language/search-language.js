import { LANGUAGE } from "../../actions";

const searchLanguageReducer = (state = "", action) => {
  switch (action.type) {
    case LANGUAGE.CLEAR_SEARCH:
      return "";
    case LANGUAGE.SEARCH_LANGUAGE:
      return action.searchText;
    default:
      return state;
  }
};

export default searchLanguageReducer;
