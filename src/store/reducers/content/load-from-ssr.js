import { CONTENT } from "../../actions";

const ssrContentLoadReducer = (state = false, action) => {
  switch (action.type) {
    case CONTENT.LOAD_SSR:
      return true;
    case CONTENT.LOAD_CLIENT:
      return false;
    default:
      return state;
  }
};

export default ssrContentLoadReducer;
