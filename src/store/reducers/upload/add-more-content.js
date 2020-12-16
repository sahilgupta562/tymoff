import { UPLOAD } from "../../actions";

const addMoreContentReducer = (state = false, action) => {
  switch (action.type) {
    case UPLOAD.CLEAR:
    case UPLOAD.CLEAR_CONTENT:
    case UPLOAD.RESET_ADD_MORE_CONTENT:
      return false;
    case UPLOAD.ADD_MORE_CONTENT:
      return true;
    case UPLOAD.PUBLISH_UPLOAD:
      return false;
    default:
      return state;
  }
};

export default addMoreContentReducer;
