import { COUNTRY } from "../../actions";

const searchCountryReducer = (state = "", action) => {
  switch (action.type) {
    case COUNTRY.CLEAR_SEARCH:
      return "";
    case COUNTRY.SEARCH_COUNTRY:
      return action.searchText;
    default:
      return state;
  }
};

export default searchCountryReducer;
