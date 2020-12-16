import { createSelector } from "reselect";

const getCountries = state => state.master.countries;
const getSearchCountry = state => state.country.searchCountry;

const listSearchedCountries = createSelector([getCountries, getSearchCountry], (countries, searchCountry) => {
  const filteredCountries = searchCountry ? countries.filter(country => country.name.toLowerCase().includes(searchCountry.toLowerCase())) : countries;
  return [...filteredCountries];
});

export default listSearchedCountries;
