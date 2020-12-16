import { COUNTRY } from "../../actions";
import { indexOf, remove } from "lodash";

const filterCountryReducer = (state = [], action) => {
  switch (action.type) {
    case COUNTRY.CLEAR:
      return [];
    case COUNTRY.FILTER_COUNTRY: {
      const countryList = [...state];
      if (indexOf(countryList, action.filterCountry) === -1) {
        countryList.push(action.filterCountry);
      } else {
        remove(countryList, el => action.filterCountry === el);
      }
      return countryList;
    }
    default:
      return state;
  }
};

export default filterCountryReducer;
