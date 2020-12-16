import { UPLOAD, UI } from "../../actions";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case UPLOAD.PUBLISH_UPLOAD:
      return true;
    case UI.CLOSE_MODAL:
      return false;
    case UPLOAD.SET_UPLOAD_ERROR:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
