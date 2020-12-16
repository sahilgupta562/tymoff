import { CONTENT } from "../../actions";

const cacheContentReducer = (state = false, action) => {
  switch (action.type) {
    case CONTENT.LOAD_CONTENT_FROM_CACHE:
      return true;
    case CONTENT.LOAD_CONTENT_FROM_API:
      return false;
    default:
      return state;
  }
};

export default cacheContentReducer;
