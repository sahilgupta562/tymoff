import { UPLOAD } from "../../actions";

const videoReducer = (state = [], action) => {
  switch (action.type) {
    case UPLOAD.CLEAR:
    case UPLOAD.CLEAR_CONTENT:
      return [];
    case UPLOAD.SET_UPLOAD_VIDEO:
      return [...state, action.videos];
    case UPLOAD.UPDATE_UPLOAD_VIDEO:
      return [...action.videos];
    default:
      return state;
  }
};

export default videoReducer;
