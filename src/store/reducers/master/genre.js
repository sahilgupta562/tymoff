import { MASTER } from "../../actions";

const genreReducer = (state = [], action) => {
  switch (action.type) {
    case MASTER.CLEAR:
      return [];
    case MASTER.LOAD_GENRE:
      return action.genres;
    default:
      return state;
  }
};

export default genreReducer;
