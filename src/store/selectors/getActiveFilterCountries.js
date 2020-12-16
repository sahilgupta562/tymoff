import { createSelector } from "reselect";
import { includes } from "lodash";

const getSelectedCountries = state => state.content.filter.countriesList;
const getCountries = state => state.master.countries;

const getActiveFilterCountries = createSelector(
  [getSelectedCountries, getCountries],
  (selectedCountries, countries) => {
    return countries.reduce((u, p) => {
      if (includes(selectedCountries, p.id)) {
        u.push(p.name);
      }
      return u;
    }, []);
  }
);

export default getActiveFilterCountries;
