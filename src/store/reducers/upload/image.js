import { UPLOAD } from "../../actions";

const imageReducer = (state = [], action) => {
  switch (action.type) {
    case UPLOAD.CLEAR:
    case UPLOAD.CLEAR_CONTENT:
      return [];
    case UPLOAD.SET_UPLOAD_IMAGE: {
      return [...state, action.images];
    }
    case UPLOAD.UPDATE_UPLOAD_IMAGE:
      return [...action.images];
    default:
      return state;
  }
};

export default imageReducer;
