import { UPLOAD } from "../../actions";
import { indexOf, remove } from "lodash";

const uploadGenreReducer = (state = [], action) => {
  switch (action.type) {
    case UPLOAD.CLEAR:
    case UPLOAD.CLEAR_CONTENT:
    case UPLOAD.CLEAR_UPLOAD_GENRE:
      return [];
    case UPLOAD.SET_UPLOAD_GENRE: {
      const genreList = [...state];
      if (indexOf(genreList, action.uploadGenre) === -1) {
        genreList.push(action.uploadGenre);
      } else {
        remove(genreList, el => action.uploadGenre === el);
      }
      return genreList;
    }
    default:
      return state;
  }
};

export default uploadGenreReducer;
