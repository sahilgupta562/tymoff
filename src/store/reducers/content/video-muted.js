import { CONTENT } from "../../actions";

const videoMutedReducer = (state = false, action) => {
  switch (action.type) {
    case CONTENT.MUTE_VIDEO:
      return true;
    case CONTENT.UNMUTE_VIDEO:
      return false;
    default:
      return state;
  }
};

export default videoMutedReducer;
