import { UPLOAD } from "../../actions";

const contentFileReducer = (state = [], action) => {
  switch (action.type) {
    case UPLOAD.CLEAR_CONTENT:
      return [];
    case UPLOAD.SET_CONTENT_FILES:
      return [...state, action.contentFiles];
    default:
      return state;
  }
};

export default contentFileReducer;
