import { CONTACT } from "../../actions";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case CONTACT.SEND_CONTACT:
      return true;
    case CONTACT.LOAD_FAILED:
    case CONTACT.CLEAR:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
