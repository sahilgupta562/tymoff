import { UPLOAD } from "../../actions";

const contentPreviewReducer = (state = [], action) => {
  switch (action.type) {
    case UPLOAD.CLEAR_CONTENT:
    case UPLOAD.CLEAR_PREVIEW_FILES:
      return [];
    case UPLOAD.SET_CONTENT_PREVIEW:
      return [...state, action.prevContent];
    default:
      return state;
  }
};

export default contentPreviewReducer;
