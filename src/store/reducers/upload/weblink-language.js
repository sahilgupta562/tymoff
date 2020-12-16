import { UPLOAD } from "../../actions";

const weblinkLanguageReducer = (state = [], action) => {
  switch (action.type) {
    case UPLOAD.CLEAR:
    case UPLOAD.CLEAR_CONTENT:
      return [];
    case UPLOAD.SET_UPLOAD_WEB_LANGUAGE:
      return action.languages;
    default:
      return state;
  }
};

export default weblinkLanguageReducer;
