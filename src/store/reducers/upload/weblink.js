import { UPLOAD } from "../../actions";

const weblinkReducer = (state = "", action) => {
  switch (action.type) {
    case UPLOAD.CLEAR:
    case UPLOAD.CLEAR_CONTENT:
      return "";
    case UPLOAD.SET_UPLOAD_WEBLINK:
      return action.weblink;
    default:
      return state;
  }
};

export default weblinkReducer;
