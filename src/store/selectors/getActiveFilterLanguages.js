import { createSelector } from "reselect";
import { includes } from "lodash";

const getSelectedLanguages = state => state.content.filter.languagesList;
const getLanguages = state => state.master.languages;

const getActiveFilterLanguages = createSelector(
  [getSelectedLanguages, getLanguages],
  (selectedLanguages, languages) => {
    return languages.reduce((u, p) => {
      if (includes(selectedLanguages, p.id)) {
        u.push(p.nameUtf8);
      }
      return u;
    }, []);
  }
);

export default getActiveFilterLanguages;
