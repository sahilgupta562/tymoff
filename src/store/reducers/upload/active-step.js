import { UPLOAD } from "../../actions";
import { UploadStep } from "../../../constant";

const activeStepReducer = (state = UploadStep.DATA, action) => {
  switch (action.type) {
    case UPLOAD.CLEAR:
    case UPLOAD.CLEAR_CONTENT:
      return UploadStep.DATA;
    case UPLOAD.SET_UPLOAD_STEP:
      return action.step;
    default:
      return state;
  }
};

export default activeStepReducer;
