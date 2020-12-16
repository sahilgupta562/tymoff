import { LANGUAGE } from "../../actions";
import { indexOf, remove } from "lodash";

const filterLanguageReducer = (state = [], action) => {
  switch (action.type) {
    case LANGUAGE.CLEAR:
      return [];
    case LANGUAGE.FILTER_LANGUAGE: {
      const languageList = [...state];
      if (indexOf(languageList, action.filterLanguage) === -1) {
        languageList.push(action.filterLanguage);
      } else {
        remove(languageList, el => action.filterLanguage === el);
      }
      return languageList;
    }
    default:
      return state;
  }
};

export default filterLanguageReducer;
