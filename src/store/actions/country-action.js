import { COUNTRY } from "./action-types";

const clearCountry = () => ({
  type: COUNTRY.CLEAR
});

const setFilterCountry = filterCountry => ({
  type: COUNTRY.FILTER_COUNTRY,
  filterCountry
});

const setLoginCountry = loginCountry => ({
  type: COUNTRY.LOGIN_COUNTRY,
  loginCountry
});

const clearSearchCountry = () => ({
  type: COUNTRY.CLEAR_SEARCH
});

const setSearchCountry = searchText => ({
  type: COUNTRY.SEARCH_COUNTRY,
  searchText
});

export { clearCountry, setFilterCountry, setLoginCountry, clearSearchCountry, setSearchCountry };
