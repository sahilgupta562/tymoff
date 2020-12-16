import { UPLOAD } from "../../actions";

const videoDescriptionReducer = (state = "", action) => {
  switch (action.type) {
    case UPLOAD.CLEAR:
    case UPLOAD.CLEAR_CONTENT:
      return "";
    case UPLOAD.SET_UPLOAD_VIDEO_DESCRIPTION:
      return action.description;
    default:
      return state;
  }
};

export default videoDescriptionReducer;
