import { MASTER } from "../../actions";

const videoFormatReducer = (state = [], action) => {
  switch (action.type) {
    case MASTER.CLEAR:
      return [];
    case MASTER.LOAD_VIDEO_FORMAT:
      return action.videoFormats;
    default:
      return state;
  }
};

export default videoFormatReducer;
