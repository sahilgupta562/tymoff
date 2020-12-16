import { UPLOAD } from "../../actions";
import { UploadTab } from "../../../constant";

const activeTabReducer = (state = UploadTab.IMAGE, action) => {
  switch (action.type) {
    case UPLOAD.CLEAR:
    case UPLOAD.CLEAR_CONTENT:
      return UploadTab.IMAGE;
    case UPLOAD.SET_ACTIVE_TAB:
      return action.tab;
    default:
      return state;
  }
};

export default activeTabReducer;
