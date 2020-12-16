import { CONTACT } from "../../actions";

const contactMessageReducer = (state = "", action) => {
  switch (action.type) {
    case CONTACT.CLEAR:
      return "";
    case CONTACT.SET_CONTACT_MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export default contactMessageReducer;
