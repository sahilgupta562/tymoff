import { UPLOAD } from "../../actions";

const storyTitleReducer = (state = "", action) => {
  switch (action.type) {
    case UPLOAD.CLEAR:
    case UPLOAD.CLEAR_CONTENT:
      return "";
    case UPLOAD.SET_UPLOAD_STORY_TITLE:
      return action.title;
    default:
      return state;
  }
};

export default storyTitleReducer;
