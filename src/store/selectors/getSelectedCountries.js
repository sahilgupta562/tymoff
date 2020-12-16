import { createSelector } from "reselect";
import { ModalAction } from "../../constant";

const getFilterCountry = state => state.country.filterCountry;
const getLoginCountry = state => state.country.loginCountry;
const getModalAction = state => state.ui.modalAction;
const getCountries = state => state.master.countries;

const getSelectedCountries = createSelector([getModalAction, getFilterCountry, getLoginCountry, getCountries], (action, filterCountry, loginCountry, countries) => {
  switch (action) {
    case ModalAction.FILTER:
      return filterCountry;
    case ModalAction.LOGIN: {
      const countryIds = [];
      const selectedCountries = loginCountry.countryCode ? countries.filter(country => country.isoCode === loginCountry.countryCode) : [];
      !!selectedCountries.length && countryIds.push(selectedCountries[0].id);
      return [...countryIds];
    }
    default:
      return [];
  }
});

export default getSelectedCountries;
