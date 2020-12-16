import { SHARE } from "../../actions";

const shareTypeReducer = (state = "content", action) => {
  switch (action.type) {
    case SHARE.SHARE_TYPE:
      return action.shareType;
    default:
      return state;
  }
};

export default shareTypeReducer;
