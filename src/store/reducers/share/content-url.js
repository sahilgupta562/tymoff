import { SHARE } from "../../actions";

const contentUrlReducer = (state = "", action) => {
  switch (action.type) {
    case SHARE.CLEAR:
      return "";
    case SHARE.SET_CONTENT_URL:
      return action.contentUrl;
    default:
      return state;
  }
};

export default contentUrlReducer;
