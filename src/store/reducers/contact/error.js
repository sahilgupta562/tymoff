import { CONTACT } from "../../actions";

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case CONTACT.CLEAR:
            return null;
        case CONTACT.LOAD_FAILED:
            return action.error;
        case CONTACT.SEND_CONTACT:
        case CONTACT.SET_CONTACT_NAME:
        case CONTACT.SET_CONTACT_EMAIL:
        case CONTACT.SET_CONTACT_MESSAGE:
            return null;
        default:
            return state;
    }
};

export default errorReducer;