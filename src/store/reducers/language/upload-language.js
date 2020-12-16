import { LANGUAGE, UPLOAD } from "../../actions";
import { indexOf, remove } from "lodash";

const uploadLanguageReducer = (state = [], action) => {
  switch (action.type) {
    case UPLOAD.CLEAR:
    case LANGUAGE.CLEAR:
      return [];
    case LANGUAGE.UPLOAD_LANGUAGE: {
      const languageList = [...state];
      if (indexOf(languageList, action.uploadLanguage) === -1) {
        languageList.push(action.uploadLanguage);
      } else {
        remove(languageList, el => action.uploadLanguage === el);
      }
      return languageList;
    }
    case LANGUAGE.UPDATE_UPLOAD_LANGUAGE:
      return [...action.languages];
    default:
      return state;
  }
};

export default uploadLanguageReducer;
