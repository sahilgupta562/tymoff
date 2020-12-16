import { createSelector } from "reselect";
import { ModalAction } from "../../constant";

const getFilterLanguage = state => state.language.filterLanguage;
const getUploadLanguage = state => state.language.uploadLanguage;
const getModalAction = state => state.ui.modalAction;

const getSelectedLanguages = createSelector(
  [getModalAction, getFilterLanguage, getUploadLanguage],
  (action, filterLanguage, uploadLanguage) => {
    switch (action) {
      case ModalAction.FILTER:
        return filterLanguage;
      case ModalAction.UPLOAD:
        return uploadLanguage;
      default:
        return [];
    }
  }
);

export default getSelectedLanguages;
