import { UPLOAD, LANGUAGE } from "../../actions";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case UPLOAD.SET_ACTIVE_TAB:
    case UPLOAD.SET_UPLOAD_IMAGE:
    case UPLOAD.SET_UPLOAD_IMAGE_DESCRIPTION:
    case UPLOAD.SET_UPLOAD_STORY_DESCRIPTION:
    case UPLOAD.SET_UPLOAD_STORY_TITLE:
    case UPLOAD.SET_UPLOAD_VIDEO:
    case UPLOAD.SET_UPLOAD_VIDEO_DESCRIPTION:
    case UPLOAD.SET_UPLOAD_WEBLINK:
    case UPLOAD.CLEAR_CONTENT:
    case UPLOAD.SET_UPLOAD_STEP:
      return null;
    case UPLOAD.SET_UPLOAD_ERROR:
      return action.error;
    case UPLOAD.CLEAR:
    case UPLOAD.CLEAR_ERROR:
      return null;
    case LANGUAGE.UPLOAD_LANGUAGE:
    case LANGUAGE.UPDATE_UPLOAD_LANGUAGE:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
