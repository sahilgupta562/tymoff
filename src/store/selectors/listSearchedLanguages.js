import { createSelector } from "reselect";

const getLanguages = state => state.master.languages;
const getSearchLanguage = state => state.language.searchLanguage;

const listSearchedLanguages = createSelector([getLanguages, getSearchLanguage], (languages, searchLanguage) => {
  const filteredLanguages = searchLanguage ? languages.filter(language => language.nameUtf8.toLowerCase().includes(searchLanguage.toLowerCase())) : languages;
  return [...filteredLanguages];
});

export default listSearchedLanguages;
