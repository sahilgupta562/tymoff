import { combineReducers } from "redux";
import filterCountryReducer from "./filter-country";
import loginCountryReducer from "./login-country";
import searchCountryReducer from "./search-country";

const countryReducer = combineReducers({
  filterCountry: filterCountryReducer,
  loginCountry: loginCountryReducer,
  searchCountry: searchCountryReducer
});

export { countryReducer };
