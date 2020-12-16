import { MASTER } from "../../actions";

const languageReducer = (state = [], action) => {
  switch (action.type) {
    case MASTER.CLEAR:
      return [];
    case MASTER.LOAD_LANGUAGE:
      return action.languages;
    default:
      return state;
  }
};

export default languageReducer;
