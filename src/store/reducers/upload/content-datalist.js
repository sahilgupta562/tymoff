import { UPLOAD } from "../../actions";

const contentDatalistReducer = (state = [], action) => {
  switch (action.type) {
    case UPLOAD.CLEAR_CONTENT:
      return [];
    case UPLOAD.SET_CONTENT_DATA_LIST:
      return [...state, action.contentData];
    case UPLOAD.UPDATE_CONTENT_DATA_LIST:
      return action.contentData;
    default:
      return state;
  }
};

export default contentDatalistReducer;
