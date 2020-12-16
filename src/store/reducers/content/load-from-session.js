import { CONTENT } from "../../actions";

const sessionLoadReducer = (state = false, action) => {
  switch (action.type) {
    case CONTENT.LOAD_SESSION:
      return true;
    case CONTENT.LOAD_WEBSITE:
      return false;
    default:
      return state;
  }
};

export default sessionLoadReducer;
