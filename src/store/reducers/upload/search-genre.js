import { UPLOAD } from "../../actions";

const searchGenreReducer = (state = "", action) => {
  switch (action.type) {
    case UPLOAD.CLEAR_SEARCH:
      return "";
    case UPLOAD.SEARCH_GENRE:
      return action.searchText;
    default:
      return state;
  }
};

export default searchGenreReducer;
