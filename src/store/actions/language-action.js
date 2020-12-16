import { LANGUAGE } from "./action-types";

const clearLanguage = () => ({
  type: LANGUAGE.CLEAR
});

const setFilterLanguage = filterLanguage => ({
  type: LANGUAGE.FILTER_LANGUAGE,
  filterLanguage
});

const setUploadLanguage = uploadLanguage => ({
  type: LANGUAGE.UPLOAD_LANGUAGE,
  uploadLanguage
});

const updateUploadLanguage = languages => ({
  type: LANGUAGE.UPDATE_UPLOAD_LANGUAGE,
  languages
});

const clearSearchLanguage = () => ({
  type: LANGUAGE.CLEAR_SEARCH
});

const setSearchLanguage = searchText => ({
  type: LANGUAGE.SEARCH_LANGUAGE,
  searchText
});

export { clearLanguage, setFilterLanguage, setUploadLanguage, updateUploadLanguage, setSearchLanguage, clearSearchLanguage };
